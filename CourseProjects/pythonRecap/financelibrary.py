import yfinance as yf
import datetime as dt

current_date = dt.date.today()
user_input = input("Enter ticker symbol: ")
value = yf.Ticker(user_input)

with open ("InteressanteAktien.txt", "a") as file:
     file.write(f"Die Aktie {user_input} startete heute {current_date} mit folgendem Kurs {value.info["open"]}. Der aktuelle Preis liegt bei {value.info["currentPrice"]} \n")