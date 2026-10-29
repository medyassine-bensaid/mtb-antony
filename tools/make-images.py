"""Generates favicon PNGs and the Open Graph share image. Run: python tools/make-images.py"""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUB = os.path.join(ROOT, 'public')
NM = os.path.join(ROOT, 'node_modules', '@fontsource')
ANTON = os.path.join(NM, 'anton', 'files', 'anton-latin-400-normal.woff')
SERIF = os.path.join(NM, 'instrument-serif', 'files', 'instrument-serif-latin-400-italic.woff')
COAL, CREAM, AMBER, MUSTARD, WHITE = (20, 17, 14), (244, 235, 221), (247, 147, 30), (224, 164, 0), (255, 255, 255)


def roundel(size):
    s = size * 4
    im = Image.new('RGBA', (s, s), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    d.ellipse((0, 0, s - 1, s - 1), fill=AMBER)
    f = ImageFont.truetype(ANTON, int(s * 0.38))
    d.text((s / 2, s / 2 + s * 0.02), 'MTB', font=f, fill=WHITE, anchor='mm')
    return im.resize((size, size), Image.LANCZOS)


roundel(32).save(os.path.join(PUB, 'favicon.png'))
apple = Image.new('RGB', (180, 180), COAL)
r = roundel(150)
apple.paste(r, (15, 15), r)
apple.save(os.path.join(PUB, 'apple-touch-icon.png'))

# Open Graph 1200x630
W, H = 1200, 630
og = Image.new('RGB', (W, H), COAL)
glow = Image.new('RGB', (W, H), COAL)
gd = ImageDraw.Draw(glow)
gd.ellipse((620, -260, 1500, 620), fill=(150, 80, 25))
glow = glow.filter(ImageFilter.GaussianBlur(140))
og = Image.blend(og, glow, 0.9)
photo_path = os.path.join(PUB, 'images', 'storefront.webp')
if os.path.exists(photo_path):
    ph = Image.open(photo_path).convert('RGB')
    ph = ph.resize((504, 630), Image.LANCZOS)
    og.paste(ph, (W - 504, 0))
    fade = Image.new('L', (160, H))
    for x in range(160):
        ImageDraw.Draw(fade).line([(x, 0), (x, H)], fill=int(255 * (1 - x / 160)))
    og.paste(Image.new('RGB', (160, H), COAL), (W - 504, 0), fade)
d = ImageDraw.Draw(og)
big = ImageFont.truetype(ANTON, 168)
serif = ImageFont.truetype(SERIF, 150)
small = ImageFont.truetype(ANTON, 34)
d.text((70, 70), 'ANTONY · 209 AV. DE LA DIVISION LECLERC', font=small, fill=AMBER)
d.text((66, 130), 'METS-TOI', font=big, fill=CREAM)
d.text((66, 300), 'BIEN', font=big, fill=CREAM)
d.text((440, 318), '(MTB)', font=serif, fill=AMBER)
d.text((70, 530), 'SMASH BURGERS · SANDWICHS · RIZ CROUSTY', font=small, fill=(185, 172, 152))
d.text((70, 572), '7J/7 · 11H30 – MINUIT', font=small, fill=(185, 172, 152))
# sticker
st = Image.new('RGBA', (220, 220), (0, 0, 0, 0))
sd = ImageDraw.Draw(st)
sd.ellipse((0, 0, 219, 219), fill=MUSTARD)
sd.text((110, 78), 'SMASH DÈS', font=ImageFont.truetype(ANTON, 26), fill=COAL, anchor='mm')
sd.text((110, 128), '8,20€', font=ImageFont.truetype(ANTON, 64), fill=COAL, anchor='mm')
st = st.rotate(10, resample=Image.BICUBIC)
og.paste(st, (960, 390), st)
og.save(os.path.join(PUB, 'og.png'), optimize=True)
print('ok')
