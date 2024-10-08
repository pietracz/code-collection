#!/bin/bash

sudo yum update -y
sudo yum upgrade -y

curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo yum install -y nodejs git
sudo npm install -g pm2

export USER_DIR="/home/ec2-user/"
export APP_DIR="$USER_DIR/Tiere-app"
export BACKEND_DIR="$APP_DIR/backend"
export FRONTEND_DIR="$APP_DIR/frontend"
export PROMETHEUS_DIR="$USER_DIR/prometheus"
export NODE_EXPORTER_DIR="$USER_DIR/node_exporter"

# -q: Quiet mode (kein Fortschrittsanzeige).
# -O: Output to file (Ausgabe in Datei).
# wget ruft ifconfig.me, mit den Parametern -q und -O auf
export PUBLIC_IP_ADDRESS=$(wget -qO- ifconfig.me)

mkdir -p $APP_DIR $PROMETHEUS_DIR $NODE_EXPORTER_DIR

# Rechte und Eigentumsvergabe der Ordner 
sudo chown -R ec2-user:ec2-user /home/ec2-user/prometheus
sudo chmod -R 755 /home/ec2-user/prometheus

sudo chown -R ec2-user:ec2-user /home/ec2-user/node_exporter
sudo chmod -R 755 /home/ec2-user/node_exporter

sudo chown -R ec2-user:ec2-user /home/ec2-user/Tiere-App
sudo chmod -R 755 /home/ec2-user/Tiere-App


sudo -u ec2-user -i <<EOF
# -P gibt den Pfad an, in dem die Datei gespeichert werden soll
# --strip 1 gibt an, wie viele Unterordner entfernt werden sollen
# -C gibt den Zielordner an, wohin entpackt werden soll
sudo wget -P "$NODE_EXPORTER_DIR" https://github.com/prometheus/node_exporter/releases/download/v1.8.2/node_exporter-1.8.2.linux-amd64.tar.gz
sudo tar xvfz "$NODE_EXPORTER_DIR/node_exporter-1.8.2.linux-amd64.tar.gz" --strip 1 -C "$NODE_EXPORTER_DIR"

# -P gibt den Pfad an, in dem die Datei gespeichert werden soll
# --strip 1 gibt an, wie viele Unterordner entfernt werden sollen
# -C gibt den Zielordner an, wohin entpackt werden soll
sudo wget -P $PROMETHEUS_DIR https://github.com/prometheus/prometheus/releases/download/v2.53.1/prometheus-2.53.1.linux-amd64.tar.gz
sudo tar xvfz $PROMETHEUS_DIR/prometheus-2.53.1.linux-amd64.tar.gz --strip 1 -C $PROMETHEUS_DIR
EOF

# Schreibt node-exporter.yml mit folgendem Inhalt:
cat << EOF > $PROMETHEUS_DIR/node-exporter.yml
global:
  scrape_interval:     15s 
  evaluation_interval: 15s

scrape_configs:
  - job_name: 'node_exporter'
    static_configs:
      - targets: ["$PUBLIC_IP_ADDRESS:9100"]
  - job_name: 'backend'
    static_configs:
      - targets: ["$PUBLIC_IP_ADDRESS:3005"]
EOF

cd "$USER_DIR"

#Importiert den GPG Schlüssel
sudo -u ec2-user -i << EOF 
wget -q -O gpg.key https://rpm.grafana.com/gpg.key
sudo rpm --import gpg.key
EOF

# Erstellt grafana.repo mit folgendem Inhalt:
sudo cat << EOF > /etc/yum.repos.d/grafana.repo
[grafana]
name=grafana
baseurl=https://rpm.grafana.com
repo_gpgcheck=1
enabled=1
gpgcheck=1
gpgkey=https://rpm.grafana.com/gpg.key
sslverify=1
sslcacert=/etc/pki/tls/certs/ca-bundle.crt
EOF

sudo yum install -y https://dl.grafana.com/oss/release/grafana-11.1.3-1.x86_64.rpm

# Erstellt eine neue Shell-Datei, um sie mit PM2 starten zu können
cat <<EOF > "$USER_DIR"/grafana-server-start.sh
#!/bin/bash
sudo systemctl daemon-reload
sudo systemctl start grafana-server
sudo systemctl status grafana-server
EOF

# Setzt Ausführungsrechte
chmod +x "$USER_DIR"/grafana-server-start.sh

# Repo klonen
sudo git clone https://github.com/suheib96/Tiere-app.git "$APP_DIR"

# Abhängigkeiten installieren (--prefix zielt dass Zielverzeichnis am)
sudo npm install --prefix "$BACKEND_DIR"
sudo npm install --prefix "$FRONTEND_DIR"

# Ports zuweisen
cat << EOF > $FRONTEND_DIR/.env
REACT_APP_BACKEND_API_URL=http://$PUBLIC_IP_ADDRESS:3005
EOF

# Starte Server - sudo -u ec2-user -i <<EOF - Führt Code als ec2-user aus
sudo -u ec2-user -i <<EOF

# PM2 für startup speichern
pm2 startup
# PM2 Einstellungen unter ec2-user einrichten
env PATH=$PATH:/usr/bin /usr/local/lib/node_modules/pm2/bin/pm2 startup systemd -u ec2-user --hp /home/ec2-user

# Starte Server
cd $NODE_EXPORTER_DIR
pm2 start ./node_exporter --name node_exporter
echo "Server läuft auf http://$PUBLIC_IP_ADDRESS:9100"
sleep 5
cd $PROMETHEUS_DIR
pm2 start ./prometheus -- --config.file=node-exporter.yml
echo "Server läuft auf http://$PUBLIC_IP_ADDRESS:9090"
sleep 5
# Starte Back-End
cd $BACKEND_DIR
pm2 start npm --name "backend" -- start
sleep 5
# Starte Frontend
cd $FRONTEND_DIR
PORT=3001 pm2 start npm --name "frontend" -- start
sleep 5
cd $USER_DIR
pm2 start ./grafana-server-start.sh
echo "Server läuft auf http://$PUBLIC_IP_ADDRESS:3000"
sudo systemctl enable grafana-server.service

# PM2 Liste speichern
pm2 save
pm2 startup
EOF

sudo pm2 restart all

# Logfile für das User Data Script
cat /var/log/cloud-init-output.log
tail -f /var/log/cloud-init-output.log

# curl wird primär dafür genutzt, um die Quelle unserer Daten anzugeben und zu übertragen.
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
# curl: Ein Kommandozeilen-Tool zum Übertragen von Daten über verschiedene Protokolle, in diesem Fall HTTPS.
# -f: Fail silently (Fehler ohne Ausgabe unterdrücken).
# -s: Silent mode (keine Fortschrittsanzeige).
# -S: Show error (Fehlermeldungen anzeigen, wenn der Download fehlschlägt).
# -L: Follow redirects (Umleitungen folgen, falls die URL geändert wurde) 
# https://rpm.nodesource.com/setup_20.x: Die URL des Setup-Skripts von Nodesource, das die Konfiguration für die Installation von Node.js Version 20.x übernimmt.

pm2 start ./prometheus --name prometheus --watch
pm2 start npm --name "backend" -- start
PORT=3001 pm2 start npm --name "frontend" -- start

# PM2 Logs ausgeben
pm2 logs Instanz-Name

# Grafana Server starten wenn System startet
sudo systemctl enable grafana-server.service

sudo yum install openssh-server
sudo systemctl enable sshd
sudo systemctl start sshd
sudo systemctl status sshd
#Windows Powershell Anmeldung auf EC2 Instanz
ssh -i .ssh/admin.pem ec2-user@ip addr
#Abmelden
exit

# SSH Key generieren
ssh-keygen -t rsa -b 2048 -f ~/.ssh/admin.pem

# ssh sicherheits einstellungen
Include /etc/ssh/sshd_config.d/*.conf

# Deckt versteckte Daten auf
ls -la 

curl ifconfig.me 