number_input=int(input("Gib bitte eine Zahl ein: "))

if number_input <= 0:
    print("""
        Geht's noch?
    """)

elif number_input >= 0 and number_input <= 99:
    print(f"""
        Nerv nicht!
    """)

elif number_input >= 99 and number_input <= 999:
    print(f"""
        Durch den Gebrauch von // und % entsteht folgende Rechnung:
          {(number_input // 100)} + {(number_input % 100)} = {(number_input // 100) + (number_input % 100)}
    """)

elif number_input >= 999 and number_input <= 9999:
    print(f"""
        Durch den Gebrauch von // und % entsteht folgende Rechnung:
          {(number_input // 1000)} + {(number_input % 1000)} = {(number_input // 1000) + (number_input % 1000)}
    """)

elif number_input >= 9999 and number_input <= 99999:
    print(f"""
        Durch den Gebrauch von // und % entsteht folgende Rechnung:
          {(number_input // 10000)} + {(number_input % 10000)} = {(number_input // 10000) + (number_input % 10000)}
    """)

elif number_input >= 99999 and number_input <= 999999:
    print(f"""
        Durch den Gebrauch von // und % entsteht folgende Rechnung:
          {(number_input // 100000)} + {(number_input % 100000)} = {(number_input // 100000) + (number_input % 100000)}
    """)

else:
    print(f"""
          Mach es doch nicht so kompliziert, mit deiner {number_input}.
          """)

# Alternative
    
# zahl = input("Gib mir eine Zahl ein:")
# erste_stelle= int(zahl[0])
# zweite_stelle= int(zahl[1])
# print(erste_stelle + zweite_stelle)