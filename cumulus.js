(function(n) {
    "use strict";

    function c(n) {
        return n < 10 ? "0" + n : n
    }

    function k(n) {
        return a.lastIndex = 0, a.test(n) ? '"' + n.replace(a, function(n) {
            var t = lt[n];
            return typeof t == "string" ? t : "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + n + '"'
    }

    function y(n, t) {
        var r, s, u, h, c = f,
            e, i = t[n];
        i && typeof i == "object" && typeof i.toAncileJSON == "function" && (i = i.toAncileJSON(n));
        typeof o == "function" && (i = o.call(t, n, i));
        switch (typeof i) {
            case "string":
                return k(i);
            case "number":
                return isFinite(i) ? String(i) : "null";
            case "boolean":
            case "null":
                return String(i);
            case "object":
                if (!i) return "null";
                if (f += v, e = [], Object.prototype.toString.apply(i) === "[object Array]") {
                    for (h = i.length, r = 0; r < h; r += 1) e[r] = y(r, i) || "null";
                    return u = e.length === 0 ? "[]" : f ? "[\n" + f + e.join(",\n" + f) + "\n" + c + "]" : "[" + e.join(",") + "]", f = c, u
                }
                if (o && typeof o == "object")
                    for (h = o.length, r = 0; r < h; r += 1) typeof o[r] == "string" && (s = o[r], u = y(s, i), u && e.push(k(s) + (f ? ": " : ":") + u));
                else
                    for (s in i) Object.prototype.hasOwnProperty.call(i, s) && (u = y(s, i), u && e.push(k(s) + (f ? ": " : ":") + u));
                return u = e.length === 0 ? "{}" : f ? "{\n" + f + e.join(",\n" + f) + "\n" + c + "}" : "{" + e.join(",") + "}", f = c, u
        }
    }
    var l, a, f, v, lt, o, d, p, g, nt, tt, it, rt, ut, ft, e, at, w, u, r, s, et, ot, h, b, st, ht, ct, i, t;
    typeof ANCILE_UGUIDE_JSON != "object" && (window.ANCILE_UGUIDE_JSON = {});
    typeof Date.prototype.toAncileJSON != "function" && (Date.prototype.toAncileJSON = function() {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + c(this.getUTCMonth() + 1) + "-" + c(this.getUTCDate()) + "T" + c(this.getUTCHours()) + ":" + c(this.getUTCMinutes()) + ":" + c(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toAncileJSON = Number.prototype.toAncileJSON = Boolean.prototype.toAncileJSON = function() {
        return this.valueOf()
    });
    typeof ANCILE_UGUIDE_JSON.stringify != "function" && (a = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, lt = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, ANCILE_UGUIDE_JSON.stringify = function(n, t, i) {
        var r;
        if (f = "", v = "", typeof i == "number")
            for (r = 0; r < i; r += 1) v += " ";
        else typeof i == "string" && (v = i);
        if (o = t, t && typeof t != "function" && (typeof t != "object" || typeof t.length != "number")) throw new Error("ANCILE_UGUIDE_JSON.stringify");
        return y("", {
            "": n
        })
    });
    typeof ANCILE_UGUIDE_JSON.parse != "function" && (l = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, ANCILE_UGUIDE_JSON.parse = function(text, reviver) {
        function walk(n, t) {
            var r, u, i = n[t];
            if (i && typeof i == "object")
                for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (u = walk(i, r), u !== undefined ? i[r] = u : delete i[r]);
            return reviver.call(n, t, i)
        }
        var j;
        if (text = String(text), l.lastIndex = 0, l.test(text) && (text = text.replace(l, function(n) {
                return "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4)
            })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
            "": j
        }, "") : j;
        throw new SyntaxError("ANCILE_UGUIDE_JSON.parse");
    });
    d = function() {};
    d.prototype = {
        charCodeMap: [{
            c: 9,
            s: "Tab"
        }, {
            c: 13,
            s: "Enter"
        }, {
            c: 27,
            s: "Escape"
        }, {
            c: 32,
            s: "Space"
        }, {
            c: 33,
            s: "Page Up"
        }, {
            c: 34,
            s: "Page Down"
        }, {
            c: 35,
            s: "End"
        }, {
            c: 36,
            s: "Home"
        }, {
            c: 112,
            s: "F1"
        }, {
            c: 113,
            s: "F2"
        }, {
            c: 114,
            s: "F3"
        }, {
            c: 115,
            s: "F4"
        }, {
            c: 116,
            s: "F5"
        }, {
            c: 117,
            s: "F6"
        }, {
            c: 118,
            s: "F7"
        }, {
            c: 119,
            s: "F8"
        }, {
            c: 120,
            s: "F9"
        }, {
            c: 121,
            s: "F10"
        }, {
            c: 122,
            s: "F11"
        }, {
            c: 123,
            s: "F12"
        }, {
            c: 65,
            s: "A"
        }, {
            c: 66,
            s: "B"
        }, {
            c: 67,
            s: "C"
        }, {
            c: 68,
            s: "D"
        }, {
            c: 69,
            s: "E"
        }, {
            c: 70,
            s: "F"
        }, {
            c: 71,
            s: "G"
        }, {
            c: 72,
            s: "H"
        }, {
            c: 73,
            s: "I"
        }, {
            c: 74,
            s: "J"
        }, {
            c: 75,
            s: "K"
        }, {
            c: 76,
            s: "L"
        }, {
            c: 77,
            s: "M"
        }, {
            c: 78,
            s: "N"
        }, {
            c: 79,
            s: "O"
        }, {
            c: 80,
            s: "P"
        }, {
            c: 81,
            s: "Q"
        }, {
            c: 82,
            s: "R"
        }, {
            c: 83,
            s: "S"
        }, {
            c: 84,
            s: "T"
        }, {
            c: 85,
            s: "U"
        }, {
            c: 86,
            s: "V"
        }, {
            c: 87,
            s: "W"
        }, {
            c: 88,
            s: "X"
        }, {
            c: 89,
            s: "Y"
        }, {
            c: 90,
            s: "Z"
        }, {
            c: 48,
            s: "0"
        }, {
            c: 49,
            s: "1"
        }, {
            c: 50,
            s: "2"
        }, {
            c: 51,
            s: "3"
        }, {
            c: 52,
            s: "4"
        }, {
            c: 53,
            s: "5"
        }, {
            c: 54,
            s: "6"
        }, {
            c: 55,
            s: "7"
        }, {
            c: 56,
            s: "8"
        }, {
            c: 57,
            s: "9"
        }, {
            c: 8,
            s: "Backspace"
        }, {
            c: 37,
            s: "Arrow Left"
        }, {
            c: 38,
            s: "Arrow Up"
        }, {
            c: 39,
            s: "Arrow Right"
        }, {
            c: 40,
            s: "Arrow Down"
        }, {
            c: 45,
            s: "Insert"
        }, {
            c: 46,
            s: "Delete"
        }, {
            c: 19,
            s: "Pause"
        }, {
            c: 20,
            s: "Caps Lock"
        }, {
            c: 91,
            s: "Left Windows"
        }, {
            c: 92,
            s: "Right Windows"
        }, {
            c: 93,
            s: "Context Menu"
        }, {
            c: 96,
            s: "NumPad 0"
        }, {
            c: 97,
            s: "NumPad 1"
        }, {
            c: 98,
            s: "NumPad 2"
        }, {
            c: 99,
            s: "NumPad 3"
        }, {
            c: 100,
            s: "NumPad 4"
        }, {
            c: 101,
            s: "NumPad 5"
        }, {
            c: 102,
            s: "NumPad 6"
        }, {
            c: 103,
            s: "NumPad 7"
        }, {
            c: 104,
            s: "NumPad 8"
        }, {
            c: 105,
            s: "NumPad 9"
        }, {
            c: 106,
            s: "NumPad *"
        }, {
            c: 107,
            s: "NumPad +"
        }, {
            c: 109,
            s: "NumPad -"
        }, {
            c: 110,
            s: "NumPad ."
        }, {
            c: 111,
            s: "NumPad /"
        }, {
            c: 144,
            s: "Num Lock"
        }, {
            c: 145,
            s: "Scroll Lock"
        }, {
            c: 186,
            s: ";"
        }, {
            c: 187,
            s: "="
        }, {
            c: 188,
            s: ","
        }, {
            c: 189,
            s: "-"
        }, {
            c: 190,
            s: "."
        }, {
            c: 191,
            s: "/"
        }, {
            c: 192,
            s: "`"
        }, {
            c: 219,
            s: "["
        }, {
            c: 220,
            s: "\\"
        }, {
            c: 221,
            s: "]"
        }, {
            c: 222,
            s: "'"
        }],
        getRand: function() {
            return Math.floor(Math.random() * 9e3 + 1e3)
        },
        getStylesheet: function(t, i) {
            return i = i !== !1, n("<link/>").attr("rel", "stylesheet").attr("type", "text/css").attr("href", t + (i ? "?r=" + this.getRand() : "")).appendTo("head")
        },
        offScreenRight: function(t, i, r) {
            var o, s;
            if (!t || t.length == 0) return !0;
            var u = n(t),
                i = i || n(window),
                f = this.getWindowWidth(i) + i.scrollLeft(),
                e = u.offset().left + u.outerWidth();
            return r && (this.frameUnavailable(t, r, i) ? (e += r.offset().left, f = this.getWindowWidth(n(window)) + n(window).scrollLeft()) : (o = this.getWindowWidth(i) + r.offset().left + i.scrollLeft(), s = n(window).scrollLeft() + this.getWindowWidth(n(window)) + i.scrollLeft(), e = u.offset().left + u.outerWidth() + r.offset().left, f = Math.min(o, s))), f <= e
        },
        offScreenLeft: function(t, i, r) {
            var o, s;
            if (!t || t.length == 0) return !0;
            var e = n(t),
                i = r ? i : n(window),
                u = e.offset().left,
                f = i.scrollLeft();
            return r && (this.frameUnavailable(t, r, i) ? (u = r.offset().left + this.getWindowWidth(i), f = n(window).scrollLeft()) : (o = r.offset().left + i.scrollLeft(), s = n(window).scrollLeft() + i.scrollLeft(), u = e.offset().left + r.offset().left, f = Math.max(o, s))), u < f
        },
        offScreenBottom: function(t, i, r) {
            var o, s;
            if (!t || t.length == 0) return !0;
            var u = n(t),
                i = r ? i : n(window),
                f = this.getWindowHeight(i) + i.scrollTop(),
                e = u.offset().top + u.outerHeight();
            return r && (this.frameUnavailable(t, r, i) ? (e = r.offset().top, f = this.getWindowHeight(n(window)) + n(window).scrollTop()) : (o = this.getWindowHeight(i) + r.offset().top + i.scrollTop(), s = n(window).scrollTop() + this.getWindowHeight(n(window)) + i.scrollTop(), e = u.offset().top + u.outerHeight() + r.offset().top, f = Math.min(o, s))), f <= e
        },
        offScreenTop: function(t, i, r) {
            var o, s;
            if (!t || t.length == 0) return !0;
            var e = n(t),
                i = r ? i : n(window),
                u = e.offset().top,
                f = i.scrollTop();
            return r && (this.frameUnavailable(t, r, i) ? (u = r.offset().top + this.getWindowHeight(i), f = n(window).scrollTop()) : (o = r.offset().top + i.scrollTop(), s = n(window).scrollTop() + i.scrollTop(), u = e.offset().top + r.offset().top, f = Math.max(o, s))), u < f
        },
        offScreen: function(n, t, i) {
            return this.offScreenTop(n, t, i) || this.offScreenBottom(n, t, i) || this.offScreenLeft(n, t, i) || this.offScreenRight(n, t, i)
        },
        frameUnavailable: function(n, t, i) {
            var u = !1,
                r, f;
            return t && (r = this.frameIsVisible(t, i), f = this.spaceIsEnough(n, i), u = !r || r && !f), u
        },
        getFrameContent: function(n) {
            var t = null;
            if (n.length > 0) {
                try {
                    t = n.contents()[0]
                } catch (i) {}
                t || n[0].contentDocument;
                !t && n[0].contentWindow && (t = n[0].contentWindow.document)
            }
            return t
        },
        findFrameFromStep: function(i) {
            var r = i.context.control.frameSelectors,
                u = null,
                f, e;
            return r.length > 0 && t.ui.safeFrames.length > 0 && (f = r[0], e = r.slice(1) || [], u = this._findFrameInternal(f, e, t.ui.safeFrames, n("body,frameset"), !1, i)), u
        },
        findElementBySelector: function(t, i) {
            var r = n(),
                f, u;
            return t && (f = i || n("body,frameset"), r = n(t, f).first(), r.length > 0 && r.is("area, map") && (u = n("img[usemap='#" + r.closest("map").attr("name") + "']").first(), u.length && (r = u))), r
        },
        getAbsoluteScreenPositioning: function(t, i) {
            var r = t.offset().top + i.scrollTop(),
                u = t.offset().left + i.scrollLeft(),
                f = this.getWindowHeight(i) + t.offset().top + i.scrollTop(),
                e = this.getWindowWidth(i) + t.offset().left + i.scrollLeft(),
                o = n(window).scrollTop() + i.scrollTop(),
                s = n(window).scrollLeft() + i.scrollLeft(),
                h = n(window).scrollTop() + this.getWindowHeight(n(window)) + i.scrollTop(),
                c = n(window).scrollLeft() + this.getWindowWidth(n(window)) + i.scrollLeft();
            return {
                frameTop: r,
                frameLeft: u,
                frameBottom: f,
                frameRight: e,
                windowTop: o,
                windowLeft: s,
                windowBottom: h,
                windowRight: c
            }
        },
        getTrueVisiblePositioning: function(n, t) {
            var i = this.getAbsoluteScreenPositioning(n, t),
                r = i.frameTop >= i.windowTop ? 0 : i.windowTop - i.frameTop,
                u = i.frameTop >= i.windowTop ? 0 : i.windowTop - i.frameTop,
                f = i.frameBottom >= i.windowBottom ? this.getWindowHeight(t) - (i.frameBottom - i.windowBottom) : this.getWindowHeight(t),
                e = i.frameRight >= i.windowRight ? this.getWindowHeight(t) - (i.frameRight - i.windowRight) : this.getWindowWidth(t);
            return {
                trueWinTop: r,
                trueWinLeft: u,
                trueWinBottom: f,
                trueWinRight: e
            }
        },
        frameIsVisible: function(t, i) {
            if (!t || t.length == 0) return !1;
            var r = n(window).scrollTop(),
                o = r + this.getWindowHeight(n(window)),
                u = n(window).scrollLeft(),
                s = u + this.getWindowWidth(n(window)),
                f = t.offset().top,
                h = f + this.getWindowHeight(i),
                e = t.offset().left,
                c = e + this.getWindowWidth(i);
            return !(e > s || c < u || f > o || h < r)
        },
        spaceIsEnough: function(t, i) {
            var r = n(t);
            return r.outerHeight() < this.getWindowHeight(i) && r.outerWidth() < this.getWindowWidth(i)
        },
        getElementCoords: function(t) {
            var i = {},
                r = n(t);
            return i.t = r.offset().top, i.l = r.offset().left, i.w = r.outerWidth(!0), i.h = r.outerHeight(!0), i.b = i.t + i.h, i.r = i.l + i.w, i
        },
        getWindowHeight: function(n) {
            return typeof n[0].innerHeight != "undefined" ? n[0].innerHeight : n[0].documentElement.clientHeight
        },
        getWindowWidth: function(n) {
            return typeof n[0].innerWidth != "undefined" ? n[0].innerWidth : n[0].documentElement.clientWidth
        },
        centerElement: function(t) {
            if (t && t.is(":visible")) {
                if (this.offScreenRight(t)) {
                    if (t.offset().left <= 0) return;
                    t.css({
                        left: this.getWindowWidth(n(window)) / 2 - t.width() / 2
                    })
                }
                if (this.offScreenBottom(t)) {
                    if (t.offset().top <= 0) return;
                    t.css({
                        top: this.getWindowHeight(n(window)) / 2 - t.height() / 2
                    })
                }
            }
        },
        truncate: function(n, t) {
            return n.substring(0, t)
        },
        ellipsis: function(n, t) {
            return !n || typeof n != "string" ? "" : n.length > t ? this.truncate(n, t) + "..." : n
        },
        getChildElementByValue: function(t, i) {
            return i ? n("option", t).filter(function() {
                return n(this).val() === i
            }) : null
        },
        getChildElementByIndex: function(n, t) {
            return isNaN(t) ? null : n.children(":eq(" + t + ")")
        },
        getElementForLabel: function(t) {
            var i, r, u;
            if (t.is("label"))
                if (i = t.attr("for"), typeof i != "undefined" && i.length > 0) {
                    if (r = n("#" + i), r.length > 0) return r
                } else if (u = t.find("input"), u.length > 0) return u;
            return null
        },
        guid: {
            empty: "00000000000000000000000000000000",
            newGuid: function() {
                for (var r = (new Date).getTime().toString(), n = r + "abcdef", t = "", i = 0; i < 32; i++) t += n[Math.round(Math.random() * (n.length - 1))];
                return t
            },
            getGuids: function(n, i, r) {
                var u = t.options.contentManagementDomain + "/process/getguids",
                    f = t.cmComm,
                    e = {
                        count: n
                    };
                f.send({
                    data: e,
                    scope: this,
                    url: u,
                    onSuccess: function(n) {
                        i(n)
                    },
                    onError: function(n) {
                        r(n)
                    }
                })
            }
        },
        getKeyFromCode: function(t) {
            var r = this,
                i = n.grep(this.charCodeMap, function(n) {
                    return n.c === t
                });
            return i.length > 0 ? i[0].s : ""
        },
        stripTags: function(n, t) {
            t = (((t || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join("");
            return n.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, function(n, i) {
                return t.indexOf("<" + i.toLowerCase() + ">") > -1 ? n : ""
            })
        },
        stripAttributes: function(t, i) {
            t.length && t.find("*").each(function() {
                for (var r = n(this), u = r[0].attributes, f = u.length, t; f--;) t = u[f], n.inArray(t.name, i) == -1 && r.removeAttr(t.name)
            })
        },
        toHtmlEntities: function(n) {
            return String(n).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        },
        browser: {
            chrome: /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
            safari: /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)
        },
        disableElement: function(n) {
            return n.prop("disabled", !0).css("opacity", .5).attr("aria-disabled", !0)
        },
        enableElement: function(n) {
            return n.prop("disabled", !1).css("opacity", 1).removeAttr("aria-disabled")
        },
        isImposterFake: function(n) {
            return this._isImposter(n, "fake")
        },
        isImposterReal: function(n) {
            return this._isImposter(n, "real")
        },
        _isImposter: function(n, t) {
            var r = ANCILE_UGUIDE_OPTIONS.imposters,
                i, u;
            if (r.length)
                for (i = 0; i < r.length; i++)
                    if (u = r[i], n.is(u[t])) return !0;
            return !1
        },
        getRealForFakeImposter: function(t) {
            var i = n(),
                u, f, r, e;
            if (ANCILE_UGUIDE_OPTIONS.imposters && ANCILE_UGUIDE_OPTIONS.imposters.length > 0)
                for (u = 0; u < ANCILE_UGUIDE_OPTIONS.imposters.length && i.length === 0; u++) f = ANCILE_UGUIDE_OPTIONS.imposters[u], t.is(f.fake) && (r = f.real, e = f.parent, e ? i = t.closest(e).find(r) : (i = t.siblings(r), i.length === 0 && (i = t.find(r)), i.length === 0 && (i = n(r, t.ownerDocument))));
            return i
        },
        getFakeImposterForReal: function(t) {
            var i = n(),
                u, f, r, e;
            if (ANCILE_UGUIDE_OPTIONS.imposters && ANCILE_UGUIDE_OPTIONS.imposters.length > 0)
                for (u = 0; u < ANCILE_UGUIDE_OPTIONS.imposters.length && i.length === 0; u++) f = ANCILE_UGUIDE_OPTIONS.imposters[u], t.is(f.real) && (r = f.fake, e = f.parent, e ? i = t.closest(e).find(r) : (i = t.siblings(r), i.length === 0 && (i = t.find(r)), i.length === 0 && (i = n(r, t.ownerDocument))));
            return i
        },
        isCkEditorTextElement: function(n) {
            var t = n[0];
            if (!t || !ANCILE_UGUIDE_OPTIONS.ckEditorSelector) return !1;
            var i = t.localName || t.tagName || t.nodeName,
                r = n.is(ANCILE_UGUIDE_OPTIONS.ckEditorSelector),
                u = n.closest(ANCILE_UGUIDE_OPTIONS.ckEditorSelector).length != 0;
            return i == "body" && r || i !== "body" && (r || u)
        },
        positionjQueryUiDialog: function(n, t) {
            var i;
            t.of && t.of !== window || window.preventDefault && (i = window.preventDefault, window.preventDefault = null);
            n.dialog("option", "position", t);
            i && (window.preventDefault = i)
        },
        _findFrameInternal: function(t, i, r, u, f, e) {
            var o, s, h, c, l;
            return f = f === !0, o = n(t, u), o.length > 0 ? i.length == 0 ? f && !this._frameContainsTargetOrImposter(o, e) && (o = null) : (s = n.grep(r, function(n) {
                return n.frame[0] == o[0]
            }), h = s.length > 0 ? s[0].children : [], o = this._findFrameInternal(i[0], i.slice(1) || [], h, this.getFrameContent(o), !1, e)) : o = null, f || o != null && this._frameContainsTargetOrImposter(o, e) || (c = o != null && o.attr("id") ? o.attr("id") : t.substring(t.lastIndexOf("#") + 1), l = this._findVariantIdSelectorsForSelector(c, r), n.each(l, n.proxy(function(n, t) {
                var f = this._findFrameInternal(t, i, r, u, !0, e);
                if (f != null) return o = f, !1
            }, this))), o
        },
        _frameContainsTargetOrImposter: function(t, i) {
            var u = n(this.getFrameContent(t)),
                e = this.findElementBySelector(i.context.control.selector, u),
                r = e.length > 0,
                f;
            return r || (f = this.findElementBySelector(i.imposter, u), r = f.length > 0), r
        },
        _findVariantIdSelectorsForSelector: function(t, i) {
            var u = ANCILE_UGUIDE_OPTIONS.variableFrameIdRegexes || [],
                r = [];
            return n.each(u, function(u, f) {
                f.test(t) && n.each(i, function(n, i) {
                    var e = i.frame.attr("id"),
                        u, o;
                    e != t && f.test(e) && (u = i.frame[0], o = u.localName || u.tagName || u.nodeName, r.push(o + "#" + e))
                })
            }), r
        },
        toString: function() {
            return "ANCILE Utils Class"
        }
    };
    p = function() {
        this.logs = [];
        this.enabled = !1;
        this.logsUrl = null
    };
    p.prototype = {
        initialize: function() {
            return this.enabled = t.options.enableLogging, this.logsUrl = t.options.contentManagementDomain + "/logs", this
        },
        debug: function(n, i) {
            window.console && this.enabled && window.console.log("%s: %s", t.meta.product, n);
            var r = this.logs.length;
            return i === !0 && (r = this.logs.push({
                messageType: "debug",
                message: n
            })), r
        },
        info: function(n, i) {
            window.console && this.enabled && console.info("%s: %s", t.meta.product, n);
            var r = this.logs.length;
            return i === !0 && (r = this.logs.push({
                messageType: "info",
                message: n
            })), r
        },
        warn: function(n, i) {
            window.console && this.enabled && window.console.warn("%s: %s", t.meta.product, n);
            var r = this.logs.length;
            return i === !0 && (r = this.logs.push({
                messageType: "warn",
                message: n
            })), r
        },
        error: function(n) {
            window.console && this.enabled && window.console.warn("%s: %s", t.meta.product, n);
            var i = this.logs.length;
            return i = this.logs.push({
                messageType: "error",
                message: n
            }), this.dump(), this.logs.length
        },
        dump: function() {
            var i = t.cmComm;
            return i.ready && i.send({
                data: {
                    Logs: this.logs
                },
                scope: this,
                url: this.logsUrl + "/dump",
                onSuccess: n.proxy(function(n) {
                    n.status === 200 && (window.console && this.enabled && window.console.info(n.response.response.message), this.flush())
                }, this),
                onError: n.proxy(function(n) {
                    this.warn("Error sending logs to the uGuide service. " + n, !1)
                }, this)
            }), this
        },
        flush: function() {
            return this.logs = [], this
        },
        toString: function() {
            return "ANCILE Cumulus Logger"
        }
    };
    g = function(n, t) {
        this.repository = t ? t : localStorage;
        this.storageSupport = !1;
        this.namespace = n ? n + "_" : "ancile_uguide_"
    };
    g.prototype = {
        initialize: function() {
            return this.storageSupport = this.hasStorageSupport(), this
        },
        get: function(n) {
            if (!this.storageSupport) return null;
            var t = this.repository.getItem(this.namespace + n);
            return t ? ANCILE_UGUIDE_JSON.parse(t) : null
        },
        set: function(n, t) {
            if (this.storageSupport) return this.repository.setItem(this.namespace + n, ANCILE_UGUIDE_JSON.stringify(t)), t
        },
        remove: function(n) {
            if (this.storageSupport) return this.repository.removeItem(this.namespace + n), this.repository.length
        },
        clear: function() {
            if (this.storageSupport)
                for (var n in this.repository) n.indexOf(this.namespace) === 0 && this.repository.removeItem(n)
        },
        hasStorageSupport: function() {
            try {
                if (window.localStorage !== null) return !0
            } catch (n) {}
            return !1
        },
        toString: function() {
            return "ANCILE Local Storage Class"
        }
    };
    nt = function(n) {
        n && (this.app = n, this.ready = !1, this.shimWinRef = null, this.shimUrl = null, this.$shim = null, this.eventNamespace = null, this.cache = {}, this.$initializerDeferred = null)
    };
    nt.prototype = {
        initialize: function(t, i) {
            if (!t || !i) throw "domain or namespace was not supplied to the comm initializer.";
            this.domain = t;
            this.shimUrl = t + "/storageshim";
            this.eventNamespace = ".ancile" + (i.indexOf(".") == 0 ? i : "." + i);
            this.$shim = this._createShim();
            var r = n.Deferred();
            return this._initShim(r), r
        },
        unload: function() {
            this.$shim != null && (this.$shim.remove(), this.$shim = null);
            this.eventNamespace != null && n(window).unbind(this.eventNamespace)
        },
        _createShim: function() {
            return n("<iframe/>").addClass("ancile-storage-shim").width(1).height(1).hide().appendTo(this.app.container)
        },
        _initShim: function(t) {
            var i = this;
            n(window).bind("message" + this.eventNamespace, function(n) {
                if (n.originalEvent && n.originalEvent.data) {
                    var r = ANCILE_UGUIDE_JSON.parse(n.originalEvent.data);
                    if (r && r.type !== i.eventNamespace) return;
                    i.domain.indexOf(n.originalEvent.origin) == 0 && (i.shimWinRef = n.target, i._onReady(r, t))
                }
            });
            this.$shim.attr("src", this.shimUrl + "/init")
        },
        _onReady: function(t, i) {
            n(window).unbind("message" + this.eventNamespace);
            t && t.status == 200 ? (this.ready = !0, this.app.logger.debug("Storage shim " + this.eventNamespace + " initialized."), this._getAll(i)) : (this.app.logger.error("Error: Could not initialize storage shim " + this.eventNamespace + "."), i.reject())
        },
        send: function(n) {
            if (!this.ready) return !1;
            if (!this.$shim || this.$shim.length == 0) return this.app.logger.warn("The storage shim cannot be located."), !1;
            var t = ANCILE_UGUIDE_JSON.stringify(n),
                i = this.$shim[0];
            return i.contentWindow.postMessage(t, "*"), this
        },
        _getAll: function(t) {
            var i = this;
            n(window).bind("message" + this.eventNamespace, function(n) {
                n.originalEvent && i.domain.indexOf(n.originalEvent.origin) == 0 && i._receivedAll(n, t)
            });
            this.send({
                action: "getAll"
            })
        },
        _receivedAll: function(t, i) {
            var r, u;
            if (t.originalEvent.data && (r = ANCILE_UGUIDE_JSON.parse(t.originalEvent.data), r && r.type == this.eventNamespace)) {
                n(window).unbind("message" + this.eventNamespace);
                this.cache = {};
                for (u in r.data) this.cache[u] = ANCILE_UGUIDE_JSON.stringify(r.data[u]);
                i.resolve()
            }
        },
        setItem: function(n, t) {
            this.cache[n] = t;
            this.send({
                action: "set",
                key: n,
                value: t
            })
        },
        getItem: function(n) {
            return this.cache[n]
        },
        removeItem: function(n) {
            this.cache[n] && delete this.cache[n];
            this.send({
                action: "remove",
                key: n
            })
        },
        toString: function() {
            return "ANCILE Cumulus Storage Shim"
        }
    };
    n(function() {
        n.widget("ancile.sidebar", {
            options: {
                buttons: [{
                    id: "ancile-sidebar-button",
                    title: "[Button #1]",
                    content: "Button",
                    click: function() {}
                }]
            },
            _create: function() {
                if (this.element[0].tagName.toLowerCase() !== "div") throw "The base element must be a div.";
                this.element.addClass("ancile-sidebar").attr("role", "toolbar").attr("aria-label", this.options.title);
                n("<ul/>").appendTo(this.element);
                this._refresh()
            },
            _destroy: function() {
                this.element.removeClass("ancile-sidebar").empty()
            },
            _setOptions: function() {
                this._superApply(arguments);
                this._refresh()
            },
            _setOption: function(t, i) {
                switch (t) {
                    case "buttons":
                        if (!n.isArray(i)) throw "buttons must be an array of objects in the form {id: <string>, title: <string>, content: <string or jQuery>, click: <function>}";
                }
                this._super(t, i);
                this._refresh()
            },
            setActiveButton: function(n) {
                this.element.find("button.ancile-sidebar-button-active").removeClass("ancile-sidebar-button-active");
                typeof n == "string" && this.element.find("#" + n).addClass("ancile-sidebar-button-active")
            },
            _refresh: function() {
                var i = this,
                    t = this.element.find("ul").first();
                t.empty();
                n.each(this.options.buttons, function(r, u) {
                    var e = n("<li/>").appendTo(t),
                        f = n("<button/>").attr("id", u.id).attr("title", u.title).attr("aria-label", u.title).attr("aria-disabled", !1).attr("tabindex", 0).attr("role", "button").addClass("ancile-sidebar-button").html(u.content).appendTo(e);
                    f.on("click.ancile.sidebar", function() {
                        i.setActiveButton(n(this).attr("id"))
                    });
                    if (typeof u.click == "function") f.on("click.ancile.sidebar", function(n) {
                        u.click(n)
                    })
                })
            }
        })
    });
    n(function() {
        n.widget("ancile.toolbar", {
            options: {
                label: "Recorder Toolbar",
                standalone: !1,
                buttons: [{
                    id: "ancile-toolbar-button",
                    classes: "class1 class2",
                    title: "[Button #1]",
                    label: !0,
                    hide: !1,
                    click: function() {}
                }]
            },
            _create: function() {
                if (this.element[0].tagName.toLowerCase() !== "div") throw "The base element must be a div.";
                if (this.element.addClass("ancile-toolbar").attr("role", "toolbar").attr("aria-label", this.options.label).disableSelection(), this.options.standalone) {
                    var t = this,
                        i = n("<div/>").addClass("ancile-toolbar-handle").appendTo(this.element);
                    this.element.addClass("ancile-toolbar-standalone").draggable({
                        containment: "document",
                        handle: ".ancile-toolbar-handle",
                        start: function() {
                            n(this).css({
                                opacity: .3
                            })
                        },
                        stop: function(i, r) {
                            n(this).css({
                                opacity: 1
                            });
                            t.options.dragStop && t.options.dragStop(i, r)
                        }
                    })
                }
                n("<div/>").appendTo(this.element);
                this._refresh()
            },
            _destroy: function() {
                this.options.standalone && this.element.draggable("destroy");
                this.element.removeClass("ancile-toolbar").empty().enableSelection()
            },
            _setOptions: function() {
                this._superApply(arguments);
                this._refresh()
            },
            _setOption: function(t, i) {
                switch (t) {
                    case "standalone":
                        throw "standalone can only be set during creation of the toolbar.";
                    case "buttons":
                        if (!n.isArray(i)) throw "buttons must be an array of objects in the form {id: <string>, title: <string>, label: <boolean>, hide: <boolean>, click: <function>}";
                }
                this._super(t, i);
                this._refresh()
            },
            _refresh: function() {
                var i = this,
                    t = this.element.find("div").first();
                t.empty();
                n.each(this.options.buttons, function(r, u) {
                    var f = n("<button/>").attr("id", u.id).attr("title", u.title).attr("aria-label", u.title).attr("aria-disabled", !1).attr("tabindex", 0).attr("type", "button").attr("role", "button").addClass("ancile-toolbar-button").appendTo(t);
                    f.button();
                    u.label ? f.button("option", "label", u.title).addClass("has-label") : (f.button("option", "text", !1), f.find("span").remove());
                    u.classes && f.prepend(n("<i />").addClass(u.classes));
                    u.hide && f.hide();
                    i._on(f, {
                        click: u.click
                    })
                })
            }
        })
    });
    n(function() {
        n.widget("ancile.editor", {
            options: {
                label: "Ancile Editor",
                overflow: "collapse",
                items: [
                    [{
                        type: "button",
                        id: "ancile-editor-button",
                        title: "[Button #1]",
                        hide: !1,
                        click: function() {}
                    }]
                ]
            },
            _create: function() {
                if (this.element[0].tagName.toLowerCase() !== "div") throw "The base element must be a div.";
                if (!n.isArray(this.options.items)) throw "items must be an array of arrays of objects in the form {type: <button|select>, id: <string>, title: <string>, hide: <boolean>, <click: <function>|change: <function>>}";
                this.element.addClass("ancile-editor").attr("role", "toolbar").attr("aria-label", this.options.label);
                this.options.overflow == "collapse" && this._addResizeHandlers();
                this._refresh()
            },
            _destroy: function() {
                this.element.closest(".ui-resizable").off(".ancile.editor");
                this.element.removeClass("ancile-editor").empty()
            },
            _setOptions: function() {
                this._superApply(arguments);
                this._refresh()
            },
            _setOption: function(t, i) {
                switch (t) {
                    case "overflow":
                        i !== "wrap" && (i = "collapse");
                        this.element.closest(".ui-resizable").off(".ancile.editor");
                        i == "collapse" && this._addResizeHandlers();
                        break;
                    case "items":
                        if (!n.isArray(i)) throw "items must be an array of arrays of objects in the form {type: <button|select>, id: <string>, title: <string>, hide: <boolean>, <click: <function>|change: <function>>}";
                }
                this._super(t, i);
                this._refresh()
            },
            _refresh: function() {
                var t = this;
                this.element.empty();
                n.each(this.options.items, function(i, r) {
                    var u = n("<span/>").addClass("ancile-editor-row").appendTo(t.element);
                    n.each(r, function(n, i) {
                        var r = null;
                        if (i.type == "button") r = t._createButton(i);
                        else if (i.type == "select") r = t._createSelectList(i);
                        else return !0;
                        i.hide && r.hide();
                        r.appendTo(u)
                    });
                    t.options.overflow === "collapse" && t._collapseRow(u)
                })
            },
            _addResizeHandlers: function() {
                var t = this,
                    n = this.element.closest(".ui-resizable");
                n.off("resizestart.ancile.editor");
                n.off("resizestop.ancile.editor");
                n.on("resizestart.ancile.editor", function() {
                    t._onParentResizeStart()
                }).on("resizestop.ancile.editor", function() {
                    t._onParentResizeStop()
                })
            },
            _onParentResizeStart: function() {
                this.element.find(".ancile-editor-collapsible-item").hide();
                this.element.find(".ancile-editor-collapsed-button > i").removeClass("fa-angle-double-left").addClass("fa-angle-double-right");
                this.element.css("white-space", "nowrap");
                this.element.css("overflow-x", "hidden")
            },
            _onParentResizeStop: function() {
                this.element.css("white-space", "normal");
                this.element.css("overflow-x", "visible");
                this._refresh()
            },
            _createButton: function(t) {
                var i = n("<button/>").attr({
                    id: t.id,
                    title: t.title,
                    "aria-label": t.title,
                    "aria-disabled": !1,
                    tabindex: 0,
                    role: "button"
                });
                t.content && i.append(t.content);
                i.on("click", t.click);
                return i
            },
            _createSelectList: function(t) {
                var i = n("<select/>").attr({
                    id: t.id,
                    title: t.title,
                    "aria-label": t.title,
                    "aria-disabled": !1,
                    tabindex: 0,
                    unselectable: "on"
                }).change(t.change);
                return n.each(t.values, function(t, r) {
                    var u = n("<option/>").attr("value", r.value).text(r.text).appendTo(i)
                }), i
            },
            _collapseRow: function(t) {
                var f = this,
                    u = this.element.width(),
                    r, i;
                u > 0 && (r = 0, i = null, n.each(t.children(), function(t, e) {
                    var o = n(e),
                        s;
                    r += o.outerWidth();
                    r > u && (i == null && (i = f._createCollapseButton().insertBefore(o), r - o.outerWidth() + i.outerWidth() > u && (s = i.prev().insertAfter(i).addClass("ancile-editor-collapsible-item"))), o.addClass("ancile-editor-collapsible-item"))
                }), t.find(".ancile-editor-collapsible-item").hide())
            },
            _createCollapseButton: function() {
                var t = n("<button/>").addClass("ancile-editor-collapsed-button");
                n("<i/>").addClass("fa fa-angle-double-right").appendTo(t);
                t.on("click.ancile.editor", function() {
                    var n = t.siblings(".ancile-editor-collapsible-item");
                    n.first().is(":visible") ? (t.find("i").removeClass("fa-angle-double-left").addClass("fa-angle-double-right"), n.hide()) : (t.find("i").removeClass("fa-angle-double-right").addClass("fa-angle-double-left"), n.show())
                });
                return t
            }
        })
    });
    n(function() {
        n.widget("ancile.colorpicker", {
            options: {
                colors: ["#FFFFFF", "#FF0000", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#FF00FF", "#BBBBBB", "#CC0000", "#CCCC00", "#00CC00", "#00CCCC", "#0000CC", "#CC00CC", "#888888", "#990000", "#999900", "#009900", "#009999", "#000099", "#990099", "#444444", "#660000", "#666600", "#006600", "#006666", "#000066", "#660066", "#000000", "#330000", "#333300", "#003300", "#003333", "#000033", "#330033"],
                colorsPerRow: 7,
                picked: function() {}
            },
            _create: function() {
                var i, t;
                if (this.element[0].tagName.toLowerCase() !== "div") throw "The base element must be a div.";
                if (typeof this.options.picked != "function") throw "picked must be a function";
                if (!n.isArray(this.options.colors)) throw "colors must be an array of css color values (e.g., ['#FFFFFF', '#AAAAAA'])";
                if (!n.isNumeric(this.options.colorsPerRow)) throw "colorsPerRow must be numeric";
                this.options.colorsPerRow = Math.max(1, Math.floor(this.options.colorsPerRow));
                this.element.addClass("ancile-colorpicker").disableSelection();
                i = n("<table/>").addClass("ancile-colorpicker-colors").css("float", "left").appendTo(this.element);
                this.element.on("colorpickerpicked", this.options.picked);
                t = this;
                i.on("click.ancile.colorpicker", "td", null, function(i) {
                    var r = t._getHexColor(n(this).css("background-color"));
                    t.element.trigger("colorpickerpicked", r);
                    i.preventDefault();
                    i.stopPropagation()
                });
                this._refresh()
            },
            _destroy: function() {
                this.element.removeClass("ancile-colorpicker").empty().enableSelection()
            },
            _setOptions: function() {
                this._superApply(arguments);
                this._refresh()
            },
            _setOption: function(t, i) {
                switch (t) {
                    case "colors":
                        if (!n.isArray(i)) throw "colors must be an array of css color values (e.g., ['#FFFFFF', '#AAAAAA'])";
                        break;
                    case "colorsPerRow":
                        if (!n.isNumeric(i)) throw "colorsPerRow must be numeric";
                        i = Math.max(1, Math.floor(i));
                        break;
                    case "picked":
                        if (typeof i != "function") throw "picked must be a function";
                        this.element.off("colorpickerpicked");
                        this.element.on("colorpickerpicked", i)
                }
                this._super(t, i);
                this._refresh()
            },
            _refresh: function() {
                var r = this,
                    t = this.element.find("table.ancile-colorpicker-colors");
                t.empty();
                var u = n("<tbody/>").appendTo(t),
                    i = null,
                    r = this;
                n.each(this.options.colors, function(t, f) {
                    t % r.options.colorsPerRow == 0 && (i = n("<tr/>").appendTo(u));
                    var e = n("<td/>").css("height", "12px").css("width", "12px").css("background-color", f).appendTo(i)
                })
            },
            _getHexColor: function(n) {
                if (typeof n == "undefined" || n == null) return "#FFFFFF";
                if (n.indexOf("#") == 0) return n;
                n = n.replace("rgb(", "").replace(")", "").replace(" ", "");
                var t = n.split(",");
                return "#" + this._toHex(t[0]) + this._toHex(t[1]) + this._toHex(t[2])
            },
            _toHex: function(n) {
                return (n = parseInt(n, 10), isNaN(n)) ? "FF" : (n = Math.max(0, Math.min(n, 255)), "0123456789ABCDEF".charAt((n - n % 16) / 16) + "0123456789ABCDEF".charAt(n % 16))
            }
        })
    });
    n(function() {
        n.widget("ancile.messageribbon", {
            options: {
                duration: 5e3
            },
            _create: function() {
                if (this.element[0].tagName.toLowerCase() !== "div") throw "The base element must be a div.";
                if (!n.isNumeric(this.options.duration) || this.options.duration <= 0) throw "duration must be an integer greater than 0.";
                this.element.addClass("ancile-messageribbon")
            },
            _destroy: function() {
                this.element.removeClass("ancile-messageribbon ancile-messageribbon-success ancile-messageribbon-warning ancile-messageribbon-error ancile-messageribbon-processing").empty()
            },
            _setOptions: function() {
                this._superApply(arguments)
            },
            _setOption: function(t, i) {
                switch (t) {
                    case "duration":
                        if (!n.isNumeric(i) || i <= 0) throw "duration must be an integer greater than 0.";
                }
                this._super(t, i)
            },
            showSuccess: function(n) {
                this._showMessage(n, "ancile-messageribbon-success", this.options.duration)
            },
            showProcessing: function(n) {
                this._showMessage(n, "ancile-messageribbon-processing")
            },
            showError: function(n) {
                this._showMessage(n, "ancile-messageribbon-error", this.options.duration)
            },
            showWarning: function(n) {
                this._showMessage(n, "ancile-messageribbon-warning", this.options.duration)
            },
            clearMessage: function(t) {
                t === !0 ? this.element.empty().removeClass("ancile-messageribbon-success ancile-messageribbon-warning ancile-messageribbon-error ancile-messageribbon-processing") : this.element.slideUp(function() {
                    n(this).empty().removeClass("ancile-messageribbon-success ancile-messageribbon-warning ancile-messageribbon-error ancile-messageribbon-processing")
                })
            },
            _showMessage: function(t, i, r) {
                this.clearMessage(!0);
                this.element.addClass(i).removeAttr("style").append(t);
                var u = this,
                    f = function() {
                        n.isNumeric(r) ? u.element.slideDown(function() {
                            n(this).delay(r);
                            u.clearMessage()
                        }) : u.element.slideDown()
                    };
                setTimeout(function() {
                    f()
                }, 500)
            }
        })
    });
    tt = function() {
        this.results = [];
        this.searchUrl = "";
        this.deleteUrl = "";
        this.$searchDialog = null;
        this.appContext = {
            url: ""
        };
        this.isHelpResults = !1;
        this.isProvidedResultSet = !1;
        this.descTruncateLen = 50;
        this.disabled = !1;
        this._publishedStatus = 2
    };
    tt.prototype = {
        initialize: function() {
            return this.searchUrl = t.options.helpDomain + "/help/loadbynameordescription", this.deleteUrl = t.options.contentManagementDomain + "/process/delete", this.$searchDialog = this._createDialog(), this.onResize(), this
        },
        unload: function() {
            this.$searchDialog && (this.$searchDialog.dialog("close"), this.$searchDialog.dialog("destroy"), this.$searchDialog.remove(), this.$searchDialog = null)
        },
        setResults: function(n, t) {
            t = t === !0;
            this.isProvidedResultSet = !0;
            this.results = n;
            this._renderResults(t)
        },
        onResize: function() {
            i.centerElement(n(".cumulus-search-dialog"))
        },
        setShowAllLinkVisible: function(n) {
            if (this.$searchDialog) {
                var t = this.$searchDialog.parent().find("#ancile-searchdialog-show-all");
                n === !1 ? t.hide() : t.show()
            }
        },
        _createDialog: function() {
            var u, r, f, e, o;
            if (this.$searchDialog != null) return this.$searchDialog;
            u = this;
            r = n("<div />").addClass("ancile-searchdialog").appendTo(t.container);
            this.isHelpResults ? r.attr("title", t.phraseMan.get("searchDialog.availableHelp")).attr("aria-label", t.phraseMan.get("searchDialog.availableHelp")) : r.attr("title", t.phraseMan.get("searchDialog.search")).attr("aria-label", t.phraseMan.get("searchDialog.search"));
            f = n("<div />").addClass("ancile-searchdialog-wrapper").appendTo(r);
            n("<input />").attr("id", "ancile-searchdialog-term").attr("type", "text").attr("placeholder", t.phraseMan.get("searchDialog.placeholder")).on("keypress.ancile.searchDialog", function(n) {
                n.which == 13 && (n.preventDefault(), n.stopPropagation(), u._fetchResults())
            }).appendTo(f);
            e = n("<button/>").attr("id", "ancile-searchdialog-search").attr("title", t.phraseMan.get("searchDialog.search")).attr("aria-label", t.phraseMan.get("searchDialog.search")).attr("aria-disabled", !1).attr("role", "button").append(n("<i />").addClass("fa fa-search")).addClass("ancile-searchdialog-search").appendTo(f);
            e.on("click.ancile.searchDialog", n.proxy(this._fetchResults, this));
            n("<div />").addClass("ancile-searchdialog-results").appendTo(r);
            r.dialog({
                width: 400,
                height: 300,
                minWidth: 300,
                minHeight: 200,
                hide: "fast",
                show: "fast",
                dialogClass: "cumulus-search-dialog",
                closeOnEscape: !1,
                create: function(i) {
                    var r = n(i.target).parent();
                    r.appendTo(t.container).css("position", "fixed");
                    n(".ui-dialog-titlebar-close", r).addClass("ancile-dialog-close")
                },
                open: function() {
                    var t = n("button.ui-dialog-titlebar-close", n(this).parent());
                    t.off("click.ancile.searchDialog").on("click.ancile.searchDialog", n.proxy(u.unload, u));
                    i.positionjQueryUiDialog(r, {
                        my: "center",
                        at: "center",
                        of: window,
                        collision: "flipfit"
                    })
                },
                close: function() {
                    t.container.trigger("close.ancile.searchDialog")
                }
            });
            this.isHelpResults ? f.hide() : f.show();
            r.on("scroll", function() {
                var t = n(this);
                n(".ancile-searchdialog-none-of-these", t).css("bottom", -n(this).scrollTop())
            });
            n("#ancile-searchdialog-term").on("input.ancile.searchDialog propertychange.ancile.searchDialog DOMCharacterDataModified.ancile.searchDialog", function() {
                var t = n(this);
                t.val() !== "" ? i.enableElement(n("#ancile-searchdialog-search")) : i.disableElement(n("#ancile-searchdialog-search"))
            });
            return i.disableElement(n("#ancile-searchdialog-search")), o = n("<a />").attr("id", "ancile-searchdialog-show-all").attr("href", "javascript:void(0)").attr("title", t.phraseMan.get("searchDialog.showAll")).html(t.phraseMan.get("searchDialog.showAll")).on("click.ancile.searchDialog", function() {
                if (n(this).prop("disabled")) return !1;
                n("#ancile-searchdialog-term").val("*");
                u._fetchResults()
            }), n("<div/>").attr("id", "ancile-searchdialog-show-all-container").append(o).appendTo(n(".cumulus-search-dialog")), r
        },
        _fetchResults: function() {
            var r = n("#ancile-searchdialog-term", this.$searchDialog).val(),
                u, i, f;
            r = r ? n.trim(r) : "";
            r != "" && (this._setDialogEnabled(!1), u = n(".ancile-searchdialog-results"), u.empty().append(n("<p />").text(t.phraseMan.get("searchDialog.searching"))), i = this, this.results = [], f = {
                searchText: r,
                appContext: this.appContext
            }, ANCILE_UGUIDE_OPTIONS.isAuthor !== !0 || i.isHelpResults || (f.authorflag = "true"), t.helpComm.send({
                data: f,
                scope: this,
                url: this.searchUrl,
                onSuccess: function(r) {
                    try {
                        r.response && n.isArray(r.response) && (i.results = r.response);
                        i.isProvidedResultSet = !1;
                        i._renderResults()
                    } catch (f) {
                        t.ui.showError(t.phraseMan.get("searchDialog.errorFetchingResults") + " " + (f.message || ""));
                        t.logger.error("Error encountered when fetching results in _fetchResults: " + (f.message || "but err.message was not provided"));
                        u.empty().html(n("<p/>").text(t.phraseMan.get("searchDialog.errorFetchingResults")))
                    }
                    i._setDialogEnabled(!0)
                },
                onError: function() {
                    u.empty().html(n("<p/>").text(t.phraseMan.get("searchDialog.errorFetchingResults")));
                    i._setDialogEnabled(!0)
                }
            }))
        },
        _clearResults: function() {
            n(".ancile-searchdialog-wrapper").show();
            n("#ancile-searchdialog-term").val("").focus();
            n(".ancile-searchdialog-none-of-these").remove();
            var t = this.$searchDialog.find(".ancile-searchdialog-results");
            t.empty()
        },
        _renderResults: function(i) {
            var r, u, f;
            i = i === !0;
            r = this;
            u = this.$searchDialog.find(".ancile-searchdialog-results");
            u.empty();
            this.results.length == 0 ? (n(".ancile-searchdialog-wrapper").show(), n("<p />").text(i ? t.phraseMan.get("searchDialog.needHelp") : t.phraseMan.get("searchDialog.noResultsFound")).appendTo(u)) : (this.isHelpResults && this.isProvidedResultSet && n("<a />").addClass("ancile-searchdialog-none-of-these").html(t.phraseMan.get("searchDialog.noneOfThese")).attr("role", "button").on("click.ancile.searchDialog.noneOfThese", function() {
                r._clearResults()
            }).appendTo(this.$searchDialog), f = n("<ul />").addClass("ancile-searchdialog-results-list").disableSelection().appendTo(u).on("click.ancile.searchDialog", "li", function() {
                r.disabled || n(this).data("data").published !== r._publishedStatus || (r._setDialogEnabled(!1), r.$searchDialog.trigger("processSelected.ancile.searchDialog", [n(this).data("data")]))
            }).on("keypress.ancile.searchDialog", "li", function(t) {
                !r.disabled && n(this).is(t.target) && t.keyCode == 13 && n(this).data("data").published === r._publishedStatus && (r._setDialogEnabled(!1), r.$searchDialog.trigger("processSelected.ancile.searchDialog", [n(this).data("data")]))
            }), n.each(this.results, function(i, u) {
                var o = n("<li />").attr("tabindex", 0).attr("role", "button").appendTo(f).data("data", u),
                    e, s, h, a, c, v, l;
                if (n("<h3 />").text(u.name).appendTo(o), u.description != null && n("<p />").text(u.description).appendTo(o), e = new Array(12), e[0] = "January", e[1] = "February", e[2] = "March", e[3] = "April", e[4] = "May", e[5] = "June", e[6] = "July", e[7] = "August", e[8] = "September", e[9] = "October", e[10] = "November", e[11] = "December", s = "", u.published === r._publishedStatus ? (h = new Date(u.publishedTimestamp), a = e[h.getMonth()] + " " + h.getDate() + ", " + (h.getYear() + 2e3 - 100), s = "Published: " + a) : (c = new Date(u.modifiedTimeStamp), v = e[c.getMonth()] + " " + c.getDate() + ", " + (c.getYear() + 2e3 - 100), s = "Unpublished. Last Modified: " + v), n("<span />").text(s).appendTo(o), ANCILE_UGUIDE_OPTIONS.isAuthor === !0 && !r.isHelpResults)
                    if (l = n("<div/>").addClass("ancile-searchdialog-result-buttons").appendTo(o), u.lockObj && !u.lockObj.locked) {
                        n("<button/>").addClass("ancile-searchdialog-result-button ancile-searchdialog-result-edit").attr("title", t.phraseMan.get("searchDialog.editProcess")).attr("aria-label", t.phraseMan.get("searchDialog.editProcess")).attr("aria-disabled", !1).attr("role", "button").append(n("<i />").addClass("fa fa-pencil")).appendTo(l).on("click.ancile.searchDialog", n.proxy(function(n) {
                            t.ui.showProcessing(t.phraseMan.get("searchDialog.loadingProcess").replace("%processName%", u.name));
                            this._lockProcessForEditing(u.guid);
                            n.stopPropagation()
                        }, r));
                        n("<button/>").addClass("ancile-searchdialog-result-button ancile-searchdialog-result-delete").attr("title", t.phraseMan.get("searchDialog.deleteProcess")).attr("aria-label", t.phraseMan.get("searchDialog.deleteProcess")).attr("aria-disabled", !1).attr("role", "button").append(n("<i />").addClass("fa fa-trash-o")).appendTo(l).on("click.ancile.searchDialog", n.proxy(function(n) {
                            this._confirmDeleteProcess(u.guid, o);
                            n.stopPropagation()
                        }, r));
                        o.addClass("ancile-searchdialog-result-two-buttons")
                    } else n("<div/>").addClass("ancile-searchdialog-result-button ancile-searchdialog-result-locked").attr("title", t.phraseMan.get("searchDialog.locked")).attr("aria-label", t.phraseMan.get("searchDialog.locked")).append(n("<i />").addClass("fa fa-lock")).appendTo(l), o.addClass("ancile-searchdialog-result-one-button");
                r._showLess(o, u.description)
            }))
        },
        _lockProcessForEditing: function(n) {
            this._setDialogEnabled(!1);
            var i = this,
                r = new s;
            r.initialize({
                guid: n,
                steps: []
            });
            r.lock(function(n) {
                i._onLoadProcess(n)
            }, function(n, r) {
                r === "locked" ? t.ui.showWarning(t.phraseMan.get("searchDialog.lockedByAnother")) : t.ui.showError(r);
                i._setDialogEnabled(!0)
            })
        },
        _onLoadProcess: function(n) {
            t.ui.searchProcessDialog.unload();
            t.ui.clearMessage();
            t.ui.createEditProcessDialog(n)
        },
        _confirmDeleteProcess: function(i, r) {
            var f = this,
                e = r.data("delete-confirmation-shown"),
                u;
            if (e) {
                u = r.find(".ancile-searchdialog-confirm-delete");
                u.slideToggle({
                    duration: "fast",
                    step: function() {
                        f._keepDeleteConfirmInDialog(u)
                    }
                });
                return
            }
            r.data("delete-confirmation-shown", !0);
            u = n("<div />").addClass("ancile-searchdialog-confirm-delete").appendTo(r);
            n("<p />").text(t.phraseMan.get("searchDialog.deleteConfirmation")).appendTo(u);
            n("<button />").text(t.phraseMan.get("common.no")).appendTo(u).on("click.ancile.searchDialog", function(n) {
                u.slideToggle("fast");
                n.stopPropagation()
            });
            n("<button />").text(t.phraseMan.get("common.yes")).appendTo(u).on("click.ancile.searchDialog", n.proxy(function(n) {
                t.ui.showProcessing(t.phraseMan.get("searchDialog.deletingProcess").replace("%processName%", r.data("data").name));
                u.hide();
                this._lockProcessForDeletion(i, r);
                n.stopPropagation()
            }, f));
            u.slideToggle({
                duration: "fast",
                step: function() {
                    f._keepDeleteConfirmInDialog(u)
                }
            })
        },
        _keepDeleteConfirmInDialog: function(n) {
            var t = n.closest(".ancile-searchdialog"),
                i = t.height() + t.offset().top;
            i <= n.offset().top + n.outerHeight() && n[0].scrollIntoView(!1)
        },
        _deleteProcess: function(i, r) {
            t.cmComm.send({
                data: {
                    processGuid: i
                },
                scope: this,
                url: this.deleteUrl,
                onSuccess: n.proxy(function() {
                    r.slideUp(function() {
                        n(this).remove()
                    });
                    t.ui.showSuccess(t.phraseMan.get("searchDialog.processDeleted"))
                }, this),
                onError: n.proxy(function(n) {
                    t.ui.showError(t.phraseMan.get("searchDialog.processDeletionFailed") + " " + n)
                }, this)
            })
        },
        _lockProcessForDeletion: function(n, i) {
            this._setDialogEnabled(!1);
            var r = this,
                u = new s;
            u.initialize({
                guid: n,
                steps: []
            });
            u.lock(function() {
                r._deleteProcess(n, i);
                r._setDialogEnabled(!0)
            }, function(n, i) {
                i === "locked" ? t.ui.showWarning(t.phraseMan.get("searchDialog.lockedByAnother")) : t.ui.showError(i);
                r._setDialogEnabled(!0)
            })
        },
        _showLess: function(i, r) {
            if (r && !(r.length <= this.descTruncateLen)) {
                var u = this,
                    f = r.substr(0, this.descTruncateLen) + "...";
                n(".cumulus-truncation-less", i).length && n(".cumulus-truncation-less", i).remove();
                n("p", i).html(f);
                n("<a />").addClass("cumulus-truncation-more").html(t.phraseMan.get("common.more")).attr("href", "javascript:void(0)").on("click.ancile.searchResultsMore", function(n) {
                    u._showMore(i, r);
                    n.stopPropagation()
                }).appendTo(n("p", i))
            }
        },
        _showMore: function(i, r) {
            var u = this;
            n(".cumulus-truncation-more", i).remove();
            n("p", i).html(r);
            n("<a />").addClass("cumulus-truncation-less").html(t.phraseMan.get("common.less")).attr("href", "javascript:void(0)").on("click.ancile.searchResultsMore", function(n) {
                u._showLess(i, r);
                n.stopPropagation()
            }).appendTo(n("p", i))
        },
        _setDialogEnabled: function(n) {
            var t = this.$searchDialog.find("input,button,a");
            n ? i.enableElement(t) : i.disableElement(t);
            this.disabled = !n
        },
        toString: function() {
            return "ANCILE Cumulus Search Process Dialog"
        }
    };
    it = function() {
        this.steps = [];
        this.recorder = null;
        this.process = null;
        this.selectedItem = null;
        this._dirty = !1;
        this._$dialog = null;
        this.guidsAssigned = !1;
        this.originalTitle = "";
        this.descTruncateLen = 50;
        this.processStorageNamespace = "process_info";
        this.stepsStorageNamespace = "process_steps";
        this._characterCountTimeout = null;
        this._stepsListEnabled = !0
    };
    it.prototype = {
        initialize: function(r) {
            if (!this._$dialog) {
                this.saveUrl = t.options.contentManagementDomain + "/process/save";
                this.publishUrl = t.options.contentManagementDomain + "/process/markaspublished";
                this.undoManager = new ut;
                n(this.undoManager).on("undostackchanged.ancile.undomanager.editProcessDialog", n.proxy(this._setRecordingToolbarEnabled, this, !0));
                this.recorder = new et;
                n(this.recorder).on("paused.ancile.recorder.editProcessDialog", function() {
                    n("#cumulus-recorder-toolbar #ancile-recorder-toolbar-record").show();
                    n("#cumulus-recorder-toolbar #ancile-recorder-toolbar-pause").hide()
                }).on("resumed.ancile.recorder.editProcessDialog", function() {
                    n("#cumulus-recorder-toolbar #ancile-recorder-toolbar-record").hide();
                    n("#cumulus-recorder-toolbar #ancile-recorder-toolbar-pause").show()
                });
                this._restoreProcess(r);
                var u = this.process.guid != i.guid.empty;
                this._$dialog = this._createDialog(u);
                n(document).on("recordAction.ancile.editProcessDialog", n.proxy(this.onRecordAction, this));
                this._adjustDialog()
            }
            return this
        },
        _restoreProcess: function(n) {
            var r, i, f, u;
            if (n) {
                for (this.process = n, r = t.storage, i = r.get(this.processStorageNamespace), (i == null || i === "") && (i = {}), i.name = n.name, i.description = n.description, i.createdTimestamp = n.createdTimestamp, i.publishedTimestamp = n.publishedTimestamp, i.guid = n.guid, i.recording = !0, i.paused = !0, r.set(this.processStorageNamespace, i), f = [], u = 0; u < n.steps.length; u++) f.push(n.steps[u].toObject());
                r.set(this.stepsStorageNamespace, f)
            } else this.process = new s, this.process.customerId = ANCILE_UGUIDE_OPTIONS.customerRecordId
        },
        resetState: function() {
            var r = t.storage.get(this.processStorageNamespace);
            r && (typeof r.h != "undefined" && r.h !== null && this._$dialog.dialog("option", "height", r.h), typeof r.w != "undefined" && r.w !== null && this._$dialog.dialog("option", "width", r.w), typeof r.x != "undefined" && typeof r.y != "undefined" && r.x !== null && r.y !== null && i.positionjQueryUiDialog(this._$dialog, {
                my: "left top",
                at: "left+" + r.x + " top+" + r.y,
                of: window
            }), r.guid && (this.process.guid = r.guid), r.expires && (this.process.lockExpiresOn = new Date(r.expires), this.process.checkExpiration()), (r.name || r.description) && (this.process.name = r.name, this.process.description = r.description, n("#cumulus-process-name").val(r.name), n("#cumulus-process-desc").val(r.description)));
            this._loadExistingSteps();
            this.undoManager.initialize();
            this.recorder.initialize();
            this.selectedItem && (!this.recorder.recording || this.recorder.paused) && this._selectStep(this.selectedItem);
            r && r.dirty ? this.dirty() : this.clean();
            this.recorder.recording && (n("#cumulus-process-form").hide(), n("#cumulus-process-name-bar").show(), this._updateProcessNameBar(), this._setRecordingToolbarEnabled(!0));
            window.setTimeout(function() {
                n("#cumulus-process-dialog").scrollTop(n("#cumulus-process-dialog").prop("scrollHeight"))
            }, 100)
        },
        _setState: function(n) {
            var r = t.storage,
                i = r.get(this.processStorageNamespace) || {};
            n && (i.x = parseInt(n.position.left), i.y = parseInt(n.position.top), n.size && (i.w = parseInt(n.size.width), i.h = parseInt(n.size.height)));
            r.set(this.processStorageNamespace, i)
        },
        unload: function() {
            this._endEditing();
            this._unlockProcess();
            n(document).off("recordAction.ancile.editProcessDialog");
            this.recorder && (this.recorder.currentStep = null, n(this.recorder).off("paused.ancile.recorder.editProcessDialog resumed.ancile.recorder.editProcessDialog"), this.recorder.unload());
            this.clean();
            this._clearStorage();
            this._removeDialog();
            this._removeNote();
            this.steps = null;
            this.process && (this.process.unload(), this.process = null);
            n(this.undoManager).off("undostackchanged.ancile.undomanager.editProcessDialog")
        },
        close: function() {
            var n = !1;
            return this._endEditing(), this._$dialog.dialog("close"), n = !this._$dialog || !this._$dialog.dialog("isOpen"), n && this.unload(), n
        },
        _clearStorage: function() {
            var i = t.storage,
                n = i.get(this.processStorageNamespace) || {};
            i.remove(this.stepsStorageNamespace);
            delete n.name;
            delete n.description;
            delete n.guid;
            delete n.dirty;
            delete n.createdTimestamp;
            delete n.publishedTimestamp;
            n.recording = !1;
            n.paused = !1;
            i.set(this.processStorageNamespace, n);
            this.undoManager.clear()
        },
        _removeDialog: function() {
            this._$dialog && (this._$dialog.dialog("destroy").remove(), delete this._$dialog)
        },
        onResize: function(n) {
            this._adjustDialog(n)
        },
        _adjustDialog: function() {
            var t = n(".cumulus-process-dialog");
            if (t && t.is(":visible")) {
                if (i.offScreenRight(t)) {
                    if (t.offset().left <= 0) return;
                    t.css({
                        left: i.getWindowWidth(n(window)) - t.width() - 10
                    })
                }
                if (i.offScreenBottom(t)) {
                    if (t.offset().top <= 0) return;
                    t.css({
                        top: i.getWindowHeight(n(window)) - t.height() - 10
                    })
                }
            }
        },
        _createDialog: function(i) {
            var r = this,
                o = this.recorder,
                s, e, v;
            this.originalTitle = i ? t.phraseMan.get("ui.processDialog.editProcess") : t.phraseMan.get("ui.processDialog.createNewProcess");
            n.validator.addMethod("lettersnumberswithbasicpunc", function(n) {
                return /^[a-z0-9\-_.,()'"\s]+$/i.test(n)
            }, t.phraseMan.get("ui.processDialog.titleValidationChars"));
            var f = n("<div />").attr("id", "cumulus-process-dialog").attr("title", this.originalTitle).appendTo(t.container),
                h = f.dialog({
                    height: 350,
                    width: 400,
                    minWidth: 300,
                    minHeight: 200,
                    hide: "slow",
                    show: "slow",
                    dialogClass: "cumulus-process-dialog",
                    closeOnEscape: !1,
                    position: {
                        my: "right bottom",
                        at: "right-10 bottom-50",
                        of: window
                    },
                    create: function(i) {
                        var u = n(i.target).parent(),
                            r;
                        u.appendTo(t.container).css("position", "fixed");
                        n(".ui-dialog-titlebar-close", u).addClass("ancile-dialog-close");
                        r = n(".ui-dialog-titlebar-close", u).clone();
                        r.removeClass("ui-dialog-titlebar-close ancile-dialog-close").addClass("ui-dialog-titlebar-help ancile-dialog-help");
                        r.attr("title", t.phraseMan.get("ui.processDialog.help"));
                        r.children().remove();
                        n(".ui-dialog-titlebar", u).append(r);
                        n(".ui-dialog-titlebar-help").click(function() {
                            window.open("https://support.ancile.com/hc/sections/201229156", "_blank")
                        })
                    },
                    dragStop: function(n, t) {
                        r._setState(t)
                    },
                    resizeStop: function(n, t) {
                        r._setState(t)
                    },
                    beforeClose: function() {
                        if (r._dirty) return confirm(t.phraseMan.get("ui.processDialog.confirmDirtyClose"))
                    },
                    close: function() {
                        r.unload();
                        t.container.trigger("close.ancile.processDialog")
                    }
                }),
                c = n(".cumulus-process-dialog .ui-dialog-titlebar"),
                l = n("<div/>").attr("id", "cumulus-recorder-toolbar").insertAfter(c),
                y = l.toolbar({
                    buttons: [{
                        id: "ancile-recorder-toolbar-record",
                        label: !0,
                        title: t.phraseMan.get("ui.processDialog.toolbar.buttons.paused.title"),
                        click: function() {
                            r.validateProcessForm() && (r._endEditing(), r._removeNote(), o.record())
                        }
                    }, {
                        id: "ancile-recorder-toolbar-pause",
                        hide: !0,
                        label: !0,
                        title: t.phraseMan.get("ui.processDialog.toolbar.buttons.recording.title"),
                        click: function() {
                            o.pause();
                            r._createNote(r.selectedItem)
                        }
                    }, {
                        id: "ancile-recorder-toolbar-save",
                        classes: "fa fa-save",
                        title: t.phraseMan.get("ui.processDialog.toolbar.buttons.save.title"),
                        click: function() {
                            r.save()
                        }
                    }, {
                        id: "ancile-recorder-toolbar-undo",
                        classes: "fa fa-undo",
                        title: t.phraseMan.get("common.undo"),
                        click: function() {
                            r.undo()
                        }
                    }, {
                        id: "ancile-recorder-toolbar-redo",
                        title: t.phraseMan.get("common.redo"),
                        classes: "fa fa-repeat",
                        click: function() {
                            r.redo()
                        }
                    }, {
                        id: "ancile-recorder-toolbar-publish",
                        title: t.phraseMan.get("ui.processDialog.toolbar.buttons.publish.title"),
                        label: t.phraseMan.get("ui.processDialog.toolbar.buttons.publish.title"),
                        click: function() {
                            n("#cumulus-process-dialog").scrollTop(0);
                            o.pause();
                            r._confirmPublishProcess()
                        }
                    }]
                }),
                u = n("<form />").attr({
                    id: "cumulus-process-form",
                    onsubmit: "return false;"
                }).appendTo(f),
                a = n("<div />").addClass("ancile-form-control ancile-form-control-required").appendTo(u);
            n("<input />").attr({
                id: "cumulus-process-name",
                type: "text",
                minlength: "3",
                maxlength: "100",
                placeholder: t.phraseMan.get("common.name"),
                name: "processName",
                autocomplete: "off"
            }).appendTo(a);
            s = n("<div />").addClass("ancile-form-control").appendTo(u);
            n("<textarea />").attr({
                id: "cumulus-process-desc",
                maxlength: "255",
                placeholder: t.phraseMan.get("common.description")
            }).appendTo(s);
            n("<button />").attr("id", "cumulus-process-form-close").html(t.phraseMan.get("ui.processDialog.save")).on("click", n.proxy(function(n) {
                this.validateProcessForm();
                n.preventDefault();
                n.stopPropagation()
            }, this)).appendTo(u);
            u.appendTo(f);
            n("input, textarea", u).on("paste.ancile.processDialog", function() {
                setTimeout(function() {
                    r._sanitizeProcForm()
                }, 0)
            });
            n("<ul/>").attr("id", "cumulus-recorder-steps").appendTo(f).on("click.ancile.processDialog keydown.ancile.processDialog", "li.ancile-cumulus", function(t) {
                if (r._stepsListEnabled && (t.type != "keydown" || n(this).is(t.target) && t.keyCode == 13) && (n("#cumulus-process-form-close:visible").length == 0 || r.validateProcessForm())) {
                    var i = n(this);
                    i.find("#cumulus-editor-toolbar").length == 0 && (r.recorder.recording && !r.recorder.paused && r.recorder.pause(), r.selectedItem && r.selectedItem[0] == i[0] ? r._clearSelectedStep() : r._selectStep(n(this)), t.stopPropagation())
                }
            });
            if (e = n("<div/>").attr("id", "cumulus-process-name-bar").prependTo(f), this.process && this.process.customerId != ANCILE_UGUIDE_OPTIONS.customerRecordId) e.addClass("cumulus-process-name-bar-uneditable"), e.off("click.ancile.processDialog");
            else {
                e.removeClass("cumulus-process-name-bar-uneditable");
                e.on("click.ancile.processDialog", n.proxy(this._showForm, this))
            }
            return o.recording || this._setRecordingToolbarEnabled(!1), this.process && this.process.name ? (u.hide(), this._updateProcessNameBar()) : (n("#cumulus-process-name", u).focus(), e.hide()), v = n("<div />").attr("id", "cumulus-click-to-start").html(t.phraseMan.get("ui.processDialog.clickToStart")).appendTo(f).hide(), h
        },
        validateProcessForm: function() {
            var i = n("#cumulus-process-form"),
                r;
            return i.validate({
                errorClass: "cumulus-form-error",
                rules: {
                    processName: {
                        lettersnumberswithbasicpunc: !0,
                        required: !0,
                        minlength: 3,
                        maxlength: 100
                    }
                },
                messages: {
                    processName: {
                        required: t.phraseMan.get("common.name"),
                        minlength: t.phraseMan.get("ui.processDialog.titleValidationMin"),
                        maxlength: t.phraseMan.get("ui.processDialog.titleValidationMax")
                    }
                }
            }), this._sanitizeProcForm(), r = i.valid(), r && ((this.process.name != n("#cumulus-process-name").val() || this.process.description != n("#cumulus-process-desc").val()) && this.dirty(), this._cacheProcessInfo(), i.hide(), n("#cumulus-process-name-bar").show(), this._getRemainingSteps().length == 0 && this.recorder.record()), r
        },
        _showForm: function() {
            this._clearSelectedStep();
            n("#cumulus-process-name-bar").hide();
            n("#cumulus-process-form").show();
            n("#cumulus-process-form #cumulus-process-name").focus()
        },
        _sanitizeProcForm: function() {
            var t = n("#cumulus-process-form");
            n("input, textarea", t).each(function() {
                var t = n(this),
                    r = i.stripTags(t.val());
                t.val(r)
            })
        },
        _cacheProcessInfo: function() {
            if (this.process) {
                var r = t.storage,
                    i = r.get(this.processStorageNamespace) || {};
                i.name = this.process.name = n("#cumulus-process-name").val();
                i.description = this.process.description = n("#cumulus-process-desc").val();
                i.createdTimestamp = this.process.createdTimestamp;
                i.publishedTimestamp = this.process.publishedTimestamp;
                i.dirty = this._dirty;
                i.guid = this.process.guid;
                i.recording = this.recorder.recording;
                i.paused = this.recorder.paused;
                r.set(this.processStorageNamespace, i);
                this._updateProcessNameBar()
            }
        },
        _updateProcessNameBar: function() {
            var u = this,
                t = n("#cumulus-process-name-bar"),
                r = this.process.name,
                i = this.process.description;
            t.empty();
            n("<div />").addClass("cumulus-process-name-bar-name").html(r).appendTo(t);
            i && i.length && (n("<div />").addClass("cumulus-process-name-bar-desc").html(i).appendTo(t), this._showLess());
            this._getRemainingSteps().length > 0 ? n("#cumulus-click-to-start").hide() : this.process && this.process.name && n("#cumulus-click-to-start").show()
        },
        _showLess: function() {
            if (this.process.description.length <= this.descTruncateLen) {
                n(".cumulus-process-name-bar-desc").html(this.process.description);
                return
            }
            var i = this,
                u = n("#cumulus-process-name-bar"),
                r = this.process.description.substr(0, this.descTruncateLen) + "...";
            n(".cumulus-truncation-less").length && n(".cumulus-truncation-less").remove();
            n(".cumulus-process-name-bar-desc").html(r);
            n("<a />").addClass("cumulus-truncation-more").html(t.phraseMan.get("common.more")).attr("href", "javascript:void(0)").on("click.ancile.processNameBar", function(n) {
                i._showMore();
                n.stopPropagation()
            }).appendTo(n(".cumulus-process-name-bar-desc"))
        },
        _showMore: function() {
            var i = this;
            n(".cumulus-truncation-more").remove();
            n(".cumulus-process-name-bar-desc").html(this.process.description);
            n("<a />").addClass("cumulus-truncation-less").html(t.phraseMan.get("common.less")).attr("href", "javascript:void(0)").on("click.ancile.processNameBar", function(n) {
                i._showLess();
                n.stopPropagation()
            }).appendTo(n(".cumulus-process-name-bar-desc"))
        },
        _confirmPublishProcess: function() {
            var i, r;
            if (this._endEditing(), this._setDialogEnabled(!1), i = n(".ancile-process-dialog-confirm-publish"), i.length == 0) {
                i = n("<div />").addClass("ancile-process-dialog-confirm-publish").prependTo("#cumulus-process-dialog").on("click.ancile.processDialog", !1);
                r = this;
                n("<p />").text(t.phraseMan.get("ui.processDialog.publishProcessConfirmation")).appendTo(i);
                n("<button />").text(t.phraseMan.get("common.no")).attr("id", "ancile-publish-confirm-no").appendTo(i).on("click.ancile.processDialog", function(n) {
                    i.slideToggle("fast");
                    r._setDialogEnabled(!0);
                    n.stopPropagation()
                });
                n("<button />").text(t.phraseMan.get("common.yes")).attr("id", "ancile-publish-confirm-yes").appendTo(i).on("click.ancile.processDialog", function(t) {
                    i.slideToggle("fast");
                    r._dirty ? r.save(n.proxy(r._publishProcess, r)) : r._publishProcess();
                    t.stopPropagation()
                })
            }
            i.slideDown("fast")
        },
        addStep: function(n) {
            var t = null,
                i;
            if (n.state = "created", n.status = 1, this.selectedItem) {
                for (t = this._getStepIndexByListItem(this.selectedItem); this.steps[t + 1] && this.steps[t + 1].guid == this.steps[t].guid;) t++;
                this.steps.splice(t + 1, 0, n);
                i = this.selectedItem.index()
            } else t = this.steps.push(n) - 1, i = t;
            this.undoManager.addUndo({
                action: "created",
                index: t,
                step: n.toObject()
            });
            this._updatePrevStepGuids();
            this.addStepToList(n, i);
            this._cacheSteps();
            this.dirty()
        },
        hasSteps: function() {
            return this.steps.length > 0
        },
        _getStepIndexByListItem: function(n) {
            for (var t = 0; t < this.steps.length; t++)
                if (this.steps[t] === n.data("step")) return t;
            return -1
        },
        replaceCurrentStep: function(t) {
            var r = null,
                i, u;
            t.state = "created";
            this.selectedItem ? (r = this._getStepIndexByListItem(this.selectedItem), i = this.steps[r], t.guid = i.guid, this.steps[r] = t, u = this.selectedItem.index()) : (n("#ancile-cumulus #cumulus-recorder-steps li:last-child").remove(), i = this.steps[this.steps.length - 1], t.guid = i ? i.guid : null, t.status = i ? i.status : 1, this.steps[this.steps.length - 1] = t, u = null);
            this._updatePrevStepGuids();
            this.addStepToList(t, u, !0);
            this._cacheSteps();
            this.dirty()
        },
        addStepToList: function(u, f, e) {
            var s = this,
                c = u.getEditorStepText(),
                o, l, h;
            c || (c = "");
            o = n("<li/>").addClass("ancile-cumulus").attr("role", "button").attr("tabindex", 0).data("step", u);
            switch (u.status) {
                case 0:
                    break;
                case 1:
                    o.addClass("ancile-process-dialog-draft-step");
                    this._isHiddenDraftStep(u) && (o.addClass("ancile-process-dialog-step-hidden"), o.attr("aria-hidden", !0));
                    break;
                case 2:
                    o.addClass("ancile-process-dialog-published-step");
                    this._getDraftStepVersion(u) && (o.addClass("ancile-process-dialog-step-hidden"), o.attr("aria-hidden", !0));
                    break;
                default:
                    o.addClass("ancile-process-dialog-draft-step")
            }
            n("<div/>").addClass("ancile-process-dialog-step-number").appendTo(o);
            l = n("<div/>").html(c).addClass("ancile-process-dialog-step-text").appendTo(o);
            l.on("paste.ancile.processDialog", function(n) {
                n.preventDefault();
                var t = n.originalEvent.clipboardData.getData("text/plain"),
                    r = i.stripTags(t, u.tagWhitelist);
                document.execCommand("insertHTML", !1, r);
                setTimeout(function() {
                    i.stripAttributes(l, u.attrWhitelist)
                }, 0)
            });
            h = n("<div/>").addClass("ancile-process-dialog-step-buttons").appendTo(o);
            n("<button/>").addClass("ancile-process-dialog-step-button ancile-process-dialog-step-edit").attr("title", t.phraseMan.get("ui.processDialog.editStep")).attr("aria-label", t.phraseMan.get("ui.processDialog.editStep")).attr("aria-disabled", !1).attr("role", "button").append(n("<i />").addClass("fa fa-pencil")).appendTo(h).on("click.ancile.recorder", function(t) {
                var i = n(this);
                (n("#cumulus-process-form-close:visible").length == 0 || s.validateProcessForm()) && i.find("#cumulus-editor-toolbar").length == 0 && (s.recorder.recording && !s.recorder.paused && s.recorder.pause(), s._editStep(i.closest("li.ancile-cumulus")));
                t.stopPropagation()
            });
            n("<button/>").addClass("ancile-process-dialog-step-button ancile-process-dialog-step-delete").attr("title", t.phraseMan.get("ui.processDialog.deleteStep")).attr("aria-label", t.phraseMan.get("ui.processDialog.deleteStep")).attr("aria-disabled", !1).attr("role", "button").append(n("<i />").addClass("fa fa-trash-o")).appendTo(h).on("click.ancile.recorder", n.proxy(function(n) {
                this._deleteStep(o, !0, !1);
                n.stopPropagation()
            }, this));
            n("<button/>").addClass("ancile-process-dialog-step-button ancile-process-dialog-step-restore").attr("title", t.phraseMan.get("ui.processDialog.restoreStep")).attr("aria-label", t.phraseMan.get("ui.processDialog.restoreStep")).attr("aria-disabled", !1).attr("role", "button").append(n("<i />").addClass("fa fa-plus-circle")).appendTo(h).on("click.ancile.recorder", n.proxy(function(n) {
                this._restoreStep(o, !0);
                n.stopPropagation()
            }, this));
            return u.getRawStepText().length > r.STEPTEXT_CHAR_LIMIT && n("<div/>").addClass("validation-error").attr("title", t.phraseMan.get("ui.processDialog.stepTextValidationMax")).appendTo(o), (u.state == "created" || u.state == "updated") && o.addClass("ancile-process-dialog-draft-step"), (u.state === "deleted" || u.state === "markedForDeath" || u.state == null && u.active === !1) && (o.addClass("ancile-process-dialog-draft-step"), this._setStepListItemDeleted(o, !0)), this.selectedItem && !isNaN(f) ? (e ? (this.selectedItem.replaceWith(o), this.selectedItem = o) : o.insertAfter(n("#ancile-cumulus #cumulus-recorder-steps > li:eq(" + f + ")")), this._selectStep(o), n("#cumulus-process-dialog").scrollTop(o.position().top)) : (o.appendTo(n("#ancile-cumulus #cumulus-recorder-steps")), u.selected && this._selectStep(o), n("#cumulus-process-dialog").scrollTop(n("#cumulus-process-dialog").prop("scrollHeight"))), o
        },
        _isHiddenDraftStep: function(n) {
            for (var i, t = 0; t < this.steps.length; t++)
                if (i = this.steps[t], i.status === 2 && i.guid === n.guid && i.prevGuid !== n.prevGuid) return !0;
            return !1
        },
        _getDraftStepVersion: function(n) {
            for (var i, t = 0; t < this.steps.length; t++)
                if (i = this.steps[t], i.status === 1 && i.guid === n.guid) return i;
            return null
        },
        _selectStep: function(n) {
            this._clearSelectedStep();
            this.selectedItem = n;
            n.addClass("is-active");
            var t = n.data("step");
            t.selected = !0;
            this._createNote(n)
        },
        _editStep: function(n) {
            this._selectStep(n, !0);
            this._cacheSteps();
            this._cacheProcessInfo();
            this._beginEditing(n)
        },
        _createNote: function(t) {
            if (t && (!this.recorder.recording || this.recorder.paused)) {
                this._removeNote();
                var i = n("#ancile-cumulus #cumulus-recorder-steps li"),
                    r = i.index(t) + 1;
                this.note = new b({
                    editMode: !0
                }).initialize(t.data("step"), r, i.length)
            }
        },
        _removeNote: function() {
            this.note && (this.note.unload(), delete this.note)
        },
        _clearSelectedStep: function() {
            this.selectedItem && (this._endEditing(), this.selectedItem.data("step") && (this.selectedItem.data("step").selected = !1), this.selectedItem.removeClass("is-active"), this.selectedItem = null, this._removeNote())
        },
        _deleteStep: function(n, t, i) {
            var r, u, f;
            this._endEditing();
            t = t === !0;
            i = i === !0;
            r = n.data("step");
            u = r.state;
            r.selected && this._clearSelectedStep();
            t && this.undoManager.addUndo({
                action: "deleted",
                index: n.index(),
                step: r.toObject()
            });
            i && u === "created" ? (f = this._getStepIndexByListItem(n), this.steps.splice(f, 1), n.remove()) : (n.addClass("ancile-process-dialog-draft-step"), this._setStepListItemDeleted(n, !0), r.active = !1, r.state = u === "created" ? "markedForDeath" : "deleted");
            this._cacheSteps();
            this.dirty()
        },
        _restoreStep: function(n, t) {
            t = t === !0;
            n.addClass("ancile-process-dialog-draft-step");
            var i = n.data("step");
            t && this.undoManager.addUndo({
                action: "restored",
                index: n.index(),
                step: i.toObject()
            });
            i.active = !0;
            i.state = i.state == "markedForDeath" ? "created" : "updated";
            this._setStepListItemDeleted(n, !1);
            this._cacheSteps();
            this.dirty()
        },
        _keepStepInView: function(t) {
            var i = n("#cumulus-process-dialog"),
                r = t.offset().top,
                f = r + t.outerHeight(),
                u = i.offset().top,
                e = u + i.height();
            r < u && i.scrollTop(i.scrollTop() - (u - r));
            f > e && i.scrollTop(i.scrollTop() + (f - e))
        },
        _beginEditing: function(t) {
            var e = this,
                u, r, f;
            t.find(".ancile-process-dialog-step-buttons").hide();
            t.removeClass("ancile-process-dialog-draft-step");
            t.find(".validation-error").remove();
            u = this._createEditorToolbar();
            t.prepend(u);
            u.editor("option", "overflow", "collapse");
            setTimeout(function() {
                try {
                    u.editor("option", "overflow", "collapse")
                } catch (n) {}
            }, 1e3);
            t.append(this._createEditingControls());
            this._updateStepCharacterCount();
            r = t.find(".ancile-process-dialog-step-text");
            r.attr("contenteditable", !0);
            r.focus();
            r.on("blur.ancile.processDialog keyup.ancile.processDialog paste.ancile.processDialog input.ancile.processDialog", n.proxy(this._updateStepCharacterCountDeferred, this));
            r.on("keydown.ancile.processDialog", n.proxy(function(n) {
                !n.ctrlKey || n.shiftKey || n.altKey || (n.which == 66 ? (n.preventDefault(), n.stopPropagation(), this._executeBrowserCommand("bold", null)) : n.which == 73 && (n.preventDefault(), n.stopPropagation(), this._executeBrowserCommand("italic", null)))
            }, this));
            if (i.browser.safari || i.browser.chrome) {
                r.on("dragover", function(n) {
                    n.preventDefault();
                    var n = n.originalEvent,
                        i = document.caretRangeFromPoint(n.clientX, n.clientY),
                        t = window.getSelection();
                    return t.removeAllRanges(), t.addRange(i), !1
                });
                r.on("drop", function(t) {
                    t.preventDefault();
                    var f = n(this),
                        t = t.originalEvent,
                        o = t.dataTransfer.getData("text"),
                        h = document.caretRangeFromPoint(t.clientX, t.clientY),
                        u = window.getSelection(),
                        s = "tmp-" + i.getRand();
                    u.removeAllRanges();
                    u.addRange(h);
                    f.get(0).focus();
                    document.execCommand("insertHTML", !1, '<span id="' + s + '">' + o + "<\/span>");
                    n("#" + s).replaceWith(" " + o + " ");
                    u.removeAllRanges();
                    r.find(".dragged").remove();
                    e._bindTokens(f)
                });
                this._bindTokens(r)
            }
            this._keepStepInView(t);
            f = t.data("step");
            typeof f.labelCandidatesSelect != "undefined" && t.find('span[data-ancile-cumulus-replacement="label"]').html(f.labelCandidatesSelect.getElement().html())
        },
        _bindTokens: function(t) {
            var r = t.find("span[contenteditable=false]");
            r.each(function() {
                n(this).attr("draggable", i.browser.chrome || i.browser.safari)
            });
            r.off("dragstart").on("dragstart", function(t) {
                t.originalEvent.dataTransfer.setData("text", t.target.outerHTML);
                n(t.target).addClass("dragged")
            })
        },
        _endEditing: function(t) {
            var u, f, e, i, o, s, h;
            (t = t !== !1, this.selectedItem) && (u = this.selectedItem, f = u.find(".ancile-process-dialog-step-text[contenteditable=true]"), f.length != 0) && (f.find(".ancile-custom-select-item-list").remove(), e = f.html(), i = u.data("step"), i.labelCandidatesSelect != undefined && (o = f.find("span[data-ancile-cumulus-replacement='label']").find(".ancile-custom-select-text").text(), i.labelCandidatesSelect.selectedText = o), e && e !== "" && i.getEditorStepText() != e && (t ? (this.undoManager.clearRedo(), this.undoManager.addUndo({
                action: "updated",
                index: u.index(),
                step: i.toObject()
            }), i.setStepText(e), i.state !== "created" && (i.state = "updated"), s = this.addStepToList(i, u.index(), !0), s.addClass("ancile-process-dialog-draft-step"), this._cacheSteps(), this._cacheProcessInfo(), this.dirty()) : (f.html(i.getEditorStepText()), i.labelCandidatesSelect != undefined && (i.labelCandidatesSelect.restoreLastSelectedText(), i.text = i.labelCandidatesSelect.selectedText, i.setStepText(f.html())))), (i.state == "created" || i.state == "updated") && u.addClass("ancile-process-dialog-draft-step"), h = f.find("span[contenteditable=false]"), h.each(function() {
                n(this).removeAttr("draggable")
            }), i.getRawStepText().length > r.STEPTEXT_CHAR_LIMIT && n("<div/>").addClass("validation-error").appendTo(this.selectedItem), u.find("#cumulus-editor-toolbar").remove(), u.find(".ancile-process-dialog-editing-controls").remove(), f.off(".ancile.processDialog"), f.attr("contenteditable", !1), u.find(".ancile-editor-colorpicker").remove(), u.find(".ancile-process-dialog-step-buttons").show())
        },
        _createEditorToolbar: function() {
            for (var f, r = [t.phraseMan.get("ui.stepEditor.toolbar.selects.fontSize.title"), 1, 2, 3, 4, 5, 6, 7], u = 0; u < r.length; u++) f = r[u], r[u] = {}, r[u].text = f.toString(), r[u].value = f;
            var i = this,
                e = n("<div/>").attr("id", "cumulus-editor-toolbar"),
                o = e.editor({
                    label: t.phraseMan.get("recorder.title"),
                    items: [
                        [{
                            type: "button",
                            id: "ancile-editor-bold",
                            title: t.phraseMan.get("ui.stepEditor.toolbar.buttons.bold.title"),
                            content: n("<i/>").addClass("fa fa-bold"),
                            click: function() {
                                i._executeBrowserCommand("bold", null)
                            }
                        }, {
                            type: "button",
                            id: "ancile-editor-italic",
                            title: t.phraseMan.get("ui.stepEditor.toolbar.buttons.italic.title"),
                            content: n("<i/>").addClass("fa fa-italic"),
                            click: function() {
                                i._executeBrowserCommand("italic", null)
                            }
                        }, {
                            type: "button",
                            id: "ancile-editor-font-color",
                            title: t.phraseMan.get("ui.stepEditor.toolbar.buttons.fontColor.title"),
                            content: n("<i/>").addClass("fa fa-tint"),
                            click: function(t) {
                                var e = n(t.currentTarget).parent(),
                                    r = e.find(".ancile-editor-colorpicker"),
                                    u, f;
                                r.length > 0 ? r.remove() : (u = window.getSelection(), f = u.rangeCount > 0 ? u.getRangeAt(0) : null, r = n("<div/>").addClass("ancile-editor-colorpicker").prependTo(e), r.colorpicker({
                                    picked: function(t, u) {
                                        r.remove();
                                        n(".ancile-process-dialog-step-text").focus();
                                        var e = window.getSelection();
                                        e.removeAllRanges();
                                        f != null && e.addRange(f);
                                        i._executeBrowserCommand("foreColor", u)
                                    }
                                }))
                            }
                        }, {
                            type: "select",
                            id: "ancile-editor-font-size",
                            title: t.phraseMan.get("ui.stepEditor.toolbar.selects.fontSize.title"),
                            values: r,
                            change: function(t) {
                                n.isNumeric(this.value) && (i._executeBrowserCommand("fontSize", Number(this.value)), this.selectedIndex = 0, t.stopPropagation())
                            }
                        }, {
                            type: "button",
                            id: "ancile-editor-hyperlink",
                            title: t.phraseMan.get("ui.stepEditor.toolbar.buttons.hyperlink.title"),
                            content: n("<i/>").addClass("fa fa-link"),
                            click: function() {
                                var r = prompt(t.phraseMan.get("ui.stepEditor.toolbar.buttons.hyperlink.prompt"), "http://"),
                                    u;
                                r != null && r != "" && (r = n.trim(r), r = r.replace(/\r?\n/g, ""), u = r.toLowerCase(), u != "http://" && u != "https://" && u.indexOf("javascript:") != 0 && (u.indexOf("http://") != 0 && u.indexOf("https://") != 0 && (r = "http://" + r), i._executeBrowserCommand("createLink", r), i._updateAnchorTags()))
                            }
                        }, {
                            type: "button",
                            id: "ancile-editor-ordered-list",
                            title: t.phraseMan.get("ui.stepEditor.toolbar.buttons.orderedList.title"),
                            content: n("<i/>").addClass("fa fa-list-ol"),
                            click: function() {
                                i._executeBrowserCommand("insertOrderedList", null)
                            }
                        }, {
                            type: "button",
                            id: "ancile-editor-unordered-list",
                            title: t.phraseMan.get("ui.stepEditor.toolbar.buttons.unorderedList.title"),
                            content: n("<i/>").addClass("fa fa-list-ul"),
                            click: function() {
                                i._executeBrowserCommand("insertUnorderedList", null)
                            }
                        }, {
                            type: "button",
                            id: "ancile-editor-undo",
                            title: t.phraseMan.get("common.undo"),
                            content: n("<i/>").addClass("fa fa-undo"),
                            click: function() {
                                i._executeBrowserCommand("undo", null)
                            }
                        }, {
                            type: "button",
                            id: "ancile-editor-redo",
                            title: t.phraseMan.get("common.redo"),
                            content: n("<i/>").addClass("fa fa-repeat"),
                            click: function() {
                                i._executeBrowserCommand("redo", null)
                            }
                        }, {
                            type: "button",
                            id: "ancile-editor-reset",
                            title: t.phraseMan.get("ui.stepEditor.toolbar.buttons.reset.title"),
                            content: n("<i/>").addClass("fa fa-refresh"),
                            click: function() {
                                i._resetStepText()
                            }
                        }]
                    ]
                });
            return e
        },
        _createEditingControls: function() {
            var i = this,
                u = n("<div/>").addClass("ancile-process-dialog-editing-controls");
            return n("<button/>").text(t.phraseMan.get("ui.processDialog.save")).addClass("ancile-process-dialog-edit-done").appendTo(u).click(function(n) {
                i._endEditing();
                i._createNote(i.selectedItem);
                n.stopPropagation()
            }), n("<button/>").text(t.phraseMan.get("common.cancel")).addClass("ancile-process-dialog-edit-cancel").appendTo(u).click(function(n) {
                i._endEditing(!1);
                n.stopPropagation()
            }), n("<span/>").text("0 / " + r.STEPTEXT_CHAR_LIMIT).addClass("ancile-process-dialog-edit-char-count").appendTo(u), u
        },
        _updateAnchorTags: function() {
            var t = this.selectedItem.find(".ancile-process-dialog-step-text");
            t.find("a").each(function() {
                var t = n(this);
                t.attr("href") != "javascript:void(0);" && (t.attr("title", t.attr("href")), t.attr("href", "javascript:void(0);"))
            })
        },
        _updateStepCharacterCountDeferred: function() {
            this._characterCountTimeout == null && (this._characterCountTimeout = window.setTimeout(n.proxy(this._updateStepCharacterCount, this), 250))
        },
        _updateStepCharacterCount: function() {
            var n, i, u, t;
            this.selectedItem && (n = this.selectedItem, i = n.data("step"), i && (u = i.getRawStepTextForText(n.find(".ancile-process-dialog-step-text").html()), t = n.find(".ancile-process-dialog-edit-char-count"), t.text(u.length + " / " + r.STEPTEXT_CHAR_LIMIT), u.length > r.STEPTEXT_CHAR_LIMIT ? t.addClass("exceeds-limit") : t.removeClass("exceeds-limit")));
            window.clearTimeout(this._characterCountTimeout);
            this._characterCountTimeout = null
        },
        _executeBrowserCommand: function(n, t) {
            try {
                var i = this.selectedItem.find(".ancile-process-dialog-step-text");
                i.find("span[data-ancile-cumulus-replacement]").removeAttr("contenteditable");
                document.execCommand(n, !1, t)
            } finally {
                i.find("span[data-ancile-cumulus-replacement]").attr("contenteditable", "false")
            }
        },
        _resetStepText: function() {
            var t, n, i;
            this._endEditing(!1);
            t = this.selectedItem;
            n = t.data("step");
            this.undoManager.clearRedo();
            this.undoManager.addUndo({
                action: "updated",
                index: t.index(),
                step: n.toObject()
            });
            n.state = "updated";
            n.setStepText(null);
            i = this.addStepToList(n, t.index(), !0);
            this._editStep(i);
            this._cacheSteps();
            this.dirty()
        },
        save: function(r) {
            var s, h;
            if (this.recorder.recording) {
                if (this.undoManager.clear(), this.selectedItem && this._clearSelectedStep(), this.recorder.pause(), n("#cumulus-recorder-steps .validation-error").length > 0) {
                    t.ui.showError(t.phraseMan.get("ui.processDialog.stepTextValidationMax"));
                    s = n("#cumulus-recorder-steps .validation-error").first().closest("li");
                    this._selectStep(s);
                    this._beginEditing(s);
                    return
                }
                var f = this.originalTitle ? this.originalTitle : t.phraseMan.get("ui.processDialog.editProcess"),
                    e = this,
                    c = this._hasNewSteps();
                if (c && !this.guidsAssigned) {
                    n("#cumulus-process-dialog").dialog("option", "title", f + " - " + t.phraseMan.get("recorder.saving"));
                    t.ui.showProcessing(f + " - " + t.phraseMan.get("recorder.saving"));
                    i.guid.getGuids(c, function(n) {
                        e._assignRealGuids(n, r)
                    }, function() {
                        e._assignRealGuids()
                    });
                    return
                }
                if (this._updatePrevStepGuids(), h = this._getFilteredSteps(), h.length !== 0 || this._dirty) {
                    this._setDialogEnabled(!1);
                    n("#cumulus-process-dialog").dialog("option", "title", f + " - " + t.phraseMan.get("recorder.saving"));
                    t.ui.showProcessing(f + " - " + t.phraseMan.get("recorder.saving"));
                    var l = t.cmComm,
                        a = t.storage,
                        o = a.get(this.processStorageNamespace),
                        u = {};
                    u.Steps = h;
                    u.Name = o.name;
                    u.Description = o.description;
                    u.Guid = o.guid;
                    u.createdTimestamp = o.createdTimestamp;
                    l.send({
                        data: u,
                        scope: this,
                        url: this.saveUrl,
                        onSuccess: function(n) {
                            e._onSave(n);
                            typeof r == "function" && r(n)
                        },
                        onError: function(i) {
                            t.ui.showError(t.phraseMan.get("ui.processDialog.saveError") + " " + i);
                            e._setDialogEnabled(!0);
                            var r = this.originalTitle ? this.originalTitle : t.phraseMan.get("ui.processDialog.editProcess");
                            n("#cumulus-process-dialog").dialog("option", "title", r + " - " + t.phraseMan.get("recorder.paused"));
                            this.guidsAssigned = !1
                        }
                    })
                }
            }
        },
        _assignRealGuids: function(i, r) {
            var o, f, u, e, s;
            if (i && i.response && n.isArray(i.response)) {
                for (o = i.response, f = 0, u = 0; u < this.steps.length; u++) e = this.steps[u], e.state === "created" && (e.guid = o[f], f++);
                this._cacheSteps();
                this.guidsAssigned = !0;
                this.save(r)
            } else t.ui.showError(t.phraseMan.get("ui.processDialog.saveError")), this._setDialogEnabled(!0), s = this.originalTitle ? this.originalTitle : t.phraseMan.get("ui.processDialog.editProcess"), n("#cumulus-process-dialog").dialog("option", "title", s + " - " + t.phraseMan.get("recorder.paused")), this.guidsAssigned = !1
        },
        _updatePrevStepGuids: function() {
            for (var n, i, u = this._getRemainingSteps(), r = u.length > 0 ? u : this.steps, t = 0; t < r.length; t++) n = r[t], i = t > 0 ? r[t - 1].guid : "", n.prevGuid != i && n.guid != i && (n.prevGuid = i, n.state == null && (n.state = "updated"));
            this._cacheSteps()
        },
        _getRemainingSteps: function() {
            var i = [],
                n, t;
            if (this.steps && this.steps.length)
                for (n = 0; n < this.steps.length; n++) t = this.steps[n], t.state !== "deleted" && t.state !== "markedForDeath" && i.push(t);
            return i
        },
        _getFilteredSteps: function() {
            for (var r, i, f, e = [], u = 0; u < this.steps.length; u++) r = this.steps[u], r.state !== null && r.state !== "markedForDeath" && (i = r.toObject(), f = r.getRawStepText(), i.stepText = f == t.phraseMan.get("step.action." + r.action) ? null : f, i.context.control.frameSelector = n.isArray(i.context.control.frameSelectors) ? i.context.control.frameSelectors.join("|") : "", delete i.context.control.frameSelectors, e.push(i));
            return e
        },
        _onSave: function(i) {
            i.response && i.response.process && (t.ui.showSuccess(t.phraseMan.get("ui.processDialog.saveSuccess").replace("%processName%", i.response.process.name)), n("#cumulus-process-dialog").dialog("option", "title", t.phraseMan.get("ui.processDialog.editProcess")), this._reloadProcess(i.response.process));
            this.guidsAssigned = !1;
            this.clean()
        },
        _hasNewSteps: function() {
            for (var i, n = 0, t = 0; t < this.steps.length; t++) i = this.steps[t], i.state === "created" && n++;
            return n > 0 ? n : !1
        },
        _cacheSteps: function() {
            for (var u = t.storage, r = [], i = 0; i < this.steps.length; i++) r.push(this.steps[i].toObject());
            u.set(this.stepsStorageNamespace, r);
            this._getRemainingSteps().length > 0 ? n("#cumulus-click-to-start").hide() : n("#cumulus-click-to-start").show()
        },
        _loadExistingSteps: function() {
            var o = t.storage,
                i = o.get(this.stepsStorageNamespace),
                s, u, f, e;
            if (!i || i.length == 0) return [];
            for (n("#cumulus-click-to-start").hide(), s = [], u = 0; u < i.length; u++) f = i[u], e = new r(f, t.cmComm.hostUrl), this._reloadStep(e);
            this.recorder.currentStep = this.steps[this.steps.length - 1]
        },
        _reloadStep: function(n) {
            this.steps.push(n);
            this.addStepToList(n)
        },
        _reloadProcess: function(t) {
            var i, r;
            for (this.process = (new s).initialize(t), t.lockObj && this.process.setExpiration(t.lockObj.expires), this._restoreProcess(this.process), n("#ancile-cumulus #cumulus-recorder-steps").empty(), this.steps = [], i = 0; i < this.process.steps.length; i++) r = this.process.steps[i], this._reloadStep(r);
            this.recorder.currentStep = this.steps[this.steps.length - 1];
            this._cacheSteps()
        },
        dirty: function() {
            this._dirty = !0;
            this._setRecordingToolbarEnabled(!0);
            this._cacheProcessInfo()
        },
        clean: function() {
            this._dirty = !1;
            this._setDialogEnabled(!0);
            this._cacheProcessInfo()
        },
        undo: function() {
            var i, n, f, u, r;
            if (this._endEditing(), i = this.undoManager.undo(), i) {
                n = i.step;
                switch (i.action) {
                    case "created":
                        r = this._getStepListItemByGuid(n.guid);
                        this._deleteStep(r, !1, !0);
                        break;
                    case "updated":
                        f = this._getStepByGuid(n.guid);
                        u = this.undoManager.getLastRedo();
                        u.step = f.toObject();
                        this.undoManager.setLastRedo(u);
                        this._restoreStepState(n);
                        break;
                    case "deleted":
                        this._restoreStepState(n);
                        break;
                    case "restored":
                        r = this._getStepListItemByGuid(n.guid);
                        this._deleteStep(r, !1, !1);
                        break;
                    default:
                        t.logger.warn("Invalid action stored in undo object.")
                }
                this._cacheSteps();
                this._setState()
            }
        },
        redo: function() {
            var f, i, o, h, u, s, e;
            if (this._endEditing(), f = this.undoManager.redo(), f) {
                i = f.step;
                switch (f.action) {
                    case "created":
                        u = new r(i, t.cmComm.hostUrl);
                        u.state = "created";
                        o = n(n("#cumulus-recorder-steps li.ancile-cumulus")[f.index]);
                        o.length > 0 ? (h = this._getStepIndexByListItem(o), this.steps.splice(h, 0, u)) : this.steps.push(u);
                        this._restoreStepState(i);
                        break;
                    case "updated":
                        u = this._getStepByGuid(i.guid);
                        s = this.undoManager.getLastUndo();
                        s.step = u.toObject();
                        this.undoManager.setLastUndo(s);
                        this._restoreStepState(i);
                        break;
                    case "deleted":
                        e = this._getStepListItemByGuid(i.guid);
                        this._deleteStep(e, !1, !1);
                        break;
                    case "restored":
                        e = this._getStepListItemByGuid(i.guid);
                        this._restoreStep(e, !1);
                        break;
                    default:
                        t.logger.warn("Invalid action stored in redo object.")
                }
                this._cacheSteps();
                this._setState();
                this.dirty()
            }
        },
        onRecordAction: function() {
            n("#cumulus-click-to-start").hide();
            this.undoManager.clearRedo();
            this.dirty()
        },
        _restoreStepState: function(n) {
            var t = this._getStepByGuid(n.guid);
            t.state = n.state;
            t.active = n.active;
            t.setStepText(n.stepText);
            this._cacheSteps();
            this._refreshStepsList()
        },
        _getStepByGuid: function(n) {
            for (var i, t = 0; t < this.steps.length; t++)
                if (i = this.steps[t], i.guid === n) return i;
            return null
        },
        _getStepListItemByGuid: function(t) {
            var i = null;
            return n("#ancile-cumulus #cumulus-recorder-steps li").each(function() {
                return i = n(this), i.data("step").guid === t ? !1 : void 0
            }), i
        },
        _refreshStepsList: function() {
            n("#ancile-cumulus #cumulus-recorder-steps").empty();
            for (var t = 0; t < this.steps.length; t++) this.addStepToList(this.steps[t])
        },
        _unlockProcess: function() {
            if (this.process && this.process.guid !== i.guid.empty) {
                var n = this;
                this.process.unlock(function() {
                    n.process = null
                })
            }
        },
        _publishProcess: function() {
            this._setDialogEnabled(!1);
            var n = t.storage.get(this.processStorageNamespace),
                i = this,
                r = {
                    processGuid: n.guid
                };
            t.ui.showProcessing(t.phraseMan.get("ui.processDialog.publishing").replace("%processName%", n.name));
            t.cmComm.send({
                data: r,
                scope: this,
                url: this.publishUrl,
                onSuccess: function() {
                    t.ui.showSuccess(t.phraseMan.get("ui.processDialog.publishSuccess").replace("%processName%", n.name));
                    i.close()
                },
                onError: function(n) {
                    t.ui.showError(t.phraseMan.get("ui.processDialog.publishError") + " " + n);
                    i._setDialogEnabled(!0)
                }
            })
        },
        _setStepListItemDeleted: function(n, t) {
            var i, r;
            t = t !== !1;
            i = n.find("div.ancile-process-dialog-step-text");
            t ? (n.find("div.ancile-process-dialog-step-number").removeClass("ancile-process-dialog-step-number").addClass("ancile-process-dialog-step-number-hidden").hide(), n.addClass("ancile-process-dialog-step-deleted"), i.html(i.text())) : (n.find("div.ancile-process-dialog-step-number-hidden").removeClass("ancile-process-dialog-step-number-hidden").addClass("ancile-process-dialog-step-number").show(), n.removeClass("ancile-process-dialog-step-deleted"), r = n.data("step"), i.html(r.getEditorStepText()))
        },
        _setDialogEnabled: function(n) {
            n = n !== !1;
            this._setRecordingToolbarEnabled(n);
            this._setNameDescriptionAreaEnabled(n);
            this._setStepsListEnabled(n)
        },
        _setRecordingToolbarEnabled: function(t) {
            t = t !== !1;
            n("#ancile-recorder-toolbar-save").button("option", "disabled", !0);
            n("#ancile-recorder-toolbar-undo").button("option", "disabled", !0);
            n("#ancile-recorder-toolbar-redo").button("option", "disabled", !0);
            n("#ancile-recorder-toolbar-publish").button("option", "disabled", !0);
            n("#ancile-recorder-toolbar-record").button("option", "disabled", !0);
            n("#ancile-recorder-toolbar-pause").button("option", "disabled", !0);
            t && (this.steps && n.grep(this.steps, function(n) {
                return n.state !== "deleted" && n.state !== "markedForDeath"
            }).length > 0 && (this._dirty && n("#ancile-recorder-toolbar-save").button("option", "disabled", !1), n("#ancile-recorder-toolbar-publish").button("option", "disabled", !1)), this.undoManager.canUndo() && n("#ancile-recorder-toolbar-undo").button("option", "disabled", !1), this.undoManager.canRedo() && n("#ancile-recorder-toolbar-redo").button("option", "disabled", !1), n("#ancile-recorder-toolbar-record").button("option", "disabled", !1), n("#ancile-recorder-toolbar-pause").button("option", "disabled", !1))
        },
        _setNameDescriptionAreaEnabled: function(t) {
            t = t !== !1;
            n("#cumulus-process-form").find("button,input,textarea").attr("disabled", !t)
        },
        _setStepsListEnabled: function(t) {
            t = t !== !1;
            n("#cumulus-recorder-steps").find("button").attr("disabled", !t);
            this._stepsListEnabled = t
        },
        toString: function() {
            return "ANCILE Cumulus Search Process Dialog"
        }
    };
    rt = function() {
        this.$dialog = null
    };
    rt.prototype = {
        initialize: function(n) {
            return this.$dialog = this._createDialog(), this.populateList(n), this.onResize(), this
        },
        unload: function() {
            this.$dialog && (this.$dialog.dialog("destroy"), this.$dialog.remove(), this.$dialog = null)
        },
        onResize: function() {
            i.centerElement(n(".cumulus-screencasts-dialog"))
        },
        _createDialog: function() {
            if (this.$dialog != null) return this.$dialog;
            var u = this,
                r = n("<div/>").addClass("ancile-screencasts-dialog").appendTo(t.container).attr("title", t.phraseMan.get("ui.screencastListDialog.title")).attr("aria-label", t.phraseMan.get("ui.screencastListDialog.title")),
                e = n("<div/>").addClass("ancile-screencasts-dialog-list-area").appendTo(r),
                o = n("<ul/>").addClass("ancile-screencasts-dialog-list").appendTo(e).on("click.ancile.screencastsDialog", "li", function() {
                    window.open(n(this).data("url"), "_blank")
                }).on("keypress.ancile.screencastsDialog", "li", function(t) {
                    n(this).is(t.target) && t.which == 13 && window.open(n(this).data("url"), "_blank")
                }),
                f = {};
            return f[t.phraseMan.get("common.close")] = function() {
                n(this).dialog("close")
            }, r.dialog({
                modal: !0,
                width: 425,
                height: 325,
                minWidth: 300,
                minHeight: 200,
                hide: "fast",
                show: "fast",
                dialogClass: "cumulus-screencasts-dialog",
                closeOnEscape: !1,
                buttons: f,
                create: function(i) {
                    var u = n(i.target).parent(),
                        r;
                    n(".ui-dialog-titlebar-close", u).addClass("ancile-dialog-close");
                    r = n("<div/>").addClass("ancile-screencasts-dialog-do-not-show-area").appendTo(u.find(".ui-dialog-buttonpane"));
                    n("<input/>").attr({
                        id: "ancile-screencasts-do-not-show",
                        type: "checkbox"
                    }).appendTo(r);
                    n("<label/>").attr("for", "ancile-screencasts-do-not-show").text(t.phraseMan.get("ui.screencastListDialog.doNotShowAgain")).appendTo(r)
                },
                open: function(f) {
                    var e = n(f.target).parent(),
                        s = e.siblings(".ui-widget-overlay.ui-front"),
                        o;
                    s.appendTo(t.container);
                    e.appendTo(t.container);
                    i.positionjQueryUiDialog(r, {
                        my: "center",
                        at: "center",
                        of: window,
                        collision: "flipfit"
                    });
                    o = n("button.ui-dialog-titlebar-close", n(this).parent());
                    o.off("click.ancile.screencastsDialog").on("click.ancile.screencastsDialog", n.proxy(u.unload, u))
                },
                close: function() {
                    var n = {
                        doNotShowAgain: u.$dialog.parent().find("#ancile-screencasts-do-not-show").prop("checked") === !0
                    };
                    t.container.trigger("close.ancile.screencastsDialog", n)
                }
            }), r
        },
        populateList: function(t) {
            if (this.$dialog && n.isArray(t)) {
                var i = this.$dialog.find(".ancile-screencasts-dialog-list");
                i.empty();
                n.each(t, function(t, r) {
                    var u = n("<li/>").attr("tabindex", 0).addClass("ancile-screencasts-dialog-list-item").appendTo(i);
                    n("<h3/>").text(r.title).appendTo(u);
                    r.description && n("<p/>").text(r.description).appendTo(u);
                    u.data("url", r.url.trim())
                })
            }
        },
        toString: function() {
            return "ANCILE Cumulus Screencast List Dialog"
        }
    };
    ut = function() {
        this._undoStack = [];
        this._redoStack = [];
        this.undoManagerUndoNamespace = "process_undo";
        this.undoManagerRedoNamespace = "process_redo"
    };
    ut.prototype = {
        initialize: function() {
            return this._restoreStacks(), n(this).trigger("undostackchanged.ancile.undomanager"), this
        },
        addUndo: function(n) {
            this._undoStack.push(n);
            this._onUpdate()
        },
        addRedo: function(n) {
            this._redoStack.push(n);
            this._onUpdate()
        },
        undo: function() {
            if (!this.canUndo()) return !1;
            var n = this._undoStack.pop();
            return this.addRedo(n), this._onUpdate(), n
        },
        redo: function() {
            if (!this.canRedo()) return !1;
            var n = this._redoStack.pop();
            return this.addUndo(n), this._onUpdate(), n
        },
        canUndo: function() {
            return this._undoStack.length > 0
        },
        canRedo: function() {
            return this._redoStack.length > 0
        },
        _onUpdate: function() {
            this._cacheUndoStack();
            this._cacheRedoStack();
            n(this).trigger("undostackchanged.ancile.undomanager")
        },
        _cacheUndoStack: function() {
            var n = t.storage;
            n.set(this.undoManagerUndoNamespace, this._undoStack)
        },
        _cacheRedoStack: function() {
            var n = t.storage;
            n.set(this.undoManagerRedoNamespace, this._redoStack)
        },
        _restoreStacks: function() {
            var n = t.storage;
            this._undoStack = n.get(this.undoManagerUndoNamespace) || [];
            this._redoStack = n.get(this.undoManagerRedoNamespace) || []
        },
        setLastUndo: function(n) {
            return this.canUndo() ? (this._undoStack[this._undoStack.length - 1] = n, this._cacheUndoStack(), this.getLastUndo()) : !1
        },
        setLastRedo: function(n) {
            return this.canRedo() ? (this._redoStack[this._redoStack.length - 1] = n, this._cacheRedoStack(), this.getLastRedo()) : !1
        },
        getLastUndo: function() {
            return this.canUndo() ? this._undoStack[this._undoStack.length - 1] : !1
        },
        getLastRedo: function() {
            return this.canRedo() ? this._redoStack[this._redoStack.length - 1] : !1
        },
        clearRedo: function() {
            this._redoStack = [];
            var i = t.storage;
            i.remove(this.undoManagerRedoNamespace);
            n(this).trigger("undostackchanged.ancile.undomanager")
        },
        clear: function() {
            this._undoStack = [];
            this._redoStack = [];
            var i = t.storage;
            i.remove(this.undoManagerUndoNamespace);
            i.remove(this.undoManagerRedoNamespace);
            n(this).trigger("undostackchanged.ancile.undomanager")
        },
        toString: function() {
            return "ANCILE Undo Manager Class"
        }
    };
    ft = function() {
        this.currentTarget = null;
        this.context = null;
        this.enabled = !1;
        this.$app = null;
        this.mutationObservers = [];
        this.monitorContextNamespace = "monitor_context";
        this.imposter = null
    };
    ft.prototype = {
        enable: function() {
            return this.$app = t.container, this._listen(), this.enabled = !0, this._restoreContext(), this
        },
        disable: function() {
            return this._unlisten(), this.enabled = !1, this.currentTarget = null, this
        },
        _listen: function() {
            this._addListeners();
            this._addListenersToFrames(t.ui.safeFrames);
            this.$app.on("safeframesloaded.ancile.monitor", n.proxy(function() {
                this._addListenersToFrames(t.ui.safeFrames)
            }, this))
        },
        _addListeners: function() {
            var i = this,
                t = n(document);
            this._addMouseOverListener(t);
            this._addMouseOutListener(t);
            this._addMouseDownListener(t);
            this._addAriaRoleMouseUpListener(n("[role=checkbox], [role=radio]"));
            this._addChangeListener(n("select, input"));
            this._addKeyDownListener(t);
            this._addKeyUpListener(t);
            this._addFocusInListener(t);
            this._addFocusOutListener(t);
            this._addInputListener(t);
            this._addMutationListeners(n("body,frameset"));
            this._addInlineListeners(t)
        },
        _addListenersToFrames: function(t) {
            n.each(t, n.proxy(function(t, r) {
                var f = this,
                    e = i.getFrameContent(r.frame),
                    u = n("body,frameset", n(e));
                this._addMouseOverListener(u);
                this._addMouseOutListener(u);
                this._addMouseDownListener(u);
                this._addAriaRoleMouseUpListener(n("[role=checkbox], [role=radio]", u));
                this._addChangeListener(n("select, input", u));
                this._addKeyDownListener(u);
                this._addKeyUpListener(u);
                this._addFocusInListener(u);
                this._addFocusOutListener(u);
                this._addInputListener(u);
                u.off("mouseup.ancile.monitor").on("mouseup.ancile.monitor", function(t) {
                    var i = n(t.target);
                    f.enabled && f._canCapture(i) && f._onMouseUp(t)
                });
                this._addMutationListeners(u);
                this._addInlineListeners(u);
                this._addListenersToFrames(r.children)
            }, this))
        },
        _addMouseOverListener: function(t) {
            var i = this;
            t.off("mouseover.ancile.monitor").on("mouseover.ancile.monitor", function(t) {
                var r = n(t.target);
                i.enabled && i._canCapture(r) && i._onMouseOver(t)
            })
        },
        _addMouseOutListener: function(t) {
            var i = this;
            t.off("mouseout.ancile.monitor").on("mouseout.ancile.monitor", function(t) {
                var r = n(t.target);
                i.enabled && i._canCapture(r) && i._onMouseOut(t)
            })
        },
        _addMouseDownListener: function(t) {
            var i = this;
            t.off("mousedown.ancile.monitor").on("mousedown.ancile.monitor", function(t) {
                var r = n(t.target);
                i.enabled && i._canCapture(r) && !r.is(document) && i._onMouseDown(t)
            })
        },
        _addAriaRoleMouseUpListener: function(t) {
            var i = this;
            t.off("mouseup.ancile.monitor").on("mouseup.ancile.monitor", function(t) {
                var r = n(t.target),
                    u;
                i.enabled && i._canCapture(r) && !r.is(document) && (u = function() {
                    i._onChange(t)
                }, setTimeout(function() {
                    u()
                }, 1), t.stopPropagation())
            })
        },
        _addChangeListener: function(t) {
            var i = this;
            t.off("change.ancile.monitor").on("change.ancile.monitor", function(t) {
                var r = n(t.target);
                i.enabled && i._canCapture(r) && i._onChange(t)
            })
        },
        _addKeyDownListener: function(t) {
            var i = this;
            t.off("keydown.ancile.monitor").on("keydown.ancile.monitor", function(t) {
                var r = n(t.target),
                    u = r.parents("div#ancile-cumulus").length || r.hasClass("ancile-cumulus");
                i.enabled && !u && i._onKeyDown(t)
            })
        },
        _addKeyUpListener: function(t) {
            var i = this;
            t.off("keyup.ancile.monitor").on("keyup.ancile.monitor", function(t) {
                var r = n(t.target),
                    u = r.parents("div#ancile-cumulus").length || r.hasClass("ancile-cumulus");
                i.enabled && !u && i._onKeyUp(t)
            })
        },
        _addFocusInListener: function(t) {
            var i = this;
            this._focusHandlerProxy || (this._focusHandlerProxy = n.proxy(this._focusHandler, this));
            t.off("focusin.ancile.monitor").on("focusin.ancile.monitor", this._focusHandlerProxy);
            t.length > 0 && t[0].addEventListener && (t[0].removeEventListener("focus", this._focusHandlerProxy, !0), t[0].addEventListener("focus", this._focusHandlerProxy, !0))
        },
        _addFocusListener: function(t) {
            var i = this;
            t.off("focus.ancile.monitor").on("focus.ancile.monitor", function(t) {
                var r = n(t.target);
                i.enabled && i._canCapture(r) && i._onFocus(t)
            })
        },
        _addFocusOutListener: function(t) {
            var i = this;
            t.off("focusout.ancile.monitor").on("focusout.ancile.monitor", function(t) {
                var r = n(t.target);
                i.enabled && i._canCapture(r) && i._onBlur(t)
            })
        },
        _focusHandler: function(t) {
            var i = n(t.target);
            this.enabled && this._canCapture(i) && this._onFocus(t)
        },
        _addBlurListener: function(t) {
            var i = this;
            t.off("blur.ancile.monitor").on("blur.ancile.monitor", function(t) {
                var r = n(t.target);
                i.enabled && i._canCapture(r) && i._onBlur(t)
            })
        },
        _addInputListener: function(t) {
            var i = this;
            t.off("input.ancile.monitor propertychange.ancile.monitor DOMCharacterDataModified.ancile.monitor").on("input.ancile.monitor propertychange.ancile.monitor DOMCharacterDataModified.ancile.monitor", function(t) {
                var r = n(t.target);
                i.enabled && i._canCapture(r) && i._onChange(t)
            })
        },
        _addMutationListeners: function(t) {
            var i = this,
                r;
            if (window.MutationObserver) {
                r = new MutationObserver(function(t) {
                    t.forEach(function(t) {
                        for (var u, r = 0; r < t.addedNodes.length; r++) u = n(t.addedNodes[r]), i.enabled && i._canCapture(u) && i._onMutated(u, "added");
                        for (r = 0; r < t.removedNodes.length; r++) u = n(t.removedNodes[r]), i.enabled && i._canCapture(u) && i._onMutated(u, "removed")
                    })
                });
                try {
                    r.observe(t[0], {
                        childList: !0,
                        subtree: !0
                    });
                    this.mutationObservers.push(r)
                } catch (u) {}
            } else {
                t.off("DOMNodeInserted.ancile.monitor").on("DOMNodeInserted.ancile.monitor", function(t) {
                    var r = n(t.target);
                    i.enabled && i._canCapture(r) && i._onMutated(r, "added")
                });
                t.off("DOMNodeRemoved.ancile.monitor").on("DOMNodeRemoved.ancile.monitor", function(t) {
                    var r = n(t.target);
                    i.enabled && i._canCapture(r) && i._onMutated(r, "removed")
                })
            }
        },
        _addInlineListeners: function(t, i) {
            var r = this,
                u = ANCILE_UGUIDE_OPTIONS.inlineListeners,
                f;
            u && (f = [], n.each(u, function(n, t) {
                t.hasOwnProperty("observe") || f.push(u[n]);
                n == i && f.push(u[n])
            }), n.each(f, function(i, u) {
                n.each(u, function(i, u) {
                    switch (i.toLowerCase()) {
                        case "mousedown":
                            r._addMouseDownListener(n(u, t));
                            break;
                        case "keydown":
                            r._addKeyDownListener(n(u, t));
                            break;
                        case "keyup":
                            r._addKeyUpListener(n(u, t));
                            break;
                        case "focusin":
                            r._addFocusInListener(n(u, t));
                            break;
                        case "focusout":
                            r._addFocusOutListener(n(u, t));
                            break;
                        case "input":
                            r._addInputListener(n(u, t));
                        case "focus":
                            r._addFocusListener(n(u, t));
                            break;
                        case "blur":
                            r._addBlurListener(n(u, t));
                            break;
                        case "change":
                            r._addChangeListener(n(u, t))
                    }
                })
            }))
        },
        _onMutated: function(t, r) {
            var f = ANCILE_UGUIDE_OPTIONS.inlineListeners,
                u, e;
            f && (u = -1, n.each(f, function(n, i) {
                i.hasOwnProperty("observe") && t.is(i.observe) && (u = n)
            }), u != -1 && this._addInlineListeners(t.parents("body"), u));
            this._isMonitoredNodeForRefresh(t) && this.$app.trigger("_frameMutated.ancile.monitor", t);
            t.find("iframe").length > 0 && (e = t.find("iframe"), this.$app.trigger("_frameMutated.ancile.monitor", e));
            switch (r) {
                case "added":
                    i.isImposterReal(t) && this.imposter && (t.data("imposter", this.imposter), this.imposter = null);
                    break;
                case "removed":
                    this._catchImposter(t[0])
            }
        },
        _isMonitoredNodeForRefresh: function(n) {
            var i = t.options.refreshIframesObserveList || "iframe, frame";
            return n.is(i)
        },
        _unlisten: function() {
            this.$app.off(".ancile.monitor");
            n("[role=checkbox], [role=radio]").off(".ancile.monitor");
            n("select, input").off(".ancile.monitor");
            n.each(this.mutationObservers, function(n, t) {
                t.disconnect()
            });
            this.mutationObservers = [];
            this._unlistenInlineListeners(n(document));
            this._unlistenFrames(t.ui.safeFrames);
            this.$app.off("safeframesloaded.ancile.monitor")
        },
        _unlistenFrames: function(t) {
            n.each(t, n.proxy(function(t, i) {
                this._unlistenFrames(i.children);
                try {
                    var r = n("body,frameset", i.frame.contents());
                    r.off(".ancile.monitor");
                    n("[role=checkbox], [role=radio]", r).off(".ancile.monitor");
                    n("select, input", r).off(".ancile.monitor");
                    this._focusHandlerProxy && r[0].removeEventListener("focus", this._focusHandlerProxy, !0);
                    this._focusOutHandlerProxy && r[0].removeEventListener("blur", this._focusOutHandlerProxy, !0);
                    this._unlistenInlineListeners(r)
                } catch (u) {
                    return !0
                }
            }, this))
        },
        _unlistenInlineListeners: function(t) {
            var r = this,
                i = ANCILE_UGUIDE_OPTIONS.inlineListeners;
            i && n.each(i, function(i, r) {
                n.each(r, function(i, r) {
                    n(r, t).off(".ancile.monitor")
                })
            })
        },
        _canCapture: function(n) {
            return !(!this.enabled || n.closest("div#ancile-cumulus, .ancile-cumulus, .jasmine_reporter").length || n[0].nodeName === "#document" || this._inIgnoreList(n))
        },
        _inIgnoreList: function(i) {
            return n(i).is(t.options.ignoreList)
        },
        _onMouseOver: function(n) {
            n.uGuideProcessed || (n.uGuideProcessed = !0, this.$app.trigger("_mouseover.ancile.monitor", n))
        },
        _onMouseOut: function(n) {
            n.uGuideProcessed || (n.uGuideProcessed = !0, this.$app.trigger("_mouseout.ancile.monitor", n))
        },
        _onMouseDown: function(t) {
            if (!t.uGuideProcessed) {
                t.uGuideProcessed = !0;
                var r = i.getElementForLabel(n(t.target)),
                    u = r ? r[0] : t.target;
                if (this._catchImposter(t.target)) return;
                this._cacheContext(u);
                this.$app.trigger("_mousedown.ancile.monitor", t)
            }
        },
        _onMouseUp: function(n) {
            n.uGuideProcessed || (n.uGuideProcessed = !0, this._cacheContext(n.target), this.$app.trigger("_mouseup.ancile.monitor", n))
        },
        _onKeyDown: function(n) {
            n.uGuideProcessed || (n.uGuideProcessed = !0, this._cacheContext(n.target), this.$app.trigger("_keydown.ancile.monitor", n))
        },
        _onKeyUp: function(n) {
            n.uGuideProcessed || (n.uGuideProcessed = !0, this._cacheContext(n.target), this.$app.trigger("_keyup.ancile.monitor", n))
        },
        _onFocus: function(n) {
            if (!n.uGuideProcessed) {
                if (n.uGuideProcessed = !0, this._catchImposter(n.target)) return;
                this._cacheContext(n.target);
                this.$app.trigger("_focus.ancile.monitor", n)
            }
        },
        _onBlur: function(n) {
            n.uGuideProcessed || (n.uGuideProcessed = !0, this.$app.trigger("_blur.ancile.monitor", n))
        },
        _onChange: function(n) {
            n.uGuideProcessed || (n.uGuideProcessed = !0, this._cacheContext(n.target), this.$app.trigger("_change.ancile.monitor", n))
        },
        getCurrentTarget: function() {
            return this.currentTarget
        },
        getCurrentElementObj: function() {
            var n = new u,
                t = this.currentTarget,
                i;
            return t || (i = document.activeElement, t = this.currentTarget = i), n.initialize(t), this.currentTarget && n ? n.toObject() : null
        },
        getCurrentContext: function() {
            return this.context
        },
        _cacheContext: function(r) {
            var r, o, f, u;
            if (!r.nodeName)
                for (r = document.activeElement; r && (r.tagName.toLowerCase() == "iframe" || r.tagName.toLowerCase() == "frame");) o = n(i.getFrameContent(n(r))), r = o[0].activeElement;
            this.currentTarget = r;
            f = this.getCurrentElementObj();
            u = new e;
            u.setApplication({
                url: t.helpComm.hostUrl
            }, ANCILE_UGUIDE_OPTIONS.appContextUrlFormat);
            u.setControl({
                selector: f.selector,
                frameSelectors: f.frameSelectors
            });
            t.storage.set(this.monitorContextNamespace, u.toObject());
            this.context = u
        },
        _restoreContext: function() {
            var i = t.storage.get(this.monitorContextNamespace),
                u, f, r, n;
            i ? (n = new e, n.setApplication({
                url: i.application.url
            }, ANCILE_UGUIDE_OPTIONS.appContextUrlFormat), n.setControl({
                selector: i.control.selector,
                frameSelectors: i.control.frameSelectors
            }), this.context = n, u = n.control.selector, f = n.control.frameSelectors, this._restoreTarget(u, f)) : (r = this.getCurrentElementObj(), n = new e, n.setApplication({
                url: t.helpComm.hostUrl
            }, ANCILE_UGUIDE_OPTIONS.appContextUrlFormat), n.setControl({
                selector: r.selector,
                frameSelectors: r.frameSelectors
            }), t.storage.set(this.monitorContextNamespace, n.toObject()), this.context = n)
        },
        _restoreTarget: function(t, u) {
            var s = new r,
                f, e, h, o;
            s.context = {
                application: {
                    url: ""
                },
                control: {
                    selector: t,
                    frameSelectors: u
                },
                user: {}
            };
            f = n("body,frameset");
            e = i.findFrameFromStep(s);
            e != null && (h = i.getFrameContent(e), f = n("body,frameset", n(h)));
            o = n(t, f);
            o.length > 0 && (this.currentTarget = o[0])
        },
        _catchImposter: function(t) {
            var r, o, s, f, e;
            return ANCILE_UGUIDE_OPTIONS.imposters ? (r = n(t), i.isImposterFake(r)) ? (f = new u, f.initialize(t), e = f.selector, o = i.getRealForFakeImposter(r), o && o.length > 0 ? o.data("imposter", e) : this.imposter = e, !0) : (i.isImposterReal(r) && (s = i.getFakeImposterForReal(r), f = new u, f.initialize(s[0]), e = f.selector, r && r.length > 0 ? r.data("imposter", e) : this.imposter = e), !1) : !1
        },
        toString: function() {
            return "ANCILE Cumulus Event Monitor"
        }
    };
    e = function() {
        this.application = {};
        this.control = {};
        this.user = {}
    };
    e.prototype = {
        setApplication: function(n, t) {
            n.url == null && (n.url = "");
            typeof t == "object" && n.url != "" && (n.url = this._parseAppContextUrl(n.url, t));
            this.application = n
        },
        getApplication: function() {
            return this.application
        },
        setControl: function(n) {
            this.control = n;
            typeof this.control.frameSelector == "string" && (this.control.frameSelectors = this.control.frameSelector.split("|"));
            this.control.hasOwnProperty("frameSelector") && delete this.control.frameSelector;
            this.control.selector = this.control.selector || "";
            this.control.frameSelectors = this.control.frameSelectors || []
        },
        getControl: function() {
            return this.control
        },
        setUser: function(n) {
            this.user = n
        },
        getUser: function() {
            return this.user
        },
        equals: function(n) {
            if (!(n instanceof e) || n.control.frameSelectors.length != this.control.frameSelectors.length) return !1;
            for (var t = 0; t < this.control.frameSelectors.length; t++)
                if (n.control.frameSelectors[t] != this.control.frameSelectors[t]) return !1;
            return n.application.url == this.application.url && n.control.selector == this.control.selector
        },
        toObject: function() {
            return {
                application: {
                    url: this.application.url
                },
                control: {
                    selector: this.control.selector,
                    frameSelectors: this.control.frameSelectors
                },
                user: {}
            }
        },
        toString: function() {
            return "ANCILE Context Class"
        },
        _parseAppContextUrl: function(n, t) {
            var r = document.createElement("a"),
                o = !1,
                i, u, f, e;
            return n.indexOf("://") > -1 ? r.href = n : (r.href = "http://" + n, o = !0), r.href = r.href, i = "", !o && t.includeProtocol && t.domainLevels == "all" && (i = r.protocol + "//"), t.domainLevels == "all" ? i += r.host : (u = r.host.split("."), u = u.slice(Math.max(0, u.length - t.domainLevels)), i += u.join(".")), r.protocol === "http:" ? i = i.replace(":80", "") : r.protocol === "https:" && (i = i.replace(":443", "")), t.pathLevels == "all" ? (r.pathname.indexOf("/") != 0 && (i += "/"), i += r.pathname) : (f = r.pathname, f.indexOf("/") == 0 && (f = f.substring(1)), e = f.split("/"), e = e.slice(0, Math.min(e.length, t.pathLevels)), i += "/" + e.join("/")), i.lastIndexOf("/") < i.length - 1 && (i += "/"), t.includeQuery && t.pathLevels == "all" && (i += r.search), i
        }
    };
    at = {
        Domain: {
            domainLevels: "all",
            pathLevels: 0,
            includeProtocol: !1,
            includeQuery: !1
        },
        FullUrl: {
            domainLevels: "all",
            pathLevels: "all",
            includeProtocol: !0,
            includeQuery: !0
        }
    };
    w = function(t) {
        this.expandIcon = n('<i class="fa fa-caret-right" id="select-expand"><\/i>');
        this.currentTextDiv = n('<div class="ancile-custom-select-text" />');
        this.listDiv = n('<div class="ancile-custom-select-item-list" />').attr("contenteditable", "false");
        this.mode = {
            edit: !1
        };
        this.items = t;
        this.guid = i.guid.newGuid();
        this.selectedText = t[0];
        this.lastSelectedText = t[0];
        this.currentTextDiv.append(this.expandIcon);
        this.currentTextDiv.append("<span>" + this.selectedText + "<span/>");
        this._bindEvents();
        this._fillCandidateList()
    };
    w.prototype = {
        _bindEvents: function() {
            var t = this;
            n(document).on("click", ".ancile-custom-select-item", function() {
                var i = n(this).parents("li").data("step");
                n(this).parents(".ancile-process-dialog-step-text").find("span[data-ancile-cumulus-replacement=label]").find(".ancile-custom-select-text").find("span").text(n(this).val());
                i.text = n(this).val();
                t.listDiv.remove();
                i.setStepText(n(this).parents(".ancile-process-dialog-step-text").html());
                n(this).parent().hide();
                t.lastSelectedText = t.selectedText;
                t.selectedText = n(this).val();
                t.currentTextDiv.find("span").remove();
                t.currentTextDiv.append("<span>" + this.selectedText + "<span/>")
            });
            n(document).on("click", "#" + this.guid + " #select-expand", function() {
                t._fillCandidateList();
                var i = t.listDiv,
                    r = n(document).find(".ancile-custom-select-text").parents(".ancile-process-dialog-step-text");
                r.append(i);
                i.show()
            })
        },
        restoreLastSelectedText: function() {
            this.selectedText = this.lastSelectedText
        },
        getElement: function() {
            var t = n("<div />").addClass("ancile-custom-select").attr("id", this.guid);
            return this.currentTextDiv.find("span").remove(), this.currentTextDiv.append("<span>" + this.selectedText + "<span/>"), t.append(this.currentTextDiv), n("<div />").append(t)
        },
        _fillCandidateList: function() {
            var t = this;
            t.listDiv.html("");
            n.each(this.items, function(i, r) {
                var u = n('<input name="candidate" type="radio" class="ancile-custom-select-item" value="' + r.replace(/\"/g, "&quot;") + '"/>');
                r == t.selectedText && u.attr("checked", !0);
                t.listDiv.append(u);
                t.listDiv.append(n("<span>" + r.replace(/\"/g, "&quot;") + "<\/span>"));
                t.listDiv.append(n("<br />"))
            })
        },
        toObject: function() {
            return {
                guid: this.guid,
                items: this.items,
                selectedText: this.selectedText
            }
        },
        toString: function() {
            return "ANCILE Custom Select Class: " + this.guid
        }
    };
    u = function() {
        this.control = "unknown";
        this.nodeName = "";
        this.id = "";
        this.name = "";
        this.text = "";
        this.value = "";
        this.childText = null;
        this.index = null;
        this.hasEventsRegistered = !1;
        this.selector = null;
        this.frameSelectors = [];
        this.password = !1;
        this.indeterminate = !1;
        this.optionValue = null;
        this.optionText = null
    };
    u.prototype = {
        initialize: function(t) {
            var i, r;
            if (!t || !t.nodeName) return null;
            this.nodeName = t.nodeName.toLowerCase();
            this.nodeName == "option" && (t = n(t).parent("select")[0]);
            this.hasEventsRegistered = !1;
            try {
                window.jQuery && window.jQuery != n && (this.hasEventsRegistered = jQuery._data && jQuery._data(t, "events") || jQuery(t).data("events") ? !0 : !1)
            } catch (u) {}
            return i = n(t), this._detect(i), this.id = i.attr("id"), this.name = i.attr("name"), this.text = this._findText(i), this.defaultValue = i[0].defaultValue ? i[0].defaultValue : "", this.control == "select" && (t.nodeName.toLowerCase() == "select" ? (r = n("option:selected", i), this.optionValue = n(r).val(), this.optionText = n(r).text(), this.childText = n(r).text()) : (this.optionValue = null, this.optionText = i.text(), this.childText = i.text())), this
        },
        _detect: function(n) {
            if (this.control = this._getRoleBasedControlType(n), this.frameSelectors = this._getFrameSelectors(n, t.ui.safeFrames), this.selector = this._getSelector(n, i.isCkEditorTextElement(n)), this.control === "unknown")
                if (this._isLink(n)) this.control = "link";
                else if (this._isButton(n)) this.control = "button";
            else if (this._isLabel(n)) {
                this.control = "label";
                var r = i.getElementForLabel(n);
                r && this._detect(r)
            } else this._isEntryField(n) ? (this.control = "field", this._isPasswordField(n) && (this.password = !0)) : this._isFileField(n) ? this.control = "file" : this._isSelect(n) ? this.control = "select" : this._isRadio(n) ? this.control = "radio" : this._isCheckbox(n) ? this.control = "checkbox" : this._isHeader(n) ? this.control = "header" : this._isCell(n) && (this.control = "cell");
            return this
        },
        _findText: function(t) {
            var f, o, e, u, s, h, c, r;
            return i.isCkEditorTextElement(t) ? "CK Editor" : t.length > 0 && t[0].tagName && t[0].tagName.toLowerCase() == "body" ? "" : t.length > 0 && t[0].tagName && t[0].tagName.toLowerCase() == "div" ? "" : (f = null, t.attr("aria-labelledby") && (e = t.attr("aria-labelledby").toString().split(" ", 1)[0], u = n("#" + e), u.length > 0 && (f = u.text())), o = null, t.attr("aria-describedby") && (e = t.attr("aria-describedby").toString().split(" ", 1)[0], u = n("#" + e), u.length > 0 && (o = u.text())), s = null, h = t.parent("label"), h.length > 0 && (c = h.text(), s = c.length > 0 ? c : null), r = "", n("label[for='" + this.id + "']").length > 0 ? r = n("label[for='" + this.id + "']").text() : s !== null ? r = s : f !== null ? r = f : o !== null ? r = o : t.length > 0 && t[0].tagName && t[0].tagName.toLowerCase() == "a" && t.text() ? r = t.text() : (this.indeterminate = !0, t.attr("placeholder") ? r = t.attr("placeholder") : t.attr("title") ? r = t.attr("title") : t.text() && this.control != "select" ? r = t.text() : t.val() && this.control != "field" && this.control != "select" && (r = t.val())), r)
        },
        _getRoleBasedControlType: function(n) {
            var r = n.attr("role"),
                t = "unknown";
            if (typeof r == "string") switch (r) {
                case "button":
                    t = r;
                case "checkbox":
                case "radio":
                case "link":
                    t = r;
                    break;
                case "textbox":
                    t = "field";
                    break;
                case "listbox":
                case "combobox":
                case "option":
                    t = "select";
                    break;
                default:
                    t = "unknown"
            }
            return i.isCkEditorTextElement(n) && (t = "field"), t
        },
        _getSelector: function(t, r) {
            for (var e = null, u, f, a, h, c; t.length;) {
                if (u = t[0], f = u.localName || u.tagName || u.nodeName, !f || f == "#document" || f == "body" && !i.isCkEditorTextElement(t) || f == "frameset") break;
                f = f.toLowerCase();
                var o = u.getAttribute("id") && !this._hasDynamicId(u.getAttribute("id")),
                    l = u.getAttribute("name") && !this._hasDynamicName(u.getAttribute("name")),
                    s = /[!"#$%&'()*\+,.\/\\:;<=>?@\[\\\]^`{|}~]/gi;
                if (o && (f += "#" + u.getAttribute("id").replace(s, "\\$&")), o && u.className && n(f, u.ownerDocument).length > 1 && (a = n.map(u.className.split(/\s+/), function(n) {
                        if (n && n != "") return n
                    }), f += "." + a.join(".")), !o && l && (f += '[name="' + u.getAttribute("name").replace(s, "\\$&") + '"]'), o || l || n(t).attr("type") == undefined || (f += '[type="' + u.getAttribute("type").replace(s, "\\$&") + '"]'), h = t.parent(), c = h.children(f), c.length > 1 && (f += ":eq(" + c.index(t) + ")"), e = f + (e ? ">" + e : ""), o && n(e, u.ownerDocument).length == 1) break;
                if (r) break;
                t = h
            }
            return e
        },
        _getFrameSelectors: function(t, r) {
            var u = [];
            return n.each(r, n.proxy(function(r, f) {
                var e = i.getFrameContent(f.frame),
                    o = n(e).find(t[0]);
                return o.length > 0 ? (u.unshift(this._getSelector(f.frame)), !1) : (u = this._getFrameSelectors(t, f.children), u.length > 0) ? (u.unshift(this._getSelector(f.frame)), !1) : !0
            }, this)), u
        },
        _isLink: function(n) {
            return (n.is("a") || n.is("area")) && n.attr("onclick") ? !1 : n.is("a[href]") ? n.is("a[href^=javascript:]") ? !1 : n.is("a[href^='#']") ? !this.hasEventsRegistered : !0 : n.is("area[href]") ? n.is("area[href^=javascript:]") ? !1 : n.is("area[href^='#']") ? !this.hasEventsRegistered : !0 : !1
        },
        _isButton: function(n) {
            return n.is('button, input[type=button], input[type=submit], input[type=reset], input[type=image], a[href^="javascript:"], area[href^="javascript:"]') ? !0 : n.attr("onclick") && !this._isEntryField(n) && !this._isCheckbox(n) && !this._isRadio(n) ? !0 : n.is("area[href^='#']") || n.is("a[href^='#']") ? this.hasEventsRegistered : !1
        },
        _isEntryField: function(n) {
            return n.not(":file").is(":text, :password, input[type=email], input[type=color], input[type^=date], input[type=month], input[type=week], input[type=number], input[type=range], input[type=search], input[type=tel], input[type=time], input[type=url]") ? !0 : n.is("textarea") || n.attr("contenteditable") === "true" || i.isCkEditorTextElement(n) ? !0 : !1
        },
        _isFileField: function(n) {
            return n.is(":file") ? !0 : !1
        },
        _isPasswordField: function(n) {
            if (n.is(":password")) return !0
        },
        _isRadio: function(n) {
            return n.is("input[type=radio]")
        },
        _isCheckbox: function(n) {
            return n.is("input[type=checkbox]")
        },
        _isSelect: function(n) {
            return n.is("select, datalist") || n.closest("select").length > 0
        },
        _isLabel: function(n) {
            return n.is("label")
        },
        _isCell: function(n) {
            return n.is("td, th")
        },
        _isHeader: function(n) {
            return n.is("h1, h2, h3, h4, h5, h6")
        },
        _hasDynamicId: function(n) {
            var i = t.options.dynamicElementIdRegex,
                u, r;
            return i && typeof i == "string" && (u = new RegExp(i), r = u.exec(n), r && r.length) ? !0 : !1
        },
        _hasDynamicName: function(n) {
            var i = t.options.dynamicElementNameRegex,
                u, r;
            return i && typeof i == "string" && (u = new RegExp(i), r = u.exec(n), r && r.length) ? !0 : !1
        },
        toObject: function() {
            return {
                control: this.control,
                nodeName: this.nodeName,
                id: this.id,
                name: this.name,
                text: this.text,
                defaultValue: this.defaultValue,
                index: this.index,
                childText: this.childText,
                optionValue: this.optionValue,
                optionText: this.optionText,
                password: this.password,
                selector: this.selector,
                frameSelectors: this.frameSelectors,
                indeterminate: this.indeterminate
            }
        },
        toString: function() {
            return "ANCILE Cumulus Captured Element (" + this.control + ")"
        }
    };
    r = function(n, t) {
        this.tagWhitelist = "<i><b><font><a><ol><ul><li><br><span>";
        this.attrWhitelist = ["style", "color", "size", "href", "target", "data-ancile-cumulus-replacement"];
        this.recordId = null;
        this.guid = i.guid.newGuid();
        this.prevGuid = "";
        this.action = null;
        this.stepText = "";
        this.context = null;
        this.selected = !1;
        this.state = null;
        this.status = null;
        this.active = null;
        this.imposter = null;
        this.optionValue = null;
        this.optionText = null;
        this.control = null;
        this.text = "";
        this.childText = "";
        this.index = null;
        this.entry = "";
        this.key = "";
        this.keyCode = null;
        this.shiftKey = !1;
        this.ctrlKey = !1;
        this.altKey = !1;
        n != null && (this._copyProperties(n), n.indeterminate && (this.hasIndeterminateLabel = !0, this.selector = n.selector), this._setContext(t || ""), this.setStepText(this.stepText))
    };
    r.STEPTEXT_CHAR_LIMIT = 1e3;
    r.prototype = {
        initialize: function(n) {
            this._copyProperties(n);
            this._setContext("");
            this.setStepText(this.stepText)
        },
        _copyProperties: function(n) {
            var t, i;
            for (t in n) this[t] = n[t];
            n.labelCandidatesSelect != undefined && (i = this.labelCandidatesSelect.selectedText, this.labelCandidatesSelect = new w(this.labelCandidatesSelect.items), this.labelCandidatesSelect.selectedText = i);
            this.keyCode && this._setKey();
            typeof this.entry == "string" && this.entry.length > 100 && (this.entry = this.entry.substr(0, 97) + "...");
            typeof this.text == "string" && this.text.length > 255 && (this.text = this.text.substr(0, 252) + "...")
        },
        setChildText: function(t) {
            var r = this.childText,
                i, u;
            r && r.length != 0 || (this.childText = t);
            this.stepText && (i = n("<div/>").append(this.stepText), u = n("<span/>").attr("data-ancile-cumulus-replacement", "option").html(this.childText), i.find("span[data-ancile-cumulus-replacement='option']").replaceWith(u), this.stepText = i.html())
        },
        getChildTextFromTarget: function() {
            var f = this.childText,
                r, e, o, t, u;
            return f && f.length > 0 ? f : (r = n("body,frameset"), e = i.findFrameFromStep(this), e != null && (o = i.getFrameContent(e), r = n("body,frameset", n(o))), t = n(this.context.control.selector, r), !t.length && this.hasImposter() && (t = n(this.imposter, r)), t.length > 1 && (t = n(t[0])), u = i.getChildElementByValue(t, this.optionValue), t.length > 0 ? u && u.length > 0 ? u.text() : this.optionText : this.optionText)
        },
        _setKey: function() {
            this.key = i.getKeyFromCode(this.keyCode);
            typeof this.key == "string" && this.key.length > 100 && (this.key = this.key.substr(0, 97) + "...")
        },
        setStepText: function(r) {
            var u = r ? i.stripTags(n.trim(r), this.tagWhitelist) : t.phraseMan.get("step.action." + this.action),
                e = this.text ? n.trim(this.text).replace(/\s+/g, " ") : "",
                o = this.entry ? i.toHtmlEntities(this.entry) : "",
                f = n("<div/>").append(u);
            f.find("a").each(function() {
                var t = n(this);
                t.attr("href") == "javascript:void(0);" && t.attr({
                    href: t.attr("title"),
                    target: "_blank"
                })
            });
            f.find("span[data-ancile-cumulus-replacement]").removeAttr("contenteditable");
            i.stripAttributes(f, this.attrWhitelist);
            u = f.html();
            u = e != "" || o != "" ? this.hasIndeterminateLabel && this.labelCandidatesSelect != undefined ? u.replace("%label%", "<span data-ancile-cumulus-replacement='label'>" + this.labelCandidatesSelect.selectedText + "<\/span>") : u.replace("%label%", "<span data-ancile-cumulus-replacement='label'>" + e + "<\/span>") : u.replace("%label%", "");
            u = u.replace("%control%", "<span data-ancile-cumulus-replacement='control'>" + this._getControlPhrase() + "<\/span>");
            u = u.replace("%entry%", "<span data-ancile-cumulus-replacement='entry'>&quot;" + o + "&quot;<\/span>");
            u = u.replace("%option%", "<span data-ancile-cumulus-replacement='option'>" + this.childText + "<\/span>");
            u = u.replace("%key%", "<span data-ancile-cumulus-replacement='key'>" + this._getModifier() + this.key + "<\/span>");
            u = u.replace("%target%", "<span data-ancile-cumulus-replacement='target' class='ancile-cumulus-note-content ancile-cumulus-note-target'>" + t.phraseMan.get("ui.stepEditor.controlPlaceholder") + "<\/span>");
            this.stepText = u;
            this.control === "select" && (this.optionText = this.getChildTextFromTarget(), this.setChildText(this.optionText))
        },
        getEditorStepText: function() {
            var t = this.stepText,
                i;
            return t && (i = n("<div/>").append(t), i.find("a").each(function() {
                var t = n(this);
                t.attr("href") != "javascript:void(0);" && (t.attr({
                    title: t.attr("href"),
                    href: "javascript:void(0);"
                }), t.removeAttr("target"))
            }), i.find("span[data-ancile-cumulus-replacement]").attr("contenteditable", !1), t = i.html()), t ? t : ""
        },
        getRawStepText: function() {
            return this.getRawStepTextForText(this.stepText)
        },
        getRawStepTextForText: function(t) {
            if (typeof t != "string") return "";
            var i = n("<div/>").append(t);
            return n("span[data-ancile-cumulus-replacement]", i).each(function() {
                var t = n(this);
                t.after("%" + t.attr("data-ancile-cumulus-replacement") + "%")
            }), n("span[data-ancile-cumulus-replacement]", i).remove(), i.html()
        },
        _setContext: function(n) {
            var t = new e;
            this.context ? (t.setApplication({
                url: this.context.application.url
            }), t.setControl({
                selector: this.context.control.selector,
                frameSelectors: this.context.control.frameSelectors,
                frameSelector: this.context.control.frameSelector
            })) : (t.setApplication({
                url: n
            }, ANCILE_UGUIDE_OPTIONS.appContextUrlFormat), t.setControl({
                selector: this.selector,
                frameSelectors: this.frameSelectors
            }));
            this.context = t
        },
        _getModifier: function() {
            var n = "";
            return this.ctrlKey && (n += "CTRL+"), this.altKey && (n += "ALT+"), this.shiftKey && (n += "SHIFT+"), n
        },
        _getControlPhrase: function() {
            return this.control ? t.phraseMan.hasPhrase("step.control." + this.control) ? t.phraseMan.get("step.control." + this.control) : t.phraseMan.get("step.control.unknown") : ""
        },
        hasImposter: function() {
            return this.imposter !== null && this.imposter.length > 0
        },
        toObject: function() {
            return {
                recordId: this.recordId,
                action: this.action,
                guid: this.guid,
                prevGuid: this.prevGuid,
                stepText: this.stepText,
                control: this.control,
                text: this.text,
                entry: this.entry,
                key: this.key,
                keyCode: this.keyCode,
                shiftKey: this.shiftKey,
                ctrlKey: this.ctrlKey,
                altKey: this.altKey,
                index: this.index,
                selected: this.selected,
                state: this.state,
                status: this.status,
                active: this.active,
                imposter: this.imposter,
                optionValue: this.optionValue,
                optionText: this.optionText,
                labelCandidatesSelect: this.labelCandidatesSelect != undefined ? this.labelCandidatesSelect.toObject() : undefined,
                context: this.context
            }
        },
        toString: function() {
            return "ANCILE Process Step Class: " + this.stepText
        }
    };
    s = function() {
        this.guid = i.guid.empty;
        this.name = "";
        this.description = "";
        this.createdTimestamp = null;
        this.publishedTimestamp = null;
        this.steps = [];
        this.lockedBy = null;
        this.lockExpiresOn = null;
        this.lockInterval = 10;
        this.timeout = null;
        this.processStorageNamespace = "process_info";
        this.customerId = null
    };
    s.prototype = {
        initialize: function(n) {
            return this.lockUrl = t.options.contentManagementDomain + "/process/lockbyid", this.renewLockUrl = t.options.contentManagementDomain + "/process/renewlockbyid", this.unlockUrl = t.options.contentManagementDomain + "/process/unlockbyid", n && (this.guid = n.guid, this.name = n.name, this.description = n.description, this.createdTimestamp = n.createdTimestamp, this.publishedTimestamp = n.publishedTimestamp, this.customerId = n.customerId, this.lockExpiresOn = n.expires ? new Date(n.expires) : null, this.steps = [], n.steps && n.steps.length && this._orderSteps(n.steps)), this
        },
        _orderSteps: function(n) {
            if (n.length > 0) {
                var t = n.length == 1 ? [n[0]] : this._getNextStepsByGuid("", n);
                this._addSteps(t, n)
            }
        },
        _addSteps: function(n, i) {
            var u;
            if (this.steps.length > i.length) throw {
                message: "Recursive step ordering detected for process " + this.guid
            };
            if (n.length) {
                if (n[0].guid === n[0].prevGuid) {
                    t.logger.warn("(process._addSteps) Step has the same guid and prevGuid: " + n[0].guid);
                    return
                }
                if (u = new r, u.initialize(n[0]), this.steps.push(u), n.length > 1) {
                    if (n[1].guid === n[1].prevGuid) {
                        t.logger.warn("(process._addSteps) Step has the same guid and prevGuid: " + n[1].guid);
                        return
                    }
                    u = new r;
                    u.initialize(n[1]);
                    this.steps.push(u)
                }
                u = this._getNextStepsByGuid(n[0].guid, i);
                this._addSteps(u, i)
            }
        },
        _getNextStepsByGuid: function(n, t) {
            for (var i, u = [], r = 0; r < t.length; r++) i = t[r], i.status == 1 && i.prevGuid === n && u.push(i);
            for (r = 0; r < t.length; r++) i = t[r], i.status == 2 && i.prevGuid === n && u.push(i);
            return u
        },
        findStepIndex: function(n) {
            for (var t = 0; !0 && t < this.steps.length; t++)
                if (this.steps[t].context.equals(n)) return t;
            return -1
        },
        findStep: function(n) {
            var t = this.findStepIndex(n);
            return t > -1 ? this.steps[t] : null
        },
        findStepByGuidAndStatus: function(n) {
            for (var i, t = 0; t < this.steps.length; t++)
                if (i = this.steps[t], i.guid === n && i.status == 2) return i;
            return null
        },
        findDraftStepByGuid: function(n) {
            return this.findStepByGuidAndStatus(n, 1)
        },
        findPublishedStepByGuid: function(n) {
            return this.findStepByGuidAndStatus(n, 2)
        },
        toObject: function() {
            for (var t = {
                    guid: this.guid,
                    name: this.name,
                    description: this.description,
                    steps: []
                }, n = 0; n < this.steps.length; n++) t.steps.push(this.steps[n].toObject());
            return t
        },
        lock: function(i, r) {
            var u = this,
                f = {
                    processGuid: this.guid
                };
            t.cmComm.send({
                data: f,
                scope: this,
                url: this.lockUrl,
                onSuccess: n.proxy(function(n) {
                    var t, f;
                    try {
                        t = n.response.lockObj;
                        t.locked ? (u.lockExpiresOn = null, u.lockedBy = t.locked_by, r && r(this, "locked")) : (f = n.response, typeof f != "undefined" && typeof f.steps != "undefined" && (u.initialize(f), u.setExpiration(t.expires), i && i(this)))
                    } catch (e) {
                        r && r(this, e.message || e.description || "unknown")
                    }
                }, this),
                onError: n.proxy(function(n) {
                    r && r(this, t.phraseMan.get("ui.processError") + " " + n)
                }, this)
            })
        },
        renewLock: function() {
            var i = this;
            t.cmComm.send({
                data: {
                    processGuid: this.guid
                },
                scope: this,
                url: this.renewLockUrl,
                onSuccess: n.proxy(function(n) {
                    var r = n.response.lockObj;
                    r.locked ? (i.lockExpiresOn = null, i.lockedBy = r.locked_by, t.ui.showWarning(t.phraseMan.get("searchDialog.lockedByAnother"))) : i.setExpiration(r.expires)
                }, this),
                onError: n.proxy(function(n) {
                    t.ui.showError(t.phraseMan.get("ui.processError") + " " + n)
                }, this)
            })
        },
        unlock: function() {
            if (clearTimeout(this.timeout), !this.lockExpiresOn || this.guid === i.guid.empty) {
                this.setExpiration();
                return
            }
            var r = this;
            t.cmComm.send({
                data: {
                    processGuid: this.guid
                },
                scope: this,
                url: this.unlockUrl,
                onSuccess: n.proxy(function() {
                    r.unload()
                }, this),
                onError: n.proxy(function() {}, this)
            })
        },
        unload: function() {
            clearTimeout(this.timeout);
            this.setExpiration()
        },
        setExpiration: function(i) {
            var r = new Date,
                u, f;
            r.setMinutes(r.getMinutes() + i);
            this.lockExpiresOn = i && n.isNumeric(i) && i > 0 ? r : null;
            u = t.storage;
            f = u.get(this.processStorageNamespace) || {};
            f.expires = this.lockExpiresOn;
            u.set(this.processStorageNamespace, f);
            this.lockExpiresOn && this.checkExpiration()
        },
        checkExpiration: function() {
            var n, t, r;
            if (!this.guid || this.guid === i.guid.empty || !this.lockExpiresOn) {
                this.setExpiration();
                return
            }
            n = new Date;
            this.lockExpiresOn <= n ? this.renewLock() : (clearTimeout(this.timeout), t = this, r = function() {
                t.checkExpiration()
            }, this.timeout = setTimeout(function() {
                r()
            }, this.lockInterval * 1e3))
        },
        toString: function() {
            return "ANCILE Process Class"
        }
    };
    et = function() {
        this.paused = !1;
        this.recording = !1;
        this.currentTarget = null;
        this.currentStep = null;
        this.editingStep = null;
        this.processStorageNamespace = "process_info";
        this.$app = null;
        this.clicksCount = 0
    };
    et.prototype = {
        initialize: function() {
            this.$app = t.container;
            this._resetState()
        },
        unload: function() {
            return this._unlisten(), this.currentTarget = null, this.editingStep = null, this.paused = !1, this.recording = !1, this._setState(), this
        },
        _getHighlighter: function(t) {
            var r = n(t[0].ownerDocument).find("body"),
                i = n(".ancile-cumulus-highlighter", r).first();
            return i.length == 0 && (i = n("<div/>").attr("tabindex", -1).css("opacity", .5).addClass("ancile-cumulus").addClass("ancile-cumulus-highlighter").appendTo(r)), i
        },
        _removeHighlighters: function() {
            n("body,frameset").children(".ancile-cumulus-highlighter").remove();
            this._removeHighlightersFromFrames(t.ui.safeFrames)
        },
        _removeHighlightersFromFrames: function(t) {
            n.each(t, n.proxy(function(t, r) {
                this._removeHighlightersFromFrames(r.children);
                try {
                    var u = n(i.getFrameContent(r.frame)),
                        f = n("body,frameset", u);
                    f.children(".ancile-cumulus-highlighter").remove()
                } catch (e) {
                    return !0
                }
            }, this))
        },
        pause: function() {
            this.paused || (this.paused = !0, n(this).trigger("paused.ancile.recorder"), n("#cumulus-recorder-toolbar #ancile-recorder-toolbar-record").css("display", "inline-block"), this._setState())
        },
        resume: function() {
            this.paused && (this.paused = !1, n(this).trigger("resumed.ancile.recorder"), n("#cumulus-recorder-toolbar #ancile-recorder-toolbar-pause").css("display", "inline-block"), this._setState())
        },
        record: function() {
            return (document.body.focus(), this.editingStep = null, this.recording) ? (this.resume(), !1) : (this.recording = !0, this.paused = !1, n("#cumulus-recorder-toolbar #ancile-recorder-toolbar-record").hide(), n("#cumulus-recorder-toolbar #ancile-recorder-toolbar-pause").css("display", "inline-block"), t.monitor.enable(), this._listen(), this._setState(), !0)
        },
        _listen: function() {
            this.$app.on("_mouseover.ancile.monitor.recorder", n.proxy(this._highlightTarget, this));
            this.$app.on("_mouseout.ancile.monitor.recorder", n.proxy(this._unHighlightTarget, this));
            this.$app.on("_mousedown.ancile.monitor.recorder", n.proxy(this._onMouseDown, this));
            this.$app.on("_mouseup.ancile.monitor.recorder", n.proxy(this._onMouseUp, this));
            this.$app.on("_keydown.ancile.monitor.recorder", n.proxy(this._onKeyDown, this));
            this.$app.on("_keyup.ancile.monitor.recorder", n.proxy(this._onKeyUp, this));
            this.$app.on("_focus.ancile.monitor.recorder", n.proxy(this._onFocus, this));
            this.$app.on("_blur.ancile.monitor.recorder", n.proxy(this._onBlur, this));
            this.$app.on("_change.ancile.monitor.recorder", n.proxy(this._onChange, this))
        },
        _unlisten: function() {
            this.$app && this.$app.off(".ancile.monitor.recorder");
            n(document).off("recordAction.ancile.recorder");
            this._removeHighlighters()
        },
        _canHighlight: function(t) {
            return !n(t).is("option, iframe, frame")
        },
        _isChangeableElement: function(t) {
            return n(t).is("option, [type='checkbox'], [type='radio'], [type='color'], [type='range'], [type='file']")
        },
        _isSpecialInput: function(t) {
            return n(t).is("[type='color'], [type='file'], [type='range'], [type=email], [type^=date], [type=month], [type=week], [type=number], [type=range], [type=search], [type=tel], [type=time], [type=url]")
        },
        _unlistenFrames: function(t) {
            n.each(t, n.proxy(function(t, r) {
                this._unlistenFrames(r.children);
                try {
                    var f = n(i.getFrameContent(r.frame)),
                        u = n("body,frameset", f);
                    u.off(".ancile.recorder");
                    n("[role=checkbox], [role=radio]", u).off(".ancile.recorder");
                    n("select, input", u).off(".ancile.recorder")
                } catch (e) {
                    return !0
                }
            }, this))
        },
        _isSameTarget: function(t) {
            var r, i, u, f;
            return this.currentStep ? (r = n(this.currentStep.target), i = n(t), n(t).attr("name") && r.attr("name") === i.attr("name")) ? !0 : i.is("[role='radio']") && (u = i.parent("[role='radiogroup']"), u.length > 0 && (f = r.parent("[role='radiogroup']"), u[0] === f[0])) ? !0 : this.currentStep.target == t : this.currentTarget == t ? !0 : !1
        },
        _onMouseDown: function(f, e) {
            var h, s, c, o;
            this._isActive() && ((h = i.getElementForLabel(n(e.target)), s = h ? h[0] : e.target, this._isSameTarget(s) || this._isChangeableElement(s)) || (c = ANCILE_UGUIDE_OPTIONS.doubleClickTolerance || 0, this.clicksCount++, this.clicksCount == 1 && (o = this, setTimeout(function() {
                var f, i, h;
                n.event.trigger("recordAction.ancile", "mousedown");
                o.currentTarget = s;
                f = (new u).initialize(o.currentTarget).toObject();
                switch (f.control) {
                    case "file":
                    case "field":
                        f.frameSelectors.length > 0 && (o.editingStep = null);
                        o.clicksCount = 0;
                        return
                }
                if (i = "", o.clicksCount == 1) {
                    i = "leftClick";
                    switch (e.which) {
                        case 1:
                            i = "leftClick";
                            break;
                        case 2:
                            i = "middleClick";
                            break;
                        case 3:
                            i = "rightClick"
                    }
                } else i = "leftDoubleClick";
                f.action = i;
                h = new r(f, t.cmComm.hostUrl);
                h.target = o.currentTarget;
                o._addStep(h);
                o.clicksCount = 0
            }, c))))
        },
        _onMouseUp: function(t, r) {
            var f, e, o, s;
            if (this._isActive() && !this.editingStep && !this._isChangeableElement(r.target)) {
                for (f = (new u).initialize(r.target), e = n(document.body), o = 0; o < f.frameSelectors.length; o++) s = n(f.frameSelectors[o], e), e = n(i.getFrameContent(s));
                switch (f.control) {
                    case "file":
                    case "field":
                        e.find(f.selector).focusin()
                }
            }
        },
        _onKeyDown: function(i, f) {
            var o, e, s;
            if (this._isActive()) {
                if (o = n(document.activeElement), o.length > 0 && !this.editingStep) {
                    e = (new u).initialize(o[0]);
                    switch (e.control) {
                        case "field":
                            o.focusin();
                            return
                    }
                }
                if ((!this.editingStep || f.which == 9) && (!this.editingStep || f.which != 13) && f.which != 16 && f.which != 17 && f.which != 18 && (n.event.trigger("recordAction.ancile", "keydown"), e = (new u).initialize(f.target).toObject(), e.control != "checkbox")) {
                    switch (f.which) {
                        case 9:
                            this.editingStep = null;
                            return;
                        case 13:
                            if (e.control == "button" || e.control == "link") {
                                e.action = "leftClick";
                                break
                            }
                        case 37:
                        case 38:
                        case 39:
                        case 40:
                            if (e.control == "select" || e.control == "radio") {
                                this._onChange(i, f);
                                return
                            }
                    }
                    e.action || (e.action = "keyPress", e.keyCode = f.which, e.shiftKey = f.shiftKey, e.ctrlKey = f.ctrlKey, e.altKey = f.altKey);
                    s = new r(e, t.cmComm.hostUrl);
                    s.target = f.target;
                    this._addStep(s)
                }
            }
        },
        _onKeyUp: function(t, r) {
            var f, e, o, s;
            if (this._isActive() && (!this.editingStep || r.which == 8 || r.which == 46)) {
                f = (new u).initialize(r.target);
                switch (f.control) {
                    case "field":
                        if (f.frameSelectors.length > 0) {
                            for (e = n(document.body), o = 0; o < f.frameSelectors.length; o++) s = n(f.frameSelectors[o], e), e = n(i.getFrameContent(s));
                            e.find(f.selector).focusin()
                        }
                        if (r.which === 8 || r.which === 46) {
                            this._onChange(t, r);
                            return
                        }
                        break;
                    case "select":
                        this._onChange(t, r)
                }
            }
        },
        _onFocus: function(f, e) {
            var o, s, h;
            if (this._isActive() && !this.editingStep) {
                this.currentTarget = e.target;
                o = (new u).initialize(e.target).toObject();
                switch (o.control) {
                    case "file":
                        if (o.action = "browse", this.currentStep && this.currentStep.target == e.target) return;
                    case "field":
                        o.action || (o.action = "edit");
                        o.entry = n(e.target).val() || n(e.target).text();
                        o.password && (o.entry = o.entry == "" ? "" : "******");
                        s = new r(o, t.cmComm.hostUrl);
                        this._storeImposter(s, e.target);
                        this.editingStep === s || this.currentStep && this.currentStep.target == e.target ? this._replaceCurrentStep(s, o.control) : (this.editingStep = s, s.target = e.target, h = o.defaultValue.length, o.entry == "" || i.isCkEditorTextElement(n(s.target)) || h || this._addStep(s));
                        return
                }
                this.editingStep = null
            }
        },
        _onBlur: function() {
            this._isActive() && this.editingStep && (this.editingStep = null)
        },
        _onChange: function(f, e) {
            var l, a, c;
            if (this._isActive()) {
                var h = !1,
                    s = n(e.target),
                    o = (new u).initialize(e.target).toObject();
                n.event.trigger("recordAction.ancile", "change");
                switch (o.control) {
                    case "file":
                        if (o.action = "browse", this.currentTarget == e.target) return;
                    case "field":
                        if (o.entry = i.isCkEditorTextElement(s) ? CKEDITOR.currentInstance.getData() : s.val() || s.text(), !this._isSpecialInput(s)) {
                            if (!this.editingStep || this._isDifferentTarget(this.currentTarget, e.target)) return;
                            this.editingStep && (this.editingStep.entry == "" || this.editingStep.entry == o.defaultValue) && (this.currentStep == null || this._isDifferentTarget(this.editingStep.target, this.currentStep.target)) ? h = !0 : this.editingStep && this._isDifferentTarget(this.editingStep.target, this.currentStep.target) && this.editingStep.entry != o.defaultValue && (h = !0)
                        }
                        o.action || (o.action = "edit");
                        o.password && (o.entry = o.entry == "" ? "" : "******");
                        this.currentStep && this.currentStep.target != e.target && this._isSpecialInput(s) && (h = !0);
                        break;
                    case "select":
                        this.editingStep = null;
                        o.action = "select";
                        this.currentStep && this.currentStep.target != e.target && (h = !0);
                        break;
                    case "checkbox":
                        this.editingStep = null;
                        l = s.is(":checked") || s.attr("aria-checked") == "true";
                        o.action = l ? "check" : "uncheck";
                        this.currentStep && this.currentStep.target != e.target && (h = !0);
                        break;
                    case "radio":
                        this.editingStep = null;
                        l = s.is(":checked") || s.attr("aria-checked") == "true";
                        o.action = "radioCheck";
                        this._isSameTarget(e.target) || (h = !0)
                }(t.ui.processDialog.hasSteps() || (h = !0), o.indeterminate && (a = new w(this._getLabelCandidates(o)), o.text = a.selectedText), o.action) && (c = new r(o, t.cmComm.hostUrl), o.indeterminate && (c.labelCandidatesSelect = a), c.target = e.target, this._storeImposter(c, e.target), c.getRawStepText() !== "" && c.action) && (h ? this._addStep(c) : this._replaceCurrentStep(c, o.control))
            }
        },
        _isDifferentTarget: function(t, r) {
            return !(t == r || t != r && i.isCkEditorTextElement(n(t)) && i.isCkEditorTextElement(n(r)))
        },
        _isActive: function() {
            return !this.paused && this.recording
        },
        _highlightTarget: function(t, i) {
            var r = n(i.target),
                u;
            this._isActive() && this._canHighlight(r) && (u = this._getHighlighter(r), u.show().css({
                width: r.outerWidth(),
                top: r.offset().top + r.outerHeight() + 1,
                left: r.offset().left
            }))
        },
        _unHighlightTarget: function(t, i) {
            var r = n(i.target);
            this._isActive() && this._canHighlight(r) && this._getHighlighter(r).hide()
        },
        _addStep: function(n) {
            this.currentStep = n;
            t.ui.processDialog.addStep(n)
        },
        _replaceCurrentStep: function(n, i) {
            i == "field" && (delete this.editingStep, this.editingStep = n);
            this.currentStep = n;
            t.ui.processDialog.replaceCurrentStep(n)
        },
        _setState: function() {
            var i = t.storage,
                n = i.get(this.processStorageNamespace) || {};
            n.recording = this.recording;
            n.paused = this.paused;
            i.set(this.processStorageNamespace, n)
        },
        _resetState: function() {
            var n = t.storage.get(this.processStorageNamespace);
            n && n.recording && (this.record(), n.paused && this.pause())
        },
        _storeImposter: function(t, i) {
            ANCILE_UGUIDE_OPTIONS.imposters && ANCILE_UGUIDE_OPTIONS.imposters.length > 0 && (t.imposter = n(i).data("imposter") || "")
        },
        toString: function() {
            return "ANCILE Cumulus Recorder"
        },
        _getLabelCandidates: function(t) {
            var i = n(t.selector),
                r = [],
                u;
            return i.attr("placeholder") && r.push(i.attr("placeholder")), i.attr("title") && r.push(i.attr("title")), i.text() && t.control != "select" && r.push(i.text()), i.val() && t.control != "field" && t.control != "select" && r.push(i.val()), i.attr("name") && r.push(i.attr("name")), i.attr("id") && r.push(i.attr("id")), i[0] != undefined && i[0].nextSibling != undefined && i[0].nextSibling.nodeType == 3 && (u = n(i[0].nextSibling).text(), r.push(u)), r
        }
    };
    ot = function() {
        t && (this.processStorageNamespace = "process_info", this.stepsStorageNamespace = "process_steps", this.userPreferencesNamespace = "user_prefs", this.safeFrames = [], this.processDialog = null, this.$appContainer = t.container, this.searchProcessDialog = null, this.screencastsDialog = null, this.toolbar = null, this.messageRibbon = null, this._iframeRefreshTimeout = null)
    };
    ot.prototype = {
        initialize: function() {
            var r, e, o, f, u;
            if (this._loadStyles(), this.safeFrames = this._loadSafeFrames(document), this.toolbar = this._createToolbar(), this.messageRibbon = this._createMessageRibbon(), t.options.isAuthor && (r = t.storage.get(this.processStorageNamespace), r && r.name && (e = r.guid != i.guid.empty, u = null, e && (o = t.storage.get(this.stepsStorageNamespace), f = r, f.steps = o, u = (new s).initialize(f)), this.createEditProcessDialog(u))), t.container) {
                t.container.on("_frameMutated.ancile.monitor", n.proxy(this._onFrameMutated, this));
                t.container.on("close.ancile.processDialog", n.proxy(this.onCloseProcessDialog, this));
                t.container.on("close.ancile.searchDialog", n.proxy(this.onCloseSearchDialog, this))
            }
            return this
        },
        unLoad: function() {
            this.processDialog && this.processDialog.unload();
            this.searchProcessDialog && this.searchProcessDialog.unload();
            this.screencastsDialog && this.screencastsDialog.unload();
            this.removeToolbar();
            this.removeMessageRibbon()
        },
        onResize: function(n) {
            if (this.processDialog) this.processDialog.onResize(n);
            this.searchProcessDialog && this.searchProcessDialog.onResize();
            this.screencastsDialog && this.screencastsDialog.onResize()
        },
        refreshSafeFrames: function() {
            this.safeFrames = [];
            this.safeFrames = this._loadSafeFrames(document);
            this.$appContainer.trigger("safeframesloaded")
        },
        _loadStyles: function() {
            return i.getStylesheet(t.options.contentManagementDomain + t.options.appCss, !1), ANCILE_UGUIDE_OPTIONS.customstyle && ANCILE_UGUIDE_OPTIONS.customstyle.length && i.getStylesheet(ANCILE_UGUIDE_OPTIONS.customstyle), this
        },
        _loadSafeFrames: function(r) {
            var c = [],
                o, f, e, s, u, h;
            if (r)
                for (o = n("iframe,frame", r), f = this, e = 0; e < o.length; e++)
                    if (s = o[e], u = n(s), !u.hasClass("ancile-comm-shim") && !u.hasClass("ancile-storage-shim")) try {
                        h = [];
                        u.on("framecheck.ancile.ui", function() {
                            u.off("framecheck.ancile.ui");
                            u.off("load.ancile.framechanged");
                            u.on("load.ancile.framechanged", function() {
                                f.refreshSafeFrames(document)
                            });
                            var t = i.getFrameContent(u);
                            f._appendStylesheet(n(t));
                            h = f._loadSafeFrames(t)
                        });
                        u.trigger("framecheck.ancile.ui");
                        c.push({
                            frame: u,
                            children: h
                        })
                    } catch (l) {
                        t.logger.warn("frame is potentially in another domain: source = " + s.src)
                    }
                    return c
        },
        _onFrameMutated: function() {
            var n = this,
                t = ANCILE_UGUIDE_OPTIONS.refreshIframesDelay || 500;
            window.clearTimeout(this._iframeRefreshTimeout);
            this._iframeRefreshTimeout = window.setTimeout(function() {
                n.refreshSafeFrames()
            }, t)
        },
        _appendStylesheet: function(i) {
            var r = i.find("head"),
                u = n("link[href^='" + t.options.contentManagementDomain + "']");
            r.find("link[href^='" + t.options.contentManagementDomain + "']").length == 0 && u.clone().appendTo(r)
        },
        _createToolbar: function() {
            var i = this,
                u = n("<div/>").attr("id", "cumulus-sidebar").addClass("ancile-floating-panel").hide().appendTo(t.container),
                r = [{
                    id: "ancile-toolbar-help",
                    title: t.phraseMan.get("ui.toolbar.buttons.help.title"),
                    content: n("<i/>").addClass("fa fa-question"),
                    click: function() {
                        t.helpProvider.process != null ? t.helpProvider.terminateHelp() : i.getHelp()
                    }
                }],
                f;
            return t.options.isAuthor && (r.push({
                id: "ancile-toolbar-search",
                title: t.phraseMan.get("ui.toolbar.buttons.search.title"),
                content: n("<i/>").addClass("fa fa-search"),
                click: function() {
                    i.searchProcessDialog || (t.helpProvider.showSearch(), i.searchProcessDialog && i._showScreencastsDialog(t.phraseMan.getSection("ui.screencastListDialog.screencasts"), "doNotShowSearchScreencasts"))
                }
            }), r.push({
                id: "ancile-toolbar-new-process",
                title: t.phraseMan.get("ui.toolbar.buttons.newProcess.title"),
                content: n("<i/>").addClass("fa fa-plus"),
                click: function() {
                    i.processDialog || (i.createEditProcessDialog(), i.processDialog && i._showScreencastsDialog(t.phraseMan.getSection("ui.screencastListDialog.screencasts"), "doNotShowNewProcessScreencasts"))
                }
            })), f = u.sidebar({
                buttons: r
            }), u.fadeIn("fast"), f
        },
        removeToolbar: function() {
            return this.toolbar && (this.toolbar.remove(), this.toolbar = null), this
        },
        _createMessageRibbon: function() {
            var i = n("<div/>").slideUp().appendTo(t.container);
            return i.messageribbon(), i
        },
        removeMessageRibbon: function() {
            return this.messageRibbon && (this.messageRibbon.remove(), this.messageRibbon = null), this
        },
        getHelp: function() {
            if (this.searchProcessDialog && (this.searchProcessDialog.unload(), this.searchProcessDialog = null), this.processDialog)
                if (this.toolbar.sidebar("setActiveButton", "ancile-toolbar-new-process"), this.processDialog.close()) this.processDialog = null;
                else return;
            if (this.toolbar) {
                this.showProcessing(t.phraseMan.get("ui.loading"));
                this.toolbar.sidebar("setActiveButton", "ancile-toolbar-help");
                var n = this;
                t.container.one("helprequestreturned.ancile.ui", function() {
                    n.clearMessage()
                })
            }
            t.helpProvider.initiateHelp()
        },
        createEditProcessDialog: function(n) {
            (typeof this.processDialog == "undefined" || this.processDialog == null) && (t.helpProvider.terminateHelp(), this.searchProcessDialog && (this.searchProcessDialog.unload(), this.searchProcessDialog = null), this.toolbar && this.toolbar.sidebar("setActiveButton", "ancile-toolbar-new-process"), this.processDialog = (new it).initialize(n), this.processDialog.resetState())
        },
        createSearchProcessDialog: function(n) {
            if (typeof this.searchProcessDialog == "undefined" || this.searchProcessDialog == null) {
                if (n !== !0 && (n = !1), t.helpProvider.terminateHelp(), this.processDialog)
                    if (this.toolbar.sidebar("setActiveButton", "ancile-toolbar-new-process"), this.processDialog.close()) this.processDialog = null;
                    else return;
                this.toolbar && (n ? this.toolbar.sidebar("setActiveButton", "ancile-toolbar-help") : this.toolbar.sidebar("setActiveButton", "ancile-toolbar-search"));
                var i = new e;
                i.setApplication({
                    url: t.cmComm.hostUrl
                }, ANCILE_UGUIDE_OPTIONS.appContextUrlFormat);
                this.searchProcessDialog = new tt;
                this.searchProcessDialog.isHelpResults = n;
                this.searchProcessDialog.appContext = i.getApplication();
                this.searchProcessDialog.initialize(n)
            }
        },
        showSuccess: function(n) {
            if (this.messageRibbon) return this.messageRibbon.messageribbon("showSuccess", n)
        },
        showError: function(n) {
            if (this.messageRibbon) return this.messageRibbon.messageribbon("showError", n)
        },
        showProcessing: function(n) {
            if (this.messageRibbon) return this.messageRibbon.messageribbon("showProcessing", n)
        },
        showWarning: function(n) {
            if (this.messageRibbon) return this.messageRibbon.messageribbon("showWarning", n)
        },
        clearMessage: function() {
            if (this.messageRibbon) return this.messageRibbon.messageribbon("clearMessage")
        },
        onCloseProcessDialog: function() {
            this.toolbar.sidebar("setActiveButton", null);
            this.processDialog = null;
            t.monitor.enable()
        },
        onCloseSearchDialog: function() {
            this.toolbar.sidebar("setActiveButton", null);
            this.searchProcessDialog = null;
            t.monitor.enable()
        },
        toString: function() {
            return "ANCILE Cumulus UI"
        },
        _showScreencastsDialog: function(i, r) {
            if (!this.screencastsDialog) {
                var u = t.storage.get(this.userPreferencesNamespace) || {};
                if (u[r] !== !0) {
                    this.screencastsDialog = new rt;
                    this.screencastsDialog.initialize(i);
                    t.container.on("close.ancile.screencastsDialog", n.proxy(function(n, i) {
                        t.container.off("close.ancile.screencastsDialog");
                        var u = t.storage.get(this.userPreferencesNamespace) || {};
                        u[r] = i.doNotShowAgain;
                        t.storage.set(this.userPreferencesNamespace, u);
                        this.screencastsDialog.unload();
                        this.screencastsDialog = null
                    }, this))
                }
            }
        }
    };
    h = function(n) {
        n && (this.app = n, this.ready = !1, this.timeout = 6e4, this.busy = !1, this.timedOut = !1, this.shimWinRef = null, this.hostUrl = null, this.domain = null, this.commUrl = null, this.$shim = null, this.eventNamespace = null, this.loaderTimeoutHandle = null, this.queue = [])
    };
    h.prototype = {
        initialize: function(t, i) {
            if (!t || !i) throw "domain or namespace was not supplied to the comm initializer.";
            this.domain = t;
            this.commUrl = this.domain + "/comm";
            this.eventNamespace = ".ancile" + (i.indexOf(".") == 0 ? i : "." + i);
            this.$shim = this._createShim();
            var r = n.Deferred();
            return this._initShim(r), r
        },
        unload: function() {
            clearTimeout(this.loaderTimeoutHandle);
            this.$shim != null && (this.$shim.remove(), this.$shim = null);
            this.eventNamespace != null && n(window).unbind(this.eventNamespace)
        },
        _createShim: function() {
            return n("<iframe/>").addClass("ancile-comm-shim").width(1).height(1).hide().appendTo(this.app.container)
        },
        _initShim: function(t) {
            var i = this;
            n(window).bind("message" + this.eventNamespace, function(n) {
                if (n.originalEvent && n.originalEvent.data) {
                    var r = ANCILE_UGUIDE_JSON.parse(n.originalEvent.data);
                    if (r && r.type !== i.eventNamespace) return;
                    i.domain.indexOf(n.originalEvent.origin) == 0 && (i.shimWinRef = n.target, i._onReady(n, t))
                }
            });
            this.$shim.attr("src", this.commUrl + "/init?message=" + encodeURIComponent(location.protocol + "//" + location.host))
        },
        _recreateShim: function(t) {
            this.unload();
            this.$shim = this._createShim();
            var r = this,
                i = n.Deferred();
            this._initShim(i);
            i.done(function() {
                t && (t.shimRecreated = !0, r.send(t))
            })
        },
        _onReady: function(t, i) {
            n(window).unbind("message" + this.eventNamespace);
            var r = ANCILE_UGUIDE_JSON.parse(t.originalEvent.data);
            r && r.status == 200 ? (this.ready = !0, this.hostUrl = r.url, ANCILE_UGUIDE_OPTIONS.appContextUrlFormat = at[r.appContextUrlFormat], this.app.logger.debug("Comm shim " + this.eventNamespace + " initialized."), i.resolve()) : (this.app.logger.error("Error: Could not initialize communication shim " + this.eventNamespace + "."), i.reject())
        },
        send: function(t) {
            var r, i, u;
            if (!this.ready) return !1;
            if (!this._optionsPass(t)) return this.app.logger.warn("Invalid options passed to $ANCILE_CumulusAppComm::send"), !1;
            if (!this.$shim || this.$shim.length == 0) return this.app.logger.warn("The communication shim cannot be located."), !1;
            if (this.busy) {
                this._addToQueue(t);
                return
            }
            return r = this, this.busy = !0, this.timedOut = !1, n(window).bind("message" + this.eventNamespace, function(n) {
                n.originalEvent && r.domain.indexOf(n.originalEvent.origin) == 0 && r._message(n, t)
            }), i = {
                timeout: this.timeout,
                data: t.data,
                url: t.url
            }, t.type && (i.type = t.type), typeof t.dataType == "string" && t.dataType.toLowerCase() == "jsonp" && (i.dataType = t.dataType, i.jsonpCallback = t.jsonpCallback), u = ANCILE_UGUIDE_JSON.stringify(i), clearTimeout(this.loaderTimeoutHandle), this.loaderTimeoutHandle = setTimeout(function() {
                this.loaderTimeoutHandle = null;
                var n = r.$shim[0];
                n.contentWindow.postMessage(u, "*")
            }, 100), this
        },
        _message: function(t, i) {
            var e, r, u, f;
            n(window).unbind("message" + this.eventNamespace);
            this.timedOut = !1;
            this.busy = !1;
            e = !1;
            t.originalEvent.data && (r = ANCILE_UGUIDE_JSON.parse(t.originalEvent.data), r && r.status === 200 && r.response && !r.response.ID ? r.response.redirect && r.response.options ? (u = r.response.options, u.url = r.response.redirect, u.onSuccess = i.onSuccess, u.onError = i.onError, u.scope = i.scope, this.send(u)) : (this._success(r, i), this._sendNext()) : r && r.status === 408 ? (this._timeout(i), this._sendNext()) : r && r.status === 0 && i && !i.shimRecreated ? this._recreateShim(i) : (f = this._showErrorMessage(r), this._error(f, i), this._sendNext()))
        },
        _success: function(n, t) {
            return t && t.onSuccess && t.scope && t.scope != this && t.onSuccess.apply(t.scope, [n]), n
        },
        _error: function(n, t) {
            return this.app.logger.warn("Comm shim " + this.eventNamespace + ": " + n, !1), t && t.onError && t.scope && t.scope != this && t.onError.apply(t.scope, [n]), n
        },
        _timeout: function(n) {
            this.timedOut = !0;
            this.busy = !1;
            this._error(this.app.phraseMan.get("comm.timeout"), n)
        },
        _showErrorMessage: function(n) {
            var t;
            n && n.response && n.response.ID && this.app.phraseMan.hasPhrase("comm.server." + n.response.ID) && (t = this.app.phraseMan.get("comm.server." + n.response.ID), n.response.text && (t += " " + n.response.text));
            switch (n.status) {
                case 0:
                    t = "Authorization expired, or request cancel due to page refresh";
                    break;
                case 200:
                case 500:
                    t = t || this.app.phraseMan.get("comm.error");
                    this.app.ui.showError(t);
                    break;
                case 401:
                    t = t || this.app.phraseMan.get("comm.unauthorized");
                    this.app.ui.showWarning(t);
                    break;
                case 404:
                    t = t || this.app.phraseMan.get("comm.notFound");
                    this.app.ui.showError(t);
                    break;
                default:
                    t = t || this.app.phraseMan.get("comm.unsupported");
                    this.app.ui.showError(t)
            }
            return t
        },
        _optionsPass: function(n) {
            return n.url ? !n.data && (typeof n.type != "string" || n.type.toLowerCase() != "get") ? !1 : n.onSuccess && (typeof n.onSuccess != "function" || !n.scope) ? !1 : n.onError && (typeof n.onError != "function" || !n.scope) ? !1 : n.dataType == "jsonp" && !n.jsonpCallback ? !1 : !0 : !1
        },
        _addToQueue: function(n) {
            this.queue.push(n)
        },
        _sendNext: function() {
            if (this.queue.length) {
                var n = this.queue.shift();
                this.send(n)
            }
        },
        toString: function() {
            return "ANCILE Cumulus Comm"
        }
    };
    b = function(n) {
        this.$el = null;
        this.$target = null;
        this.$imposter = null;
        this.targetSelector = null;
        this.imposterSelector = null;
        this.frameSelectors = [];
        this.$frame = null;
        this.$content = null;
        this.$win = null;
        this.editMode = !1;
        this.stepGuid = null;
        this.defaultTargetWidth = 250;
        this.defaultTargetHeight = 250;
        this.targetVisiblityPollingDelay = 2e3;
        this._targetVisibilityPollingIntervalId = null;
        this.$fakeEl = null;
        this.$wrapper = null;
        typeof n == "object" && (this.editMode = n.editMode === !0)
    };
    b.prototype = {
        initialize: function(t, r, u, f) {
            var e, s;
            this.targetSelector = t.context.control.selector;
            this.frameSelectors = t.context.control.frameSelectors;
            this._render(t, r, u, f);
            this.stepGuid = t.guid;
            var o = this,
                h = function() {
                    o._adjust()
                },
                c = function() {
                    o.$el && o.$el.draggable({
                        scroll: !1,
                        containment: "window",
                        opacity: .5,
                        start: function(n, t) {
                            o._onStartDrag(n, t)
                        },
                        drag: function(n, t) {
                            o._onDrag(n, t)
                        },
                        stop: function(n, t) {
                            o._onStopDrag(n, t)
                        }
                    })
                };
            return setTimeout(function() {
                c();
                h()
            }, 1e3), clearInterval(this._targetVisibilityPollingIntervalId), e = this.$target.length > 0 ? this.$target : this.$imposter, s = !i.frameUnavailable(e, this.$wrapper, this.$win) && !i.offScreen(e, this.$win, this.$wrapper), this._targetVisibilityPollingIntervalId = setInterval(n.proxy(function() {
                var r;
                this.$frame = i.findFrameFromStep(t);
                this.$wrapper = this.$frame == null ? null : n(this.frameSelectors[0]);
                this.$wrapper && this.$wrapper.length == 0 && (this.$wrapper = this.$frame);
                r = n("body");
                this.$win = n(window);
                this.frameSelectors.length > 0 && this.$frame != null && (this.$win = n(i.getFrameContent(this.$frame)), r = n("body,frameset", this.$win));
                this._findTargetAndImposter();
                e = this.$target.length > 0 ? this.$target : this.$imposter;
                this.$wrapper = this.$wrapper || this.$frame;
                var o = !i.frameUnavailable(e, this.$wrapper, this.$win) && !i.offScreen(e, this.$win, this.$wrapper),
                    c = o != s,
                    u = (!this.$target || !this.$target.is(":visible") || !c) && (!this.$imposter || !this.$imposter.is(":visible")),
                    f = this.$el.find(".cumulus-target-not-visible-warning").length > 0;
                if (!u && f || u && !f) {
                    if (!n._data(this.$win.get(0), "events")) this.$win.on("resize.ancile.note scroll.ancile.note", function() {
                        setTimeout(function() {
                            h()
                        }, 250)
                    });
                    this._adjust()
                }
                s = !i.frameUnavailable(e, this.$wrapper, this.$win) && !i.offScreen(e, this.$win, this.$wrapper)
            }, this), this.targetVisiblityPollingDelay), this
        },
        _render: function(t, r, u, f) {
            var o, e, s, h;
            t.hasImposter() && (this.imposterSelector = t.imposter);
            this.$frame = i.findFrameFromStep(t);
            this.$wrapper = this.$frame == null ? null : n(this.frameSelectors[0]);
            this.$wrapper && this.$wrapper.length == 0 && (this.$wrapper = this.$frame);
            o = n("body");
            this.$win = n(window);
            this.frameSelectors.length > 0 && this.$frame != null && (this.$win = n(i.getFrameContent(this.$frame)), o = n("body,frameset", this.$win));
            e = this;
            s = function() {
                e._adjust()
            };
            this.$win.on("resize.ancile.note scroll.ancile.note", function() {
                e._isFloating = !1;
                setTimeout(function() {
                    s()
                }, 250)
            });
            n(window).on("resize.ancile.note scroll.ancile.note", function() {
                e._isFloating = !1;
                setTimeout(function() {
                    s()
                }, 250)
            });
            return f || (this.$el = this._createElement(o), this._findTargetAndImposter(), this.$target.length > 0 ? this._createFakeTargetContainer(this.$target, t) : this.$imposter.length > 0 ? this._createFakeTargetContainer(this.$imposter, t) : (h = this.$el.find(".ancile-cumulus-note-body"), h.length > 0 && h.append(t.stepText))), this._createNav(this.$content, r, u), this._adjust(), f ? this.$el.css({
                opacity: 1
            }) : this.$el.css({
                opacity: 0
            }).animate({
                opacity: 1
            }, 100), this.$el
        },
        _createElement: function(t) {
            var f = this,
                i = n("<div/>").addClass("ancile-cumulus").addClass("ancile-floating-panel").addClass("ancile-cumulus-note"),
                r, u;
            if (i.appendTo(t), n("<div/>").addClass("ancile-arrow").appendTo(i), r = n("<div/>").addClass("ancile-cumulus-note-content").appendTo(i), this.$content = r, u = n("<button/>").addClass("ancile-cumulus-note-close").text("x").appendTo(i), !this.editMode) u.on("click.ancile.note.close", function(n) {
                f.onTerminate();
                n.stopPropagation()
            });
            return n("<div/>").addClass("ancile-cumulus-note-body").appendTo(r), i
        },
        _createNav: function(i, r, u) {
            var e = this,
                f = this.$el.find(".ancile-cumulus-note-nav");
            if (f.length == 0) {
                f = n("<div/>").addClass("ancile-cumulus-note-nav").appendTo(i);
                var o = n("<div/>").addClass("ancile-cumulus-note-previous").html("&nbsp;&nbsp;" + t.phraseMan.get("help.note.previous")).prepend(n("<i/>").addClass("fa fa-caret-left")).appendTo(f),
                    h = n("<div/>").addClass("ancile-cumulus-note-location").html(u > 1 ? t.phraseMan.get("help.note.stepXofX").replace("%number%", r).replace("%total%", u) : "").appendTo(f),
                    s = n("<div/>").addClass("ancile-cumulus-note-next").html(t.phraseMan.get("help.note.next") + "&nbsp;&nbsp;").append(n("<i/>").addClass("fa fa-caret-right")).appendTo(f)
            } else var o = f.find(".ancile-cumulus-note-previous"),
                h = f.find(".ancile-cumulus-note-location"),
                s = f.find(".ancile-cumulus-note-next");
            if (!this.editMode && r > 1 && u > 1) {
                o.on("mousedown.ancile.note.previous", function(n) {
                    e.onPrevious();
                    n.stopPropagation()
                });
                o.removeClass("disabled")
            } else o.addClass("disabled");
            if (h.html(u > 1 ? t.phraseMan.get("help.note.stepXofX").replace("%number%", r).replace("%total%", u) : ""), !this.editMode && r < u && u > 1) {
                s.on("mousedown.ancile.note.previous", function(n) {
                    e.onNext();
                    n.stopPropagation()
                });
                s.removeClass("disabled")
            } else s.addClass("disabled");
            if (r == u) {
                f.find(".ancile-cumulus-note-next").removeClass("disabled");
                f.find(".ancile-cumulus-note-next").addClass("ancile-last-step").text(t.phraseMan.get("help.note.stepsComplete")).on("click", function(n) {
                    e.onTerminate();
                    n.stopPropagation()
                });
                f.parents(".ancile-cumulus-note-content").addClass("ancile-last-step-container")
            }
        },
        _createFakeTargetContainer: function(t, r) {
            var f, u, e;
            t.is("select") && (r.optionText = r.getChildTextFromTarget(), r.setChildText(r.optionText));
            r.stepText && (f = this.$el.find(".ancile-cumulus-note-body"), f.append(r.stepText), u = f.find("span[data-ancile-cumulus-replacement='target']"), u.length > 0 && (u.empty(), t.is("area, map") || (e = this._renderFakeTarget(t, r), u.append(e))));
            var o = i.getWindowWidth(this.$win) - 100,
                s = n(".ancile-cumulus-note .ancile-fake-target").outerWidth(!0),
                h = this.defaultTargetWidth;
            e && (s < o ? h = s + 60 : s > o && (h = o + 60));
            this.$el.css({
                width: h
            })
        },
        _resetStepText: function() {
            this.$el.trigger("resetStepText.ancile.note")
        },
        _renderFakeTarget: function(t, r) {
            var l = t.text(),
                a = t.attr("placeholder"),
                s = t.attr("value"),
                f = t.prop("tagName").toLowerCase(),
                v = this._getStyles(t[0]),
                o = i.getWindowWidth(this.$win) - 100,
                u = n("<" + f + "/>").css(v).addClass("ancile-fake-target").attr("placeholder", a).attr("tabindex", -1).attr("aria-hidden", !0).on("mousedown.ancile.note keypress.ancile.note keydown.ancile.note", function(n) {
                    n.preventDefault();
                    n.stopPropagation()
                }),
                h = t.width(),
                y = t.height(),
                c, e;
            return (parseInt(u.width() + 1) < h || parseInt(u.height() + 1) < y) && u.css("min-width", t.innerWidth() + 1).css("min-height", t.innerHeight() + 1), c = h < o ? o : o - 100, u.css({
                "max-width": c,
                "min-width": 0,
                width: ""
            }), f == "img" && u.removeAttr("width"), u.css({
                "max-height": this.defaultTargetHeight,
                "min-height": 0,
                height: ""
            }), f == "img" && u.removeAttr("height"), r.childText ? u.html("<option>" + r.childText + "<\/option>") : f == "img" ? (e = t.attr("src"), e && e.length > 0 && u.attr("src", e)) : s ? u.attr("value", s) : u.html(l), u
        },
        _isFloating: !1,
        _adjust: function() {
            var f, u, c, s, h, r, o, l, e, a, v;
            if (this.$el && this._isFloating != !0) {
                if (this.adjustWidthForNavTranslations(), this.$el.removeClass("left right bottom top"), this.$el.find(".cumulus-target-not-visible-warning").remove(), f = this.$el.find(".ancile-arrow"), f.css("left", ""), this.$el.data("ui-draggable") && this.$el.draggable("option", "axis", !1), this._findTargetAndImposter(), u = this.$target, (!u || !u.is(":visible")) && this.$imposter && this.$imposter.is(":visible") && (u = this.$imposter), !u || !u.is(":visible")) {
                    this.$el.addClass("pinned");
                    u && !u.is(":visible") && (c = n("<div />").addClass("cumulus-target-not-visible-warning").html(t.phraseMan.get("help.note.controlNotVisible")), this.$el.find(".ancile-cumulus-note-body").after(c));
                    i.frameUnavailable(u, this.$wrapper, this.$win) ? (s = i.getWindowHeight(n(window)), h = i.getWindowWidth(n(window)), this.$el.css({
                        top: s / 2 - this.$el.outerHeight() / 2,
                        left: h / 2 - this.$el.outerWidth() / 2
                    }), this._showFakeNote()) : (s = i.getWindowHeight(this.$win), h = i.getWindowWidth(this.$win), this.$el.css({
                        top: s / 2 - this.$el.outerHeight() / 2,
                        left: h / 2 - this.$el.outerWidth() / 2
                    }), this._showOriginalNote());
                    return
                }
                if (r = i.getElementCoords(u), (this.$target.is("h1") || this.$target.is("h2")) && (o = n("<span><\/span>").html(this.$target.text()).hide(), o.css("font-size", this.$target.css("font-size")), n("body").append(o), l = n(o).innerWidth(), o.remove(), r = {}, e = n(this.$target), r.t = e.offset().top, r.l = e.offset().left, r.w = l + parseInt(e.css("margin-left").replace("px", "")) + parseInt(e.css("margin-right").replace("px", "")), r.h = e.innerHeight(), r.b = r.t + r.h, r.r = r.l + r.w), i.frameUnavailable(u, this.$wrapper, this.$win) ? this._showFakeNote() : this._showOriginalNote(), i.frameUnavailable(u, this.$wrapper, this.$win) || i.offScreen(u, this.$win, this.$wrapper)) {
                    this.$el.removeClass("pinned");
                    this._handleOffscreenTarget(r, u);
                    return
                }
                this.$el.removeClass("pinned");
                this.$el.addClass("right");
                this.$el.css({
                    top: r.t + r.h / 2 - this.$el.outerHeight(!0) / 2,
                    left: r.r
                });
                (i.offScreenRight(this.$el, this.$win, this.$wrapper) || r.w < 1) && (this.$el.removeClass("left right bottom top"), this.$el.addClass("left"), this.$el.css({
                    top: r.t + r.h / 2 - this.$el.outerHeight(!0) / 2,
                    left: r.l - this.$el.outerWidth(!0)
                }));
                (i.offScreenLeft(this.$el, this.$win, this.$wrapper) || i.offScreenBottom(this.$el, this.$win, this.$wrapper)) && (this.$el.removeClass("left right bottom top"), this.$el.addClass("top"), this.$el.css({
                    top: r.t - this.$el.outerHeight(!0),
                    left: r.l + r.w / 2 - this.$el.outerWidth() / 2
                }));
                i.offScreenTop(this.$el, this.$win, this.$wrapper) && (this.$el.removeClass("left right bottom top"), this.$el.addClass("bottom"), this.$el.css({
                    top: r.t + r.h,
                    left: r.l + r.w / 2 - this.$el.outerWidth(!0) / 2
                }));
                i.offScreenLeft(this.$el, this.$win, this.$wrapper) ? (this.$el.css({
                    left: 0
                }), f.css("left", Math.max(15, r.l + r.w / 2 - Math.floor(f.outerWidth(!0) / 2)).toString() + "px")) : i.offScreenRight(this.$el, this.$win, this.$wrapper) && (this.$el.css({
                    left: i.getWindowWidth(this.$win) - this.$el.outerWidth(!0)
                }), a = this.$el.outerWidth(!0) - f.outerWidth(!0) - 15, v = r.l + r.w / 2 - this.$el.position().left - Math.floor(f.outerWidth(!0) / 2), f.css("left", Math.min(a, v).toString() + "px"))
            }
        },
        _showFakeNote: function() {
            if (this.$frame)
                if (this.$fakeEl) this.$fakeEl.show(), this.$el.hide();
                else {
                    var t = n("body");
                    this.$fakeEl = this.$el.hide().clone(!0, !0);
                    this.$fakeEl.appendTo(t).show();
                    this.$fakeEl.css({
                        opacity: 1
                    })
                }
        },
        _showOriginalNote: function() {
            var t, i;
            this.$frame && this.$fakeEl && (t = n("body"), n(this.$fakeEl, t).hide(), this.$fakeEl.remove(), this.$fakeEl = null);
            this.$frame && (i = n("body").find(this.$el).length > 0, i && this.$el.detach().appendTo(n("body", this.$win)));
            this.$el.show()
        },
        _handleOffscreenTarget: function(t, r) {
            var s = this.$fakeEl ? n(window) : this.$win,
                u = this.$fakeEl ? this.$fakeEl : this.$el,
                h = 0,
                c = 0,
                e = i.getWindowHeight(s),
                o = i.getWindowWidth(s),
                f;
            this.$frame && !i.frameUnavailable(r, this.$wrapper, this.$win) && (f = i.getTrueVisiblePositioning(this.$wrapper, this.$win), h = f.trueWinTop, c = f.trueWinLeft, e = f.trueWinBottom, o = f.trueWinRight);
            i.offScreenRight(r, this.$win, this.$wrapper) || i.offScreenLeft(r, this.$win, this.$wrapper) ? i.offScreenRight(r, this.$win, this.$wrapper) ? (u.removeClass("right bottom top"), u.addClass("left pinned"), u.css("left", o - u.outerWidth(!0))) : i.offScreenLeft(r, this.$win, this.$wrapper) && (u.removeClass("left bottom top"), u.addClass("right pinned"), u.css("left", c)) : u.css("left", o / 2 - u.outerWidth(!0) / 2);
            i.offScreenBottom(r, this.$win, this.$wrapper) || i.offScreenTop(r, this.$win, this.$wrapper) ? i.offScreenBottom(r, this.$win, this.$wrapper) ? (u.removeClass("left right bottom"), u.addClass("top pinned"), u.css("top", e - u.outerHeight(!0))) : i.offScreenTop(r, this.$win, this.$wrapper) && (u.removeClass("left right top"), u.addClass("bottom pinned"), u.css("top", h)) : u.css("top", e / 2 - u.outerHeight(!0) / 2);
            u.data("ui-draggable") && (i.offScreenBottom(r, this.$win, this.$wrapper) || i.offScreenTop(r, this.$win, this.$wrapper) ? u.draggable("option", "axis", "x") : (i.offScreenLeft(r, this.$win, this.$wrapper) || i.offScreenRight(r, this.$win, this.$wrapper)) && u.draggable("option", "axis", "y"))
        },
        onPrevious: function() {
            this.$el.trigger("previous.ancile.note")
        },
        onNext: function() {
            this.$el.trigger("next.ancile.note")
        },
        onTerminate: function() {
            this.$el.trigger("terminate.ancile.note")
        },
        _onStartDrag: function() {
            this._isFloating = !0;
            this.$el.hasClass("pinned") || this.$el.removeClass("left right bottom top")
        },
        _onDrag: function() {},
        _onStopDrag: function() {},
        unload: function() {
            this.$el && (this.$el.off(".ancile.note"), this.$el.stop().remove(), delete this.$el);
            this.$fakeEl && (this.$fakeEl.off(".ancile.note"), this.$fakeEl.stop().remove(), delete this.$fakeEl);
            this.$win && this.$win.off("resize.ancile.note");
            this.$target && (this.$target.off("blur.ancile.note"), this.useParent ? this.$target.parent().removeClass("ui-droppable") : this.$target.removeClass("ui-droppable"));
            this.$imposter && this.$imposter.off("blur.ancile.note");
            clearInterval(this._targetVisibilityPollingIntervalId)
        },
        _getStyles: function(n) {
            var t, r = {},
                f, u, i;
            if (n.style) {
                t = n.style;
                for (i in t) t.hasOwnProperty(i) && typeof t[i] != "function" && (r[i] = t[i])
            }
            if (window.getComputedStyle)
                for (t = window.getComputedStyle(n, null), f = t.length, u = 0; u < f; ++u) i = t[u], r[i] = t.getPropertyValue(i);
            else if (n.currentStyle) {
                t = n.currentStyle;
                for (i in t) t.hasOwnProperty(i) && (r[i] = t[i])
            }
            return r.margin = 0, r["margin-left"] = 0, r["margin-top"] = 0, r["margin-right"] = 0, r["margin-bottom"] = 0, r
        },
        adjustWidthForNavTranslations: function() {
            var n = this.$content,
                f = this.$el.find(".ancile-cumulus-note-nav"),
                t = this.$el.find(".ancile-cumulus-note-previous"),
                i = this.$el.find(".ancile-cumulus-note-next"),
                r = this.$el.find(".ancile-cumulus-note-location"),
                u = f.outerHeight();
            for (t.css("height", "auto"), r.css("height", "auto"), i.css("height", "auto"); n.width() < 300 && (t.outerHeight() > u || r.outerHeight() > u || i.outerHeight() > u);) n.css("width", "+=10");
            t.css("height", "");
            r.css("height", "");
            i.css("height", "");
            n.width() >= this.$el.width() && this.$el.css("width", "")
        },
        _findTargetAndImposter: function() {
            var r = this.$el.ownerDocument,
                t = this,
                u = ANCILE_UGUIDE_OPTIONS.deferDroppableToParent,
                f = !1,
                e;
            r || (r = this.$win[0].document ? n(this.$win[0].document) : this.$win);
            this.$target = i.findElementBySelector(this.targetSelector, r);
            this.$imposter = i.findElementBySelector(this.imposterSelector, r);
            u.length && (e = u.join(","), f = this.$target.is(e));
            setTimeout(function() {
                var n = t.$target;
                f && (n = t.$target.parent());
                n && !n.is(".ui-droppable") && n.droppable({
                    accept: ".ancile-cumulus-note",
                    tolerance: "touch",
                    drop: function() {
                        t._isFloating = !1;
                        t._adjust()
                    }
                });
                t.$imposter && !t.$imposter.is(".ui-droppable") && t.$imposter.droppable({
                    accept: ".ancile-cumulus-note",
                    tolerance: "touch",
                    drop: function() {
                        t._isFloating = !1;
                        t._adjust()
                    }
                })
            }, 1e3)
        },
        toString: function() {
            return "ANCILE Note Class"
        }
    };
    st = function(n, t, i, r) {
        this.storageKey = "helpProvider";
        this.helpKeys = n;
        this.comm = t;
        this.ui = i;
        this.storage = r;
        this.process = null;
        this.currentStepIndex = -1;
        this.note = null;
        this.helpByContextUrl = "";
        this.helpByIdUrl = "";
        this.$app = null;
        this._stepPerformedHandlerTimeoutId = null
    };
    st.prototype = {
        initialize: function(i) {
            this.helpByContextUrl = i + "/help/loadbycontext";
            this.helpByIdUrl = i + "/help/loadbyid";
            this.$app = t.container;
            this.$app.off(".helpProvider").on("_keydown.ancile.monitor.helpProvider", n.proxy(this._handleHelpKeydown, this));
            var r = this.storage.get(this.storageKey);
            r !== null && this._resumeHelp()
        },
        showNextStep: function(n, i) {
            var u, r, f;
            (typeof i != "number" || i < 0) && (i = 500);
            u = this.currentStepIndex;
            n && (u = this.process.findStepIndex(n.context));
            u == this.currentStepIndex && (this._setCurrentStep(this.currentStepIndex + 1) ? (r = this, r.note.$target.off(".ancile.helpProviderStep"), f = function() {
                if (r.process) {
                    r._removeNote();
                    var n = r.process.steps[r.currentStepIndex],
                        t = r.currentStepIndex + 1,
                        i = r.process.steps.length;
                    r.createNote(n, t, i)
                }
            }, clearTimeout(this.stepTimeout), this.stepTimeout = setTimeout(function() {
                f()
            }, i)) : (this.ui.showSuccess(t.phraseMan.get("app.endOfHelp")), this.terminateHelp()))
        },
        showPreviousStep: function(n) {
            var t, i;
            (typeof n != "number" || n < 0) && (n = 500);
            this._setCurrentStep(this.currentStepIndex - 1) && (t = this, t.note.$target.off(".ancile.helpProviderStep"), i = function() {
                if (t.process) {
                    t._removeNote();
                    var n = t.process.steps[t.currentStepIndex],
                        i = t.currentStepIndex + 1,
                        r = t.process.steps.length;
                    t.createNote(n, i, r)
                }
            }, clearTimeout(this.stepTimeout), this.stepTimeout = setTimeout(function() {
                i()
            }, n))
        },
        initiateHelp: function() {
            var r, e, f, i;
            n("#cumulus-process-dialog").is(":visible") || (this.ui.showProcessing(t.phraseMan.get("ui.loading")), this.terminateHelp(!1), r = t.monitor.getCurrentContext(), r.setApplication({
                url: this.comm.hostUrl
            }, ANCILE_UGUIDE_OPTIONS.appContextUrlFormat), e = t.monitor.getCurrentTarget(), f = new u, f.initialize(e), i = r.toObject(), i.control.frameSelectors && (i.control.frameSelector = i.control.frameSelectors.join("|"), delete i.control.frameSelectors), this.comm.send({
                data: i,
                scope: this,
                url: this.helpByContextUrl,
                onSuccess: n.proxy(function(n) {
                    try {
                        this._onHelpRequestReturned(n, r, f);
                        this.ui.clearMessage()
                    } catch (i) {
                        this.ui.showError(t.phraseMan.get("help.provider.errorWhileProcessing") + " " + (i.message || ""));
                        t.logger.error("Error encountered when handling response in initiateHelp: " + (i.message || "but err.message was not provided"));
                        this.terminateHelp()
                    }
                }, this),
                onError: n.proxy(function(n) {
                    this.ui.showError(t.phraseMan.get("help.provider.errorWhileSearching") + " " + n);
                    this.terminateHelp()
                }, this)
            }))
        },
        terminateHelp: function(n) {
            this._removeNote();
            this._unregisterStepPerformedHandler();
            this.process = null;
            this.currentStepIndex = -1;
            this._storeCurrentStepInfo(null, null);
            n !== !1 && this.ui.toolbar.sidebar("setActiveButton", null)
        },
        createNote: function(t, i, r, u) {
            if (u) this.note.initialize(t, i, r, !0);
            else if (this.note = (new b).initialize(t, i, r), this.note.$el) {
                this.note.$el.on("previous.ancile.note", n.proxy(this.showPreviousStep, this, 100));
                this.note.$el.on("next.ancile.note", n.proxy(this.showNextStep, this, null, 100));
                this.note.$el.on("terminate.ancile.note", n.proxy(this.terminateHelp, this, !0))
            }
        },
        showSearch: function(t) {
            if (this.ui.createSearchProcessDialog(t), this.ui.searchProcessDialog) this.ui.searchProcessDialog.$searchDialog.on("processSelected.ancile.searchDialog", n.proxy(function(n, t) {
                this._handleProcessSelected(n, t, null, null, null)
            }, this))
        },
        unload: function() {
            clearTimeout(this._stepPerformedHandlerTimeoutId);
            this.terminateHelp(!1);
            this.$app.off(".helpProvider")
        },
        _setCurrentStep: function(n) {
            var t = !1;
            return typeof n == "number" && this.process !== null && n >= 0 && n < this.process.steps.length && (this.currentStepIndex = n, this._registerStepPerformedHandler(), this._storeCurrentStepInfo(this.process.guid, this.process.steps[n].guid), t = !0), t
        },
        _handleHelpKeydown: function(n, t) {
            t.which == this.helpKeys.keyCode && t.altKey == this.helpKeys.altKey && t.ctrlKey == this.helpKeys.ctrlKey && this.initiateHelp()
        },
        _onHelpRequestReturned: function(i, r, u, f) {
            var e, o;
            if (t.container.trigger("helprequestreturned.ancile"), n.isArray(i.response) && i.response.length != 0)
                if (this.ui.toolbar.sidebar("setActiveButton", "ancile-toolbar-help"), o = null, i.response.length == 1) o = i.response[0], this._setProcess(o, r, u, f), this.ui.clearMessage();
                else {
                    this.ui.createSearchProcessDialog(!0);
                    this.ui.searchProcessDialog.$searchDialog.on("processSelected.ancile.searchDialog", n.proxy(function(n, t) {
                        this._handleProcessSelected(n, t, r, u, f)
                    }, this));
                    this.ui.searchProcessDialog.setResults(i.response)
                }
            else e = typeof i.response.applicationProcessCount != "undefined" && i.response.applicationProcessCount != 0, this.showSearch(!0), this.ui.searchProcessDialog.setResults([], e), this.ui.searchProcessDialog.setShowAllLinkVisible(e)
        },
        _handleProcessSelected: function(i, r, u, f, e) {
            this.ui.showProcessing(t.phraseMan.get("ui.loading"));
            this.ui.searchProcessDialog.$searchDialog.off("processSelected.ancile.searchDialog");
            this.ui.searchProcessDialog.unload();
            this.ui.toolbar.sidebar("setActiveButton", "ancile-toolbar-help");
            var o = r.guid,
                s = r.name;
            this.comm.send({
                data: {
                    processGuid: r.guid,
                    processName: r.name,
                    processCreatedTimestamp: r.createdTimestamp,
                    processPublishedTimestamp: r.publishedTimestamp
                },
                scope: this,
                url: this.helpByIdUrl,
                onSuccess: n.proxy(function(n) {
                    var i = n.response;
                    if (typeof i != "undefined") try {
                        this._setProcess(i, u, f, e);
                        this.ui.clearMessage()
                    } catch (r) {
                        this.ui.showError(t.phraseMan.get("help.provider.errorWhileProcessing") + " " + (r.message || ""));
                        t.logger.error("Error encountered when handling response in _handleProcessSelected: " + (r.message || "but err.message was not provided"));
                        this.terminateHelp()
                    } else this.terminateHelp()
                }, this),
                onError: n.proxy(function(n) {
                    this.ui.showError(t.phraseMan.get("help.provider.errorWhileSearching") + " " + n);
                    this.terminateHelp()
                }, this)
            })
        },
        _setProcess: function(i, r, f, e) {
            var h, o;
            if (this.process || (this.process = new s), this.process.initialize(i), this._cacheProcessLoadedState(), n.isNumeric(e) ? this.currentStepIndex = e : r != null ? this.currentStepIndex = this.process.findStepIndex(r) : (this.currentStepIndex = 0, h = this._findDomElementFromStep(this.process.steps[0]), f = new u, f.initialize(h.length > 0 ? h[0] : {})), this.process.steps.length == 0) throw {
                message: t.phraseMan.get("help.provider.noStepsInProcess").replace("%processName%", this.process.name)
            };
            if (typeof this.currentStepIndex != "number" || this.currentStepIndex < 0 || this.currentStepIndex >= this.process.steps.length) throw {
                message: t.phraseMan.get("help.provider.invalidStepIndex").replace("%index%", this.currentStepIndex).replace("%maxIndex%", this.process.steps.length - 1)
            };
            this._setCurrentStep(this.currentStepIndex);
            o = this.process.steps[this.currentStepIndex];
            f.index = o.index;
            var c = this.currentStepIndex + 1,
                l = this.process.steps.length,
                a = this.note && this.note.stepGuid == o.guid;
            this.createNote(o, c, l, a);
            this._cacheSteps(this.process.steps)
        },
        _loadProcess: function(i, r, u, f) {
            i && this.comm.send({
                data: {
                    processGuid: i.guid,
                    processName: i.name,
                    processCreatedTimestamp: i.createdTimestamp,
                    processPublishedTimestamp: i.publishedTimestamp
                },
                scope: this,
                url: this.helpByIdUrl,
                onSuccess: n.proxy(function(n) {
                    var i = n.response;
                    if (typeof i != "undefined" && typeof i.steps != "undefined" && this.currentStepIndex >= 0) try {
                        this._setProcess(i, r, u, f, !0);
                        this._cacheSteps(i.steps, !0)
                    } catch (e) {
                        this.ui.showError(t.phraseMan.get("help.provider.errorWhileProcessing") + " " + (e.message || ""));
                        t.logger.error("Error encountered when handling response in _loadProcess: " + (e.message || "but err.message was not provided"));
                        this.terminateHelp()
                    }
                }, this),
                onError: n.proxy(function(n) {
                    this.ui.showError(t.phraseMan.get("help.provider.errorWhileSearching") + " " + n);
                    this.terminateHelp()
                }, this)
            })
        },
        _resumeHelp: function() {
            var i, r, u;
            this.ui.toolbar.sidebar("setActiveButton", "ancile-toolbar-help");
            i = this.storage.get(this.storageKey);
            i !== null && typeof i.steps != "undefined" ? (r = this._processSteps(i.steps), u = {
                guid: i.processGuid,
                steps: i.steps
            }, this._setProcess(u, r.context, r.elem, r.stepIndex)) : this.comm.send({
                data: {
                    processGuid: i.guid,
                    processName: i.name,
                    processCreatedTimestamp: i.createdTimestamp,
                    processPublishedTimestamp: i.publishedTimestamp
                },
                scope: this,
                url: this.helpByIdUrl,
                onSuccess: n.proxy(function(n) {
                    var r;
                    try {
                        var i = n.response;
                        if (typeof i != "undefined" && typeof i.steps != "undefined") return r = this._processSteps(i.steps), this._setProcess(i, r.context, r.elem, r.stepIndex, !0), !1;
                        !0 && this.terminateHelp()
                    } catch (u) {
                        this.ui.showError(t.phraseMan.get("help.provider.errorWhileProcessing") + " " + (u.message || ""));
                        t.logger.error("Error encountered when handling response in _resumeHelp: " + (u.message || "but err.message was not provided"));
                        this.terminateHelp()
                    }
                }, this),
                onError: n.proxy(function(n) {
                    this.ui.showError(t.phraseMan.get("help.provider.errorWhileSearching") + " " + n)
                }, this)
            })
        },
        _processSteps: function(t) {
            var o = this.storage.get(this.storageKey),
                i = {},
                r = null,
                f = null,
                s = -1;
            return n.each(t, n.proxy(function(n, t) {
                if (t.guid == o.currentStepGuid) {
                    s = n;
                    f = new e;
                    f.setApplication({
                        url: t.context.application.url
                    });
                    f.setControl({
                        selector: t.context.control.selector,
                        frameSelectors: t.context.control.frameSelectors
                    });
                    var h = this._findDomElementFromStep(t);
                    h.length > 0 && h.focus();
                    r = new u;
                    r.index = t.index;
                    r.initialize(h[0]);
                    i.context = f;
                    i.elem = r;
                    i.stepIndex = n
                }
            }, this)), i
        },
        _registerStepPerformedHandler: function() {
            clearTimeout(this._stepPerformedHandlerTimeoutId);
            var i = this.process.steps[this.currentStepIndex],
                t = this._findDomElementFromStep(i);
            if (t.length > 0) switch (i.action) {
                case "edit":
                    this._registerBlurForEditStepHandler(t, i);
                    break;
                case "leftClick":
                    t.is("a,button,input[type='button'],input[type='submit'],input[type='reset'],input[type='image']") && this._registerKeydownForClickStepHandler(t, i);
                case "rightClick":
                case "middleClick":
                    this._registerMousedownForClickStepHandler(t, i);
                    break;
                case "browse":
                case "select":
                case "check":
                case "uncheck":
                case "radioCheck":
                    t.attr("role") == "radio" || t.attr("role") == "checkbox" || t.attr("role") == "option" ? this._registerGenericEventStepHandler(t, "mousedown") : this._registerGenericEventStepHandler(t, "change");
                    break;
                case "keyPress":
                    this._registerKeydownForKeyPressStepHandler(t, i)
            }(t.length == 0 || i.hasImposter()) && (this._stepPerformedHandlerTimeoutId = setTimeout(n.proxy(this._registerStepPerformedHandler, this), 300))
        },
        _registerBlurForEditStepHandler: function(t) {
            t.off("blur.ancile.helpProviderStep").on("blur.ancile.helpProviderStep", n.proxy(function() {
                t.off(".ancile.helpProviderStep");
                this.showNextStep()
            }, this))
        },
        _registerKeydownForKeyPressStepHandler: function(t, i) {
            t.off("keydown.ancile.helpProviderStep").on("keydown.ancile.helpProviderStep", n.proxy(function(n) {
                n.keyCode == i.keyCode && n.altKey == i.altKey && n.ctrlKey == i.ctrlKey && n.shiftKey == i.shiftKey && (t.off(".ancile.helpProviderStep"), this.showNextStep(i))
            }, this))
        },
        _registerKeydownForClickStepHandler: function(t, i) {
            t.off("keydown.ancile.helpProviderStep").on("keydown.ancile.helpProviderStep", n.proxy(function(n) {
                n.keyCode == 13 && (t.off(".ancile.helpProviderStep"), this.showNextStep(i))
            }, this))
        },
        _registerMousedownForClickStepHandler: function(t, i) {
            t.off("mousedown.ancile.helpProviderStep").on("mousedown.ancile.helpProviderStep", n.proxy(function(n) {
                var r = "leftClick";
                switch (n.which) {
                    case 1:
                        r = "leftClick";
                        break;
                    case 2:
                        r = "middleClick";
                        break;
                    case 3:
                        r = "rightClick"
                }
                r == i.action && (t.off(".ancile.helpProviderStep"), this.showNextStep(i))
            }, this))
        },
        _registerGenericEventStepHandler: function(t, i) {
            t.off(i + ".ancile.helpProviderStep").on(i + ".ancile.helpProviderStep", n.proxy(function() {
                t.off(".ancile.helpProviderStep");
                this.showNextStep()
            }, this))
        },
        _unregisterStepPerformedHandler: function() {
            if (clearTimeout(this._stepPerformedHandlerTimeoutId), this.process != null && this.currentStepIndex > -1) {
                var n = this.process.steps[this.currentStepIndex],
                    t = this._findDomElementFromStep(n);
                t.off(".ancile.helpProviderStep")
            }
        },
        _removeNote: function() {
            this.note && (this.note.unload(), this.note = null)
        },
        _findDomElementFromStep: function(t) {
            var u = t.context.control.selector,
                f = n("body,frameset"),
                r = null,
                e = null,
                o = i.findFrameFromStep(t);
            return o != null && (e = n(i.getFrameContent(o)), f = n("body,frameset", e)), u == null || u == "" ? r = f : (r = n(u, f), i.isCkEditorTextElement(r) && (r = n("body", e))), r
        },
        _isAnchorToAnotherPage: function(n) {
            if (!n || !n.is("a")) return !1;
            var t = n.attr("href");
            return t.lastIndexOf("#", 0) !== 0 && t.lastIndexOf("javascript", 0) !== 0
        },
        _storeCurrentStepInfo: function(n, t) {
            var r = this.storage,
                i;
            n && t ? (i = r.get(this.storageKey) || {}, i.processGuid = n, i.currentStepGuid = t, r.set(this.storageKey, i)) : r.remove(this.storageKey)
        },
        _cacheSteps: function(n) {
            var t = this.storage,
                i = t.get(this.storageKey) || {};
            i.steps = n;
            t.set(this.storageKey, i)
        },
        _cacheProcessLoadedState: function() {
            var n = this.storage,
                t = n.get(this.storageKey) || {};
            n.set(this.storageKey, t)
        }
    };
    ht = function(n, t) {
        if (typeof n != "string" || n.length === 0) throw "A base URL pattern used to retrieve phrase resources must be provided to the phrase manager.";
        if (n.indexOf("{0}") === -1) throw "The base phrase URL must include a placeholder for the locale, in the format '{0}'";
        if (!(t instanceof p)) throw "An instance of $ANCILE_CumulusLogger must be supplied to the phrase manager.";
        this.basePhrasesUrl = n;
        this.logger = t;
        this.defaultPhrases = {};
        this.translatedPhrases = {};
        this.customPhrases = {}
    };
    ht.prototype = {
        loadPhrases: function(t, i, r) {
            if (typeof t != "string" || t.length != 5) throw "loadPhrases expects a 5 character locale ID (e.g., 'en-US')";
            if (!(r instanceof h)) throw "loadPhrases requires an instance of $ANCILE_CumulusAppComm";
            var f = i === !0,
                u = n.Deferred();
            return !f && this.defaultPhrases.meta && this.defaultPhrases.meta.locale.toLowerCase() === t.toLowerCase() ? (this.translatedPhrases = this.defaultPhrases, u.resolve()) : r.send({
                type: "Get",
                data: {},
                scope: this,
                url: this.basePhrasesUrl.replace("{0}", t),
                onSuccess: function(n) {
                    f ? this.defaultPhrases = n.response : this.translatedPhrases = n.response;
                    u.resolve()
                },
                onError: function() {
                    this.logger.warn("Translated phrase resources for " + t + " were not located.");
                    i ? this.defaultPhrases = {} : this.translatedPhrases = {};
                    u.resolve()
                }
            }), u
        },
        loadCustomPhrases: function(t, i) {
            if (typeof t != "string" || t == "") throw "loadCustomPhrases requires a URL.";
            if (!(i instanceof h)) throw "loadCustomPhrases requires an instance of $ANCILE_CumulusAppComm";
            var r = n.Deferred();
            return i.send({
                data: {},
                scope: this,
                url: t,
                onSuccess: function(n) {
                    this.customPhrases = n.response;
                    r.resolve()
                },
                onError: function() {
                    this.logger.warn("Custom phrase resources were not located.");
                    this.customPhrases = {};
                    r.resolve()
                }
            }), r
        },
        get: function(n) {
            if (typeof n != "string" || n == "") throw "phraseId must be a non-empty string";
            var i = n.split("."),
                t = this._lookupKey(i, this.customPhrases);
            return typeof t != "string" && (t = this._lookupKey(i, this.translatedPhrases)), typeof t != "string" && (this.logger.warn("No phrase found for '" + n + "'; using default."), t = this._lookupKey(i, this.defaultPhrases)), typeof t != "string" && (this.defaultPhrases && this.defaultPhrases != {} && this.logger.error("No phrase found for '" + n + "' in the default phrases collection."), t = n), t
        },
        getSection: function(t) {
            if (typeof t != "string" || t == "") throw "sectionId must be a non-empty string";
            var u = t.split("."),
                r = {},
                i = this._lookupKey(u, this.defaultPhrases);
            return typeof i == "object" && i != null ? (n.isArray(i) && (r = []), n.extend(!0, r, i), i = this._lookupKey(u, this.translatedPhrases), typeof i == "object" && i != null ? n.extend(!0, r, i) : this.logger.warn("No section found for '" + t + "'; using the default (or custom section if defined)."), i = this._lookupKey(u, this.customPhrases), typeof i == "object" && i != null && n.extend(!0, r, i)) : this.logger.error("No section found for '" + t + "' in the default phrases collection."), r
        },
        hasPhrase: function(n) {
            var i = n.split("."),
                t = this._lookupKey(i, this.customPhrases);
            return typeof t != "string" && (t = this._lookupKey(i, this.translatedPhrases)), typeof t != "string" && (t = this._lookupKey(i, this.defaultPhrases)), typeof t == "string"
        },
        _lookupKey: function(n, t) {
            for (var i = t, u = "", r = 0; r < n.length; r++)
                if (u = n[r], typeof i == "object" && i != null) i = i[u];
                else break;
            return n.length > 0 && i != null && (typeof i == "string" || typeof i == "object") ? i : null
        },
        toString: function() {
            return "ANCILE uGuide Phrase Manager"
        }
    };
    ct = function(t) {
        this.initialized = !1;
        this.meta = {};
        this.meta.version = "2.1.3";
        this.meta.product = "ANCILE uGuide";
        this.customerOptions = t;
        this.namespace = "ancile-cumulus";
        this._$ = n;
        this.options = {
            style: "light",
            enableLogging: !1,
            ignoreList: "html,body,#document,ul,ol,blockquote,form,fieldset,hr,table,thead,tbody,tfoot,tr,sub,sup,small,big,basefont",
            contentManagementDomain: "",
            helpDomain: "",
            helpKeys: {
                keyCode: 72,
                altKey: !0,
                ctrlKey: !0
            }
        }
    };
    ct.prototype = {
        initialize: function() {
            return this.initialized ? this : (this.options = this._loadOptions(), this.container = this._createContainer(), this.logger = new p(this), this.phraseMan = new ht(this.options.basePhrasesUrl, this.logger), this.cmComm = new h(this), this.helpComm = new h(this), this.storageShim = new nt(this), this.storage = new g("ancile_uguide_" + this.options.tenantRecordId, this.storageShim), this.ui = new ot(this), this.helpProvider = new st(this.options.helpKeys, this.helpComm, this.ui, this.storage), this.initialized = !0, this)
        },
        onDocReady: function() {
            this.logger.initialize();
            var t = this;
            n.when(this.cmComm.initialize(this.options.contentManagementDomain, ".cm-comm"), this.helpComm.initialize(this.options.helpDomain, ".help-comm"), this.storageShim.initialize(this.options.helpDomain, ".storage-shim")).then(function() {
                t.onCommReady()
            })
        },
        onCommReady: function() {
            var t = this;
            n.when(this.phraseMan.loadPhrases(ANCILE_UGUIDE_OPTIONS.defaultLocale, !0, this.cmComm)).then(function() {
                n.when(t.phraseMan.loadPhrases(ANCILE_UGUIDE_OPTIONS.language, !1, t.cmComm)).then(function() {
                    ANCILE_UGUIDE_OPTIONS.customTranslationsUrl ? n.when(t.phraseMan.loadCustomPhrases(ANCILE_UGUIDE_OPTIONS.customTranslationsUrl)).then(n.proxy(t.onPhrasesLoaded, t)) : t.onPhrasesLoaded()
                })
            })
        },
        onPhrasesLoaded: function() {
            this.storage.initialize();
            this.monitor = new ft;
            this.ui.initialize();
            this.helpProvider.initialize(this.options.helpDomain);
            this.logger.info(this.phraseMan.get("app.ready"));
            var t = this;
            n(window).on("resize.ancile", function(n) {
                t.onResize(n)
            });
            this.monitor.enable()
        },
        onResize: function(n) {
            if (n.target === window) this.ui.onResize(n)
        },
        unLoad: function() {
            this.ui.unLoad();
            this.helpProvider.unload();
            n("#" + this.namespace).remove();
            n(window).off("resize.ancile");
            window.ANCILE_UGUIDE_OPTIONS = null
        },
        exit: function() {
            confirm(this.phraseMan.get("app.exit")) && this.unLoad()
        },
        _loadOptions: function() {
            var n = this.options;
            for (var t in this.customerOptions) n[t] = this.customerOptions[t];
            return n
        },
        _createContainer: function() {
            var t = n("#" + this.namespace);
            return t.length > 0 ? t : n("<div/>").attr("id", this.namespace).addClass(this.namespace).appendTo("body")
        },
        version: function() {
            return this.meta.version
        },
        product: function() {
            return this.meta.product
        },
        toString: function() {
            return this.product() + " v" + this.version()
        }
    };
    window.$ANCILE_getAppInstance = function() {
        return t
    };
    i = new d;
    t = new ct(window.ANCILE_UGUIDE_OPTIONS || {});
    t.initialize();
    n(document).ready(function() {
        t.onDocReady()
    })
})(ANCILE_UGUIDE_JQUERY)