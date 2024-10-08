import pytest
from banking_app import Account

@pytest.fixture
def TestAccount():
   return Account(1234, 1000)

""" Test 1 """

def test_deposit(TestAccount):
    TestAccount.deposit(100)
    assert TestAccount.balance == 1100

""" Test 2 """

def test_withdraw(TestAccount):
    TestAccount.withdraw(100)
    assert TestAccount.balance == 900

""" Test 3 """

def test_deposit_negative(TestAccount):
    with pytest.raises(ValueError):
        TestAccount.deposit(-100)

""" Test 4 """

def test_withdraw_insufficient_funds(TestAccount):
    with pytest.raises(ValueError):
        TestAccount.withdraw(2000)

""" Test 5 """

def test_integration(TestAccount):
    TestAccount.deposit(100)
    TestAccount.withdraw(50)
    assert TestAccount.balance == 1050

""" Test 6 """

def test_transfer(TestAccount):
    other = Account(5678, 500)
    TestAccount.transfer(other, 100)
    assert TestAccount.balance == 900
    assert other.balance == 600

""" Test 7 """

def test_workflow(TestAccount):
    other = Account(5678, 500)

    TestAccount.deposit(100)
    TestAccount.withdraw(50)

    other.deposit(100)
    other.withdraw(50)

    TestAccount.transfer(other, 10)

    assert TestAccount.balance == 1040
    assert other.balance == 560

    with pytest.raises(ValueError):
        other.transfer(TestAccount, 5000)

    with pytest.raises(ValueError):
        TestAccount.transfer(other, -10)

    with pytest.raises(ValueError):
        TestAccount.transfer(other, 0)
