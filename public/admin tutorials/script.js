!function r(s, a, l) { function u(e, t) { if (!a[e]) { if (!s[e]) { var i = "function" == typeof require && require; if (!t && i) return i(e, !0); if (c) return c(e, !0); var n = new Error("Cannot find module '" + e + "'"); throw n.code = "MODULE_NOT_FOUND", n } var o = a[e] = { exports: {} }; s[e][0].call(o.exports, function (t) { return u(s[e][1][t] || t) }, o, o.exports, r, s, a, l) } return a[e].exports } for (var c = "function" == typeof require && require, t = 0; t < l.length; t++)u(l[t]); return u }({ 1: [function (l, t, e) { !function (t) { "use strict"; if (!t._muiLoadedJS) { t._muiLoadedJS = !0; var e = l("src/js/lib/jqLite"), i = l("src/js/dropdown"), n = l("src/js/overlay"), o = l("src/js/ripple"), r = l("src/js/select"), s = l("src/js/tabs"), a = l("src/js/textfield"); t.mui = { overlay: n, tabs: s.api }, e.ready(function () { a.initListeners(), r.initListeners(), o.initListeners(), i.initListeners(), s.initListeners() }) } }(window) }, { "src/js/dropdown": 3, "src/js/lib/jqLite": 6, "src/js/overlay": 8, "src/js/ripple": 9, "src/js/select": 10, "src/js/tabs": 11, "src/js/textfield": 12 }], 2: [function (t, e, i) { e.exports = { debug: !0 } }, {}], 3: [function (t, e, i) { "use strict"; var u = t("./lib/jqLite"), c = t("./lib/util"), n = t("./lib/animationHelpers"), d = "mui--is-open", m = "mui-dropdown__menu"; function o(t) { if (!0 !== t._muiDropdown) { t._muiDropdown = !0; var e = t.tagName; "INPUT" !== e && "BUTTON" !== e || t.hasAttribute("type") || (t.type = "button"), u.on(t, "click", r) } } function r(t) { if (0 === t.button) { null === this.getAttribute("disabled") && function (t) { var e = t.parentNode, i = t.nextElementSibling, n = e.ownerDocument; if (!i || !u.hasClass(i, m)) return c.raiseError("Dropdown menu element not found"); function o() { u.removeClass(i, d), u.off(n, "click", o), u.off(n, "keydown", r) } function r(t) { var e = t.key; "Escape" !== e && "Esc" !== e || o() } u.hasClass(i, d) ? o() : (s = e.getBoundingClientRect(), a = t.getBoundingClientRect(), l = a.top - s.top + a.height, u.css(i, "top", l + "px"), u.addClass(i, d), setTimeout(function () { u.on(n, "click", o), u.on(n, "keydown", r) }, 0)); var s, a, l }(this) } } e.exports = { initListeners: function () { for (var t = document.querySelectorAll('[data-mui-toggle="dropdown"]'), e = t.length; e--;)o(t[e]); n.onAnimationStart("mui-dropdown-inserted", function (t) { o(t.target) }) } } }, { "./lib/animationHelpers": 4, "./lib/jqLite": 6, "./lib/util": 7 }], 4: [function (t, e, i) { "use strict"; var n = t("./jqLite"), r = t("./util"), o = "animationstart mozAnimationStart webkitAnimationStart", s = {}; function a(t) { var e = s[t.animationName] || [], i = e.length; if (i) for (t.stopImmediatePropagation(); i--;)e[i](t) } e.exports = { animationEvents: o, onAnimationStart: function (t, e) { var i = s[t]; i || (i = s[t] = []), i.push(e), this.init || (function () { for (var t, e = [[".mui-btn", "mui-btn-inserted"], ['[data-mui-toggle="dropdown"]', "mui-dropdown-inserted"], ['.mui-btn[data-mui-toggle="dropdown"]', "mui-btn-inserted,mui-dropdown-inserted"], ['[data-mui-toggle="tab"]', "mui-tab-inserted"], [".mui-textfield > input", "mui-textfield-inserted"], [".mui-textfield > textarea", "mui-textfield-inserted"], [".mui-select > select", "mui-select-inserted"], [".mui-select > select ~ .mui-event-trigger", "mui-node-inserted"], [".mui-select > select:disabled ~ .mui-event-trigger", "mui-node-disabled"]], i = "", n = 0, o = e.length; n < o; n++)i += "@keyframes " + (t = e[n])[1], i += "{from{transform:none;}to{transform:none;}}", i += t[0], i += "{animation-duration:0.0001s;animation-name:" + t[1] + ";}"; r.loadStyle(i) }(), n.on(document, o, a, !0), this.init = !0) } } }, { "./jqLite": 6, "./util": 7 }], 5: [function (t, e, i) { "use strict"; var v = t("./jqLite"); e.exports = { getMenuPositionalCSS: function (t, e, i) { var n, o, r, s, a = document.documentElement.clientHeight, l = e.children.length, u = parseInt(e.offsetHeight), c = Math.min(u, a), d = parseInt(v.css(e, "padding-top")), m = (u - 2 * d) / l; o = -1 * i * m, s = a - c + (r = -1 * t.getBoundingClientRect().top), n = Math.min(Math.max(o, r), s); var f, p, h = 0; return a < u && (f = n + d + i * m, p = l * m + 2 * d - c, h = Math.min(f, p)), { height: c + "px", top: n + "px", scrollTop: h } } } }, { "./jqLite": 6 }], 6: [function (t, e, i) { "use strict"; function l(t) { if (void 0 === t) return "undefined"; var e = Object.prototype.toString.call(t); if (0 === e.indexOf("[object ")) return e.slice(8, -1).toLowerCase(); throw new Error("MUI: Could not understand type: " + e) } function s(e, t, i, n) { n = void 0 !== n && n; var o = e._muiEventCache = e._muiEventCache || {}; t.split(" ").map(function (t) { e.addEventListener(t, i, n), o[t] = o[t] || [], o[t].push([i, n]) }) } function a(e, t, i, n) { n = void 0 !== n && n; var o, r, s, a = e._muiEventCache = e._muiEventCache || {}; t.split(" ").map(function (t) { for (o = a[t] || [], s = o.length; s--;)r = o[s], (void 0 === i || r[0] === i && r[1] === n) && (o.splice(s, 1), e.removeEventListener(t, r[0], r[1])) }) } function r(t, e) { var i = window; if (void 0 === e) { if (t === i) { var n = document.documentElement; return (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0) } return t.scrollLeft } t === i ? i.scrollTo(e, u(i)) : t.scrollLeft = e } function u(t, e) { var i = window; if (void 0 === e) { if (t === i) { var n = document.documentElement; return (i.pageYOffset || n.scrollTop) - (n.clientTop || 0) } return t.scrollTop } t === i ? i.scrollTo(r(i), e) : t.scrollTop = e } var n = /([\:\-\_]+(.))/g, o = /^moz([A-Z])/; function c(t) { return " " + (t.getAttribute("class") || "").replace(/[\n\t]/g, "") + " " } function d(t) { return t.replace(n, function (t, e, i, n) { return n ? i.toUpperCase() : i }).replace(o, "Moz$1") } function m(t, e, i) { var n; return "" !== (n = i.getPropertyValue(e)) || t.ownerDocument || (n = t.style[d(e)]), n } e.exports = { addClass: function (t, e) { if (e && t.setAttribute) { for (var i, n = c(t), o = e.split(" "), r = 0; r < o.length; r++)i = o[r].trim(), -1 === n.indexOf(" " + i + " ") && (n += i + " "); t.setAttribute("class", n.trim()) } }, css: function (t, e, i) { if (void 0 === e) return getComputedStyle(t); var n = l(e); if ("object" !== n) { "string" === n && void 0 !== i && (t.style[d(e)] = i); var o = getComputedStyle(t); if ("array" !== l(e)) return m(t, e, o); for (var r = {}, s = 0; s < e.length; s++)r[a = e[s]] = m(t, a, o); return r } for (var a in e) t.style[d(a)] = e[a] }, hasClass: function (t, e) { return !(!e || !t.getAttribute) && -1 < c(t).indexOf(" " + e + " ") }, off: a, offset: function (t) { var e = window, i = t.getBoundingClientRect(), n = u(e), o = r(e); return { top: i.top + n, left: i.left + o, height: i.height, width: i.width } }, on: s, one: function (n, t, o, r) { t.split(" ").map(function (i) { s(n, i, function t(e) { o && o.apply(this, arguments), a(n, i, t, r) }, r) }) }, ready: function (e) { var i = !1, t = !0, n = document, o = n.defaultView, r = n.documentElement, s = n.addEventListener ? "addEventListener" : "attachEvent", a = n.addEventListener ? "removeEventListener" : "detachEvent", l = n.addEventListener ? "" : "on", u = function (t) { "readystatechange" == t.type && "complete" != n.readyState || (("load" == t.type ? o : n)[a](l + t.type, u, !1), !i && (i = !0) && e.call(o, t.type || t)) }, c = function () { try { r.doScroll("left") } catch (t) { return void setTimeout(c, 50) } u("poll") }; if ("complete" == n.readyState) e.call(o, "lazy"); else { if (n.createEventObject && r.doScroll) { try { t = !o.frameElement } catch (t) { } t && c() } n[s](l + "DOMContentLoaded", u, !1), n[s](l + "readystatechange", u, !1), o[s](l + "load", u, !1) } }, removeClass: function (t, e) { if (e && t.setAttribute) { for (var i, n = c(t), o = e.split(" "), r = 0; r < o.length; r++)for (i = o[r].trim(); 0 <= n.indexOf(" " + i + " ");)n = n.replace(" " + i + " ", " "); t.setAttribute("class", n.trim()) } }, type: l, scrollLeft: r, scrollTop: u } }, {}], 7: [function (t, e, i) { "use strict"; var l, u, c, d, n, o = t("../config"), m = t("./jqLite"), f = 0, p = "mui-scroll-lock"; function h(t) { var e, i = document; e = i.head || i.getElementsByTagName("head")[0] || i.documentElement; var n = i.createElement("style"); return n.type = "text/css", n.styleSheet ? n.styleSheet.cssText = t : n.appendChild(i.createTextNode(t)), e.insertBefore(n, e.firstChild), n } c = function (t) { t.target.tagName || t.stopImmediatePropagation() }; e.exports = { callback: function (t, e) { return function () { t[e].apply(t, arguments) } }, classNames: function (t) { var e = ""; for (var i in t) e += t[i] ? i + " " : ""; return e.trim() }, disableScrollLock: function (t) { 0 !== f && 0 == (f -= 1) && (m.removeClass(document.body, p), t && window.scrollTo(l.left, l.top), m.off(window, "scroll", c, !0), setTimeout(function () { u.parentNode.removeChild(u) }, 0)) }, dispatchEvent: function (t, e, i, n, o) { var r, s = document.createEvent("HTMLEvents"); if (i = void 0 === i || i, n = void 0 === n || n, s.initEvent(e, i, n), o) for (r in o) s[r] = o[r]; return t && t.dispatchEvent(s), s }, enableScrollLock: function () { if (1 === (f += 1)) { var t, e, i, n = document, o = window, r = n.documentElement, s = n.body, a = function () { if (void 0 !== d) return d; var t = document, e = t.body, i = t.createElement("div"); return i.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>', i = i.firstChild, e.appendChild(i), d = i.offsetWidth - i.clientWidth, e.removeChild(i), d }(); t = ["overflow:hidden"], a && (r.scrollHeight > r.clientHeight && (i = parseInt(m.css(s, "padding-right")) + a, t.push("padding-right:" + i + "px")), r.scrollWidth > r.clientWidth && (i = parseInt(m.css(s, "padding-bottom")) + a, t.push("padding-bottom:" + i + "px"))), e = "." + p + "{", e += t.join(" !important;") + " !important;}", u = h(e), m.on(o, "scroll", c, !0), l = { left: m.scrollLeft(o), top: m.scrollTop(o) }, m.addClass(s, p) } }, log: function () { var e = window; if (o.debug && void 0 !== e.console) try { e.console.log.apply(e.console, arguments) } catch (t) { var i = Array.prototype.slice.call(arguments); e.console.log(i.join("\n")) } }, loadStyle: h, raiseError: function (t, e) { if (!e) throw new Error("MUI: " + t); "undefined" != typeof console && console.warn("MUI Warning: " + t) }, requestAnimationFrame: function (t) { var e = window.requestAnimationFrame; e ? e(t) : setTimeout(t, 0) }, supportsPointerEvents: function () { if (void 0 !== n) return n; var t = document.createElement("x"); return t.style.cssText = "pointer-events:auto", n = "auto" === t.style.pointerEvents } } }, { "../config": 2, "./jqLite": 6 }], 8: [function (t, e, i) { "use strict"; var s, a = t("./lib/util"), l = t("./lib/jqLite"), u = "mui-overlay", c = /(iPad|iPhone|iPod)/g; function d() { var t, e = document.getElementById(u); if (e) { for (; e.firstChild;)e.removeChild(e.firstChild); e.parentNode.removeChild(e), t = e.muiOptions.onclose, p(e) } return a.disableScrollLock(), m(), s && s.focus(), t && t(), e } function m() { l.off(document, "keyup", f) } function f(t) { 27 === t.keyCode && d() } function p(t) { l.off(t, "click", h) } function h(t) { t.target.id === u && d() } e.exports = function (t) { var e; if ("on" === t) { for (var i, n, o, r = arguments.length - 1; 0 < r; r--)i = arguments[r], "object" === l.type(i) && (n = i), i instanceof Element && 1 === i.nodeType && (o = i); void 0 === (n = n || {}).keyboard && (n.keyboard = !0), void 0 === n.static && (n.static = !1), e = function (t, e) { var i, n = document, o = n.body, r = n.getElementById(u); if (n.activeElement && (s = n.activeElement), a.enableScrollLock(), r) { for (; r.firstChild;)r.removeChild(r.firstChild); e && r.appendChild(e) } else (r = n.createElement("div")).setAttribute("id", u), r.setAttribute("tabindex", "-1"), e && r.appendChild(e), o.appendChild(r); return c.test(navigator.userAgent) && l.css(r, "cursor", "pointer"), t.keyboard ? l.on(document, "keyup", f) : m(), t.static ? p(r) : (i = r, l.on(i, "click", h)), r.muiOptions = t, r.focus(), r }(n, o) } else "off" === t ? e = d() : a.raiseError("Expecting 'on' or 'off'"); return e } }, { "./lib/jqLite": 6, "./lib/util": 7 }], 9: [function (t, e, i) { "use strict"; var l = t("./lib/jqLite"), u = t("./lib/util"), n = t("./lib/animationHelpers"), o = "ontouchstart" in document.documentElement, r = o ? "touchstart" : "mousedown", c = o ? "touchend" : "mouseup mouseleave"; function s(t) { !0 !== t._muiRipple && (t._muiRipple = !0, "INPUT" !== t.tagName && l.on(t, r, a)) } function a(t) { if ("mousedown" !== t.type || 0 === t.button) { var e = this, i = e._rippleEl; if (!e.disabled) { if (!i) { var n = document.createElement("span"); n.className = "mui-btn__ripple-container", n.innerHTML = '<span class="mui-ripple"></span>', e.appendChild(n), i = e._rippleEl = n.children[0], l.on(e, c, d) } var o, r, s = l.offset(e), a = "touchstart" === t.type ? t.touches[0] : t; r = 2 * (o = Math.sqrt(s.height * s.height + s.width * s.width)) + "px", l.css(i, { width: r, height: r, top: Math.round(a.pageY - s.top - o) + "px", left: Math.round(a.pageX - s.left - o) + "px" }), l.removeClass(i, "mui--is-animating"), l.addClass(i, "mui--is-visible"), u.requestAnimationFrame(function () { l.addClass(i, "mui--is-animating") }) } } } function d(t) { var e = this._rippleEl; u.requestAnimationFrame(function () { l.removeClass(e, "mui--is-visible") }) } e.exports = { initListeners: function () { for (var t = document.getElementsByClassName("mui-btn"), e = t.length; e--;)s(t[e]); n.onAnimationStart("mui-btn-inserted", function (t) { s(t.target) }) } } }, { "./lib/animationHelpers": 4, "./lib/jqLite": 6, "./lib/util": 7 }], 10: [function (t, e, i) { "use strict"; var y = t("./lib/jqLite"), l = t("./lib/util"), n = t("./lib/animationHelpers"), u = t("./lib/forms"), C = "mui--is-selected", E = document, c = window; function o(t) { if (!0 !== t._muiSelect && (t._muiSelect = !0, !("ontouchstart" in E.documentElement))) { var e = t.parentNode; if (!y.hasClass(e, "mui-select--use-default")) { e._selectEl = t, e._menu = null, e._q = "", e._qTimeout = null, t.disabled || (e.tabIndex = 0), t.tabIndex = -1, y.on(t, "mousedown", r), y.on(e, "click", m), y.on(e, "blur focus", s), y.on(e, "keydown", a), y.on(e, "keypress", d); var i = document.createElement("div"); i.className = "mui-event-trigger", e.appendChild(i), y.on(i, n.animationEvents, function (t) { var e = t.target.parentNode; t.stopPropagation(), "mui-node-disabled" === t.animationName ? e.removeAttribute("tabIndex") : e.tabIndex = 0 }) } } } function r(t) { 0 === t.button && t.preventDefault() } function s(t) { l.dispatchEvent(this._selectEl, t.type, !1, !1) } function a(t) { if (!t.defaultPrevented) { var e = t.keyCode, i = this._menu; if (i) { if (9 === e) return i.destroy(); 27 !== e && 40 !== e && 38 !== e && 13 !== e || t.preventDefault(), 27 === e ? i.destroy() : 40 === e ? i.increment() : 38 === e ? i.decrement() : 13 === e && (i.selectCurrent(), i.destroy()) } else 32 !== e && 38 !== e && 40 !== e || (t.preventDefault(), f(this)) } } function d(t) { var e = this._menu; if (!t.defaultPrevented && e) { var i = this; clearTimeout(this._qTimeout), this._q += t.key, this._qTimeout = setTimeout(function () { i._q = "" }, 300); var n, o = new RegExp("^" + this._q, "i"), r = e.itemArray; for (n in r) if (o.test(r[n].innerText)) { e.selectPos(n); break } } } function m(t) { 0 !== t.button || this._selectEl.disabled || (this.focus(), f(this)) } function f(t) { t._menu || (t._menu = new p(t, t._selectEl, function () { t._menu = null, t.focus() })) } function p(t, e, i) { l.enableScrollLock(), this.itemArray = [], this.origPos = null, this.currentPos = null, this.selectEl = e, this.wrapperEl = t; var n = this._createMenuEl(t, e), o = this.menuEl = n[0], r = l.callback; this.onClickCB = r(this, "onClick"), this.destroyCB = r(this, "destroy"), this.wrapperCallbackFn = i, t.appendChild(this.menuEl); var s = u.getMenuPositionalCSS(t, o, n[1]); y.css(o, s), y.scrollTop(o, s.scrollTop); var a = this.destroyCB; y.on(o, "click", this.onClickCB), y.on(c, "resize", a), setTimeout(function () { y.on(E, "click", a) }, 0) } p.prototype._createMenuEl = function (t, e) { var i, n, o, r, s, a, l, u, c = E.createElement("div"), d = e.children, m = this.itemArray, f = 0, p = -1, h = 0, v = 0, g = 0, b = document.createDocumentFragment(); for (c.className = "mui-select__menu", s = 0, a = d.length; s < a; s++)for ("OPTGROUP" === (i = d[s]).tagName ? ((n = E.createElement("div")).textContent = i.label, n.className = "mui-optgroup__label", b.appendChild(n), r = !0, o = i.children) : (r = !1, o = [i]), l = 0, u = o.length; l < u; l++)i = o[l], (n = E.createElement("div")).textContent = i.textContent, r && y.addClass(n, "mui-optgroup__option"), i.hidden || (i.disabled ? y.addClass(n, "mui--is-disabled") : (n._muiIndex = i.index, n._muiPos = f, i.selected && (v = g, h = p = f), m.push(n), f += 1), b.appendChild(n), g += 1); return c.appendChild(b), this.origPos = p, this.currentPos = h, m.length && y.addClass(m[h], C), [c, v] }, p.prototype.onClick = function (t) { t.stopPropagation(); var e = t.target; void 0 !== e._muiIndex && (this.currentPos = e._muiPos, this.selectCurrent(), this.destroy()) }, p.prototype.increment = function () { this.currentPos !== this.itemArray.length - 1 && (y.removeClass(this.itemArray[this.currentPos], C), this.currentPos += 1, y.addClass(this.itemArray[this.currentPos], C)) }, p.prototype.decrement = function () { 0 !== this.currentPos && (y.removeClass(this.itemArray[this.currentPos], C), this.currentPos -= 1, y.addClass(this.itemArray[this.currentPos], C)) }, p.prototype.selectCurrent = function () { this.currentPos !== this.origPos && (this.selectEl.selectedIndex = this.itemArray[this.currentPos]._muiIndex, l.dispatchEvent(this.selectEl, "change", !0, !1), l.dispatchEvent(this.selectEl, "input", !0, !1)) }, p.prototype.selectPos = function (t) { y.removeClass(this.itemArray[this.currentPos], C), this.currentPos = t; var e = this.itemArray[t]; y.addClass(e, C); var i = this.menuEl, n = e.getBoundingClientRect(); n.top < 0 ? i.scrollTop = i.scrollTop + n.top - 5 : n.top > window.innerHeight && (i.scrollTop = i.scrollTop + (n.top + n.height - window.innerHeight) + 5) }, p.prototype.destroy = function () { l.disableScrollLock(!0), y.off(this.menuEl, "click", this.clickCallbackFn), y.off(E, "click", this.destroyCB), y.off(c, "resize", this.destroyCB); var t = this.menuEl.parentNode; t && (t.removeChild(this.menuEl), this.wrapperCallbackFn()) }, e.exports = { initListeners: function () { for (var t = E.querySelectorAll(".mui-select > select"), e = t.length; e--;)o(t[e]); n.onAnimationStart("mui-select-inserted", function (t) { o(t.target) }) } } }, { "./lib/animationHelpers": 4, "./lib/forms": 5, "./lib/jqLite": 6, "./lib/util": 7 }], 11: [function (t, e, i) { "use strict"; var f = t("./lib/jqLite"), p = t("./lib/util"), n = t("./lib/animationHelpers"), h = "data-mui-controls", v = "mui--is-active", g = "mui.tabs.showstart", b = "mui.tabs.showend", y = "mui.tabs.hidestart", C = "mui.tabs.hideend"; function o(t) { !0 !== t._muiTabs && (t._muiTabs = !0, f.on(t, "click", r)) } function r(t) { if (0 === t.button) { null === this.getAttribute("disabled") && s(this) } } function s(t) { var e, i, n, o, r, s, a, l, u, c = t.parentNode, d = t.getAttribute(h), m = document.getElementById(d); f.hasClass(c, v) || (m || p.raiseError('Tab pane "' + d + '" not found'), n = (i = function (t) { var e, i = t.parentNode.children, n = i.length, o = null; for (; n-- && !o;)(e = i[n]) !== t && f.hasClass(e, v) && (o = e); return o }(m)).id, u = "[" + h + '="' + n + '"]', o = document.querySelectorAll(u)[0], e = o.parentNode, r = { paneId: d, relatedPaneId: n }, s = { paneId: n, relatedPaneId: d }, a = p.dispatchEvent(o, y, !0, !0, s), l = p.dispatchEvent(t, g, !0, !0, r), setTimeout(function () { a.defaultPrevented || l.defaultPrevented || (e && f.removeClass(e, v), i && f.removeClass(i, v), f.addClass(c, v), f.addClass(m, v), p.dispatchEvent(o, C, !0, !1, s), p.dispatchEvent(t, b, !0, !1, r)) }, 0)) } e.exports = { initListeners: function () { for (var t = document.querySelectorAll('[data-mui-toggle="tab"]'), e = t.length; e--;)o(t[e]); n.onAnimationStart("mui-tab-inserted", function (t) { o(t.target) }) }, api: { activate: function (t) { var e = "[" + h + "=" + t + "]", i = document.querySelectorAll(e); i.length || p.raiseError('Tab control for pane "' + t + '" not found'), s(i[0]) } } } }, { "./lib/animationHelpers": 4, "./lib/jqLite": 6, "./lib/util": 7 }], 12: [function (t, e, i) { "use strict"; var n = t("./lib/jqLite"), o = t("./lib/util"), r = t("./lib/animationHelpers"), s = "mui--is-untouched", a = "mui--is-pristine", l = "mui--is-empty", u = "mui--is-not-empty"; function c(e) { !0 !== e._muiTextfield && (e._muiTextfield = !0, e.value.length ? n.addClass(e, u) : n.addClass(e, l), n.addClass(e, s + " " + a), n.on(e, "blur", function t() { document.activeElement !== e && (n.removeClass(e, s), n.addClass(e, "mui--is-touched"), n.off(e, "blur", t)) }), n.one(e, "input change", function () { n.removeClass(e, a), n.addClass(e, "mui--is-dirty") }), n.on(e, "input change", d)) } function d() { var t = this; t.value.length ? (n.removeClass(t, l), n.addClass(t, u)) : (n.removeClass(t, u), n.addClass(t, l)) } e.exports = { initialize: c, initListeners: function () { for (var t = document, e = t.querySelectorAll(".mui-textfield > input, .mui-textfield > textarea"), i = e.length; i--;)c(e[i]); r.onAnimationStart("mui-textfield-inserted", function (t) { c(t.target) }), setTimeout(function () { var t = ".mui-textfield.mui-textfield--float-label > label {" + ["-webkit-transition", "-moz-transition", "-o-transition", "transition", ""].join(":all .15s ease-out;") + "}"; o.loadStyle(t) }, 150), !1 === o.supportsPointerEvents() && n.on(t, "click", function (t) { var e = t.target; if ("LABEL" === e.tagName && n.hasClass(e.parentNode, "mui-textfield--float-label")) { var i = e.previousElementSibling; i && i.focus() } }) } } }, { "./lib/animationHelpers": 4, "./lib/jqLite": 6, "./lib/util": 7 }] }, {}, [1]);
!function () {/*

 Copyright (C) 2013 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 Copyright (C) 2006 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0
      
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
  (function () {
    function aa(g) {
      function r() { try { L.doScroll("left") } catch (ba) { k.setTimeout(r, 50); return } x("poll") } function x(r) { if ("readystatechange" != r.type || "complete" == z.readyState) ("load" == r.type ? k : z)[B](n + r.type, x, !1), !l && (l = !0) && g.call(k, r.type || r) } var X = z.addEventListener, l = !1, E = !0, v = X ? "addEventListener" : "attachEvent", B = X ? "removeEventListener" : "detachEvent", n = X ? "" : "on"; if ("complete" == z.readyState) g.call(k, "lazy"); else {
        if (z.createEventObject && L.doScroll) { try { E = !k.frameElement } catch (ba) { } E && r() } z[v](n +
          "DOMContentLoaded", x, !1); z[v](n + "readystatechange", x, !1); k[v](n + "load", x, !1)
      }
    } function T() { U && aa(function () { var g = M.length; ca(g ? function () { for (var r = 0; r < g; ++r)(function (g) { k.setTimeout(function () { k.exports[M[g]].apply(k, arguments) }, 0) })(r) } : void 0) }) } for (var k = window, z = document, L = z.documentElement, N = z.head || z.getElementsByTagName("head")[0] || L, B = "", F = z.getElementsByTagName("script"), l = F.length; 0 <= --l;) {
      var O = F[l], Y = O.src.match(/^[^?#]*\/run_prettify\.js(\?[^#]*)?(?:#.*)?$/); if (Y) {
        B = Y[1] || ""; O.parentNode.removeChild(O);
        break
      }
    } var U = !0, H = [], P = [], M = []; B.replace(/[?&]([^&=]+)=([^&]+)/g, function (g, r, x) { x = decodeURIComponent(x); r = decodeURIComponent(r); "autorun" == r ? U = !/^[0fn]/i.test(x) : "lang" == r ? H.push(x) : "skin" == r ? P.push(x) : "callback" == r && M.push(x) }); l = 0; for (B = H.length; l < B; ++l)(function () {
      var g = z.createElement("script"); g.onload = g.onerror = g.onreadystatechange = function () {
      !g || g.readyState && !/loaded|complete/.test(g.readyState) || (g.onerror = g.onload = g.onreadystatechange = null, --S, S || k.setTimeout(T, 0), g.parentNode && g.parentNode.removeChild(g),
        g = null)
      }; g.type = "text/javascript"; g.src = "https://cdn.rawgit.com/google/code-prettify/master/loader/lang-" + encodeURIComponent(H[l]) + ".js"; N.insertBefore(g, N.firstChild)
    })(H[l]); for (var S = H.length, F = [], l = 0, B = P.length; l < B; ++l)F.push("https://cdn.rawgit.com/google/code-prettify/master/loader/skins/" + encodeURIComponent(P[l]) + ".css"); F.push("https://cdn.rawgit.com/google/code-prettify/master/loader/prettify.css"); (function (g) {
      function r(l) {
        if (l !== x) {
          var k = z.createElement("link"); k.rel = "stylesheet"; k.type =
            "text/css"; l + 1 < x && (k.error = k.onerror = function () { r(l + 1) }); k.href = g[l]; N.appendChild(k)
        }
      } var x = g.length; r(0)
    })(F); var ca = function () {
    "undefined" !== typeof window && (window.PR_SHOULD_USE_CONTINUATION = !0); var g; (function () {
      function r(a) {
        function d(e) { var a = e.charCodeAt(0); if (92 !== a) return a; var c = e.charAt(1); return (a = k[c]) ? a : "0" <= c && "7" >= c ? parseInt(e.substring(1), 8) : "u" === c || "x" === c ? parseInt(e.substring(2), 16) : e.charCodeAt(1) } function f(e) {
          if (32 > e) return (16 > e ? "\\x0" : "\\x") + e.toString(16); e = String.fromCharCode(e);
          return "\\" === e || "-" === e || "]" === e || "^" === e ? "\\" + e : e
        } function c(e) {
          var c = e.substring(1, e.length - 1).match(RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]", "g")); e = []; var a = "^" === c[0], b = ["["]; a && b.push("^"); for (var a = a ? 1 : 0, h = c.length; a < h; ++a) {
            var m = c[a]; if (/\\[bdsw]/i.test(m)) b.push(m); else {
              var m = d(m), p; a + 2 < h && "-" === c[a + 1] ? (p = d(c[a + 2]), a += 2) : p = m; e.push([m, p]); 65 > p || 122 < m || (65 > p || 90 < m || e.push([Math.max(65, m) | 32, Math.min(p, 90) | 32]), 97 > p || 122 < m ||
                e.push([Math.max(97, m) & -33, Math.min(p, 122) & -33]))
            }
          } e.sort(function (e, a) { return e[0] - a[0] || a[1] - e[1] }); c = []; h = []; for (a = 0; a < e.length; ++a)m = e[a], m[0] <= h[1] + 1 ? h[1] = Math.max(h[1], m[1]) : c.push(h = m); for (a = 0; a < c.length; ++a)m = c[a], b.push(f(m[0])), m[1] > m[0] && (m[1] + 1 > m[0] && b.push("-"), b.push(f(m[1]))); b.push("]"); return b.join("")
        } function g(e) {
          for (var a = e.source.match(RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)",
            "g")), b = a.length, d = [], h = 0, m = 0; h < b; ++h) { var p = a[h]; "(" === p ? ++m : "\\" === p.charAt(0) && (p = +p.substring(1)) && (p <= m ? d[p] = -1 : a[h] = f(p)) } for (h = 1; h < d.length; ++h)-1 === d[h] && (d[h] = ++r); for (m = h = 0; h < b; ++h)p = a[h], "(" === p ? (++m, d[m] || (a[h] = "(?:")) : "\\" === p.charAt(0) && (p = +p.substring(1)) && p <= m && (a[h] = "\\" + d[p]); for (h = 0; h < b; ++h)"^" === a[h] && "^" !== a[h + 1] && (a[h] = ""); if (e.ignoreCase && A) for (h = 0; h < b; ++h)p = a[h], e = p.charAt(0), 2 <= p.length && "[" === e ? a[h] = c(p) : "\\" !== e && (a[h] = p.replace(/[a-zA-Z]/g, function (a) {
              a = a.charCodeAt(0);
              return "[" + String.fromCharCode(a & -33, a | 32) + "]"
            })); return a.join("")
        } for (var r = 0, A = !1, q = !1, I = 0, b = a.length; I < b; ++I) { var t = a[I]; if (t.ignoreCase) q = !0; else if (/[a-z]/i.test(t.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi, ""))) { A = !0; q = !1; break } } for (var k = { b: 8, t: 9, n: 10, v: 11, f: 12, r: 13 }, u = [], I = 0, b = a.length; I < b; ++I) { t = a[I]; if (t.global || t.multiline) throw Error("" + t); u.push("(?:" + g(t) + ")") } return new RegExp(u.join("|"), q ? "gi" : "g")
      } function l(a, d) {
        function f(a) {
          var b = a.nodeType; if (1 == b) {
            if (!c.test(a.className)) {
              for (b =
                a.firstChild; b; b = b.nextSibling)f(b); b = a.nodeName.toLowerCase(); if ("br" === b || "li" === b) g[q] = "\n", A[q << 1] = r++, A[q++ << 1 | 1] = a
            }
          } else if (3 == b || 4 == b) b = a.nodeValue, b.length && (b = d ? b.replace(/\r\n?/g, "\n") : b.replace(/[ \t\r\n]+/g, " "), g[q] = b, A[q << 1] = r, r += b.length, A[q++ << 1 | 1] = a)
        } var c = /(?:^|\s)nocode(?:\s|$)/, g = [], r = 0, A = [], q = 0; f(a); return { a: g.join("").replace(/\n$/, ""), c: A }
      } function k(a, d, f, c, g) { f && (a = { h: a, l: 1, j: null, m: null, a: f, c: null, i: d, g: null }, c(a), g.push.apply(g, a.g)) } function z(a) {
        for (var d = void 0, f = a.firstChild; f; f =
          f.nextSibling)var c = f.nodeType, d = 1 === c ? d ? a : f : 3 === c ? S.test(f.nodeValue) ? a : d : d; return d === a ? void 0 : d
      } function E(a, d) {
        function f(a) {
          for (var q = a.i, r = a.h, b = [q, "pln"], t = 0, A = a.a.match(g) || [], u = {}, e = 0, l = A.length; e < l; ++e) {
            var D = A[e], w = u[D], h = void 0, m; if ("string" === typeof w) m = !1; else { var p = c[D.charAt(0)]; if (p) h = D.match(p[1]), w = p[0]; else { for (m = 0; m < n; ++m)if (p = d[m], h = D.match(p[1])) { w = p[0]; break } h || (w = "pln") } !(m = 5 <= w.length && "lang-" === w.substring(0, 5)) || h && "string" === typeof h[1] || (m = !1, w = "src"); m || (u[D] = w) } p = t;
            t += D.length; if (m) { m = h[1]; var C = D.indexOf(m), G = C + m.length; h[2] && (G = D.length - h[2].length, C = G - m.length); w = w.substring(5); k(r, q + p, D.substring(0, C), f, b); k(r, q + p + C, m, F(w, m), b); k(r, q + p + G, D.substring(G), f, b) } else b.push(q + p, w)
          } a.g = b
        } var c = {}, g; (function () { for (var f = a.concat(d), q = [], k = {}, b = 0, t = f.length; b < t; ++b) { var n = f[b], u = n[3]; if (u) for (var e = u.length; 0 <= --e;)c[u.charAt(e)] = n; n = n[1]; u = "" + n; k.hasOwnProperty(u) || (q.push(n), k[u] = null) } q.push(/[\0-\uffff]/); g = r(q) })(); var n = d.length; return f
      } function v(a) {
        var d =
          [], f = []; a.tripleQuotedStrings ? d.push(["str", /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/, null, "'\""]) : a.multiLineStrings ? d.push(["str", /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/, null, "'\"`"]) : d.push(["str", /^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/, null, "\"'"]); a.verbatimStrings &&
            f.push(["str", /^@\"(?:[^\"]|\"\")*(?:\"|$)/, null]); var c = a.hashComments; c && (a.cStyleComments ? (1 < c ? d.push(["com", /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, null, "#"]) : d.push(["com", /^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/, null, "#"]), f.push(["str", /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/, null])) : d.push(["com", /^#[^\r\n]*/, null, "#"])); a.cStyleComments && (f.push(["com", /^\/\/[^\r\n]*/, null]), f.push(["com", /^\/\*[\s\S]*?(?:\*\/|$)/,
              null])); if (c = a.regexLiterals) { var g = (c = 1 < c ? "" : "\n\r") ? "." : "[\\S\\s]"; f.push(["lang-regex", RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(" + ("/(?=[^/*" + c + "])(?:[^/\\x5B\\x5C" + c + "]|\\x5C" + g + "|\\x5B(?:[^\\x5C\\x5D" + c + "]|\\x5C" + g + ")*(?:\\x5D|$))+/") + ")")]) } (c = a.types) && f.push(["typ", c]); c = ("" + a.keywords).replace(/^ | $/g, ""); c.length && f.push(["kwd",
                new RegExp("^(?:" + c.replace(/[\s,]+/g, "|") + ")\\b"), null]); d.push(["pln", /^\s+/, null, " \r\n\t\u00a0"]); c = "^.[^\\s\\w.$@'\"`/\\\\]*"; a.regexLiterals && (c += "(?!s*/)"); f.push(["lit", /^@[a-z_$][a-z_$@0-9]*/i, null], ["typ", /^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/, null], ["pln", /^[a-z_$][a-z_$@0-9]*/i, null], ["lit", /^(?:0x[a-f0-9]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+\-]?\d+)?)[a-z]*/i, null, "0123456789"], ["pln", /^\\[\s\S]?/, null], ["pun", new RegExp(c), null]); return E(d, f)
      } function B(a, d, f) {
        function c(a) {
          var b =
            a.nodeType; if (1 == b && !r.test(a.className)) if ("br" === a.nodeName.toLowerCase()) g(a), a.parentNode && a.parentNode.removeChild(a); else for (a = a.firstChild; a; a = a.nextSibling)c(a); else if ((3 == b || 4 == b) && f) { var e = a.nodeValue, d = e.match(n); d && (b = e.substring(0, d.index), a.nodeValue = b, (e = e.substring(d.index + d[0].length)) && a.parentNode.insertBefore(q.createTextNode(e), a.nextSibling), g(a), b || a.parentNode.removeChild(a)) }
        } function g(a) {
          function c(a, b) {
            var e = b ? a.cloneNode(!1) : a, p = a.parentNode; if (p) {
              var p = c(p, 1), d = a.nextSibling;
              p.appendChild(e); for (var f = d; f; f = d)d = f.nextSibling, p.appendChild(f)
            } return e
          } for (; !a.nextSibling;)if (a = a.parentNode, !a) return; a = c(a.nextSibling, 0); for (var e; (e = a.parentNode) && 1 === e.nodeType;)a = e; b.push(a)
        } for (var r = /(?:^|\s)nocode(?:\s|$)/, n = /\r\n?|\n/, q = a.ownerDocument, k = q.createElement("li"); a.firstChild;)k.appendChild(a.firstChild); for (var b = [k], t = 0; t < b.length; ++t)c(b[t]); d === (d | 0) && b[0].setAttribute("value", d); var l = q.createElement("ol"); l.className = "linenums"; d = Math.max(0, d - 1 | 0) || 0; for (var t =
          0, u = b.length; t < u; ++t)k = b[t], k.className = "L" + (t + d) % 10, k.firstChild || k.appendChild(q.createTextNode("\u00a0")), l.appendChild(k); a.appendChild(l)
      } function n(a, d) { for (var f = d.length; 0 <= --f;) { var c = d[f]; V.hasOwnProperty(c) ? Q.console && console.warn("cannot override language handler %s", c) : V[c] = a } } function F(a, d) { a && V.hasOwnProperty(a) || (a = /^\s*</.test(d) ? "default-markup" : "default-code"); return V[a] } function H(a) {
        var d = a.j; try {
          var f = l(a.h, a.l), c = f.a; a.a = c; a.c = f.c; a.i = 0; F(d, c)(a); var g = /\bMSIE\s(\d+)/.exec(navigator.userAgent),
            g = g && 8 >= +g[1], d = /\n/g, r = a.a, k = r.length, f = 0, q = a.c, n = q.length, c = 0, b = a.g, t = b.length, v = 0; b[t] = k; var u, e; for (e = u = 0; e < t;)b[e] !== b[e + 2] ? (b[u++] = b[e++], b[u++] = b[e++]) : e += 2; t = u; for (e = u = 0; e < t;) { for (var x = b[e], z = b[e + 1], w = e + 2; w + 2 <= t && b[w + 1] === z;)w += 2; b[u++] = x; b[u++] = z; e = w } b.length = u; var h = a.h; a = ""; h && (a = h.style.display, h.style.display = "none"); try {
              for (; c < n;) {
                var m = q[c + 2] || k, p = b[v + 2] || k, w = Math.min(m, p), C = q[c + 1], G; if (1 !== C.nodeType && (G = r.substring(f, w))) {
                  g && (G = G.replace(d, "\r")); C.nodeValue = G; var Z = C.ownerDocument,
                    W = Z.createElement("span"); W.className = b[v + 1]; var B = C.parentNode; B.replaceChild(W, C); W.appendChild(C); f < m && (q[c + 1] = C = Z.createTextNode(r.substring(w, m)), B.insertBefore(C, W.nextSibling))
                } f = w; f >= m && (c += 2); f >= p && (v += 2)
              }
            } finally { h && (h.style.display = a) }
        } catch (y) { Q.console && console.log(y && y.stack || y) }
      } var Q = "undefined" !== typeof window ? window : {}, J = ["break,continue,do,else,for,if,return,while"], K = [[J, "auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,restrict,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],
        "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"], R = [K, "alignas,alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,noexcept,noreturn,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"], L = [K, "abstract,assert,boolean,byte,extends,finally,final,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],
        M = [K, "abstract,add,alias,as,ascending,async,await,base,bool,by,byte,checked,decimal,delegate,descending,dynamic,event,finally,fixed,foreach,from,get,global,group,implicit,in,interface,internal,into,is,join,let,lock,null,object,out,override,orderby,params,partial,readonly,ref,remove,sbyte,sealed,select,set,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,value,var,virtual,where,yield"], K = [K, "abstract,async,await,constructor,debugger,enum,eval,export,from,function,get,import,implements,instanceof,interface,let,null,of,set,undefined,var,with,yield,Infinity,NaN"],
        N = [J, "and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"], O = [J, "alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"], J = [J, "case,done,elif,esac,eval,fi,function,in,local,set,then,until"], P = /^(DIR|FILE|array|vector|(de|priority_)?queue|(forward_)?list|stack|(const_)?(reverse_)?iterator|(unordered_)?(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,
        S = /\S/, T = v({ keywords: [R, M, L, K, "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END", N, O, J], hashComments: !0, cStyleComments: !0, multiLineStrings: !0, regexLiterals: !0 }), V = {}; n(T, ["default-code"]); n(E([], [["pln", /^[^<?]+/], ["dec", /^<!\w[^>]*(?:>|$)/], ["com", /^<\!--[\s\S]*?(?:-\->|$)/], ["lang-", /^<\?([\s\S]+?)(?:\?>|$)/], ["lang-", /^<%([\s\S]+?)(?:%>|$)/], ["pun", /^(?:<[%?]|[%?]>)/], ["lang-",
          /^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i], ["lang-js", /^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i], ["lang-css", /^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i], ["lang-in.tag", /^(<\/?[a-z][^<>]*>)/i]]), "default-markup htm html mxml xhtml xml xsl".split(" ")); n(E([["pln", /^[\s]+/, null, " \t\r\n"], ["atv", /^(?:\"[^\"]*\"?|\'[^\']*\'?)/, null, "\"'"]], [["tag", /^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i], ["atn", /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i], ["lang-uq.val", /^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],
          ["pun", /^[=<>\/]+/], ["lang-js", /^on\w+\s*=\s*\"([^\"]+)\"/i], ["lang-js", /^on\w+\s*=\s*\'([^\']+)\'/i], ["lang-js", /^on\w+\s*=\s*([^\"\'>\s]+)/i], ["lang-css", /^style\s*=\s*\"([^\"]+)\"/i], ["lang-css", /^style\s*=\s*\'([^\']+)\'/i], ["lang-css", /^style\s*=\s*([^\"\'>\s]+)/i]]), ["in.tag"]); n(E([], [["atv", /^[\s\S]+/]]), ["uq.val"]); n(v({ keywords: R, hashComments: !0, cStyleComments: !0, types: P }), "c cc cpp cxx cyc m".split(" ")); n(v({ keywords: "null,true,false" }), ["json"]); n(v({
            keywords: M, hashComments: !0, cStyleComments: !0,
            verbatimStrings: !0, types: P
          }), ["cs"]); n(v({ keywords: L, cStyleComments: !0 }), ["java"]); n(v({ keywords: J, hashComments: !0, multiLineStrings: !0 }), ["bash", "bsh", "csh", "sh"]); n(v({ keywords: N, hashComments: !0, multiLineStrings: !0, tripleQuotedStrings: !0 }), ["cv", "py", "python"]); n(v({ keywords: "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END", hashComments: !0, multiLineStrings: !0, regexLiterals: 2 }),
            ["perl", "pl", "pm"]); n(v({ keywords: O, hashComments: !0, multiLineStrings: !0, regexLiterals: !0 }), ["rb", "ruby"]); n(v({ keywords: K, cStyleComments: !0, regexLiterals: !0 }), ["javascript", "js", "ts", "typescript"]); n(v({ keywords: "all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes", hashComments: 3, cStyleComments: !0, multilineStrings: !0, tripleQuotedStrings: !0, regexLiterals: !0 }), ["coffee"]); n(E([], [["str", /^[\s\S]+/]]),
              ["regex"]); var U = Q.PR = {
                createSimpleLexer: E, registerLangHandler: n, sourceDecorator: v, PR_ATTRIB_NAME: "atn", PR_ATTRIB_VALUE: "atv", PR_COMMENT: "com", PR_DECLARATION: "dec", PR_KEYWORD: "kwd", PR_LITERAL: "lit", PR_NOCODE: "nocode", PR_PLAIN: "pln", PR_PUNCTUATION: "pun", PR_SOURCE: "src", PR_STRING: "str", PR_TAG: "tag", PR_TYPE: "typ", prettyPrintOne: function (a, d, f) {
                  f = f || !1; d = d || null; var c = document.createElement("div"); c.innerHTML = "<pre>" + a + "</pre>"; c = c.firstChild; f && B(c, f, !0); H({ j: d, m: f, h: c, l: 1, a: null, i: null, c: null, g: null });
                  return c.innerHTML
                }, prettyPrint: g = function (a, d) {
                  function f() {
                    for (var c = Q.PR_SHOULD_USE_CONTINUATION ? b.now() + 250 : Infinity; t < r.length && b.now() < c; t++) {
                      for (var d = r[t], k = h, n = d; n = n.previousSibling;) { var q = n.nodeType, l = (7 === q || 8 === q) && n.nodeValue; if (l ? !/^\??prettify\b/.test(l) : 3 !== q || /\S/.test(n.nodeValue)) break; if (l) { k = {}; l.replace(/\b(\w+)=([\w:.%+-]+)/g, function (a, b, c) { k[b] = c }); break } } n = d.className; if ((k !== h || u.test(n)) && !e.test(n)) {
                        q = !1; for (l = d.parentNode; l; l = l.parentNode)if (w.test(l.tagName) && l.className &&
                          u.test(l.className)) { q = !0; break } if (!q) {
                          d.className += " prettyprinted"; q = k.lang; if (!q) { var q = n.match(v), A; !q && (A = z(d)) && D.test(A.tagName) && (q = A.className.match(v)); q && (q = q[1]) } if (x.test(d.tagName)) l = 1; else var l = d.currentStyle, y = g.defaultView, l = (l = l ? l.whiteSpace : y && y.getComputedStyle ? y.getComputedStyle(d, null).getPropertyValue("white-space") : 0) && "pre" === l.substring(0, 3); y = k.linenums; (y = "true" === y || +y) || (y = (y = n.match(/\blinenums\b(?::(\d+))?/)) ? y[1] && y[1].length ? +y[1] : !0 : !1); y && B(d, y, l); H({
                            j: q, h: d, m: y,
                            l: l, a: null, i: null, c: null, g: null
                          })
                          }
                      }
                    } t < r.length ? Q.setTimeout(f, 250) : "function" === typeof a && a()
                  } for (var c = d || document.body, g = c.ownerDocument || document, c = [c.getElementsByTagName("pre"), c.getElementsByTagName("code"), c.getElementsByTagName("xmp")], r = [], k = 0; k < c.length; ++k)for (var n = 0, l = c[k].length; n < l; ++n)r.push(c[k][n]); var c = null, b = Date; b.now || (b = { now: function () { return +new Date } }); var t = 0, v = /\blang(?:uage)?-([\w.]+)(?!\S)/, u = /\bprettyprint\b/, e = /\bprettyprinted\b/, x = /pre|xmp/i, D = /^code$/i, w = /^(?:pre|code|xmp)$/i,
                    h = {}; f()
                }
              }, R = Q.define; "function" === typeof R && R.amd && R("google-code-prettify", [], function () { return U })
    })(); return g
    }(); S || k.setTimeout(T, 0)
  })();
}()

document.onreadystatechange = function () {
  // Banner Trigger if Not Closed
  /*
  if (!localStorage.bannerClosed) {
    document.getElementById('privacy-banner').style.display = "inherit";
  } else {
    document.getElementById('privacy-banner').style.display = "none";
  }
  document.getElementById('banner-accept').addEventListener('click', function() {
    document.getElementById('privacy-banner').style.display = "none";
    localStorage.bannerClosed = 'true';
  });
  if (navigator.userAgent.match(/Opera|OPR\//)) {
    document.getElementById('privacy-banner').style.display = "inherit";
  }
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      var amp = document.querySelectorAll('[rel=amphtml]');
      if( amp[0] ){
          document.location.href = amp[0].href;
      }
      var top_menu = document.getElementsByClassName('top-menu')[0];
      top_menu.style.display = "none";
      var mobile_search_btn = document.getElementsByClassName('mobile-search-btn')[0];
      mobile_search_btn.style.display = "none";
  }
  */
  function trim(s, mask) {
    while (~mask.indexOf(s[0])) {
      s = s.slice(1);
    }
    while (~mask.indexOf(s[s.length - 1])) {
      s = s.slice(0, -1);
    }
    return s;
  }
  if (document.readyState == "complete") {
    var tgl = document.getElementsByClassName('toc-toggle')[0];
    function toggle() {
      var x = document.getElementsByClassName('tutorial-toc')[0];
      if (x.style.display === "" || x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
    tgl.addEventListener("click", toggle, false);

    window.onscroll = function () { handleScroll() };
    var logo_menu = document.getElementById("logo-menu");
    var header = document.getElementById("header");
    var sticky = logo_menu.offsetTop;

    function handleScroll() {
      if (window.pageYOffset > sticky) {
        logo_menu.classList.add("sticky");
        header.classList.add("fixed");
      } else {
        logo_menu.classList.remove("sticky");
        header.classList.remove("fixed");
      }
    }
    var self = location.href;
    filename = self.substring(self.lastIndexOf('.com') + 5);
    filename = filename.replace(/([/]$)/g, '');
    if (filename.lastIndexOf('.htm') == -1) {
      filename = filename + "/index.htm";
    }
    var linktext = document.querySelectorAll('.tutorial-toc .toc li a[href*= "' + filename + '"]')[0];
    if (linktext == undefined) {
      filenames = document.getElementsByClassName('parent-file')[0];
      if (filenames != undefined) {
        filename = filenames.innerHTML;
      }
    }
    if (filename.lastIndexOf('whoiswho') == -1) {
      var chapters = document.querySelectorAll('ul.toc.chapters>li a[href*= "' + filename + '"]');
      if (chapters.length > 0) {
        chapters[0].parentElement.style.backgroundColor = "#d6d6d6";
      }
      var submenu = document.querySelectorAll('ul.toc.submenu>li a[href*= "' + filename + '"]');
      if (submenu.length > 0) {
        submenu[0].parentElement.style.backgroundColor = "#d6d6d6";
      }
      /* Match the height */
      var tc = document.getElementsByClassName('tutorial-content')[0];
      var tt = document.getElementsByClassName('tutorial-toc')[0];
      if ((tc.offsetHeight < tt.offsetHeight) && (window.innerWidth > 840)) {
        tc.style.minHeight = tt.offsetHeight + 20 + "px";
      }
    }
    var stickyadstatus = "";
    function stickyAds() {
      document.getElementById("stickyparent").style.position = "sticky";
      var elem = document.getElementById("sticky-ad");
      if (!elem) { return false; }
      /*
           if (document.getElementById("ad300")) {
            var skyWidth = Number(getStyleValue(document.getElementById("ad300"), "width").replace("px", ""));  
           } else {
        var skyWidth = Number(getStyleValue(document.getElementById("right-col"), "width").replace("px", ""));  
           }
           elem.style.width = skyWidth + "px";
      */
      if (window.innerWidth <= 992) {
        elem.style.position = "";
        elem.style.top = stickyparent + "px";
        return false;
      }
      var stickyparent = document.getElementById("stickyparent").offsetTop;
      var docTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      var adHeight = Number(getStyleValue(elem, "height").replace("px", ""));
      if (stickyadstatus == "") {
        if ((stickyparent - docTop) < 80) {
          elem.style.position = "fixed";
          elem.style.top = "60px";
          stickyadstatus = "sticky";
          document.getElementById("stickyparent").style.position = "sticky";
        }
      } else {
        if ((docTop + 80) - stickyparent < 0) {
          elem.style.position = "";
          elem.style.top = stickyparent + "px";
          stickyadstatus = "";
          document.getElementById("stickyparent").style.position = "static";
        }
      }
      if (stickyadstatus == "sticky") {
        if ((docTop + adHeight + 80) > document.getElementById("footer").offsetTop) {
          elem.style.position = "absolute";
          elem.style.top = (document.getElementById("footer").offsetTop - adHeight) + "px";
          document.getElementById("stickyparent").style.position = "static";
        } else {
          elem.style.position = "fixed";
          elem.style.top = "80px";
          stickyadstatus = "sticky";
          document.getElementById("stickyparent").style.position = "sticky";
        }
      }
    }
    function getStyleValue(elmnt, style) {
      if (window.getComputedStyle) {
        return window.getComputedStyle(elmnt, null).getPropertyValue(style);
      } else {
        return elmnt.currentStyle[style];
      }
    }
    window.addEventListener("scroll", stickyAds);
    window.addEventListener("resize", stickyAds);
  }
}
