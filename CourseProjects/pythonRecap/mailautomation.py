import smtplib
import os

from dotenv import load_dotenv 

user = os.getenv('EMAIL_ADDRESS')
password = os.getenv('EMAIL_PASSWORD')

load_dotenv()

server = smtplib.SMTP('smtp-mail.outlook.com', 587)

server.starttls()

server.login(user, password)

subject = input("Subject: ")
message = input("Message: ")
sender = user

subscriber = ['julian.pietracz@outlook.com']


for i in subscriber:
    message = f"""From: Julian Pietracz<{user}>\r\nTo: {i}\r\nSubject: {subject}\r\n\r{message}"""
    server.sendmail(sender, i, message)

server.quit()

""" node mailer 
https://www.npmjs.com/package/nodemailer """