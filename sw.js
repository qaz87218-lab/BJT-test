const CORE_CACHE='bjt-deep-v14-5-mock-exams-20260927';
const MEDIA_CACHE='bjt-media-v14-4-mock-exam-20260926';
const CORE_ASSETS=[
  './','./index.html','./styles.css','./data.js','./option_details.js','./article_details.js',
  './business_course.js','./lessons.js','./game_data.js','./listening_data.js','./listening_true02_data.js','./listening_true02_learning.js','./listening_true03_data.js','./listening_true03_learning.js','./listening_typed_choices_v3_1.js','./listening_learning_v3.js','./question_understanding.js','./scenario_understanding.js','./knowledge_expansion_v14_2.js','./knowledge_expansion_v14_3.js','./targeted_extensions_v14_3.js','./mock_exam_v14_5.js','./MOCK_EXAM_V14_5_VALIDATION.json','./KNOWLEDGE_EXPANSION_V14_2_VALIDATION.json','./KNOWLEDGE_EXPANSION_V14_3_VALIDATION.json','./app.js','./manifest.webmanifest',
  './assets/qpack_20260914/O016.png','./assets/qpack_20260914/O022.png'
];

self.addEventListener('install',event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CORE_CACHE).then(cache=>cache.addAll(CORE_ASSETS)));
});

self.addEventListener('activate',event=>{
  event.waitUntil(Promise.all([
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CORE_CACHE&&k!==MEDIA_CACHE).map(k=>caches.delete(k)))),
    self.clients.claim()
  ]));
});

function isListeningMedia(request){
  try{
    const url=new URL(request.url);
    return url.pathname.includes('/assets/listening/');
  }catch(e){return false}
}

self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET') return;

  if(isListeningMedia(request)){
    event.respondWith(
      caches.open(MEDIA_CACHE).then(async cache=>{
        const cached=await cache.match(request);
        if(cached) return cached;
        const response=await fetch(request);
        if(response&&response.ok) cache.put(request,response.clone());
        return response;
      }).catch(()=>caches.match(request))
    );
    return;
  }

  event.respondWith(
    fetch(request).then(response=>{
      const copy=response.clone();
      caches.open(CORE_CACHE).then(cache=>cache.put(request,copy));
      return response;
    }).catch(()=>caches.match(request))
  );
});
