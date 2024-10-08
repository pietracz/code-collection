from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup

options = webdriver.FirefoxOptions()
driver = webdriver.Firefox(options=options)

driver.get("https://hornbach.de/")


searchbar = driver.find_element(By.XPATH, "/html/body/header/div[2]/div/div/div/div/form/input")
searchbar.send_keys("Schrauben")
searchbar.send_keys(Keys.ENTER)

element = driver.find_element(By.ID,"usercentrics-root")
driver.execute_script("""
var element = arguments[0];
element.parentNode.removeChild(element);
""", element)


searchField = driver.find_element(By.XPATH,'//*[@id="hbhd-mount"]/div/form/input')
part3: searchField.send_keys("Schrauben")
searchField.send_keys(Keys.RETURN)

preisElement= driver.find_element(By.XPATH, '//*[@id="mount"]/div/main/div[1]/div[10]/div[9]/div[1]/div[2]/div[3]/div/div/span[1]')

print(preisElement.text)

soup = BeautifulSoup(driver.page_source, 'html.parser')
print(soup.prettify())