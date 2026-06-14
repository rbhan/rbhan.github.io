# Wardrobe

A single-file web app: closet catalogue, private wear log, and an outfit-pairing
engine that learns from your ratings. Works on phone and desktop from one link,
and fully offline once loaded.

Your 76 items from the Google Sheet are already baked in as seed data, along
with the wear events reconstructed from the `worn_at` column.

## Files

| file | purpose |
|---|---|
| `index.html` | the whole app (UI, data, engine) |
| `sw.js` | service worker → offline support |
| `manifest.webmanifest`, `icon.svg` | lets phones "Add to Home Screen" as an app |
| `README.md` | this file |
| `photos/` *(you add this)* | optional image files named by item id, e.g. `41.jpg` |

## Get your link (GitHub Pages, ~3 minutes, free)

1. Create a repo (e.g. `wardrobe`) on github.com, can be public or private*.
2. Upload the four files (drag & drop on the repo page).
3. Repo → Settings → Pages → Source: *Deploy from a branch* → `main` / root → Save.
4. Your link appears in a minute: `https://<you>.github.io/wardrobe/`.

*Note: GitHub Pages sites are publicly reachable even from private repos —
anyone who has the URL can see the **item list** (it's inside `index.html`).
Your **wear log, ratings, learned weights and photos never leave the device**;
they live in the browser's localStorage/IndexedDB. That's what makes the log
"viewable just for me": it isn't in the hosted file at all.

Alternatives: Netlify Drop (drag the folder onto netlify.com/drop), Cloudflare
Pages, or any static host. Opening `index.html` directly from disk also works
(offline install + Sheets sync are the only features that need http(s)).

## Offline / install

After the first visit the service worker caches everything, so it opens with
no connection. On iOS/Android: Share → **Add to Home Screen** for an app icon
and fullscreen mode.

## Photos

Two ways to give an item a picture; you can mix them freely.

**A) A `photos/` folder (the shared, cross-device way).**
Make a folder called `photos/` next to `index.html` and drop image files named
by the item's id:

```
wardrobe/
  index.html
  photos/
    1.jpg
    41.png
    70.webp
```

The app links them automatically — no editing needed. Accepted extensions are
`.jpg`, `.jpeg`, `.png`, `.webp` (it tries each, in that order). On GitHub Pages
just upload the `photos/` folder to the repo; on a phone the images then show
for everyone with the link.

> **HEIC note.** iPhones save HEIC by default, and **browsers can't display
> HEIC**, so convert to JPEG first:
> - iPhone: open the photo → Share → **Save to Files** offers JPEG; or set
>   *Settings → Camera → Formats → Most Compatible* to shoot JPEG; or use a free
>   "HEIC to JPG" Shortcut to batch-convert.
> - Mac: select the files in Finder → right-click → *Quick Actions → Convert
>   Image → JPEG*; or in Terminal: `sips -s format jpeg *.heic --out .`

You'll see harmless `404` lines in the browser console while the app checks
which photos exist. To silence them (optional), add a `photos/manifest.json`
listing what's there — either form works:

```json
{ "1": "1.jpg", "41": "41.png", "70": "70.webp" }
```
```json
["1.jpg", "41.png", "70.webp"]
```

When a manifest is present the app trusts it and stops probing. On a Mac you can
regenerate it from inside the folder with:
`ls *.jpg *.jpeg *.png *.webp 2>/dev/null | python3 -c "import sys,json;print(json.dumps([l.strip() for l in sys.stdin]))" > manifest.json`

**B) Upload from the app (per-device, instant).**
Open any item → **Take / upload photo** (on a phone this offers the camera).
The image is resized and stored in that browser only, and it overrides the
folder copy for that item until you tap **Remove uploaded**. This is the quick
way to update a photo from your phone without touching the folder. To make a
phone photo the *shared* one, save it into `photos/<id>.jpg` in the repo instead
(or include photos in a backup and restore it on the other device).

Precedence for each item: in-app upload → Photo-URL field → `photos/<id>.*` →
generated colour swatch.

## Adding things on the fly

You can grow the closet three ways, any time:

- **By hand** — Closet tab → **+ New item**, fill in the fields, optionally snap
  a photo. On save it tells you the matching filename (e.g. `photos/77.jpg`) so
  you can drop in a folder photo later. New items get the next free id.
- **From a CSV / paste** — Data tab → *Paste import*. Copy cells straight out of
  Google Sheets (include the header row) and paste; tabs or commas both parse.
- **From the Google Sheet** — Data tab → *Sync items* (sheet shared "Anyone with
  the link · Viewer"). Items merge by `id`, so editing the sheet and re-syncing
  updates in place and keeps your photos.

Tip: if you'll keep using the Sheet, add brand-new pieces there too (or treat the
Sheet as the source of truth for ids). That keeps ids stable so folder photos
always line up. Adding by hand is perfect for one-offs and for when you're away
from the spreadsheet.



Two ways (Data tab in the app):

- **Sync** — the sheet must be shared "Anyone with the link · Viewer". The app
  pulls each tab by name (`items`, `wear_log`, `recommended_pairing`).
- **Paste import** — select the cells in Sheets (with the header row), copy,
  paste into the app. Works even if sync is blocked.

Importers are forgiving about columns. Suggested headers:

- `wear_log`: `date, title, occasion, items, notes` — `items` can be ids
  (`13|53|54`) or names; both `|` and `,` separators work.
- `recommended_pairing`: `items, verdict, source, url, notes` — verdict maps
  great/love/5 → great, no/bad/1–2 → no, anything else → good.

Items merge by `id`, so re-syncing after you edit the sheet is safe (local
photos are kept).

## The pairing engine

Every pair of items is scored on interpretable features: colour harmony
(neutrals pair with anything; nearby or complementary hues score well; clashes
don't), pattern balance, formality and warmth match, season/occasion overlap,
co-occurrence in your wear log, and your explicit ratings. The weights start
at sensible defaults and are updated by online logistic regression every time
you rate a pairing (save a pairing, the "Rate an idea" card, a friend's vote,
or imported `recommended_pairing` rows). "Retrain" refits from scratch on all
saved ratings. The Pairings tab shows the learned weights, so you can see what
it currently believes about your taste.

Crowdsourcing without a server: select items → **Share** → send the link.
Friends see the outfit, vote, and send back a reply link; opening it imports
their vote and trains the engine. (A truly public voting feed would need a
small backend — happy to add one later, e.g. a free Supabase table.)

## Backups

Data tab → **Download backup** (optionally with photos) produces one JSON file;
**Restore backup** loads it on any device. Do this occasionally — clearing the
browser's site data clears the log.
