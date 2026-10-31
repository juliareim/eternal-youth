
import json
from pathlib import Path

root = Path(__file__).resolve().parent.parent
folder = root / "assets" / "moodboard"

extensions = {".jpg", ".jpeg", ".png", ".webp", ".avif"}

images = sorted(
    (
        f"/assets/moodboard/{file.name}"
        for file in folder.iterdir()
        if file.is_file() and file.suffix.lower() in extensions
    ),
    key=str.lower,
)

output = root / "moodboard.json"
output.write_text(
    json.dumps(images, ensure_ascii=False, indent=2),
    encoding="utf-8",
)

print(f"{len(images)} Moodboard-Bilder gefunden.")
