(()=>{
    "use strict";
    var e = {}
      , t = {};
    function r(a) {
        var i = t[a];
        if (void 0 !== i)
            return i.exports;
        var o = t[a] = {
            id: a,
            loaded: !1,
            exports: {}
        };
        return e[a].call(o.exports, o, o.exports, r),
        o.loaded = !0,
        o.exports
    }
    r.m = e,
    (()=>{
        var e = [];
        r.O = (t,a,i,o)=>{
            if (!a) {
                var n = 1 / 0;
                for (l = 0; l < e.length; l++) {
                    for (var [a,i,o] = e[l], s = !0, d = 0; d < a.length; d++)
                        (!1 & o || n >= o) && Object.keys(r.O).every((e=>r.O[e](a[d]))) ? a.splice(d--, 1) : (s = !1,
                        o < n && (n = o));
                    if (s) {
                        e.splice(l--, 1);
                        var c = i();
                        void 0 !== c && (t = c)
                    }
                }
                return t
            }
            o = o || 0;
            for (var l = e.length; l > 0 && e[l - 1][2] > o; l--)
                e[l] = e[l - 1];
            e[l] = [a, i, o]
        }
    }
    )(),
    (()=>{
        r.n = e=>{
            var t = e && e.__esModule ? ()=>e["default"] : ()=>e;
            return r.d(t, {
                a: t
            }),
            t
        }
    }
    )(),
    (()=>{
        r.d = (e,t)=>{
            for (var a in t)
                r.o(t, a) && !r.o(e, a) && Object.defineProperty(e, a, {
                    enumerable: !0,
                    get: t[a]
                })
        }
    }
    )(),
    (()=>{
        r.f = {},
        r.e = e=>Promise.all(Object.keys(r.f).reduce(((t,a)=>(r.f[a](e, t),
        t)), []))
    }
    )(),
    (()=>{
        r.u = e=>"js/" + ({
            25: "package/promo/base",
            53: "package/game/base",
            77: "views/documents/aml",
            291: "views/provider/catalog",
            339: "package/views/catalog/filter",
            358: "package/game/card",
            371: "views/tourney/detail",
            381: "view-sitemap",
            412: "views/home",
            438: "view-cashier-withdraw",
            460: "view-cashier",
            520: "views/tournaments",
            545: "views/game/detail",
            551: "views/profile/kyc",
            587: "view-game",
            588: "views/tourney/catalog",
            619: "package/base/slider",
            621: "views/widget/token",
            655: "views/provider/detail",
            681: "view-account",
            801: "package/views/widget/fortune-wheel",
            884: "view-404",
            885: "views/sport-betting",
            898: "view-faq",
            900: "view-500",
            915: "view-contacts",
            930: "package/tourney/base",
            967: "views/documents/exclusion"
        }[e] || e) + "." + {
            25: "f023a6d8",
            53: "9f1e4e54",
            77: "8d5e6370",
            167: "9a29e7ad",
            169: "5d04b718",
            229: "8ce4f917",
            291: "5053cb6d",
            339: "60756fa7",
            358: "3383b087",
            371: "f32f4469",
            381: "fe457508",
            412: "0e035fb5",
            438: "0681fc6e",
            460: "613b7dcb",
            470: "370c50bc",
            520: "172e156e",
            545: "2a3c46fb",
            551: "5c5a1542",
            587: "740851b2",
            588: "b2e723ab",
            619: "538d1d11",
            621: "5ed58aad",
            655: "ff1ecbb8",
            681: "48d3b9bc",
            801: "e4fc2890",
            836: "7a9a3036",
            884: "6a49ada7",
            885: "f614e378",
            898: "cede462f",
            900: "1ec6e5fe",
            915: "2c419697",
            930: "210c15f3",
            967: "0d80d864"
        }[e] + ".js"
    }
    )(),
    (()=>{
        r.miniCssF = e=>"css/" + ({
            25: "package/promo/base",
            53: "package/game/base",
            291: "views/provider/catalog",
            339: "package/views/catalog/filter",
            358: "package/game/card",
            371: "views/tourney/detail",
            381: "view-sitemap",
            412: "views/home",
            438: "view-cashier-withdraw",
            460: "view-cashier",
            520: "views/tournaments",
            545: "views/game/detail",
            551: "views/profile/kyc",
            587: "view-game",
            588: "views/tourney/catalog",
            619: "package/base/slider",
            621: "views/widget/token",
            655: "views/provider/detail",
            681: "view-account",
            801: "package/views/widget/fortune-wheel",
            884: "view-404",
            885: "views/sport-betting",
            898: "view-faq",
            900: "view-500",
            915: "view-contacts",
            930: "package/tourney/base",
            967: "views/documents/exclusion"
        }[e] || e) + "." + r.h() + ".css"
    }
    )(),
    (()=>{
        r.h = ()=>"f6e4c274f08e09a7"
    }
    )(),
    (()=>{
        r.g = function() {
            if ("object" === typeof globalThis)
                return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" === typeof window)
                    return window
            }
        }()
    }
    )(),
    (()=>{
        r.hmd = e=>(e = Object.create(e),
        e.children || (e.children = []),
        Object.defineProperty(e, "exports", {
            enumerable: !0,
            set: ()=>{
                throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
            }
        }),
        e)
    }
    )(),
    (()=>{
        r.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t)
    }
    )(),
    (()=>{
        var e = {}
          , t = "@app/fairspin:";
        r.l = (a,i,o,n)=>{
            if (e[a])
                e[a].push(i);
            else {
                var s, d;
                if (void 0 !== o)
                    for (var c = document.getElementsByTagName("script"), l = 0; l < c.length; l++) {
                        var v = c[l];
                        if (v.getAttribute("src") == a || v.getAttribute("data-webpack") == t + o) {
                            s = v;
                            break
                        }
                    }
                s || (d = !0,
                s = document.createElement("script"),
                s.charset = "utf-8",
                s.timeout = 120,
                r.nc && s.setAttribute("nonce", r.nc),
                s.setAttribute("data-webpack", t + o),
                s.src = a),
                e[a] = [i];
                var u = (t,r)=>{
                    s.onerror = s.onload = null,
                    clearTimeout(p);
                    var i = e[a];
                    if (delete e[a],
                    s.parentNode && s.parentNode.removeChild(s),
                    i && i.forEach((e=>e(r))),
                    t)
                        return t(r)
                }
                  , p = setTimeout(u.bind(null, void 0, {
                    type: "timeout",
                    target: s
                }), 12e4);
                s.onerror = u.bind(null, s.onerror),
                s.onload = u.bind(null, s.onload),
                d && document.head.appendChild(s)
            }
        }
    }
    )(),
    (()=>{
        r.r = e=>{
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
    }
    )(),
    (()=>{
        r.nmd = e=>(e.paths = [],
        e.children || (e.children = []),
        e)
    }
    )(),
    (()=>{
        r.j = 826
    }
    )(),
    (()=>{
        r.p = "/"
    }
    )(),
    (()=>{
        if ("undefined" !== typeof document) {
            var e = (e,t,r,a,i)=>{
                var o = document.createElement("link");
                o.rel = "stylesheet",
                o.type = "text/css";
                var n = r=>{
                    if (o.onerror = o.onload = null,
                    "load" === r.type)
                        a();
                    else {
                        var n = r && ("load" === r.type ? "missing" : r.type)
                          , s = r && r.target && r.target.href || t
                          , d = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                        d.code = "CSS_CHUNK_LOAD_FAILED",
                        d.type = n,
                        d.request = s,
                        o.parentNode && o.parentNode.removeChild(o),
                        i(d)
                    }
                }
                ;
                return o.onerror = o.onload = n,
                o.href = t,
                r ? r.parentNode.insertBefore(o, r.nextSibling) : document.head.appendChild(o),
                o
            }
              , t = (e,t)=>{
                for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                    var i = r[a]
                      , o = i.getAttribute("data-href") || i.getAttribute("href");
                    if ("stylesheet" === i.rel && (o === e || o === t))
                        return i
                }
                var n = document.getElementsByTagName("style");
                for (a = 0; a < n.length; a++) {
                    i = n[a],
                    o = i.getAttribute("data-href");
                    if (o === e || o === t)
                        return i
                }
            }
              , a = a=>new Promise(((i,o)=>{
                var n = r.miniCssF(a)
                  , s = r.p + n;
                if (t(n, s))
                    return i();
                e(a, s, null, i, o)
            }
            ))
              , i = {
                826: 0
            };
            r.f.miniCss = (e,t)=>{
                var r = {
                    25: 1,
                    53: 1,
                    291: 1,
                    339: 1,
                    358: 1,
                    371: 1,
                    381: 1,
                    412: 1,
                    438: 1,
                    460: 1,
                    470: 1,
                    520: 1,
                    545: 1,
                    551: 1,
                    587: 1,
                    588: 1,
                    619: 1,
                    621: 1,
                    655: 1,
                    681: 1,
                    801: 1,
                    884: 1,
                    885: 1,
                    898: 1,
                    900: 1,
                    915: 1,
                    930: 1,
                    967: 1
                };
                i[e] ? t.push(i[e]) : 0 !== i[e] && r[e] && t.push(i[e] = a(e).then((()=>{
                    i[e] = 0
                }
                ), (t=>{
                    throw delete i[e],
                    t
                }
                )))
            }
        }
    }
    )(),
    (()=>{
        var e = {
            826: 0
        };
        r.f.j = (t,a)=>{
            var i = r.o(e, t) ? e[t] : void 0;
            if (0 !== i)
                if (i)
                    a.push(i[2]);
                else if (339 != t) {
                    var o = new Promise(((r,a)=>i = e[t] = [r, a]));
                    a.push(i[2] = o);
                    var n = r.p + r.u(t)
                      , s = new Error
                      , d = a=>{
                        if (r.o(e, t) && (i = e[t],
                        0 !== i && (e[t] = void 0),
                        i)) {
                            var o = a && ("load" === a.type ? "missing" : a.type)
                              , n = a && a.target && a.target.src;
                            s.message = "Loading chunk " + t + " failed.\n(" + o + ": " + n + ")",
                            s.name = "ChunkLoadError",
                            s.type = o,
                            s.request = n,
                            i[1](s)
                        }
                    }
                    ;
                    r.l(n, d, "chunk-" + t, t)
                } else
                    e[t] = 0
        }
        ,
        r.O.j = t=>0 === e[t];
        var t = (t,a)=>{
            var i, o, [n,s,d] = a, c = 0;
            if (n.some((t=>0 !== e[t]))) {
                for (i in s)
                    r.o(s, i) && (r.m[i] = s[i]);
                if (d)
                    var l = d(r)
            }
            for (t && t(a); c < n.length; c++)
                o = n[c],
                r.o(e, o) && e[o] && e[o][0](),
                e[o] = 0;
            return r.O(l)
        }
          , a = self["webpackChunk_app_fairspin"] = self["webpackChunk_app_fairspin"] || [];
        a.forEach(t.bind(null, 0)),
        a.push = t.bind(null, a.push.bind(a))
    }
    )();
    var a = r.O(void 0, [998, 64], (()=>r(53782)));
    a = r.O(a)
}
)();
//# sourceMappingURL=index.494685e2.js.map
