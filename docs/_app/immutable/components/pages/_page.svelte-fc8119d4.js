import {
	a1 as X,
	A as Y,
	a2 as O,
	S as Z,
	i as J,
	s as N,
	v as h,
	w as _,
	x as d,
	f as m,
	t as p,
	y as w,
	o as tt,
	k as I,
	a as b,
	l as z,
	m as R,
	c as U,
	h as D,
	n as L,
	b as E,
	K,
	g as et,
	d as rt,
	O as nt,
	C as S,
	a0 as ot,
	q as k,
	r as H
} from '../../chunks/index-e3a647de.js'
import { b as T } from '../../chunks/paths-c8912ef8.js'
import { D as at, P as st } from '../../chunks/index-6b10de05.js'
import {
	W as lt,
	G as it,
	C as ct,
	D as y,
	H as V,
	a as ft
} from '../../chunks/WorldViewer-5afae3cc.js'
import { g as ut } from '../../chunks/navigation-777b9405.js'
const $t = () => {
	const t = Y({ ArrowUp: !1, ArrowLeft: !1, ArrowRight: !1, ArrowDown: !1 }),
		n = {
			onKeyDown: (s) => {
				!Object.keys(O(t)).includes(s) || t.update((l) => ((l[s] = !0), l))
			},
			onKeyUp: (s) => {
				!Object.keys(O(t)).includes(s) || t.update((l) => ((l[s] = !1), l))
			}
		}
	return [
		X(t, (s) => ({
			x: 0 + (s.ArrowRight ? 1 : 0) - (s.ArrowLeft ? 1 : 0),
			y: 0 + (s.ArrowUp ? 1 : 0) - (s.ArrowDown ? 1 : 0)
		})),
		n
	]
}
function W(c, t, r) {
	const e = c.slice()
	return (e[6] = t[r]), e
}
function F(c) {
	let t, r
	return (
		(t = new ft({
			props: {
				castShadow: !0,
				receiveShadow: !0,
				url: T + '/models/city/scene.gltf',
				scale: 2,
				rotation: { z: -0.14 * y, y: -1 * y, x: 4.8 * y },
				position: { ...c[6], y: -27.2 }
			}
		})),
		{
			c() {
				h(t.$$.fragment)
			},
			l(e) {
				_(t.$$.fragment, e)
			},
			m(e, n) {
				d(t, e, n), (r = !0)
			},
			p: S,
			i(e) {
				r || (m(t.$$.fragment, e), (r = !0))
			},
			o(e) {
				p(t.$$.fragment, e), (r = !1)
			},
			d(e) {
				w(t, e)
			}
		}
	)
}
function mt(c) {
	let t, r
	return (
		(t = new st({
			props: {
				rotation: { x: -90 * y, z: 90 * y, y: 70 * y },
				position: { y: 0.8, x: -0.25, z: 0.35 },
				fov: 60
			}
		})),
		{
			c() {
				h(t.$$.fragment)
			},
			l(e) {
				_(t.$$.fragment, e)
			},
			m(e, n) {
				d(t, e, n), (r = !0)
			},
			p: S,
			i(e) {
				r || (m(t.$$.fragment, e), (r = !0))
			},
			o(e) {
				p(t.$$.fragment, e), (r = !1)
			},
			d(e) {
				w(t, e)
			}
		}
	)
}
function pt(c) {
	let t, r
	return {
		c() {
			;(t = I('img')), this.h()
		},
		l(e) {
			;(t = z(e, 'IMG', { src: !0, alt: !0 })), this.h()
		},
		h() {
			ot(t.src, (r = T + '/logo/logo_main.png')) || L(t, 'src', r), L(t, 'alt', 'wikirace logo')
		},
		m(e, n) {
			E(e, t, n)
		},
		p: S,
		d(e) {
			e && D(t)
		}
	}
}
function gt(c) {
	let t, r, e, n, u
	return {
		c() {
			;(t = I('p')), (r = k('By')), (e = b()), (n = I('p')), (u = k('Elijah Storm')), this.h()
		},
		l(s) {
			t = z(s, 'P', { class: !0 })
			var l = R(t)
			;(r = H(l, 'By')), l.forEach(D), (e = U(s)), (n = z(s, 'P', { class: !0 }))
			var $ = R(n)
			;(u = H($, 'Elijah Storm')), $.forEach(D), this.h()
		},
		h() {
			L(t, 'class', 'svelte-18jj3r3'), L(n, 'class', 'svelte-18jj3r3')
		},
		m(s, l) {
			E(s, t, l), K(t, r), E(s, e, l), E(s, n, l), K(n, u)
		},
		p: S,
		d(s) {
			s && D(t), s && D(e), s && D(n)
		}
	}
}
function ht(c) {
	let t, r, e, n, u, s, l, $, v, G, A, j
	;(r = new at({ props: { position: { y: 20, x: 8, z: -3 } } })), (n = new it({}))
	let x = c[1],
		i = []
	for (let o = 0; o < x.length; o += 1) i[o] = F(W(c, x, o))
	const Q = (o) =>
		p(i[o], 1, 1, () => {
			i[o] = null
		})
	return (
		(l = new ct({
			props: {
				position: { y: 0.01, x: -5 },
				rotation: { y: 90 * y },
				movement: c[0],
				$$slots: { default: [mt] },
				$$scope: { ctx: c }
			}
		})),
		(v = new V({
			props: {
				transform: !0,
				position: { y: 5, x: -60, z: 50 },
				rotation: { y: 90 * y },
				$$slots: { default: [pt] },
				$$scope: { ctx: c }
			}
		})),
		(A = new V({
			props: {
				transform: !0,
				position: { y: 6, x: -50, z: 0 },
				rotation: { y: -180 * y },
				$$slots: { default: [gt] },
				$$scope: { ctx: c }
			}
		})),
		{
			c() {
				;(t = I('div')), h(r.$$.fragment), (e = b()), h(n.$$.fragment), (u = b())
				for (let o = 0; o < i.length; o += 1) i[o].c()
				;(s = b()),
					h(l.$$.fragment),
					($ = b()),
					h(v.$$.fragment),
					(G = b()),
					h(A.$$.fragment),
					this.h()
			},
			l(o) {
				t = z(o, 'DIV', { slot: !0 })
				var a = R(t)
				_(r.$$.fragment, a), (e = U(a)), _(n.$$.fragment, a), (u = U(a))
				for (let g = 0; g < i.length; g += 1) i[g].l(a)
				;(s = U(a)),
					_(l.$$.fragment, a),
					($ = U(a)),
					_(v.$$.fragment, a),
					(G = U(a)),
					_(A.$$.fragment, a),
					a.forEach(D),
					this.h()
			},
			h() {
				L(t, 'slot', 'scene')
			},
			m(o, a) {
				E(o, t, a), d(r, t, null), K(t, e), d(n, t, null), K(t, u)
				for (let g = 0; g < i.length; g += 1) i[g].m(t, null)
				K(t, s), d(l, t, null), K(t, $), d(v, t, null), K(t, G), d(A, t, null), (j = !0)
			},
			p(o, a) {
				if (a & 2) {
					x = o[1]
					let f
					for (f = 0; f < x.length; f += 1) {
						const q = W(o, x, f)
						i[f] ? (i[f].p(q, a), m(i[f], 1)) : ((i[f] = F(q)), i[f].c(), m(i[f], 1), i[f].m(t, s))
					}
					for (et(), f = x.length; f < i.length; f += 1) Q(f)
					rt()
				}
				const g = {}
				a & 512 && (g.$$scope = { dirty: a, ctx: o }), l.$set(g)
				const B = {}
				a & 512 && (B.$$scope = { dirty: a, ctx: o }), v.$set(B)
				const M = {}
				a & 512 && (M.$$scope = { dirty: a, ctx: o }), A.$set(M)
			},
			i(o) {
				if (!j) {
					m(r.$$.fragment, o), m(n.$$.fragment, o)
					for (let a = 0; a < x.length; a += 1) m(i[a])
					m(l.$$.fragment, o), m(v.$$.fragment, o), m(A.$$.fragment, o), (j = !0)
				}
			},
			o(o) {
				p(r.$$.fragment, o), p(n.$$.fragment, o), (i = i.filter(Boolean))
				for (let a = 0; a < i.length; a += 1) p(i[a])
				p(l.$$.fragment, o), p(v.$$.fragment, o), p(A.$$.fragment, o), (j = !1)
			},
			d(o) {
				o && D(t), w(r), w(n), nt(i, o), w(l), w(v), w(A)
			}
		}
	)
}
function _t(c) {
	let t, r
	return (
		(t = new lt({ props: { $$slots: { scene: [ht] }, $$scope: { ctx: c } } })),
		{
			c() {
				h(t.$$.fragment)
			},
			l(e) {
				_(t.$$.fragment, e)
			},
			m(e, n) {
				d(t, e, n), (r = !0)
			},
			p(e, [n]) {
				const u = {}
				n & 512 && (u.$$scope = { dirty: n, ctx: e }), t.$set(u)
			},
			i(e) {
				r || (m(t.$$.fragment, e), (r = !0))
			},
			o(e) {
				p(t.$$.fragment, e), (r = !1)
			},
			d(e) {
				w(t, e)
			}
		}
	)
}
const P = 3,
	C = 140
function dt(c) {
	const [t, r] = $t(),
		e = {
			up: () => r.onKeyDown('ArrowUp'),
			right: () => r.onKeyDown('ArrowRight'),
			down: () => r.onKeyDown('ArrowDown'),
			left: () => r.onKeyDown('ArrowLeft')
		},
		n = {
			up: () => r.onKeyUp('ArrowUp'),
			right: () => r.onKeyUp('ArrowRight'),
			down: () => r.onKeyUp('ArrowDown'),
			left: () => r.onKeyUp('ArrowLeft')
		},
		u = [
			{ action: e.up, delay: 5e3 },
			{ action: n.up, delay: 5e3 },
			{ action: e.down, delay: 400 },
			{ action: e.right, delay: 200 },
			{ action: n.down, delay: 400 },
			{ action: n.right, delay: 1e3 },
			{ action: e.up, delay: 0 },
			{ action: e.right, delay: 500 },
			{ action: n.right, delay: 1e3 },
			{ action: n.up, delay: 2e3 },
			{
				action: () => {
					ut(`${T}/3d`)
				},
				delay: 5e3
			}
		]
	tt(() => u.reduce((l, $) => (setTimeout($.action, l + $.delay), l + $.delay), 0))
	const s = new Array(P ** 2)
		.fill({})
		.map((l, $) => ({ x: ($ % P) * C - C, z: Math.floor($ / P) * C - 2 * C - 60 }))
	return [t, s]
}
class wt extends Z {
	constructor(t) {
		super(), J(this, t, dt, _t, N, {})
	}
}
function yt(c) {
	let t, r
	return (
		(t = new wt({})),
		{
			c() {
				h(t.$$.fragment)
			},
			l(e) {
				_(t.$$.fragment, e)
			},
			m(e, n) {
				d(t, e, n), (r = !0)
			},
			p: S,
			i(e) {
				r || (m(t.$$.fragment, e), (r = !0))
			},
			o(e) {
				p(t.$$.fragment, e), (r = !1)
			},
			d(e) {
				w(t, e)
			}
		}
	)
}
class bt extends Z {
	constructor(t) {
		super(), J(this, t, null, yt, N, {})
	}
}
export { bt as default }
