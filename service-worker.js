const CACHE='mon-batch-v3';
const CORE=['./index.html','./manifest.json','./icon.svg'];
self.addEventListener('install',event=>event.waitUntil((async()=>{
  const cache=await caches.open(CACHE);
  for(const path of CORE){
    const response=await fetch(path+'?refresh=3',{cache:'reload'});
    if(response.ok)await cache.put(path,response.clone());
  }
  await self.skipWaiting();
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
  const keys=await caches.keys();
  await Promise.all(keys.filter(key=>key.startsWith('mon-batch-')&&key!==CACHE).map(key=>caches.delete(key)));
  await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;
  if(event.request.mode==='navigate'){
    event.respondWith((async()=>{
      try{
        const fresh=await fetch(event.request,{cache:'reload'});
        const cache=await caches.open(CACHE);
        await cache.put(event.request,fresh.clone());
        await cache.put('./index.html',fresh.clone());
        return fresh;
      }catch(error){return (await caches.match(event.request))||(await caches.match('./index.html'));}
    })());
    return;
  }
  event.respondWith((async()=>{
    const cached=await caches.match(event.request);
    if(cached)return cached;
    const response=await fetch(event.request);
    if(response.ok)(await caches.open(CACHE)).put(event.request,response.clone());
    return response;
  })());
});
