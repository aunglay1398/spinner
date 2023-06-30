"use strict";
(self["webpackChunk_app_fairspin"] = self["webpackChunk_app_fairspin"] || []).push([[358], {
    84161: (e,t,a)=>{
        a.r(t),
        a.d(t, {
            GameCard: ()=>ie
        });
        var n = a(95922)
          , r = ["data-game-card"];
        function o(e, t, a, o, i, s) {
            return a.game && !a.game.skeleton ? ((0,
            n.openBlock)(),
            (0,
            n.createElementBlock)("div", {
                key: 0,
                class: "game-card",
                "data-game-card": a.game.code
            }, [(0,
            n.createVNode)(o["GameCardThumbnail"], {
                game: a.game
            }, null, 8, ["game"]), (0,
            n.createVNode)(o["GameCardDetail"], {
                game: a.game
            }, null, 8, ["game"])], 8, r)) : ((0,
            n.openBlock)(),
            (0,
            n.createBlock)(o["GameCardSkeleton"], {
                key: 1
            }))
        }
        var i = {
            class: "game-card-detail",
            "data-game-card-detail": ""
        };
        function s(e, t, a, r, o, s) {
            return (0,
            n.openBlock)(),
            (0,
            n.createElementBlock)("div", i, [(0,
            n.createVNode)(r["GameCardName"], {
                class: "game-card-detail__name",
                game: a.game,
                "data-game-card-detail-name": ""
            }, null, 8, ["game"]), a.game ? ((0,
            n.openBlock)(),
            (0,
            n.createBlock)(r["GameBaseProvider"], {
                key: 0,
                class: "game-card-detail__provider",
                code: a.game.provider,
                url: a.game.providerFriendlyUrl,
                "data-game-card-detail-provider": ""
            }, {
                tooltip: (0,
                n.withCtx)((function() {
                    return [(0,
                    n.createTextVNode)((0,
                    n.toDisplayString)(r.t("game.provider.".concat(a.game.provider))), 1)]
                }
                )),
                _: 1
            }, 8, ["code", "url"])) : (0,
            n.createCommentVNode)("", !0)])
        }
        var c = a(86397)
          , m = a(72199);
        function l(e, t, a, r, o, i) {
            var s = (0,
            n.resolveComponent)("RouterLink");
            return (0,
            n.openBlock)(),
            (0,
            n.createBlock)(s, {
                class: "game-card-name ellipsis",
                to: r.getGameDetailLocation(a.game.code, r.provider),
                "data-game-card-name": ""
            }, {
                default: (0,
                n.withCtx)((function() {
                    return [(0,
                    n.createTextVNode)((0,
                    n.toDisplayString)(a.game.name), 1)]
                }
                ), void 0, !0),
                _: 1
            }, 8, ["to"])
        }
        const d = (0,
        n.defineComponent)({
            __name: "GameCardName",
            props: {
                game: {}
            },
            setup: function(e, t) {
                var a = t.expose;
                a();
                var r = e
                  , o = (0,
                n.inject)("routeUtils").getGameDetailLocation
                  , i = (0,
                n.computed)((function() {
                    return r.game.providerFriendlyUrl || r.game.provider
                }
                ))
                  , s = {
                    props: r,
                    getGameDetailLocation: o,
                    provider: i,
                    inject: n.inject
                };
                return Object.defineProperty(s, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                s
            }
        });
        var u = a(39673);
        const p = (0,
        u.Z)(d, [["render", l], ["__scopeId", "data-v-167a7b94"]])
          , g = p
          , v = (0,
        n.defineComponent)({
            __name: "GameCardDetail",
            props: {
                game: {}
            },
            setup: function(e, t) {
                var r = this
                  , o = t.expose;
                o();
                var i = e
                  , s = (0,
                m.QT)().t
                  , l = (0,
                n.defineAsyncComponent)((function() {
                    return (0,
                    c.mG)(r, void 0, Promise, (function() {
                        return (0,
                        c.Jh)(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, a.e(53).then(a.bind(a, 25731))];
                            case 1:
                                return [2, e.sent().GameBaseProvider]
                            }
                        }
                        ))
                    }
                    ))
                }
                ))
                  , d = {
                    props: i,
                    t: s,
                    GameBaseProvider: l,
                    get useI18n() {
                        return m.QT
                    },
                    defineAsyncComponent: n.defineAsyncComponent,
                    GameCardName: g
                };
                return Object.defineProperty(d, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                d
            }
        })
          , f = (0,
        u.Z)(v, [["render", s], ["__scopeId", "data-v-5bc8de8e"]])
          , _ = f;
        var h = {
            class: "game-card-skeleton",
            "data-game-card-skeleton": ""
        }
          , y = ["src"];
        function C(e, t, r, o, i, s) {
            return (0,
            n.openBlock)(),
            (0,
            n.createElementBlock)("div", h, [(0,
            n.createElementVNode)("img", {
                class: "game-card-skeleton__background",
                src: a(11819),
                alt: "Game skeleton image",
                draggable: !1
            }, null, 8, y), (0,
            n.createVNode)(o["BaseSkeleton"], {
                class: "game-card-skeleton__content"
            })])
        }
        var B = a(454);
        const G = (0,
        n.defineComponent)({
            __name: "GameCardSkeleton",
            setup: function(e, t) {
                var a = t.expose;
                a();
                var n = {
                    get BaseSkeleton() {
                        return B.aM
                    }
                };
                return Object.defineProperty(n, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                n
            }
        })
          , k = (0,
        u.Z)(G, [["render", C], ["__scopeId", "data-v-510f1448"]])
          , b = k;
        function S(e, t, a, r, o, i) {
            var s = (0,
            n.resolveDirective)("touch-options")
              , c = (0,
            n.resolveDirective)("touch");
            return (0,
            n.withDirectives)(((0,
            n.openBlock)(),
            (0,
            n.createElementBlock)("div", {
                class: (0,
                n.normalizeClass)(["game-card-thumbnail", r.cssOverlay]),
                onMouseover: r.showOverlay,
                onMouseleave: r.hideOverlay,
                "data-game-card-thumbnail": ""
            }, [r.isPanel ? ((0,
            n.openBlock)(),
            (0,
            n.createBlock)(r["GameCardPanel"], {
                key: 0,
                game: r.tmpGame,
                onClose: r.hidePanel,
                onFavorite: r.toggleFavorite
            }, null, 8, ["game"])) : (0,
            n.createCommentVNode)("", !0), (0,
            n.createVNode)(r["BaseResponsive"], {
                ratio: 4 / 3
            }, {
                default: (0,
                n.withCtx)((function() {
                    return [(0,
                    n.createVNode)(r["GameBaseThumbnail"], {
                        game: a.game
                    }, {
                        default: (0,
                        n.withCtx)((function() {
                            return [(0,
                            n.createVNode)(n.Transition, {
                                name: "fade"
                            }, {
                                default: (0,
                                n.withCtx)((function() {
                                    return [r.isOverlay ? ((0,
                                    n.openBlock)(),
                                    (0,
                                    n.createBlock)(r["GameCardOverlay"], {
                                        key: 0,
                                        game: r.tmpGame,
                                        onStats: r.showStats,
                                        onFavorite: r.toggleFavorite
                                    }, null, 8, ["game"])) : (0,
                                    n.createCommentVNode)("", !0)]
                                }
                                ), void 0, !0),
                                _: 1
                            }), r.isStats ? ((0,
                            n.openBlock)(),
                            (0,
                            n.createBlock)(r["GameCardStatistic"], {
                                key: 0,
                                game: a.game,
                                onClose: r.hideStats
                            }, null, 8, ["game"])) : (0,
                            n.createCommentVNode)("", !0)]
                        }
                        ), void 0, !0),
                        _: 1
                    }, 8, ["game"])]
                }
                ), void 0, !0),
                _: 1
            })], 34)), [[s, {
                disableClick: !0
            }], [c, r.showPanel, "tap"]])
        }
        var N = a(49557)
          , A = {
            class: "game-card-panel"
        }
          , V = {
            class: "game-card-panel__header"
        };
        function w(e, t, a, r, o, i) {
            var s = (0,
            n.resolveComponent)("q-dialog");
            return (0,
            n.openBlock)(),
            (0,
            n.createBlock)(s, {
                "model-value": !0,
                "full-width": !0,
                position: "bottom",
                "data-game-card-panel": "",
                "onUpdate:modelValue": t[2] || (t[2] = function(e) {
                    return e ? r.emits("close") : null
                }
                )
            }, {
                default: (0,
                n.withCtx)((function() {
                    return [(0,
                    n.createElementVNode)("div", A, [(0,
                    n.createElementVNode)("div", V, [r.isLogged ? ((0,
                    n.openBlock)(),
                    (0,
                    n.createBlock)(r["GameBaseFavorite"], {
                        key: 0,
                        game: a.game,
                        onChange: t[0] || (t[0] = function(e) {
                            return r.emits("favorite", e)
                        }
                        ),
                        "data-game-card-panel-favorite": ""
                    }, null, 8, ["game"])) : (0,
                    n.createCommentVNode)("", !0), (0,
                    n.createVNode)(r["GameCardName"], {
                        class: "game-card-panel__title",
                        game: a.game,
                        "data-game-card-panel-title": ""
                    }, null, 8, ["game"]), (0,
                    n.createVNode)(r["BaseClose"], {
                        class: "game-card-panel__close",
                        onClick: t[1] || (t[1] = function(e) {
                            return r.emits("close")
                        }
                        ),
                        "data-game-card-panel-close": ""
                    })]), (0,
                    n.createVNode)(r["GameBaseStatistic"], {
                        class: "game-card-panel__statistic",
                        payout: a.game.statsPayout,
                        betAmount: a.game.statsBetsAmount,
                        maximumWin: a.game.statsBiggestWin,
                        playAmount: a.game.statsPlayedAmount,
                        "data-game-card-panel-statistic": ""
                    }, null, 8, ["payout", "betAmount", "maximumWin", "playAmount"]), a.game.realOnly ? ((0,
                    n.openBlock)(),
                    (0,
                    n.createBlock)(r["GameBaseRealOnly"], {
                        key: 0,
                        class: "game-card-panel__note",
                        "data-game-card-panel-actions": ""
                    })) : (0,
                    n.createCommentVNode)("", !0), (0,
                    n.createVNode)(r["GameBaseActions"], {
                        class: "game-card-panel__actions",
                        game: a.game,
                        "data-game-card-panel-actions": ""
                    }, null, 8, ["game"])])]
                }
                ), void 0, !0),
                _: 1
            })
        }
        const P = (0,
        n.defineComponent)({
            __name: "GameCardPanel",
            props: {
                game: {}
            },
            emits: ["close", "favorite"],
            setup: function(e, t) {
                var r = this
                  , o = t.expose
                  , i = t.emit;
                o();
                var s = e
                  , m = (0,
                n.inject)("isLogged")
                  , l = (0,
                n.defineAsyncComponent)((function() {
                    return (0,
                    c.mG)(r, void 0, Promise, (function() {
                        return (0,
                        c.Jh)(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, a.e(53).then(a.bind(a, 25731))];
                            case 1:
                                return [2, e.sent().GameBaseActions]
                            }
                        }
                        ))
                    }
                    ))
                }
                ))
                  , d = (0,
                n.defineAsyncComponent)((function() {
                    return (0,
                    c.mG)(r, void 0, Promise, (function() {
                        return (0,
                        c.Jh)(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, a.e(53).then(a.bind(a, 25731))];
                            case 1:
                                return [2, e.sent().GameBaseRealOnly]
                            }
                        }
                        ))
                    }
                    ))
                }
                ))
                  , u = (0,
                n.defineAsyncComponent)((function() {
                    return (0,
                    c.mG)(r, void 0, Promise, (function() {
                        return (0,
                        c.Jh)(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, a.e(53).then(a.bind(a, 25731))];
                            case 1:
                                return [2, e.sent().GameBaseFavorite]
                            }
                        }
                        ))
                    }
                    ))
                }
                ))
                  , p = (0,
                n.defineAsyncComponent)((function() {
                    return (0,
                    c.mG)(r, void 0, Promise, (function() {
                        return (0,
                        c.Jh)(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, a.e(53).then(a.bind(a, 25731))];
                            case 1:
                                return [2, e.sent().GameBaseStatistic]
                            }
                        }
                        ))
                    }
                    ))
                }
                ))
                  , v = {
                    props: s,
                    emits: i,
                    isLogged: m,
                    GameBaseActions: l,
                    GameBaseRealOnly: d,
                    GameBaseFavorite: u,
                    GameBaseStatistic: p,
                    defineAsyncComponent: n.defineAsyncComponent,
                    inject: n.inject,
                    get BaseClose() {
                        return B.h4
                    },
                    GameCardName: g
                };
                return Object.defineProperty(v, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                v
            }
        })
          , j = (0,
        u.Z)(P, [["render", w], ["__scopeId", "data-v-a9183d9a"]])
          , x = j;
        var I = {
            class: "game-card-overlay",
            "data-game-card-overlay": ""
        };
        function O(e, t, a, r, o, i) {
            return (0,
            n.openBlock)(),
            (0,
            n.createElementBlock)("div", I, [(0,
            n.createVNode)(r["GameCardActions"], {
                class: "game-card-overlay__actions",
                game: a.game,
                "data-game-card-overlay-actions": ""
            }, null, 8, ["game"]), r.isLogged ? ((0,
            n.openBlock)(),
            (0,
            n.createBlock)(r["GameBaseFavorite"], {
                key: 0,
                class: "game-card-overlay__favorite",
                game: a.game,
                onChange: t[0] || (t[0] = function(e) {
                    return r.emits("favorite", e)
                }
                ),
                "data-game-card-overlay-favorite": ""
            }, null, 8, ["game"])) : (0,
            n.createCommentVNode)("", !0), (0,
            n.createVNode)(r["GameCardShortcuts"], {
                class: "game-card-overlay__shortcuts",
                game: a.game,
                onStats: t[1] || (t[1] = function(e) {
                    return r.emits("stats")
                }
                ),
                "data-game-card-overlay-shortcuts": ""
            }, null, 8, ["game"])])
        }
        var T = {
            class: "game-card-actions",
            "data-game-card-actions": ""
        };
        function E(e, t, a, r, o, i) {
            var s = (0,
            n.resolveComponent)("RouterLink");
            return (0,
            n.openBlock)(),
            (0,
            n.createElementBlock)("div", T, [(0,
            n.createVNode)(s, {
                class: "game-card-actions__item",
                to: r.playView,
                "data-game-card-actions-play": ""
            }, {
                default: (0,
                n.withCtx)((function() {
                    return [(0,
                    n.createVNode)(r["BaseSvgSprite"], {
                        class: "game-card-actions__play",
                        icon: "icon-play",
                        src: r.spriteUrl
                    }, null, 8, ["src"])]
                }
                ), void 0, !0),
                _: 1
            }, 8, ["to"]), a.game.live ? (0,
            n.createCommentVNode)("", !0) : ((0,
            n.openBlock)(),
            (0,
            n.createBlock)(r["BaseButton"], {
                key: 0,
                class: "game-card-actions__demo",
                to: r.demoView,
                size: "small",
                variant: "standard",
                "data-game-card-actions-demo": ""
            }, {
                default: (0,
                n.withCtx)((function() {
                    return [(0,
                    n.createTextVNode)((0,
                    n.toDisplayString)(r.t("game.base.action.demo")), 1)]
                }
                ), void 0, !0),
                _: 1
            }, 8, ["to"]))])
        }
        const L = (0,
        n.defineComponent)({
            __name: "GameCardActions",
            props: {
                game: {}
            },
            setup: function(e, t) {
                var a = t.expose;
                a();
                var r = e
                  , o = (0,
                m.QT)().t
                  , i = (0,
                n.inject)("assets")
                  , s = (0,
                n.inject)("nsAssetUrl")
                  , l = (0,
                n.inject)("isLogged")
                  , d = (0,
                m.yj)()
                  , u = (0,
                m.tv)()
                  , p = (0,
                n.inject)("routeUtils")
                  , g = p.getSignInLocation
                  , v = p.getGamePlayLocation
                  , f = (0,
                n.computed)((function() {
                    return "".concat(s.value, "/base/").concat(i.value.svgCritical)
                }
                ))
                  , _ = (0,
                n.computed)((function() {
                    return r.game.providerFriendlyUrl || r.game.provider
                }
                ))
                  , h = (0,
                n.computed)((function() {
                    return v(r.game.code, _.value, "demo")
                }
                ))
                  , y = (0,
                n.computed)((function() {
                    var e = v(r.game.code, _.value);
                    return l.value ? e : g((0,
                    c.pi)((0,
                    c.pi)({}, d), {
                        query: {
                            redirect: u.resolve(e).fullPath
                        }
                    }))
                }
                ))
                  , C = {
                    props: r,
                    t: o,
                    assets: i,
                    nsAssetUrl: s,
                    isLogged: l,
                    route: d,
                    router: u,
                    getSignInLocation: g,
                    getGamePlayLocation: v,
                    spriteUrl: f,
                    provider: _,
                    demoView: h,
                    playView: y,
                    inject: n.inject,
                    get useI18n() {
                        return m.QT
                    },
                    get useRoute() {
                        return m.yj
                    },
                    get useRouter() {
                        return m.tv
                    },
                    get BaseButton() {
                        return B.Yd
                    },
                    get BaseSvgSprite() {
                        return B.Ex
                    }
                };
                return Object.defineProperty(C, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                C
            }
        })
          , D = (0,
        u.Z)(L, [["render", E], ["__scopeId", "data-v-c581a8da"]])
          , U = D;
        var Z = {
            class: "game-card-shortcuts",
            "data-game-card-shortcuts": ""
        };
        function F(e, t, a, r, o, i) {
            return (0,
            n.openBlock)(),
            (0,
            n.createElementBlock)("div", Z, [a.game.realOnly ? ((0,
            n.openBlock)(),
            (0,
            n.createElementBlock)("div", {
                key: 0,
                class: "game-card-shortcuts__item",
                onClick: t[0] || (t[0] = function(e) {
                    return r.emits("real")
                }
                )
            }, [(0,
            n.createVNode)(r["BaseSvgSprite"], {
                class: "game-card-shortcuts__icon",
                icon: "icon-info",
                src: r.spriteUrl
            }, null, 8, ["src"]), (0,
            n.createVNode)(r["BaseTooltip"], {
                class: "game-card-shortcuts__tooltip",
                offset: [34, 5],
                self: "top end",
                anchor: "bottom right",
                "transition-show": "fade",
                "transition-hide": "fade",
                "transition-duration": "200"
            }, {
                default: (0,
                n.withCtx)((function() {
                    return [(0,
                    n.createVNode)(r["GameBaseRealOnly"], {
                        plain: !0
                    })]
                }
                ), void 0, !0),
                _: 1
            })])) : (0,
            n.createCommentVNode)("", !0), (0,
            n.createElementVNode)("div", {
                class: "game-card-shortcuts__item",
                onClick: t[1] || (t[1] = function(e) {
                    return r.emits("stats")
                }
                )
            }, [(0,
            n.createVNode)(r["BaseSvgSprite"], {
                class: "game-card-shortcuts__icon",
                icon: "icon-statistic",
                src: r.spriteUrl
            }, null, 8, ["src"]), (0,
            n.createVNode)(r["BaseTooltip"], {
                class: "game-card-shortcuts__tooltip",
                delay: 1e3,
                offset: [5, 0],
                self: "center right",
                anchor: "center left",
                "transition-show": "fade",
                "transition-hide": "fade",
                "transition-duration": "200"
            }, {
                default: (0,
                n.withCtx)((function() {
                    return [(0,
                    n.createTextVNode)((0,
                    n.toDisplayString)(r.t("game.card.rating.tooltip")), 1)]
                }
                ), void 0, !0),
                _: 1
            })])])
        }
        const R = (0,
        n.defineComponent)({
            __name: "GameCardShortcuts",
            props: {
                game: {}
            },
            emits: ["click"],
            setup: function(e, t) {
                var r = this
                  , o = t.expose
                  , i = t.emit;
                o();
                var s = e
                  , l = (0,
                m.QT)().t
                  , d = (0,
                n.inject)("assets")
                  , u = (0,
                n.inject)("nsAssetUrl")
                  , p = (0,
                n.computed)((function() {
                    return "".concat(u.value, "/base/").concat(d.value.svgCritical)
                }
                ))
                  , g = (0,
                n.defineAsyncComponent)((function() {
                    return (0,
                    c.mG)(r, void 0, Promise, (function() {
                        return (0,
                        c.Jh)(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, a.e(53).then(a.bind(a, 25731))];
                            case 1:
                                return [2, e.sent().GameBaseRealOnly]
                            }
                        }
                        ))
                    }
                    ))
                }
                ))
                  , v = {
                    props: s,
                    emits: i,
                    t: l,
                    assets: d,
                    nsAssetUrl: u,
                    spriteUrl: p,
                    GameBaseRealOnly: g,
                    Component: n.Component,
                    defineAsyncComponent: n.defineAsyncComponent,
                    inject: n.inject,
                    get useI18n() {
                        return m.QT
                    },
                    get BaseTooltip() {
                        return B.N6
                    },
                    get BaseSvgSprite() {
                        return B.Ex
                    }
                };
                return Object.defineProperty(v, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                v
            }
        })
          , W = (0,
        u.Z)(R, [["render", F], ["__scopeId", "data-v-798a4b77"]])
          , J = W
          , M = (0,
        n.defineComponent)({
            __name: "GameCardOverlay",
            props: {
                game: {}
            },
            emits: ["stats", "favorite"],
            setup: function(e, t) {
                var r = this
                  , o = t.expose
                  , i = t.emit;
                o();
                var s = e
                  , m = (0,
                n.inject)("isLogged")
                  , l = (0,
                n.defineAsyncComponent)((function() {
                    return (0,
                    c.mG)(r, void 0, Promise, (function() {
                        return (0,
                        c.Jh)(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, a.e(53).then(a.bind(a, 25731))];
                            case 1:
                                return [2, e.sent().GameBaseFavorite]
                            }
                        }
                        ))
                    }
                    ))
                }
                ))
                  , d = {
                    props: s,
                    emits: i,
                    isLogged: m,
                    GameBaseFavorite: l,
                    defineAsyncComponent: n.defineAsyncComponent,
                    inject: n.inject,
                    GameCardActions: U,
                    GameCardShortcuts: J
                };
                return Object.defineProperty(d, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                d
            }
        })
          , Q = (0,
        u.Z)(M, [["render", O], ["__scopeId", "data-v-30be19a8"]])
          , z = Q;
        var H = {
            class: "game-card-statistic",
            "data-game-card-statistic": ""
        }
          , q = {
            class: "game-card-statistic__head"
        }
          , Y = {
            class: "game-card-statistic__title"
        };
        function K(e, t, a, r, o, i) {
            return (0,
            n.openBlock)(),
            (0,
            n.createElementBlock)("div", H, [(0,
            n.createElementVNode)("div", q, [(0,
            n.createElementVNode)("div", Y, [(0,
            n.createVNode)(r["BaseSvgSprite"], {
                class: "game-card-statistic__icon",
                icon: "icon-statistic",
                src: r.spriteUrl
            }, null, 8, ["src"]), (0,
            n.createTextVNode)((0,
            n.toDisplayString)(r.t("game.card.statistic.title")), 1)]), (0,
            n.createVNode)(r["BaseClose"], {
                class: "game-card-statistic__close",
                variant: "secondary",
                onClick: t[0] || (t[0] = function(e) {
                    return r.emits("close")
                }
                ),
                "data-game-card-statistic-close": ""
            })]), (0,
            n.createVNode)(r["GameBaseStatistic"], {
                class: "game-card-statistic__body",
                payout: a.game.statsPayout,
                betAmount: a.game.statsBetsAmount,
                maximumWin: a.game.statsBiggestWin,
                playAmount: a.game.statsPlayedAmount,
                "data-game-card-statistic-body": ""
            }, null, 8, ["payout", "betAmount", "maximumWin", "playAmount"])])
        }
        const X = (0,
        n.defineComponent)({
            __name: "GameCardStatistic",
            props: {
                game: {}
            },
            emits: ["close"],
            setup: function(e, t) {
                var r = this
                  , o = t.expose
                  , i = t.emit;
                o();
                var s = e
                  , l = (0,
                m.QT)().t
                  , d = (0,
                n.inject)("assets")
                  , u = (0,
                n.inject)("nsAssetUrl")
                  , p = (0,
                n.computed)((function() {
                    return "".concat(u.value, "/base/").concat(d.value.svgCritical)
                }
                ))
                  , g = (0,
                n.defineAsyncComponent)((function() {
                    return (0,
                    c.mG)(r, void 0, Promise, (function() {
                        return (0,
                        c.Jh)(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, a.e(53).then(a.bind(a, 25731))];
                            case 1:
                                return [2, e.sent().GameBaseStatistic]
                            }
                        }
                        ))
                    }
                    ))
                }
                ))
                  , v = {
                    props: s,
                    emits: i,
                    t: l,
                    assets: d,
                    nsAssetUrl: u,
                    spriteUrl: p,
                    GameBaseStatistic: g,
                    defineAsyncComponent: n.defineAsyncComponent,
                    inject: n.inject,
                    get useI18n() {
                        return m.QT
                    },
                    get BaseClose() {
                        return B.h4
                    },
                    get BaseSvgSprite() {
                        return B.Ex
                    }
                };
                return Object.defineProperty(v, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                v
            }
        })
          , $ = (0,
        u.Z)(X, [["render", K], ["__scopeId", "data-v-dd8558b4"]])
          , ee = $
          , te = (0,
        n.defineComponent)({
            __name: "GameCardThumbnail",
            props: {
                game: {}
            },
            setup: function(e, t) {
                var r = this
                  , o = t.expose;
                o();
                var i = e
                  , s = (0,
                n.ref)(!1)
                  , m = (0,
                n.ref)(!1)
                  , l = (0,
                n.ref)(!1)
                  , d = (0,
                n.ref)(!1)
                  , u = (0,
                n.ref)(i.game)
                  , p = (0,
                n.computed)((function() {
                    return l.value || s.value ? "overlay" : ""
                }
                ))
                  , g = (0,
                n.defineAsyncComponent)((function() {
                    return (0,
                    c.mG)(r, void 0, Promise, (function() {
                        return (0,
                        c.Jh)(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, a.e(53).then(a.bind(a, 25731))];
                            case 1:
                                return [2, e.sent().GameBaseThumbnail]
                            }
                        }
                        ))
                    }
                    ))
                }
                ));
                function v() {
                    d.value || (l.value = !0)
                }
                function f() {
                    l.value = !1
                }
                function _() {
                    s.value = !0
                }
                function h() {
                    s.value = !1
                }
                function y() {
                    d.value = !0,
                    m.value = !0
                }
                function C() {
                    m.value = !1
                }
                function G(e) {
                    u.value = new N.lA((0,
                    c.pi)((0,
                    c.pi)({}, u.value.dto), {
                        favorite: e
                    }))
                }
                (0,
                n.watchEffect)((function() {
                    u.value = i.game
                }
                ));
                var k = {
                    props: i,
                    isStats: s,
                    isPanel: m,
                    isOverlay: l,
                    isTouch: d,
                    tmpGame: u,
                    cssOverlay: p,
                    GameBaseThumbnail: g,
                    showOverlay: v,
                    hideOverlay: f,
                    showStats: _,
                    hideStats: h,
                    showPanel: y,
                    hidePanel: C,
                    toggleFavorite: G,
                    get BaseResponsive() {
                        return B.RF
                    },
                    defineAsyncComponent: n.defineAsyncComponent,
                    watchEffect: n.watchEffect,
                    get Game() {
                        return N.lA
                    },
                    GameCardPanel: x,
                    GameCardOverlay: z,
                    GameCardStatistic: ee
                };
                return Object.defineProperty(k, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                k
            }
        })
          , ae = (0,
        u.Z)(te, [["render", S], ["__scopeId", "data-v-378b1dc2"]])
          , ne = ae
          , re = (0,
        n.defineComponent)({
            __name: "GameCard",
            props: {
                game: {}
            },
            setup: function(e, t) {
                var a = t.expose;
                a();
                var n = e
                  , r = {
                    props: n,
                    GameCardDetail: _,
                    GameCardSkeleton: b,
                    GameCardThumbnail: ne
                };
                return Object.defineProperty(r, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                r
            }
        })
          , oe = (0,
        u.Z)(re, [["render", o], ["__scopeId", "data-v-7a7dea90"]])
          , ie = oe
    }
    ,
    11819: e=>{
        e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNCIvPjwvc3ZnPg=="
    }
}]);
//# sourceMappingURL=card.3383b087.js.map
