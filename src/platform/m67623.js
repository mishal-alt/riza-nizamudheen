import * as __m43476 from 'react/jsx-runtime'
import * as __m71645 from 'react'
import * as __m69872 from './m69872.js'
import * as __m93874 from './m93874.js'
import * as __m92914 from './m92914.js'
import ZtCredit from '../Credit.jsx'
;('use strict')
var t = __m43476,
  i = __m71645,
  n = __m69872,
  o = __m93874,
  a = __m92914
function s(e) {
  let t = e % 100,
    i = ['th', 'st', 'nd', 'rd']
  return e + (i[(t - 20) % 10] || i[t] || i[0])
}
let r = '#861019',
  l = '#5C0A10',
  c = '#A51222',
  d = '#c9a060',
  p = '#3d0a10',
  m = '#fdf5ea',
  x = {
    background: 'rgba(253,245,234,0.88)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderRadius: 18,
    border: '1px solid rgba(255,250,244,0.90)',
    boxShadow: '0 8px 40px rgba(61,10,16,.22), inset 0 1px 0 rgba(255,255,255,0.80)',
    overflow: 'hidden',
  },
  g = "'Cormorant Garamond','Noto Serif',Georgia,serif",
  h = "'Cinzel',sans-serif",
  u = "'Noto Serif',Georgia,serif",
  f = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400;1,500&family=Cinzel:wght@400;600&display=swap');
@keyframes cr-fall{
  0%  {transform:translate(0,-80px) rotate(0deg) scale(1);opacity:0}
  8%  {opacity:.9}
  85% {opacity:.75}
  100%{transform:translate(var(--dx,18px),108vh) rotate(var(--dr,300deg)) scale(.65);opacity:0}
}
@keyframes cr-bounce{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(9px)}}
@keyframes cr-pulse2{0%,100%{opacity:.25}50%{opacity:.88}}
@keyframes cr-flip{from{opacity:.2;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}
@keyframes cr-rule{from{transform:scaleX(0)}to{transform:scaleX(1)}}
@keyframes cr-shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
`,
  y = ['#861019', '#5C0A10', '#A51222', '#720D16', '#9e1420']
function v({ fixed: e = !1 }) {
  let n = (0, i.useMemo)(
    () =>
      Array.from({ length: 26 }, (e, t) => ({
        id: t,
        left: ((67 * t + 11) % 95) + 2,
        dx: ((11 * t + 7) % 44) * (t % 2 == 0 ? 1 : -1),
        dr: (t % 2 == 0 ? 180 : -180) + ((23 * t) % 140),
        dur: 6 + (t % 6) * 0.7,
        del: (0.55 * t) % 10,
        w: 9 + (t % 4) * 3,
        col: t % 5,
      })),
    [],
  )
  return (0, t.jsx)('div', {
    'aria-hidden': !0,
    style: {
      position: e ? 'fixed' : 'absolute',
      inset: 0,
      zIndex: 2,
      pointerEvents: 'none',
      overflow: 'hidden',
    },
    children: n.map((e) => {
      let i = Math.round(1.75 * e.w)
      return (0, t.jsx)(
        'div',
        {
          style: {
            position: 'absolute',
            left: `${e.left}%`,
            top: 0,
            width: e.w,
            height: i,
            '--dx': `${e.dx}px`,
            '--dr': `${e.dr}deg`,
            animation: `cr-fall ${e.dur}s ease-in ${e.del}s infinite`,
            opacity: 0,
          },
          children: (0, t.jsxs)('svg', {
            width: e.w,
            height: i,
            viewBox: '0 0 20 35',
            fill: 'none',
            children: [
              (0, t.jsx)('path', {
                d: 'M 10 1 C 17 5, 19 14, 16 23 C 14 29, 10 34, 10 34 C 10 34, 6 29, 4 23 C 1 14, 3 5, 10 1 Z',
                fill: y[e.col],
                opacity: 0.82,
              }),
              (0, t.jsx)('path', {
                d: 'M 10 3 Q 10 16, 10 32',
                stroke: 'rgba(255,255,255,0.25)',
                strokeWidth: 0.6,
                fill: 'none',
              }),
            ],
          }),
        },
        e.id,
      )
    }),
  })
}
function w(e = 0.1) {
  let t = (0, i.useRef)(null),
    [n, o] = (0, i.useState)(!1)
  return (
    (0, i.useEffect)(() => {
      let i = t.current
      if (!i) return
      let n = new IntersectionObserver(
        ([e]) => {
          e.isIntersecting && (o(!0), n.disconnect())
        },
        { threshold: e },
      )
      return (n.observe(i), () => n.disconnect())
    }, [e]),
    { ref: t, inView: n }
  )
}
function j({ children: e, inView: i, delay: n = 0, dir: o = 'up', style: a, className: s }) {
  return (0, t.jsx)('div', {
    className: s,
    style: {
      opacity: +!!i,
      transform: i
        ? 'none'
        : { up: 'translateY(36px)', left: 'translateX(-36px)', right: 'translateX(36px)' }[o],
      transition: i ? `opacity .85s ease ${n}s, transform 1s cubic-bezier(.16,1,.3,1) ${n}s` : 'none',
      ...a,
    },
    children: e,
  })
}
function b({ children: e, inView: i, delay: n = 0, style: o }) {
  return (0, t.jsx)('div', {
    style: { overflow: 'hidden', ...o },
    children: (0, t.jsx)('div', {
      style: {
        transform: i ? 'translateY(0)' : 'translateY(110%)',
        transition: i ? `transform 1.1s cubic-bezier(.16,1,.3,1) ${n}s` : 'none',
      },
      children: e,
    }),
  })
}
function S({ active: e }) {
  return (0, t.jsxs)('svg', {
    viewBox: '0 0 320 400',
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      width: 'min(86vw,320px)',
      height: 'auto',
      pointerEvents: 'none',
    },
    children: [
      (0, t.jsx)('rect', {
        x: 2,
        y: 2,
        width: 316,
        height: 396,
        fill: 'none',
        stroke: d,
        strokeWidth: 1.2,
        strokeDasharray: 1424,
        strokeDashoffset: 1424 * !e,
        style: { transition: e ? 'stroke-dashoffset 2.5s cubic-bezier(.4,0,.2,1) .06s' : 'none' },
      }),
      (0, t.jsx)('rect', {
        x: 14,
        y: 14,
        width: 292,
        height: 372,
        fill: 'none',
        stroke: `${d}45`,
        strokeWidth: 0.6,
        strokeDasharray: 1328,
        strokeDashoffset: 1328 * !e,
        style: { transition: e ? 'stroke-dashoffset 2s cubic-bezier(.4,0,.2,1) .42s' : 'none' },
      }),
      [
        [14, 14],
        [306, 14],
        [306, 386],
        [14, 386],
      ].map(([i, n], o) =>
        (0, t.jsx)(
          'circle',
          {
            cx: i,
            cy: n,
            r: 3.8,
            fill: d,
            opacity: 0.8 * !!e,
            style: { transition: e ? `opacity .4s ease ${(2 + 0.14 * o).toFixed(2)}s` : 'none' },
          },
          o,
        ),
      ),
      (0, t.jsx)('line', {
        x1: 126,
        y1: 196,
        x2: 194,
        y2: 196,
        stroke: `${d}48`,
        strokeWidth: 0.5,
        strokeDasharray: 68,
        strokeDashoffset: 68 * !e,
        style: { transition: e ? 'stroke-dashoffset .9s ease 1.6s' : 'none' },
      }),
    ],
  })
}
function _({ inView: e, style: i }) {
  return (0, t.jsxs)('div', {
    style: { display: 'flex', alignItems: 'center', gap: 14, ...i },
    children: [
      (0, t.jsx)('div', {
        style: {
          flex: 1,
          height: 1,
          background: `linear-gradient(90deg, transparent, ${r}40)`,
          transformOrigin: 'right',
          transform: e ? 'scaleX(1)' : 'scaleX(0)',
          transition: e ? 'transform .9s ease .08s' : 'none',
        },
      }),
      (0, t.jsxs)('svg', {
        width: 22,
        height: 22,
        viewBox: '0 0 22 22',
        style: {
          opacity: +!!e,
          transform: e ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-45deg)',
          transition: e ? 'opacity .5s ease .4s, transform .7s cubic-bezier(.34,1.56,.64,1) .4s' : 'none',
        },
        children: [
          (0, t.jsx)('circle', { cx: 11, cy: 11, r: 4.5, fill: r, opacity: 0.22 }),
          (0, t.jsx)('path', { d: 'M11 4 C13 7,14 9,11 11 C8 9,9 7,11 4Z', fill: r, opacity: 0.65 }),
          (0, t.jsx)('path', { d: 'M18 11 C15 13,13 14,11 11 C13 8,15 9,18 11Z', fill: r, opacity: 0.65 }),
          (0, t.jsx)('path', { d: 'M11 18 C9 15,8 13,11 11 C14 13,13 15,11 18Z', fill: r, opacity: 0.65 }),
          (0, t.jsx)('path', { d: 'M4 11 C7 9,9 8,11 11 C9 14,7 13,4 11Z', fill: r, opacity: 0.65 }),
          (0, t.jsx)('circle', { cx: 11, cy: 11, r: 2, fill: d, opacity: 0.8 }),
        ],
      }),
      (0, t.jsx)('div', {
        style: {
          flex: 1,
          height: 1,
          background: `linear-gradient(90deg, ${r}40, transparent)`,
          transformOrigin: 'left',
          transform: e ? 'scaleX(1)' : 'scaleX(0)',
          transition: e ? 'transform .9s ease .08s' : 'none',
        },
      }),
    ],
  })
}
function k({ targetDate: e, inView: n }) {
  let o = (function (e) {
      let [t, n] = (0, i.useState)({ d: 0, h: 0, m: 0, s: 0 })
      return (
        (0, i.useEffect)(() => {
          let t = () => {
            let t = new Date(e).getTime() - Date.now()
            t <= 0 ||
              n({
                d: Math.floor(t / 864e5),
                h: Math.floor((t % 864e5) / 36e5),
                m: Math.floor((t % 36e5) / 6e4),
                s: Math.floor((t % 6e4) / 1e3),
              })
          }
          t()
          let i = setInterval(t, 1e3)
          return () => clearInterval(i)
        }, [e]),
        t
      )
    })(e),
    [a, s] = (0, i.useState)({ d: 0, h: 0, m: 0, s: 0 }),
    c = (0, i.useRef)('idle')
  ;((0, i.useEffect)(() => {
    if (!n || 'idle' !== c.current) return
    c.current = 'roll'
    let e = { ...o },
      t = Date.now()
    requestAnimationFrame(function i() {
      let n = Math.min((Date.now() - t) / 1200, 1),
        o = 1 - (1 - n) ** 3
      ;(s({ d: Math.round(o * e.d), h: Math.round(o * e.h), m: Math.round(o * e.m), s: Math.round(o * e.s) }),
        n < 1 ? requestAnimationFrame(i) : (c.current = 'live'))
    })
  }, [n]),
    (0, i.useEffect)(() => {
      'live' === c.current && s(o)
    }, [o]))
  let d = [
    ['Days', a.d],
    ['Hrs', a.h],
    ['Min', a.m],
    ['Sec', a.s],
  ]
  return (0, t.jsx)('div', {
    style: { display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' },
    children: d.map(([e, i], o) =>
      (0, t.jsxs)(
        'div',
        {
          style: {
            background: 'rgba(134,16,25,0.10)',
            border: '1px solid rgba(134,16,25,0.22)',
            borderRadius: 14,
            padding: '14px 16px',
            textAlign: 'center',
            minWidth: 68,
            flex: '1 1 68px',
            maxWidth: 90,
            opacity: +!!n,
            transform: n ? 'scale(1) translateY(0)' : 'scale(0.78) translateY(22px)',
            transition: n
              ? `opacity .6s ease ${(0.1 + 0.12 * o).toFixed(2)}s, transform .75s cubic-bezier(.34,1.56,.64,1) ${(0.1 + 0.12 * o).toFixed(2)}s`
              : 'none',
          },
          children: [
            (0, t.jsx)(
              'div',
              {
                style: {
                  fontFamily: g,
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: 38,
                  color: r,
                  lineHeight: 1,
                  fontVariantNumeric: 'tabular-nums',
                  overflow: 'hidden',
                  animation: 'live' === c.current ? 'cr-flip .3s ease' : void 0,
                },
                children: (0, t.jsx)('span', {
                  style: { display: 'block' },
                  children: String(i).padStart(2, '0'),
                }),
              },
              i,
            ),
            (0, t.jsx)('div', {
              style: {
                fontFamily: h,
                fontSize: 7.5,
                letterSpacing: '.18em',
                textTransform: 'uppercase',
                color: l,
                opacity: 0.65,
                marginTop: 5,
              },
              children: e,
            }),
          ],
        },
        e,
      ),
    ),
  })
}
function V({
  wedding: e,
  onDone: n,
  nameFontSize: o = 'clamp(46px,12vw,80px)',
  hijriDate: c,
  coverImage: x = '/images/crimson-scroll-bg.webp',
  dateOverride: u,
  autoAdvance: y = !1,
  tapLabel: v = 'Tap to Open Invitation',
  occasionLabelFont: w,
  occasionLabelLetterSpacing: j = '.58em',
  occasionLabelDir: _,
}) {
  let [k, C] = (0, i.useState)(!1),
    [z, F] = (0, i.useState)(!1),
    [W, $] = (0, i.useState)(!1),
    [N, T] = (0, i.useState)(!1),
    [A, I] = (0, i.useState)(!1),
    [D, H] = (0, i.useState)(!1)
  ;(0, i.useEffect)(() => {
    H(!0)
    let e = [
      setTimeout(() => C(!0), 100),
      setTimeout(() => F(!0), 620),
      setTimeout(() => $(!0), 2100),
      setTimeout(() => T(!0), 2100),
    ]
    return (
      y &&
        e.push(
          setTimeout(() => I(!0), 5600),
          setTimeout(() => {
            ;(document.dispatchEvent(new CustomEvent('app:ready')), n())
          }, 6300),
        ),
      () => e.forEach(clearTimeout)
    )
  }, [n, y])
  let E = (() => {
      if (u) return u
      if (!D) return ''
      let t = new Date(e.event_date),
        i = parseInt(t.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata', day: 'numeric' }), 10),
        n = t.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata', month: 'long', year: 'numeric' })
      return `${s(i)} ${n}`
    })(),
    M = (0, a.getOccasionConfig)(e.custom_config?.occasion_type),
    B = e.custom_config?.ceremony_label?.trim() || M.label,
    L = e.custom_config?.swap_names ? e.groom_name : e.bride_name,
    Z = e.custom_config?.swap_names ? e.bride_name : e.groom_name
  return (0, t.jsxs)('div', {
    onClick: function () {
      ;(document.dispatchEvent(new CustomEvent('app:ready')), I(!0), setTimeout(n, 700))
    },
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      cursor: 'pointer',
      overflow: 'hidden',
      opacity: +!A,
      transition: A ? 'opacity .85s ease' : void 0,
      backgroundColor: m,
    },
    children: [
      (0, t.jsx)('style', { children: f }),
      (0, t.jsx)('img', {
        src: x,
        alt: '',
        fetchPriority: 'high',
        style: {
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'fill',
          display: 'block',
        },
      }),
      (0, t.jsx)('div', {
        style: {
          position: 'absolute',
          inset: 0,
          background: 'rgba(255,252,248,0.08)',
          pointerEvents: 'none',
        },
      }),
      (0, t.jsx)(S, { active: k }),
      (0, t.jsxs)('div', {
        style: {
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 44px',
        },
        children: [
          !e.custom_config?.hide_occasion_label &&
            (0, t.jsx)(b, {
              inView: z,
              delay: 0,
              style: { marginBottom: 14, textAlign: 'center' },
              children: (0, t.jsx)('span', {
                dir: _,
                style: {
                  fontFamily: w || h,
                  fontSize: 8.5,
                  letterSpacing: j,
                  textTransform: 'uppercase',
                  color: l,
                  display: 'inline-block',
                  padding: '5px 18px',
                  border: `1px solid ${r}30`,
                  background: 'rgba(255,252,248,0.55)',
                },
                children: B,
              }),
            }),
          (0, t.jsx)('div', {
            style: {
              width: 52,
              height: 1,
              background: `${d}65`,
              marginBottom: 22,
              opacity: +!!z,
              transition: z ? 'opacity .6s ease .3s' : 'none',
            },
          }),
          (0, t.jsx)(b, {
            inView: z,
            delay: 0.14,
            style: { textAlign: 'center' },
            children: (0, t.jsx)('h1', {
              style: {
                fontFamily: g,
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: o,
                color: p,
                lineHeight: 1.3,
                margin: 0,
              },
              children: L,
            }),
          }),
          Z &&
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(b, {
                  inView: z,
                  delay: 0.5,
                  style: { margin: '12px 0 10px', textAlign: 'center' },
                  children: (0, t.jsxs)('div', {
                    style: { display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'center' },
                    children: [
                      (0, t.jsx)('div', {
                        style: { width: 28, height: 1, background: `${d}70`, maxWidth: 30 },
                      }),
                      (0, t.jsx)('span', {
                        style: {
                          fontFamily: g,
                          fontStyle: 'italic',
                          fontWeight: 300,
                          fontSize: 32,
                          color: d,
                          lineHeight: 1,
                        },
                        children: '&',
                      }),
                      (0, t.jsx)('div', {
                        style: { width: 28, height: 1, background: `${d}70`, maxWidth: 30 },
                      }),
                    ],
                  }),
                }),
                (0, t.jsx)(b, {
                  inView: z,
                  delay: 0.74,
                  style: { textAlign: 'center' },
                  children: (0, t.jsx)('h1', {
                    style: {
                      fontFamily: g,
                      fontStyle: 'italic',
                      fontWeight: 400,
                      fontSize: o,
                      color: p,
                      lineHeight: 1.3,
                      margin: 0,
                    },
                    children: Z,
                  }),
                }),
              ],
            }),
          (0, t.jsx)('div', {
            style: {
              width: 52,
              height: 1,
              background: `${d}65`,
              marginTop: 22,
              marginBottom: 16,
              opacity: +!!W,
              transition: W ? 'opacity .6s ease .1s' : 'none',
            },
          }),
          (0, t.jsxs)(b, {
            inView: W,
            delay: 0.1,
            style: { textAlign: 'center' },
            children: [
              (0, t.jsx)('p', {
                style: {
                  fontFamily: h,
                  fontSize: 9,
                  letterSpacing: '.3em',
                  textTransform: 'uppercase',
                  color: p,
                  margin: 0,
                  opacity: 0.65,
                  fontWeight: 700,
                },
                children: E,
              }),
              c &&
                (0, t.jsx)('p', {
                  style: {
                    fontFamily: h,
                    fontSize: 8,
                    letterSpacing: '.28em',
                    textTransform: 'uppercase',
                    color: p,
                    margin: '6px 0 0',
                    opacity: 0.5,
                  },
                  children: c,
                }),
            ],
          }),
          (0, t.jsx)('p', {
            style: {
              fontFamily: h,
              fontSize: 12,
              letterSpacing: '.38em',
              textTransform: 'uppercase',
              color: r,
              margin: '52px 0 0',
              fontWeight: 700,
              textShadow: '0 1px 12px rgba(134,16,25,0.25)',
              opacity: N && !A ? 1 : 0,
              transition: N ? 'opacity 1s ease' : 'none',
              animation: N && !A ? 'cr-pulse2 2.8s ease-in-out infinite' : 'none',
            },
            children: v,
          }),
        ],
      }),
    ],
  })
}
function C({ wedding: e, photos: y, isGuest: S, ready: V }) {
  let z,
    F,
    W,
    $,
    N,
    T,
    [A, I] = (0, i.useState)(!1)
  ;(0, i.useEffect)(() => I(!0), [])
  let D = (0, i.useRef)(null)
  ;(0, i.useEffect)(() => {
    if (!S || !V) return
    let e = !1,
      t = () => {
        ;((e = !0), i())
      },
      i = () => {
        ;(window.removeEventListener('wheel', t, { capture: !0 }),
          window.removeEventListener('touchmove', t, { capture: !0 }),
          window.removeEventListener('keydown', t, { capture: !0 }))
      }
    ;(window.addEventListener('wheel', t, { capture: !0, passive: !0 }),
      window.addEventListener('touchmove', t, { capture: !0, passive: !0 }),
      window.addEventListener('keydown', t, { capture: !0 }))
    let n = setTimeout(() => {
      if (e) return
      if (window.scrollY > 80) return void i()
      let t = D.current
      t && ((t.nextElementSibling ?? t).scrollIntoView({ behavior: 'smooth', block: 'start' }), i())
    }, 3e3)
    return () => {
      ;(clearTimeout(n), i())
    }
  }, [S, V])
  let H = (0, a.getOccasionConfig)(e.custom_config?.occasion_type),
    E = e.custom_config?.ceremony_label?.trim() || H.label,
    M = e.custom_config?.religious_header,
    B = e.custom_config?.bible_verse,
    L = e.custom_config?.bible_ref,
    Z = A ? void 0 : 'en-US',
    Y = new Date(e.event_date),
    O =
      ((z = Y.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata', weekday: 'long' })),
      (F = parseInt(Y.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata', day: 'numeric' }), 10)),
      (W = Y.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata', month: 'long', year: 'numeric' })),
      A
        ? `${z}, ${s(F)} ${W}`
        : Y.toLocaleDateString('en-US', {
            timeZone: 'Asia/Kolkata',
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })),
    R = Y.toLocaleTimeString(Z, { timeZone: 'Asia/Kolkata', hour: 'numeric', minute: '2-digit', hour12: !0 }),
    K = e.custom_config?.time_subtitle?.trim() || '',
    P = e.custom_config?.welcome_note || H.welcomePresets[0] || '',
    X = e.custom_config?.venue_maps_url,
    U = y.map((e) => e.url),
    q = !!(e.venue_lat && e.venue_lng) || !!e.venue_name,
    G = e.custom_config?.swap_names ? e.groom_name : e.bride_name,
    J = e.custom_config?.swap_names ? e.bride_name : e.groom_name,
    Q = e.custom_config?.swap_names ? e.custom_config?.groom_parents : e.custom_config?.bride_parents,
    ee = e.custom_config?.swap_names ? e.custom_config?.bride_parents : e.custom_config?.groom_parents,
    et = e.custom_config?.swap_names ? 'S/O' : 'D/O',
    ei = e.custom_config?.swap_names ? 'D/O' : 'S/O',
    en = e.custom_config?.event1_label?.trim() || '',
    eo = e.custom_config?.event1_date,
    ea = e.custom_config?.event1_venue || '',
    es = e.custom_config?.event1_address || '',
    er = e.custom_config?.event1_maps_url || '',
    el = !!e.custom_config?.event1_hide_time,
    ec = eo ? new Date(eo) : null,
    ed = ec
      ? (($ = ec.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata', weekday: 'long' })),
        (N = parseInt(ec.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata', day: 'numeric' }), 10)),
        (T = ec.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata', month: 'long', year: 'numeric' })),
        A
          ? `${$}, ${s(N)} ${T}`
          : ec.toLocaleDateString('en-US', {
              timeZone: 'Asia/Kolkata',
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            }))
      : '',
    ep = ec
      ? ec.toLocaleTimeString(Z, { timeZone: 'Asia/Kolkata', hour: 'numeric', minute: '2-digit', hour12: !0 })
      : '',
    em = e.custom_config?.event2_label?.trim() || E,
    ex = e.custom_config?.event2_heading?.trim() || `${em} Ceremony`,
    eg = w(0.08),
    eh = w(0.08),
    eu = w(0.08),
    ef = w(0.08),
    ey = w(0.08),
    ev = w(0.06),
    ew = w(0.08),
    ej = w(0.06),
    eb = {
      fontFamily: h,
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: r,
      display: 'block',
      textAlign: 'center',
      marginBottom: 16,
      whiteSpace: 'nowrap',
    }
  return (0, t.jsxs)('div', {
    children: [
      (0, t.jsx)('style', {
        children: `
        ${f}
        *{box-sizing:border-box}
        .cr-photos{display:flex;gap:14px;overflow-x:auto;padding:4px 0 16px;scroll-snap-type:x mandatory}
        .cr-photos::-webkit-scrollbar{height:3px}
        .cr-photos::-webkit-scrollbar-thumb{background:${r}35;border-radius:4px}
        @media(min-width:480px){.cr-wrap{padding:32px 18px 80px!important}:root{--cr-pad:38px}}
        @media(min-width:640px){.cr-wrap{padding:40px 28px 80px!important}:root{--cr-pad:46px}}
        @media(max-width:479px){:root{--cr-pad:26px}}
        @media(min-width:768px){.cr-hero-inner{margin-top:0!important}}
        .cr-card-hover{transition:transform .25s ease,box-shadow .25s ease}
        .cr-card-hover:hover{transform:translateY(-3px);box-shadow:0 12px 38px rgba(61,10,16,.22),0 2px 8px rgba(61,10,16,.10)}
      `,
      }),
      (0, t.jsxs)('div', {
        ref: D,
        style: {
          position: 'relative',
          width: '100%',
          minHeight: '100svh',
          backgroundColor: m,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
        children: [
          (0, t.jsx)('img', {
            src: '/images/crimson-scroll-bg.webp',
            alt: '',
            loading: 'eager',
            decoding: 'async',
            style: {
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'fill',
              display: 'block',
            },
          }),
          (0, t.jsx)(v, {}),
          (0, t.jsxs)('div', {
            className: 'cr-hero-inner',
            style: {
              position: 'relative',
              zIndex: 3,
              textAlign: 'center',
              padding: 'clamp(80px,20vw,150px) clamp(32px,9vw,50px) clamp(60px,14vw,100px)',
              maxWidth: 420,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 0,
              marginTop: '-12vh',
            },
            children: [
              M
                ? (0, t.jsx)(n.ReligiousHeader, {
                    type: M,
                    verse: B,
                    verseRef: L,
                    accent: l,
                    color: p,
                    marginBottom: 0,
                  })
                : (!e.custom_config?.hide_occasion_label || !S) &&
                  (0, t.jsx)('span', {
                    style: {
                      fontFamily: h,
                      fontSize: 8.5,
                      letterSpacing: '.58em',
                      textTransform: 'uppercase',
                      color: l,
                      display: 'inline-block',
                      padding: '5px 18px',
                      border: `1px solid ${r}30`,
                      background: 'rgba(255,252,248,0.55)',
                    },
                    children: E,
                  }),
              (0, t.jsxs)('p', {
                style: {
                  fontFamily: u,
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: 13,
                  color: p,
                  opacity: 0.55,
                  lineHeight: 1.85,
                  margin: '15px auto 24px',
                  maxWidth: 290,
                },
                children: ['Together with our families we joyfully invite you to celebrate our ', E],
              }),
              (0, t.jsx)('h1', {
                style: {
                  fontFamily: g,
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: 'clamp(28px,9vw,62px)',
                  color: p,
                  lineHeight: 1.1,
                  margin: 0,
                  wordBreak: 'keep-all',
                  overflowWrap: 'normal',
                },
                children: G,
              }),
              Q &&
                (0, t.jsxs)('p', {
                  style: {
                    fontFamily: u,
                    fontStyle: 'italic',
                    fontSize: 'clamp(11px,3.2vw,13px)',
                    color: p,
                    opacity: 0.52,
                    margin: '6px 0 0',
                    lineHeight: 1.6,
                  },
                  children: [et, ' ', Q],
                }),
              J &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsxs)('div', {
                      style: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: 14,
                        justifyContent: 'center',
                        margin: '14px 0 8px',
                        width: '100%',
                      },
                      children: [
                        (0, t.jsx)('div', {
                          style: { flex: 1, height: 1, background: `${d}70`, maxWidth: 30 },
                        }),
                        (0, t.jsx)('span', {
                          style: {
                            fontFamily: g,
                            fontStyle: 'italic',
                            fontWeight: 300,
                            fontSize: 30,
                            color: d,
                            lineHeight: 1,
                          },
                          children: '&',
                        }),
                        (0, t.jsx)('div', {
                          style: { flex: 1, height: 1, background: `${d}70`, maxWidth: 30 },
                        }),
                      ],
                    }),
                    (0, t.jsx)('h1', {
                      style: {
                        fontFamily: g,
                        fontStyle: 'italic',
                        fontWeight: 400,
                        fontSize: 'clamp(28px,9vw,62px)',
                        color: p,
                        lineHeight: 1.1,
                        margin: 0,
                        wordBreak: 'keep-all',
                        overflowWrap: 'normal',
                      },
                      children: J,
                    }),
                    ee &&
                      (0, t.jsxs)('p', {
                        style: {
                          fontFamily: u,
                          fontStyle: 'italic',
                          fontSize: 'clamp(11px,3.2vw,13px)',
                          color: p,
                          opacity: 0.52,
                          margin: '6px 0 0',
                          lineHeight: 1.6,
                        },
                        children: [ei, ' ', ee],
                      }),
                  ],
                }),
              (0, t.jsx)('div', {
                style: { width: 44, height: 1, background: `${d}60`, margin: '32px auto 12px' },
              }),
              (0, t.jsx)('p', {
                style: {
                  fontFamily: h,
                  fontSize: 11,
                  letterSpacing: '.28em',
                  textTransform: 'uppercase',
                  color: p,
                  opacity: 0.6,
                  margin: 0,
                  fontWeight: 700,
                },
                children: O,
              }),
            ],
          }),
          (0, t.jsx)(n.ScrollHint, { color: d, style: { bottom: 58 } }),
        ],
      }),
      (eo || ea) &&
        (0, t.jsxs)('div', {
          style: {
            position: 'relative',
            minHeight: '100svh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            overflow: 'hidden',
            backgroundColor: '#1e0408',
          },
          children: [
            (0, t.jsx)('img', {
              src: '/images/crimson-scroll-bg.webp',
              alt: '',
              'aria-hidden': !0,
              style: {
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
                pointerEvents: 'none',
              },
            }),
            (0, t.jsx)(v, {}),
            (0, t.jsx)('div', {
              style: {
                maxWidth: 620,
                margin: '0 auto',
                padding: 'clamp(80px,18vw,140px) clamp(24px,10vw,100px) clamp(60px,12vw,100px)',
                textAlign: 'center',
                width: '100%',
                position: 'relative',
                zIndex: 3,
              },
              children: (0, t.jsxs)('div', {
                ref: eg.ref,
                children: [
                  (0, t.jsx)(j, {
                    inView: eg.inView,
                    delay: 0,
                    children: (0, t.jsxs)('span', { style: eb, children: [en, ' Ceremony'] }),
                  }),
                  (0, t.jsx)(j, {
                    inView: eg.inView,
                    delay: 0.1,
                    children: (0, t.jsx)(_, {
                      inView: eg.inView,
                      style: { maxWidth: 260, margin: '4px auto 32px' },
                    }),
                  }),
                  (0, t.jsx)(b, {
                    inView: eg.inView,
                    delay: 0.22,
                    children: (0, t.jsx)('p', {
                      style: {
                        fontFamily: g,
                        fontStyle: 'italic',
                        fontWeight: 500,
                        fontSize: 'clamp(22px,4.5vw,41px)',
                        lineHeight: 1.4,
                        margin: '20px 0 6px',
                        color: 'transparent',
                        backgroundImage: `linear-gradient(90deg, ${r} 0%, ${c} 28%, ${d} 50%, ${c} 72%, ${r} 100%)`,
                        backgroundSize: '200% auto',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        animation: eg.inView ? 'cr-shimmer 4.5s linear 0.8s infinite' : 'none',
                      },
                      children: ed,
                    }),
                  }),
                  !el &&
                    (0, t.jsx)(b, {
                      inView: eg.inView,
                      delay: 0.36,
                      children: (0, t.jsx)('p', {
                        style: {
                          fontFamily: g,
                          fontStyle: 'italic',
                          fontWeight: 300,
                          fontSize: 'clamp(28px,8vw,64px)',
                          color: r,
                          margin: '0 0 22px',
                          lineHeight: 1,
                          whiteSpace: 'nowrap',
                        },
                        children: ep,
                      }),
                    }),
                  ea &&
                    (0, t.jsxs)(j, {
                      inView: eg.inView,
                      delay: 0.5,
                      children: [
                        (0, t.jsx)('p', {
                          style: {
                            fontFamily: g,
                            fontStyle: 'italic',
                            fontWeight: 400,
                            fontSize: 'clamp(21px,4.5vw,33px)',
                            color: p,
                            margin: el ? '18px 0 6px' : '0 0 6px',
                            lineHeight: 1.4,
                          },
                          children: ea,
                        }),
                        es &&
                          (0, t.jsx)('p', {
                            style: {
                              fontFamily: h,
                              fontSize: 'clamp(11px,2.6vw,13px)',
                              letterSpacing: '.14em',
                              textTransform: 'uppercase',
                              color: l,
                              opacity: 0.8,
                              fontWeight: 600,
                              margin: 0,
                              lineHeight: 1.7,
                            },
                            children: es,
                          }),
                        er &&
                          (0, t.jsx)('a', {
                            href: er,
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            style: {
                              display: 'inline-block',
                              marginTop: 14,
                              fontFamily: h,
                              fontSize: 11,
                              letterSpacing: '.2em',
                              textTransform: 'uppercase',
                              color: d,
                              opacity: 0.9,
                              fontWeight: 700,
                              textDecoration: 'none',
                              borderBottom: `1px solid ${d}60`,
                              paddingBottom: 2,
                            },
                            children: 'View on Maps',
                          }),
                      ],
                    }),
                ],
              }),
            }),
            (0, t.jsx)(n.ScrollHint, { color: d, style: { bottom: 58 } }),
            (0, t.jsx)('div', {
              'aria-hidden': !0,
              style: {
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 80,
                background: 'linear-gradient(to bottom, transparent, #1e0408)',
                pointerEvents: 'none',
              },
            }),
          ],
        }),
      (0, t.jsxs)('div', {
        style: {
          position: 'relative',
          minHeight: '100svh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          overflow: 'hidden',
          backgroundColor: '#1e0408',
        },
        children: [
          (0, t.jsx)('img', {
            src: '/images/crimson-scroll-bg.webp',
            alt: '',
            'aria-hidden': !0,
            style: {
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
              pointerEvents: 'none',
            },
          }),
          (0, t.jsx)(v, {}),
          (0, t.jsx)('div', {
            style: {
              maxWidth: 620,
              margin: '0 auto',
              padding: 'clamp(80px,18vw,140px) clamp(24px,10vw,100px) clamp(60px,12vw,100px)',
              textAlign: 'center',
              width: '100%',
              position: 'relative',
              zIndex: 3,
            },
            children: (0, t.jsxs)('div', {
              ref: eh.ref,
              children: [
                (0, t.jsx)(j, {
                  inView: eh.inView,
                  delay: 0,
                  children: (0, t.jsx)('span', { style: eb, children: ex }),
                }),
                (0, t.jsx)(j, {
                  inView: eh.inView,
                  delay: 0.1,
                  children: (0, t.jsx)(_, {
                    inView: eh.inView,
                    style: { maxWidth: 260, margin: '4px auto 32px' },
                  }),
                }),
                (0, t.jsx)(b, {
                  inView: eh.inView,
                  delay: 0.22,
                  children: (0, t.jsx)('p', {
                    style: {
                      fontFamily: g,
                      fontStyle: 'italic',
                      fontWeight: 500,
                      fontSize: 'clamp(22px,4.5vw,41px)',
                      lineHeight: 1.4,
                      margin: '20px 0 6px',
                      color: 'transparent',
                      backgroundImage: `linear-gradient(90deg, ${r} 0%, ${c} 28%, ${d} 50%, ${c} 72%, ${r} 100%)`,
                      backgroundSize: '200% auto',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      animation: eh.inView ? 'cr-shimmer 4.5s linear 0.8s infinite' : 'none',
                    },
                    children: O,
                  }),
                }),
                (0, t.jsx)(b, {
                  inView: eh.inView,
                  delay: 0.36,
                  children: (0, t.jsx)('p', {
                    style: {
                      fontFamily: g,
                      fontStyle: 'italic',
                      fontWeight: 300,
                      fontSize: 'clamp(28px,8vw,64px)',
                      color: r,
                      margin: '0 0 22px',
                      lineHeight: 1,
                      whiteSpace: 'nowrap',
                    },
                    children: K || R,
                  }),
                }),
                e.venue_name &&
                  (0, t.jsxs)(j, {
                    inView: eh.inView,
                    delay: 0.5,
                    children: [
                      (0, t.jsx)('p', {
                        style: {
                          fontFamily: g,
                          fontStyle: 'italic',
                          fontWeight: 400,
                          fontSize: 'clamp(21px,4.5vw,33px)',
                          color: p,
                          margin: '0 0 6px',
                          lineHeight: 1.4,
                        },
                        children: e.venue_name,
                      }),
                      e.venue_address &&
                        (0, t.jsx)('p', {
                          style: {
                            fontFamily: h,
                            fontSize: 'clamp(11px,2.6vw,13px)',
                            letterSpacing: '.14em',
                            textTransform: 'uppercase',
                            color: l,
                            opacity: 0.8,
                            fontWeight: 600,
                            margin: 0,
                            lineHeight: 1.7,
                          },
                          children: e.venue_address,
                        }),
                    ],
                  }),
              ],
            }),
          }),
          (0, t.jsx)(n.ScrollHint, { color: `${r}99` }),
          (0, t.jsx)('div', {
            'aria-hidden': !0,
            style: {
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 80,
              background: 'linear-gradient(to bottom, transparent, #1e0408)',
              pointerEvents: 'none',
            },
          }),
        ],
      }),
      (0, t.jsxs)('div', {
        style: { position: 'relative', backgroundColor: '#1e0408' },
        children: [
          (0, t.jsxs)('div', {
            'aria-hidden': !0,
            style: {
              position: 'sticky',
              top: 0,
              height: 0,
              overflow: 'visible',
              zIndex: 0,
              pointerEvents: 'none',
            },
            children: [
              (0, t.jsx)('div', {
                style: {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '100svh',
                  backgroundImage: "url('/images/crimson-bg.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                },
              }),
              (0, t.jsx)('div', {
                style: {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '100svh',
                  background: 'rgba(61,10,16,.30)',
                },
              }),
            ],
          }),
          (0, t.jsxs)('div', {
            className: 'cr-wrap',
            style: {
              maxWidth: 700,
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              position: 'relative',
              zIndex: 1,
              padding: '24px 14px 80px',
            },
            children: [
              (0, t.jsx)('div', {
                ref: eu.ref,
                children: (0, t.jsxs)(j, {
                  inView: eu.inView,
                  style: { ...x, padding: 'var(--cr-pad,32px)', textAlign: 'center' },
                  className: 'cr-card-hover',
                  children: [
                    (0, t.jsx)(_, { inView: eu.inView, style: { maxWidth: 240, margin: '0 auto 22px' } }),
                    (0, t.jsx)('span', { style: eb, children: 'Counting Down' }),
                    (0, t.jsx)('div', {
                      style: { marginTop: 28 },
                      children: (0, t.jsx)(k, { targetDate: e.event_date, inView: eu.inView }),
                    }),
                  ],
                }),
              }),
              P &&
                (0, t.jsx)('div', {
                  ref: ef.ref,
                  children: (0, t.jsxs)(j, {
                    inView: ef.inView,
                    style: { ...x, padding: 'var(--cr-pad,32px)', textAlign: 'center', position: 'relative' },
                    className: 'cr-card-hover',
                    children: [
                      (0, t.jsx)('div', {
                        'aria-hidden': !0,
                        style: {
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%,-50%)',
                          opacity: 0.05 * !!ef.inView,
                          transition: ef.inView ? 'opacity 1.4s ease .4s' : 'none',
                          pointerEvents: 'none',
                        },
                        children: (0, t.jsxs)('svg', {
                          width: 150,
                          height: 150,
                          viewBox: '0 0 22 22',
                          children: [
                            (0, t.jsx)('circle', { cx: 11, cy: 11, r: 4.5, fill: r, opacity: 0.5 }),
                            (0, t.jsx)('path', { d: 'M11 4 C13 7,14 9,11 11 C8 9,9 7,11 4Z', fill: r }),
                            (0, t.jsx)('path', { d: 'M18 11 C15 13,13 14,11 11 C13 8,15 9,18 11Z', fill: r }),
                            (0, t.jsx)('path', { d: 'M11 18 C9 15,8 13,11 11 C14 13,13 15,11 18Z', fill: r }),
                            (0, t.jsx)('path', { d: 'M4 11 C7 9,9 8,11 11 C9 14,7 13,4 11Z', fill: r }),
                            (0, t.jsx)('circle', { cx: 11, cy: 11, r: 2, fill: d }),
                          ],
                        }),
                      }),
                      (0, t.jsx)(_, { inView: ef.inView, style: { maxWidth: 240, margin: '0 auto 22px' } }),
                      (0, t.jsx)('span', { style: eb, children: 'A Note for You' }),
                      (0, t.jsx)('p', {
                        style: {
                          fontFamily: g,
                          fontSize: 100,
                          lineHeight: 0.5,
                          color: r,
                          opacity: 0.12 * !!ef.inView,
                          transform: ef.inView ? 'none' : 'scale(0.3) rotate(-18deg)',
                          transition: ef.inView
                            ? 'opacity .7s ease .1s, transform .8s cubic-bezier(.34,1.56,.64,1) .1s'
                            : 'none',
                          margin: '0 0 -18px',
                          userSelect: 'none',
                          position: 'relative',
                          zIndex: 1,
                        },
                        children: '“',
                      }),
                      (0, t.jsx)(j, {
                        inView: ef.inView,
                        delay: 0.3,
                        children: (0, t.jsx)('p', {
                          style: {
                            fontFamily: u,
                            fontStyle: 'italic',
                            fontWeight: 400,
                            fontSize: 'clamp(15px,4vw,18px)',
                            color: p,
                            lineHeight: 2.1,
                            margin: '0 auto',
                            maxWidth: 520,
                            position: 'relative',
                            zIndex: 1,
                          },
                          children: P,
                        }),
                      }),
                    ],
                  }),
                }),
              e.story &&
                e.custom_config?.show_story !== !1 &&
                (0, t.jsx)('div', {
                  ref: ey.ref,
                  children: (0, t.jsxs)(j, {
                    inView: ey.inView,
                    style: { ...x, padding: 'var(--cr-pad,32px)' },
                    className: 'cr-card-hover',
                    children: [
                      (0, t.jsx)(_, { inView: ey.inView, style: { maxWidth: 240, margin: '0 auto 22px' } }),
                      (0, t.jsx)(j, {
                        inView: ey.inView,
                        delay: 0.05,
                        children: (0, t.jsx)('span', { style: eb, children: 'Our Story' }),
                      }),
                      (0, t.jsx)('p', {
                        style: {
                          fontFamily: g,
                          fontStyle: 'italic',
                          fontWeight: 300,
                          fontSize: 100,
                          lineHeight: 0.6,
                          color: r,
                          opacity: 0.12 * !!ey.inView,
                          transform: ey.inView ? 'none' : 'scale(0.4) rotate(-14deg)',
                          transition: ey.inView
                            ? 'opacity .8s ease .1s, transform .9s cubic-bezier(.34,1.56,.64,1) .1s'
                            : 'none',
                          margin: '0 0 -14px -4px',
                          userSelect: 'none',
                          display: 'inline-block',
                        },
                        children: '“',
                      }),
                      (0, t.jsx)(j, {
                        inView: ey.inView,
                        delay: 0.22,
                        children: (0, t.jsx)('p', {
                          style: {
                            fontFamily: u,
                            fontStyle: 'italic',
                            fontWeight: 400,
                            fontSize: 17.5,
                            lineHeight: 2.05,
                            color: p,
                            margin: 0,
                          },
                          children: e.story,
                        }),
                      }),
                    ],
                  }),
                }),
              U.length > 0 &&
                e.custom_config?.show_album !== !1 &&
                (0, t.jsx)('div', {
                  ref: ev.ref,
                  children: (0, t.jsxs)(j, {
                    inView: ev.inView,
                    style: { ...x, paddingTop: 28, paddingBottom: 36 },
                    className: 'cr-card-hover',
                    children: [
                      (0, t.jsx)(j, {
                        inView: ev.inView,
                        delay: 0.05,
                        style: { paddingLeft: 28, marginBottom: 20 },
                        children: (0, t.jsx)('span', { style: eb, children: 'Moments' }),
                      }),
                      (0, t.jsx)('div', {
                        className: 'cr-photos',
                        children: U.map((e, i) =>
                          (0, t.jsx)(
                            'div',
                            {
                              style: {
                                flexShrink: 0,
                                width: 'clamp(120px,32vw,175px)',
                                aspectRatio: '3/4',
                                background: '#fff8f5',
                                padding: '7px 7px 34px',
                                boxShadow: '0 6px 28px rgba(86,10,16,.16)',
                                transform: `rotate(${i % 2 == 0 ? 1.5 : -1.3}deg)`,
                                scrollSnapAlign: 'start',
                                opacity: +!!ev.inView,
                                transition: `opacity .6s ease ${(0.08 + 0.09 * i).toFixed(2)}s`,
                              },
                              children: (0, t.jsx)('img', {
                                src: e,
                                alt: `Memory ${i + 1}`,
                                style: {
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover',
                                  display: 'block',
                                },
                              }),
                            },
                            i,
                          ),
                        ),
                      }),
                    ],
                  }),
                }),
              q &&
                (0, t.jsx)('div', {
                  ref: ew.ref,
                  children: (0, t.jsxs)(j, {
                    inView: ew.inView,
                    style: { ...x, padding: 'var(--cr-pad,32px)' },
                    className: 'cr-card-hover',
                    children: [
                      (0, t.jsx)(_, { inView: ew.inView, style: { maxWidth: 240, margin: '0 auto 22px' } }),
                      (0, t.jsx)('span', { style: eb, children: 'Find Us' }),
                      e.venue_name &&
                        (0, t.jsxs)(j, {
                          inView: ew.inView,
                          delay: 0.12,
                          style: { textAlign: 'center', marginBottom: 20 },
                          children: [
                            (0, t.jsx)('p', {
                              style: {
                                fontFamily: g,
                                fontStyle: 'italic',
                                fontWeight: 400,
                                fontSize: 'clamp(18px,5vw,24px)',
                                color: p,
                                margin: '0 0 6px',
                                lineHeight: 1.3,
                              },
                              children: e.venue_name,
                            }),
                            e.venue_address &&
                              (0, t.jsx)('p', {
                                style: {
                                  fontFamily: h,
                                  fontSize: 11,
                                  letterSpacing: '.18em',
                                  textTransform: 'uppercase',
                                  color: l,
                                  opacity: 0.55,
                                  margin: 0,
                                },
                                children: e.venue_address,
                              }),
                          ],
                        }),
                      (0, t.jsx)(j, {
                        inView: ew.inView,
                        delay: 0.26,
                        children: (0, t.jsx)(n.MapBlock, {
                          venueName: e.venue_name,
                          venueAddress: e.venue_address,
                          accent: c,
                          venueLat: e.venue_lat,
                          venueLng: e.venue_lng,
                          mapsDirectUrl: X ?? null,
                        }),
                      }),
                    ],
                  }),
                }),
              S &&
                e.custom_config?.show_rsvp !== !1 &&
                (0, t.jsx)('div', {
                  ref: ej.ref,
                  children: (0, t.jsxs)(j, {
                    inView: ej.inView,
                    style: { ...x, padding: 'var(--cr-pad,32px)' },
                    className: 'cr-card-hover',
                    children: [
                      (0, t.jsx)(_, { inView: ej.inView, style: { maxWidth: 240, margin: '0 auto 22px' } }),
                      (0, t.jsx)('span', { style: eb, children: 'RSVP' }),
                      (0, t.jsx)(o.default, { weddingId: e.id, bare: !0 }),
                    ],
                  }),
                }),
              S && (0, t.jsx)(n.ScrollIndicatorMarker, {}),
              e.custom_config?.show_love_from !== !1 &&
                e.custom_config?.with_love_from &&
                (0, t.jsxs)('div', {
                  style: { ...x, padding: '28px 24px', textAlign: 'center' },
                  children: [
                    (0, t.jsx)('p', {
                      style: {
                        fontFamily: h,
                        fontSize: 10,
                        textTransform: 'uppercase',
                        letterSpacing: '.2em',
                        color: 'rgba(61,10,16,0.58)',
                        opacity: 0.55,
                        marginBottom: 8,
                      },
                      children: e.custom_config.love_from_label?.trim() || 'Best wishes',
                    }),
                    (0, t.jsx)('p', {
                      style: {
                        fontFamily: u,
                        fontSize: 15,
                        fontStyle: 'italic',
                        color: p,
                        lineHeight: 1.6,
                        margin: 0,
                      },
                      children: e.custom_config.with_love_from,
                    }),
                  ],
                }),
              e.custom_config?.show_promo !== !1 &&
                (0, t.jsx)(j, {
                  inView: !0,
                  style: { ...x, padding: '22px 28px', textAlign: 'center' },
                  className: 'cr-card-hover',
                  children: (0, t.jsxs)('div', {
                    style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 },
                    children: [
                      null,
                      (0, t.jsx)('a', {
                        href: `/?utm_source=invitation&utm_medium=promo_strip&utm_campaign=${encodeURIComponent(e.slug ?? e.id)}`,
                        style: {
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 8,
                          padding: '10px 28px',
                          borderRadius: 100,
                          background: `linear-gradient(135deg, ${l}, ${c})`,
                          color: '#fff',
                          fontFamily: h,
                          fontSize: 9,
                          fontWeight: 600,
                          letterSpacing: '.10em',
                          textTransform: 'uppercase',
                          textDecoration: 'none',
                          boxShadow: `0 4px 20px ${r}55`,
                        },
                        children: '✦ Create Yours',
                      }),
                    ],
                  }),
                }),
              (0, t.jsxs)('div', {
                style: { textAlign: 'center', padding: '28px 20px' },
                children: [
                  (0, t.jsx)(_, { inView: !0, style: { maxWidth: 220, margin: '0 auto 22px' } }),
                  (0, t.jsxs)('p', {
                    style: {
                      fontFamily: g,
                      fontStyle: 'italic',
                      fontWeight: 400,
                      fontSize: 23,
                      color: m,
                      margin: '0 0 10px',
                      textShadow: '0 2px 40px rgba(0,0,0,.92),0 1px 12px rgba(0,0,0,.75)',
                    },
                    children: [G, J ? ` & ${J}` : ''],
                  }),
                  (0, t.jsxs)('p', {
                    style: {
                      fontFamily: h,
                      fontSize: 8,
                      letterSpacing: '.16em',
                      textTransform: 'uppercase',
                      color: m,
                      opacity: 0.4,
                      margin: 0,
                    },
                    children: [(0, t.jsx)(ZtCredit, {})],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      S && (0, t.jsx)(n.ScrollIndicator, { color: p, bottom: 120 }),
    ],
  })
}
export const CrimsonCover = V
export default function ({ wedding: e, photos: n = [], children: o, isGuest: a = !0 }) {
  let [s, r] = (0, i.useState)(!a),
    [l, c] = (0, i.useState)(!a)
  return (0, t.jsxs)(t.Fragment, {
    children: [
      a &&
        !s &&
        (0, t.jsx)(V, {
          wedding: e,
          onDone: function () {
            ;(document.dispatchEvent(new CustomEvent('app:ready')),
              r(!0),
              requestAnimationFrame(() => requestAnimationFrame(() => c(!0))))
          },
          autoAdvance: !!e.custom_config?.auto_open,
        }),
      s &&
        (0, t.jsx)('div', {
          style: { opacity: +!!l, transition: 'opacity .7s ease' },
          children: (0, t.jsx)(C, { wedding: e, photos: n, isGuest: a, ready: s }),
        }),
    ],
  })
}
