"use strict";
(self["webpackChunk_app_fairspin"] = self["webpackChunk_app_fairspin"] || []).push([[470], {
    74470: (t,n,e)=>{
        e.r(n);
        var a = e(86397)
          , c = e(10045)
          , o = e.n(c)
          , i = e(75081)
          , r = e.n(i)
          , s = e(42862)
          , u = e(21244)
          , d = e(21553)
          , l = s.Z.state.configs.lang
          , p = "https://livechatv2.chat2desk.com"
          , v = s.Z.state.configs.chat2DeskId || "c342a3c608ecf362fc025be77de93664"
          , f = "wss://livechatv2.chat2desk.com/widget_ws_new"
          , h = "true"
          , m = "https://storage.chat2desk.com/";
        Object.assign(window, {
            lang: "ru" === l ? "ru" : "en",
            chat24_url: p,
            chat24_token: v,
            chat24_socket_url: f,
            chat24_show_new_wysiwyg: h,
            chat24_static_files_domain: m
        });
        var w = "c2d_widget_id";
        function g() {
            var t = "[".concat(s.Z.state.configs.lang, "]");
            return s.Z.state.account.logged ? {
                name: "".concat(s.Z.state.account.email, " ").concat(t),
                phone: s.Z.state.account.phoneNumber
            } : {
                name: "Guest ".concat(t)
            }
        }
        function y(t) {
            return void 0 === t && (t = 20),
            Array.from({
                length: Math.ceil(t / 10)
            }).map((function() {
                return Math.random().toString(36).slice(2)
            }
            )).join("").slice(0, t)
        }
        function _() {
            return JSON.parse((0,
            u.PM)("chatWidgetClients"))
        }
        function k(t) {
            var n, e = null === (n = _()) || void 0 === n ? void 0 : n[t];
            return "object" === typeof e ? e : {
                id: e
            }
        }
        function S(t, n) {
            var e;
            (0,
            u.pm)("chatWidgetClients", JSON.stringify((0,
            a.pi)((0,
            a.pi)({}, _() || {}), (e = {},
            e[t] = n,
            e))))
        }
        function j() {
            var t, n = o().get(w);
            if (n)
                try {
                    return null === (t = JSON.parse(decodeURI(n))) || void 0 === t ? void 0 : t[v]
                } catch (e) {}
        }
        function O(t) {
            var n, e = new Date;
            e.setTime(e.getTime() + 94608e7);
            var a = encodeURI(JSON.stringify((n = {},
            n[v] = t,
            n)));
            document.cookie = "".concat(w, "=").concat(a, ";expires=").concat(e.toUTCString(), ";path=/")
        }
        function b(t) {
            var n, e = null === (n = k(t.name)) || void 0 === n ? void 0 : n.id;
            if (!e) {
                var a = j();
                if (a) {
                    var c = _() || {}
                      , o = Object.keys(c).map((function(t) {
                        return c[t].id
                    }
                    ));
                    -1 === o.indexOf(a) && (e = a)
                }
            }
            return e
        }
        function T() {
            var t = g()
              , n = b(t);
            (!n || n.length < 27) && (n = "[chat] ".concat(y())),
            O(n),
            S(t.name, {
                id: n
            })
        }
        function C() {
            var t = _() || {};
            r()(t, (function(t) {
                S(t, (0,
                a.pi)((0,
                a.pi)({}, k(t)), {
                    sync: !1
                }))
            }
            ))
        }
        function I(t) {
            void 0 === t && (t = 5);
            var n = g()
              , e = k(n.name);
            if (e && !e.sync) {
                C();
                var c = Z();
                c.onreadystatechange = function() {
                    4 === c.readyState && (200 === c.status ? S(n.name, (0,
                    a.pi)((0,
                    a.pi)({}, e), {
                        sync: !0
                    })) : t > 0 && setTimeout((function() {
                        return I(--t)
                    }
                    ), 5e3))
                }
                ,
                c.send(JSON.stringify({
                    client_id: e.id,
                    data: {
                        name: n.name,
                        phone: n.phone
                    },
                    widget_token: v
                }))
            }
        }
        function Z() {
            var t = new XMLHttpRequest;
            return t.open("POST", "".concat(p, "/send_client_params")),
            t.setRequestHeader("Content-Type", "application/json;charset=UTF-8"),
            t
        }
        function q() {
            var t = "".concat(p, "/packs/manifest.json?nocache=").concat((new Date).getTime());
            window.fetch(t).then((function(t) {
                return t.json()
            }
            )).then((function(t) {
                var n = ["/packs/ie-11-support.js", t["application.js"]];
                n.forEach((function(t) {
                    var n = document.createElement("script");
                    n.type = "text/javascript",
                    n.async = !0,
                    n.src = "".concat(p).concat(t),
                    document.body.appendChild(n)
                }
                ))
            }
            ))
        }
        T(),
        q();
        var N = window.setInterval((function() {
            var t, n, e = null === (n = null === (t = document.querySelector("#chat24-root chat-24")) || void 0 === t ? void 0 : t.shadowRoot) || void 0 === n ? void 0 : n.querySelector(".online-chat:not(.online-chat--collapsed)");
            e && (window.clearInterval(N),
            I())
        }
        ), 1e3)
          , R = window.setInterval((function() {
            var t, n, e = null === (n = null === (t = document.querySelector("#chat24-root chat-24")) || void 0 === t ? void 0 : t.shadowRoot) || void 0 === n ? void 0 : n.querySelector(".startBtn");
            e && (window.clearInterval(R),
            (0,
            d.z)(s.Z.state.layout.menuBar))
        }
        ), 100)
    }
}]);
//# sourceMappingURL=470.370c50bc.js.map
