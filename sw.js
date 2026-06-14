/* Wardrobe service worker — cache-first so the app works fully offline.
   Photos in photos/ are runtime-cached on first successful load; 404s are
   never cached, so a photo you add later won't be masked by a stale "not found". */
const CACHE='wardrobe-v2';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  const url=new URL(e.request.url);
  if(e.request.method!=='GET'||url.origin!==location.origin)return;     // let Sheets sync etc. hit the network
  if(url.pathname.endsWith('/manifest.json'))return;                    // always fetch the photo manifest fresh
  e.respondWith(
    caches.match(e.request,{ignoreSearch:true}).then(hit=>hit||fetch(e.request).then(res=>{
      if(res&&res.ok&&res.type==='basic'){const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}
      return res;                                                       // pass 404s straight through, uncached
    }).catch(()=> e.request.mode==='navigate' ? caches.match('./index.html') : Response.error()))
  );
});
