import sys
import re
import asyncio
import socks
from datetime import datetime, timezone, timedelta
from pathlib import Path
from dotenv import load_dotenv
import os

load_dotenv(Path(__file__).parent / ".env")

from telethon import TelegramClient, events
from telethon.tl.types import User

PROXY = (socks.HTTP, '127.0.0.1', 3128)

API_ID = int(os.environ["API_ID"])
API_HASH = os.environ["API_HASH"]
SESSION = str(Path(__file__).parent / "session")

OTP_PATTERN = re.compile(r'\b\d{4,8}\b')


def format_sender(message):
    sender = message.sender
    if sender is None:
        return "Unknown"
    if isinstance(sender, User):
        parts = [sender.first_name or "", sender.last_name or ""]
        name = " ".join(p for p in parts if p).strip()
        return name if name else (sender.username or str(sender.id))
    return getattr(sender, "title", None) or str(sender.id)


def format_time(dt):
    return dt.astimezone().strftime("%Y-%m-%d %H:%M:%S")


PHONE = os.environ.get("TG_PHONE")


async def cmd_last():
    client = TelegramClient(SESSION, API_ID, API_HASH, proxy=PROXY)
    await client.connect()
    async with client:
        messages = []
        async for dialog in client.iter_dialogs():
            async for msg in client.iter_messages(dialog.id, limit=1):
                if msg.text:
                    messages.append(msg)
            if len(messages) >= 50:
                break
        messages.sort(key=lambda m: m.date, reverse=True)
        for msg in messages[:10]:
            sender = format_sender(msg)
            print(f"[{format_time(msg.date)}] {sender}: {msg.text}")


async def cmd_otp():
    cutoff = datetime.now(timezone.utc) - timedelta(hours=1)
    client = TelegramClient(SESSION, API_ID, API_HASH, proxy=PROXY)
    await client.connect()
    async with client:
        async for dialog in client.iter_dialogs():
            async for msg in client.iter_messages(dialog.id, limit=20):
                if msg.date < cutoff:
                    break
                if msg.text and OTP_PATTERN.search(msg.text):
                    sender = format_sender(msg)
                    print(f"[{format_time(msg.date)}] {sender}: {msg.text}")


async def cmd_watch():
    client = TelegramClient(SESSION, API_ID, API_HASH, proxy=PROXY)
    await client.connect()
    async with client:
        print("Watching for new messages... (Ctrl+C to stop)")

        @client.on(events.NewMessage)
        async def handler(event):
            msg = event.message
            if not msg.text:
                return
            sender = await event.get_sender()
            if isinstance(sender, User):
                parts = [sender.first_name or "", sender.last_name or ""]
                name = " ".join(p for p in parts if p).strip()
                name = name if name else (sender.username or str(sender.id))
            else:
                name = getattr(sender, "title", None) or str(sender.id) if sender else "Unknown"
            print(f"[{format_time(msg.date)}] {name}: {msg.text}")

        await client.run_until_disconnected()


def main():
    if len(sys.argv) < 2:
        print("Usage: python listener.py [last|otp|watch]")
        sys.exit(1)

    cmd = sys.argv[1].lower()
    if cmd == "last":
        asyncio.run(cmd_last())
    elif cmd == "otp":
        asyncio.run(cmd_otp())
    elif cmd == "watch":
        asyncio.run(cmd_watch())
    else:
        print(f"Unknown command: {cmd}")
        print("Usage: python listener.py [last|otp|watch]")
        sys.exit(1)


if __name__ == "__main__":
    main()
