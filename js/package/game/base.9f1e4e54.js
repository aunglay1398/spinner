"use strict";
(self["webpackChunk_app_fairspin"] = self["webpackChunk_app_fairspin"] || []).push([[53], {
    25731: (e,t,a)=>{
        a.r(t),
        a.d(t, {
            GameBaseActions: ()=>d,
            GameBaseBadges: ()=>B,
            GameBaseFavorite: ()=>C,
            GameBaseProvider: ()=>I,
            GameBaseRealOnly: ()=>D,
            GameBaseSkeleton: ()=>O,
            GameBaseStatistic: ()=>z,
            GameBaseThumbnail: ()=>se
        });
        var r = a(95922)
          , n = {
            class: "game-base-actions",
            "data-game-base-actions": ""
        };
        function o(e, t, a, o, s, i) {
            return (0,
            r.openBlock)(),
            (0,
            r.createElementBlock)("div", n, [(0,
            r.createVNode)(o["BaseButton"], {
                class: "game-base-actions__item",
                block: !0,
                to: o.playView,
                size: "large",
                variant: "primary",
                "data-game-base-actions-play": ""
            }, {
                default: (0,
                r.withCtx)((function() {
                    return [(0,
                    r.createTextVNode)((0,
                    r.toDisplayString)(o.t("game.base.action.play")), 1)]
                }
                ), void 0, !0),
                _: 1
            }, 8, ["to"]), a.game.live ? (0,
            r.createCommentVNode)("", !0) : ((0,
            r.openBlock)(),
            (0,
            r.createBlock)(o["BaseButton"], {
                key: 0,
                class: "game-base-actions__item",
                block: !0,
                to: o.demoView,
                size: "large",
                variant: "standard",
                "data-game-base-actions-demo": ""
            }, {
                default: (0,
                r.withCtx)((function() {
                    return [(0,
                    r.createTextVNode)((0,
                    r.toDisplayString)(o.t("game.base.action.demo")), 1)]
                }
                ), void 0, !0),
                _: 1
            }, 8, ["to"]))])
        }
        var s = a(86397)
          , i = a(454)
          , c = a(72199);
        const l = (0,
        r.defineComponent)({
            __name: "GameBaseActions",
            props: {
                game: {}
            },
            setup: function(e, t) {
                var a = t.expose;
                a();
                var n = e
                  , o = (0,
                c.QT)().t
                  , l = (0,
                c.yj)()
                  , u = (0,
                c.tv)()
                  , m = (0,
                r.inject)("isLogged")
                  , d = (0,
                r.inject)("routeUtils")
                  , g = d.getSignInLocation
                  , p = d.getGamePlayLocation
                  , v = (0,
                r.computed)((function() {
                    return n.game.providerFriendlyUrl || n.game.provider
                }
                ))
                  , b = (0,
                r.computed)((function() {
                    return p(n.game.code, v.value, "demo")
                }
                ))
                  , f = (0,
                r.computed)((function() {
                    var e = p(n.game.code, v.value);
                    return m.value ? e : g((0,
                    s.pi)((0,
                    s.pi)({}, l), {
                        query: {
                            redirect: u.resolve(e).fullPath
                        }
                    }))
                }
                ))
                  , _ = {
                    props: n,
                    t: o,
                    route: l,
                    router: u,
                    isLogged: m,
                    getSignInLocation: g,
                    getGamePlayLocation: p,
                    provider: v,
                    demoView: b,
                    playView: f,
                    inject: r.inject,
                    get BaseButton() {
                        return i.Yd
                    },
                    get useI18n() {
                        return c.QT
                    },
                    get useRoute() {
                        return c.yj
                    },
                    get useRouter() {
                        return c.tv
                    }
                };
                return Object.defineProperty(_, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                _
            }
        });
        var u = a(39673);
        const m = (0,
        u.Z)(l, [["render", o], ["__scopeId", "data-v-18b19951"]])
          , d = m;
        var g = {
            class: "game-base-badges",
            "data-game-base-badges": ""
        }
          , p = ["data-game-badge-type"];
        function v(e, t, a, n, o, s) {
            return (0,
            r.openBlock)(),
            (0,
            r.createElementBlock)("div", g, [((0,
            r.openBlock)(!0),
            (0,
            r.createElementBlock)(r.Fragment, null, (0,
            r.renderList)(n.tags, (function(t) {
                return (0,
                r.openBlock)(),
                (0,
                r.createElementBlock)("div", {
                    class: "game-base-badges__item",
                    key: t,
                    "data-game-badge-type": t,
                    "data-game-base-badges-item": ""
                }, (0,
                r.toDisplayString)(e.$t("views.catalog.base.tag.item.".concat(t))), 9, p)
            }
            )), 128))])
        }
        var b = a(6042);
        const f = (0,
        r.defineComponent)({
            __name: "GameBaseBadges",
            props: {
                game: {}
            },
            setup: function(e, t) {
                var a = t.expose;
                a();
                var n = e
                  , o = (0,
                r.computed)((function() {
                    return (0,
                    b.jj)(n.game.tags)
                }
                ))
                  , s = {
                    props: n,
                    tags: o,
                    get uniq() {
                        return b.jj
                    }
                };
                return Object.defineProperty(s, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                s
            }
        })
          , _ = (0,
        u.Z)(f, [["render", v], ["__scopeId", "data-v-d76453f2"]])
          , B = _;
        function y(e, t, a, n, o, s) {
            return (0,
            r.openBlock)(),
            (0,
            r.createElementBlock)("div", {
                class: "game-base-favorite",
                onClick: t[0] || (t[0] = function(e) {
                    return n.toggleFavorite()
                }
                ),
                "data-game-base-favorite": ""
            }, [(0,
            r.createVNode)(r.Transition, {
                mode: "out-in"
            }, {
                default: (0,
                r.withCtx)((function() {
                    return [n.isFavorite ? ((0,
                    r.openBlock)(),
                    (0,
                    r.createBlock)(n["BaseSvgSprite"], {
                        key: 0,
                        class: "game-base-favorite__icon",
                        icon: "icon-favorite",
                        src: n.spriteUrl,
                        "data-game-base-favorite-added": ""
                    }, null, 8, ["src"])) : ((0,
                    r.openBlock)(),
                    (0,
                    r.createBlock)(n["BaseSvgSprite"], {
                        key: 1,
                        class: "game-base-favorite__icon",
                        icon: "icon-favorite-add",
                        src: n.spriteUrl,
                        "data-game-base-favorite-add": ""
                    }, null, 8, ["src"]))]
                }
                ), void 0, !0),
                _: 1
            })])
        }
        var k = a(42364)
          , x = a(49557);
        const S = (0,
        r.defineComponent)({
            __name: "GameBaseFavorite",
            props: {
                game: {}
            },
            emits: ["change"],
            setup: function(e, t) {
                var a, n = t.expose, o = t.emit;
                n();
                var s = e
                  , c = (0,
                k.oR)()
                  , l = (0,
                r.inject)("assets")
                  , u = (0,
                r.inject)("nsAssetUrl")
                  , m = (0,
                r.ref)(null === (a = s.game) || void 0 === a ? void 0 : a.favorite)
                  , d = (0,
                r.computed)((function() {
                    return "".concat(u.value, "/base/").concat(l.value.svgCritical)
                }
                ));
                function g() {
                    m.value = !m.value,
                    (0,
                    x.SB)(s.game, m.value).then((function() {
                        o("change", m.value)
                    }
                    )).catch((function() {
                        m.value = !m.value
                    }
                    ))
                }
                var p = {
                    props: s,
                    emits: o,
                    store: c,
                    assets: l,
                    nsAssetUrl: u,
                    isFavorite: m,
                    spriteUrl: d,
                    toggleFavorite: g,
                    inject: r.inject,
                    get useStore() {
                        return k.oR
                    },
                    get BaseSvgSprite() {
                        return i.Ex
                    },
                    get changeFavorite() {
                        return x.SB
                    }
                };
                return Object.defineProperty(p, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                p
            }
        })
          , h = (0,
        u.Z)(S, [["render", y], ["__scopeId", "data-v-0d1b2f22"]])
          , C = h;
        var j = ["src", "alt"];
        function V(e, t, a, n, o, s) {
            return (0,
            r.openBlock)(),
            (0,
            r.createBlock)((0,
            r.resolveDynamicComponent)(n.tag), {
                class: "game-base-provider",
                to: n.detailView,
                "data-game-base-provider": ""
            }, {
                default: (0,
                r.withCtx)((function() {
                    return [n.isError ? (0,
                    r.createCommentVNode)("", !0) : ((0,
                    r.openBlock)(),
                    (0,
                    r.createElementBlock)("img", {
                        key: 0,
                        class: "game-base-provider__logo",
                        loading: "lazy",
                        src: n.logoUrl,
                        alt: n.t("game.base.alt", [a.code]),
                        draggable: !1,
                        onError: t[0] || (t[0] = function(e) {
                            return n.isError = !0
                        }
                        ),
                        "data-game-base-provider-logo": ""
                    }, null, 40, j)), (0,
                    r.renderSlot)(e.$slots, "default", {}, void 0, !0), e.$slots.tooltip ? ((0,
                    r.openBlock)(),
                    (0,
                    r.createBlock)(n["BaseTooltip"], {
                        key: 1,
                        class: "game-base-provider__tooltip",
                        offset: [5, 12],
                        self: "bottom right",
                        anchor: "top right",
                        "transition-show": "fade",
                        "transition-hide": "fade",
                        "transition-duration": "200",
                        "data-game-base-provider-tooltip": ""
                    }, {
                        default: (0,
                        r.withCtx)((function() {
                            return [(0,
                            r.renderSlot)(e.$slots, "tooltip", {}, void 0, !0)]
                        }
                        ), void 0, !0),
                        _: 3
                    })) : (0,
                    r.createCommentVNode)("", !0)]
                }
                ), void 0, !0),
                _: 3
            }, 8, ["to"])
        }
        const N = (0,
        r.defineComponent)({
            __name: "GameBaseProvider",
            props: {
                code: {},
                url: {},
                isLink: {
                    type: Boolean,
                    default: !0
                }
            },
            setup: function(e, t) {
                var a = t.expose;
                a();
                var n = e
                  , o = (0,
                r.ref)(!1)
                  , s = (0,
                c.QT)().t
                  , l = (0,
                r.inject)("nsAssetUrl")
                  , u = (0,
                r.inject)("routeUtils").getProviderDetailLocation
                  , m = (0,
                r.computed)((function() {
                    var e;
                    return "".concat(l.value, "/provider/mini/").concat(null === (e = n.code) || void 0 === e ? void 0 : e.toLowerCase(), ".svg")
                }
                ))
                  , d = (0,
                r.computed)((function() {
                    return n.isLink ? c.rH : "div"
                }
                ))
                  , g = (0,
                r.computed)((function() {
                    var e;
                    return u(null !== (e = n.url) && void 0 !== e ? e : n.code)
                }
                ))
                  , p = {
                    props: n,
                    isError: o,
                    t: s,
                    nsAssetUrl: l,
                    getProviderDetailLocation: u,
                    logoUrl: m,
                    tag: d,
                    detailView: g,
                    inject: r.inject,
                    get BaseTooltip() {
                        return i.N6
                    },
                    get RouterLink() {
                        return c.rH
                    },
                    get useI18n() {
                        return c.QT
                    }
                };
                return Object.defineProperty(p, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                p
            }
        })
          , w = (0,
        u.Z)(N, [["render", V], ["__scopeId", "data-v-084638db"]])
          , I = w;
        var T = {
            class: "game-base-real-only",
            "data-game-base-real-only": ""
        };
        function E(e, t, a, n, o, s) {
            return (0,
            r.openBlock)(),
            (0,
            r.createElementBlock)("div", T, [a.plain ? (0,
            r.createCommentVNode)("", !0) : ((0,
            r.openBlock)(),
            (0,
            r.createBlock)(n["BaseSvgSprite"], {
                key: 0,
                class: "game-base-real-only__icon",
                icon: "icon-info",
                src: n.spriteUrl
            }, null, 8, ["src"])), (0,
            r.createTextVNode)((0,
            r.toDisplayString)(n.t("game.base.real_only")), 1)])
        }
        const G = (0,
        r.defineComponent)({
            __name: "GameBaseRealOnly",
            props: {
                plain: {}
            },
            setup: function(e, t) {
                var a = t.expose;
                a();
                var n = e
                  , o = (0,
                c.QT)().t
                  , s = (0,
                r.inject)("assets")
                  , l = (0,
                r.inject)("nsAssetUrl")
                  , u = (0,
                r.computed)((function() {
                    return "".concat(l.value, "/base/").concat(s.value.svgCritical)
                }
                ))
                  , m = {
                    props: n,
                    t: o,
                    assets: s,
                    nsAssetUrl: l,
                    spriteUrl: u,
                    inject: r.inject,
                    get useI18n() {
                        return c.QT
                    },
                    get BaseSvgSprite() {
                        return i.Ex
                    }
                };
                return Object.defineProperty(m, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                m
            }
        })
          , U = (0,
        u.Z)(G, [["render", E], ["__scopeId", "data-v-aa77b582"]])
          , D = U;
        var A = {
            class: "game-base-skeleton",
            "data-game-base-skeleton": ""
        }
          , P = ["src"];
        function L(e, t, n, o, s, i) {
            return (0,
            r.openBlock)(),
            (0,
            r.createElementBlock)("div", A, [(0,
            r.createElementVNode)("img", {
                class: (0,
                r.normalizeClass)(["game-base-skeleton__background", {
                    offset: n.offset
                }]),
                alt: "Play Game",
                src: a(18450),
                width: "400",
                height: "300",
                draggable: !1
            }, null, 10, P), (0,
            r.createVNode)(o["BaseSkeleton"], {
                class: "game-base-skeleton__content"
            })])
        }
        const Z = (0,
        r.defineComponent)({
            __name: "GameBaseSkeleton",
            props: {
                offset: {
                    type: Boolean,
                    default: !0
                }
            },
            setup: function(e, t) {
                var a = t.expose;
                a();
                var r = e
                  , n = {
                    props: r,
                    get BaseSkeleton() {
                        return i.aM
                    }
                };
                return Object.defineProperty(n, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                n
            }
        })
          , Q = (0,
        u.Z)(Z, [["render", L], ["__scopeId", "data-v-89c4ee36"]])
          , O = Q;
        function R(e, t, a, n, o, s) {
            var i = (0,
            r.resolveComponent)("q-item-section")
              , c = (0,
            r.resolveComponent)("q-item")
              , l = (0,
            r.resolveComponent)("q-list");
            return (0,
            r.openBlock)(),
            (0,
            r.createBlock)(l, {
                class: "game-base-statistic",
                "data-game-base-statistic": ""
            }, {
                default: (0,
                r.withCtx)((function() {
                    return [(0,
                    r.createVNode)(c, {
                        class: "game-base-statistic__item",
                        "data-game-base-statistic-item": "",
                        "data-game-base-statistic-payout": ""
                    }, {
                        default: (0,
                        r.withCtx)((function() {
                            return [(0,
                            r.createVNode)(i, {
                                class: "game-base-statistic__text",
                                "no-wrap": !1,
                                "data-game-base-statistic-item-text": ""
                            }, {
                                default: (0,
                                r.withCtx)((function() {
                                    return [(0,
                                    r.createTextVNode)((0,
                                    r.toDisplayString)(n.t("game.base.statistic.payout")), 1)]
                                }
                                ), void 0, !0),
                                _: 1
                            }), (0,
                            r.createVNode)(i, {
                                class: "game-base-statistic__value",
                                side: !0,
                                "data-game-base-statistic-item-value": ""
                            }, {
                                default: (0,
                                r.withCtx)((function() {
                                    return [(0,
                                    r.createTextVNode)((0,
                                    r.toDisplayString)(n.formatNumber(a.payout, "0%")), 1)]
                                }
                                ), void 0, !0),
                                _: 1
                            })]
                        }
                        ), void 0, !0),
                        _: 1
                    }), (0,
                    r.createVNode)(c, {
                        class: "game-base-statistic__item",
                        "data-game-base-statistic-item": "",
                        "data-game-base-statistic-bets": ""
                    }, {
                        default: (0,
                        r.withCtx)((function() {
                            return [(0,
                            r.createVNode)(i, {
                                class: "game-base-statistic__text",
                                "no-wrap": !1,
                                "data-game-base-statistic-item-text": ""
                            }, {
                                default: (0,
                                r.withCtx)((function() {
                                    return [(0,
                                    r.createTextVNode)((0,
                                    r.toDisplayString)(n.t("game.base.statistic.bets")), 1)]
                                }
                                ), void 0, !0),
                                _: 1
                            }), (0,
                            r.createVNode)(i, {
                                class: "game-base-statistic__value",
                                side: !0,
                                "data-game-base-statistic-item-value": ""
                            }, {
                                default: (0,
                                r.withCtx)((function() {
                                    return [(0,
                                    r.createTextVNode)((0,
                                    r.toDisplayString)(n.t("general.balance", [n.exchange(a.betAmount), n.currencyText])), 1)]
                                }
                                ), void 0, !0),
                                _: 1
                            })]
                        }
                        ), void 0, !0),
                        _: 1
                    }), (0,
                    r.createVNode)(c, {
                        class: "game-base-statistic__item",
                        "data-game-base-statistic-item": "",
                        "data-game-base-statistic-plays": ""
                    }, {
                        default: (0,
                        r.withCtx)((function() {
                            return [(0,
                            r.createVNode)(i, {
                                class: "game-base-statistic__text",
                                "no-wrap": !1,
                                "data-game-base-statistic-item-text": ""
                            }, {
                                default: (0,
                                r.withCtx)((function() {
                                    return [(0,
                                    r.createTextVNode)((0,
                                    r.toDisplayString)(n.t("game.base.statistic.plays")), 1)]
                                }
                                ), void 0, !0),
                                _: 1
                            }), (0,
                            r.createVNode)(i, {
                                class: "game-base-statistic__value",
                                side: !0,
                                "data-game-base-statistic-item-value": ""
                            }, {
                                default: (0,
                                r.withCtx)((function() {
                                    return [(0,
                                    r.createTextVNode)((0,
                                    r.toDisplayString)(n.formatCurrency(a.playAmount)), 1)]
                                }
                                ), void 0, !0),
                                _: 1
                            })]
                        }
                        ), void 0, !0),
                        _: 1
                    }), (0,
                    r.createVNode)(c, {
                        class: "game-base-statistic__item",
                        "data-game-base-statistic-item": "",
                        "data-game-base-statistic-max-win": ""
                    }, {
                        default: (0,
                        r.withCtx)((function() {
                            return [(0,
                            r.createVNode)(i, {
                                class: "game-base-statistic__text",
                                "no-wrap": !1,
                                "data-game-base-statistic-item-text": ""
                            }, {
                                default: (0,
                                r.withCtx)((function() {
                                    return [(0,
                                    r.createTextVNode)((0,
                                    r.toDisplayString)(n.t("game.base.statistic.max_win")), 1)]
                                }
                                ), void 0, !0),
                                _: 1
                            }), (0,
                            r.createVNode)(i, {
                                class: "game-base-statistic__value",
                                side: !0,
                                "data-game-base-statistic-item-value": ""
                            }, {
                                default: (0,
                                r.withCtx)((function() {
                                    return [(0,
                                    r.createTextVNode)((0,
                                    r.toDisplayString)(n.t("general.balance", [n.exchange(a.maximumWin), n.currencyText])), 1)]
                                }
                                ), void 0, !0),
                                _: 1
                            })]
                        }
                        ), void 0, !0),
                        _: 1
                    })]
                }
                ), void 0, !0),
                _: 1
            })
        }
        const M = (0,
        r.defineComponent)({
            __name: "GameBaseStatistic",
            props: {
                payout: {},
                betAmount: {},
                playAmount: {},
                maximumWin: {}
            },
            setup: function(e, t) {
                var a = t.expose;
                a();
                var n = e
                  , o = (0,
                c.QT)().t
                  , s = (0,
                r.inject)("currency")
                  , i = (0,
                r.inject)("nsAssetUrl")
                  , l = (0,
                r.inject)("exchangeRate")
                  , u = (0,
                r.computed)((function() {
                    return o("data.currency.".concat(s.value))
                }
                ));
                function m(e) {
                    return d(e * l.value)
                }
                function d(e) {
                    return (0,
                    b.uf)(e, "0,0[.]00")
                }
                var g = {
                    props: n,
                    t: o,
                    currency: s,
                    nsAssetUrl: i,
                    exchangeRate: l,
                    currencyText: u,
                    exchange: m,
                    formatCurrency: d,
                    inject: r.inject,
                    get useI18n() {
                        return c.QT
                    },
                    get formatNumber() {
                        return b.uf
                    }
                };
                return Object.defineProperty(g, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                g
            }
        })
          , W = (0,
        u.Z)(M, [["render", R], ["__scopeId", "data-v-706a3cef"]])
          , z = W;
        var F = {
            class: "game-base-thumbnail",
            "data-game-base-thumbnail": ""
        }
          , H = ["src"]
          , q = ["src", "alt"];
        function $(e, t, n, o, s, i) {
            return (0,
            r.openBlock)(),
            (0,
            r.createElementBlock)("div", F, [(0,
            r.createElementVNode)("img", {
                class: "game-base-thumbnail__lining",
                src: a(18450),
                draggable: !1,
                alt: "Play Game",
                "data-game-base-thumbnail-lining": ""
            }, null, 8, H), "error" === o.imgState ? ((0,
            r.openBlock)(),
            (0,
            r.createElementBlock)("img", {
                key: 0,
                class: "game-base-thumbnail__image",
                src: "".concat(o.nsAssetUrl, "/game/empty.svg"),
                alt: o.t("game.base.alt", [n.game.name]),
                draggable: !1,
                "data-game-base-thumbnail-empty": ""
            }, null, 8, q)) : (0,
            r.createCommentVNode)("", !0), "error" !== o.imgState ? ((0,
            r.openBlock)(),
            (0,
            r.createBlock)(o["GameBaseImage"], {
                key: 1,
                class: "game-base-thumbnail__image",
                game: n.game,
                onLoadDone: o.loadDone,
                onLoadError: o.loadError,
                "data-game-base-thumbnail-image": ""
            }, null, 8, ["game"])) : (0,
            r.createCommentVNode)("", !0), n.hideBadges ? (0,
            r.createCommentVNode)("", !0) : ((0,
            r.openBlock)(),
            (0,
            r.createBlock)(o["GameBaseBadges"], {
                key: 2,
                class: "game-base-thumbnail__bagdes",
                game: n.game,
                "data-game-base-thumbnail-badges": ""
            }, null, 8, ["game"])), (0,
            r.renderSlot)(e.$slots, "default", {}, void 0, !0)])
        }
        var Y = {
            class: "game-base-image",
            "data-game-base-image": ""
        }
          , J = ["srcset"]
          , K = ["srcset"]
          , X = ["src", "alt"];
        function ee(e, t, a, n, o, s) {
            return (0,
            r.openBlock)(),
            (0,
            r.createElementBlock)("picture", Y, [(0,
            r.createElementVNode)("source", {
                srcset: n.primaryUrl,
                type: "image/webp"
            }, null, 8, J), (0,
            r.createElementVNode)("source", {
                srcset: n.fallbackUrl,
                type: "image/jpeg"
            }, null, 8, K), (0,
            r.createElementVNode)("img", {
                class: "game-base-image__content",
                ref: "image",
                loading: "lazy",
                src: n.primaryUrl,
                draggable: !1,
                alt: n.t("game.base.alt", [a.game.name]),
                onLoad: t[0] || (t[0] = function(e) {
                    return n.emits("loadDone")
                }
                ),
                onError: t[1] || (t[1] = function(e) {
                    return n.emits("loadError")
                }
                )
            }, null, 40, X)])
        }
        const te = (0,
        r.defineComponent)({
            __name: "GameBaseImage",
            props: {
                game: {}
            },
            emits: ["loadDone", "loadError"],
            setup: function(e, t) {
                var a = t.expose
                  , n = t.emit;
                a();
                var o = e
                  , s = (0,
                c.QT)().t
                  , i = (0,
                r.ref)(null)
                  , l = (0,
                r.inject)("assetUrl");
                (0,
                r.onMounted)(d);
                var u = (0,
                r.computed)((function() {
                    return (0,
                    x.Zf)(l.value, o.game, "webp")
                }
                ))
                  , m = (0,
                r.computed)((function() {
                    return (0,
                    x.Zf)(l.value, o.game, "jpg")
                }
                ));
                function d() {
                    i.value.complete && (i.value.naturalWidth > 0 ? n("loadDone") : n("loadError"))
                }
                var g = {
                    props: o,
                    emits: n,
                    t: s,
                    image: i,
                    assetUrl: l,
                    primaryUrl: u,
                    fallbackUrl: m,
                    checkImageCompletion: d,
                    inject: r.inject,
                    onMounted: r.onMounted,
                    get useI18n() {
                        return c.QT
                    },
                    get getGameCdnImg() {
                        return x.Zf
                    }
                };
                return Object.defineProperty(g, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                g
            }
        })
          , ae = (0,
        u.Z)(te, [["render", ee], ["__scopeId", "data-v-65bf713a"]])
          , re = ae
          , ne = (0,
        r.defineComponent)({
            __name: "GameBaseThumbnail",
            props: {
                game: {},
                hideBadges: {
                    type: Boolean
                }
            },
            setup: function(e, t) {
                var a = t.expose;
                a();
                var n = e
                  , o = (0,
                c.QT)().t
                  , s = (0,
                r.inject)("isLogged")
                  , l = (0,
                r.inject)("nsAssetUrl")
                  , u = (0,
                r.ref)("init");
                function m() {
                    u.value = "error"
                }
                function d() {
                    u.value = "loaded"
                }
                var g = {
                    props: n,
                    t: o,
                    isLogged: s,
                    nsAssetUrl: l,
                    imgState: u,
                    loadError: m,
                    loadDone: d,
                    inject: r.inject,
                    get BaseImg() {
                        return i.eb
                    },
                    get useI18n() {
                        return c.QT
                    },
                    GameBaseImage: re,
                    GameBaseBadges: B
                };
                return Object.defineProperty(g, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                g
            }
        })
          , oe = (0,
        u.Z)(ne, [["render", $], ["__scopeId", "data-v-2af3b654"]])
          , se = oe
    }
    ,
    18450: e=>{
        e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjY2NjIiBmaWxsLW9wYWNpdHk9Ii4xIi8+PC9zdmc+Cg=="
    }
}]);
//# sourceMappingURL=base.9f1e4e54.js.map
