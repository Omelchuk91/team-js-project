!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequire6569;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){t[e]=o},e.parcelRequire6569=n);var r=n("cO4lv"),l=n("3SEMc");n("4Nugj");var a=n("kuom3");n("1M7RN"),(0,a.renderNav)("library"),(0,l.onAuthStateChanged)(r.auth,(function(e){if(e){e.uid;localStorage.setItem("auth",1),(0,a.removeAuthBtns)(),(0,a.addLogOutButton)()}else console.log("User is signed out"),localStorage.setItem("auth",0),location.replace("./index.html")}))}();
//# sourceMappingURL=library.0868157c.js.map