// 최소한의 서비스워커 — 설치(홈 화면 앱) 기능을 위해 필요하며,
// 별도 캐시 전략 없이 항상 네트워크로 요청을 전달합니다.
// (data.xlsx가 항상 최신으로 반영되도록, 오프라인 캐시는 일부러 사용하지 않습니다)
self.addEventListener('install', (event) => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  self.clients.claim();
});
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
