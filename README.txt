Put your clothing photos in THIS folder, named by the item's id number.

  photos/1.jpg
  photos/41.png
  photos/70.webp

Accepted types: .jpg  .jpeg  .png  .webp   (tried in that order)
The app links them automatically — nothing to edit.

You can find an item's id in the app: it's the little number chip on each card,
and it's shown in the item's edit screen ("Folder photo for this item: ...").

HEIC from an iPhone will NOT show in browsers — convert to JPEG first.
See the main README.md ("Photos") for one-tap ways to convert.

Optional: add a manifest.json here listing your files to stop the app from
probing (and to silence harmless 404s in the console). Example:
  { "1": "1.jpg", "41": "41.png" }
