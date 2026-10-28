"""Render the FloorCast icon and logo into custom_components/floorcast/brand.

Run with Pillow installed: python tools/make_brand.py
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

OUT = Path(__file__).resolve().parents[1] / "custom_components" / "floorcast" / "brand"
SCALE = 8
TOP = (41, 182, 246)
BOTTOM = (21, 101, 192)
LIGHT = (255, 202, 40)
TEXT_LIGHT = (31, 41, 55)
TEXT_DARK = (243, 244, 246)
FONT = Path("C:/Windows/Fonts/segoeuib.ttf")


def icon(size: int) -> Image.Image:
    big = size * SCALE
    gradient = Image.new("RGBA", (big, big))
    pixels = gradient.load()
    for y in range(big):
        for x in range(big):
            t = (x + y) / (2 * big)
            pixels[x, y] = (*tuple(round(TOP[i] + (BOTTOM[i] - TOP[i]) * t) for i in range(3)), 255)

    mask = Image.new("L", (big, big), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, big - 1, big - 1), radius=big * 0.22, fill=255)
    tile = Image.new("RGBA", (big, big), (0, 0, 0, 0))
    tile.paste(gradient, mask=mask)

    # A floor plan: outer walls, two inner walls with door gaps, a lit lamp in one room.
    white = (255, 255, 255, 255)
    wall = round(big * 0.055)
    left, top, right, bottom = big * 0.2, big * 0.22, big * 0.8, big * 0.78
    lamp_x, lamp_y = big * 0.35, big * 0.37
    glow = big * 0.13
    # The glow is blended over the tile; drawing it directly would replace the pixels.
    layer = Image.new("RGBA", (big, big), (0, 0, 0, 0))
    ImageDraw.Draw(layer).ellipse(
        (lamp_x - glow, lamp_y - glow, lamp_x + glow, lamp_y + glow), fill=(255, 241, 196, 170)
    )
    tile.alpha_composite(layer.filter(ImageFilter.GaussianBlur(big * 0.035)))
    draw = ImageDraw.Draw(tile)
    draw.rounded_rectangle((left, top, right, bottom), radius=big * 0.04, outline=white, width=wall)
    middle_x, middle_y = big * 0.52, big * 0.52
    draw.line((middle_x, top, middle_x, big * 0.42), fill=white, width=wall)
    draw.line((left, middle_y, big * 0.36, middle_y), fill=white, width=wall)
    draw.line((big * 0.48, middle_y, right, middle_y), fill=white, width=wall)
    dot = big * 0.045
    draw.ellipse((lamp_x - dot, lamp_y - dot, lamp_x + dot, lamp_y + dot), fill=(*LIGHT, 255))
    # A person in the lower room.
    person_x, person_y, person = big * 0.64, big * 0.66, big * 0.055
    draw.ellipse((person_x - person, person_y - person, person_x + person, person_y + person), fill=white)
    return tile.resize((size, size), Image.LANCZOS)


def logo(height: int, text_colour: tuple[int, int, int]) -> Image.Image:
    mark = icon(height)
    font = ImageFont.truetype(str(FONT), round(height * 0.62))
    probe = ImageDraw.Draw(Image.new("RGBA", (1, 1)))
    left, top, right, bottom = probe.textbbox((0, 0), "FloorCast", font=font)
    gap = round(height * 0.22)
    canvas = Image.new("RGBA", (height + gap + (right - left), height), (0, 0, 0, 0))
    canvas.paste(mark, (0, 0), mark)
    text_y = (height - (bottom - top)) // 2 - top
    ImageDraw.Draw(canvas).text((height + gap - left, text_y), "FloorCast", font=font, fill=(*text_colour, 255))
    return canvas


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    icon(256).save(OUT / "icon.png", optimize=True)
    icon(512).save(OUT / "icon@2x.png", optimize=True)
    logo(128, TEXT_LIGHT).save(OUT / "logo.png", optimize=True)
    logo(256, TEXT_LIGHT).save(OUT / "logo@2x.png", optimize=True)
    logo(128, TEXT_DARK).save(OUT / "dark_logo.png", optimize=True)
    logo(256, TEXT_DARK).save(OUT / "dark_logo@2x.png", optimize=True)


if __name__ == "__main__":
    main()
