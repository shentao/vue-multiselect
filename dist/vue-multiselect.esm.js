import { Fragment as e, Teleport as t, Transition as n, computed as r, createBlock as i, createCommentVNode as a, createElementBlock as o, createElementVNode as s, createTextVNode as c, createVNode as l, defineComponent as u, nextTick as d, normalizeClass as f, normalizeStyle as p, onMounted as m, openBlock as h, ref as g, renderList as _, renderSlot as v, toDisplayString as y, unref as b, useTemplateRef as x, vShow as S, watch as C, withCtx as w, withDirectives as T, withKeys as E, withModifiers as D } from "vue";
//#region src/utils.ts
function O(e) {
	return e === 0 ? !1 : Array.isArray(e) && e.length === 0 ? !0 : !e;
}
function k(e) {
	return (...t) => !e(...t);
}
function ee(e, t) {
	return e === void 0 && (e = "undefined"), e === null && (e = "null"), e === !1 && (e = "false"), e.toString().toLowerCase().indexOf(t.trim()) !== -1;
}
function A(e) {
	return e.filter((e) => !e.$isLabel);
}
function j(e, t) {
	return (n) => n.reduce((n, r) => r[e] && r[e].length ? (n.push({
		$groupLabel: r[t],
		$isLabel: !0
	}), n.concat(r[e])) : n, []);
}
var M = (...e) => (t) => e.reduce((e, t) => t(e), t), N = {
	internalSearch: {
		type: Boolean,
		default: !0
	},
	options: {
		type: Array,
		required: !0
	},
	multiple: {
		type: Boolean,
		default: !1
	},
	trackBy: { type: String },
	label: { type: String },
	searchable: {
		type: Boolean,
		default: !0
	},
	clearOnSelect: {
		type: Boolean,
		default: !0
	},
	hideSelected: {
		type: Boolean,
		default: !1
	},
	placeholder: {
		type: String,
		default: "Select option"
	},
	allowEmpty: {
		type: Boolean,
		default: !0
	},
	resetAfter: {
		type: Boolean,
		default: !1
	},
	closeOnSelect: {
		type: Boolean,
		default: !0
	},
	customLabel: {
		type: Function,
		default(e, t) {
			return O(e) ? "" : t ? e[t] : e;
		}
	},
	taggable: {
		type: Boolean,
		default: !1
	},
	tagPlaceholder: {
		type: String,
		default: "Press enter to create a tag"
	},
	tagPosition: {
		type: String,
		default: "top"
	},
	max: {
		type: [Number, Boolean],
		default: !1
	},
	id: {
		type: null,
		default: null
	},
	optionsLimit: {
		type: Number,
		default: 1e3
	},
	groupValues: { type: String },
	groupLabel: { type: String },
	groupSelect: {
		type: Boolean,
		default: !1
	},
	blockKeys: {
		type: Array,
		default() {
			return [];
		}
	},
	preserveSearch: {
		type: Boolean,
		default: !1
	},
	preselectFirst: {
		type: Boolean,
		default: !1
	},
	preventAutofocus: {
		type: Boolean,
		default: !1
	},
	filteringSortFunc: {
		type: Function,
		default: null
	}
}, P = {
	showPointer: {
		type: Boolean,
		default: !0
	},
	optionHeight: {
		type: Number,
		default: 40
	}
}, F = {
	name: {
		type: String,
		default: ""
	},
	modelValue: {
		type: null,
		default() {
			return [];
		}
	},
	selectLabel: {
		type: String,
		default: "Press enter to select"
	},
	selectGroupLabel: {
		type: String,
		default: "Press enter to select group"
	},
	selectedLabel: {
		type: String,
		default: "Selected"
	},
	deselectLabel: {
		type: String,
		default: "Press enter to remove"
	},
	deselectGroupLabel: {
		type: String,
		default: "Press enter to deselect group"
	},
	showLabels: {
		type: Boolean,
		default: !0
	},
	limit: {
		type: Number,
		default: 99999
	},
	maxHeight: {
		type: Number,
		default: 300
	},
	limitText: {
		type: Function,
		default: (e) => `and ${e} more`
	},
	loading: {
		type: Boolean,
		default: !1
	},
	disabled: {
		type: Boolean,
		default: !1
	},
	spellcheck: {
		type: Boolean,
		default: !1
	},
	openDirection: {
		type: String,
		default: ""
	},
	showNoOptions: {
		type: Boolean,
		default: !0
	},
	showNoResults: {
		type: Boolean,
		default: !0
	},
	tabindex: {
		type: Number,
		default: 0
	},
	required: {
		type: Boolean,
		default: !1
	},
	useTeleport: {
		type: Boolean,
		default: !1
	},
	teleportTarget: {
		type: [String, Object],
		default: "body"
	},
	contentWrapperClass: {
		type: [
			String,
			Array,
			Object
		],
		default: ""
	}
}, I = {
	...N,
	...P,
	...F
}, L = [
	"open",
	"search-change",
	"close",
	"select",
	"update:modelValue",
	"remove",
	"tag"
];
//#endregion
//#region src/composables/usePointer.ts
function R(e, t) {
	let n = g(0), i = g(!1), a = r(() => n.value * e.optionHeight), o = r(() => t.optimizedHeight.value / e.optionHeight);
	function s(r, i) {
		return {
			"multiselect__option--highlight": r === n.value && e.showPointer,
			"multiselect__option--selected": t.isSelected(i)
		};
	}
	function c(r, i) {
		if (!e.groupSelect) return ["multiselect__option--disabled", { "multiselect__option--group": i.$isLabel }];
		let a = e.options.find((t) => t[e.groupLabel] === i.$groupLabel);
		return a && !t.wholeGroupDisabled(a) ? [
			"multiselect__option--group",
			{ "multiselect__option--highlight": r === n.value && e.showPointer },
			{ "multiselect__option--group-selected": t.wholeGroupSelected(a) }
		] : "multiselect__option--disabled";
	}
	function l({ key: e } = "Enter") {
		t.filteredOptions.value.length > 0 && t.select(t.filteredOptions.value[n.value], e), f();
	}
	function u() {
		/* istanbul ignore else */
		if (n.value < t.filteredOptions.value.length - 1) {
			n.value++;
			let r = t.listRef.value;
			/* istanbul ignore else */
			r && r.scrollTop <= a.value - (o.value - 1) * e.optionHeight && (r.scrollTop = a.value - (o.value - 1) * e.optionHeight), t.filteredOptions.value[n.value] && t.filteredOptions.value[n.value].$isLabel && !e.groupSelect && u();
		}
		i.value = !0;
	}
	function d() {
		if (n.value > 0) {
			n.value--;
			let r = t.listRef.value;
			/* istanbul ignore else */
			r && r.scrollTop >= a.value && (r.scrollTop = a.value), t.filteredOptions.value[n.value] && t.filteredOptions.value[n.value].$isLabel && !e.groupSelect && d();
		} else t.filteredOptions.value[n.value] && t.filteredOptions.value[0].$isLabel && !e.groupSelect && u();
		i.value = !0;
	}
	function f() {
		e.closeOnSelect && (n.value = 0, t.listRef.value && (t.listRef.value.scrollTop = 0));
	}
	function p() {
		n.value >= t.filteredOptions.value.length - 1 && (n.value = t.filteredOptions.value.length ? t.filteredOptions.value.length - 1 : 0), t.filteredOptions.value.length > 0 && t.filteredOptions.value[n.value] && t.filteredOptions.value[n.value].$isLabel && !e.groupSelect && u();
	}
	function m(e) {
		n.value = e, i.value = !0;
	}
	return C(t.filteredOptions, () => {
		p();
	}), C(t.isOpen, () => {
		i.value = !1;
	}), C(n, () => {
		t.searchRef.value && t.searchRef.value.setAttribute("aria-activedescendant", e.id + "-" + n.value.toString());
	}), {
		pointer: n,
		pointerDirty: i,
		pointerPosition: a,
		visibleElements: o,
		optionHighlight: s,
		groupHighlight: c,
		addPointerElement: l,
		pointerForward: u,
		pointerBackward: d,
		pointerReset: f,
		pointerAdjust: p,
		pointerSet: m
	};
}
//#endregion
//#region src/composables/useMultiselect.ts
function z(e, t, n) {
	let i = g(""), a = g(!1), o = g("below"), s = g(e.maxHeight), c = r(() => e.modelValue || e.modelValue === 0 ? Array.isArray(e.modelValue) ? e.modelValue : [e.modelValue] : []), l = r(() => {
		let t = i.value || "", n = t.toLowerCase().trim(), r = e.options.concat();
		return r = e.internalSearch ? e.groupValues ? _(r, n, e.label) : V(r, n, e.label, e.customLabel) : e.groupValues ? j(e.groupValues, e.groupLabel)(r) : r, r = e.hideSelected ? r.filter(k(x)) : r, e.taggable && n.length && !b(n) && (e.tagPosition === "bottom" ? r.push({
			isTag: !0,
			label: t
		}) : r.unshift({
			isTag: !0,
			label: t
		})), r.slice(0, e.optionsLimit);
	}), u = r(() => e.trackBy ? c.value.map((t) => t[e.trackBy]) : c.value), f = r(() => (e.groupValues ? v(e.options) : e.options).map((t) => e.customLabel(t, e.label).toString().toLowerCase())), p = r(() => e.multiple ? e.searchable ? "" : e.placeholder : c.value.length ? w(c.value[0]) : e.searchable ? "" : e.placeholder);
	function h() {
		return e.multiple ? c.value : c.value.length === 0 ? null : c.value[0];
	}
	function _(t, n, r) {
		return M(te(n, r, e.groupValues, e.groupLabel, e.customLabel), j(e.groupValues, e.groupLabel))(t);
	}
	function v(t) {
		return M(j(e.groupValues, e.groupLabel), A)(t);
	}
	function y(e) {
		i.value = e;
	}
	function b(t) {
		return e.options ? f.value.indexOf(t) > -1 : !1;
	}
	function x(t) {
		let n = e.trackBy ? t[e.trackBy] : t;
		return u.value.indexOf(n) > -1;
	}
	function S(e) {
		return !!e.$isDisabled;
	}
	function w(t) {
		if (O(t)) return "";
		/* istanbul ignore else */
		if (t.isTag) return t.label;
		/* istanbul ignore else */
		if (t.$isLabel) return t.$groupLabel;
		let n = e.customLabel(t, e.label);
		return O(n) ? "" : n;
	}
	function T(n, r) {
		/* istanbul ignore else */
		if (n.$isLabel && e.groupSelect) {
			E(n);
			return;
		}
		if (!(e.blockKeys.indexOf(r) !== -1 || e.disabled || n.$isDisabled || n.$isLabel) && !(e.max && e.multiple && c.value.length === e.max) && !(r === "Tab" && !H.pointerDirty.value)) {
			if (n.isTag) t("tag", n.label, e.id), i.value = "", e.closeOnSelect && !e.multiple && L();
			else {
				if (x(n)) {
					r !== "Tab" && P(n);
					return;
				}
				/* istanbul ignore else */
				e.multiple ? t("update:modelValue", c.value.concat([n])) : t("update:modelValue", n), t("select", n, e.id), e.clearOnSelect && (i.value = "");
			}
			/* istanbul ignore else */
			e.closeOnSelect && L();
		}
	}
	function E(n) {
		let r = e.options.find((t) => t[e.groupLabel] === n.$groupLabel);
		if (r) {
			if (D(r)) {
				t("remove", r[e.groupValues], e.id);
				let n = e.trackBy ? r[e.groupValues].map((t) => t[e.trackBy]) : r[e.groupValues];
				t("update:modelValue", c.value.filter((t) => n.indexOf(e.trackBy ? t[e.trackBy] : t) === -1));
			} else {
				let n = r[e.groupValues].filter((e) => !(S(e) || x(e)));
				e.max && n.splice(e.max - c.value.length), t("select", n, e.id), t("update:modelValue", c.value.concat(n));
			}
			e.closeOnSelect && L();
		}
	}
	function D(t) {
		return t[e.groupValues].every((e) => x(e) || S(e));
	}
	function N(t) {
		return t[e.groupValues].every(S);
	}
	function P(n, r = !0) {
		/* istanbul ignore else */
		if (e.disabled || n.$isDisabled) return;
		/* istanbul ignore else */
		if (!e.allowEmpty && c.value.length <= 1) {
			L();
			return;
		}
		let i = typeof n == "object" ? u.value.indexOf(n[e.trackBy]) : u.value.indexOf(n);
		/* istanbul ignore else */
		e.multiple ? t("update:modelValue", c.value.slice(0, i).concat(c.value.slice(i + 1))) : t("update:modelValue", null), t("remove", n, e.id), e.closeOnSelect && r && L();
	}
	function F() {
		e.blockKeys.indexOf("Delete") === -1 && i.value.length === 0 && Array.isArray(c.value) && c.value.length && P(c.value[c.value.length - 1], !1);
	}
	function I() {
		a.value || e.disabled || (B(), e.groupValues && H.pointer.value === 0 && l.value.length && (H.pointer.value = 1), a.value = !0, e.searchable ? (e.preserveSearch || (i.value = ""), e.preventAutofocus || d(() => n.search.value && n.search.value.focus())) : e.preventAutofocus || n.root.value !== void 0 && n.root.value !== null && n.root.value.focus(), t("open", e.id));
	}
	function L() {
		a.value && (a.value = !1, e.searchable ? n.search.value !== null && n.search.value !== void 0 && n.search.value.blur() : n.root.value !== void 0 && n.root.value !== null && n.root.value.blur(), e.preserveSearch || (i.value = ""), t("close", h(), e.id));
	}
	function z() {
		a.value ? L() : I();
	}
	function B() {
		if (typeof window > "u") return;
		let t = n.root.value, r = t.getBoundingClientRect().top, i = window.innerHeight - t.getBoundingClientRect().bottom;
		i > e.maxHeight || i > r || e.openDirection === "below" || e.openDirection === "bottom" ? (o.value = "below", s.value = Math.min(i - 40, e.maxHeight)) : (o.value = "above", s.value = Math.min(r - 40, e.maxHeight));
	}
	function V(t, n, r, i) {
		return n ? t.filter((e) => ee(i(e, r), n)).sort((t, n) => typeof e.filteringSortFunc == "function" ? e.filteringSortFunc(t, n) : i(t, r).length - i(n, r).length) : t;
	}
	function te(e, t, n, r, i) {
		return (a) => a.map((a) => {
			/* istanbul ignore else */
			if (!a[n]) return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."), [];
			let o = V(a[n], e, t, i);
			return o.length ? {
				[r]: a[r],
				[n]: o
			} : [];
		});
	}
	C(c, () => {
		/* istanbul ignore else */
		e.resetAfter && c.value.length && (i.value = "", t("update:modelValue", e.multiple ? [] : null));
	}, { deep: !0 }), C(i, () => {
		t("search-change", i.value);
	});
	let H = R(e, {
		filteredOptions: l,
		optimizedHeight: s,
		isOpen: a,
		isSelected: x,
		wholeGroupDisabled: N,
		wholeGroupSelected: D,
		select: T,
		listRef: n.list,
		searchRef: n.search
	});
	return m(() => {
		!e.multiple && e.max && console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."), e.preselectFirst && !c.value.length && e.options.length && T(l.value[0]);
	}), {
		search: i,
		isOpen: a,
		preferredOpenDirection: o,
		optimizedHeight: s,
		internalValue: c,
		filteredOptions: l,
		valueKeys: u,
		optionKeys: f,
		currentOptionLabel: p,
		getValue: h,
		filterAndFlat: _,
		flatAndStrip: v,
		updateSearch: y,
		isExistingOption: b,
		isSelected: x,
		isOptionDisabled: S,
		getOptionLabel: w,
		select: T,
		selectGroup: E,
		wholeGroupSelected: D,
		wholeGroupDisabled: N,
		removeElement: P,
		removeLastElement: F,
		activate: I,
		deactivate: L,
		toggle: z,
		adjustPosition: B,
		filterOptions: V,
		filterGroups: te,
		...H
	};
}
//#endregion
//#region src/Multiselect.vue?vue&type=script&setup=true&lang.ts
var B = [
	"tabindex",
	"aria-expanded",
	"aria-owns",
	"aria-activedescendant"
], V = {
	ref: "tags",
	class: "multiselect__tags"
}, te = { class: "multiselect__tags-wrap" }, H = ["textContent"], ne = ["onKeydown", "onMousedown"], re = ["textContent"], ie = { class: "multiselect__spinner" }, ae = [
	"name",
	"id",
	"spellcheck",
	"placeholder",
	"required",
	"value",
	"disabled",
	"tabindex",
	"aria-label",
	"aria-controls"
], oe = ["id", "aria-multiselectable"], se = { key: 0 }, ce = { class: "multiselect__option" }, le = [
	"aria-selected",
	"id",
	"role"
], ue = [
	"onClick",
	"onMouseenter",
	"data-select",
	"data-selected",
	"data-deselect"
], de = [
	"data-select",
	"data-deselect",
	"onMouseenter",
	"onMousedown"
], fe = { class: "multiselect__option" }, pe = { class: "multiselect__option" }, U = /* @__PURE__ */ u({
	name: "vue-multiselect",
	__name: "Multiselect",
	props: I,
	emits: [
		"open",
		"search-change",
		"close",
		"select",
		"update:modelValue",
		"remove",
		"tag"
	],
	setup(u, { expose: m, emit: O }) {
		let k = u, ee = O, A = g(null), j = g(null), { search: M, isOpen: N, preferredOpenDirection: P, optimizedHeight: F, internalValue: I, filteredOptions: L, valueKeys: R, optionKeys: U, currentOptionLabel: W, getValue: me, filterAndFlat: he, flatAndStrip: ge, updateSearch: _e, isExistingOption: ve, isSelected: ye, isOptionDisabled: be, getOptionLabel: G, select: xe, selectGroup: Se, wholeGroupSelected: Ce, wholeGroupDisabled: we, removeElement: K, removeLastElement: Te, activate: q, deactivate: J, toggle: Y, adjustPosition: Ee, filterOptions: De, filterGroups: Oe, pointer: ke, pointerDirty: Ae, pointerPosition: je, visibleElements: Me, optionHighlight: Ne, groupHighlight: Pe, addPointerElement: Fe, pointerForward: Ie, pointerBackward: Le, pointerReset: Re, pointerAdjust: ze, pointerSet: Be } = z(k, ee, {
			root: A,
			search: x("search"),
			list: j
		}), X = g({}), Z = g(!1), Ve = r(() => k.groupValues && k.groupLabel && k.groupSelect), Q = r(() => k.multiple ? I.value.slice(0, k.limit) : []), $ = r(() => I.value[0]), He = r(() => ($.value || $.value === 0) && (!N.value || !k.searchable) && !Q.value.length), Ue = r(() => !I.value.length && (!k.searchable || !N.value)), We = r(() => k.showLabels ? k.deselectLabel : ""), Ge = r(() => k.showLabels ? k.deselectGroupLabel : ""), Ke = r(() => k.showLabels ? k.selectLabel : ""), qe = r(() => k.showLabels ? k.selectGroupLabel : ""), Je = r(() => k.showLabels ? k.selectedLabel : ""), Ye = r(() => k.searchable || k.multiple && k.modelValue && k.modelValue.length ? N.value ? { width: "100%" } : {
			width: "0",
			position: "absolute",
			padding: "0"
		} : ""), Xe = r(() => k.options.length ? { display: "inline-block" } : { display: "block" }), Ze = r(() => k.openDirection === "above" || k.openDirection === "top" ? !0 : k.openDirection === "below" || k.openDirection === "bottom" ? !1 : P.value === "above"), Qe = r(() => k.required !== !1 && I.value.length <= 0);
		return C(N, (e) => {
			e && (k.useTeleport ? (Z.value = !1, d(() => {
				let e = A.value;
				if (!e) return;
				let t = e.getBoundingClientRect();
				X.value = {
					position: "absolute",
					top: `${t.bottom + window.scrollY}px`,
					left: `${t.left + window.scrollX}px`,
					width: `${t.width}px`,
					zIndex: 9999
				}, Z.value = !0;
			})) : Z.value = !0);
		}), m({
			search: M,
			isOpen: N,
			preferredOpenDirection: P,
			optimizedHeight: F,
			internalValue: I,
			filteredOptions: L,
			valueKeys: R,
			optionKeys: U,
			currentOptionLabel: W,
			getValue: me,
			filterAndFlat: he,
			flatAndStrip: ge,
			updateSearch: _e,
			isExistingOption: ve,
			isSelected: ye,
			isOptionDisabled: be,
			getOptionLabel: G,
			select: xe,
			selectGroup: Se,
			wholeGroupSelected: Ce,
			wholeGroupDisabled: we,
			removeElement: K,
			removeLastElement: Te,
			activate: q,
			deactivate: J,
			toggle: Y,
			adjustPosition: Ee,
			filterOptions: De,
			filterGroups: Oe,
			pointer: ke,
			pointerDirty: Ae,
			pointerPosition: je,
			visibleElements: Me,
			optionHighlight: Ne,
			groupHighlight: Pe,
			addPointerElement: Fe,
			pointerForward: Ie,
			pointerBackward: Le,
			pointerReset: Re,
			pointerAdjust: ze,
			pointerSet: Be,
			dropdownStyles: X,
			ready: Z,
			hasOptionGroup: Ve,
			visibleValues: Q,
			singleValue: $,
			isSingleLabelVisible: He,
			isPlaceholderVisible: Ue,
			deselectLabelText: We,
			deselectGroupLabelText: Ge,
			selectLabelText: Ke,
			selectGroupLabelText: qe,
			selectedLabelText: Je,
			inputStyle: Ye,
			contentStyle: Xe,
			isAbove: Ze,
			isRequired: Qe
		}), (r, u) => (h(), o("div", {
			ref_key: "root",
			ref: A,
			tabindex: r.searchable ? -1 : r.tabindex,
			class: f([{
				"multiselect--active": b(N),
				"multiselect--disabled": r.disabled,
				"multiselect--above": Ze.value,
				"multiselect--has-options-group": Ve.value
			}, "multiselect"]),
			onFocus: u[14] ||= (e) => b(q)(),
			onBlur: u[15] ||= (e) => !r.searchable && b(J)(),
			onKeydown: [
				u[16] ||= E(D((e) => b(Ie)(), ["self", "prevent"]), ["down"]),
				u[17] ||= E(D((e) => b(Le)(), ["self", "prevent"]), ["up"]),
				u[18] ||= E(D((e) => b(Fe)(e), ["stop", "self"]), ["enter", "tab"])
			],
			onKeyup: u[19] ||= E((e) => b(J)(), ["esc"]),
			role: "combobox",
			"aria-expanded": b(N),
			"aria-owns": "listbox-" + r.id,
			"aria-activedescendant": b(N) && b(ke) !== null ? r.id + "-" + b(ke) : null
		}, [
			v(r.$slots, "caret", { toggle: b(Y) }, () => [s("div", {
				onMousedown: u[0] ||= D((e) => b(Y)(), ["prevent", "stop"]),
				class: "multiselect__select"
			}, null, 32)]),
			v(r.$slots, "clear", { search: b(M) }),
			s("div", V, [
				v(r.$slots, "selection", {
					search: b(M),
					remove: b(K),
					values: Q.value,
					isOpen: b(N)
				}, () => [T(s("div", te, [(h(!0), o(e, null, _(Q.value, (e, t) => v(r.$slots, "tag", {
					option: e,
					search: b(M),
					remove: b(K)
				}, () => [(h(), o("span", {
					class: "multiselect__tag",
					key: t,
					onMousedown: u[1] ||= D(() => {}, ["prevent"])
				}, [s("span", { textContent: y(b(G)(e)) }, null, 8, H), s("i", {
					tabindex: "1",
					onKeydown: E(D((t) => b(K)(e), ["prevent"]), ["enter"]),
					onMousedown: D((t) => b(K)(e), ["prevent"]),
					class: "multiselect__tag-icon"
				}, null, 40, ne)], 32))])), 256))], 512), [[S, Q.value.length > 0]]), b(I) && b(I).length > r.limit ? v(r.$slots, "limit", {}, () => [s("strong", {
					class: "multiselect__strong",
					textContent: y(r.limitText(b(I).length - r.limit))
				}, null, 8, re)], void 0, 0) : a("", !0)]),
				l(n, { name: "multiselect__loading" }, {
					default: w(() => [v(r.$slots, "loading", {}, () => [T(s("div", ie, null, 512), [[S, r.loading]])])]),
					_: 3
				}),
				r.searchable ? (h(), o("input", {
					key: 0,
					ref_key: "search",
					ref: M,
					name: r.name,
					id: r.id,
					type: "text",
					autocomplete: "off",
					spellcheck: r.spellcheck,
					placeholder: r.placeholder,
					required: Qe.value,
					style: p(Ye.value),
					value: b(M),
					disabled: r.disabled,
					tabindex: r.tabindex,
					"aria-label": r.name + "-searchbox",
					onInput: u[2] ||= (e) => b(_e)(e.target.value),
					onFocus: u[3] ||= D((e) => b(q)(), ["prevent"]),
					onBlur: u[4] ||= D((e) => b(J)(), ["prevent"]),
					onKeyup: u[5] ||= E((e) => b(J)(), ["esc"]),
					onKeydown: [
						u[6] ||= E(D((e) => b(Ie)(), ["prevent"]), ["down"]),
						u[7] ||= E(D((e) => b(Le)(), ["prevent"]), ["up"]),
						u[8] ||= E(D((e) => b(Fe)(e), [
							"prevent",
							"stop",
							"self"
						]), ["enter"]),
						u[9] ||= E(D((e) => b(Te)(), ["stop"]), ["delete"])
					],
					class: "multiselect__input",
					"aria-controls": "listbox-" + r.id
				}, null, 44, ae)) : a("", !0),
				He.value ? (h(), o("span", {
					key: 1,
					class: "multiselect__single",
					onMousedown: u[10] ||= D((...e) => b(Y) && b(Y)(...e), ["prevent"])
				}, [v(r.$slots, "singleLabel", { option: $.value }, () => [c(y(b(W)), 1)])], 32)) : a("", !0),
				Ue.value ? (h(), o("span", {
					key: 2,
					class: "multiselect__placeholder",
					onMousedown: u[11] ||= D((...e) => b(Y) && b(Y)(...e), ["prevent"])
				}, [v(r.$slots, "placeholder", {}, () => [c(y(r.placeholder), 1)])], 32)) : a("", !0)
			], 512),
			(h(), i(t, {
				to: r.teleportTarget,
				disabled: !r.useTeleport
			}, [l(n, { name: "multiselect" }, {
				default: w(() => [b(N) && Z.value ? (h(), o("div", {
					key: 0,
					class: f(["multiselect__content-wrapper", r.contentWrapperClass]),
					onFocus: u[12] ||= (...e) => b(q) && b(q)(...e),
					tabindex: "-1",
					onMousedown: u[13] ||= D(() => {}, ["prevent"]),
					style: p([X.value, { maxHeight: b(F) + "px" }]),
					ref_key: "list",
					ref: j
				}, [s("ul", {
					class: "multiselect__content",
					style: p(Xe.value),
					role: "listbox",
					id: "listbox-" + r.id,
					"aria-multiselectable": r.multiple
				}, [
					v(r.$slots, "beforeList"),
					r.multiple && r.max === b(I).length ? (h(), o("li", se, [s("span", ce, [v(r.$slots, "maxElements", {}, () => [c("Maximum of " + y(r.max) + " options selected. First remove a selected option to select another.", 1)])])])) : a("", !0),
					!r.max || b(I).length < r.max ? (h(!0), o(e, { key: 1 }, _(b(L), (e, t) => (h(), o("li", {
						class: "multiselect__element",
						key: t,
						"aria-selected": b(ye)(e),
						id: r.id + "-" + t,
						role: e && (e.$isLabel || e.$isDisabled) ? null : "option"
					}, [e && (e.$isLabel || e.$isDisabled) ? a("", !0) : (h(), o("span", {
						key: 0,
						class: f([b(Ne)(t, e), "multiselect__option"]),
						onClick: D((t) => b(xe)(e), ["stop"]),
						onMouseenter: D((e) => b(Be)(t), ["self"]),
						"data-select": e && e.isTag ? r.tagPlaceholder : Ke.value,
						"data-selected": Je.value,
						"data-deselect": We.value
					}, [v(r.$slots, "option", {
						option: e,
						search: b(M),
						index: t
					}, () => [s("span", null, y(b(G)(e)), 1)])], 42, ue)), e && (e.$isLabel || e.$isDisabled) ? (h(), o("span", {
						key: 1,
						"data-select": r.groupSelect && qe.value,
						"data-deselect": r.groupSelect && Ge.value,
						class: f([b(Pe)(t, e), "multiselect__option"]),
						onMouseenter: D((e) => r.groupSelect && b(Be)(t), ["self"]),
						onMousedown: D((t) => b(Se)(e), ["prevent"])
					}, [v(r.$slots, "option", {
						option: e,
						search: b(M),
						index: t
					}, () => [s("span", null, y(b(G)(e)), 1)])], 42, de)) : a("", !0)], 8, le))), 128)) : a("", !0),
					T(s("li", null, [s("span", fe, [v(r.$slots, "noResult", { search: b(M) }, () => [u[20] ||= c("No elements found. Consider changing the search query.", -1)])])], 512), [[S, r.showNoResults && b(L).length === 0 && b(M) && !r.loading]]),
					T(s("li", null, [s("span", pe, [v(r.$slots, "noOptions", {}, () => [u[21] ||= c("List is empty.", -1)])])], 512), [[S, r.showNoOptions && b(L).length === 0 && !b(M) && !r.loading]]),
					v(r.$slots, "afterList")
				], 12, oe)], 38)) : a("", !0)]),
				_: 3
			})], 8, ["to", "disabled"]))
		], 42, B));
	}
}), W = U;
//#endregion
export { U as Multiselect, W as default, N as multiselectCoreProps, L as multiselectEmits, I as multiselectProps, F as multiselectViewProps, P as pointerProps, z as useMultiselect, R as usePointer };
