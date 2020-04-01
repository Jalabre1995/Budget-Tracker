const FILE_TO_CACHE = [
    '/',
    '/index.html',
    '/chart.html',
    'app.bundle.js',
    '/chart.bundle.js'
];

const CACHE_NAME = "static-cache-v1";
const DATA_CACHE_NAME = 'data-cache-v1';
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('Your files were pre-cached sucessfully!');
            return cache.addAll(FILE_TO_CACHE);
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', function(e){
    e.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(
                keyList.map(key => {
                    if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
                        console.log('Removing the old cache data');
                        return caches.delete(key);
                    }
                })
            )
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', function(evt){
    evt.respondWith(
        caches.open(CACHE_NAME).then(cache => {
            return cache.match(evt.request).then(response => {
                return response || fetch(evt.request);
            })
        })
    )
});

self.onsync = function(event) {
    if(event.tag == 'db-sync'){
        event.waitUntil(sentToServer())

    }
}