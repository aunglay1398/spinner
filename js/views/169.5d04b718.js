"use strict";
(self["webpackChunk_app_fairspin"] = self["webpackChunk_app_fairspin"] || []).push([[169], {
    92169: (e,n,s)=>{
        s.r(n),
        s.d(n, {
            injectFastTrack: ()=>d
        });
        var o = s(10045)
          , i = s.n(o)
          , t = s(19888)
          , a = s(45373)
          , r = {
            integrationVersion: 1.1,
            autoInit: !0,
            enableEventTracking: !1,
            enablePendingRewards: !1,
            inbox: {
                enable: !0,
                badgeId: "#messages",
                navBarLogo: "https://d3bpd1baplsjd0.cloudfront.net/fairspin/brand/logo-full.svg",
                supportLink: "support.en@fairspin.io"
            },
            recieved: "Recieved:",
            validUntil: "Valid until:",
            questionsTop: "Questions? Mail us at",
            questionsShort: "Questions:",
            deleteMessagePrompt: "Are you sure you want to delete this message?",
            inboxEmpty: "There is currently no messages in your inbox",
            readMore: "Read more",
            backToList: "Back",
            inboxHeader: "Inbox",
            pendingBonusesEmpty: "You currently have no pending bonuses",
            pendingBonusesTitle: "Pending Bonuses",
            pendingBonusesSubTitle: "Grab these cool bonuses!",
            pendingBonusesExpiresIn: "Expires in",
            pendingBonusesExpires: "Expires",
            pendingBonusesCTAUnlockText: "Deposit!",
            pendingBonusesCTAClaimFallbackText: "Claim",
            pendingBonusesBackButtonText: "Back",
            pendingBonusesTermsAndConditionsHeader: "Terms & Conditions",
            pendingBonusesBonusUnlockedText: "Awesome! You can now claim this offer below",
            days: "d",
            hours: "h",
            minutes: "min"
        };
        function d() {
            if (!t.s) {
                var e = window;
                e.fasttrackbrand = "Fairspin",
                e.fasttrack = r,
                e.sid = i().get("CRM_SID");
                var n = document.createElement("script");
                n.async = !0,
                n.onload = function() {
                    new e.FastTrackLoader
                }
                ,
                n.src = "production" === (0,
                a.vx)() ? "https://crm-lib.fasttrack-solutions.com/loader/fasttrack-crm.js" : "https://crm-lib-staging.fasttrack-solutions.com/loader/fasttrack-crm.js",
                document.body.appendChild(n)
            }
        }
    }
}]);
//# sourceMappingURL=169.5d04b718.js.map
