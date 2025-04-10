import requests
import hashlib
from PIL import Image
from io import BytesIO
import os

USERNAME = "mvahaste"
AVATAR_URL = f"https://github.com/{USERNAME}.png"
HASH_FILE = ".avatar_hash"
FAVICON_PATH = "app/favicon.ico"
AVATAR_PNG_PATH = "public/images/avatar.png"

# Fetch avatar
response = requests.get(AVATAR_URL)
response.raise_for_status()
avatar_bytes = response.content

# Hash avatar to detect changes
avatar_hash = hashlib.sha256(avatar_bytes).hexdigest()

# Check against stored hash
if os.path.exists(HASH_FILE):
    with open(HASH_FILE, "r") as f:
        old_hash = f.read().strip()
    if avatar_hash == old_hash:
        print("Avatar hasn't changed.")
        exit(0)

# Convert to .ico
img = Image.open(BytesIO(avatar_bytes)).convert("RGBA")
img.save(FAVICON_PATH, format="ICO")

# Also save the PNG directly
img.save(AVATAR_PNG_PATH, format="PNG")

# Save new hash
with open(HASH_FILE, "w") as f:
    f.write(avatar_hash)

print("Avatar updated: favicon and avatar.png replaced.")
