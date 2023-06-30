"use strict";
(self["webpackChunk_app_fairspin"] = self["webpackChunk_app_fairspin"] || []).push([[619], {
    17984: (e,t,n)=>{
        n.r(t),
        n.d(t, {
            BaseSlider: ()=>m
        });
        var r = n(95922)
          , s = {
            class: "base-slider"
        }
          , i = {
            key: 0,
            class: "base-slider__header"
        }
          , o = {
            class: "base-slider__title"
        }
          , a = {
            class: "base-slider__actions"
        };
        function l(e, t, n, l, d, c) {
            return (0,
            r.openBlock)(),
            (0,
            r.createElementBlock)("div", s, [n.isNav ? ((0,
            r.openBlock)(),
            (0,
            r.createElementBlock)("div", i, [(0,
            r.createElementVNode)("div", o, [(0,
            r.renderSlot)(e.$slots, "title", {}, void 0, !0)]), (0,
            r.createElementVNode)("div", a, [n.more ? ((0,
            r.openBlock)(),
            (0,
            r.createBlock)(l["BaseButton"], {
                key: 0,
                class: "base-slider__more",
                size: "large",
                to: n.more,
                "data-base-more": ""
            }, {
                default: (0,
                r.withCtx)((function() {
                    return [(0,
                    r.renderSlot)(e.$slots, "more-text", {}, void 0, !0)]
                }
                ), void 0, !0),
                _: 3
            }, 8, ["to"])) : (0,
            r.createCommentVNode)("", !0), (0,
            r.createVNode)(l["BaseButton"], {
                class: "base-slider__prev",
                ref: "prevEl",
                size: "large",
                "data-base-prev": ""
            }, {
                default: (0,
                r.withCtx)((function() {
                    return [(0,
                    r.createVNode)(l["BaseSvg"], {
                        src: "".concat(l.nsAssetUrl, "/base/chevron-right.svg")
                    }, null, 8, ["src"])]
                }
                ), void 0, !0),
                _: 1
            }, 512), (0,
            r.createVNode)(l["BaseButton"], {
                class: "base-slider__next",
                ref: "nextEl",
                size: "large",
                "data-base-next": ""
            }, {
                default: (0,
                r.withCtx)((function() {
                    return [(0,
                    r.createVNode)(l["BaseSvg"], {
                        src: "".concat(l.nsAssetUrl, "/base/chevron-right.svg")
                    }, null, 8, ["src"])]
                }
                ), void 0, !0),
                _: 1
            }, 512)])])) : (0,
            r.createCommentVNode)("", !0), (0,
            r.createVNode)(l["Swiper"], {
                class: "base-slider__swiper",
                freeMode: !0,
                spaceBetween: 8,
                navigation: l.navigation,
                preventClicks: !0,
                slidesPerView: "auto",
                touchReleaseOnEdges: !0,
                preventClicksPropagation: !0,
                "data-base-slider": ""
            }, {
                default: (0,
                r.withCtx)((function() {
                    return [((0,
                    r.openBlock)(!0),
                    (0,
                    r.createElementBlock)(r.Fragment, null, (0,
                    r.renderList)(n.items, (function(t, n) {
                        return (0,
                        r.openBlock)(),
                        (0,
                        r.createBlock)(l["SwiperSlide"], {
                            class: "base-slider__item",
                            key: (null === t || void 0 === t ? void 0 : t.id) || n
                        }, {
                            default: (0,
                            r.withCtx)((function() {
                                return [(0,
                                r.renderSlot)(e.$slots, "slide", {
                                    item: t,
                                    index: n
                                }, void 0, !0)]
                            }
                            ), void 0, !0),
                            _: 2
                        }, 1024)
                    }
                    )), 128))]
                }
                ), void 0, !0),
                _: 3
            }, 8, ["navigation"])])
        }
        var d = n(86397)
          , c = n(454)
          , u = n(72199);
        const v = (0,
        r.defineComponent)({
            __name: "BaseSlider",
            props: {
                items: {},
                more: {},
                isNav: {
                    type: Boolean
                }
            },
            setup: function(e, t) {
                var s = this
                  , i = t.expose;
                i();
                var o = e
                  , a = (0,
                u.QT)().t
                  , l = (0,
                u.Gs)().nsAssetUrl
                  , v = (0,
                u.Ld)("slider").uniqueId
                  , p = (0,
                r.ref)(!1)
                  , f = (0,
                r.ref)(void 0)
                  , m = (0,
                r.ref)(void 0);
                (0,
                r.onMounted)((function() {
                    var e, t;
                    p.value = {
                        enabled: o.isNav,
                        prevEl: null === (e = f.value) || void 0 === e ? void 0 : e.getEl(),
                        nextEl: null === (t = m.value) || void 0 === t ? void 0 : t.getEl()
                    }
                }
                ));
                var _ = (0,
                r.defineAsyncComponent)((function() {
                    return (0,
                    d.mG)(s, void 0, Promise, (function() {
                        return (0,
                        d.Jh)(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, Promise.resolve().then(n.bind(n, 46924))];
                            case 1:
                                return [2, e.sent().Swiper]
                            }
                        }
                        ))
                    }
                    ))
                }
                ))
                  , B = (0,
                r.defineAsyncComponent)((function() {
                    return (0,
                    d.mG)(s, void 0, Promise, (function() {
                        return (0,
                        d.Jh)(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, Promise.resolve().then(n.bind(n, 46924))];
                            case 1:
                                return [2, e.sent().SwiperSlide]
                            }
                        }
                        ))
                    }
                    ))
                }
                ))
                  , b = {
                    props: o,
                    t: a,
                    nsAssetUrl: l,
                    uniqueId: v,
                    navigation: p,
                    prevEl: f,
                    nextEl: m,
                    Swiper: _,
                    SwiperSlide: B,
                    defineAsyncComponent: r.defineAsyncComponent,
                    onMounted: r.onMounted,
                    get BaseButton() {
                        return c.Yd
                    },
                    get BaseSvg() {
                        return c.qL
                    },
                    get useAsset() {
                        return u.Gs
                    },
                    get useI18n() {
                        return u.QT
                    },
                    get useUniqueId() {
                        return u.Ld
                    }
                };
                return Object.defineProperty(b, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                b
            }
        });
        var p = n(39673);
        const f = (0,
        p.Z)(v, [["render", l], ["__scopeId", "data-v-471dfe77"]])
          , m = f
    }
}]);
//# sourceMappingURL=slider.538d1d11.js.map
