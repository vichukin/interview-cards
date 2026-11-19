from PIL import Image, ImageDraw, ImageFont
import sys
def make(size, path, pad=0.0):
    S = size * 4
    im = Image.new('RGBA', (S, S), (15, 20, 32, 255))
    d = ImageDraw.Draw(im)
    m = int(S * (0.18 + pad)); r = int(S * 0.07)
    # back card
    d.rounded_rectangle([m + S*0.06, m - S*0.02, S - m + S*0.06, S - m - S*0.02], r, fill=(38, 48, 90, 255))
    # front card
    d.rounded_rectangle([m - S*0.03, m + S*0.04, S - m - S*0.03, S - m + S*0.04], r, fill=(108, 140, 255, 255))
    try: f = ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf', int(S * (0.2 - pad*0.6)))
    except Exception: f = ImageFont.truetype('C:/Windows/Fonts/arialbd.ttf', int(S * (0.2 - pad*0.6)))
    t = '.NET'
    bb = d.textbbox((0, 0), t, font=f)
    cx, cy = S/2 - S*0.03, S/2 + S*0.04
    d.text((cx - (bb[2]-bb[0])/2 - bb[0], cy - (bb[3]-bb[1])/2 - bb[1]), t, font=f, fill=(255, 255, 255, 255))
    im.resize((size, size), Image.LANCZOS).save(path)
out = sys.argv[1]
make(192, out + '/icon-192.png')
make(512, out + '/icon-512.png')
make(512, out + '/icon-maskable-512.png', pad=0.06)
make(180, out + '/apple-touch-icon.png')
make(1024, sys.argv[2] + '/icon.png')
make(1024, sys.argv[2] + '/android-icon-foreground.png', pad=0.08)
