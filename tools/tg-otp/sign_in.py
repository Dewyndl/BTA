import asyncio, os, sys, socks
from telethon import TelegramClient
from dotenv import load_dotenv

load_dotenv()
api_id = int(os.getenv('API_ID'))
api_hash = os.getenv('API_HASH')
phone = '+79850916102'
proxy = (socks.HTTP, '127.0.0.1', 3128)

async def main():
    code = sys.argv[1]
    with open('code_hash.txt') as f:
        phone_code_hash = f.read().strip()
    client = TelegramClient('session', api_id, api_hash, proxy=proxy)
    await client.connect()
    await client.sign_in(phone, code, phone_code_hash=phone_code_hash)
    print('Authenticated successfully.')
    await client.disconnect()

asyncio.run(main())
