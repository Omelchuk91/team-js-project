var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},i=e.parcelRequire6569;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in a){var i=a[e];delete a[e];var s={id:e,exports:{}};return t[e]=s,i.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},e.parcelRequire6569=i);var s=i("6kcu2"),r=i("eqUos"),o=i("amyG6");i("krGWQ");var l=i("XwkCV");i("6cjWj");var c=i("bh65a");const n=new(0,(r=i("eqUos")).default),u=document.querySelector(".library__watched-btn"),d=document.querySelector(".library__queue-btn");document.querySelector(".button-group").addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;if(e.target.classList.contains("library__watched-btn"))return u.classList.add("is-active"),d.classList.remove("is-active"),void(e.target.classList.contains("is-active")&&(n.setType("watchlist"),localStorage.setItem("typeList","watchlist"),(0,c.libraryList)(n.getType())));if(e.target.classList.contains("library__queue-btn"))return u.classList.remove("is-active"),d.classList.add("is-active"),void(e.target.classList.contains("is-active")&&(n.setType("queue"),localStorage.setItem("typeList","queue"),(0,c.libraryList)(n.getType())))}));c=i("bh65a");const y=document.querySelector(".library__watched-btn"),g=document.querySelector(".library__queue-btn");"queue"===localStorage.getItem("typeList")?g.classList.add("is-active"):y.classList.add("is-active"),(0,l.renderNav)("library");const b=new(0,r.default);b.setType("watchlist"),(0,o.onAuthStateChanged)(s.auth,(e=>{if(e){e.uid;"queue"===localStorage.getItem("typeList")?(g.classList.add("is-active"),(0,c.libraryList)("queue")):(y.classList.add("is-active"),(0,c.libraryList)(b.getType())),localStorage.setItem("auth",1),(0,l.removeAuthBtns)(),(0,l.addLogOutButton)()}else console.log("User is signed out"),localStorage.setItem("auth",0),location.replace("./index.html")}));
//# sourceMappingURL=library.494ac896.js.map