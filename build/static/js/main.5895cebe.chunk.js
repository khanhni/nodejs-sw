(this["webpackJsonpreact-service-work"]=this["webpackJsonpreact-service-work"]||[]).push([[0],{11:function(e,n,o){"use strict";o.r(n);var t=o(1),r=o.n(t),i=o(3),c=o.n(i),s=(o(8),o.p+"static/media/logo.103b5fa1.svg"),a=(o(9),o(0));var l=function(){return Object(t.useEffect)((function(){Notification.requestPermission((function(e){console.log("Notification permission status:",e)})),"serviceWorker"in navigator&&navigator.serviceWorker.register("./service-worker.js").then((function(e){console.log("Service Worker Registered!",e),e.pushManager.getSubscription().then((function(e){null===e?console.log("Not subscribed to push service!"):console.log("Subscription object: ",e)}))})).catch((function(e){console.log("Service Worker registration failed: ",e)}))})),Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("header",{className:"App-header",children:[Object(a.jsx)("img",{src:s,className:"App-logo",alt:"logo"}),Object(a.jsxs)("p",{children:["Edit ",Object(a.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(a.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},u=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function d(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var o=e.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var f=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,12)).then((function(n){var o=n.getCLS,t=n.getFID,r=n.getFCP,i=n.getLCP,c=n.getTTFB;o(e),t(e),r(e),i(e),c(e)}))};c.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(l,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");u?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(o){var t=o.headers.get("content-type");404===o.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):d(n,e)}))}}(),f()},8:function(e,n,o){},9:function(e,n,o){}},[[11,1,2]]]);
//# sourceMappingURL=main.5895cebe.chunk.js.map