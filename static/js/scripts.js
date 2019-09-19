!function (e) {
    /* Sample call to embed
    https://assets.digitalclimatestrike.net/index.html?hostname=assets.digitalclimatestrike.net&fullPageDisplayStartDate=2019-09-19T22:00:00.000Z&language=en&websiteName=Demo
     */
    var t = {}

    function n(o) {
        if (t[o]) return t[o].exports
        var l = t[o] = {i: o, l: !1, exports: {}}
        return e[o].call(l.exports, l, l.exports, n), l.l = !0, l.exports
    }


    n.m = e,
        n.c = t,
        n.d = function (e, t, o) {
            n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: o})
        },
        n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        },
        n.t = function (e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e
            if (4 & t && "object" == typeof e && e && e.__esModule) return e
            var o = Object.create(null)
            if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var l in e) n.d(o, l, function (t) {
                return e[t]
            }.bind(null, l))
            return o
        },
        n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            }
            return n.d(t, "a", t), t
        },
        n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        n.p = "",
        n(n.s = 0)
}
(
    [
        function (e, t, n) {
            "use strict"
            n.r(t)
            n(1)
            var o = 864e5,
                l = 30,
                r = {
                    en: "https://digital.globalclimatestrike.net/join/?source=digitalstrikebanner",
                    es: "https://es.globalclimatestrike.net/?source=digitalstrikebanner",
                    de: "https://de.globalclimatestrike.net/?source=digitalstrikebanner",
                    cs: "https://www.tydenproklima.cz",
                    fr: "https://fr.globalclimatestrike.net/?source=digitalstrikebanner",
                    nl: "https://globalclimatestrike.net/?source=digitalstrikebanner"
                },
                c = {
                    en: "https://digital.globalclimatestrike.net/join/?source=digitalstrikebanner",
                    es: "https://es.globalclimatestrike.net/?source=digitalstrikebanner",
                    de: "https://de.globalclimatestrike.net/?source=digitalstrikebanner",
                    cs: "https://www.tydenproklima.cz",
                    fr: "https://fr.globalclimatestrike.net/?source=digitalstrikebanner",
                    nl: "https://globalclimatestrike.net/?source=digitalstrikebanner"
                },
                i = {
                    en: "en-EN",
                    de: "de-DE",
                    es: "es-ES",
                    cs: "cs-CZ",
                    fr: "fr-FR",
                    nl: "nl-NL"
                },
                a = null,
                s = !1,
                u = "en"

            function postMessageToParentIFrameContainer(e, t) {
                t || (t = {}),
                    t.action = e,
                    t.DIGITAL_CLIMATE_STRIKE = !0,
                    window.parent.postMessage(t, "*")
            }

            function glueCloseButtonClicked(e) {
                e.preventDefault(), e.stopPropagation(), setTimeout(function () {
                    postMessageToParentIFrameContainer("closeButtonClicked")
                }, l)
            }

            function glueButtonClicked(e) {
                e.preventDefault(), e.stopPropagation(), setTimeout(function () {
                    postMessageToParentIFrameContainer("buttonClicked", {linkUrl: a[u]})
                }, l)
            }

            function glueHref(e) {
                document.querySelector(e).setAttribute("href", a[u])
            }

            function glueEvent(e, t, n) {
                for (var o = document.querySelectorAll(e), l = 0; l < o.length; l++) o[l].addEventListener(t, n)
            }

            function y(e, t) {
                return e.toLocaleDateString(i[t], {day: "numeric", month: "long"})
            }

            document.addEventListener("DOMContentLoaded", function () {
                var e, t, n, l, i, k, w, v, h, _, S,
                    T = function (e) {
                        for (var t = {}, n = ("?" === e[0] ? e.substr(1) : e).split("&"), o = 0; o < n.length; o++) {
                            var l = n[o].split("=")
                            t[decodeURIComponent(l[0])] = decodeURIComponent(l[1] || "")
                        }
                        return t
                    }(location.search),
                    j = new Date(Date.parse('2019-09-19T22:00:00.000Z')),
                    q = new Date(j.getTime() + o),
                    x = T.forceFullPageWidget ||
                        (
                            e = j,
                                t = new Date,
                            e.getFullYear() === t.getFullYear() &&
                            e.getMonth() === t.getMonth() &&
                            e.getDate() === t.getDate()
                        )
                a = x ? c : r,
                    glueHref(".dcs-footer .dcs-button"),
                    glueHref(".dcs-footer__logo"),
                    glueHref(".dcs-full-page .dcs-button"),
                    glueHref(".dcs-full-page__logo"),
                    glueEvent(".dcs-close", "click", glueCloseButtonClicked),
                    glueEvent(".dcs-button", "click", glueButtonClicked),
                    glueEvent(".dcs-footer__logo", "click", glueButtonClicked),
                    glueEvent(".dcs-full-page__logo", "click", glueButtonClicked),
                    u = T.language ? T.language : u,
                T.showCloseButtonOnFullPageWidget && (document.querySelector(".dcs-full-page").style.background = "rgba(78,229,139, 0.8)",
                    document.querySelector(".dcs-full-page__close").style.display = "flex",
                    document.querySelector(".dcs-close").classList.add("dcs-full-page-close"),
                    document.querySelector(".dcs-full-page__footer").style.display = "none"),
                T.websiteName && (n = T.websiteName, document.querySelector(".dcs-website-name__default").style.display = "none",
                    document.querySelector(".dcs-website-name__prefix").style.display = "inline-block",
                    document.querySelector(".dcs-website-name").innerHTML = decodeURI(n)),
                x && (s || (s = !0, postMessageToParentIFrameContainer("maximize"),
                    document.querySelector(".dcs-footer").style.display = "none",
                    document.querySelector(".dcs-full-page").style.display = "flex"))
                var E = y(j, u),
                    P = y(q, u)
                document.getElementById("dcs-strike-date").innerText = E,
                    document.getElementById("dcs-tomorrow-date").innerText = P
            })
        },
        function (e, t, n) {
        }

    ]
)
