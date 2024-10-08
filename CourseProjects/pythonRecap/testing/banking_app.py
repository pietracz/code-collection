class Account:
    def __init__(self, accountnumber, balance):
        self.accountnumber = accountnumber
        self.balance = balance

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive")
        else:
            self.balance += amount

    def withdraw(self, amount):
        if amount > self.balance:
            raise ValueError("Insufficient funds")
        else:
            self.balance -= amount

    def transfer(self, other, amount):
        if amount > self.balance:
            raise ValueError("Insufficient funds")
        elif amount <= 0:
            raise ValueError("Amount must be positive")
        else:
            self.withdraw(amount)
            other.deposit(amount)

