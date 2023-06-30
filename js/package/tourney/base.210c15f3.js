"use strict";
(self["webpackChunk_app_fairspin"] = self["webpackChunk_app_fairspin"] || []).push([[930], {
    8940: (e,t,r)=>{
        r.r(t),
        r.d(t, {
            TourneyBaseCard: ()=>oe,
            TourneyBaseSkeleton: ()=>te
        });
        var n = r(95922)
          , o = {
            key: 1,
            class: "tourney-base-card__finished"
        }
          , a = {
            class: "tourney-base-card__background"
        }
          , s = {
            class: "tourney-base-card__info"
        }
          , i = {
            class: "tourney-base-card__prizes"
        };
        function c(e, t, r, c, u, l) {
            return r.tourney ? ((0,
            n.openBlock)(),
            (0,
            n.createBlock)(c["BaseBlock"], {
                key: 1,
                class: (0,
                n.normalizeClass)(["tourney-base-card", {
                    "is-mini": r.isMini,
                    "is-complete": c.isComplete
                }]),
                variant: r.isMini ? "secondary" : "primary",
                offset: !r.isMini,
                "data-tourney-base-card": ""
            }, {
                default: (0,
                n.withCtx)((function() {
                    return [((0,
                    n.openBlock)(),
                    (0,
                    n.createBlock)((0,
                    n.resolveDynamicComponent)(c.linkTag), {
                        class: "tourney-base-card__thumb colorize",
                        to: c.tourneyDetailLocation
                    }, {
                        default: (0,
                        n.withCtx)((function() {
                            return [(0,
                            n.createVNode)(c["TourneyBaseCardGraphic"], {
                                tourney: r.tourney
                            }, {
                                toolbar: (0,
                                n.withCtx)((function() {
                                    return [c.hasDates && !c.isComplete ? ((0,
                                    n.openBlock)(),
                                    (0,
                                    n.createBlock)(c["TourneyBaseCardTimer"], {
                                        key: 0,
                                        duration: c.duration,
                                        "is-started": c.isStarted,
                                        "data-tourney-base-card-timer": ""
                                    }, null, 8, ["duration", "is-started"])) : ((0,
                                    n.openBlock)(),
                                    (0,
                                    n.createElementBlock)("div", o, (0,
                                    n.toDisplayString)(c.t("views.tourney.base.completed")), 1))]
                                }
                                )),
                                _: 1
                            }, 8, ["tourney"])]
                        }
                        ), void 0, !0),
                        _: 1
                    }, 8, ["to"])), (0,
                    n.createElementVNode)("div", a, [(0,
                    n.createVNode)(c["BaseSvg"], {
                        src: "".concat(c.nsAssetUrl, "/views/tourney/graphic.svg"),
                        draggable: !1
                    }, null, 8, ["src"])]), (0,
                    n.createVNode)(c["BaseBlock"], {
                        class: "tourney-base-card__body",
                        offset: r.isMini
                    }, {
                        default: (0,
                        n.withCtx)((function() {
                            var e;
                            return [(0,
                            n.createElementVNode)("div", s, [((0,
                            n.openBlock)(),
                            (0,
                            n.createBlock)((0,
                            n.resolveDynamicComponent)(c.linkTag), {
                                class: (0,
                                n.normalizeClass)(["tourney-base-card__name", {
                                    "is-link": r.isLink
                                }]),
                                to: c.tourneyDetailLocation
                            }, {
                                default: (0,
                                n.withCtx)((function() {
                                    return [(0,
                                    n.createVNode)(c["TourneyBaseCardName"], {
                                        class: "ellipsis",
                                        text: r.tourney.translations.title
                                    }, null, 8, ["text"])]
                                }
                                ), void 0, !0),
                                _: 1
                            }, 8, ["class", "to"])), !r.isMini && (null === (e = r.tourney.translations) || void 0 === e ? void 0 : e.short) ? ((0,
                            n.openBlock)(),
                            (0,
                            n.createBlock)(c["TourneyBaseCardShort"], {
                                key: 0,
                                class: "tourney-base-card__short",
                                text: r.tourney.translations.short
                            }, null, 8, ["text"])) : (0,
                            n.createCommentVNode)("", !0)]), (0,
                            n.createElementVNode)("div", i, [((0,
                            n.openBlock)(!0),
                            (0,
                            n.createElementBlock)(n.Fragment, null, (0,
                            n.renderList)(r.tourney.aggregatedPrizePools, (function(e, t) {
                                return (0,
                                n.openBlock)(),
                                (0,
                                n.createBlock)(c["TourneyBaseCardPrize"], {
                                    class: "tourney-base-card__prize colorize",
                                    key: e.currency,
                                    prize: e,
                                    "is-main": 0 === t
                                }, null, 8, ["prize", "is-main"])
                            }
                            )), 128))])]
                        }
                        ), void 0, !0),
                        _: 1
                    }, 8, ["offset"]), (0,
                    n.renderSlot)(e.$slots, "default", (0,
                    n.normalizeProps)((0,
                    n.guardReactiveProps)({
                        isComplete: c.isComplete,
                        isStarted: c.isStarted
                    })), void 0, !0)]
                }
                ), void 0, !0),
                _: 3
            }, 8, ["variant", "offset", "class"])) : ((0,
            n.openBlock)(),
            (0,
            n.createBlock)(c["TourneyBaseCardSkeleton"], {
                key: 0,
                "is-mini": r.isMini
            }, null, 8, ["is-mini"]))
        }
        var u = r(454)
          , l = r(72199)
          , d = ["innerHTML"];
        function p(e, t, r, o, a, s) {
            var i;
            return (0,
            n.openBlock)(),
            (0,
            n.createElementBlock)("h2", {
                class: "tourney-base-card-name",
                innerHTML: null !== (i = r.text) && void 0 !== i ? i : "[No title]",
                "data-tourney-base-card-name": ""
            }, null, 8, d)
        }
        const y = (0,
        n.defineComponent)({
            __name: "TourneyBaseCardName",
            props: {
                text: {}
            },
            setup: function(e, t) {
                var r = t.expose;
                r();
                var n = e
                  , o = {
                    props: n
                };
                return Object.defineProperty(o, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                o
            }
        });
        var m = r(39673);
        const v = (0,
        m.Z)(y, [["render", p], ["__scopeId", "data-v-2a43698a"]])
          , _ = v;
        var f = function(e) {
            return (0,
            n.pushScopeId)("data-v-319f3a6e"),
            e = e(),
            (0,
            n.popScopeId)(),
            e
        }
          , B = {
            class: "tourney-base-card-timer",
            "data-tourney-base-card-timer": ""
        }
          , k = {
            class: "tourney-base-card-timer__title"
        }
          , b = f((function() {
            return (0,
            n.createElementVNode)("div", {
                class: "tourney-base-card-timer__label"
            }, "days", -1)
        }
        ));
        function C(e, t, r, o, a, s) {
            return (0,
            n.openBlock)(),
            (0,
            n.createElementBlock)("div", B, [(0,
            n.createElementVNode)("div", k, [r.isStarted ? ((0,
            n.openBlock)(),
            (0,
            n.createElementBlock)(n.Fragment, {
                key: 0
            }, [(0,
            n.createTextVNode)((0,
            n.toDisplayString)(o.t("views.tourney.base.timer.end")) + ":", 1)], 64)) : ((0,
            n.openBlock)(),
            (0,
            n.createElementBlock)(n.Fragment, {
                key: 1
            }, [(0,
            n.createTextVNode)((0,
            n.toDisplayString)(o.t("views.tourney.base.timer.start")) + ":", 1)], 64))]), (0,
            n.createVNode)(o["BaseTimer"], {
                class: "tourney-base-card-timer__control",
                seconds: !0,
                duration: r.duration
            }, {
                days: (0,
                n.withCtx)((function() {
                    return [b]
                }
                )),
                _: 1
            }, 8, ["duration"])])
        }
        const g = (0,
        n.defineComponent)({
            __name: "TourneyBaseCardTimer",
            props: {
                duration: {},
                isStarted: {
                    type: Boolean
                }
            },
            setup: function(e, t) {
                var r = t.expose;
                r();
                var n = e
                  , o = (0,
                l.QT)().t
                  , a = {
                    props: n,
                    t: o,
                    get useI18n() {
                        return l.QT
                    },
                    get BaseTimer() {
                        return u.AU
                    }
                };
                return Object.defineProperty(a, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                a
            }
        })
          , h = (0,
        m.Z)(g, [["render", C], ["__scopeId", "data-v-319f3a6e"]])
          , T = h;
        var S = ["innerHTML"];
        function N(e, t, r, o, a, s) {
            return (0,
            n.openBlock)(),
            (0,
            n.createBlock)(o["DocumentHtml"], {
                class: "tourney-base-card-short"
            }, {
                default: (0,
                n.withCtx)((function() {
                    return [(0,
                    n.createElementVNode)("div", {
                        class: "tourney-base-card-short__text",
                        innerHTML: r.text,
                        "data-tourney-base-card-short": ""
                    }, null, 8, S)]
                }
                ), void 0, !0),
                _: 1
            })
        }
        var x = r(86397);
        const V = (0,
        n.defineComponent)({
            __name: "TourneyBaseCardShort",
            props: {
                text: {}
            },
            setup: function(e, t) {
                var o = this
                  , a = t.expose;
                a();
                var s = e
                  , i = (0,
                n.defineAsyncComponent)((function() {
                    return (0,
                    x.mG)(o, void 0, Promise, (function() {
                        return (0,
                        x.Jh)(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, Promise.resolve().then(r.bind(r, 4488))];
                            case 1:
                                return [2, e.sent().DocumentHtml]
                            }
                        }
                        ))
                    }
                    ))
                }
                ))
                  , c = {
                    props: s,
                    DocumentHtml: i,
                    defineAsyncComponent: n.defineAsyncComponent
                };
                return Object.defineProperty(c, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                c
            }
        })
          , w = (0,
        m.Z)(V, [["render", N], ["__scopeId", "data-v-60e831d6"]])
          , D = w;
        var z = {
            class: "tourney-base-card-prize",
            "data-tourney-base-card-prize": ""
        }
          , P = {
            class: "tourney-base-card-prize__main"
        }
          , E = {
            class: "tourney-base-card-prize__value"
        }
          , M = {
            class: "tourney-base-card-prize__hint"
        };
        function I(e, t, r, o, a, s) {
            return (0,
            n.openBlock)(),
            (0,
            n.createElementBlock)("div", z, [(0,
            n.createElementVNode)("div", P, [(0,
            n.createVNode)(o["BaseIcon"], {
                class: "tourney-base-card-prize__icon",
                size: "large",
                src: o.iconUrl
            }, null, 8, ["src"]), (0,
            n.createElementVNode)("div", E, (0,
            n.toDisplayString)(r.prize.amount) + " " + (0,
            n.toDisplayString)(r.prize.currency), 1)]), (0,
            n.createElementVNode)("div", M, [r.isMain ? ((0,
            n.openBlock)(),
            (0,
            n.createElementBlock)(n.Fragment, {
                key: 0
            }, [(0,
            n.createTextVNode)((0,
            n.toDisplayString)(o.t("views.tourney.base.prize.total")), 1)], 64)) : ((0,
            n.openBlock)(),
            (0,
            n.createElementBlock)(n.Fragment, {
                key: 1
            }, [(0,
            n.createTextVNode)((0,
            n.toDisplayString)(o.t("views.tourney.base.prize.additional")), 1)], 64))])])
        }
        const A = (0,
        n.defineComponent)({
            __name: "TourneyBaseCardPrize",
            props: {
                prize: {},
                isMain: {
                    type: Boolean
                }
            },
            setup: function(e, t) {
                var r = t.expose;
                r();
                var o = e
                  , a = (0,
                l.QT)().t
                  , s = (0,
                l.Gs)()
                  , i = (0,
                n.toRef)(s, "nsAssetUrl")
                  , c = (0,
                n.computed)((function() {
                    return "".concat(i.value, "/views/tourney/prize").concat(o.isMain ? "" : "-more", ".svg")
                }
                ))
                  , d = {
                    props: o,
                    t: a,
                    nsAssetUrl: i,
                    iconUrl: c,
                    get BaseIcon() {
                        return u.su
                    },
                    get useAsset() {
                        return l.Gs
                    },
                    get useI18n() {
                        return l.QT
                    }
                };
                return Object.defineProperty(d, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                d
            }
        })
          , L = (0,
        m.Z)(A, [["render", I], ["__scopeId", "data-v-92aefa1e"]])
          , G = L;
        var H = ["src", "alt"]
          , R = {
            class: "tourney-base-card-graphic__toolbar"
        }
          , U = {
            class: "tourney-base-card-graphic__title"
        }
          , j = {
            class: "tourney-base-card-graphic__provider"
        };
        function O(e, t, r, o, a, s) {
            return (0,
            n.openBlock)(),
            (0,
            n.createBlock)(o["BaseBlock"], {
                class: "tourney-base-card-graphic",
                variant: "highlight",
                offset: !1
            }, {
                default: (0,
                n.withCtx)((function() {
                    return [(0,
                    n.createVNode)(o["BaseResponsive"], {
                        ratio: 16 / 9
                    }, {
                        default: (0,
                        n.withCtx)((function() {
                            return [(0,
                            n.createElementVNode)("img", {
                                class: "tourney-base-card-graphic__bg",
                                src: r.tourney.imageUrl,
                                alt: r.tourney.translations.title,
                                loading: "lazy"
                            }, null, 8, H)]
                        }
                        ), void 0, !0),
                        _: 1
                    }), (0,
                    n.createElementVNode)("div", R, [(0,
                    n.createElementVNode)("div", U, [(0,
                    n.renderSlot)(e.$slots, "toolbar", {}, void 0, !0)]), (0,
                    n.createElementVNode)("div", j, [(0,
                    n.createVNode)(o["TourneyBaseCardProvider"], {
                        provider: r.tourney.provider
                    }, null, 8, ["provider"])])])]
                }
                ), void 0, !0),
                _: 3
            })
        }
        var Q = {
            class: "tourney-base-card-provider"
        };
        function Z(e, t, r, o, a, s) {
            return (0,
            n.openBlock)(),
            (0,
            n.createElementBlock)("div", Q, [(0,
            n.createVNode)(o["GameBaseProvider"], {
                mini: !0,
                code: r.provider,
                "is-link": !1,
                "data-tourney-base-card-provider": ""
            }, null, 8, ["code"]), (0,
            n.createVNode)(o["BaseTooltip"], {
                self: "center right",
                anchor: "center left",
                "transition-duration": "200"
            }, {
                default: (0,
                n.withCtx)((function() {
                    return [(0,
                    n.createTextVNode)((0,
                    n.toDisplayString)(o.t("game.provider.".concat(r.provider))), 1)]
                }
                ), void 0, !0),
                _: 1
            })])
        }
        const F = (0,
        n.defineComponent)({
            __name: "TourneyBaseCardProvider",
            props: {
                provider: {}
            },
            setup: function(e, t) {
                var o = this
                  , a = t.expose;
                a();
                var s = e
                  , i = (0,
                l.QT)().t
                  , c = (0,
                n.defineAsyncComponent)((function() {
                    return (0,
                    x.mG)(o, void 0, Promise, (function() {
                        return (0,
                        x.Jh)(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, r.e(53).then(r.bind(r, 25731))];
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
                    props: s,
                    t: i,
                    GameBaseProvider: c,
                    defineAsyncComponent: n.defineAsyncComponent,
                    get useI18n() {
                        return l.QT
                    },
                    get BaseTooltip() {
                        return u.N6
                    }
                };
                return Object.defineProperty(d, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                d
            }
        })
          , $ = (0,
        m.Z)(F, [["render", Z], ["__scopeId", "data-v-0cf67335"]])
          , J = $
          , q = (0,
        n.defineComponent)({
            __name: "TourneyBaseCardGraphic",
            props: {
                tourney: {}
            },
            setup: function(e, t) {
                var r = t.expose;
                r();
                var n = e
                  , o = {
                    props: n,
                    get BaseBlock() {
                        return u.vm
                    },
                    get BaseResponsive() {
                        return u.RF
                    },
                    TourneyBaseCardProvider: J
                };
                return Object.defineProperty(o, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                o
            }
        })
          , K = (0,
        m.Z)(q, [["render", O], ["__scopeId", "data-v-12b949e5"]])
          , W = K;
        function X(e, t, r, o, a, s) {
            return (0,
            n.openBlock)(),
            (0,
            n.createBlock)(o["BaseBlock"], {
                class: "tourney-base-card-skeleton",
                variant: "primary",
                offset: !r.isMini
            }, {
                default: (0,
                n.withCtx)((function() {
                    return [(0,
                    n.createVNode)(o["BaseBlock"], {
                        class: "tourney-base-card-skeleton__graphic"
                    }, {
                        default: (0,
                        n.withCtx)((function() {
                            return [(0,
                            n.createVNode)(o["BaseResponsive"], {
                                ratio: 16 / 9
                            }, {
                                default: (0,
                                n.withCtx)((function() {
                                    return [(0,
                                    n.createVNode)(o["BaseSkeleton"], {
                                        class: "tourney-base-card-skeleton__img"
                                    })]
                                }
                                ), void 0, !0),
                                _: 1
                            })]
                        }
                        ), void 0, !0),
                        _: 1
                    }), (0,
                    n.createVNode)(o["BaseSkeleton"], {
                        class: "tourney-base-card-skeleton__info"
                    }), (0,
                    n.createVNode)(o["BaseSkeleton"], {
                        class: "tourney-base-card-skeleton__prizes"
                    }), (0,
                    n.renderSlot)(e.$slots, "default", {}, void 0, !0)]
                }
                ), void 0, !0),
                _: 3
            }, 8, ["offset"])
        }
        const Y = (0,
        n.defineComponent)({
            __name: "TourneyBaseCardSkeleton",
            props: {
                isMini: {
                    type: Boolean
                }
            },
            setup: function(e, t) {
                var r = t.expose;
                r();
                var n = e
                  , o = {
                    props: n,
                    get BaseBlock() {
                        return u.vm
                    },
                    get BaseResponsive() {
                        return u.RF
                    },
                    get BaseSkeleton() {
                        return u.aM
                    }
                };
                return Object.defineProperty(o, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                o
            }
        })
          , ee = (0,
        m.Z)(Y, [["render", X], ["__scopeId", "data-v-0b714466"]])
          , te = ee
          , re = (0,
        n.defineComponent)({
            __name: "TourneyBaseCard",
            props: {
                tourney: {},
                isLink: {
                    type: Boolean
                },
                isMini: {
                    type: Boolean
                }
            },
            setup: function(e, t) {
                var r = t.expose;
                r();
                var o = e
                  , a = (0,
                l.QT)().t
                  , s = (0,
                l.Gs)().nsAssetUrl
                  , i = (0,
                n.computed)((function() {
                    return !(!o.tourney.fromDate || !o.tourney.tillDate)
                }
                ))
                  , c = (0,
                n.computed)((function() {
                    return o.isLink ? l.rH : "div"
                }
                ))
                  , d = (0,
                n.computed)((function() {
                    return +new Date > +new Date(o.tourney.fromDate)
                }
                ))
                  , p = (0,
                n.computed)((function() {
                    return +new Date > +new Date(o.tourney.tillDate)
                }
                ))
                  , y = (0,
                n.computed)((function() {
                    var e = d.value ? o.tourney.tillDate : o.tourney.fromDate;
                    return Math.abs(+new Date(e) - +new Date)
                }
                ))
                  , m = (0,
                n.computed)((function() {
                    var e;
                    return {
                        name: "tournament",
                        params: {
                            id: null === (e = o.tourney) || void 0 === e ? void 0 : e.id
                        }
                    }
                }
                ))
                  , v = {
                    props: o,
                    t: a,
                    nsAssetUrl: s,
                    hasDates: i,
                    linkTag: c,
                    isStarted: d,
                    isComplete: p,
                    duration: y,
                    tourneyDetailLocation: m,
                    get BaseBlock() {
                        return u.vm
                    },
                    get BaseSvg() {
                        return u.qL
                    },
                    get useI18n() {
                        return l.QT
                    },
                    get useAsset() {
                        return l.Gs
                    },
                    get RouterLink() {
                        return l.rH
                    },
                    TourneyBaseCardName: _,
                    TourneyBaseCardTimer: T,
                    TourneyBaseCardShort: D,
                    TourneyBaseCardPrize: G,
                    TourneyBaseCardGraphic: W,
                    TourneyBaseCardSkeleton: te
                };
                return Object.defineProperty(v, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                v
            }
        })
          , ne = (0,
        m.Z)(re, [["render", c], ["__scopeId", "data-v-9577c476"]])
          , oe = ne
    }
}]);
//# sourceMappingURL=base.210c15f3.js.map
