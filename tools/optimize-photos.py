"""Converts source photos to optimized WebP for the site.
Usage: python -I tools/optimize-photos.py <ubereats_dir> <googlemaps_dir>
"""
import os, sys
from PIL import Image, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'public', 'images')
ue, gm = sys.argv[1], sys.argv[2]
os.makedirs(os.path.join(OUT, 'menu'), exist_ok=True)

# Menu photos (MTB's own promo images from its Uber Eats store) -> two sizes
dishes = {
    'crousty': 'crousty-au-choix', 'smash-classique': 'smash-classique', 'smash-bacon-menu': 'smash-bacon',
    'smash-avocado': 'smash-avocado', 'smash-chicken-menu': 'smash-chicken', 'smash-mix-menu': 'smash-mix',
    'smash-honey': 'smash-honey', 'le-red-menu': 'le-red', 'le-yellow-menu': 'le-yellow', 'el-guzman-menu': 'el-guzman',
    'supreme-menu': 'le-supreme', 'triple-mtb-menu': 'le-triple-mtb', 'le-mix-up': 'le-mix-up',
    'mozzarella-sticks': 'mozzarella-sticks', 'tenders': 'tenders', 'onion-rings': 'onion-rings', 'boisson': 'boisson',
    'smash-classique-menu': 'smash-classique-menu',
}
for src, dst in dishes.items():
    im = Image.open(os.path.join(ue, src + '.jpg')).convert('RGB')
    im.save(os.path.join(OUT, 'menu', dst + '.webp'), 'WEBP', quality=82, method=6)
    sm = im.copy(); sm.thumbnail((240, 240))
    sm.save(os.path.join(OUT, 'menu', dst + '-sm.webp'), 'WEBP', quality=78, method=6)

# Storefront (Google Maps cover photo) — blur the two seated customers, crop 4:5
im = Image.open(os.path.join(gm, 'cover.jpg')).convert('RGB')  # 2000x1500
for box in [(820, 650, 1040, 860), (610, 560, 770, 900)]:  # people visible through the windows
    im.paste(im.crop(box).filter(ImageFilter.GaussianBlur(14)), box)
im.save(os.path.join(OUT, 'storefront-wide.webp'), 'WEBP', quality=80, method=6)
wide = im.copy(); wide.thumbnail((1000, 1000)); wide.save(os.path.join(OUT, 'storefront-wide-sm.webp'), 'WEBP', quality=78, method=6)
crop = im.crop((60, 0, 1260, 1500))  # 1200x1500 (4:5): sign + windows
crop.save(os.path.join(OUT, 'storefront.webp'), 'WEBP', quality=80, method=6)
s = crop.copy(); s.thumbnail((640, 800)); s.save(os.path.join(OUT, 'storefront-sm.webp'), 'WEBP', quality=78, method=6)
print('done')
