// ==========================================
// Triple Calendar PWA
// sw.js
// Premium Service Worker
// ==========================================


const CACHE_NAME = "triple-calendar-v1.0";


// Files Cache

const APP_FILES = [

"./",

"./index.html",

"./style.css",

"./script.js",

"./calendar.js",

"./hijri.js",

"./punjabi.js",

"./holidays.js",

"./events.js",

"./storage.js",

"./api.js",

"./manifest.json",

"./icon-192.png",

"./icon-512.png"

];



// ===============================
// Install Event
// ===============================

self.addEventListener(
"install",
event=>{


event.waitUntil(

caches.open(CACHE_NAME)

.then(cache=>{

return cache.addAll(APP_FILES);

})

);


self.skipWaiting();


});



// ===============================
// Activate Event
// ===============================

self.addEventListener(
"activate",
event=>{


event.waitUntil(

caches.keys()

.then(keys=>{


return Promise.all(

keys.map(key=>{


if(key !== CACHE_NAME){

return caches.delete(key);

}


})

);


})

);


self.clients.claim();


});



// ===============================
// Fetch Event
// ===============================

self.addEventListener(
"fetch",
event=>{


event.respondWith(

caches.match(event.request)

.then(response=>{


if(response){

return response;

}


// Network Request

return fetch(event.request)

.then(networkResponse=>{


return caches.open(CACHE_NAME)

.then(cache=>{


cache.put(

event.request,

networkResponse.clone()

);


return networkResponse;


});


});


})

.catch(()=>{


return caches.match(
"./index.html"
);


})


);


});



// ===============================
// Update Message
// ===============================

self.addEventListener(
"message",
event=>{


if(event.data==="SKIP_WAITING"){

self.skipWaiting();

}


});
