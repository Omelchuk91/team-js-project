!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=n.parcelRequire6569;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){a[e]=n},n.parcelRequire6569=r);var i=r("bpxeT"),o=r("2TvXO"),l=r("cO4lv"),c=r("3SEMc"),s=r("4Nugj"),d=r("kuom3");r("1M7RN");var u=r("h4uzj"),f=r("fKcg4");r("lOnjo"),(0,d.renderNav)("library"),(0,c.onAuthStateChanged)(l.auth,(function(e){if(e){e.uid;localStorage.setItem("auth",1),(0,d.removeAuthBtns)(),(0,d.addLogOutButton)()}else console.log("User is signed out"),localStorage.setItem("auth",0),location.replace("./index.html")}));var p=new(0,u.default),m=document.querySelector(".js-films-list-library");document.querySelector(".modal-holder");function g(){return(g=e(i)(e(o).mark((function n(t){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.default.filmsContainer.innerHTML='<span class="loader"></span>',e.next=3,Promise.all(t).then((function(e){s.default.filmsContainer.innerHTML="",h(e)})).catch(console.log);case 3:case"end":return e.stop()}}),n)})))).apply(this,arguments)}function h(n){console.log(n);var t=n.map((function(n){var t,a,r=n.original_title,i=n.poster_path,o=n.vote_average,l=n.release_date,c=n.genres,s=n.id,d=c.map((function(e){return e.id})),u=new Date(l).getFullYear();return'<li data-id="'.concat(s,'" class="card film-card">\n                        <div class="film-card__img-wrap">\n                            <img\n                                class="film-card__img"\n                                src=').concat((t=i,a="https://www.reelviews.net/resources/img/default_poster.jpg",t?"https://image.tmdb.org/t/p/w500".concat(t):a),'\n                                alt="Poster to movie"\n                                width="395"\n                                height="574"\n                            />\n                        </div>\n                        <div class="film-card__wrap">\n                            <h2 class="film-card__title">').concat(r,'</h2>\n                            <div class="film-card__wrapper">\n                                <span class="film-card__info">').concat(function(n){for(var t=function(t){e(f).genres.find((function(e){var r=e.id,i=e.name;r===n[t]&&a.push(i)}))},a=[],r=0;r<n.length;r+=1)t(r);a.length>2&&a.splice(2,3,"Other");return a}(d).join(", ")," | ").concat(u,'</span>\n                                <span data-film-rating class="film-card__rating">').concat(o.toFixed(2),"</span>\n                            </div>\n                        </div>\n                    </li>")})).join("");m.innerHTML=t}!function(e){g.apply(this,arguments)}([49046,913290,766475].map(p.getMovieInfo))}();
//# sourceMappingURL=library.1701f8bb.js.map
