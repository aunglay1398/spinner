"use strict";
(self["webpackChunk_app_fairspin"] = self["webpackChunk_app_fairspin"] || []).push([[229], {
    2229: (e,n,t)=>{
        t.r(n),
        t.d(n, {
            componentsToDebugString: ()=>Ln,
            default: ()=>Fn,
            getFullscreenElement: ()=>P,
            getScreenFrame: ()=>ke,
            hashComponents: ()=>kn,
            isAndroid: ()=>D,
            isChromium: ()=>M,
            isDesktopSafari: ()=>j,
            isEdgeHTML: ()=>x,
            isGecko: ()=>J,
            isTrident: ()=>R,
            isWebKit: ()=>I,
            load: ()=>Xn,
            loadSources: ()=>G,
            murmurX64Hash128: ()=>Cn,
            prepareForSources: ()=>Wn,
            sources: ()=>vn,
            transformSource: ()=>Y
        });
        var r = t(86397)
          , o = "3.4.1";
        function a(e, n) {
            return new Promise((function(t) {
                return setTimeout(t, e, n)
            }
            ))
        }
        function i(e, n) {
            void 0 === n && (n = 1 / 0);
            var t = window.requestIdleCallback;
            return t ? new Promise((function(e) {
                return t.call(window, (function() {
                    return e()
                }
                ), {
                    timeout: n
                })
            }
            )) : a(Math.min(e, n))
        }
        function c(e) {
            return !!e && "function" === typeof e.then
        }
        function u(e, n) {
            try {
                var t = e();
                c(t) ? t.then((function(e) {
                    return n(!0, e)
                }
                ), (function(e) {
                    return n(!1, e)
                }
                )) : n(!0, t)
            } catch (r) {
                n(!1, r)
            }
        }
        function l(e, n, t) {
            return void 0 === t && (t = 16),
            (0,
            r.mG)(this, void 0, void 0, (function() {
                var o, i, c;
                return (0,
                r.Jh)(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        o = Date.now(),
                        i = 0,
                        r.label = 1;
                    case 1:
                        return i < e.length ? (n(e[i], i),
                        c = Date.now(),
                        c >= o + t ? (o = c,
                        [4, a(0)]) : [3, 3]) : [3, 4];
                    case 2:
                        r.sent(),
                        r.label = 3;
                    case 3:
                        return ++i,
                        [3, 1];
                    case 4:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        function s(e) {
            e.then(void 0, (function() {}
            ))
        }
        function d(e, n) {
            e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
            n = [n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1]];
            var t = [0, 0, 0, 0];
            return t[3] += e[3] + n[3],
            t[2] += t[3] >>> 16,
            t[3] &= 65535,
            t[2] += e[2] + n[2],
            t[1] += t[2] >>> 16,
            t[2] &= 65535,
            t[1] += e[1] + n[1],
            t[0] += t[1] >>> 16,
            t[1] &= 65535,
            t[0] += e[0] + n[0],
            t[0] &= 65535,
            [t[0] << 16 | t[1], t[2] << 16 | t[3]]
        }
        function m(e, n) {
            e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
            n = [n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1]];
            var t = [0, 0, 0, 0];
            return t[3] += e[3] * n[3],
            t[2] += t[3] >>> 16,
            t[3] &= 65535,
            t[2] += e[2] * n[3],
            t[1] += t[2] >>> 16,
            t[2] &= 65535,
            t[2] += e[3] * n[2],
            t[1] += t[2] >>> 16,
            t[2] &= 65535,
            t[1] += e[1] * n[3],
            t[0] += t[1] >>> 16,
            t[1] &= 65535,
            t[1] += e[2] * n[2],
            t[0] += t[1] >>> 16,
            t[1] &= 65535,
            t[1] += e[3] * n[1],
            t[0] += t[1] >>> 16,
            t[1] &= 65535,
            t[0] += e[0] * n[3] + e[1] * n[2] + e[2] * n[1] + e[3] * n[0],
            t[0] &= 65535,
            [t[0] << 16 | t[1], t[2] << 16 | t[3]]
        }
        function f(e, n) {
            return n %= 64,
            32 === n ? [e[1], e[0]] : n < 32 ? [e[0] << n | e[1] >>> 32 - n, e[1] << n | e[0] >>> 32 - n] : (n -= 32,
            [e[1] << n | e[0] >>> 32 - n, e[0] << n | e[1] >>> 32 - n])
        }
        function v(e, n) {
            return n %= 64,
            0 === n ? e : n < 32 ? [e[0] << n | e[1] >>> 32 - n, e[1] << n] : [e[1] << n - 32, 0]
        }
        function h(e, n) {
            return [e[0] ^ n[0], e[1] ^ n[1]]
        }
        function b(e) {
            return e = h(e, [0, e[0] >>> 1]),
            e = m(e, [4283543511, 3981806797]),
            e = h(e, [0, e[0] >>> 1]),
            e = m(e, [3301882366, 444984403]),
            e = h(e, [0, e[0] >>> 1]),
            e
        }
        function p(e, n) {
            e = e || "",
            n = n || 0;
            var t, r = e.length % 16, o = e.length - r, a = [0, n], i = [0, n], c = [0, 0], u = [0, 0], l = [2277735313, 289559509], s = [1291169091, 658871167];
            for (t = 0; t < o; t += 16)
                c = [255 & e.charCodeAt(t + 4) | (255 & e.charCodeAt(t + 5)) << 8 | (255 & e.charCodeAt(t + 6)) << 16 | (255 & e.charCodeAt(t + 7)) << 24, 255 & e.charCodeAt(t) | (255 & e.charCodeAt(t + 1)) << 8 | (255 & e.charCodeAt(t + 2)) << 16 | (255 & e.charCodeAt(t + 3)) << 24],
                u = [255 & e.charCodeAt(t + 12) | (255 & e.charCodeAt(t + 13)) << 8 | (255 & e.charCodeAt(t + 14)) << 16 | (255 & e.charCodeAt(t + 15)) << 24, 255 & e.charCodeAt(t + 8) | (255 & e.charCodeAt(t + 9)) << 8 | (255 & e.charCodeAt(t + 10)) << 16 | (255 & e.charCodeAt(t + 11)) << 24],
                c = m(c, l),
                c = f(c, 31),
                c = m(c, s),
                a = h(a, c),
                a = f(a, 27),
                a = d(a, i),
                a = d(m(a, [0, 5]), [0, 1390208809]),
                u = m(u, s),
                u = f(u, 33),
                u = m(u, l),
                i = h(i, u),
                i = f(i, 31),
                i = d(i, a),
                i = d(m(i, [0, 5]), [0, 944331445]);
            switch (c = [0, 0],
            u = [0, 0],
            r) {
            case 15:
                u = h(u, v([0, e.charCodeAt(t + 14)], 48));
            case 14:
                u = h(u, v([0, e.charCodeAt(t + 13)], 40));
            case 13:
                u = h(u, v([0, e.charCodeAt(t + 12)], 32));
            case 12:
                u = h(u, v([0, e.charCodeAt(t + 11)], 24));
            case 11:
                u = h(u, v([0, e.charCodeAt(t + 10)], 16));
            case 10:
                u = h(u, v([0, e.charCodeAt(t + 9)], 8));
            case 9:
                u = h(u, [0, e.charCodeAt(t + 8)]),
                u = m(u, s),
                u = f(u, 33),
                u = m(u, l),
                i = h(i, u);
            case 8:
                c = h(c, v([0, e.charCodeAt(t + 7)], 56));
            case 7:
                c = h(c, v([0, e.charCodeAt(t + 6)], 48));
            case 6:
                c = h(c, v([0, e.charCodeAt(t + 5)], 40));
            case 5:
                c = h(c, v([0, e.charCodeAt(t + 4)], 32));
            case 4:
                c = h(c, v([0, e.charCodeAt(t + 3)], 24));
            case 3:
                c = h(c, v([0, e.charCodeAt(t + 2)], 16));
            case 2:
                c = h(c, v([0, e.charCodeAt(t + 1)], 8));
            case 1:
                c = h(c, [0, e.charCodeAt(t)]),
                c = m(c, l),
                c = f(c, 31),
                c = m(c, s),
                a = h(a, c)
            }
            return a = h(a, [0, e.length]),
            i = h(i, [0, e.length]),
            a = d(a, i),
            i = d(i, a),
            a = b(a),
            i = b(i),
            a = d(a, i),
            i = d(i, a),
            ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[1] >>> 0).toString(16)).slice(-8)
        }
        function y(e) {
            var n;
            return (0,
            r.pi)({
                name: e.name,
                message: e.message,
                stack: null === (n = e.stack) || void 0 === n ? void 0 : n.split("\n")
            }, e)
        }
        function g(e, n) {
            for (var t = 0, r = e.length; t < r; ++t)
                if (e[t] === n)
                    return !0;
            return !1
        }
        function w(e, n) {
            return !g(e, n)
        }
        function L(e) {
            return parseInt(e)
        }
        function k(e) {
            return parseFloat(e)
        }
        function V(e, n) {
            return "number" === typeof e && isNaN(e) ? n : e
        }
        function W(e) {
            return e.reduce((function(e, n) {
                return e + (n ? 1 : 0)
            }
            ), 0)
        }
        function Z(e, n) {
            if (void 0 === n && (n = 1),
            Math.abs(n) >= 1)
                return Math.round(e / n) * n;
            var t = 1 / n;
            return Math.round(e * t) / t
        }
        function S(e) {
            for (var n, t, r = "Unexpected syntax '".concat(e, "'"), o = /^\s*([a-z-]*)(.*)$/i.exec(e), a = o[1] || void 0, i = {}, c = /([.:#][\w-]+|\[.+?\])/gi, u = function(e, n) {
                i[e] = i[e] || [],
                i[e].push(n)
            }; ; ) {
                var l = c.exec(o[2]);
                if (!l)
                    break;
                var s = l[0];
                switch (s[0]) {
                case ".":
                    u("class", s.slice(1));
                    break;
                case "#":
                    u("id", s.slice(1));
                    break;
                case "[":
                    var d = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(s);
                    if (!d)
                        throw new Error(r);
                    u(d[1], null !== (t = null !== (n = d[4]) && void 0 !== n ? n : d[5]) && void 0 !== t ? t : "");
                    break;
                default:
                    throw new Error(r)
                }
            }
            return [a, i]
        }
        function X(e) {
            return e && "object" === typeof e && "message"in e ? e : {
                message: e
            }
        }
        function F(e) {
            return "function" !== typeof e
        }
        function C(e, n) {
            var t = new Promise((function(t) {
                var r = Date.now();
                u(e.bind(null, n), (function() {
                    for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                    var o = Date.now() - r;
                    if (!e[0])
                        return t((function() {
                            return {
                                error: X(e[1]),
                                duration: o
                            }
                        }
                        ));
                    var a = e[1];
                    if (F(a))
                        return t((function() {
                            return {
                                value: a,
                                duration: o
                            }
                        }
                        ));
                    t((function() {
                        return new Promise((function(e) {
                            var n = Date.now();
                            u(a, (function() {
                                for (var t = [], r = 0; r < arguments.length; r++)
                                    t[r] = arguments[r];
                                var a = o + Date.now() - n;
                                if (!t[0])
                                    return e({
                                        error: X(t[1]),
                                        duration: a
                                    });
                                e({
                                    value: t[1],
                                    duration: a
                                })
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
                ))
            }
            ));
            return s(t),
            function() {
                return t.then((function(e) {
                    return e()
                }
                ))
            }
        }
        function G(e, n, t) {
            var o = Object.keys(e).filter((function(e) {
                return w(t, e)
            }
            ))
              , i = Array(o.length);
            return l(o, (function(t, r) {
                i[r] = C(e[t], n)
            }
            )),
            function() {
                return (0,
                r.mG)(this, void 0, void 0, (function() {
                    var e, n, t, c, u, d, m;
                    return (0,
                    r.Jh)(this, (function(f) {
                        switch (f.label) {
                        case 0:
                            for (e = {},
                            n = 0,
                            t = o; n < t.length; n++)
                                c = t[n],
                                e[c] = void 0;
                            u = Array(o.length),
                            d = function() {
                                var n;
                                return (0,
                                r.Jh)(this, (function(t) {
                                    switch (t.label) {
                                    case 0:
                                        return n = !0,
                                        [4, l(o, (function(t, r) {
                                            if (!u[r])
                                                if (i[r]) {
                                                    var o = i[r]().then((function(n) {
                                                        return e[t] = n
                                                    }
                                                    ));
                                                    s(o),
                                                    u[r] = o
                                                } else
                                                    n = !1
                                        }
                                        ))];
                                    case 1:
                                        return t.sent(),
                                        n ? [2, "break"] : [4, a(1)];
                                    case 2:
                                        return t.sent(),
                                        [2]
                                    }
                                }
                                ))
                            }
                            ,
                            f.label = 1;
                        case 1:
                            return [5, d()];
                        case 2:
                            if (m = f.sent(),
                            "break" === m)
                                return [3, 4];
                            f.label = 3;
                        case 3:
                            return [3, 1];
                        case 4:
                            return [4, Promise.all(u)];
                        case 5:
                            return f.sent(),
                            [2, e]
                        }
                    }
                    ))
                }
                ))
            }
        }
        function Y(e, n) {
            var t = function(e) {
                return F(e) ? n(e) : function() {
                    var t = e();
                    return c(t) ? t.then(n) : n(t)
                }
            };
            return function(n) {
                var r = e(n);
                return c(r) ? r.then(t) : t(r)
            }
        }
        function R() {
            var e = window
              , n = navigator;
            return W(["MSCSSMatrix"in e, "msSetImmediate"in e, "msIndexedDB"in e, "msMaxTouchPoints"in n, "msPointerEnabled"in n]) >= 4
        }
        function x() {
            var e = window
              , n = navigator;
            return W(["msWriteProfilerMark"in e, "MSStream"in e, "msLaunchUri"in n, "msSaveBlob"in n]) >= 3 && !R()
        }
        function M() {
            var e = window
              , n = navigator;
            return W(["webkitPersistentStorage"in n, "webkitTemporaryStorage"in n, 0 === n.vendor.indexOf("Google"), "webkitResolveLocalFileSystemURL"in e, "BatteryManager"in e, "webkitMediaStream"in e, "webkitSpeechGrammar"in e]) >= 5
        }
        function I() {
            var e = window
              , n = navigator;
            return W(["ApplePayError"in e, "CSSPrimitiveValue"in e, "Counter"in e, 0 === n.vendor.indexOf("Apple"), "getStorageUpdates"in n, "WebKitMediaKeys"in e]) >= 4
        }
        function j() {
            var e = window;
            return W(["safari"in e, !("DeviceMotionEvent"in e), !("ongestureend"in e), !("standalone"in navigator)]) >= 3
        }
        function J() {
            var e, n, t = window;
            return W(["buildID"in navigator, "MozAppearance"in (null !== (n = null === (e = document.documentElement) || void 0 === e ? void 0 : e.style) && void 0 !== n ? n : {}), "onmozfullscreenchange"in t, "mozInnerScreenX"in t, "CSSMozDocumentRule"in t, "CanvasCaptureMediaStream"in t]) >= 4
        }
        function A() {
            var e = window;
            return W([!("MediaSettingsRange"in e), "RTCEncodedAudioFrame"in e, "" + e.Intl === "[object Intl]", "" + e.Reflect === "[object Reflect]"]) >= 3
        }
        function H() {
            var e = window;
            return W(["DOMRectList"in e, "RTCPeerConnectionIceEvent"in e, "SVGGeometryElement"in e, "ontransitioncancel"in e]) >= 3
        }
        function N() {
            if ("iPad" === navigator.platform)
                return !0;
            var e = screen
              , n = e.width / e.height;
            return W(["MediaSource"in window, !!Element.prototype.webkitRequestFullscreen, n > .65 && n < 1.53]) >= 2
        }
        function P() {
            var e = document;
            return e.fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || null
        }
        function z() {
            var e = document;
            return (e.exitFullscreen || e.msExitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen).call(e)
        }
        function D() {
            var e = M()
              , n = J();
            if (!e && !n)
                return !1;
            var t = window;
            return W(["onorientationchange"in t, "orientation"in t, e && !("SharedWorker"in t), n && /android/i.test(navigator.appVersion)]) >= 2
        }
        function E() {
            var e = window
              , n = e.OfflineAudioContext || e.webkitOfflineAudioContext;
            if (!n)
                return -2;
            if (T())
                return -1;
            var t = 4500
              , r = 5e3
              , o = new n(1,r,44100)
              , a = o.createOscillator();
            a.type = "triangle",
            a.frequency.value = 1e4;
            var i = o.createDynamicsCompressor();
            i.threshold.value = -50,
            i.knee.value = 40,
            i.ratio.value = 12,
            i.attack.value = 0,
            i.release.value = .25,
            a.connect(i),
            i.connect(o.destination),
            a.start(0);
            var c = B(o)
              , u = c[0]
              , l = c[1]
              , d = u.then((function(e) {
                return _(e.getChannelData(0).subarray(t))
            }
            ), (function(e) {
                if ("timeout" === e.name || "suspended" === e.name)
                    return -3;
                throw e
            }
            ));
            return s(d),
            function() {
                return l(),
                d
            }
        }
        function T() {
            return I() && !j() && !H()
        }
        function B(e) {
            var n = 3
              , t = 500
              , r = 500
              , o = 5e3
              , a = function() {}
              , i = new Promise((function(i, u) {
                var l = !1
                  , d = 0
                  , m = 0;
                e.oncomplete = function(e) {
                    return i(e.renderedBuffer)
                }
                ;
                var f = function() {
                    setTimeout((function() {
                        return u(O("timeout"))
                    }
                    ), Math.min(r, m + o - Date.now()))
                }
                  , v = function() {
                    try {
                        var r = e.startRendering();
                        switch (c(r) && s(r),
                        e.state) {
                        case "running":
                            m = Date.now(),
                            l && f();
                            break;
                        case "suspended":
                            document.hidden || d++,
                            l && d >= n ? u(O("suspended")) : setTimeout(v, t);
                            break
                        }
                    } catch (o) {
                        u(o)
                    }
                };
                v(),
                a = function() {
                    l || (l = !0,
                    m > 0 && f())
                }
            }
            ));
            return [i, a]
        }
        function _(e) {
            for (var n = 0, t = 0; t < e.length; ++t)
                n += Math.abs(e[t]);
            return n
        }
        function O(e) {
            var n = new Error(e);
            return n.name = e,
            n
        }
        function Q(e, n, t) {
            var o, i, c;
            return void 0 === t && (t = 50),
            (0,
            r.mG)(this, void 0, void 0, (function() {
                var u, l;
                return (0,
                r.Jh)(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        u = document,
                        r.label = 1;
                    case 1:
                        return u.body ? [3, 3] : [4, a(t)];
                    case 2:
                        return r.sent(),
                        [3, 1];
                    case 3:
                        l = u.createElement("iframe"),
                        r.label = 4;
                    case 4:
                        return r.trys.push([4, , 10, 11]),
                        [4, new Promise((function(e, t) {
                            var r = !1
                              , o = function() {
                                r = !0,
                                e()
                            }
                              , a = function(e) {
                                r = !0,
                                t(e)
                            };
                            l.onload = o,
                            l.onerror = a;
                            var i = l.style;
                            i.setProperty("display", "block", "important"),
                            i.position = "absolute",
                            i.top = "0",
                            i.left = "0",
                            i.visibility = "hidden",
                            n && "srcdoc"in l ? l.srcdoc = n : l.src = "about:blank",
                            u.body.appendChild(l);
                            var c = function() {
                                var e, n;
                                r || ("complete" === (null === (n = null === (e = l.contentWindow) || void 0 === e ? void 0 : e.document) || void 0 === n ? void 0 : n.readyState) ? o() : setTimeout(c, 10))
                            };
                            c()
                        }
                        ))];
                    case 5:
                        r.sent(),
                        r.label = 6;
                    case 6:
                        return (null === (i = null === (o = l.contentWindow) || void 0 === o ? void 0 : o.document) || void 0 === i ? void 0 : i.body) ? [3, 8] : [4, a(t)];
                    case 7:
                        return r.sent(),
                        [3, 6];
                    case 8:
                        return [4, e(l, l.contentWindow)];
                    case 9:
                        return [2, r.sent()];
                    case 10:
                        return null === (c = l.parentNode) || void 0 === c || c.removeChild(l),
                        [7];
                    case 11:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        function U(e) {
            for (var n = S(e), t = n[0], r = n[1], o = document.createElement(null !== t && void 0 !== t ? t : "div"), a = 0, i = Object.keys(r); a < i.length; a++) {
                var c = i[a]
                  , u = r[c].join(" ");
                "style" === c ? K(o.style, u) : o.setAttribute(c, u)
            }
            return o
        }
        function K(e, n) {
            for (var t = 0, r = n.split(";"); t < r.length; t++) {
                var o = r[t]
                  , a = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(o);
                if (a) {
                    var i = a[1]
                      , c = a[2]
                      , u = a[4];
                    e.setProperty(i, c, u || "")
                }
            }
        }
        var q = "mmMwWLliI0O&1"
          , $ = "48px"
          , ee = ["monospace", "sans-serif", "serif"]
          , ne = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];
        function te() {
            return Q((function(e, n) {
                var t = n.document
                  , r = t.body;
                r.style.fontSize = $;
                var o = t.createElement("div")
                  , a = {}
                  , i = {}
                  , c = function(e) {
                    var n = t.createElement("span")
                      , r = n.style;
                    return r.position = "absolute",
                    r.top = "0",
                    r.left = "0",
                    r.fontFamily = e,
                    n.textContent = q,
                    o.appendChild(n),
                    n
                }
                  , u = function(e, n) {
                    return c("'".concat(e, "',").concat(n))
                }
                  , l = function() {
                    return ee.map(c)
                }
                  , s = function() {
                    for (var e = {}, n = function(n) {
                        e[n] = ee.map((function(e) {
                            return u(n, e)
                        }
                        ))
                    }, t = 0, r = ne; t < r.length; t++) {
                        var o = r[t];
                        n(o)
                    }
                    return e
                }
                  , d = function(e) {
                    return ee.some((function(n, t) {
                        return e[t].offsetWidth !== a[n] || e[t].offsetHeight !== i[n]
                    }
                    ))
                }
                  , m = l()
                  , f = s();
                r.appendChild(o);
                for (var v = 0; v < ee.length; v++)
                    a[ee[v]] = m[v].offsetWidth,
                    i[ee[v]] = m[v].offsetHeight;
                return ne.filter((function(e) {
                    return d(f[e])
                }
                ))
            }
            ))
        }
        function re() {
            var e = navigator.plugins;
            if (e) {
                for (var n = [], t = 0; t < e.length; ++t) {
                    var r = e[t];
                    if (r) {
                        for (var o = [], a = 0; a < r.length; ++a) {
                            var i = r[a];
                            o.push({
                                type: i.type,
                                suffixes: i.suffixes
                            })
                        }
                        n.push({
                            name: r.name,
                            description: r.description,
                            mimeTypes: o
                        })
                    }
                }
                return n
            }
        }
        function oe() {
            var e, n, t = !1, r = ae(), o = r[0], a = r[1];
            if (ie(o, a)) {
                t = ce(a),
                ue(o, a);
                var i = se(o)
                  , c = se(o);
                i !== c ? e = n = "unstable" : (n = i,
                le(o, a),
                e = se(o))
            } else
                e = n = "";
            return {
                winding: t,
                geometry: e,
                text: n
            }
        }
        function ae() {
            var e = document.createElement("canvas");
            return e.width = 1,
            e.height = 1,
            [e, e.getContext("2d")]
        }
        function ie(e, n) {
            return !(!n || !e.toDataURL)
        }
        function ce(e) {
            return e.rect(0, 0, 10, 10),
            e.rect(2, 2, 6, 6),
            !e.isPointInPath(5, 5, "evenodd")
        }
        function ue(e, n) {
            e.width = 240,
            e.height = 60,
            n.textBaseline = "alphabetic",
            n.fillStyle = "#f60",
            n.fillRect(100, 1, 62, 20),
            n.fillStyle = "#069",
            n.font = '11pt "Times New Roman"';
            var t = "Cwm fjordbank gly ".concat(String.fromCharCode(55357, 56835));
            n.fillText(t, 2, 15),
            n.fillStyle = "rgba(102, 204, 0, 0.2)",
            n.font = "18pt Arial",
            n.fillText(t, 4, 45)
        }
        function le(e, n) {
            e.width = 122,
            e.height = 110,
            n.globalCompositeOperation = "multiply";
            for (var t = 0, r = [["#f2f", 40, 40], ["#2ff", 80, 40], ["#ff2", 60, 80]]; t < r.length; t++) {
                var o = r[t]
                  , a = o[0]
                  , i = o[1]
                  , c = o[2];
                n.fillStyle = a,
                n.beginPath(),
                n.arc(i, c, 40, 0, 2 * Math.PI, !0),
                n.closePath(),
                n.fill()
            }
            n.fillStyle = "#f9c",
            n.arc(60, 60, 60, 0, 2 * Math.PI, !0),
            n.arc(60, 60, 20, 0, 2 * Math.PI, !0),
            n.fill("evenodd")
        }
        function se(e) {
            return e.toDataURL()
        }
        function de() {
            var e, n = navigator, t = 0;
            void 0 !== n.maxTouchPoints ? t = L(n.maxTouchPoints) : void 0 !== n.msMaxTouchPoints && (t = n.msMaxTouchPoints);
            try {
                document.createEvent("TouchEvent"),
                e = !0
            } catch (o) {
                e = !1
            }
            var r = "ontouchstart"in window;
            return {
                maxTouchPoints: t,
                touchEvent: e,
                touchStart: r
            }
        }
        function me() {
            return navigator.oscpu
        }
        function fe() {
            var e = navigator
              , n = []
              , t = e.language || e.userLanguage || e.browserLanguage || e.systemLanguage;
            if (void 0 !== t && n.push([t]),
            Array.isArray(e.languages))
                M() && A() || n.push(e.languages);
            else if ("string" === typeof e.languages) {
                var r = e.languages;
                r && n.push(r.split(","))
            }
            return n
        }
        function ve() {
            return window.screen.colorDepth
        }
        function he() {
            return V(k(navigator.deviceMemory), void 0)
        }
        function be() {
            var e = screen
              , n = function(e) {
                return V(L(e), null)
            }
              , t = [n(e.width), n(e.height)];
            return t.sort().reverse(),
            t
        }
        var pe, ye, ge = 2500, we = 10;
        function Le() {
            if (void 0 === ye) {
                var e = function() {
                    var n = We();
                    Ze(n) ? ye = setTimeout(e, ge) : (pe = n,
                    ye = void 0)
                };
                e()
            }
        }
        function ke() {
            var e = this;
            return Le(),
            function() {
                return (0,
                r.mG)(e, void 0, void 0, (function() {
                    var e;
                    return (0,
                    r.Jh)(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return e = We(),
                            Ze(e) ? pe ? [2, (0,
                            r.ev)([], pe, !0)] : P() ? [4, z()] : [3, 2] : [3, 2];
                        case 1:
                            n.sent(),
                            e = We(),
                            n.label = 2;
                        case 2:
                            return Ze(e) || (pe = e),
                            [2, e]
                        }
                    }
                    ))
                }
                ))
            }
        }
        function Ve() {
            var e = this
              , n = ke();
            return function() {
                return (0,
                r.mG)(e, void 0, void 0, (function() {
                    var e, t;
                    return (0,
                    r.Jh)(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            return [4, n()];
                        case 1:
                            return e = r.sent(),
                            t = function(e) {
                                return null === e ? null : Z(e, we)
                            }
                            ,
                            [2, [t(e[0]), t(e[1]), t(e[2]), t(e[3])]]
                        }
                    }
                    ))
                }
                ))
            }
        }
        function We() {
            var e = screen;
            return [V(k(e.availTop), null), V(k(e.width) - k(e.availWidth) - V(k(e.availLeft), 0), null), V(k(e.height) - k(e.availHeight) - V(k(e.availTop), 0), null), V(k(e.availLeft), null)]
        }
        function Ze(e) {
            for (var n = 0; n < 4; ++n)
                if (e[n])
                    return !1;
            return !0
        }
        function Se() {
            return V(L(navigator.hardwareConcurrency), void 0)
        }
        function Xe() {
            var e, n = null === (e = window.Intl) || void 0 === e ? void 0 : e.DateTimeFormat;
            if (n) {
                var t = (new n).resolvedOptions().timeZone;
                if (t)
                    return t
            }
            var r = -Fe();
            return "UTC".concat(r >= 0 ? "+" : "").concat(Math.abs(r))
        }
        function Fe() {
            var e = (new Date).getFullYear();
            return Math.max(k(new Date(e,0,1).getTimezoneOffset()), k(new Date(e,6,1).getTimezoneOffset()))
        }
        function Ce() {
            try {
                return !!window.sessionStorage
            } catch (e) {
                return !0
            }
        }
        function Ge() {
            try {
                return !!window.localStorage
            } catch (e) {
                return !0
            }
        }
        function Ye() {
            if (!R() && !x())
                try {
                    return !!window.indexedDB
                } catch (e) {
                    return !0
                }
        }
        function Re() {
            return !!window.openDatabase
        }
        function xe() {
            return navigator.cpuClass
        }
        function Me() {
            var e = navigator.platform;
            return "MacIntel" === e && I() && !j() ? N() ? "iPad" : "iPhone" : e
        }
        function Ie() {
            return navigator.vendor || ""
        }
        function je() {
            for (var e = [], n = 0, t = ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]; n < t.length; n++) {
                var r = t[n]
                  , o = window[r];
                o && "object" === typeof o && e.push(r)
            }
            return e.sort()
        }
        function Je() {
            var e = document;
            try {
                e.cookie = "cookietest=1; SameSite=Strict;";
                var n = -1 !== e.cookie.indexOf("cookietest=");
                return e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT",
                n
            } catch (t) {
                return !1
            }
        }
        function Ae() {
            var e = atob;
            return {
                abpIndo: ["#Iklan-Melayang", "#Kolom-Iklan-728", "#SidebarIklan-wrapper", e("YVt0aXRsZT0iN25hZ2EgcG9rZXIiIGld"), '[title="ALIENBOLA" i]'],
                abpvn: ["#quangcaomb", e("Lmlvc0Fkc2lvc0Fkcy1sYXlvdXQ="), ".quangcao", e("W2hyZWZePSJodHRwczovL3I4OC52bi8iXQ=="), e("W2hyZWZePSJodHRwczovL3piZXQudm4vIl0=")],
                adBlockFinland: [".mainostila", e("LnNwb25zb3JpdA=="), ".ylamainos", e("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"), e("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],
                adBlockPersian: ["#navbar_notice_50", ".kadr", 'TABLE[width="140px"]', "#divAgahi", e("I2FkMl9pbmxpbmU=")],
                adBlockWarningRemoval: ["#adblock-honeypot", ".adblocker-root", ".wp_adblock_detect", e("LmhlYWRlci1ibG9ja2VkLWFk"), e("I2FkX2Jsb2NrZXI=")],
                adGuardAnnoyances: ['amp-embed[type="zen"]', ".hs-sosyal", "#cookieconsentdiv", 'div[class^="app_gdpr"]', ".as-oil"],
                adGuardBase: [".BetterJsPopOverlay", e("I2FkXzMwMFgyNTA="), e("I2Jhbm5lcmZsb2F0MjI="), e("I2FkLWJhbm5lcg=="), e("I2NhbXBhaWduLWJhbm5lcg==")],
                adGuardChinese: [e("LlppX2FkX2FfSA=="), e("YVtocmVmKj0iL29kMDA1LmNvbSJd"), e("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"), ".qq_nr_lad", "#widget-quan"],
                adGuardFrench: [e("I2Jsb2NrLXZpZXdzLWFkcy1zaWRlYmFyLWJsb2NrLWJsb2Nr"), "#pavePub", e("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"), ".mobile_adhesion", ".widgetadv"],
                adGuardGerman: [e("LmJhbm5lcml0ZW13ZXJidW5nX2hlYWRfMQ=="), e("LmJveHN0YXJ0d2VyYnVuZw=="), e("LndlcmJ1bmcz"), e("YVtocmVmXj0iaHR0cDovL3d3dy5laXMuZGUvaW5kZXgucGh0bWw/cmVmaWQ9Il0="), e("YVtocmVmXj0iaHR0cHM6Ly93d3cudGlwaWNvLmNvbS8/YWZmaWxpYXRlSWQ9Il0=")],
                adGuardJapanese: ["#kauli_yad_1", e("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="), e("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="), e("LmFkZ29vZ2xl"), e("LmFkX3JlZ3VsYXIz")],
                adGuardMobile: [e("YW1wLWF1dG8tYWRz"), e("LmFtcF9hZA=="), 'amp-embed[type="24smi"]', "#mgid_iframe1", e("I2FkX2ludmlld19hcmVh")],
                adGuardRussian: [e("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="), e("LnJlY2xhbWE="), 'div[id^="smi2adblock"]', e("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"), e("I2FkX3NxdWFyZQ==")],
                adGuardSocial: [e("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="), e("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="), ".etsy-tweet", "#inlineShare", ".popup-social"],
                adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", e("W2hyZWZePSJodHRwOi8vYWRzLmdsaXNwYS5jb20vIl0=")],
                adGuardTrackingProtection: ["#qoo-counter", e("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="), e("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="), e("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="), "#top100counter"],
                adGuardTurkish: ["#backkapat", e("I3Jla2xhbWk="), e("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="), e("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"), e("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],
                bulgarian: [e("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers", e("I25ld0Fk")],
                easyList: [e("I0FEX0NPTlRST0xfMjg="), e("LnNlY29uZC1wb3N0LWFkcy13cmFwcGVy"), ".universalboxADVBOX03", e("LmFkdmVydGlzZW1lbnQtNzI4eDkw"), e("LnNxdWFyZV9hZHM=")],
                easyListChina: [e("YVtocmVmKj0iLndlbnNpeHVldGFuZy5jb20vIl0="), e("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="), e("LmZyb250cGFnZUFkdk0="), "#taotaole", "#aafoot.top_box"],
                easyListCookie: ["#AdaCompliance.app-notice", ".text-center.rgpd", ".panel--cookie", ".js-cookies-andromeda", ".elxtr-consent"],
                easyListCzechSlovak: ["#onlajny-stickers", e("I3Jla2xhbW5pLWJveA=="), e("LnJla2xhbWEtbWVnYWJvYXJk"), ".sklik", e("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],
                easyListDutch: [e("I2FkdmVydGVudGll"), e("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="), ".adstekst", e("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="), "#semilo-lrectangle"],
                easyListGermany: [e("I0FkX1dpbjJkYXk="), e("I3dlcmJ1bmdzYm94MzAw"), e("YVtocmVmXj0iaHR0cDovL3d3dy5yb3RsaWNodGthcnRlaS5jb20vP3NjPSJd"), e("I3dlcmJ1bmdfd2lkZXNreXNjcmFwZXJfc2NyZWVu"), e("YVtocmVmXj0iaHR0cDovL2xhbmRpbmcucGFya3BsYXR6a2FydGVpLmNvbS8/YWc9Il0=")],
                easyListItaly: [e("LmJveF9hZHZfYW5udW5jaQ=="), ".sb-box-pubbliredazionale", e("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"), e("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"), e("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],
                easyListLithuania: [e("LnJla2xhbW9zX3RhcnBhcw=="), e("LnJla2xhbW9zX251b3JvZG9z"), e("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"), e("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"), e("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],
                estonian: [e("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
                fanboyAnnoyances: ["#feedback-tab", "#taboola-below-article", ".feedburnerFeedBlock", ".widget-feedburner-counter", '[title="Subscribe to our blog"]'],
                fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
                fanboyEnhancedTrackers: [".open.pushModal", "#issuem-leaky-paywall-articles-zero-remaining-nag", "#sovrn_container", 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', ".BlockNag__Card"],
                fanboySocial: [".td-tags-and-social-wrapper-box", ".twitterContainer", ".youtube-social", 'a[title^="Like us on Facebook"]', 'img[alt^="Share on Digg"]'],
                frellwitSwedish: [e("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="), e("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="), "article.category-samarbete", e("ZGl2LmhvbGlkQWRz"), "ul.adsmodern"],
                greekAdBlock: [e("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"), e("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="), e("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"), "DIV.agores300", "TABLE.advright"],
                hungarian: ["#cemp_doboz", ".optimonk-iframe-container", e("LmFkX19tYWlu"), e("W2NsYXNzKj0iR29vZ2xlQWRzIl0="), "#hirdetesek_box"],
                iDontCareAboutCookies: ['.alert-info[data-block-track*="CookieNotice"]', ".ModuleTemplateCookieIndicator", ".o--cookies--container", ".cookie-msg-info-container", "#cookies-policy-sticky"],
                icelandicAbp: [e("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
                latvian: [e("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="), e("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],
                listKr: [e("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="), e("I2xpdmVyZUFkV3JhcHBlcg=="), e("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="), e("aW5zLmZhc3R2aWV3LWFk"), ".revenue_unit_item.dable"],
                listeAr: [e("LmdlbWluaUxCMUFk"), ".right-and-left-sponsers", e("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="), e("YVtocmVmKj0iYm9vcmFxLm9yZyJd"), e("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],
                listeFr: [e("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="), e("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="), e("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="), ".site-pub-interstitiel", 'div[id^="crt-"][data-criteo-id]'],
                officialPolish: ["#ceneo-placeholder-ceneo-12", e("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"), e("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="), e("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="), e("ZGl2I3NrYXBpZWNfYWQ=")],
                ro: [e("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"), 'a[href^="/magazin/"]', e("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"), e("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="), e("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd")],
                ruAd: [e("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"), e("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="), e("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="), "#pgeldiz", ".yandex-rtb-block"],
                thaiAds: ["a[href*=macau-uta-popup]", e("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="), e("LmFkczMwMHM="), ".bumq", ".img-kosana"],
                webAnnoyancesUltralist: ["#mod-social-share-2", "#social-tools", e("LmN0cGwtZnVsbGJhbm5lcg=="), ".zergnet-recommend", ".yt.btn-link.btn-md.btn"]
            }
        }
        function He(e) {
            var n = void 0 === e ? {} : e
              , t = n.debug;
            return (0,
            r.mG)(this, void 0, void 0, (function() {
                var e, n, o, a, i, c;
                return (0,
                r.Jh)(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return Ne() ? (e = Ae(),
                        n = Object.keys(e),
                        o = (c = []).concat.apply(c, n.map((function(n) {
                            return e[n]
                        }
                        ))),
                        [4, Pe(o)]) : [2, void 0];
                    case 1:
                        return a = r.sent(),
                        t && De(e, a),
                        i = n.filter((function(n) {
                            var t = e[n]
                              , r = W(t.map((function(e) {
                                return a[e]
                            }
                            )));
                            return r > .6 * t.length
                        }
                        )),
                        i.sort(),
                        [2, i]
                    }
                }
                ))
            }
            ))
        }
        function Ne() {
            return I() || D()
        }
        function Pe(e) {
            var n;
            return (0,
            r.mG)(this, void 0, void 0, (function() {
                var t, o, i, c, u, l, s;
                return (0,
                r.Jh)(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        for (t = document,
                        o = t.createElement("div"),
                        i = new Array(e.length),
                        c = {},
                        ze(o),
                        s = 0; s < e.length; ++s)
                            u = U(e[s]),
                            l = t.createElement("div"),
                            ze(l),
                            l.appendChild(u),
                            o.appendChild(l),
                            i[s] = u;
                        r.label = 1;
                    case 1:
                        return t.body ? [3, 3] : [4, a(50)];
                    case 2:
                        return r.sent(),
                        [3, 1];
                    case 3:
                        t.body.appendChild(o);
                        try {
                            for (s = 0; s < e.length; ++s)
                                i[s].offsetParent || (c[e[s]] = !0)
                        } finally {
                            null === (n = o.parentNode) || void 0 === n || n.removeChild(o)
                        }
                        return [2, c]
                    }
                }
                ))
            }
            ))
        }
        function ze(e) {
            e.style.setProperty("display", "block", "important")
        }
        function De(e, n) {
            for (var t = "DOM blockers debug:\n```", r = 0, o = Object.keys(e); r < o.length; r++) {
                var a = o[r];
                t += "\n".concat(a, ":");
                for (var i = 0, c = e[a]; i < c.length; i++) {
                    var u = c[i];
                    t += "\n  ".concat(n[u] ? "🚫" : "➡️", " ").concat(u)
                }
            }
            console.log("".concat(t, "\n```"))
        }
        function Ee() {
            for (var e = 0, n = ["rec2020", "p3", "srgb"]; e < n.length; e++) {
                var t = n[e];
                if (matchMedia("(color-gamut: ".concat(t, ")")).matches)
                    return t
            }
        }
        function Te() {
            return !!Be("inverted") || !Be("none") && void 0
        }
        function Be(e) {
            return matchMedia("(inverted-colors: ".concat(e, ")")).matches
        }
        function _e() {
            return !!Oe("active") || !Oe("none") && void 0
        }
        function Oe(e) {
            return matchMedia("(forced-colors: ".concat(e, ")")).matches
        }
        var Qe = 100;
        function Ue() {
            if (matchMedia("(min-monochrome: 0)").matches) {
                for (var e = 0; e <= Qe; ++e)
                    if (matchMedia("(max-monochrome: ".concat(e, ")")).matches)
                        return e;
                throw new Error("Too high value")
            }
        }
        function Ke() {
            return qe("no-preference") ? 0 : qe("high") || qe("more") ? 1 : qe("low") || qe("less") ? -1 : qe("forced") ? 10 : void 0
        }
        function qe(e) {
            return matchMedia("(prefers-contrast: ".concat(e, ")")).matches
        }
        function $e() {
            return !!en("reduce") || !en("no-preference") && void 0
        }
        function en(e) {
            return matchMedia("(prefers-reduced-motion: ".concat(e, ")")).matches
        }
        function nn() {
            return !!tn("high") || !tn("standard") && void 0
        }
        function tn(e) {
            return matchMedia("(dynamic-range: ".concat(e, ")")).matches
        }
        var rn = Math
          , on = function() {
            return 0
        };
        function an() {
            var e = rn.acos || on
              , n = rn.acosh || on
              , t = rn.asin || on
              , r = rn.asinh || on
              , o = rn.atanh || on
              , a = rn.atan || on
              , i = rn.sin || on
              , c = rn.sinh || on
              , u = rn.cos || on
              , l = rn.cosh || on
              , s = rn.tan || on
              , d = rn.tanh || on
              , m = rn.exp || on
              , f = rn.expm1 || on
              , v = rn.log1p || on
              , h = function(e) {
                return rn.pow(rn.PI, e)
            }
              , b = function(e) {
                return rn.log(e + rn.sqrt(e * e - 1))
            }
              , p = function(e) {
                return rn.log(e + rn.sqrt(e * e + 1))
            }
              , y = function(e) {
                return rn.log((1 + e) / (1 - e)) / 2
            }
              , g = function(e) {
                return rn.exp(e) - 1 / rn.exp(e) / 2
            }
              , w = function(e) {
                return (rn.exp(e) + 1 / rn.exp(e)) / 2
            }
              , L = function(e) {
                return rn.exp(e) - 1
            }
              , k = function(e) {
                return (rn.exp(2 * e) - 1) / (rn.exp(2 * e) + 1)
            }
              , V = function(e) {
                return rn.log(1 + e)
            };
            return {
                acos: e(.12312423423423424),
                acosh: n(1e308),
                acoshPf: b(1e154),
                asin: t(.12312423423423424),
                asinh: r(1),
                asinhPf: p(1),
                atanh: o(.5),
                atanhPf: y(.5),
                atan: a(.5),
                sin: i(-1e300),
                sinh: c(1),
                sinhPf: g(1),
                cos: u(10.000000000123),
                cosh: l(1),
                coshPf: w(1),
                tan: s(-1e300),
                tanh: d(1),
                tanhPf: k(1),
                exp: m(1),
                expm1: f(1),
                expm1Pf: L(1),
                log1p: v(10),
                log1pPf: V(10),
                powPI: h(-100)
            }
        }
        var cn = "mmMwWLliI0fiflO&1"
          , un = {
            default: [],
            apple: [{
                font: "-apple-system-body"
            }],
            serif: [{
                fontFamily: "serif"
            }],
            sans: [{
                fontFamily: "sans-serif"
            }],
            mono: [{
                fontFamily: "monospace"
            }],
            min: [{
                fontSize: "1px"
            }],
            system: [{
                fontFamily: "system-ui"
            }]
        };
        function ln() {
            return sn((function(e, n) {
                for (var t = {}, r = {}, o = 0, a = Object.keys(un); o < a.length; o++) {
                    var i = a[o]
                      , c = un[i]
                      , u = c[0]
                      , l = void 0 === u ? {} : u
                      , s = c[1]
                      , d = void 0 === s ? cn : s
                      , m = e.createElement("span");
                    m.textContent = d,
                    m.style.whiteSpace = "nowrap";
                    for (var f = 0, v = Object.keys(l); f < v.length; f++) {
                        var h = v[f]
                          , b = l[h];
                        void 0 !== b && (m.style[h] = b)
                    }
                    t[i] = m,
                    n.appendChild(e.createElement("br")),
                    n.appendChild(m)
                }
                for (var p = 0, y = Object.keys(un); p < y.length; p++) {
                    i = y[p];
                    r[i] = t[i].getBoundingClientRect().width
                }
                return r
            }
            ))
        }
        function sn(e, n) {
            return void 0 === n && (n = 4e3),
            Q((function(t, o) {
                var a = o.document
                  , i = a.body
                  , c = i.style;
                c.width = "".concat(n, "px"),
                c.webkitTextSizeAdjust = c.textSizeAdjust = "none",
                M() ? i.style.zoom = "".concat(1 / o.devicePixelRatio) : I() && (i.style.zoom = "reset");
                var u = a.createElement("div");
                return u.textContent = (0,
                r.ev)([], Array(n / 20 << 0), !0).map((function() {
                    return "word"
                }
                )).join(" "),
                i.appendChild(u),
                e(a, i)
            }
            ), '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')
        }
        function dn() {
            var e, n = document.createElement("canvas"), t = null !== (e = n.getContext("webgl")) && void 0 !== e ? e : n.getContext("experimental-webgl");
            if (t && "getExtension"in t) {
                var r = t.getExtension("WEBGL_debug_renderer_info");
                if (r)
                    return {
                        vendor: (t.getParameter(r.UNMASKED_VENDOR_WEBGL) || "").toString(),
                        renderer: (t.getParameter(r.UNMASKED_RENDERER_WEBGL) || "").toString()
                    }
            }
        }
        function mn() {
            return navigator.pdfViewerEnabled
        }
        function fn() {
            var e = new Float32Array(1)
              , n = new Uint8Array(e.buffer);
            return e[0] = 1 / 0,
            e[0] = e[0] - e[0],
            n[3]
        }
        var vn = {
            fonts: te,
            domBlockers: He,
            fontPreferences: ln,
            audio: E,
            screenFrame: Ve,
            osCpu: me,
            languages: fe,
            colorDepth: ve,
            deviceMemory: he,
            screenResolution: be,
            hardwareConcurrency: Se,
            timezone: Xe,
            sessionStorage: Ce,
            localStorage: Ge,
            indexedDB: Ye,
            openDatabase: Re,
            cpuClass: xe,
            platform: Me,
            plugins: re,
            canvas: oe,
            touchSupport: de,
            vendor: Ie,
            vendorFlavors: je,
            cookiesEnabled: Je,
            colorGamut: Ee,
            invertedColors: Te,
            forcedColors: _e,
            monochrome: Ue,
            contrast: Ke,
            reducedMotion: $e,
            hdr: nn,
            math: an,
            videoCard: dn,
            pdfViewerEnabled: mn,
            architecture: fn
        };
        function hn(e) {
            return G(vn, e, [])
        }
        var bn = "$ if upgrade to Pro: https://fpjs.dev/pro";
        function pn(e) {
            var n = yn(e)
              , t = gn(n);
            return {
                score: n,
                comment: bn.replace(/\$/g, "".concat(t))
            }
        }
        function yn(e) {
            if (D())
                return .4;
            if (I())
                return j() ? .5 : .3;
            var n = e.platform.value || "";
            return /^Win/.test(n) ? .6 : /^Mac/.test(n) ? .5 : .7
        }
        function gn(e) {
            return Z(.99 + .01 * e, 1e-4)
        }
        function wn(e) {
            for (var n = "", t = 0, r = Object.keys(e).sort(); t < r.length; t++) {
                var o = r[t]
                  , a = e[o]
                  , i = a.error ? "error" : JSON.stringify(a.value);
                n += "".concat(n ? "|" : "").concat(o.replace(/([:|\\])/g, "\\$1"), ":").concat(i)
            }
            return n
        }
        function Ln(e) {
            return JSON.stringify(e, (function(e, n) {
                return n instanceof Error ? y(n) : n
            }
            ), 2)
        }
        function kn(e) {
            return p(wn(e))
        }
        function Vn(e) {
            var n, t = pn(e);
            return {
                get visitorId() {
                    return void 0 === n && (n = kn(this.components)),
                    n
                },
                set visitorId(e) {
                    n = e
                },
                confidence: t,
                components: e,
                version: o
            }
        }
        function Wn(e) {
            return void 0 === e && (e = 50),
            i(e, 2 * e)
        }
        function Zn(e, n) {
            var t = Date.now();
            return {
                get: function(o) {
                    return (0,
                    r.mG)(this, void 0, void 0, (function() {
                        var a, i, c;
                        return (0,
                        r.Jh)(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                return a = Date.now(),
                                [4, e()];
                            case 1:
                                return i = r.sent(),
                                c = Vn(i),
                                (n || (null === o || void 0 === o ? void 0 : o.debug)) && console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(c.version, "\nuserAgent: ").concat(navigator.userAgent, "\ntimeBetweenLoadAndGet: ").concat(a - t, "\nvisitorId: ").concat(c.visitorId, "\ncomponents: ").concat(Ln(i), "\n```")),
                                [2, c]
                            }
                        }
                        ))
                    }
                    ))
                }
            }
        }
        function Sn() {
            if (!(window.__fpjs_d_m || Math.random() >= .001))
                try {
                    var e = new XMLHttpRequest;
                    e.open("get", "https://m1.openfpcdn.io/fingerprintjs/v".concat(o, "/npm-monitoring"), !0),
                    e.send()
                } catch (n) {
                    console.error(n)
                }
        }
        function Xn(e) {
            var n = void 0 === e ? {} : e
              , t = n.delayFallback
              , o = n.debug
              , a = n.monitoring
              , i = void 0 === a || a;
            return (0,
            r.mG)(this, void 0, void 0, (function() {
                var e;
                return (0,
                r.Jh)(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return i && Sn(),
                        [4, Wn(t)];
                    case 1:
                        return n.sent(),
                        e = hn({
                            debug: o
                        }),
                        [2, Zn(e, o)]
                    }
                }
                ))
            }
            ))
        }
        var Fn = {
            load: Xn,
            hashComponents: kn,
            componentsToDebugString: Ln
        }
          , Cn = p
    }
}]);
//# sourceMappingURL=229.8ce4f917.js.map
