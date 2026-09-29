"""Build an offline, single-file preview from the source website."""
from pathlib import Path
import base64
import json
import mimetypes
import re

ROOT = Path(__file__).resolve().parent
ASSETS = ROOT / "assets"


def data_uri(rel):
    path = ROOT / rel
    kind = mimetypes.guess_type(path.name)[0] or "application/octet-stream"
    if path.suffix == ".svg":
        kind = "image/svg+xml"
    return f"data:{kind};base64,{base64.b64encode(path.read_bytes()).decode('ascii')}"


html = (ROOT / "index.html").read_text()
css = (ROOT / "styles.css").read_text()
js = (ROOT / "app.js").read_text()
css = re.sub(r"url\(['\"]?(assets/[^)'\"]+)['\"]?\)", lambda m: f'url("{data_uri(m.group(1))}")', css)
html = html.replace('<link rel="preload" href="assets/hero-feast.jpg" as="image" />', "")
html = html.replace('href="assets/favicon.svg"', f'href="{data_uri("assets/favicon.svg")}"')
html = html.replace('src="assets/family-table.jpg"', f'src="{data_uri("assets/family-table.jpg")}"')
html = html.replace('<link rel="stylesheet" href="styles.css" />', f'<style>{css}</style>')
image_map = {p.name: data_uri(f"assets/{p.name}") for p in ASSETS.glob("dish-*.jpg")}
js = js.replace('assets/${d.image}', '${window.__ALBAY_ASSETS[d.image]}')
boot = f'<script>window.__ALBAY_ASSETS={json.dumps(image_map, separators=(",", ":"))};</script>'
html = html.replace('<script src="app.js" defer></script>', '')
html = html.replace('</body>', boot + f'<script>{js}</script></body>')
output = ROOT / "AL_BAY_Standalone.html"
output.write_text(html)
print(f"Created {output} ({output.stat().st_size / 1024 / 1024:.1f} MB)")
