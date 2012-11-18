
/**
 * jQuery.LocalScroll - Animated scrolling navigation, using anchors.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 3/11/2009
 * @author Ariel Flesler
 * @version 1.2.7
 **/
; (function ($) { var l = location.href.replace(/#.*/, ''); var g = $.localScroll = function (a) { $('body').localScroll(a) }; g.defaults = { duration: 1e3, axis: 'y', event: 'click', stop: true, target: window, reset: true }; g.hash = function (a) { if (location.hash) { a = $.extend({}, g.defaults, a); a.hash = false; if (a.reset) { var e = a.duration; delete a.duration; $(a.target).scrollTo(0, a); a.duration = e } i(0, location, a) } }; $.fn.localScroll = function (b) { b = $.extend({}, g.defaults, b); return b.lazy ? this.bind(b.event, function (a) { var e = $([a.target, a.target.parentNode]).filter(d)[0]; if (e) i(a, e, b) }) : this.find('a,area').filter(d).bind(b.event, function (a) { i(a, this, b) }).end().end(); function d() { return !!this.href && !!this.hash && this.href.replace(this.hash, '') == l && (!b.filter || $(this).is(b.filter)) } }; function i(a, e, b) { var d = e.hash.slice(1), f = document.getElementById(d) || document.getElementsByName(d)[0]; if (!f) return; if (a) a.preventDefault(); var h = $(b.target); if (b.lock && h.is(':animated') || b.onBefore && b.onBefore.call(b, a, f, h) === false) return; if (b.stop) h.stop(true); if (b.hash) { var j = f.id == d ? 'id' : 'name', k = $('<a> </a>').attr(j, d).css({ position: 'absolute', top: $(window).scrollTop(), left: $(window).scrollLeft() }); f[j] = ''; $('body').prepend(k); location = e.hash; k.remove(); f[j] = d } h.scrollTo(f, b).trigger('notify.serialScroll', [f]) } })(jQuery);
/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
; (function (d) { var k = d.scrollTo = function (a, i, e) { d(window).scrollTo(a, i, e) }; k.defaults = { axis: 'xy', duration: parseFloat(d.fn.jquery) >= 1.3 ? 0 : 1 }; k.window = function (a) { return d(window)._scrollable() }; d.fn._scrollable = function () { return this.map(function () { var a = this, i = !a.nodeName || d.inArray(a.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']) != -1; if (!i) return a; var e = (a.contentWindow || a).document || a.ownerDocument || a; return d.browser.safari || e.compatMode == 'BackCompat' ? e.body : e.documentElement }) }; d.fn.scrollTo = function (n, j, b) { if (typeof j == 'object') { b = j; j = 0 } if (typeof b == 'function') b = { onAfter: b }; if (n == 'max') n = 9e9; b = d.extend({}, k.defaults, b); j = j || b.speed || b.duration; b.queue = b.queue && b.axis.length > 1; if (b.queue) j /= 2; b.offset = p(b.offset); b.over = p(b.over); return this._scrollable().each(function () { var q = this, r = d(q), f = n, s, g = {}, u = r.is('html,body'); switch (typeof f) { case 'number': case 'string': if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)) { f = p(f); break } f = d(f, this); case 'object': if (f.is || f.style) s = (f = d(f)).offset() } d.each(b.axis.split(''), function (a, i) { var e = i == 'x' ? 'Left' : 'Top', h = e.toLowerCase(), c = 'scroll' + e, l = q[c], m = k.max(q, i); if (s) { g[c] = s[h] + (u ? 0 : l - r.offset()[h]); if (b.margin) { g[c] -= parseInt(f.css('margin' + e)) || 0; g[c] -= parseInt(f.css('border' + e + 'Width')) || 0 } g[c] += b.offset[h] || 0; if (b.over[h]) g[c] += f[i == 'x' ? 'width' : 'height']() * b.over[h] } else { var o = f[h]; g[c] = o.slice && o.slice(-1) == '%' ? parseFloat(o) / 100 * m : o } if (/^\d+$/.test(g[c])) g[c] = g[c] <= 0 ? 0 : Math.min(g[c], m); if (!a && b.queue) { if (l != g[c]) t(b.onAfterFirst); delete g[c] } }); t(b.onAfter); function t(a) { r.animate(g, j, b.easing, a && function () { a.call(this, n, b) }) } }).end() }; k.max = function (a, i) { var e = i == 'x' ? 'Width' : 'Height', h = 'scroll' + e; if (!d(a).is('html,body')) return a[h] - d(a)[e.toLowerCase()](); var c = 'client' + e, l = a.ownerDocument.documentElement, m = a.ownerDocument.body; return Math.max(l[h], m[h]) - Math.min(l[c], m[c]) }; function p(a) { return typeof a == 'object' ? a : { top: a, left: a } } })(jQuery);
/* Modernizr 2.0.6 (Custom Build) | MIT & BSD
 * http://www.modernizr.com
 * Fix for older browsers to accept HTML5 elements
 */
; window.Modernizr = function (a, b, c) { function D(a, b) { var c = a.charAt(0).toUpperCase() + a.substr(1), d = (a + " " + p.join(c + " ") + c).split(" "); return C(d, b) } function C(a, b) { for (var d in a) if (k[a[d]] !== c) return b == "pfx" ? a[d] : !0; return !1 } function B(a, b) { return !!~("" + a).indexOf(b) } function A(a, b) { return typeof a === b } function z(a, b) { return y(o.join(a + ";") + (b || "")) } function y(a) { k.cssText = a } var d = "2.0.6", e = {}, f = !0, g = b.documentElement, h = b.head || b.getElementsByTagName("head")[0], i = "modernizr", j = b.createElement(i), k = j.style, l, m = ":)", n = Object.prototype.toString, o = " -webkit- -moz- -o- -ms- -khtml- ".split(" "), p = "Webkit Moz O ms Khtml".split(" "), q = {}, r = {}, s = {}, t = [], u = function (a, c, d, e) { var f, h, j, k = b.createElement("div"); if (parseInt(d, 10)) while (d--) j = b.createElement("div"), j.id = e ? e[d] : i + (d + 1), k.appendChild(j); f = ["&shy;", "<style>", a, "</style>"].join(""), k.id = i, k.innerHTML += f, g.appendChild(k), h = c(k, a), k.parentNode.removeChild(k); return !!h }, v, w = {}.hasOwnProperty, x; !A(w, c) && !A(w.call, c) ? x = function (a, b) { return w.call(a, b) } : x = function (a, b) { return b in a && A(a.constructor.prototype[b], c) }; var E = function (a, c) { var d = a.join(""), f = c.length; u(d, function (a, c) { var d = b.styleSheets[b.styleSheets.length - 1], g = d.cssRules && d.cssRules[0] ? d.cssRules[0].cssText : d.cssText || "", h = a.childNodes, i = {}; while (f--) i[h[f].id] = h[f]; e.csstransforms3d = i.csstransforms3d.offsetLeft === 9, e.generatedcontent = i.generatedcontent.offsetHeight >= 1, e.fontface = /src/i.test(g) && g.indexOf(c.split(" ")[0]) === 0 }, f, c) }(['@font-face {font-family:"font";src:url("https://")}', ["@media (", o.join("transform-3d),("), i, ")", "{#csstransforms3d{left:9px;position:absolute}}"].join(""), ['#generatedcontent:after{content:"', m, '";visibility:hidden}'].join("")], ["fontface", "csstransforms3d", "generatedcontent"]); q.flexbox = function () { function c(a, b, c, d) { a.style.cssText = o.join(b + ":" + c + ";") + (d || "") } function a(a, b, c, d) { b += ":", a.style.cssText = (b + o.join(c + ";" + b)).slice(0, -b.length) + (d || "") } var d = b.createElement("div"), e = b.createElement("div"); a(d, "display", "box", "width:42px;padding:0;"), c(e, "box-flex", "1", "width:10px;"), d.appendChild(e), g.appendChild(d); var f = e.offsetWidth === 42; d.removeChild(e), g.removeChild(d); return f }, q.rgba = function () { y("background-color:rgba(150,255,150,.5)"); return B(k.backgroundColor, "rgba") }, q.hsla = function () { y("background-color:hsla(120,40%,100%,.5)"); return B(k.backgroundColor, "rgba") || B(k.backgroundColor, "hsla") }, q.multiplebgs = function () { y("background:url(https://),url(https://),red url(https://)"); return /(url\s*\(.*?){3}/.test(k.background) }, q.backgroundsize = function () { return D("backgroundSize") }, q.borderimage = function () { return D("borderImage") }, q.borderradius = function () { return D("borderRadius") }, q.boxshadow = function () { return D("boxShadow") }, q.textshadow = function () { return b.createElement("div").style.textShadow === "" }, q.opacity = function () { z("opacity:.55"); return /^0.55$/.test(k.opacity) }, q.cssanimations = function () { return D("animationName") }, q.csscolumns = function () { return D("columnCount") }, q.cssgradients = function () { var a = "background-image:", b = "gradient(linear,left top,right bottom,from(#9f9),to(white));", c = "linear-gradient(left top,#9f9, white);"; y((a + o.join(b + a) + o.join(c + a)).slice(0, -a.length)); return B(k.backgroundImage, "gradient") }, q.cssreflections = function () { return D("boxReflect") }, q.csstransforms = function () { return !!C(["transformProperty", "WebkitTransform", "MozTransform", "OTransform", "msTransform"]) }, q.csstransforms3d = function () { var a = !!C(["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]); a && "webkitPerspective" in g.style && (a = e.csstransforms3d); return a }, q.csstransitions = function () { return D("transitionProperty") }, q.fontface = function () { return e.fontface }, q.generatedcontent = function () { return e.generatedcontent }; for (var F in q) x(q, F) && (v = F.toLowerCase(), e[v] = q[F](), t.push((e[v] ? "" : "no-") + v)); y(""), j = l = null, a.attachEvent && function () { var a = b.createElement("div"); a.innerHTML = "<elem></elem>"; return a.childNodes.length !== 1 }() && function (a, b) { function s(a) { var b = -1; while (++b < g) a.createElement(f[b]) } a.iepp = a.iepp || {}; var d = a.iepp, e = d.html5elements || "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", f = e.split("|"), g = f.length, h = new RegExp("(^|\\s)(" + e + ")", "gi"), i = new RegExp("<(/*)(" + e + ")", "gi"), j = /^\s*[\{\}]\s*$/, k = new RegExp("(^|[^\\n]*?\\s)(" + e + ")([^\\n]*)({[\\n\\w\\W]*?})", "gi"), l = b.createDocumentFragment(), m = b.documentElement, n = m.firstChild, o = b.createElement("body"), p = b.createElement("style"), q = /print|all/, r; d.getCSS = function (a, b) { if (a + "" === c) return ""; var e = -1, f = a.length, g, h = []; while (++e < f) { g = a[e]; if (g.disabled) continue; b = g.media || b, q.test(b) && h.push(d.getCSS(g.imports, b), g.cssText), b = "all" } return h.join("") }, d.parseCSS = function (a) { var b = [], c; while ((c = k.exec(a)) != null) b.push(((j.exec(c[1]) ? "\n" : c[1]) + c[2] + c[3]).replace(h, "$1.iepp_$2") + c[4]); return b.join("\n") }, d.writeHTML = function () { var a = -1; r = r || b.body; while (++a < g) { var c = b.getElementsByTagName(f[a]), d = c.length, e = -1; while (++e < d) c[e].className.indexOf("iepp_") < 0 && (c[e].className += " iepp_" + f[a]) } l.appendChild(r), m.appendChild(o), o.className = r.className, o.id = r.id, o.innerHTML = r.innerHTML.replace(i, "<$1font") }, d._beforePrint = function () { p.styleSheet.cssText = d.parseCSS(d.getCSS(b.styleSheets, "all")), d.writeHTML() }, d.restoreHTML = function () { o.innerHTML = "", m.removeChild(o), m.appendChild(r) }, d._afterPrint = function () { d.restoreHTML(), p.styleSheet.cssText = "" }, s(b), s(l); d.disablePP || (n.insertBefore(p, n.firstChild), p.media = "print", p.className = "iepp-printshim", a.attachEvent("onbeforeprint", d._beforePrint), a.attachEvent("onafterprint", d._afterPrint)) }(a, b), e._version = d, e._prefixes = o, e._domPrefixes = p, e.testProp = function (a) { return C([a]) }, e.testAllProps = D, e.testStyles = u, g.className = g.className.replace(/\bno-js\b/, "") + (f ? " js " + t.join(" ") : ""); return e }(this, this.document), function (a, b, c) { function k(a) { return !a || a == "loaded" || a == "complete" } function j() { var a = 1, b = -1; while (p.length - ++b) if (p[b].s && !(a = p[b].r)) break; a && g() } function i(a) { var c = b.createElement("script"), d; c.src = a.s, c.onreadystatechange = c.onload = function () { !d && k(c.readyState) && (d = 1, j(), c.onload = c.onreadystatechange = null) }, m(function () { d || (d = 1, j()) }, H.errorTimeout), a.e ? c.onload() : n.parentNode.insertBefore(c, n) } function h(a) { var c = b.createElement("link"), d; c.href = a.s, c.rel = "stylesheet", c.type = "text/css"; if (!a.e && (w || r)) { var e = function (a) { m(function () { if (!d) try { a.sheet.cssRules.length ? (d = 1, j()) : e(a) } catch (b) { b.code == 1e3 || b.message == "security" || b.message == "denied" ? (d = 1, m(function () { j() }, 0)) : e(a) } }, 0) }; e(c) } else c.onload = function () { d || (d = 1, m(function () { j() }, 0)) }, a.e && c.onload(); m(function () { d || (d = 1, j()) }, H.errorTimeout), !a.e && n.parentNode.insertBefore(c, n) } function g() { var a = p.shift(); q = 1, a ? a.t ? m(function () { a.t == "c" ? h(a) : i(a) }, 0) : (a(), j()) : q = 0 } function f(a, c, d, e, f, h) { function i() { !o && k(l.readyState) && (r.r = o = 1, !q && j(), l.onload = l.onreadystatechange = null, m(function () { u.removeChild(l) }, 0)) } var l = b.createElement(a), o = 0, r = { t: d, s: c, e: h }; l.src = l.data = c, !s && (l.style.display = "none"), l.width = l.height = "0", a != "object" && (l.type = d), l.onload = l.onreadystatechange = i, a == "img" ? l.onerror = i : a == "script" && (l.onerror = function () { r.e = r.r = 1, g() }), p.splice(e, 0, r), u.insertBefore(l, s ? null : n), m(function () { o || (u.removeChild(l), r.r = r.e = o = 1, j()) }, H.errorTimeout) } function e(a, b, c) { var d = b == "c" ? z : y; q = 0, b = b || "j", C(a) ? f(d, a, b, this.i++, l, c) : (p.splice(this.i++, 0, a), p.length == 1 && g()); return this } function d() { var a = H; a.loader = { load: e, i: 0 }; return a } var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance" in l.style, s = r && !!b.createRange().compareNode, t = r && !s, u = s ? l : n.parentNode, v = a.opera && o.call(a.opera) == "[object Opera]", w = "webkitAppearance" in l.style, x = w && "async" in b.createElement("script"), y = r ? "object" : v || x ? "img" : "script", z = w ? "img" : y, A = Array.isArray || function (a) { return o.call(a) == "[object Array]" }, B = function (a) { return Object(a) === a }, C = function (a) { return typeof a == "string" }, D = function (a) { return o.call(a) == "[object Function]" }, E = [], F = {}, G, H; H = function (a) { function f(a) { var b = a.split("!"), c = E.length, d = b.pop(), e = b.length, f = { url: d, origUrl: d, prefixes: b }, g, h; for (h = 0; h < e; h++) g = F[b[h]], g && (f = g(f)); for (h = 0; h < c; h++) f = E[h](f); return f } function e(a, b, e, g, h) { var i = f(a), j = i.autoCallback; if (!i.bypass) { b && (b = D(b) ? b : b[a] || b[g] || b[a.split("/").pop().split("?")[0]]); if (i.instead) return i.instead(a, b, e, g, h); e.load(i.url, i.forceCSS || !i.forceJS && /css$/.test(i.url) ? "c" : c, i.noexec), (D(b) || D(j)) && e.load(function () { d(), b && b(i.origUrl, h, g), j && j(i.origUrl, h, g) }) } } function b(a, b) { function c(a) { if (C(a)) e(a, h, b, 0, d); else if (B(a)) for (i in a) a.hasOwnProperty(i) && e(a[i], h, b, i, d) } var d = !!a.test, f = d ? a.yep : a.nope, g = a.load || a.both, h = a.callback, i; c(f), c(g), a.complete && b.load(a.complete) } var g, h, i = this.yepnope.loader; if (C(a)) e(a, 0, i, 0); else if (A(a)) for (g = 0; g < a.length; g++) h = a[g], C(h) ? e(h, 0, i, 0) : A(h) ? H(h) : B(h) && b(h, i); else B(a) && b(a, i) }, H.addPrefix = function (a, b) { F[a] = b }, H.addFilter = function (a) { E.push(a) }, H.errorTimeout = 1e4, b.readyState == null && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", G = function () { b.removeEventListener("DOMContentLoaded", G, 0), b.readyState = "complete" }, 0)), a.yepnope = d() }(this, this.document), Modernizr.load = function () { yepnope.apply(window, [].slice.call(arguments, 0)) };

/* Parallax Scroll Effect
 * Thanks to http://www.marklawrencedesign.com/ for original scripts
 */
$(window).load(function () {
    $(window).scroll(function (e) {

        var delay = 0;
        var bg_speed = 0.6;
        var object_speed = 0.5;
        var object_speed2 = 1.2;
        var object_speed3 = 1.5;
        var object_speed4 = 0.3;
        var object_speed5 = 0.6;

        var container_offset = -300;

        var scroll_position = $(window).scrollTop();

        $("#mainContainer").stop().animate({ top: 0 - scroll_position }, delay);
        $("#mainContainer2").stop().animate({ top: 0 - scroll_position }, delay);

        if (scroll_position >= 0 && scroll_position <= 1908) {
            $(".concrete").stop().animate({ top: container_offset - (-435 * bg_speed) + (scroll_position * bg_speed) }, delay);
            $(".copper").stop().animate({ top: (120 * object_speed) + (scroll_position * object_speed) }, delay);
            $(".copper").stop().animate({ left: (145 * object_speed * 2) + (scroll_position * object_speed) }, delay);
            $(".copper-shadow").stop().animate({ top: (250 * object_speed4) + (scroll_position * object_speed4) }, delay);
            $(".copper-shadow").stop().animate({ left: (263 * object_speed4) + (scroll_position * object_speed4) }, delay);
            $(".glass").stop().animate({ top: (1215 * object_speed) + (scroll_position * object_speed) }, delay);
            $(".office").stop().animate({ top: (1600 * object_speed * .2) + (scroll_position * object_speed) }, delay);
            $('.office').css('background-position', '0 0');
        }

        if (scroll_position >= 0 && scroll_position <= 708) {
            $(".wwd_bg").stop().animate({ top: (232 * object_speed2 * 2) + (scroll_position * object_speed2) }, delay);
            $('.office').css('background-position', '0 -1024px');
        }

        if (scroll_position >= 1248 && scroll_position <= 3608) {
            $(".brilliant_bg").stop().animate({ top: (-1292 * object_speed * .8) + (scroll_position * object_speed) }, delay);
        }

        if (scroll_position >= 848 && scroll_position <= 3408) {
            $(".wood").stop().animate({ top: (-2200 * object_speed2) + (scroll_position * object_speed2) }, delay);
            $(".wood").stop().animate({ left: (-3800 * object_speed * 1) + (scroll_position * object_speed) }, delay);
        }

        if (scroll_position >= 1500 && scroll_position <= 4200) {
            $(".office2").stop().animate({ top: (-1425 * object_speed * 2) + (scroll_position * object_speed) }, delay);
        }

        if (scroll_position >= 2300 && scroll_position <= 4450) {
            $(".ow_bg").stop().animate({ top: (-1602 * object_speed * 2) + (scroll_position * object_speed) }, delay);
        }

        if (scroll_position >= 3500 && scroll_position <= 5200) {
            $(".purple_bg").stop().animate({ top: container_offset - (3100 * bg_speed) + (scroll_position * bg_speed) }, delay);
        }

        if (scroll_position >= 5200 && scroll_position <= 6600) {
            $(".contact_image").stop().animate({ top: (-2750 * object_speed) + (scroll_position * object_speed) }, delay);
        }

        if (scroll_position >= 3700 && scroll_position <= 5800) {
            $(".black_bar").stop().animate({ top: (-3600 * object_speed) + (scroll_position * object_speed) }, delay);
            $(".black_bar").stop().animate({ left: (-3000 * object_speed2 * 2) + (scroll_position * object_speed2) }, delay);
        }

        if (scroll_position >= 5000 && scroll_position <= 6700) {
            $(".pink_bar").stop().animate({ top: (-5700 * object_speed) + (scroll_position * object_speed) }, delay);
            $(".pink_bar").stop().animate({ left: (-1200 * object_speed4 * 2) + (scroll_position * object_speed4) }, delay);
        }
        if (scroll_position >= 900 && scroll_position <= 1608) {
            $(".black_bar2").stop().animate({ top: (-1950 * object_speed) + (scroll_position * object_speed) }, delay);
            $(".black_bar2").stop().animate({ left: (-1200 * object_speed2 * 2) + (scroll_position * object_speed2) }, delay);
        }

        // changing navigation selection
        if (scroll_position >= 0 && scroll_position <= 733) {
            $('a[href*=#]').removeClass('current');
            $('a[href=#home]').addClass('current');
        }

        if (scroll_position >= 733 && scroll_position <= 1415) {
            $('a[href*=#]').removeClass('current');
            $('a[href=#about-us]').addClass('current');
        }

        if (scroll_position >= 1415 && scroll_position <= 2133) {
            $('a[href*=#]').removeClass('current');
            $('a[href=#menu]').addClass('current');
        }

        if (scroll_position >= 2133 && scroll_position <= 2834) {
            $('a[href*=#]').removeClass('current');
            $('a[href=#locations]').addClass('current');
        }

        if (scroll_position >= 2834 && scroll_position <= 3540) {
            $('a[href*=#]').removeClass('current');
            $('a[href=#jobs]').addClass('current');
        }

        if (scroll_position >= 3540) {
            $('a[href*=#]').removeClass('current');
            $('a[href=#connect]').addClass('current');
        }
    });
});


(function (nsRoot) {
    nsRoot.Codeslinger = nsRoot.Codeslinger || {};

    Codeslinger.ImageRotator = function() {
        $('#homerotator').cycle({
            fx: 'scrollLeft',
            timeout: 5000,
            next: '.next',
            prev: '.prev'
        });
    };
    
    Codeslinger.myMapOptions = {
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    Codeslinger.currentMap = new google.maps.Map(document.getElementById("map_canvas"), Codeslinger.myMapOptions);
    
    Codeslinger.image = new google.maps.MarkerImage(
      '/Images/map-pin.png',
      new google.maps.Size(49, 51),
      new google.maps.Point(0, 0),
      new google.maps.Point(0, 51)
    );

    Codeslinger.shadow = new google.maps.MarkerImage(
      '/Images/map-pin-shadow.png',
      new google.maps.Size(79, 51),
      new google.maps.Point(0, 0),
      new google.maps.Point(10, 27)
    );

    Codeslinger.shape = {
        coord: [20, 0, 23, 1, 25, 2, 25, 3, 24, 4, 24, 5, 23, 6, 41, 7, 42, 8, 42, 9, 42, 10, 42, 11, 42, 12, 44, 13, 45, 14, 47, 15, 47, 16, 48, 17, 48, 18, 48, 19, 38, 20, 36, 21, 35, 22, 34, 23, 32, 24, 31, 25, 28, 26, 13, 27, 14, 28, 14, 29, 14, 30, 14, 31, 13, 32, 13, 33, 13, 34, 13, 35, 12, 36, 12, 37, 12, 38, 12, 39, 12, 40, 11, 41, 11, 42, 11, 43, 11, 44, 11, 45, 10, 46, 10, 47, 10, 48, 10, 49, 10, 50, 8, 50, 6, 49, 6, 48, 1, 47, 0, 46, 0, 45, 0, 44, 1, 43, 1, 42, 2, 41, 2, 40, 3, 39, 3, 38, 4, 37, 4, 36, 5, 35, 5, 34, 6, 33, 6, 32, 7, 31, 7, 30, 8, 29, 8, 28, 9, 27, 9, 26, 10, 25, 10, 24, 11, 23, 11, 22, 10, 21, 10, 20, 8, 19, 7, 18, 7, 17, 6, 16, 5, 15, 5, 14, 5, 13, 6, 12, 4, 11, 3, 10, 3, 9, 3, 8, 3, 7, 3, 6, 3, 5, 4, 4, 6, 3, 8, 2, 11, 1, 17, 0, 20, 0],
        type: 'poly'
    };

    Codeslinger.geocoder = new google.maps.Geocoder();

    Codeslinger.MapAddress = function(address) {
        Codeslinger.geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                Codeslinger.MapPoint(results[0].geometry.location);
            } else {
                alert("Geocode was not successful for the following reason: " + status);
            }
        });
    };

    Codeslinger.MapPoint = function (point) {
        Codeslinger.currentMap.setCenter(point);

        var marker = new google.maps.Marker({
            draggable: false,
            raiseOnDrag: false,
            icon: Codeslinger.image,
            shadow: Codeslinger.shadow,
            shape: Codeslinger.shape,
            map: Codeslinger.currentMap,
            position: point
        });
    };

    Codeslinger.GetTweets = function () {
        var twitterUrl = 'https://api.twitter.com/1/statuses/user_timeline.json?screen_name=goodtimesushi&count=5';
        var circleSelector = '.twitter article.circle-';
        $.ajax({
            url: twitterUrl,
            type: 'GET',
            dataType: "jsonp",
            success: function (json) {
                $.each(json, function (i) {
                    var timeMessage;
                    var time = (new Date().getTime() - new Date(this.created_at).getTime()) / 360000;
                    if (time >= 24) {
                        var days = Math.floor(time / 24);
                        timeMessage = 'Posted ' + days + ' day' + (days === 1 ? '' : 's') + ' ago';
                    } else {
                        var hours = Math.floor(time);
                        timeMessage = 'Posted ' + hours + ' hour' + (hours === 1 ? '' : 's') + ' ago';
                    }

                    var circle = $(circleSelector + (i + 1));
                    circle.find('p').text(this.text);
                    circle.find('span').text(timeMessage);
                });
            }
        });
    };

    Codeslinger.GetIG = function() {
        var igUrl = 'https://api.instagram.com/v1/tags/sushi/media/recent?client_id=3e201de086ee486aaafe88f0d2849ff1';
        var igList = $('div.ig>ul');
        igList.empty();
        $.ajax({
            url: igUrl,
            type: 'GET',
            dataType: "jsonp",
            success: function (json) {
                $.each(json, function (i) {
                    if (i === 'data') {
                        $.each(this, function (x) {
                            if(x < 10){
                                var igListItem = $('<li />');
                                var igItemLink = $('<a target=\'_blank\' />');
                                var igLinkImage = $('<img />');
                                
                                igLinkImage.attr('src', this.images.thumbnail.url).attr('alt', this.caption.text);
                                igItemLink.attr('href', this.link).append(igLinkImage);
                                igListItem.append(igItemLink);
                                igList.append(igListItem);
                            }
                        });
                    }
                });
            }
        });
    };

    Codeslinger.InitVideo = function() {
        $("#dialog-modal-video").dialog({
            width: 867,
            height: 498,
            autoOpen: false,
            modal: true,
            resizable: false,
            open: function(event, ui) {
                var player = $('<iframe src=\"http://player.vimeo.com/video/18516820\" width=\"831\" height=\"433\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')
                $('#dialog-modal-video').append(player);
            },
            close: function(event, ui) {
                $('#dialog-modal-video').empty();
            }
        });

        $('.ui-dialog').find('button:contains("Close")').addClass('ui-icon-circle-close');

        $("#video-opener").click(function(e) {
            $("#dialog-modal-video").dialog("open");
            e.preventDefault();
        });

    };

    Codeslinger.InitJobsModal = function () {
        $("#dialog-modal-jobs").dialog({
            width: 800,
            height: 800,
            autoOpen: false,
            modal: true,
            resizable: false,
            dialogClass: 'alert'
        });

        $("button#jobsModal").click(function (e) {
            $("#dialog-modal-jobs").dialog("open");
            $(".ui-dialog-titlebar").hide();
            $("#dialog-modal-video.ui-dialog-content.ui-widget-content").attr('border', 'none').attr('background', 'transparent');
            e.preventDefault();
        });

        $('button#jobCancel').click(function(e) {
            $("#dialog-modal-jobs").dialog("close");
            e.preventDefault();
        });

        Codeslinger.ImageUpload();
    };

    Codeslinger.filterPath = function(string) {
        return string
            .replace(/^\//, '')
            .replace(/(index|default).[a-zA-Z]{3,4}$/, '')
            .replace(/\/$/, '');
    };
    
    Codeslinger.scrollableElement = function(els) {
        for (var i = 0, argLength = arguments.length; i < argLength; i++) {
            var el = arguments[i],
                $scrollElement = $(el);
            if ($scrollElement.scrollTop() > 0) {
                return el;
            } else {
                $scrollElement.scrollTop(1);
                var isScrollable = $scrollElement.scrollTop() > 0;
                $scrollElement.scrollTop(0);
                if (isScrollable) {
                    return el;
                }
            }
        }
        return [];
    };

    $('a[href*=#]').each(function () {
        var thisPath = Codeslinger.filterPath(this.pathname) || Codeslinger.locationPath;
        if (Codeslinger.locationPath == thisPath
        && (location.hostname == this.hostname || !this.hostname)
        && this.hash.replace(/#/, '')) {
            var $target = $(this.hash), target = this.hash;
            if (target) {
                var targetOffset = $target.offset().top;
                $(this).click(function (event) {
                    event.preventDefault();

                    $('a[href*=#]').removeClass('current');
                    $(this).addClass('current');

                    $(Codeslinger.scrollElem).animate({ scrollTop: targetOffset }, 400, function () {
                        location.hash = target;
                    });
                });
            }
        }
    });

    Codeslinger.locationPath;
    Codeslinger.scrollElem;

    $(function () {
        Codeslinger.locationPath = Codeslinger.filterPath(location.pathname);
        Codeslinger.scrollElem = Codeslinger.scrollableElement('html', 'body');
    });
    
    Codeslinger.ImageUpload = function () {

        var button = $('.btnUploader');

        var uploader = new qq.FileUploader({
            element: button,
            multiple: false,
            allowedExtensions: ['doc', 'docx', 'txt', 'pdf', 'rtf'],
            sizeLimit: 0,
            minSizeLimit: 0,
            debug: false,
            onSubmit: function (id, fileName) {
                alert(fileName);
                return false;
            }
        });
    };

})(window);

$(function () {
    Codeslinger.ImageRotator();
    var loc1 = $('input:hidden["locations_locationmlps"]').val();
    var loc2 = $('#locations_locationstp').val();
    Codeslinger.MapAddress(loc1);
    Codeslinger.MapAddress(loc2);
    Codeslinger.GetTweets();
    Codeslinger.GetIG();
    Codeslinger.InitVideo();
    Codeslinger.InitJobsModal();

});