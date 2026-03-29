import asyncio, os, socks
from telethon import TelegramClient
from dotenv import load_dotenv

load_dotenv()
api_id = int(os.getenv('API_ID'))
api_hash = os.getenv('API_HASH')
phone = '+79850916102'
proxy = (socks.HTTP, '127.0.0.1', 3128)

async def main():
    client = TelegramClient('session', api_id, api_hash, proxy=proxy)
    await client.connect()
    result = await client.send_code_request(phone)
    with open('code_hash.txt', 'w') as f:
        f.write(result.phone_code_hash)
    print('Code sent. Check Telegram.')
    await client.disconnect()

asyncio.run(main())
