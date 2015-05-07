function stackBlur(t) {
        
        function e(t) {
            return RegExp("msie" + (isNaN(t) ? "" : "\\s" + t), "i").test(navigator.userAgent)
        }
        
        var i = {
            postId: "",
            radius: 1,
            mul_table: [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259],
            shg_table: [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24],
            
            styles: {
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundAttachment: "fixed",
                width: "100%",
                minHeight: "100%",
                WebkitBackgroundSize: "cover",
                MozBackgroundSize: "cover",
                OBackgroundSize: "cover",
                backgroundSize: "cover"
            }
        };
        
        for (var n in t) i[n] = t[n];
        var o = i.radius,
            r = document.createElement("img"),
            a = function() {
                console.log("Using " + i.postId), i.width = i.passedWidth || r.naturalWidth, i.height = i.passedHeight || r.naturalHeight;
                var t = document.createElement("canvas");
                t.id = "canvas" + i.postId, t.style.display = "none", t.style.width = i.width + "px", t.style.height = i.height + "px", t.width = i.width, t.height = i.height, document.body.insertBefore(t, document.body.childNodes[0]);
                var e = t.getContext("2d");
                if (e.clearRect(0, 0, i.width, i.height), e.drawImage(r, 0, 0), isNaN(o) || 1 > o) throw new Error("Radius required.");
                l(function() {
                    h(t.toDataURL("image/jpg")), r = null
                }, i)
            };
        if (e(10) && !i.passedWidth) {
            var s = new XMLHttpRequest;
            s.onload = function() {
                var t = URL.createObjectURL(this.response);
                r.src = t, r.crossOrigin = "", r.onload = a, setTimeout(function() {
                    URL.revokeObjectURL(t)
                }, 2e3)
            }, s.open("GET", i.path, !0), s.responseType = "blob", s.send()
        } else console.log("Loading " + i.postId, i.path), r.onload = a, r.src = i.path, i.width || (r.crossOrigin = "Anonymous");
        var l = function(t) {
                var e, n = document.getElementById("canvas" + i.postId),
                    o = n.getContext("2d"),
                    r = i.radius,
                    a = 0,
                    s = 0,
                    l = i.width,
                    c = i.height;
                if (!(isNaN(r) || 1 > r)) {
                    r |= 0;
                    try {
                        try {
                            e = o.getImageData(a, s, l, c)
                        } catch (d) {
                            try {
                                netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead"), e = o.getImageData(a, s, l, c)
                            } catch (h) {
                                throw new Error("unable to access image data: " + d + " " + h)
                            }
                        }
                    } catch (d) {
                        return console.log(d), void 0
                    }
                    var p, g, f, m, v, y, b, w, k, S, C, E, A, T, I, B, x, O, L, R, D = e.data,
                        M = r + r + 1,
                        P = l - 1,
                        j = c - 1,
                        U = r + 1,
                        _ = U * (U + 1) / 2,
                        H = u(),
                        W = H;
                    for (f = 1; M > f; f++)
                        if (W = W.next = u(), f == U) var N = W;
                    W.next = H;
                    var $ = null,
                        z = null;
                    b = y = 0;
                    var Q = i.mul_table[r],
                        q = i.shg_table[r];
                    for (g = 0; c > g; g++) {
                        for (T = I = B = w = k = S = 0, C = U * (x = D[y]), E = U * (O = D[y + 1]), A = U * (L = D[y + 2]), w += _ * x, k += _ * O, S += _ * L, W = H, f = 0; U > f; f++) W.r = x, W.g = O, W.b = L, W = W.next;
                        for (f = 1; U > f; f++) m = y + ((f > P ? P : f) << 2), w += (W.r = x = D[m]) * (R = U - f), k += (W.g = O = D[m + 1]) * R, S += (W.b = L = D[m + 2]) * R, T += x, I += O, B += L, W = W.next;
                        for ($ = H, z = N, p = 0; l > p; p++) D[y] = w * Q >> q, D[y + 1] = k * Q >> q, D[y + 2] = S * Q >> q, w -= C, k -= E, S -= A, C -= $.r, E -= $.g, A -= $.b, m = b + ((m = p + r + 1) < P ? m : P) << 2, T += $.r = D[m], I += $.g = D[m + 1], B += $.b = D[m + 2], w += T, k += I, S += B, $ = $.next, C += x = z.r, E += O = z.g, A += L = z.b, T -= x, I -= O, B -= L, z = z.next, y += 4;
                        b += l
                    }
                    for (p = 0; l > p; p++) {
                        for (I = B = T = k = S = w = 0, y = p << 2, C = U * (x = D[y]), E = U * (O = D[y + 1]), A = U * (L = D[y + 2]), w += _ * x, k += _ * O, S += _ * L, W = H, f = 0; U > f; f++) W.r = x, W.g = O, W.b = L, W = W.next;
                        for (v = l, f = 1; r >= f; f++) y = v + p << 2, w += (W.r = x = D[y]) * (R = U - f), k += (W.g = O = D[y + 1]) * R, S += (W.b = L = D[y + 2]) * R, T += x, I += O, B += L, W = W.next, j > f && (v += l);
                        for (y = p, $ = H, z = N, g = 0; c > g; g++) m = y << 2, D[m] = w * Q >> q, D[m + 1] = k * Q >> q, D[m + 2] = S * Q >> q, w -= C, k -= E, S -= A, C -= $.r, E -= $.g, A -= $.b, m = p + ((m = g + U) < j ? m : j) * l << 2, w += T += $.r = D[m], k += I += $.g = D[m + 1], S += B += $.b = D[m + 2], $ = $.next, C += x = z.r, E += O = z.g, A += L = z.b, T -= x, I -= O, B -= L, z = z.next, y += l
                    }
                    o.putImageData(e, a, s), t()
                }
            },
            u = function() {
                return {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0,
                    next: null
                }
            },
            d = function(t) {
                c = document.getElementById(t), c.parentNode.removeChild(c)
            },
            h = function(t) {
                try {
                    console.log("Adding image to ", i.postId), console.log(t), i.el[0].style.backgroundImage = 'url("' + t + '")', localStorage[i.postId] = t
                } catch (e) {
                    console.log(e)
                }
                d("canvas" + i.postId)
            }
    }! function(t, e, i) {
        "use strict";
        e.infinitescroll = function(t, i, n) {
            this.element = e(n), this._create(t, i) || (this.failed = !0)
        }, e.infinitescroll.defaults = {
            loading: {
                finished: i,
                finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>",
                img: "data:image/gif;base64,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",
                msg: null,
                msgText: "<em>Loading the next set of posts...</em>",
                selector: null,
                speed: "fast",
                start: i
            },
            state: {
                isDuringAjax: !1,
                isInvalidPage: !1,
                isDestroyed: !1,
                isDone: !1,
                isPaused: !1,
                isBeyondMaxPage: !1,
                currPage: 1
            },
            debug: !1,
            behavior: i,
            binder: e(t),
            nextSelector: "div.navigation a:first",
            navSelector: "div.navigation",
            contentSelector: null,
            extraScrollPx: 150,
            itemSelector: "div.post",
            animate: !1,
            pathParse: i,
            dataType: "html",
            appendCallback: !0,
            bufferPx: 40,
            errorCallback: function() {},
            infid: 0,
            pixelsFromNavToBottom: i,
            path: i,
            prefill: !1,
            maxPage: i
        }, e.infinitescroll.prototype = {
            _binding: function(t) {
                var e = this,
                    n = e.options;
                return n.v = "2.0b2.120520", n.behavior && this["_binding_" + n.behavior] !== i ? (this["_binding_" + n.behavior].call(this), void 0) : "bind" !== t && "unbind" !== t ? (this._debug("Binding value  " + t + " not valid"), !1) : ("unbind" === t ? this.options.binder.unbind("smartscroll.infscr." + e.options.infid) : this.options.binder[t]("smartscroll.infscr." + e.options.infid, function() {
                    e.scroll()
                }), this._debug("Binding", t), void 0)
            },
            _create: function(n, o) {
                var r = e.extend(!0, {}, e.infinitescroll.defaults, n);
                this.options = r;
                var a = e(t),
                    s = this;
                if (!s._validate(n)) return !1;
                var l = e(r.nextSelector).attr("href");
                if (!l) return this._debug("Navigation selector not found"), !1;
                r.path = r.path || this._determinepath(l), r.contentSelector = r.contentSelector || this.element, r.loading.selector = r.loading.selector || r.contentSelector, r.loading.msg = r.loading.msg || e('<div id="infscr-loading"><img alt="Loading..." src="' + r.loading.img + '" /><div>' + r.loading.msgText + "</div></div>"), (new Image).src = r.loading.img, r.pixelsFromNavToBottom === i && (r.pixelsFromNavToBottom = e(document).height() - e(r.navSelector).offset().top, this._debug("pixelsFromNavToBottom: " + r.pixelsFromNavToBottom));
                var c = this;
                return r.loading.start = r.loading.start || function() {
                    e(r.navSelector).hide(), r.loading.msg.appendTo(r.loading.selector).show(r.loading.speed, e.proxy(function() {
                        this.beginAjax(r)
                    }, c))
                }, r.loading.finished = r.loading.finished || function() {
                    r.state.isBeyondMaxPage || r.loading.msg.fadeOut(r.loading.speed)
                }, r.callback = function(t, n, s) {
                    r.behavior && t["_callback_" + r.behavior] !== i && t["_callback_" + r.behavior].call(e(r.contentSelector)[0], n, s), o && o.call(e(r.contentSelector)[0], n, r, s), r.prefill && a.bind("resize.infinite-scroll", t._prefill)
                }, n.debug && (!Function.prototype.bind || "object" != typeof console && "function" != typeof console || "object" != typeof console.log || ["log", "info", "warn", "error", "assert", "dir", "clear", "profile", "profileEnd"].forEach(function(t) {
                    console[t] = this.call(console[t], console)
                }, Function.prototype.bind)), this._setup(), r.prefill && this._prefill(), !0
            },
            _prefill: function() {
                function i() {
                    return n.options.contentSelector.height() <= o.height()
                }
                var n = this,
                    o = e(t);
                this._prefill = function() {
                    i() && n.scroll(), o.bind("resize.infinite-scroll", function() {
                        i() && (o.unbind("resize.infinite-scroll"), n.scroll())
                    })
                }, this._prefill()
            },
            _debug: function() {
                !0 === this.options.debug && ("undefined" != typeof console && "function" == typeof console.log ? 1 === Array.prototype.slice.call(arguments).length && "string" == typeof Array.prototype.slice.call(arguments)[0] ? console.log(Array.prototype.slice.call(arguments).toString()) : console.log(Array.prototype.slice.call(arguments)) : Function.prototype.bind || "undefined" == typeof console || "object" != typeof console.log || Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments)))
            },
            _determinepath: function(t) {
                var e = this.options;
                if (e.behavior && this["_determinepath_" + e.behavior] !== i) return this["_determinepath_" + e.behavior].call(this, t);
                if (e.pathParse) return this._debug("pathParse manual"), e.pathParse(t, this.options.state.currPage + 1);
                if (t.match(/^(.*?)\b2\b(.*?$)/)) t = t.match(/^(.*?)\b2\b(.*?$)/).slice(1);
                else if (t.match(/^(.*?)2(.*?$)/)) {
                    if (t.match(/^(.*?page=)2(\/.*|$)/)) return t = t.match(/^(.*?page=)2(\/.*|$)/).slice(1);
                    t = t.match(/^(.*?)2(.*?$)/).slice(1)
                } else {
                    if (t.match(/^(.*?page=)1(\/.*|$)/)) return t = t.match(/^(.*?page=)1(\/.*|$)/).slice(1);
                    this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com."), e.state.isInvalidPage = !0
                }
                return this._debug("determinePath", t), t
            },
            _error: function(t) {
                var e = this.options;
                return e.behavior && this["_error_" + e.behavior] !== i ? (this["_error_" + e.behavior].call(this, t), void 0) : ("destroy" !== t && "end" !== t && (t = "unknown"), this._debug("Error", t), ("end" === t || e.state.isBeyondMaxPage) && this._showdonemsg(), e.state.isDone = !0, e.state.currPage = 1, e.state.isPaused = !1, e.state.isBeyondMaxPage = !1, this._binding("unbind"), void 0)
            },
            _loadcallback: function(n, o, r) {
                var a, s = this.options,
                    l = this.options.callback,
                    c = s.state.isDone ? "done" : s.appendCallback ? "append" : "no-append";
                if (s.behavior && this["_loadcallback_" + s.behavior] !== i) return this["_loadcallback_" + s.behavior].call(this, n, o), void 0;
                switch (c) {
                    case "done":
                        return this._showdonemsg(), !1;
                    case "no-append":
                        "html" === s.dataType && (o = "<div>" + o + "</div>", o = e(o).find(s.itemSelector));
                        break;
                    case "append":
                        var u = n.children();
                        if (0 === u.length) return this._error("end");
                        for (a = document.createDocumentFragment(); n[0].firstChild;) a.appendChild(n[0].firstChild);
                        this._debug("contentSelector", e(s.contentSelector)[0]), o = u.get()
                }
                if (s.loading.finished.call(e(s.contentSelector)[0], s), s.animate) {
                    var d = e(t).scrollTop() + e(s.loading.msg).height() + s.extraScrollPx + "px";
                    e("html,body").animate({
                        scrollTop: d
                    }, 800, function() {
                        s.state.isDuringAjax = !1
                    })
                }
                s.animate || (s.state.isDuringAjax = !1), l(this, o, r), s.prefill && this._prefill()
            },
            _nearbottom: function() {
                var n = this.options,
                    o = 0 + e(document).height() - n.binder.scrollTop() - e(t).height();
                return n.behavior && this["_nearbottom_" + n.behavior] !== i ? this["_nearbottom_" + n.behavior].call(this) : (this._debug("math:", o, n.pixelsFromNavToBottom), o - n.bufferPx < n.pixelsFromNavToBottom)
            },
            _pausing: function(t) {
                var e = this.options;
                if (e.behavior && this["_pausing_" + e.behavior] !== i) return this["_pausing_" + e.behavior].call(this, t), void 0;
                switch ("pause" !== t && "resume" !== t && null !== t && this._debug("Invalid argument. Toggling pause value instead"), t = !t || "pause" !== t && "resume" !== t ? "toggle" : t) {
                    case "pause":
                        e.state.isPaused = !0;
                        break;
                    case "resume":
                        e.state.isPaused = !1;
                        break;
                    case "toggle":
                        e.state.isPaused = !e.state.isPaused
                }
                return this._debug("Paused", e.state.isPaused), !1
            },
            _setup: function() {
                var t = this.options;
                return t.behavior && this["_setup_" + t.behavior] !== i ? (this["_setup_" + t.behavior].call(this), void 0) : (this._binding("bind"), !1)
            },
            _showdonemsg: function() {
                var t = this.options;
                return t.behavior && this["_showdonemsg_" + t.behavior] !== i ? (this["_showdonemsg_" + t.behavior].call(this), void 0) : (t.loading.msg.find("img").hide().parent().find("div").html(t.loading.finishedMsg).animate({
                    opacity: 1
                }, 2e3, function() {
                    e(this).parent().fadeOut(t.loading.speed)
                }), t.errorCallback.call(e(t.contentSelector)[0], "done"), void 0)
            },
            _validate: function(t) {
                for (var i in t)
                    if (i.indexOf && i.indexOf("Selector") > -1 && 0 === e(t[i]).length) return this._debug("Your " + i + " found no elements."), !1;
                return !0
            },
            bind: function() {
                this._binding("bind")
            },
            destroy: function() {
                return this.options.state.isDestroyed = !0, this.options.loading.finished(), this._error("destroy")
            },
            pause: function() {
                this._pausing("pause")
            },
            resume: function() {
                this._pausing("resume")
            },
            beginAjax: function(t) {
                var n, o, r, a, s = this,
                    l = t.path;
                if (t.state.currPage++, t.maxPage != i && t.state.currPage > t.maxPage) return t.state.isBeyondMaxPage = !0, this.destroy(), void 0;
                switch (n = e(t.contentSelector).is("table, tbody") ? e("<tbody/>") : e("<div/>"), o = "function" == typeof l ? l(t.state.currPage) : l.join(t.state.currPage), s._debug("heading into ajax", o), r = "html" === t.dataType || "json" === t.dataType ? t.dataType : "html+callback", t.appendCallback && "html" === t.dataType && (r += "+callback"), r) {
                    case "html+callback":
                        s._debug("Using HTML via .load() method"), n.load(o + " " + t.itemSelector, i, function(t) {
                            s._loadcallback(n, t, o)
                        });
                        break;
                    case "html":
                        s._debug("Using " + r.toUpperCase() + " via $.ajax() method"), e.ajax({
                            url: o,
                            dataType: t.dataType,
                            complete: function(t, e) {
                                a = "undefined" != typeof t.isResolved ? t.isResolved() : "success" === e || "notmodified" === e, a ? s._loadcallback(n, t.responseText, o) : s._error("end")
                            }
                        });
                        break;
                    case "json":
                        s._debug("Using " + r.toUpperCase() + " via $.ajax() method"), e.ajax({
                            dataType: "json",
                            type: "GET",
                            url: o,
                            success: function(e, r, l) {
                                if (a = "undefined" != typeof l.isResolved ? l.isResolved() : "success" === r || "notmodified" === r, t.appendCallback)
                                    if (t.template !== i) {
                                        var c = t.template(e);
                                        n.append(c), a ? s._loadcallback(n, c) : s._error("end")
                                    } else s._debug("template must be defined."), s._error("end");
                                else a ? s._loadcallback(n, e, o) : s._error("end")
                            },
                            error: function() {
                                s._debug("JSON ajax request failed."), s._error("end")
                            }
                        })
                }
            },
            retrieve: function(t) {
                t = t || null;
                var n = this,
                    o = n.options;
                return o.behavior && this["retrieve_" + o.behavior] !== i ? (this["retrieve_" + o.behavior].call(this, t), void 0) : o.state.isDestroyed ? (this._debug("Instance is destroyed"), !1) : (o.state.isDuringAjax = !0, o.loading.start.call(e(o.contentSelector)[0], o), void 0)
            },
            scroll: function() {
                var t = this.options,
                    e = t.state;
                return t.behavior && this["scroll_" + t.behavior] !== i ? (this["scroll_" + t.behavior].call(this), void 0) : (e.isDuringAjax || e.isInvalidPage || e.isDone || e.isDestroyed || e.isPaused || this._nearbottom() && this.retrieve(), void 0)
            },
            toggle: function() {
                this._pausing()
            },
            unbind: function() {
                this._binding("unbind")
            },
            update: function(t) {
                e.isPlainObject(t) && (this.options = e.extend(!0, this.options, t))
            }
        }, e.fn.infinitescroll = function(t, i) {
            var n = typeof t;
            switch (n) {
                case "string":
                    var o = Array.prototype.slice.call(arguments, 1);
                    this.each(function() {
                        var i = e.data(this, "infinitescroll");
                        return i ? e.isFunction(i[t]) && "_" !== t.charAt(0) ? (i[t].apply(i, o), void 0) : !1 : !1
                    });
                    break;
                case "object":
                    this.each(function() {
                        var n = e.data(this, "infinitescroll");
                        n ? n.update(t) : (n = new e.infinitescroll(t, i, this), n.failed || e.data(this, "infinitescroll", n))
                    })
            }
            return this
        };
        var n, o = e.event;
        o.special.smartscroll = {
            setup: function() {
                e(this).bind("scroll", o.special.smartscroll.handler)
            },
            teardown: function() {
                e(this).unbind("scroll", o.special.smartscroll.handler)
            },
            handler: function(t, i) {
                var o = this,
                    r = arguments;
                t.type = "smartscroll", n && clearTimeout(n), n = setTimeout(function() {
                    e(o).trigger("smartscroll", r)
                }, "execAsap" === i ? 0 : 100)
            }
        }, e.fn.smartscroll = function(t) {
            return t ? this.bind("smartscroll", t) : this.trigger("smartscroll", ["execAsap"])
        }
    }(window, jQuery),
    function(t, e) {
        "use strict";
        var i = t.History = t.History || {},
            n = t.jQuery;
        if ("undefined" != typeof i.Adapter) throw new Error("History.js Adapter has already been loaded...");
        i.Adapter = {
            bind: function(t, e, i) {
                n(t).bind(e, i)
            },
            trigger: function(t, e, i) {
                n(t).trigger(e, i)
            },
            extractEventData: function(t, i, n) {
                var o = i && i.originalEvent && i.originalEvent[t] || n && n[t] || e;
                return o
            },
            onDomLoad: function(t) {
                n(t)
            }
        }, "undefined" != typeof i.init && i.init()
    }(window),
    function(t, e) {
        "use strict";
        var i = t.console || e,
            n = t.document,
            o = t.navigator,
            r = !1,
            a = t.setTimeout,
            s = t.clearTimeout,
            l = t.setInterval,
            c = t.clearInterval,
            u = t.JSON,
            d = t.alert,
            h = t.History = t.History || {},
            p = t.history;
        try {
            r = t.sessionStorage, r.setItem("TEST", "1"), r.removeItem("TEST")
        } catch (g) {
            r = !1
        }
        if (u.stringify = u.stringify || u.encode, u.parse = u.parse || u.decode, "undefined" != typeof h.init) throw new Error("History.js Core has already been loaded...");
        h.init = function() {
            return "undefined" == typeof h.Adapter ? !1 : ("undefined" != typeof h.initCore && h.initCore(), "undefined" != typeof h.initHtml4 && h.initHtml4(), !0)
        }, h.initCore = function() {
            if ("undefined" != typeof h.initCore.initialized) return !1;
            if (h.initCore.initialized = !0, h.options = h.options || {}, h.options.hashChangeInterval = h.options.hashChangeInterval || 100, h.options.safariPollInterval = h.options.safariPollInterval || 500, h.options.doubleCheckInterval = h.options.doubleCheckInterval || 500, h.options.disableSuid = h.options.disableSuid || !1, h.options.storeInterval = h.options.storeInterval || 1e3, h.options.busyDelay = h.options.busyDelay || 250, h.options.debug = h.options.debug || !1, h.options.initialTitle = h.options.initialTitle || n.title, h.options.html4Mode = h.options.html4Mode || !1, h.options.delayInit = h.options.delayInit || !1, h.intervalList = [], h.clearAllIntervals = function() {
                    var t, e = h.intervalList;
                    if ("undefined" != typeof e && null !== e) {
                        for (t = 0; t < e.length; t++) c(e[t]);
                        h.intervalList = null
                    }
                }, h.debug = function() {
                    (h.options.debug || !1) && h.log.apply(h, arguments)
                }, h.log = function() {
                    var t, e, o, r, a, s = "undefined" != typeof i && "undefined" != typeof i.log && "undefined" != typeof i.log.apply,
                        l = n.getElementById("log");
                    for (s ? (r = Array.prototype.slice.call(arguments), t = r.shift(), "undefined" != typeof i.debug ? i.debug.apply(i, [t, r]) : i.log.apply(i, [t, r])) : t = "\n" + arguments[0] + "\n", e = 1, o = arguments.length; o > e; ++e) {
                        if (a = arguments[e], "object" == typeof a && "undefined" != typeof u) try {
                            a = u.stringify(a)
                        } catch (c) {}
                        t += "\n" + a + "\n"
                    }
                    return l ? (l.value += t + "\n-----\n", l.scrollTop = l.scrollHeight - l.clientHeight) : s || d(t), !0
                }, h.getInternetExplorerMajorVersion = function() {
                    var t = h.getInternetExplorerMajorVersion.cached = "undefined" != typeof h.getInternetExplorerMajorVersion.cached ? h.getInternetExplorerMajorVersion.cached : function() {
                        for (var t = 3, e = n.createElement("div"), i = e.getElementsByTagName("i");
                            (e.innerHTML = "<!--[if gt IE " + ++t + "]><i></i><![endif]-->") && i[0];);
                        return t > 4 ? t : !1
                    }();
                    return t
                }, h.isInternetExplorer = function() {
                    var t = h.isInternetExplorer.cached = "undefined" != typeof h.isInternetExplorer.cached ? h.isInternetExplorer.cached : Boolean(h.getInternetExplorerMajorVersion());
                    return t
                }, h.emulated = h.options.html4Mode ? {
                    pushState: !0,
                    hashChange: !0
                } : {
                    pushState: !Boolean(t.history && t.history.pushState && t.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(o.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(o.userAgent)),
                    hashChange: Boolean(!("onhashchange" in t || "onhashchange" in n) || h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8)
                }, h.enabled = !h.emulated.pushState, h.bugs = {
                    setHash: Boolean(!h.emulated.pushState && "Apple Computer, Inc." === o.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(o.userAgent)),
                    safariPoll: Boolean(!h.emulated.pushState && "Apple Computer, Inc." === o.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(o.userAgent)),
                    ieDoubleCheck: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8),
                    hashEscape: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 7)
                }, h.isEmptyObject = function(t) {
                    for (var e in t)
                        if (t.hasOwnProperty(e)) return !1;
                    return !0
                }, h.cloneObject = function(t) {
                    var e, i;
                    return t ? (e = u.stringify(t), i = u.parse(e)) : i = {}, i
                }, h.getRootUrl = function() {
                    var t = n.location.protocol + "//" + (n.location.hostname || n.location.host);
                    return n.location.port && (t += ":" + n.location.port), t += "/"
                }, h.getBaseHref = function() {
                    var t = n.getElementsByTagName("base"),
                        e = null,
                        i = "";
                    return 1 === t.length && (e = t[0], i = e.href.replace(/[^\/]+$/, "")), i = i.replace(/\/+$/, ""), i && (i += "/"), i
                }, h.getBaseUrl = function() {
                    var t = h.getBaseHref() || h.getBasePageUrl() || h.getRootUrl();
                    return t
                }, h.getPageUrl = function() {
                    var t, e = h.getState(!1, !1),
                        i = (e || {}).url || h.getLocationHref();
                    return t = i.replace(/\/+$/, "").replace(/[^\/]+$/, function(t) {
                        return /\./.test(t) ? t : t + "/"
                    })
                }, h.getBasePageUrl = function() {
                    var t = h.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function(t) {
                        return /[^\/]$/.test(t) ? "" : t
                    }).replace(/\/+$/, "") + "/";
                    return t
                }, h.getFullUrl = function(t, e) {
                    var i = t,
                        n = t.substring(0, 1);
                    return e = "undefined" == typeof e ? !0 : e, /[a-z]+\:\/\//.test(t) || (i = "/" === n ? h.getRootUrl() + t.replace(/^\/+/, "") : "#" === n ? h.getPageUrl().replace(/#.*/, "") + t : "?" === n ? h.getPageUrl().replace(/[\?#].*/, "") + t : e ? h.getBaseUrl() + t.replace(/^(\.\/)+/, "") : h.getBasePageUrl() + t.replace(/^(\.\/)+/, "")), i.replace(/\#$/, "")
                }, h.getShortUrl = function(t) {
                    var e = t,
                        i = h.getBaseUrl(),
                        n = h.getRootUrl();
                    return h.emulated.pushState && (e = e.replace(i, "")), e = e.replace(n, "/"), h.isTraditionalAnchor(e) && (e = "./" + e), e = e.replace(/^(\.\/)+/g, "./").replace(/\#$/, "")
                }, h.getLocationHref = function(t) {
                    return t = t || n, t.URL === t.location.href ? t.location.href : t.location.href === decodeURIComponent(t.URL) ? t.URL : t.location.hash && decodeURIComponent(t.location.href.replace(/^[^#]+/, "")) === t.location.hash ? t.location.href : -1 == t.URL.indexOf("#") && -1 != t.location.href.indexOf("#") ? t.location.href : t.URL || t.location.href
                }, h.store = {}, h.idToState = h.idToState || {}, h.stateToId = h.stateToId || {}, h.urlToId = h.urlToId || {}, h.storedStates = h.storedStates || [], h.savedStates = h.savedStates || [], h.normalizeStore = function() {
                    h.store.idToState = h.store.idToState || {}, h.store.urlToId = h.store.urlToId || {}, h.store.stateToId = h.store.stateToId || {}
                }, h.getState = function(t, e) {
                    "undefined" == typeof t && (t = !0), "undefined" == typeof e && (e = !0);
                    var i = h.getLastSavedState();
                    return !i && e && (i = h.createStateObject()), t && (i = h.cloneObject(i), i.url = i.cleanUrl || i.url), i
                }, h.getIdByState = function(t) {
                    var e, i = h.extractId(t.url);
                    if (!i)
                        if (e = h.getStateString(t), "undefined" != typeof h.stateToId[e]) i = h.stateToId[e];
                        else if ("undefined" != typeof h.store.stateToId[e]) i = h.store.stateToId[e];
                    else {
                        for (; i = (new Date).getTime() + String(Math.random()).replace(/\D/g, ""), "undefined" != typeof h.idToState[i] || "undefined" != typeof h.store.idToState[i];);
                        h.stateToId[e] = i, h.idToState[i] = t
                    }
                    return i
                }, h.normalizeState = function(t) {
                    var e, i;
                    return t && "object" == typeof t || (t = {}), "undefined" != typeof t.normalized ? t : (t.data && "object" == typeof t.data || (t.data = {}), e = {}, e.normalized = !0, e.title = t.title || "", e.url = h.getFullUrl(t.url ? t.url : h.getLocationHref()), e.hash = h.getShortUrl(e.url), e.data = h.cloneObject(t.data), e.id = h.getIdByState(e), e.cleanUrl = e.url.replace(/\??\&_suid.*/, ""), e.url = e.cleanUrl, i = !h.isEmptyObject(e.data), (e.title || i) && h.options.disableSuid !== !0 && (e.hash = h.getShortUrl(e.url).replace(/\??\&_suid.*/, ""), /\?/.test(e.hash) || (e.hash += "?"), e.hash += "&_suid=" + e.id), e.hashedUrl = h.getFullUrl(e.hash), (h.emulated.pushState || h.bugs.safariPoll) && h.hasUrlDuplicate(e) && (e.url = e.hashedUrl), e)
                }, h.createStateObject = function(t, e, i) {
                    var n = {
                        data: t,
                        title: e,
                        url: i
                    };
                    return n = h.normalizeState(n)
                }, h.getStateById = function(t) {
                    t = String(t);
                    var i = h.idToState[t] || h.store.idToState[t] || e;
                    return i
                }, h.getStateString = function(t) {
                    var e, i, n;
                    return e = h.normalizeState(t), i = {
                        data: e.data,
                        title: t.title,
                        url: t.url
                    }, n = u.stringify(i)
                }, h.getStateId = function(t) {
                    var e, i;
                    return e = h.normalizeState(t), i = e.id
                }, h.getHashByState = function(t) {
                    var e, i;
                    return e = h.normalizeState(t), i = e.hash
                }, h.extractId = function(t) {
                    var e, i, n, o;
                    return o = -1 != t.indexOf("#") ? t.split("#")[0] : t, i = /(.*)\&_suid=([0-9]+)$/.exec(o), n = i ? i[1] || t : t, e = i ? String(i[2] || "") : "", e || !1
                }, h.isTraditionalAnchor = function(t) {
                    var e = !/[\/\?\.]/.test(t);
                    return e
                }, h.extractState = function(t, e) {
                    var i, n, o = null;
                    return e = e || !1, i = h.extractId(t), i && (o = h.getStateById(i)), o || (n = h.getFullUrl(t), i = h.getIdByUrl(n) || !1, i && (o = h.getStateById(i)), !o && e && !h.isTraditionalAnchor(t) && (o = h.createStateObject(null, null, n))), o
                }, h.getIdByUrl = function(t) {
                    var i = h.urlToId[t] || h.store.urlToId[t] || e;
                    return i
                }, h.getLastSavedState = function() {
                    return h.savedStates[h.savedStates.length - 1] || e
                }, h.getLastStoredState = function() {
                    return h.storedStates[h.storedStates.length - 1] || e
                }, h.hasUrlDuplicate = function(t) {
                    var e, i = !1;
                    return e = h.extractState(t.url), i = e && e.id !== t.id
                }, h.storeState = function(t) {
                    return h.urlToId[t.url] = t.id, h.storedStates.push(h.cloneObject(t)), t
                }, h.isLastSavedState = function(t) {
                    var e, i, n, o = !1;
                    return h.savedStates.length && (e = t.id, i = h.getLastSavedState(), n = i.id, o = e === n), o
                }, h.saveState = function(t) {
                    return h.isLastSavedState(t) ? !1 : (h.savedStates.push(h.cloneObject(t)), !0)
                }, h.getStateByIndex = function(t) {
                    var e = null;
                    return e = "undefined" == typeof t ? h.savedStates[h.savedStates.length - 1] : 0 > t ? h.savedStates[h.savedStates.length + t] : h.savedStates[t]
                }, h.getCurrentIndex = function() {
                    var t = null;
                    return t = h.savedStates.length < 1 ? 0 : h.savedStates.length - 1
                }, h.getHash = function(t) {
                    var e, i = h.getLocationHref(t);
                    return e = h.getHashByUrl(i)
                }, h.unescapeHash = function(t) {
                    var e = h.normalizeHash(t);
                    return e = decodeURIComponent(e)
                }, h.normalizeHash = function(t) {
                    var e = t.replace(/[^#]*#/, "").replace(/#.*/, "");
                    return e
                }, h.setHash = function(t, e) {
                    var i, o;
                    return e !== !1 && h.busy() ? (h.pushQueue({
                        scope: h,
                        callback: h.setHash,
                        args: arguments,
                        queue: e
                    }), !1) : (h.busy(!0), i = h.extractState(t, !0), i && !h.emulated.pushState ? h.pushState(i.data, i.title, i.url, !1) : h.getHash() !== t && (h.bugs.setHash ? (o = h.getPageUrl(), h.pushState(null, null, o + "#" + t, !1)) : n.location.hash = t), h)
                }, h.escapeHash = function(e) {
                    var i = h.normalizeHash(e);
                    return i = t.encodeURIComponent(i), h.bugs.hashEscape || (i = i.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), i
                }, h.getHashByUrl = function(t) {
                    var e = String(t).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
                    return e = h.unescapeHash(e)
                }, h.setTitle = function(t) {
                    var e, i = t.title;
                    i || (e = h.getStateByIndex(0), e && e.url === t.url && (i = e.title || h.options.initialTitle));
                    try {
                        n.getElementsByTagName("title")[0].innerHTML = i.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
                    } catch (o) {}
                    return n.title = i, h
                }, h.queues = [], h.busy = function(t) {
                    if ("undefined" != typeof t ? h.busy.flag = t : "undefined" == typeof h.busy.flag && (h.busy.flag = !1), !h.busy.flag) {
                        s(h.busy.timeout);
                        var e = function() {
                            var t, i, n;
                            if (!h.busy.flag)
                                for (t = h.queues.length - 1; t >= 0; --t) i = h.queues[t], 0 !== i.length && (n = i.shift(), h.fireQueueItem(n), h.busy.timeout = a(e, h.options.busyDelay))
                        };
                        h.busy.timeout = a(e, h.options.busyDelay)
                    }
                    return h.busy.flag
                }, h.busy.flag = !1, h.fireQueueItem = function(t) {
                    return t.callback.apply(t.scope || h, t.args || [])
                }, h.pushQueue = function(t) {
                    return h.queues[t.queue || 0] = h.queues[t.queue || 0] || [], h.queues[t.queue || 0].push(t), h
                }, h.queue = function(t, e) {
                    return "function" == typeof t && (t = {
                        callback: t
                    }), "undefined" != typeof e && (t.queue = e), h.busy() ? h.pushQueue(t) : h.fireQueueItem(t), h
                }, h.clearQueue = function() {
                    return h.busy.flag = !1, h.queues = [], h
                }, h.stateChanged = !1, h.doubleChecker = !1, h.doubleCheckComplete = function() {
                    return h.stateChanged = !0, h.doubleCheckClear(), h
                }, h.doubleCheckClear = function() {
                    return h.doubleChecker && (s(h.doubleChecker), h.doubleChecker = !1), h
                }, h.doubleCheck = function(t) {
                    return h.stateChanged = !1, h.doubleCheckClear(), h.bugs.ieDoubleCheck && (h.doubleChecker = a(function() {
                        return h.doubleCheckClear(), h.stateChanged || t(), !0
                    }, h.options.doubleCheckInterval)), h
                }, h.safariStatePoll = function() {
                    var e, i = h.extractState(h.getLocationHref());
                    return h.isLastSavedState(i) ? void 0 : (e = i, e || (e = h.createStateObject()), h.Adapter.trigger(t, "popstate"), h)
                }, h.back = function(t) {
                    return t !== !1 && h.busy() ? (h.pushQueue({
                        scope: h,
                        callback: h.back,
                        args: arguments,
                        queue: t
                    }), !1) : (h.busy(!0), h.doubleCheck(function() {
                        h.back(!1)
                    }), p.go(-1), !0)
                }, h.forward = function(t) {
                    return t !== !1 && h.busy() ? (h.pushQueue({
                        scope: h,
                        callback: h.forward,
                        args: arguments,
                        queue: t
                    }), !1) : (h.busy(!0), h.doubleCheck(function() {
                        h.forward(!1)
                    }), p.go(1), !0)
                }, h.go = function(t, e) {
                    var i;
                    if (t > 0)
                        for (i = 1; t >= i; ++i) h.forward(e);
                    else {
                        if (!(0 > t)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                        for (i = -1; i >= t; --i) h.back(e)
                    }
                    return h
                }, h.emulated.pushState) {
                var g = function() {};
                h.pushState = h.pushState || g, h.replaceState = h.replaceState || g
            } else h.onPopState = function(e, i) {
                var n, o, r = !1,
                    a = !1;
                return h.doubleCheckComplete(), n = h.getHash(), n ? (o = h.extractState(n || h.getLocationHref(), !0), o ? h.replaceState(o.data, o.title, o.url, !1) : (h.Adapter.trigger(t, "anchorchange"), h.busy(!1)), h.expectedStateId = !1, !1) : (r = h.Adapter.extractEventData("state", e, i) || !1, a = r ? h.getStateById(r) : h.expectedStateId ? h.getStateById(h.expectedStateId) : h.extractState(h.getLocationHref()), a || (a = h.createStateObject(null, null, h.getLocationHref())), h.expectedStateId = !1, h.isLastSavedState(a) ? (h.busy(!1), !1) : (h.storeState(a), h.saveState(a), h.setTitle(a), h.Adapter.trigger(t, "statechange"), h.busy(!1), !0))
            }, h.Adapter.bind(t, "popstate", h.onPopState), h.pushState = function(e, i, n, o) {
                if (h.getHashByUrl(n) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (o !== !1 && h.busy()) return h.pushQueue({
                    scope: h,
                    callback: h.pushState,
                    args: arguments,
                    queue: o
                }), !1;
                h.busy(!0);
                var r = h.createStateObject(e, i, n);
                return h.isLastSavedState(r) ? h.busy(!1) : (h.storeState(r), h.expectedStateId = r.id, p.pushState(r.id, r.title, r.url), h.Adapter.trigger(t, "popstate")), !0
            }, h.replaceState = function(e, i, n, o) {
                if (h.getHashByUrl(n) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (o !== !1 && h.busy()) return h.pushQueue({
                    scope: h,
                    callback: h.replaceState,
                    args: arguments,
                    queue: o
                }), !1;
                h.busy(!0);
                var r = h.createStateObject(e, i, n);
                return h.isLastSavedState(r) ? h.busy(!1) : (h.storeState(r), h.expectedStateId = r.id, p.replaceState(r.id, r.title, r.url), h.Adapter.trigger(t, "popstate")), !0
            };
            if (r) {
                try {
                    h.store = u.parse(r.getItem("History.store")) || {}
                } catch (f) {
                    h.store = {}
                }
                h.normalizeStore()
            } else h.store = {}, h.normalizeStore();
            h.Adapter.bind(t, "unload", h.clearAllIntervals), h.saveState(h.storeState(h.extractState(h.getLocationHref(), !0))), r && (h.onUnload = function() {
                var t, e, i;
                try {
                    t = u.parse(r.getItem("History.store")) || {}
                } catch (n) {
                    t = {}
                }
                t.idToState = t.idToState || {}, t.urlToId = t.urlToId || {}, t.stateToId = t.stateToId || {};
                for (e in h.idToState) h.idToState.hasOwnProperty(e) && (t.idToState[e] = h.idToState[e]);
                for (e in h.urlToId) h.urlToId.hasOwnProperty(e) && (t.urlToId[e] = h.urlToId[e]);
                for (e in h.stateToId) h.stateToId.hasOwnProperty(e) && (t.stateToId[e] = h.stateToId[e]);
                h.store = t, h.normalizeStore(), i = u.stringify(t);
                try {
                    r.setItem("History.store", i)
                } catch (o) {
                    if (o.code !== DOMException.QUOTA_EXCEEDED_ERR) throw o;
                    r.length && (r.removeItem("History.store"), r.setItem("History.store", i))
                }
            }, h.intervalList.push(l(h.onUnload, h.options.storeInterval)), h.Adapter.bind(t, "beforeunload", h.onUnload), h.Adapter.bind(t, "unload", h.onUnload)), h.emulated.pushState || (h.bugs.safariPoll && h.intervalList.push(l(h.safariStatePoll, h.options.safariPollInterval)), ("Apple Computer, Inc." === o.vendor || "Mozilla" === (o.appCodeName || "")) && (h.Adapter.bind(t, "hashchange", function() {
                h.Adapter.trigger(t, "popstate")
            }), h.getHash() && h.Adapter.onDomLoad(function() {
                h.Adapter.trigger(t, "hashchange")
            })))
        }, (!h.options || !h.options.delayInit) && h.init()
    }(window),
    function(t) {
        "use strict";

        function e(t) {
            return RegExp("(^|\\s+)" + t + "(\\s+|$)")
        }

        function i(t, e) {
            var i = n(t, e) ? r : o;
            i(t, e)
        }
        var n, o, r;
        "classList" in document.documentElement ? (n = function(t, e) {
            return t.classList.contains(e)
        }, o = function(t, e) {
            t.classList.add(e)
        }, r = function(t, e) {
            t.classList.remove(e)
        }) : (n = function(t, i) {
            return e(i).test(t.className)
        }, o = function(t, e) {
            n(t, e) || (t.className = t.className + " " + e)
        }, r = function(t, i) {
            t.className = t.className.replace(e(i), " ")
        });
        var a = {
            hasClass: n,
            addClass: o,
            removeClass: r,
            toggleClass: i,
            has: n,
            add: o,
            remove: r,
            toggle: i
        };
        "function" == typeof define && define.amd ? define(a) : t.classie = a
    }(window),
    function(t) {
        "use strict";

        function e(t) {
            if (t) {
                if ("string" == typeof n[t]) return t;
                t = t.charAt(0).toUpperCase() + t.slice(1);
                for (var e, o = 0, r = i.length; r > o; o++)
                    if (e = i[o] + t, "string" == typeof n[e]) return e
            }
        }
        var i = "Webkit Moz ms Ms O".split(" "),
            n = document.documentElement.style;
        "function" == typeof define && define.amd ? define(function() {
            return e
        }) : t.getStyleProperty = e
    }(window),
    function(t) {
        "use strict";

        function e(t) {
            var e = parseFloat(t),
                i = -1 === t.indexOf("%") && !isNaN(e);
            return i && e
        }

        function i() {
            for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0, i = a.length; i > e; e++) {
                var n = a[e];
                t[n] = 0
            }
            return t
        }

        function n(t) {
            function n(t) {
                if ("string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                    var n = r(t);
                    if ("none" === n.display) return i();
                    var l = {};
                    l.width = t.offsetWidth, l.height = t.offsetHeight;
                    for (var c = l.isBorderBox = !(!s || !n[s] || "border-box" !== n[s]), u = 0, d = a.length; d > u; u++) {
                        var h = a[u],
                            p = n[h],
                            g = parseFloat(p);
                        l[h] = isNaN(g) ? 0 : g
                    }
                    var f = l.paddingLeft + l.paddingRight,
                        m = l.paddingTop + l.paddingBottom,
                        v = l.marginLeft + l.marginRight,
                        y = l.marginTop + l.marginBottom,
                        b = l.borderLeftWidth + l.borderRightWidth,
                        w = l.borderTopWidth + l.borderBottomWidth,
                        k = c && o,
                        S = e(n.width);
                    S !== !1 && (l.width = S + (k ? 0 : f + b));
                    var C = e(n.height);
                    return C !== !1 && (l.height = C + (k ? 0 : m + w)), l.innerWidth = l.width - (f + b), l.innerHeight = l.height - (m + w), l.outerWidth = l.width + v, l.outerHeight = l.height + y, l
                }
            }
            var o, s = t("boxSizing");
            return function() {
                if (s) {
                    var t = document.createElement("div");
                    t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style[s] = "border-box";
                    var i = document.body || document.documentElement;
                    i.appendChild(t);
                    var n = r(t);
                    o = 200 === e(n.width), i.removeChild(t)
                }
            }(), n
        }
        var o = document.defaultView,
            r = o && o.getComputedStyle ? function(t) {
                return o.getComputedStyle(t, null)
            } : function(t) {
                return t.currentStyle
            },
            a = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define(["get-style-property/get-style-property"], n) : t.getSize = n(t.getStyleProperty)
    }(window),
    function(t) {
        "use strict";
        var e = document.documentElement,
            i = function() {};
        e.addEventListener ? i = function(t, e, i) {
            t.addEventListener(e, i, !1)
        } : e.attachEvent && (i = function(e, i, n) {
            e[i + n] = n.handleEvent ? function() {
                var e = t.event;
                e.target = e.target || e.srcElement, n.handleEvent.call(n, e)
            } : function() {
                var i = t.event;
                i.target = i.target || i.srcElement, n.call(e, i)
            }, e.attachEvent("on" + i, e[i + n])
        });
        var n = function() {};
        e.removeEventListener ? n = function(t, e, i) {
            t.removeEventListener(e, i, !1)
        } : e.detachEvent && (n = function(t, e, i) {
            t.detachEvent("on" + e, t[e + i]);
            try {
                delete t[e + i]
            } catch (n) {
                t[e + i] = void 0
            }
        });
        var o = {
            bind: i,
            unbind: n
        };
        "function" == typeof define && define.amd ? define(o) : t.eventie = o
    }(this),
    function(t) {
        "use strict";

        function e(t) {
            "function" == typeof t && (e.isReady ? t() : r.push(t))
        }

        function i(t) {
            var i = "readystatechange" === t.type && "complete" !== o.readyState;
            if (!e.isReady && !i) {
                e.isReady = !0;
                for (var n = 0, a = r.length; a > n; n++) {
                    var s = r[n];
                    s()
                }
            }
        }

        function n(n) {
            return n.bind(o, "DOMContentLoaded", i), n.bind(o, "readystatechange", i), n.bind(t, "load", i), e
        }
        var o = t.document,
            r = [];
        e.isReady = !1, "function" == typeof define && define.amd ? (e.isReady = "function" == typeof requirejs, define(["eventie/eventie"], n)) : t.docReady = n(t.eventie)
    }(this),
    function() {
        "use strict";

        function t() {}

        function e(t, e) {
            for (var i = t.length; i--;)
                if (t[i].listener === e) return i;
            return -1
        }

        function i(t) {
            return function() {
                return this[t].apply(this, arguments)
            }
        }
        var n = t.prototype;
        n.getListeners = function(t) {
            var e, i, n = this._getEvents();
            if ("object" == typeof t) {
                e = {};
                for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
            } else e = n[t] || (n[t] = []);
            return e
        }, n.flattenListeners = function(t) {
            var e, i = [];
            for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
            return i
        }, n.getListenersAsObject = function(t) {
            var e, i = this.getListeners(t);
            return i instanceof Array && (e = {}, e[t] = i), e || i
        }, n.addListener = function(t, i) {
            var n, o = this.getListenersAsObject(t),
                r = "object" == typeof i;
            for (n in o) o.hasOwnProperty(n) && -1 === e(o[n], i) && o[n].push(r ? i : {
                listener: i,
                once: !1
            });
            return this
        }, n.on = i("addListener"), n.addOnceListener = function(t, e) {
            return this.addListener(t, {
                listener: e,
                once: !0
            })
        }, n.once = i("addOnceListener"), n.defineEvent = function(t) {
            return this.getListeners(t), this
        }, n.defineEvents = function(t) {
            for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
            return this
        }, n.removeListener = function(t, i) {
            var n, o, r = this.getListenersAsObject(t);
            for (o in r) r.hasOwnProperty(o) && (n = e(r[o], i), -1 !== n && r[o].splice(n, 1));
            return this
        }, n.off = i("removeListener"), n.addListeners = function(t, e) {
            return this.manipulateListeners(!1, t, e)
        }, n.removeListeners = function(t, e) {
            return this.manipulateListeners(!0, t, e)
        }, n.manipulateListeners = function(t, e, i) {
            var n, o, r = t ? this.removeListener : this.addListener,
                a = t ? this.removeListeners : this.addListeners;
            if ("object" != typeof e || e instanceof RegExp)
                for (n = i.length; n--;) r.call(this, e, i[n]);
            else
                for (n in e) e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? r.call(this, n, o) : a.call(this, n, o));
            return this
        }, n.removeEvent = function(t) {
            var e, i = typeof t,
                n = this._getEvents();
            if ("string" === i) delete n[t];
            else if ("object" === i)
                for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
            else delete this._events;
            return this
        }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(t, e) {
            var i, n, o, r, a = this.getListenersAsObject(t);
            for (o in a)
                if (a.hasOwnProperty(o))
                    for (n = a[o].length; n--;) i = a[o][n], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
            return this
        }, n.trigger = i("emitEvent"), n.emit = function(t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(t, e)
        }, n.setOnceReturnValue = function(t) {
            return this._onceReturnValue = t, this
        }, n._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, n._getEvents = function() {
            return this._events || (this._events = {})
        }, "function" == typeof define && define.amd ? define(function() {
            return t
        }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
    }.call(this),
    function(t) {
        "use strict";

        function e() {}

        function i(t) {
            function i(e) {
                e.prototype.option || (e.prototype.option = function(e) {
                    t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
                })
            }

            function o(e, i) {
                t.fn[e] = function(o) {
                    if ("string" == typeof o) {
                        for (var a = n.call(arguments, 1), s = 0, l = this.length; l > s; s++) {
                            var c = this[s],
                                u = t.data(c, e);
                            if (u)
                                if (t.isFunction(u[o]) && "_" !== o.charAt(0)) {
                                    var d = u[o].apply(u, a);
                                    if (void 0 !== d) return d
                                } else r("no such method '" + o + "' for " + e + " instance");
                            else r("cannot call methods on " + e + " prior to initialization; attempted to call '" + o + "'")
                        }
                        return this
                    }
                    return this.each(function() {
                        var n = t.data(this, e);
                        n ? (n.option(o), n._init()) : (n = new i(this, o), t.data(this, e, n))
                    })
                }
            }
            if (t) {
                var r = "undefined" == typeof console ? e : function(t) {
                    console.error(t)
                };
                t.bridget = function(t, e) {
                    i(e), o(t, e)
                }
            }
        }
        var n = Array.prototype.slice;
        "function" == typeof define && define.amd ? define(["jquery"], i) : i(t.jQuery)
    }(window),
    function(t, e) {
        "use strict";

        function i(t, e) {
            return t[s](e)
        }

        function n(t) {
            if (!t.parentNode) {
                var e = document.createDocumentFragment();
                e.appendChild(t)
            }
        }

        function o(t, e) {
            n(t);
            for (var i = t.parentNode.querySelectorAll(e), o = 0, r = i.length; r > o; o++)
                if (i[o] === t) return !0;
            return !1
        }

        function r(t, e) {
            return n(t), i(t, e)
        }
        var a, s = function() {
            if (e.matchesSelector) return "matchesSelector";
            for (var t = ["webkit", "moz", "ms", "o"], i = 0, n = t.length; n > i; i++) {
                var o = t[i],
                    r = o + "MatchesSelector";
                if (e[r]) return r
            }
        }();
        if (s) {
            var l = document.createElement("div"),
                c = i(l, "div");
            a = c ? i : r
        } else a = o;
        "function" == typeof define && define.amd ? define(function() {
            return a
        }) : window.matchesSelector = a
    }(this, Element.prototype),
    function(t) {
        "use strict";

        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function i(t) {
            for (var e in t) return !1;
            return e = null, !0
        }

        function n(t) {
            return t.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }

        function o(t, o, r) {
            function s(t, e) {
                t && (this.element = t, this.layout = e, this.position = {
                    x: 0,
                    y: 0
                }, this._create())
            }
            var l = r("transition"),
                c = r("transform"),
                u = l && c,
                d = !!r("perspective"),
                h = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "otransitionend",
                    transition: "transitionend"
                }[l],
                p = ["transform", "transition", "transitionDuration", "transitionProperty"],
                g = function() {
                    for (var t = {}, e = 0, i = p.length; i > e; e++) {
                        var n = p[e],
                            o = r(n);
                        o && o !== n && (t[n] = o)
                    }
                    return t
                }();
            e(s.prototype, t.prototype), s.prototype._create = function() {
                this._transition = {
                    ingProperties: {},
                    clean: {},
                    onEnd: {}
                }, this.css({
                    position: "absolute"
                })
            }, s.prototype.handleEvent = function(t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, s.prototype.getSize = function() {
                this.size = o(this.element)
            }, s.prototype.css = function(t) {
                var e = this.element.style;
                for (var i in t) {
                    var n = g[i] || i;
                    e[n] = t[i]
                }
            }, s.prototype.getPosition = function() {
                var t = a(this.element),
                    e = this.layout.options,
                    i = e.isOriginLeft,
                    n = e.isOriginTop,
                    o = parseInt(t[i ? "left" : "right"], 10),
                    r = parseInt(t[n ? "top" : "bottom"], 10);
                o = isNaN(o) ? 0 : o, r = isNaN(r) ? 0 : r;
                var s = this.layout.size;
                o -= i ? s.paddingLeft : s.paddingRight, r -= n ? s.paddingTop : s.paddingBottom, this.position.x = o, this.position.y = r
            }, s.prototype.layoutPosition = function() {
                var t = this.layout.size,
                    e = this.layout.options,
                    i = {};
                e.isOriginLeft ? (i.left = this.position.x + t.paddingLeft + "px", i.right = "") : (i.right = this.position.x + t.paddingRight + "px", i.left = ""), e.isOriginTop ? (i.top = this.position.y + t.paddingTop + "px", i.bottom = "") : (i.bottom = this.position.y + t.paddingBottom + "px", i.top = ""), this.css(i), this.emitEvent("layout", [this])
            };
            var f = d ? function(t, e) {
                return "translate3d(" + t + "px, " + e + "px, 0)"
            } : function(t, e) {
                return "translate(" + t + "px, " + e + "px)"
            };
            s.prototype._transitionTo = function(t, e) {
                this.getPosition();
                var i = this.position.x,
                    n = this.position.y,
                    o = parseInt(t, 10),
                    r = parseInt(e, 10),
                    a = o === this.position.x && r === this.position.y;
                if (this.setPosition(t, e), a && !this.isTransitioning) return this.layoutPosition(), void 0;
                var s = t - i,
                    l = e - n,
                    c = {},
                    u = this.layout.options;
                s = u.isOriginLeft ? s : -s, l = u.isOriginTop ? l : -l, c.transform = f(s, l), this.transition({
                    to: c,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                })
            }, s.prototype.goTo = function(t, e) {
                this.setPosition(t, e), this.layoutPosition()
            }, s.prototype.moveTo = u ? s.prototype._transitionTo : s.prototype.goTo, s.prototype.setPosition = function(t, e) {
                this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
            }, s.prototype._nonTransition = function(t) {
                this.css(t.to), t.isCleaning && this._removeStyles(t.to);
                for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
            }, s.prototype._transition = function(t) {
                if (!parseFloat(this.layout.options.transitionDuration)) return this._nonTransition(t), void 0;
                var e = this._transition;
                for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
                if (t.from) {
                    this.css(t.from);
                    var n = this.element.offsetHeight;
                    n = null
                }
                this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
            };
            var m = c && n(c) + ",opacity";
            s.prototype.enableTransition = function() {
                this.isTransitioning || (this.css({
                    transitionProperty: m,
                    transitionDuration: this.layout.options.transitionDuration
                }), this.element.addEventListener(h, this, !1))
            }, s.prototype.transition = s.prototype[l ? "_transition" : "_nonTransition"], s.prototype.onwebkitTransitionEnd = function(t) {
                this.ontransitionend(t)
            }, s.prototype.onotransitionend = function(t) {
                this.ontransitionend(t)
            };
            var v = {
                "-webkit-transform": "transform",
                "-moz-transform": "transform",
                "-o-transform": "transform"
            };
            s.prototype.ontransitionend = function(t) {
                if (t.target === this.element) {
                    var e = this._transition,
                        n = v[t.propertyName] || t.propertyName;
                    if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                        var o = e.onEnd[n];
                        o.call(this), delete e.onEnd[n]
                    }
                    this.emitEvent("transitionEnd", [this])
                }
            }, s.prototype.disableTransition = function() {
                this.removeTransitionStyles(), this.element.removeEventListener(h, this, !1), this.isTransitioning = !1
            }, s.prototype._removeStyles = function(t) {
                var e = {};
                for (var i in t) e[i] = "";
                this.css(e)
            };
            var y = {
                transitionProperty: "",
                transitionDuration: ""
            };
            return s.prototype.removeTransitionStyles = function() {
                this.css(y)
            }, s.prototype.removeElem = function() {
                this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
            }, s.prototype.remove = function() {
                if (!l || !parseFloat(this.layout.options.transitionDuration)) return this.removeElem(), void 0;
                var t = this;
                this.on("transitionEnd", function() {
                    return t.removeElem(), !0
                }), this.hide()
            }, s.prototype.reveal = function() {
                delete this.isHidden, this.css({
                    display: ""
                });
                var t = this.layout.options;
                this.transition({
                    from: t.hiddenStyle,
                    to: t.visibleStyle,
                    isCleaning: !0
                })
            }, s.prototype.hide = function() {
                this.isHidden = !0, this.css({
                    display: ""
                });
                var t = this.layout.options;
                this.transition({
                    from: t.visibleStyle,
                    to: t.hiddenStyle,
                    isCleaning: !0,
                    onTransitionEnd: {
                        opacity: function() {
                            this.css({
                                display: "none"
                            })
                        }
                    }
                })
            }, s.prototype.destroy = function() {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: ""
                })
            }, s
        }
        var r = document.defaultView,
            a = r && r.getComputedStyle ? function(t) {
                return r.getComputedStyle(t, null)
            } : function(t) {
                return t.currentStyle
            };
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], o) : (t.Outlayer = {}, t.Outlayer.Item = o(t.EventEmitter, t.getSize, t.getStyleProperty))
    }(window),
    function(t) {
        "use strict";

        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function i(t) {
            return "[object Array]" === d.call(t)
        }

        function n(t) {
            var e = [];
            if (i(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var n = 0, o = t.length; o > n; n++) e.push(t[n]);
            else e.push(t);
            return e
        }

        function o(t, e) {
            var i = p(e, t); - 1 !== i && e.splice(i, 1)
        }

        function r(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        }

        function a(i, a, d, p, g, f) {
            function m(t, i) {
                if ("string" == typeof t && (t = s.querySelector(t)), !t || !h(t)) return l && l.error("Bad " + this.settings.namespace + " element: " + t), void 0;
                this.element = t, this.options = e({}, this.options), this.option(i);
                var n = ++y;
                this.element.outlayerGUID = n, b[n] = this, this._create(), this.options.isInitLayout && this.layout()
            }

            function v(t, i) {
                t.prototype[i] = e({}, m.prototype[i])
            }
            var y = 0,
                b = {};
            return m.prototype.settings = {
                namespace: "outlayer",
                item: f
            }, m.prototype.options = {
                containerStyle: {
                    position: "relative"
                },
                isInitLayout: !0,
                isOriginLeft: !0,
                isOriginTop: !0,
                isResizeBound: !0,
                transitionDuration: "0.4s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            }, e(m.prototype, d.prototype), m.prototype.option = function(t) {
                e(this.options, t)
            }, m.prototype._create = function() {
                this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
            }, m.prototype.reloadItems = function() {
                this.items = this._itemize(this.element.children)
            }, m.prototype._itemize = function(t) {
                for (var e = this._filterFindItemElements(t), i = this.settings.item, n = [], o = 0, r = e.length; r > o; o++) {
                    var a = e[o],
                        s = new i(a, this);
                    n.push(s)
                }
                return n
            }, m.prototype._filterFindItemElements = function(t) {
                t = n(t);
                for (var e = this.options.itemSelector, i = [], o = 0, r = t.length; r > o; o++) {
                    var a = t[o];
                    if (h(a))
                        if (e) {
                            g(a, e) && i.push(a);
                            for (var s = a.querySelectorAll(e), l = 0, c = s.length; c > l; l++) i.push(s[l])
                        } else i.push(a)
                }
                return i
            }, m.prototype.getItemElements = function() {
                for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
                return t
            }, m.prototype.layout = function() {
                this._resetLayout(), this._manageStamps();
                var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                this.layoutItems(this.items, t), this._isLayoutInited = !0
            }, m.prototype._init = m.prototype.layout, m.prototype._resetLayout = function() {
                this.getSize()
            }, m.prototype.getSize = function() {
                this.size = p(this.element)
            }, m.prototype._getMeasurement = function(t, e) {
                var i, n = this.options[t];
                n ? ("string" == typeof n ? i = this.element.querySelector(n) : h(n) && (i = n), this[t] = i ? p(i)[e] : n) : this[t] = 0
            }, m.prototype.layoutItems = function(t, e) {
                t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
            }, m.prototype._getItemsForLayout = function(t) {
                for (var e = [], i = 0, n = t.length; n > i; i++) {
                    var o = t[i];
                    o.isIgnored || e.push(o)
                }
                return e
            }, m.prototype._layoutItems = function(t, e) {
                if (!t || !t.length) return this.emitEvent("layoutComplete", [this, t]), void 0;
                this._itemsOn(t, "layout", function() {
                    this.emitEvent("layoutComplete", [this, t])
                });
                for (var i = [], n = 0, o = t.length; o > n; n++) {
                    var r = t[n],
                        a = this._getItemLayoutPosition(r);
                    a.item = r, a.isInstant = e, i.push(a)
                }
                this._processLayoutQueue(i)
            }, m.prototype._getItemLayoutPosition = function() {
                return {
                    x: 0,
                    y: 0
                }
            }, m.prototype._processLayoutQueue = function(t) {
                for (var e = 0, i = t.length; i > e; e++) {
                    var n = t[e];
                    this._positionItem(n.item, n.x, n.y, n.isInstant)
                }
            }, m.prototype._positionItem = function(t, e, i, n) {
                n ? t.goTo(e, i) : t.moveTo(e, i)
            }, m.prototype._postLayout = function() {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }, m.prototype._getContainerSize = u, m.prototype._setContainerMeasure = function(t, e) {
                if (void 0 !== t) {
                    var i = this.size;
                    i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
                }
            }, m.prototype._itemsOn = function(t, e, i) {
                function n() {
                    return o++, o === r && i.call(a), !0
                }
                for (var o = 0, r = t.length, a = this, s = 0, l = t.length; l > s; s++) {
                    var c = t[s];
                    c.on(e, n)
                }
            }, m.prototype.ignore = function(t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0)
            }, m.prototype.unignore = function(t) {
                var e = this.getItem(t);
                e && delete e.isIgnored
            }, m.prototype.stamp = function(t) {
                if (t = this._find(t)) {
                    this.stamps = this.stamps.concat(t);
                    for (var e = 0, i = t.length; i > e; e++) {
                        var n = t[e];
                        this.ignore(n)
                    }
                }
            }, m.prototype.unstamp = function(t) {
                if (t = this._find(t))
                    for (var e = 0, i = t.length; i > e; e++) {
                        var n = t[e];
                        o(n, this.stamps), this.unignore(n)
                    }
            }, m.prototype._find = function(t) {
                return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n(t)) : void 0
            }, m.prototype._manageStamps = function() {
                if (this.stamps && this.stamps.length) {
                    this._getBoundingRect();
                    for (var t = 0, e = this.stamps.length; e > t; t++) {
                        var i = this.stamps[t];
                        this._manageStamp(i)
                    }
                }
            }, m.prototype._getBoundingRect = function() {
                var t = this.element.getBoundingClientRect(),
                    e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
                }
            }, m.prototype._manageStamp = u, m.prototype._getElementOffset = function(t) {
                var e = t.getBoundingClientRect(),
                    i = this._boundingRect,
                    n = p(t),
                    o = {
                        left: e.left - i.left - n.marginLeft,
                        top: e.top - i.top - n.marginTop,
                        right: i.right - e.right - n.marginRight,
                        bottom: i.bottom - e.bottom - n.marginBottom
                    };
                return o
            }, m.prototype.handleEvent = function(t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, m.prototype.bindResize = function() {
                this.isResizeBound || (i.bind(t, "resize", this), this.isResizeBound = !0)
            }, m.prototype.unbindResize = function() {
                i.unbind(t, "resize", this), this.isResizeBound = !1
            }, m.prototype.onresize = function() {
                function t() {
                    e.resize(), delete e.resizeTimeout
                }
                this.resizeTimeout && clearTimeout(this.resizeTimeout);
                var e = this;
                this.resizeTimeout = setTimeout(t, 100)
            }, m.prototype.resize = function() {
                var t = p(this.element),
                    e = this.size && t;
                e && t.innerWidth === this.size.innerWidth || this.layout()
            }, m.prototype.addItems = function(t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)), e
            }, m.prototype.appended = function(t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e))
            }, m.prototype.prepended = function(t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
                }
            }, m.prototype.reveal = function(t) {
                if (t && t.length)
                    for (var e = 0, i = t.length; i > e; e++) {
                        var n = t[e];
                        n.reveal()
                    }
            }, m.prototype.hide = function(t) {
                if (t && t.length)
                    for (var e = 0, i = t.length; i > e; e++) {
                        var n = t[e];
                        n.hide()
                    }
            }, m.prototype.getItem = function(t) {
                for (var e = 0, i = this.items.length; i > e; e++) {
                    var n = this.items[e];
                    if (n.element === t) return n
                }
            }, m.prototype.getItems = function(t) {
                if (t && t.length) {
                    for (var e = [], i = 0, n = t.length; n > i; i++) {
                        var o = t[i],
                            r = this.getItem(o);
                        r && e.push(r)
                    }
                    return e
                }
            }, m.prototype.remove = function(t) {
                t = n(t);
                var e = this.getItems(t);
                if (e && e.length) {
                    this._itemsOn(e, "remove", function() {
                        this.emitEvent("removeComplete", [this, e])
                    });
                    for (var i = 0, r = e.length; r > i; i++) {
                        var a = e[i];
                        a.remove(), o(a, this.items)
                    }
                }
            }, m.prototype.destroy = function() {
                var t = this.element.style;
                t.height = "", t.position = "", t.width = "";
                for (var e = 0, i = this.items.length; i > e; e++) {
                    var n = this.items[e];
                    n.destroy()
                }
                this.unbindResize(), delete this.element.outlayerGUID, c && c.removeData(this.element, this.settings.namespace)
            }, m.data = function(t) {
                var e = t && t.outlayerGUID;
                return e && b[e]
            }, m.create = function(t, i) {
                function n() {
                    m.apply(this, arguments)
                }
                return e(n.prototype, m.prototype), v(n, "options"), v(n, "settings"), e(n.prototype.options, i), n.prototype.settings.namespace = t, n.data = m.data, n.Item = function() {
                    f.apply(this, arguments)
                }, n.Item.prototype = new f, n.prototype.settings.item = n.Item, a(function() {
                    for (var e = r(t), i = s.querySelectorAll(".js-" + e), o = "data-" + e + "-options", a = 0, u = i.length; u > a; a++) {
                        var d, h = i[a],
                            p = h.getAttribute(o);
                        try {
                            d = p && JSON.parse(p)
                        } catch (g) {
                            l && l.error("Error parsing " + o + " on " + h.nodeName.toLowerCase() + (h.id ? "#" + h.id : "") + ": " + g);
                            continue
                        }
                        var f = new n(h, d);
                        c && c.data(h, t, f)
                    }
                }), c && c.bridget && c.bridget(t, n), n
            }, m.Item = f, m
        }
        var s = t.document,
            l = t.console,
            c = t.jQuery,
            u = function() {},
            d = Object.prototype.toString,
            h = "object" == typeof HTMLElement ? function(t) {
                return t instanceof HTMLElement
            } : function(t) {
                return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
            },
            p = Array.prototype.indexOf ? function(t, e) {
                return t.indexOf(e)
            } : function(t, e) {
                for (var i = 0, n = t.length; n > i; i++)
                    if (t[i] === e) return i;
                return -1
            };
        "function" == typeof define && define.amd ? define(["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], a) : t.Outlayer = a(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item)
    }(window),
    function(t) {
        "use strict";

        function e() {
            function t(e) {
                for (var i in t.defaults) this[i] = t.defaults[i];
                for (i in e) this[i] = e[i]
            }
            return i.Rect = t, t.defaults = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }, t.prototype.contains = function(t) {
                var e = t.width || 0,
                    i = t.height || 0;
                return this.x <= t.x && this.y <= t.y && this.x + this.width >= t.x + e && this.y + this.height >= t.y + i
            }, t.prototype.overlaps = function(t) {
                var e = this.x + this.width,
                    i = this.y + this.height,
                    n = t.x + t.width,
                    o = t.y + t.height;
                return n > this.x && e > t.x && o > this.y && i > t.y
            }, t.prototype.getMaximalFreeRects = function(e) {
                if (!this.overlaps(e)) return !1;
                var i, n = [],
                    o = this.x + this.width,
                    r = this.y + this.height,
                    a = e.x + e.width,
                    s = e.y + e.height;
                return this.y < e.y && (i = new t({
                    x: this.x,
                    y: this.y,
                    width: this.width,
                    height: e.y - this.y
                }), n.push(i)), o > a && (i = new t({
                    x: a,
                    y: this.y,
                    width: o - a,
                    height: this.height
                }), n.push(i)), r > s && (i = new t({
                    x: this.x,
                    y: s,
                    width: this.width,
                    height: r - s
                }), n.push(i)), this.x < e.x && (i = new t({
                    x: this.x,
                    y: this.y,
                    width: e.x - this.x,
                    height: this.height
                }), n.push(i)), n
            }, t.prototype.canFit = function(t) {
                return this.width >= t.width && this.height >= t.height
            }, t
        }
        var i = t.Packery = function() {};
        "function" == typeof define && define.amd ? define(e) : (t.Packery = t.Packery || {}, t.Packery.Rect = e())
    }(window),
    function(t) {
        "use strict";

        function e(t) {
            function e(t, e) {
                this.width = t || 0, this.height = e || 0, this.reset()
            }
            return e.prototype.reset = function() {
                this.spaces = [], this.newSpaces = [];
                var e = new t({
                    x: 0,
                    y: 0,
                    width: this.width,
                    height: this.height
                });
                this.spaces.push(e)
            }, e.prototype.pack = function(t) {
                for (var e = 0, i = this.spaces.length; i > e; e++) {
                    var n = this.spaces[e];
                    if (n.canFit(t)) {
                        this.placeInSpace(t, n);
                        break
                    }
                }
            }, e.prototype.placeInSpace = function(t, e) {
                t.x = e.x, t.y = e.y, this.placed(t)
            }, e.prototype.placed = function(t) {
                for (var i = [], n = 0, o = this.spaces.length; o > n; n++) {
                    var r = this.spaces[n],
                        a = r.getMaximalFreeRects(t);
                    a ? i.push.apply(i, a) : i.push(r)
                }
                this.spaces = i, e.mergeRects(this.spaces), this.spaces.sort(e.spaceSorterTopLeft)
            }, e.mergeRects = function(t) {
                for (var e = 0, i = t.length; i > e; e++) {
                    var n = t[e];
                    if (n) {
                        var o = t.slice(0);
                        o.splice(e, 1);
                        for (var r = 0, a = 0, s = o.length; s > a; a++) {
                            var l = o[a],
                                c = e > a ? 0 : 1;
                            n.contains(l) && (t.splice(a + c - r, 1), r++)
                        }
                    }
                }
                return t
            }, e.spaceSorterTopLeft = function(t, e) {
                return t.y - e.y || t.x - e.x
            }, e.spaceSorterLeftTop = function(t, e) {
                return t.x - e.x || t.y - e.y
            }, e
        }
        if ("function" == typeof define && define.amd) define(["./rect"], e);
        else {
            var i = t.Packery = t.Packery || {};
            i.Packer = e(i.Rect)
        }
    }(window),
    function(t) {
        "use strict";

        function e(t, e, i) {
            var n = t("transform"),
                o = function() {
                    e.Item.apply(this, arguments)
                };
            o.prototype = new e.Item;
            var r = o.prototype._create;
            return o.prototype._create = function() {
                r.call(this), this.rect = new i, this.placeRect = new i
            }, o.prototype.dragStart = function() {
                this.getPosition(), this.removeTransitionStyles(), this.isTransitioning && n && (this.element.style[n] = "none"), this.getSize(), this.isPlacing = !0, this.needsPositioning = !1, this.positionPlaceRect(this.position.x, this.position.y), this.isTransitioning = !1, this.didDrag = !1
            }, o.prototype.dragMove = function(t, e) {
                this.didDrag = !0;
                var i = this.layout.size;
                t -= i.paddingLeft, e -= i.paddingTop, this.positionPlaceRect(t, e)
            }, o.prototype.dragStop = function() {
                this.getPosition();
                var t = this.position.x !== this.placeRect.x,
                    e = this.position.y !== this.placeRect.y;
                this.needsPositioning = t || e, this.didDrag = !1
            }, o.prototype.positionPlaceRect = function(t, e, i) {
                this.placeRect.x = this.getPlaceRectCoord(t, !0), this.placeRect.y = this.getPlaceRectCoord(e, !1, i)
            }, o.prototype.getPlaceRectCoord = function(t, e, i) {
                var n = e ? "Width" : "Height",
                    o = this.size["outer" + n],
                    r = this.layout[e ? "columnWidth" : "rowHeight"],
                    a = this.layout.size["inner" + n];
                e || (a = Math.max(a, this.layout.maxY), this.layout.rowHeight || (a -= this.layout.gutter));
                var s;
                if (r) {
                    r += this.layout.gutter, a += e ? this.layout.gutter : 0, t = Math.round(t / r);
                    var l = Math[e ? "floor" : "ceil"](a / r);
                    l -= Math.ceil(o / r), s = l
                } else s = a - o;
                return t = i ? t : Math.min(t, s), t *= r || 1, Math.max(0, t)
            }, o.prototype.copyPlaceRectPosition = function() {
                this.rect.x = this.placeRect.x, this.rect.y = this.placeRect.y
            }, o
        }
        "function" == typeof define && define.amd ? define(["get-style-property/get-style-property", "outlayer/outlayer", "./rect"], e) : t.Packery.Item = e(t.getStyleProperty, t.Outlayer, t.Packery.Rect)
    }(window),
    function(t) {
        "use strict";

        function e(t, e, i, n, o, r) {
            var a = i.create("packery");
            return a.Item = a.prototype.settings.item = r, a.prototype._create = function() {
                i.prototype._create.call(this), this.packer = new o, this.stamp(this.options.stamped);
                var t = this;
                this.handleDraggabilly = {
                    dragStart: function(e) {
                        t.itemDragStart(e.element)
                    },
                    dragMove: function(e) {
                        t.itemDragMove(e.element, e.position.x, e.position.y)
                    },
                    dragEnd: function(e) {
                        t.itemDragEnd(e.element)
                    }
                }, this.handleUIDraggable = {
                    start: function(e) {
                        t.itemDragStart(e.currentTarget)
                    },
                    drag: function(e, i) {
                        t.itemDragMove(e.currentTarget, i.position.left, i.position.top)
                    },
                    stop: function(e) {
                        t.itemDragEnd(e.currentTarget)
                    }
                }
            }, a.prototype._resetLayout = function() {
                this.getSize(), this._getMeasurements(), this.packer.width = this.size.innerWidth + this.gutter, this.packer.height = Number.POSITIVE_INFINITY, this.packer.reset(), this.maxY = 0
            }, a.prototype._getMeasurements = function() {
                this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width")
            }, a.prototype._getItemLayoutPosition = function(t) {
                return this._packItem(t), t.rect
            }, a.prototype._packItem = function(t) {
                this._setRectSize(t.element, t.rect), this.packer.pack(t.rect), this._setMaxY(t.rect)
            }, a.prototype._setMaxY = function(t) {
                this.maxY = Math.max(t.y + t.height, this.maxY)
            }, a.prototype._setRectSize = function(t, i) {
                var n = e(t),
                    o = n.outerWidth,
                    r = n.outerHeight,
                    a = this.columnWidth + this.gutter,
                    s = this.rowHeight + this.gutter;
                o = this.columnWidth ? Math.ceil(o / a) * a : o + this.gutter, r = this.rowHeight ? Math.ceil(r / s) * s : r + this.gutter, i.width = Math.min(o, this.packer.width), i.height = r
            }, a.prototype._getContainerSize = function() {
                return {
                    height: this.maxY - this.gutter
                }
            }, a.prototype._manageStamp = function(t) {
                var e, i = this.getItem(t);
                if (i && i.isPlacing) e = i.placeRect;
                else {
                    var o = this._getElementOffset(t);
                    e = new n({
                        x: this.options.isOriginLeft ? o.left : o.right,
                        y: this.options.isOriginTop ? o.top : o.bottom
                    })
                }
                this._setRectSize(t, e), this.packer.placed(e), this._setMaxY(e)
            }, a.prototype.sortItemsByPosition = function() {
                this.items.sort(function(t, e) {
                    return t.position.y - e.position.y || t.position.x - e.position.x
                })
            }, a.prototype.fit = function(t, e, i) {
                var n = this.getItem(t);
                n && (this._getMeasurements(), this.stamp(n.element), n.getSize(), n.isPlacing = !0, e = void 0 === e ? n.rect.x : e, i = void 0 === i ? n.rect.y : i, n.positionPlaceRect(e, i, !0), this._bindFitEvents(n), n.moveTo(n.placeRect.x, n.placeRect.y), this.layout(), this.unstamp(n.element), this.sortItemsByPosition(), n.isPlacing = !1, n.copyPlaceRectPosition())
            }, a.prototype._bindFitEvents = function(t) {
                function e() {
                    n++, 2 === n && i.emitEvent("fitComplete", [i, t])
                }
                var i = this,
                    n = 0;
                t.on("layout", function() {
                    return e(), !0
                }), this.on("layoutComplete", function() {
                    return e(), !0
                })
            }, a.prototype.itemDragStart = function(t) {
                this.stamp(t);
                var e = this.getItem(t);
                e && e.dragStart()
            }, a.prototype.itemDragMove = function(t, e, i) {
                function n() {
                    r.layout(), delete r.dragTimeout
                }
                var o = this.getItem(t);
                o && o.dragMove(e, i);
                var r = this;
                this.clearDragTimeout(), this.dragTimeout = setTimeout(n, 40)
            }, a.prototype.clearDragTimeout = function() {
                this.dragTimeout && clearTimeout(this.dragTimeout)
            }, a.prototype.itemDragEnd = function(e) {
                var i, n = this.getItem(e);
                if (n && (i = n.didDrag, n.dragStop()), !n || !i && !n.needsPositioning) return this.unstamp(e), void 0;
                t.add(n.element, "is-positioning-post-drag");
                var o = this._getDragEndLayoutComplete(e, n);
                n.needsPositioning ? (n.on("layout", o), n.moveTo(n.placeRect.x, n.placeRect.y)) : n && n.copyPlaceRectPosition(), this.clearDragTimeout(), this.on("layoutComplete", o), this.layout()
            }, a.prototype._getDragEndLayoutComplete = function(e, i) {
                var n = i && i.needsPositioning,
                    o = 0,
                    r = n ? 2 : 1,
                    a = this;
                return function() {
                    return o++, o !== r ? !0 : (i && (t.remove(i.element, "is-positioning-post-drag"), i.isPlacing = !1, i.copyPlaceRectPosition()), a.unstamp(e), a.sortItemsByPosition(), n && a.emitEvent("dragItemPositioned", [a, i]), !0)
                }
            }, a.prototype.bindDraggabillyEvents = function(t) {
                t.on("dragStart", this.handleDraggabilly.dragStart), t.on("dragMove", this.handleDraggabilly.dragMove), t.on("dragEnd", this.handleDraggabilly.dragEnd)
            }, a.prototype.bindUIDraggableEvents = function(t) {
                t.on("dragstart", this.handleUIDraggable.start).on("drag", this.handleUIDraggable.drag).on("dragstop", this.handleUIDraggable.stop)
            }, a.Rect = n, a.Packer = o, a
        }
        "function" == typeof define && define.amd ? define(["classie/classie", "get-size/get-size", "outlayer/outlayer", "./rect", "./packer", "./item"], e) : t.Packery = e(t.classie, t.getSize, t.Outlayer, t.Packery.Rect, t.Packery.Packer, t.Packery.Item)
    }(window), ! function(t, e) {
        "use strict";

        function i() {
            n.READY || (y.determineEventTypes(), v.each(n.gestures, function(t) {
                w.register(t)
            }), y.onTouch(n.DOCUMENT, p, w.detect), y.onTouch(n.DOCUMENT, g, w.detect), n.READY = !0)
        }
        var n = function k(t, e) {
            return new k.Instance(t, e || {})
        };
        n.VERSION = "1.1.3", n.defaults = {
            behavior: {
                userSelect: "none",
                touchAction: "pan-y",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        }, n.DOCUMENT = document, n.HAS_POINTEREVENTS = navigator.pointerEnabled || navigator.msPointerEnabled, n.HAS_TOUCHEVENTS = "ontouchstart" in t, n.IS_MOBILE = /mobile|tablet|ip(ad|hone|od)|android|silk/i.test(navigator.userAgent), n.NO_MOUSEEVENTS = n.HAS_TOUCHEVENTS && n.IS_MOBILE || n.HAS_POINTEREVENTS, n.CALCULATE_INTERVAL = 25;
        var o = {},
            r = n.DIRECTION_DOWN = "down",
            a = n.DIRECTION_LEFT = "left",
            s = n.DIRECTION_UP = "up",
            l = n.DIRECTION_RIGHT = "right",
            c = n.POINTER_MOUSE = "mouse",
            u = n.POINTER_TOUCH = "touch",
            d = n.POINTER_PEN = "pen",
            h = n.EVENT_START = "start",
            p = n.EVENT_MOVE = "move",
            g = n.EVENT_END = "end",
            f = n.EVENT_RELEASE = "release",
            m = n.EVENT_TOUCH = "touch";
        n.READY = !1, n.plugins = n.plugins || {}, n.gestures = n.gestures || {};
        var v = n.utils = {
                extend: function(t, i, n) {
                    for (var o in i) !i.hasOwnProperty(o) || t[o] !== e && n || (t[o] = i[o]);
                    return t
                },
                on: function(t, e, i) {
                    t.addEventListener(e, i, !1)
                },
                off: function(t, e, i) {
                    t.removeEventListener(e, i, !1)
                },
                each: function(t, i, n) {
                    var o, r;
                    if ("forEach" in t) t.forEach(i, n);
                    else if (t.length !== e) {
                        for (o = 0, r = t.length; r > o; o++)
                            if (i.call(n, t[o], o, t) === !1) return
                    } else
                        for (o in t)
                            if (t.hasOwnProperty(o) && i.call(n, t[o], o, t) === !1) return
                },
                inStr: function(t, e) {
                    return t.indexOf(e) > -1
                },
                inArray: function(t, e) {
                    if (t.indexOf) {
                        var i = t.indexOf(e);
                        return -1 === i ? !1 : i
                    }
                    for (var n = 0, o = t.length; o > n; n++)
                        if (t[n] === e) return n;
                    return !1
                },
                toArray: function(t) {
                    return Array.prototype.slice.call(t, 0)
                },
                hasParent: function(t, e) {
                    for (; t;) {
                        if (t == e) return !0;
                        t = t.parentNode
                    }
                    return !1
                },
                getCenter: function(t) {
                    var e = [],
                        i = [],
                        n = [],
                        o = [],
                        r = Math.min,
                        a = Math.max;
                    return 1 === t.length ? {
                        pageX: t[0].pageX,
                        pageY: t[0].pageY,
                        clientX: t[0].clientX,
                        clientY: t[0].clientY
                    } : (v.each(t, function(t) {
                        e.push(t.pageX), i.push(t.pageY), n.push(t.clientX), o.push(t.clientY)
                    }), {
                        pageX: (r.apply(Math, e) + a.apply(Math, e)) / 2,
                        pageY: (r.apply(Math, i) + a.apply(Math, i)) / 2,
                        clientX: (r.apply(Math, n) + a.apply(Math, n)) / 2,
                        clientY: (r.apply(Math, o) + a.apply(Math, o)) / 2
                    })
                },
                getVelocity: function(t, e, i) {
                    return {
                        x: Math.abs(e / t) || 0,
                        y: Math.abs(i / t) || 0
                    }
                },
                getAngle: function(t, e) {
                    var i = e.clientX - t.clientX,
                        n = e.clientY - t.clientY;
                    return 180 * Math.atan2(n, i) / Math.PI
                },
                getDirection: function(t, e) {
                    var i = Math.abs(t.clientX - e.clientX),
                        n = Math.abs(t.clientY - e.clientY);
                    return i >= n ? t.clientX - e.clientX > 0 ? a : l : t.clientY - e.clientY > 0 ? s : r
                },
                getDistance: function(t, e) {
                    var i = e.clientX - t.clientX,
                        n = e.clientY - t.clientY;
                    return Math.sqrt(i * i + n * n)
                },
                getScale: function(t, e) {
                    return t.length >= 2 && e.length >= 2 ? this.getDistance(e[0], e[1]) / this.getDistance(t[0], t[1]) : 1
                },
                getRotation: function(t, e) {
                    return t.length >= 2 && e.length >= 2 ? this.getAngle(e[1], e[0]) - this.getAngle(t[1], t[0]) : 0
                },
                isVertical: function(t) {
                    return t == s || t == r
                },
                setPrefixedCss: function(t, e, i, n) {
                    var o = ["", "Webkit", "Moz", "O", "ms"];
                    e = v.toCamelCase(e);
                    for (var r = 0; r < o.length; r++) {
                        var a = e;
                        if (o[r] && (a = o[r] + a.slice(0, 1).toUpperCase() + a.slice(1)), a in t.style) {
                            t.style[a] = (null == n || n) && i || "";
                            break
                        }
                    }
                },
                toggleBehavior: function(t, e, i) {
                    if (e && t && t.style) {
                        v.each(e, function(e, n) {
                            v.setPrefixedCss(t, n, e, i)
                        });
                        var n = i && function() {
                            return !1
                        };
                        "none" == e.userSelect && (t.onselectstart = n), "none" == e.userDrag && (t.ondragstart = n)
                    }
                },
                toCamelCase: function(t) {
                    return t.replace(/[_-]([a-z])/g, function(t) {
                        return t[1].toUpperCase()
                    })
                }
            },
            y = n.event = {
                preventMouseEvents: !1,
                started: !1,
                shouldDetect: !1,
                on: function(t, e, i, n) {
                    var o = e.split(" ");
                    v.each(o, function(e) {
                        v.on(t, e, i), n && n(e)
                    })
                },
                off: function(t, e, i, n) {
                    var o = e.split(" ");
                    v.each(o, function(e) {
                        v.off(t, e, i), n && n(e)
                    })
                },
                onTouch: function(t, e, i) {
                    var r = this,
                        a = function(o) {
                            var a, s = o.type.toLowerCase(),
                                l = n.HAS_POINTEREVENTS,
                                c = v.inStr(s, "mouse");
                            c && r.preventMouseEvents || (c && e == h && 0 === o.button ? (r.preventMouseEvents = !1, r.shouldDetect = !0) : l && e == h ? r.shouldDetect = 1 === o.buttons || b.matchType(u, o) : c || e != h || (r.preventMouseEvents = !0, r.shouldDetect = !0), l && e != g && b.updatePointer(e, o), r.shouldDetect && (a = r.doDetect.call(r, o, e, t, i)), a == g && (r.preventMouseEvents = !1, r.shouldDetect = !1, b.reset()), l && e == g && b.updatePointer(e, o))
                        };
                    return this.on(t, o[e], a), a
                },
                doDetect: function(t, e, i, n) {
                    var o = this.getTouchList(t, e),
                        r = o.length,
                        a = e,
                        s = o.trigger,
                        l = r;
                    e == h ? s = m : e == g && (s = f, l = o.length - (t.changedTouches ? t.changedTouches.length : 1)), l > 0 && this.started && (a = p), this.started = !0;
                    var c = this.collectEventData(i, a, o, t);
                    return e != g && n.call(w, c), s && (c.changedLength = l, c.eventType = s, n.call(w, c), c.eventType = a, delete c.changedLength), a == g && (n.call(w, c), this.started = !1), a
                },
                determineEventTypes: function() {
                    var e;
                    return e = n.HAS_POINTEREVENTS ? t.PointerEvent ? ["pointerdown", "pointermove", "pointerup pointercancel lostpointercapture"] : ["MSPointerDown", "MSPointerMove", "MSPointerUp MSPointerCancel MSLostPointerCapture"] : n.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"], o[h] = e[0], o[p] = e[1], o[g] = e[2], o
                },
                getTouchList: function(t, e) {
                    if (n.HAS_POINTEREVENTS) return b.getTouchList();
                    if (t.touches) {
                        if (e == p) return t.touches;
                        var i = [],
                            o = [].concat(v.toArray(t.touches), v.toArray(t.changedTouches)),
                            r = [];
                        return v.each(o, function(t) {
                            v.inArray(i, t.identifier) === !1 && r.push(t), i.push(t.identifier)
                        }), r
                    }
                    return t.identifier = 1, [t]
                },
                collectEventData: function(t, e, i, n) {
                    var o = u;
                    return v.inStr(n.type, "mouse") || b.matchType(c, n) ? o = c : b.matchType(d, n) && (o = d), {
                        center: v.getCenter(i),
                        timeStamp: Date.now(),
                        target: n.target,
                        touches: i,
                        eventType: e,
                        pointerType: o,
                        srcEvent: n,
                        preventDefault: function() {
                            var t = this.srcEvent;
                            t.preventManipulation && t.preventManipulation(), t.preventDefault && t.preventDefault()
                        },
                        stopPropagation: function() {
                            this.srcEvent.stopPropagation()
                        },
                        stopDetect: function() {
                            return w.stopDetect()
                        }
                    }
                }
            },
            b = n.PointerEvent = {
                pointers: {},
                getTouchList: function() {
                    var t = [];
                    return v.each(this.pointers, function(e) {
                        t.push(e)
                    }), t
                },
                updatePointer: function(t, e) {
                    t == g ? delete this.pointers[e.pointerId] : (e.identifier = e.pointerId, this.pointers[e.pointerId] = e)
                },
                matchType: function(t, e) {
                    if (!e.pointerType) return !1;
                    var i = e.pointerType,
                        n = {};
                    return n[c] = i === (e.MSPOINTER_TYPE_MOUSE || c), n[u] = i === (e.MSPOINTER_TYPE_TOUCH || u), n[d] = i === (e.MSPOINTER_TYPE_PEN || d), n[t]
                },
                reset: function() {
                    this.pointers = {}
                }
            },
            w = n.detection = {
                gestures: [],
                current: null,
                previous: null,
                stopped: !1,
                startDetect: function(t, e) {
                    this.current || (this.stopped = !1, this.current = {
                        inst: t,
                        startEvent: v.extend({}, e),
                        lastEvent: !1,
                        lastCalcEvent: !1,
                        futureCalcEvent: !1,
                        lastCalcData: {},
                        name: ""
                    }, this.detect(e))
                },
                detect: function(t) {
                    if (this.current && !this.stopped) {
                        t = this.extendEventData(t);
                        var e = this.current.inst,
                            i = e.options;
                        return v.each(this.gestures, function(n) {
                            !this.stopped && e.enabled && i[n.name] && n.handler.call(n, t, e)
                        }, this), this.current && (this.current.lastEvent = t), t.eventType == g && this.stopDetect(), t
                    }
                },
                stopDetect: function() {
                    this.previous = v.extend({}, this.current), this.current = null, this.stopped = !0
                },
                getCalculatedData: function(t, e, i, o, r) {
                    var a = this.current,
                        s = !1,
                        l = a.lastCalcEvent,
                        c = a.lastCalcData;
                    l && t.timeStamp - l.timeStamp > n.CALCULATE_INTERVAL && (e = l.center, i = t.timeStamp - l.timeStamp, o = t.center.clientX - l.center.clientX, r = t.center.clientY - l.center.clientY, s = !0), (t.eventType == m || t.eventType == f) && (a.futureCalcEvent = t), (!a.lastCalcEvent || s) && (c.velocity = v.getVelocity(i, o, r), c.angle = v.getAngle(e, t.center), c.direction = v.getDirection(e, t.center), a.lastCalcEvent = a.futureCalcEvent || t, a.futureCalcEvent = t), t.velocityX = c.velocity.x, t.velocityY = c.velocity.y, t.interimAngle = c.angle, t.interimDirection = c.direction
                },
                extendEventData: function(t) {
                    var e = this.current,
                        i = e.startEvent,
                        n = e.lastEvent || i;
                    (t.eventType == m || t.eventType == f) && (i.touches = [], v.each(t.touches, function(t) {
                        i.touches.push({
                            clientX: t.clientX,
                            clientY: t.clientY
                        })
                    }));
                    var o = t.timeStamp - i.timeStamp,
                        r = t.center.clientX - i.center.clientX,
                        a = t.center.clientY - i.center.clientY;
                    return this.getCalculatedData(t, n.center, o, r, a), v.extend(t, {
                        startEvent: i,
                        deltaTime: o,
                        deltaX: r,
                        deltaY: a,
                        distance: v.getDistance(i.center, t.center),
                        angle: v.getAngle(i.center, t.center),
                        direction: v.getDirection(i.center, t.center),
                        scale: v.getScale(i.touches, t.touches),
                        rotation: v.getRotation(i.touches, t.touches)
                    }), t
                },
                register: function(t) {
                    var i = t.defaults || {};
                    return i[t.name] === e && (i[t.name] = !0), v.extend(n.defaults, i, !0), t.index = t.index || 1e3, this.gestures.push(t), this.gestures.sort(function(t, e) {
                        return t.index < e.index ? -1 : t.index > e.index ? 1 : 0
                    }), this.gestures
                }
            };
        n.Instance = function(t, e) {
                var o = this;
                i(), this.element = t, this.enabled = !0, v.each(e, function(t, i) {
                    delete e[i], e[v.toCamelCase(i)] = t
                }), this.options = v.extend(v.extend({}, n.defaults), e || {}), this.options.behavior && v.toggleBehavior(this.element, this.options.behavior, !0), this.eventStartHandler = y.onTouch(t, h, function(t) {
                    o.enabled && t.eventType == h ? w.startDetect(o, t) : t.eventType == m && w.detect(t)
                }), this.eventHandlers = []
            }, n.Instance.prototype = {
                on: function(t, e) {
                    var i = this;
                    return y.on(i.element, t, e, function(t) {
                        i.eventHandlers.push({
                            gesture: t,
                            handler: e
                        })
                    }), i
                },
                off: function(t, e) {
                    var i = this;
                    return y.off(i.element, t, e, function(t) {
                        var n = v.inArray({
                            gesture: t,
                            handler: e
                        });
                        n !== !1 && i.eventHandlers.splice(n, 1)
                    }), i
                },
                trigger: function(t, e) {
                    e || (e = {});
                    var i = n.DOCUMENT.createEvent("Event");
                    i.initEvent(t, !0, !0), i.gesture = e;
                    var o = this.element;
                    return v.hasParent(e.target, o) && (o = e.target), o.dispatchEvent(i), this
                },
                enable: function(t) {
                    return this.enabled = t, this
                },
                dispose: function() {
                    var t, e;
                    for (v.toggleBehavior(this.element, this.options.behavior, !1), t = -1; e = this.eventHandlers[++t];) v.off(this.element, e.gesture, e.handler);
                    return this.eventHandlers = [], y.off(this.element, o[h], this.eventStartHandler), null
                }
            },
            function(t) {
                function e(e, n) {
                    var o = w.current;
                    if (!(n.options.dragMaxTouches > 0 && e.touches.length > n.options.dragMaxTouches)) switch (e.eventType) {
                        case h:
                            i = !1;
                            break;
                        case p:
                            if (e.distance < n.options.dragMinDistance && o.name != t) return;
                            var c = o.startEvent.center;
                            if (o.name != t && (o.name = t, n.options.dragDistanceCorrection && e.distance > 0)) {
                                var u = Math.abs(n.options.dragMinDistance / e.distance);
                                c.pageX += e.deltaX * u, c.pageY += e.deltaY * u, c.clientX += e.deltaX * u, c.clientY += e.deltaY * u, e = w.extendEventData(e)
                            }(o.lastEvent.dragLockToAxis || n.options.dragLockToAxis && n.options.dragLockMinDistance <= e.distance) && (e.dragLockToAxis = !0);
                            var d = o.lastEvent.direction;
                            e.dragLockToAxis && d !== e.direction && (e.direction = v.isVertical(d) ? e.deltaY < 0 ? s : r : e.deltaX < 0 ? a : l), i || (n.trigger(t + "start", e), i = !0), n.trigger(t, e), n.trigger(t + e.direction, e);
                            var m = v.isVertical(e.direction);
                            (n.options.dragBlockVertical && m || n.options.dragBlockHorizontal && !m) && e.preventDefault();
                            break;
                        case f:
                            i && e.changedLength <= n.options.dragMaxTouches && (n.trigger(t + "end", e), i = !1);
                            break;
                        case g:
                            i = !1
                    }
                }
                var i = !1;
                n.gestures.Drag = {
                    name: t,
                    index: 50,
                    handler: e,
                    defaults: {
                        dragMinDistance: 10,
                        dragDistanceCorrection: !0,
                        dragMaxTouches: 1,
                        dragBlockHorizontal: !1,
                        dragBlockVertical: !1,
                        dragLockToAxis: !1,
                        dragLockMinDistance: 25
                    }
                }
            }("drag"), n.gestures.Gesture = {
                name: "gesture",
                index: 1337,
                handler: function(t, e) {
                    e.trigger(this.name, t)
                }
            },
            function(t) {
                function e(e, n) {
                    var o = n.options,
                        r = w.current;
                    switch (e.eventType) {
                        case h:
                            clearTimeout(i), r.name = t, i = setTimeout(function() {
                                r && r.name == t && n.trigger(t, e)
                            }, o.holdTimeout);
                            break;
                        case p:
                            e.distance > o.holdThreshold && clearTimeout(i);
                            break;
                        case f:
                            clearTimeout(i)
                    }
                }
                var i;
                n.gestures.Hold = {
                    name: t,
                    index: 10,
                    defaults: {
                        holdTimeout: 500,
                        holdThreshold: 2
                    },
                    handler: e
                }
            }("hold"), n.gestures.Release = {
                name: "release",
                index: 1 / 0,
                handler: function(t, e) {
                    t.eventType == f && e.trigger(this.name, t)
                }
            }, n.gestures.Swipe = {
                name: "swipe",
                index: 40,
                defaults: {
                    swipeMinTouches: 1,
                    swipeMaxTouches: 1,
                    swipeVelocityX: .6,
                    swipeVelocityY: .6
                },
                handler: function(t, e) {
                    if (t.eventType == f) {
                        var i = t.touches.length,
                            n = e.options;
                        if (i < n.swipeMinTouches || i > n.swipeMaxTouches) return;
                        (t.velocityX > n.swipeVelocityX || t.velocityY > n.swipeVelocityY) && (e.trigger(this.name, t), e.trigger(this.name + t.direction, t))
                    }
                }
            },
            function(t) {
                function e(e, n) {
                    var o, r, a = n.options,
                        s = w.current,
                        l = w.previous;
                    switch (e.eventType) {
                        case h:
                            i = !1;
                            break;
                        case p:
                            i = i || e.distance > a.tapMaxDistance;
                            break;
                        case g:
                            !v.inStr(e.srcEvent.type, "cancel") && e.deltaTime < a.tapMaxTime && !i && (o = l && l.lastEvent && e.timeStamp - l.lastEvent.timeStamp, r = !1, l && l.name == t && o && o < a.doubleTapInterval && e.distance < a.doubleTapDistance && (n.trigger("doubletap", e), r = !0), (!r || a.tapAlways) && (s.name = t, n.trigger(s.name, e)))
                    }
                }
                var i = !1;
                n.gestures.Tap = {
                    name: t,
                    index: 100,
                    handler: e,
                    defaults: {
                        tapMaxTime: 250,
                        tapMaxDistance: 10,
                        tapAlways: !0,
                        doubleTapDistance: 20,
                        doubleTapInterval: 300
                    }
                }
            }("tap"), n.gestures.Touch = {
                name: "touch",
                index: -1 / 0,
                defaults: {
                    preventDefault: !1,
                    preventMouse: !1
                },
                handler: function(t, e) {
                    return e.options.preventMouse && t.pointerType == c ? void t.stopDetect() : (e.options.preventDefault && t.preventDefault(), void(t.eventType == m && e.trigger("touch", t)))
                }
            },
            function(t) {
                function e(e, n) {
                    switch (e.eventType) {
                        case h:
                            i = !1;
                            break;
                        case p:
                            if (e.touches.length < 2) return;
                            var o = Math.abs(1 - e.scale),
                                r = Math.abs(e.rotation);
                            if (o < n.options.transformMinScale && r < n.options.transformMinRotation) return;
                            w.current.name = t, i || (n.trigger(t + "start", e), i = !0), n.trigger(t, e), r > n.options.transformMinRotation && n.trigger("rotate", e), o > n.options.transformMinScale && (n.trigger("pinch", e), n.trigger("pinch" + (e.scale < 1 ? "in" : "out"), e));
                            break;
                        case f:
                            i && e.changedLength < 2 && (n.trigger(t + "end", e), i = !1)
                    }
                }
                var i = !1;
                n.gestures.Transform = {
                    name: t,
                    index: 45,
                    defaults: {
                        transformMinScale: .01,
                        transformMinRotation: 1
                    },
                    handler: e
                }
            }("transform"), "function" == typeof define && define.amd ? define(function() {
                return n
            }) : "undefined" != typeof module && module.exports ? module.exports = n : t.Hammer = n
    }(window);
var reg = {
    media: /\d.*?\.media\.tumblr\.com/i,
    oldServer: /(.*\:\/\/)([2-3][0-5|7-9])(\.media\.tumblr.*)/i,
    newServer: /(.*\:\/\/)([4-5][0-9]|36)(\.media\.tumblr.*)/i
};
$(document).ready(function() {
    function t(t) {
        var e = x.length,
            i = Math.floor(Math.random() * e);
        t.css("background-image", "url(" + x[i] + ")")
    }

    function e(t) {
        switch (t.gesture.preventDefault(), t.type) {
            case "swipeleft":
                if (O) return $(".blurredBackground").click(), t.gesture.stopDetect(), void 0;
                s(), t.gesture.stopDetect();
                break;
            case "swiperight":
                if (L) return $(".blurredBackground").click(), t.gesture.stopDetect(), void 0;
                l(), t.gesture.stopDetect()
        }
    }

    function i(t) {
        var e = t - 1,
            i = t + 1;
        $(".detailsWrapper").not("#details-" + t + ", #details-" + e + ", #details-" + i).remove()
    }

    function n(t) {
        $("#post-" + t).length > 0 && $("#post-" + t).data("permalink") !== document.URL && (stateObj.position = t, stateObj.identifier = $("#post-" + t).data("identifier"), History.pushState(stateObj, null, $("#post-" + t).data("permalink"))), t % 3 && $(".detailsWrapper").length >= 6 && i(t)
    }

    function o(t, e) {
        try {
            if ("home" === e) y($("#post-" + t), $("#post-" + t).data("type"), !1, "first");
            else if ("permalink" === e) y($("#post-" + t), $("#post-" + t).data("type"), !1, "forwards");
            else if (t > e) y($("#post-" + t), $("#post-" + t).data("type"), !1, "forwards");
            else {
                if (!(e > t)) return !1;
                y($("#post-" + t), $("#post-" + t).data("type"), !1, "backwards")
            }
        } catch (i) {
            d()
        }
    }

    function r() {
        $container = $("#grid"), gridSize = document.getElementById("gridSizer"), gutterSize = document.getElementById("gutterSizer"), postWidth = Math.floor(parseFloat(window.getComputedStyle(gridSize).width)), gutter = Math.floor(parseFloat(window.getComputedStyle(gutterSize).width)), landscapeWidth = 2 * postWidth + gutter, postHeight = Math.floor(1.3 * postWidth), lookbookOptions.screenWidth = window.innerWidth > 0 ? window.innerWidth : screen.width, lookbookOptions.screenHeight = window.innerHeight
    }

    function a(t) {
        {
            var e = document.querySelector("#grid");
            lookbookOptions.tidyGrid ? null : postHeight
        }
        "undefined" == typeof Packery.data(e) ? $container.packery({
            columnWidth: postWidth,
            rowHeight: 0,
            isResizeBound: !1,
            transitionDuration: "0s",
            itemSelector: ".gridItem",
            gutter: gutter
        }) : $container.packery("appended", t)
    }

    function s() {
        var t = stateObj.position + 1;
        n(t, "forwards")
    }

    function l() {
        var t = stateObj.position - 1;
        n(t, "backwards")
    }

    function c(e) {
        lookbookOptions.peekaboo ? e.css("background", "rgba(0,0,0,0.7)") : t(e)
    }

    function u(t) {
        $(t).detach(), $(t).each(function() {
            var t = postWidth,
                e = postHeight;
            if (!($(this).attr("class").indexOf("nextPage") > -1)) {
                $(this).attr({
                    id: "post-" + postIterator,
                    "data-position": postIterator
                }), $(this).data("tags").toString().indexOf("featured") > -1 && ($(this).addClass("featured"), t = landscapeWidth, lookbookOptions.screenWidth > 480 && (e = 2 * postHeight + gutter));
                var i = $(this).data("type");
                switch ($(this).find(".gridContent .tumblr_blog").parent().remove(), $(".gridContentWrapper", this).find("img").remove(), i) {
                    case "audio":
                        if ("string" == typeof $(this).data("art")) {
                            var n = $(this).data("art"),
                                o = 45;
                            S(n, $(this), o, n)
                        } else c($(this));
                        break;
                    case "video":
                        "string" == typeof $(this).data("thumbnail") ? $(this).css("background-image", "url(" + $(this).data("thumbnail") + ")") : ($(this).addClass("noThumbnail"), c($(this))), t = $(this).attr("class").indexOf("featured") > 0 ? landscapeWidth + postWidth + gutter : landscapeWidth;
                        var r = $(this).find(".videoCaption").text();
                        r.length > 160;
                        break;
                    case "text":
                        c($(this));
                        break;
                    case "link":
                        c($(this));
                        break;
                    case "photo":
                        if ($(this).data("height") < 100 && ($(this).attr("class").indexOf("featured") > 0 && $(this).data("width-high-res") > 500 ? (t = 2 * landscapeWidth + gutter, $(this).css("background-image", "url(" + $(this).data("photo-high") + ")")) : t = landscapeWidth), lookbookOptions.screenWidth <= 480) {
                            var a = $(this).data("width-500") / $(this).data("height-500");
                            e = postWidth / a
                        }
                        var s = $(this).css("background-image");
                        if (s.indexOf(".gif") > 0) {
                            var l = $(this).data("photo-100");
                            S(l, $(this), 3, l), $(this).addClass("gif").find(".fullDiv").css("background-image", s), $(this).find(".gridItemLabel").remove()
                        }
                        break;
                    case "quote":
                        t = landscapeWidth, c($(this));
                        break;
                    case "answer":
                        t = landscapeWidth, $(".chatContent", this).each(function() {
                            $(this).text().length < 1 && $(this).parent().remove()
                        }), $(".chatLine", this).text().length > 150 && (e = 2 * postHeight + gutter), c($(this));
                        break;
                    case "chat":
                        t = landscapeWidth, $(this).addClass("long"), c($(this))
                }
                $(this).css({
                    height: e + "px",
                    width: t + "px"
                }), postIterator++
            }
        }).promise().done(function() {
            $("#grid").append(t), $(t).not(".gridphoto").each(function() {}), a(t), $("#grid").removeClass("gridNotLoaded"), setTimeout(function() {
                $("#grid .appended").removeClass("appended")
            }, 1600)
        })
    }

    function d() {
        window.prevPosition = stateObj.position, stateObj.position = "home", History.pushState(stateObj, null, "/")
    }

    function h(t) {
        function i() {
            B.removeClass("details").addClass("indexPage");
            var i = $("#post-" + t).offset();
            i = i || "body", $(window).scrollTop(i.top), ($("body.permalink").length > 0 || lookbookOptions.screenWidth < 640) && ($("#grid").packery(), $("#tumblr_controls").remove()), hammertime.off("dragleft dragright swipeleft swiperight", e), setTimeout(function() {
                $(".detailsWrapper").remove(), $("#grid").infinitescroll("resume")
            }, 1400)
        }
        document.title = "Home", $(".detailsWrapper").not(".active").remove(), $(".detailsWrapper.active").addClass("stuck").removeClass("active"), $("#navigation, #grid").removeClass("hidden"), lookbookOptions.backgroundImage && B.css("background-image", lookbookOptions.backgroundImage), B.removeClass("permalink");
        var n = !1;
        B.on("webkitTransitionEnd.unloader transitionend.unloader msTransitionEnd.unloader oTransitionEnd.unloader", function(t) {
            $(t.target).hasClass("blurredBackground") && (B.off("webkitTransitionEnd.unloader transitionend.unloader msTransitionEnd.unloader oTransitionEnd.unloader"), n = !0, i())
        }), setTimeout(function() {
            n || (B.off("webkitTransitionEnd.unloader transitionend.unloader msTransitionEnd.unloader oTransitionEnd.unloader"), i())
        }, 3500)
    }

    function p() {
        hammertime.on("dragleft dragright swipeleft swiperight", e)
    }

    function g(t, e, i) {
        "forwards" == i ? t.addClass("right") : "backwards" == i && t.addClass("left"), t.removeClass("hidden"), "first" == i && $(window).scrollTop(1), setTimeout(function() {
            t.addClass("active").removeClass("right left")
        }, 150)
    }

    function f(t) {
        var e = {
            details: t,
            blur: t.find(".blurredBackground"),
            content: t.find(".permalinkContent")
        };
        return e
    }

    function m(t) {
        var e = t + 1;
        $("#post-" + e).length < 1 && t > 1 && $("#grid").infinitescroll("retrieve"), $("#details-" + e).length < 1 && y($("#post-" + e), $("#post-" + e).data("type"), !0, "forwards")
    }

    function v(e, i) {
        "none" !== e.css("background-image") ? $(".blurredBackground", i).css("background-image", "" + e.css("background-image")) : t($(".blurredBackground", i))
    }

    function y(t, e, i, n) {
        function o() {
            var i = t.find(".template").html(),
                n = $($.parseHTML(i));
            n.attr("id", "details-" + t.data("position")), n.append(t.find(".sidebarTemplate").html()), $(".permalinkMeta", n).find(".tumblr_blog").parent().remove(), lookbookOptions.screenWidth > 480 && lookbookOptions.screenWidth <= 640 && n.addClass("long");
            var o = n.find(".permalinkContent").text();
            switch ("quote" != e && o.length > 100 && n.addClass("long"), e) {
                case "photo":
                    S(t.attr(lookbookOptions.blurImage), $(".blurredBackground", n), 5, l);
                    var r = t.data("width-high-res") + 20;
                    r = "undefined" != typeof r ? r : 500;
                    var a = t.data("height-high-res") + 20,
                        s = a / r,
                        c = .9 * lookbookOptions.screenWidth,
                        u = .9 * $(window).height();
                    if (a > u)
                        if (lookbookOptions.screenWidth < 769) {
                            a = u;
                            var d = u / a;
                            r *= d
                        } else $(".permalinkContent", n).addClass("XL");
                    if (r > c && (r = c, a = r * s), $(".permalinkContent", n).css("height", "" + a + "px"), $(".permalinkContent", n).css("width", "" + r + "px"), lookbookOptions.screenWidth < 640) {
                        if (t.attr("class").indexOf("gif") < 1) var h = t.css("background-image");
                        else var h = t.find(".fullDiv").css("background-image");
                        h = h.replace("url(", "").replace(")", ""), $(".permalinkContent img:first", n).attr("src", h)
                    } else o.match(/(http|www)/) && $(".permalinkMeta", n).find("br").replaceWith(" ");
                    break;
                case "quote":
                    var p = $(".permalinkContent", n).text();
                    p.length > 1200 && ($(".permalinkContent", n).css("text-align", "left"), $(".permalinkQuoteSource", n).css("margin-left", "1em")), v(t, n);
                    break;
                case "answer":
                    $(".chatContent", n).each(function() {
                        $(this).text().length < 1 && $(this).parent().remove()
                    }), v(t, n);
                    break;
                case "video":
                    S(t.data("thumbnail"), $(".blurredBackground", n), 80, l);
                    break;
                default:
                    v(t, n)
            }
            return Tumblr.LikeButton.get_status_by_post_ids([l]), B.prepend(n), n
        }
        var r = t.data("position"),
            a = $("#details-" + r).length;
        if (a) var s = $("#details-" + r);
        var l = t.data("identifier");
        if (!i && (lookbookOptions.currentGridElement = t, B.hasClass("details"))) var c = !0;
        if ("first" == n) var c = !1;
        if (!a) var s = o();
        var u = f(s);
        if (i) u.details.addClass("right");
        else {
            if (c) {
                if (u.details.on("webkitTransitionEnd.transition transitionend.transition msTransitionEnd.transition oTransitionEnd.transition", function(t) {
                        $(t.target).hasClass("permalinkContent") && ($(window).scrollTop(1), $(this).off("webkitTransitionEnd.transition transitionend.transition msTransitionEnd.transition oTransitionEnd.transition"))
                    }), "forwards" === n) var d = "left";
                else var d = "right";
                var h = $(".detailsWrapper.active");
                h.removeClass("active first").addClass(d), setTimeout(function() {
                    h.addClass("hidden")
                }, 1e3), g(u.details, u.content, n)
            } else {
                if (u.details.addClass("first"), "permalink" == stateObj.position ? ($("#grid, #navigation").addClass("hidden"), g(u.details, u.content, "first")) : (transitionHappened = !1, B.addClass("details").removeClass("indexPage"), $("#grid").on("webkitTransitionEnd.loader transitionend.loader msTransitionEnd.loader oTransitionEnd.loader", function(t) {
                        $(t.target).hasClass("gridItem") && (transitionHappened = !0, $("#grid").off("webkitTransitionEnd.loader transitionend.loader msTransitionEnd.loader oTransitionEnd.loader"), g(u.details, u.content, "first"), setTimeout(function() {
                            $("#grid, #navigation").addClass("hidden")
                        }, 800))
                    }), setTimeout(function() {
                        transitionHappened || ($("#grid").off("webkitTransitionEnd.loader transitionend.loader msTransitionEnd.loader oTransitionEnd.loader"), g(u.details, u.content, "first"), $("#grid, #navigation").addClass("hidden"))
                    }, 3e3)), (lookbookOptions.randomBackground || lookbookOptions.imageBackground) && lookbookOptions.screenWidth > 1024) {
                    if (lookbookOptions.imageBackground) var y = "url(" + lookbookOptions.uploadedBackground + ")";
                    lookbookOptions.backgroundImage = y || B.css("background-image"), setTimeout(function() {
                        "number" == typeof stateObj.position && $("body.details").length > 0 && B.css("background-image", "none")
                    }, 4e3)
                }
                p()
            }
            setTimeout(function() {
                m(r)
            }, 1300)
        }
    }

    function b(t) {
        var e = $('<div class="notesContainer"></div>');
        e.load("" + t + " .notesTemplate", function() {
            var t = $($.parseHTML($(this).find(".notesTemplate").html()));
            e.prepend('<h1>Notes</h1><span class="closeNotes">BACK></span>').append(t), $(".detailsWrapper.active").append(e), setTimeout(function() {
                $(".detailsWrapper.active").addClass("notesOn").removeClass("notesOff")
            }, 150)
        })
    }

    function w(t, e, i) {
        var n = "http://lookbook-theme.wantering.com/?url=" + encodeURIComponent(t) + "&callback=" + e,
            o = document.createElement("script");
        window[e] = function(t) {
            i(t), window[e] = null
        }, o.src = n, document.body.appendChild(o)
    }

    function k(t) {
        return reg.oldServer.test(t) && (t = t.replace(reg.oldServer, "$129$3")), reg.newServer.test(t) && (t = t.replace(reg.newServer, "$140$3")), t
    }

    function S(e, i, n, o) {
        if (!lookbookOptions.bluromatic) return t($(i));
        if ("string" == typeof localStorage[o]) return i.css("background-image", "url(" + localStorage[o] + ")");
        o = "im" + String(o).replace(/[!\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, "");
        var r = {
            el: $(i),
            postId: o,
            radius: n * lookbookOptions.blurRatio,
            fullscreen: !1
        };
        reg.media.test(e) ? (r.path = k(e), stackBlur(r)) : w(e, o, function(t) {
            console.log(t.width), r.path = t.data, r.passedWidth = t.width, r.passedHeight = t.height, stackBlur(r)
        })
    }

    function C(t) {
        wantsOpen = !0, document.title = "My Loves On Wantering", $("#grid").addClass("gridNotLoaded"), $.getJSON("http://www.wantering.com/api/member/" + t + "/loves/?start=0&rows=50", function(t) {
            var e = $('<div id="wantGrid" class="gridNotLoaded"><h1 class="lovedItem" style="color: #000; width: 100%; margin: 0.1em 0 0.5em 0;">MY LOVES</h1><a href="' + lookbookOptions.wanteringURL + '" class="button" target="_blank">View On Wantering</a>'),
                i = "http://9c38.http.dal05.cdn.softlayer.net/wantering/";
            $.each(t.docs, function(n) {
                if (t.docs[n].price) var o = "<li>$" + t.docs[n].price + "</li>";
                else var o = "";
                $(e).append('<div class="lovedItem gridItem gridphoto" style="background-image: url(' + i + t.docs[n].images[0].medium.url + ');"><a href="http://www.wantering.com/clothing-item/' + t.docs[n].short_key + '/" target="_blank"><span class="fullDiv" style="cursor: pointer;"></a><div class="gridOverlay"><ul class="gridBottom"><li>' + t.docs[n].title + "</li>" + o + "</ul></div></div>")
            }), setTimeout(function() {
                $(window).scrollTop("body"), $(".gridItem").addClass("hidden"), $("#homePage").prepend(e), $("#wantGrid").packery({
                    rowHeight: 0,
                    isResizeBound: !1,
                    transitionDuration: "0s",
                    itemSelector: ".lovedItem",
                    gutter: gutter
                }), $("#wantGrid").removeClass("gridNotLoaded"), $("#navigation").removeClass("hidden")
            }, 750)
        }), $("#grid").infinitescroll("pause")
    }

    function E() {
        wantsOpen = !1, $("#grid").infinitescroll("resume"), $("#wantGrid").remove(), d(), $(".gridItem").removeClass("hidden"), setTimeout(function() {
            $("#grid").removeClass("gridNotLoaded")
        }, 50)
    }

    function A() {
        function t(t, e) {
            var i = o.test(e);
            return t + (i ? 1 : 0)
        }
        var e = $(".gridItem[data-tags]"),
            i = 0,
            n = $("#navContent p, #navContent h1, #navContent h2, #navContent span"),
            o = /\b(3some|3somes|Anal|Asphyxiation|BDSM|Beastiality|Bestiality|BJ|Blowjob|Blowjobs|Blow Job|Bondage|Boobs|Brothel|Bukkake|Callgirl|Cannibal|Cannibalism|Clit|Condom|Cock|Cum|Cunnilingus|Cunt|Deepthroat|Dildo|Dolcett|Dominatrix|Domme|Dungeon|Ejaculation|Escort|Facesitting|Fellatio|Femdom|Fisting|Fuck|Fucked|Fucking|Furry|Gangbang|Gloryhole|Handjob|Hentai|Jack Off|Masochism|Masochist|MILF|Naked|NSFW|Nympho|Orgy|Pee|Porn|Porno|Prostitute|Pussy|Rimjob|S\&M|Sadism|Sadist|Sado|Scat|Slave|Snuff|Strapon|Stripper|Submissive|Swinger|Tranny|Trans|T\-girl|T\-girls|Threesome|Throatfuck|Throat fuck|Twat|Vibrator|Wank|Xrated|XXX|Yiff)\b/i,
            r = $.map(n, function(t) {
                return t ? $(t).text() : ""
            }),
            a = r.reduce(t, 0);
        if (e && e.length) var s = $.map(e, function(t) {
                var e = $(t).data("tags");
                return e ? e.toString().split(",") : ""
            }),
            i = s.reduce(t, 0);
        return a > 0 || i > 2
    }

    function T() {
        _comscore = [], _comscore.push({
            c1: "2",
            c2: "18982368"
        });
        var t = document.createElement("script"),
            e = document.getElementsByTagName("script")[0];
        t.async = !0, t.src = ("https:" == document.location.protocol ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js", e.parentNode.insertBefore(t, e)
    }
    var I = $("#navSocial .social.button").length;
    $("#navSocial").addClass("services" + I), $("#navContent").removeClass("invisible"), stateObj.position && History.replaceState(stateObj, document.title, window.location.href);
    var B = $("body");
    $.fn.toobig = function() {
        var t = this[0];
        return .9 * $(window).height() < t.clientHeight
    }, $.fn.overflown = function() {
        var t = this[0];
        return t.scrollHeight > t.clientHeight
    };
    var x = ["http://static.tumblr.com/wi7jggm/OTwn0lker/1.jpg", "http://static.tumblr.com/wi7jggm/QVwn0lk0x/2.jpg", "http://static.tumblr.com/wi7jggm/sUun0lkg7/3.jpg", "http://static.tumblr.com/wi7jggm/l8xn0lk1t/4.jpg", "http://static.tumblr.com/wi7jggm/evZn0lkgr/5.jpg", "http://static.tumblr.com/wi7jggm/2fIn0lkh7/6.png", "http://static.tumblr.com/wi7jggm/W6Tn0lkji/7.png", "http://static.tumblr.com/wi7jggm/ZP8n0lkjw/8.png", "http://static.tumblr.com/3cvhfpr/as3n0rw9l/9.jpg", "http://static.tumblr.com/wi7jggm/Gs8n0lkks/10.png", "http://static.tumblr.com/wi7jggm/qQPn0lklb/11.png", "http://static.tumblr.com/wi7jggm/pimn0lkmi/12.png", "http://static.tumblr.com/wi7jggm/xvkn0lkn0/13.jpg", "http://static.tumblr.com/wi7jggm/OQ3n0lknn/14.jpg", "http://static.tumblr.com/3cvhfpr/Ivjn0rw47/15.jpg", "http://static.tumblr.com/wi7jggm/xTRn0lkp4/16.jpg", "http://static.tumblr.com/wi7jggm/6N7n0lkpq/17.jpg", "http://static.tumblr.com/3cvhfpr/67Rn0rvz7/18.jpg", "http://static.tumblr.com/wi7jggm/c0rn0lkrh/19.jpg", "http://static.tumblr.com/wi7jggm/z91n0lkrv/20.jpg", "http://static.tumblr.com/wi7jggm/lAen0lksa/21.jpg", "http://static.tumblr.com/wi7jggm/JZvn0lksq/22.jpg", "http://static.tumblr.com/wi7jggm/Bvzn0lkt6/23.jpg", "http://static.tumblr.com/wi7jggm/5q4n0lkto/24.jpg", "http://static.tumblr.com/wi7jggm/hm5n0lku2/25.jpg", "http://static.tumblr.com/wi7jggm/ccGn0lkuj/26.jpg", "http://static.tumblr.com/wi7jggm/avAn0lkv2/27.jpg"];
    navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && (lookbookOptions.blurImage = "data-photo-250", lookbookOptions.blurRatio = 2.5), wanteringUserURLParser = function(t) {
        if (t && t.indexOf("www.wantering.com") >= 0 && t.indexOf("member/") >= 0) {
            t = t.slice(0, t.indexOf("loves/")), t = t.substr(0, t.length - 1);
            var e = t.substr(t.lastIndexOf("/") + 1);
            return e
        }
        return !1
    }, Modernizr.testStyles("#modernizr { display: table; height: 50px; width: 50px; margin: auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0; }", function(t) {
        Modernizr.addTest("absolutecenter", Math.round($(window).height() / 2 - 25) - t.offsetTop < 5)
    }), Hammer.defaults.behavior.touchAction = "pan-y", hammertime = new Hammer(B[0], {
        drag_lock_to_axis: !0,
        prevent_mouseevents: !0
    }), History.Adapter.bind(window, "statechange", function() {
        var t = History.getState(),
            e = t.url,
            i = History.savedStates,
            n = i.length - 2,
            r = (i[n].cleanUrl, i[n].data.position);
        if (t)
            if ("home" == t.data.position) "loves" === r ? E() : h(r);
            else {
                if ("permalink" == t.data.position) return window.location = e, void 0;
                if ("loves" == t.data.position)("permalink" === r || "number" == typeof r) && h(), C(wanteringUserURLParser(lookbookOptions.wanteringURL));
                else if ("number" == typeof t.data.position) {
                    if ("permalink" == stateObj.position && t.data.identifier == stateObj.identifier) return;
                    if ($("#post-" + t.data.position).length < 1) return window.location = e, void 0;
                    if ($("#post-" + t.data.position).data("identifier") !== t.data.identifier) return window.location = e, void 0;
                    o(t.data.position, r)
                }
            }
    }), r(), postIterator = 1, u($(".gridItem")), $(window).keydown(function(t) {
        39 == t.which && "number" == typeof stateObj.position && (t.preventDefault(), s()), 27 == t.which && (t.preventDefault(), d()), 37 == t.which && "number" == typeof stateObj.position && (t.preventDefault(), l())
    }), $("#grid").infinitescroll({
        navSelector: "#pagination",
        itemSelector: ".gridItem",
        bufferPx: 100,
        prefill: !1,
        animate: !1,
        nextSelector: ".nextPage"
    }, function(t) {
        $(t).addClass("appended"), u($(t))
    }), lookbookOptions.infiniteScroll || ($(window).unbind(".infscr"), $("#grid").on("click.infinite", ".button", function() {
        return $("#grid").packery("remove", $(this)), $("#grid").infinitescroll("retrieve"), $("#grid").packery(), !1
    })), $("#grid").on("click.grid", ".gridItem:not(.nextPage)", function(t) {
        if (!Modernizr.history) return !0;
        var e = $(t.target);
        return e.is(".fa-external-link") ? !0 : ($("#grid").infinitescroll("pause"), stateObj.position = $(this).data("position"), stateObj.identifier = $(this).data("identifier"), History.pushState(stateObj, null, $(this).data("permalink")), !1)
    }), $("#xButton").click(function() {
        return Modernizr.history ? (d(), !1) : !0
    });
    var O = !1;
    B.on("click.navOn", "#miniAvatar", function() {
        $("#navigation").removeClass("hidden").addClass("unhidden"), O = !0, setTimeout(function() {
            B.addClass("navigationOn")
        }, 50), B.on("click.navOff", function(t) {
            t.preventDefault(), O = !1, B.addClass("navigationOff").removeClass("navigationOn"), setTimeout(function() {
                B.removeClass("navigationOff"), $("#navigation").removeClass("unhidden").addClass("hidden")
            }, 700), B.off("click.navOff")
        }), B.on("click.navOff", "#navigation", function(t) {
            $(t.target).is("#backButton, .wanteringButton") || t.stopPropagation()
        })
    }), lookbookOptions.randomBackground && (lookbookOptions.screenWidth <= 1024 ? t($("#navigation")) : t(B)), "permalink" == stateObj.position && ($("html").removeClass("tumblr_mobile_banner"), $("#grid").infinitescroll("pause"), y($("#post-1"), $("#post-1").data("type"), !1, "first"), stateObj.position = 1, setTimeout(function() {
        var t = $("<div />");
        t.load("/ .gridItem", function() {
            $(this).find(".id-" + stateObj.identifier).remove(), u($(this).find(".gridItem"))
        }), y($("#post-2"), $("#post-2").data("type"), !0, "forwards")
    }, 3e3), window.location.href.indexOf("/loves/") > -1 && (h("permalink"), C(wanteringUserURLParser(lookbookOptions.wanteringURL))));
    var L = !1;
    B.on("click.notes", ".sidebarNotes", function() {
        $(".detailsWrapper.active > .notesContainer").length <= 0 ? b(lookbookOptions.currentGridElement.data("permalink")) : $(".detailsWrapper.active").addClass("notesOn").removeClass("notesOff"), $("#miniAvatar, #xButton").addClass("offCanvas"), L = !0, B.on("click.notesOff", function(t) {
            L = !1, $(".detailsWrapper.active").removeClass("notesOn").addClass("notesOff"), B.off("click.notesOff"), setTimeout(function() {
                $(".detailsWrapper").removeClass("notesOff"), $("#miniAvatar, #xButton").removeClass("offCanvas")
            }, 600), t.preventDefault()
        })
    }), B.on("click.notes", ".notesContainer", function(t) {
        $(t.target).is(".closeNotes") || t.stopPropagation()
    });
    var R = 15;
    if (lookbookOptions.imageSidebar && lookbookOptions.blurSidebar && S(lookbookOptions.sidebarBackground, $("#navigation"), R, lookbookOptions.sidebarBackground + R), B.on("click.search", "#searchToggle", function() {
            $(".searchBox").toggleClass("hidden").focus()
        }), $("#navigation").overflown() && ($("#navigation").css({
            overflow: "scroll",
            overflow: "-ms-autohiding-scrollbar"
        }), $("#navContent").css("position", "relative")), wantsOpen = !1, $(window).resize(function() {
            return Math.abs(window.innerWidth - lookbookOptions.screenWidth) > 30 && $("body.indexPage").length > 0 && !wantsOpen ? (r(), $("#grid").addClass("gridNotLoaded"), $("#grid").packery("destroy"), postIterator = 1, u($(".gridItem")), void 0) : !1
        }), lookbookOptions.screenWidth <= 1024 && lookbookOptions.imageBackground && !lookbookOptions.imageSidebar && ($("#navigation").css("background-image", "url(" + lookbookOptions.uploadedBackground + ")"), lookbookOptions.repeatBackground && $("#navigation").css({
            "background-repeat": "repeat",
            "background-size": "initial"
        })), window.location.href.indexOf("/page/") >= 0 && $(".credit").remove(), window.location.href.indexOf("/customize_preview_receiver.html") >= 0 && localStorage) {
        var D = localStorage.themeInstalled,
            M = localStorage.hideHelper;
        D && !M && (B.append('<div id="customizationHelper" class="invisible" style="color: #fff"><div class="hideSection"><a href="#" class="button">Hide</a><a href="#" id="neverAgain">Never Show This Again</a></div><a href="http://www.wantering.com/?utm_source=lookbook&utm_medium=customize&utm_campaign=customize" target="_blank"><img src="http://dl.dropboxusercontent.com/u/892896/Wantering_ic_whiteW_transparentBG_57x57%20transparent.png" id="customizeLogo"/></a><div id="customizationContent"><p><h2>Thanks for installing Lookbook</h2><p>Here are a few tips to your Tumblog even more awesome</p><ol><li>To remove the sidebar background image, just turn off <span style="font-weight:500;">Image Sidebar</span>.</li><li>To turn on the mobile theme, go into Advanced Options and turn off <span style="font-weight:500">Use Mobile Optimized Layout</span>.</li><li>Make sure <span style="font-weight:500;">Posts Per Page</span> is set to 15.</li><li>If you have one outside link you really want people to notice, give it a title in the <span style="font-weight:500;">Big Link</span> field and enter a URL in the <span style="font-weight:500;">Big Link URL</span> field</li><li>If you\'re looking for fashion inspiration, be sure to check out <a href="http://www.wantering.com/?utm_source=lookbook&utm_medium=customize&utm_campaign=customize" target="_blank">Wantering</a> and follow our <a href="http://menswear.wantering.com/?utm_source=lookbook&utm_medium=customize&utm_campaign=customize" target="_blank">Mens</a> or <a href="http://womens.wantering.com/?utm_source=lookbook&utm_medium=customize&utm_campaign=customize" target="_blank">Womens</a> Tumblogs.</li><li>Show off the things you love by following <a href="http://lookbook.wantering.com/add-your-loves">these instructions</a>.</li></ol></div></div>'), setTimeout(function() {
            $("#customizationHelper").removeClass("invisible")
        }, 5e3), B.on("click.helper", ".hideSection", function(t) {
            $("#customizationHelper").addClass("invisible"), setTimeout(function() {
                $("#customizationHelper").remove()
            }, 1e3), $(t.target).is("#neverAgain") && (alert("Never again"), localStorage.setItem("hideHelper", "true"))
        })), localStorage.setItem("themeInstalled", "true")
    }
    wanteringUserURLParser(lookbookOptions.wanteringURL) && B.on("click.wants", ".wanteringButton", function() {
        stateObj.position = "loves", History.pushState(stateObj, null, "/loves/")
    });
    var P = lookbookOptions.blogURL || window.location.host;
    $.getJSON("http://api.tumblr.com/v2/blog/" + encodeURIComponent(P) + "/info?api_key=zGawzjXrCSYgZI8f3KyIE8z8a8mldNvW1pGf5LkX416ro7u4uA&callback=?", function(t) {
        if (t.meta && 200 == t.meta.status && 1 == t.response.blog.is_nsfw) return console.log("NSFW");
        A() ? !1 : T()
    }).always(function() {})
});
var _comscore = [];