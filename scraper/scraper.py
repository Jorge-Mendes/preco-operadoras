from dotenv import load_dotenv
from pathlib import Path
import os
import time
import pymongo
import requests
import json
import pandas as pd
import io
import re


headers = {
    'User-Agent': '"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"'
}

def get_tor_session():
    session = requests.session()
    # Tor uses the 9050 port as the default socks port
    session.proxies = {'http':  'socks5://127.0.0.1:9050',
                       'https': 'socks5://127.0.0.1:9050'}
    return session


#PARSE VALUE FROM VODAFONE
def getVodafonePrice():
    session = get_tor_session()
    content = session.get("https://www.vodafone.pt/content/dam/digital-sites/data-binding/jsons/3p/fibra-3-gold.json", headers=headers)
    vdf = json.loads(content.content)
    return float(vdf['baseValue'])

#PARSE VALUE FROM MEO
def getMeoPrice():
    content = requests.get('https://app-9015f501-af0b-463a-b954-ab7059b01626.apps.meo.pt/api/FixedOffer/GetCatalogBundle?storeId=1&catalogsNames=m3_f_b',headers=headers)
    meo = json.loads(content.content)
    return float(meo[0]['price']);

#PARSE VALUE FROM NOS
def getNosPrice():

    linkContent = requests.get('https://www.nos.pt/particulares/pacotes/todos-os-pacotes/Paginas/pacotes.aspx',headers=headers).text
    jsLink =  re.search("\/particulares\/pacotes\/todos-os-pacotes\/Documents\/(.+)js", linkContent)

    jsContent = requests.get('https://www.nos.pt' + jsLink.group(),headers=headers).text
    csvLink =  re.search("\/particulares\/pacotes\/todos-os-pacotes\/Documents\/(.+)csv", jsContent)


    s = requests.get('https://www.nos.pt'+csvLink.group(),headers=headers).content
    c=pd.read_csv(io.StringIO(s.decode('utf-8')), delimiter=';')

    row = c[c['idpacote'] == 'NOS3d-3499']
    return float(row['tv2net1riscado'].values[0])



#Load env variables
BASE_DIR = os.path.dirname(os.path.realpath(__file__))
env_path = os.path.join(BASE_DIR, '.env')
load_dotenv(dotenv_path=env_path)

MONGO_HOST = os.getenv("MONGO_HOST");
MONGO_PORT = os.getenv("MONGO_PORT");
MONGO_DB = os.getenv("MONGO_DB");
MONGO_COLLECTION = os.getenv("MONGO_COLLECTION");

#Initailiaze Database
myclient = pymongo.MongoClient("mongodb://"+MONGO_HOST+":"+MONGO_PORT+"/")
mydb = myclient[MONGO_DB]
mycol = mydb[MONGO_COLLECTION]



#Get timestamp
timestamp = int(time.time())*1000
print(timestamp)


#Upload VODAFONE price
vodafonePrice = getVodafonePrice();
vodafoneRecord = { "operator": 3, "value": vodafonePrice, "timestamp" : timestamp }
x = mycol.insert_one(vodafoneRecord)
print( "VODAFONE: " + str(vodafonePrice) )



#Upload MEO price
meoPrice = getMeoPrice();
meoRecord = { "operator": 1, "value": meoPrice, "timestamp" : timestamp }
x = mycol.insert_one(meoRecord)
print( "MEO: " + str(meoPrice) )


#Upload NOS price
nosPrice = getNosPrice();
nosRecord = { "operator": 2, "value": nosPrice, "timestamp" : timestamp }
x = mycol.insert_one(nosRecord)
print( "NOS: " + str(nosPrice) )
