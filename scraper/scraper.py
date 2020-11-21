from dotenv import load_dotenv
from pathlib import Path
import os
from selenium import webdriver
from webdriver_manager.firefox import GeckoDriverManager
from selenium.webdriver.firefox.options import Options
import time
import pymongo


#PARSE VALUE FROM MEO
def getMeoPrice(driver):
    driver.get('https://www.meo.pt/servicos/casa/fibra/pacotes-tv-net-voz')
    time.sleep(15)
    offer = driver.find_element_by_xpath('//*[@id="pack_0_offers_50_canais_premium"]')
    offer.click()

    priceDiv = driver.find_element_by_xpath("/html/body/form/div[3]/div/div[2]/div/div[2]/div[4]/div[1]/div/div[1]/div/div/section/div/ul/li[1]/div[1]/div[1]/div[1]/div/h2")
    price = priceDiv.text.replace(',','.')[1:-4]
    return price

#PARSE VALUE FROM NOS
def getNosPrice(driver):
    driver.get('https://www.nos.pt/particulares/pacotes/todos-os-pacotes/Paginas/pacotes.aspx?source=menupacotes&content=topo#tab4')
    time.sleep(15)
    priceDiv = driver.find_element_by_xpath("/html/body/form/div[3]/div/section/section[2]/div[2]/div/div[9]/div[1]/div/section[1]/div[1]/article[2]/header/h3")
    price = priceDiv.text.replace(',','.')
    return price

#PARSE VALUE FROM VODAFONE
def getVodafonePrice(driver):
    driver.get('https://www.vodafone.pt/pacotes.html')
    time.sleep(15)
    #tab = driver.find_element_by_xpath('//*[@id="#3p"]');
    #tab.click();
    priceDiv = driver.find_element_by_xpath("/html/body/div[3]/div/div[1]/div[2]/div[8]/div/div/div[2]/section/div/div/div[2]/div[2]/div[1]/div/div/div/div[3]/div/div/div/div/div[2]/div/div[6]/div[2]/h2")
    price = priceDiv.text.replace(',','.')[1:-4]
    return price

#Load env variables
env_path = Path('.') / '.env'
load_dotenv(dotenv_path=env_path)

MONGO_HOST = os.getenv("MONGO_HOST");
MONGO_PORT = os.getenv("MONGO_PORT");
MONGO_DB = os.getenv("MONGO_DB");
MONGO_COLLECTION = os.getenv("MONGO_COLLECTION");

#Initailiaze Firefox webdriver
options = Options()
options.headless = True
driver = webdriver.Firefox(options=options, executable_path=GeckoDriverManager().install())

#Initailiaze Database
myclient = pymongo.MongoClient("mongodb://"+MONGO_HOST+":"+MONGO_PORT+"/")
mydb = myclient[MONGO_DB]
mycol = mydb[MONGO_COLLECTION]



#Get timestamp
timestamp = int(time.time())
print(timestamp)

#Upload MEO price
meoPrice = getMeoPrice(driver);
meoRecord = { "operator": 1, "value": meoPrice, "timestamp" : timestamp }
x = mycol.insert_one(meoRecord)
print( "MEO: " + meoPrice )


#Upload NOS price
nosPrice = getNosPrice(driver);
nosRecord = { "operator": 2, "value": nosPrice, "timestamp" : timestamp }
x = mycol.insert_one(nosRecord)
print( "NOS: " + nosPrice )


#Upload VODAFONE price
vodafonePrice = getVodafonePrice(driver);
vodafoneRecord = { "operator": 3, "value": vodafonePrice, "timestamp" : timestamp }
x = mycol.insert_one(vodafoneRecord)
print( "VODAFONE: " + vodafonePrice )


#close connections
driver.quit()
