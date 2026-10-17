import * as __m43476 from 'react/jsx-runtime'
import * as __m71645 from 'react'
import * as __m67623 from './m67623.js'
import * as __m69872 from './m69872.js'
import * as __m59255 from './m59255.js'
import ZtCredit from '../Credit.jsx'
;('use strict')
var i = __m43476,
  t = __m71645,
  n = __m67623,
  a = __m69872,
  r = __m59255
let o = '#861019',
  l = '#5C0A10',
  s = '#A51222',
  c = '#c9a060',
  d = '#3d0a10',
  p = '#fdf5ea',
  x = {
    background: 'rgba(253,245,234,0.88)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderRadius: 18,
    border: '1px solid rgba(255,250,244,0.90)',
    boxShadow: '0 8px 40px rgba(61,10,16,.22), inset 0 1px 0 rgba(255,255,255,0.80)',
    overflow: 'hidden',
  },
  h = "'Cormorant Garamond','Noto Serif',Georgia,serif",
  m = "'Cinzel',sans-serif",
  g = "'Noto Serif',Georgia,serif",
  f = "'Amiri','Arial',serif",
  y = "'Lora','Georgia',serif",
  u = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400;1,500&family=Cinzel:wght@400;600&family=Amiri:ital,wght@0,400;0,700;1,400&family=Lora:ital,wght@0,400;0,500;1,400;1,500&display=swap');
@keyframes cr-fall{
  0%  {transform:translate(0,-80px) rotate(0deg) scale(1);opacity:0}
  8%  {opacity:.9}
  85% {opacity:.75}
  100%{transform:translate(var(--dx,18px),108vh) rotate(var(--dr,300deg)) scale(.65);opacity:0}
}
@keyframes cr-pulse2{0%,100%{opacity:.25}50%{opacity:.88}}
@keyframes cr-flip{from{opacity:.2;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}
@keyframes cr-shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
`,
  j = {
    id: 'a7c2e1d4-b6f8-4e23-9a1c-3d5f7b8e0c12',
    user_id: '',
    slug: 'riza-nizamudheen',
    template_id: 'crimson',
    bride_name: 'Fathimath Riza P',
    groom_name: 'Nizamudheen KP',
    event_date: '2026-08-02T11:00:00+05:30',
    venue_name: 'Hena Hut',
    venue_address: 'Kavu Haji Road, Kottappuram, Nileshwar',
    venue_lat: null,
    venue_lng: null,
    story: null,
    hero_image_url: null,
    status: 'published',
    published_at: '2026-05-25T00:00:00Z',
    visit_count: 0,
    created_at: '2026-05-25T00:00:00Z',
    updated_at: '2026-05-25T00:00:00Z',
    custom_config: { occasion_type: 'wedding', ceremony_label: 'Wedding Invitation', swap_names: !1 },
  },
  w = '18 Safar 1448 AH',
  v = ['#861019', '#5C0A10', '#A51222', '#720D16', '#9e1420']
function b() {
  let e = (0, t.useMemo)(
    () =>
      Array.from({ length: 26 }, (e, i) => ({
        id: i,
        left: ((67 * i + 11) % 95) + 2,
        dx: ((11 * i + 7) % 44) * (i % 2 == 0 ? 1 : -1),
        dr: (i % 2 == 0 ? 180 : -180) + ((23 * i) % 140),
        dur: 6 + (i % 6) * 0.7,
        del: (0.55 * i) % 10,
        w: 9 + (i % 4) * 3,
        col: i % 5,
      })),
    [],
  )
  return (0, i.jsx)('div', {
    'aria-hidden': !0,
    style: { position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none', overflow: 'hidden' },
    children: e.map((e) => {
      let t = Math.round(1.75 * e.w)
      return (0, i.jsx)(
        'div',
        {
          style: {
            position: 'absolute',
            left: `${e.left}%`,
            top: 0,
            width: e.w,
            height: t,
            '--dx': `${e.dx}px`,
            '--dr': `${e.dr}deg`,
            animation: `cr-fall ${e.dur}s ease-in ${e.del}s infinite`,
            opacity: 0,
          },
          children: (0, i.jsxs)('svg', {
            width: e.w,
            height: t,
            viewBox: '0 0 20 35',
            fill: 'none',
            children: [
              (0, i.jsx)('path', {
                d: 'M 10 1 C 17 5, 19 14, 16 23 C 14 29, 10 34, 10 34 C 10 34, 6 29, 4 23 C 1 14, 3 5, 10 1 Z',
                fill: v[e.col],
                opacity: 0.82,
              }),
              (0, i.jsx)('path', {
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
function S(e = 0.1) {
  let i = (0, t.useRef)(null),
    [n, a] = (0, t.useState)(!1)
  return (
    (0, t.useEffect)(() => {
      let t = i.current
      if (!t) return
      let n = new IntersectionObserver(
        ([e]) => {
          e.isIntersecting && (a(!0), n.disconnect())
        },
        { threshold: e },
      )
      return (n.observe(t), () => n.disconnect())
    }, [e]),
    { ref: i, inView: n }
  )
}
function z({ children: e, inView: t, delay: n = 0, style: a, className: r }) {
  return (0, i.jsx)('div', {
    className: r,
    style: {
      opacity: +!!t,
      transform: t ? 'none' : 'translateY(36px)',
      transition: t ? `opacity .85s ease ${n}s, transform 1s cubic-bezier(.16,1,.3,1) ${n}s` : 'none',
      ...a,
    },
    children: e,
  })
}
function k({ children: e, inView: t, delay: n = 0, style: a }) {
  return (0, i.jsx)('div', {
    style: { overflow: 'hidden', ...a },
    children: (0, i.jsx)('div', {
      style: {
        transform: t ? 'translateY(0)' : 'translateY(110%)',
        transition: t ? `transform 1.1s cubic-bezier(.16,1,.3,1) ${n}s` : 'none',
      },
      children: e,
    }),
  })
}
function V({ inView: e, style: t }) {
  return (0, i.jsxs)('div', {
    style: { display: 'flex', alignItems: 'center', gap: 14, ...t },
    children: [
      (0, i.jsx)('div', {
        style: {
          flex: 1,
          height: 1,
          background: `linear-gradient(90deg, transparent, ${o}40)`,
          transformOrigin: 'right',
          transform: e ? 'scaleX(1)' : 'scaleX(0)',
          transition: e ? 'transform .9s ease .08s' : 'none',
        },
      }),
      (0, i.jsxs)('svg', {
        width: 22,
        height: 22,
        viewBox: '0 0 22 22',
        style: {
          opacity: +!!e,
          transform: e ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-45deg)',
          transition: e ? 'opacity .5s ease .4s, transform .7s cubic-bezier(.34,1.56,.64,1) .4s' : 'none',
        },
        children: [
          (0, i.jsx)('circle', { cx: 11, cy: 11, r: 4.5, fill: o, opacity: 0.22 }),
          (0, i.jsx)('path', { d: 'M11 4 C13 7,14 9,11 11 C8 9,9 7,11 4Z', fill: o, opacity: 0.65 }),
          (0, i.jsx)('path', { d: 'M18 11 C15 13,13 14,11 11 C13 8,15 9,18 11Z', fill: o, opacity: 0.65 }),
          (0, i.jsx)('path', { d: 'M11 18 C9 15,8 13,11 11 C14 13,13 15,11 18Z', fill: o, opacity: 0.65 }),
          (0, i.jsx)('path', { d: 'M4 11 C7 9,9 8,11 11 C9 14,7 13,4 11Z', fill: o, opacity: 0.65 }),
          (0, i.jsx)('circle', { cx: 11, cy: 11, r: 2, fill: c, opacity: 0.8 }),
        ],
      }),
      (0, i.jsx)('div', {
        style: {
          flex: 1,
          height: 1,
          background: `linear-gradient(90deg, ${o}40, transparent)`,
          transformOrigin: 'left',
          transform: e ? 'scaleX(1)' : 'scaleX(0)',
          transition: e ? 'transform .9s ease .08s' : 'none',
        },
      }),
    ],
  })
}
function W({ name: e, address: t, url: n }) {
  return (0, i.jsxs)('a', {
    href: n,
    target: '_blank',
    rel: 'noopener noreferrer',
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      background: '#fff8f2',
      border: '1px solid rgba(134,16,25,0.14)',
      borderRadius: 12,
      padding: '11px 14px 11px 14px',
      textDecoration: 'none',
      maxWidth: 256,
      width: '100%',
      boxSizing: 'border-box',
      boxShadow: '0 4px 20px rgba(0,0,0,0.28)',
    },
    children: [
      (0, i.jsxs)('svg', {
        width: '14',
        height: '18',
        viewBox: '0 0 14 18',
        fill: 'none',
        style: { flexShrink: 0 },
        children: [
          (0, i.jsx)('path', {
            d: 'M7 0C3.69 0 1 2.69 1 6c0 4.5 6 12 6 12s6-7.5 6-12C13 2.69 10.31 0 7 0z',
            fill: o,
            opacity: 0.8,
          }),
          (0, i.jsx)('circle', { cx: '7', cy: '6', r: '2.2', fill: 'white' }),
        ],
      }),
      (0, i.jsxs)('div', {
        style: { flex: 1, textAlign: 'left', minWidth: 0 },
        children: [
          (0, i.jsx)('div', {
            style: {
              fontFamily: y,
              fontStyle: 'italic',
              fontSize: 13,
              fontWeight: 500,
              color: d,
              lineHeight: 1.25,
              marginBottom: 3,
            },
            children: e,
          }),
          (0, i.jsx)('div', {
            style: {
              fontFamily: m,
              fontSize: 8.5,
              letterSpacing: '.11em',
              textTransform: 'uppercase',
              color: l,
              opacity: 0.75,
              lineHeight: 1.4,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            },
            children: t,
          }),
        ],
      }),
      (0, i.jsx)('div', {
        style: { flexShrink: 0, paddingLeft: 12, borderLeft: '1px solid rgba(134,16,25,0.14)' },
        children: (0, i.jsxs)('div', {
          style: {
            background: o,
            borderRadius: 8,
            padding: '6px 10px',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
          },
          children: [
            (0, i.jsx)('span', {
              style: {
                fontFamily: m,
                fontSize: 8,
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: p,
                fontWeight: 700,
              },
              children: 'Map',
            }),
            (0, i.jsx)('svg', {
              width: '9',
              height: '9',
              viewBox: '0 0 9 9',
              fill: 'none',
              children: (0, i.jsx)('path', {
                d: 'M1.5 4.5h6M4.5 2 7 4.5 4.5 7',
                stroke: p,
                strokeWidth: '1.2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
            }),
          ],
        }),
      }),
    ],
  })
}
function F({ targetDate: e, inView: n }) {
  let a = (function (e) {
      let [i, n] = (0, t.useState)({ d: 0, h: 0, m: 0, s: 0 })
      return (
        (0, t.useEffect)(() => {
          let i = () => {
            let i = new Date(e).getTime() - Date.now()
            i <= 0 ||
              n({
                d: Math.floor(i / 864e5),
                h: Math.floor((i % 864e5) / 36e5),
                m: Math.floor((i % 36e5) / 6e4),
                s: Math.floor((i % 6e4) / 1e3),
              })
          }
          i()
          let t = setInterval(i, 1e3)
          return () => clearInterval(t)
        }, [e]),
        i
      )
    })(e),
    [r, s] = (0, t.useState)({ d: 0, h: 0, m: 0, s: 0 }),
    c = (0, t.useRef)('idle')
  ;((0, t.useEffect)(() => {
    if (!n || 'idle' !== c.current) return
    c.current = 'roll'
    let e = { ...a },
      i = Date.now()
    requestAnimationFrame(function t() {
      let n = Math.min((Date.now() - i) / 1200, 1),
        a = 1 - (1 - n) ** 3
      ;(s({ d: Math.round(a * e.d), h: Math.round(a * e.h), m: Math.round(a * e.m), s: Math.round(a * e.s) }),
        n < 1 ? requestAnimationFrame(t) : (c.current = 'live'))
    })
  }, [n]),
    (0, t.useEffect)(() => {
      'live' === c.current && s(a)
    }, [a]))
  let d = [
    ['Days', r.d],
    ['Hrs', r.h],
    ['Min', r.m],
    ['Sec', r.s],
  ]
  return (0, i.jsx)('div', {
    style: { display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' },
    children: d.map(([e, t], a) =>
      (0, i.jsxs)(
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
              ? `opacity .6s ease ${(0.1 + 0.12 * a).toFixed(2)}s, transform .75s cubic-bezier(.34,1.56,.64,1) ${(0.1 + 0.12 * a).toFixed(2)}s`
              : 'none',
          },
          children: [
            (0, i.jsx)('div', {
              style: {
                fontFamily: h,
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 38,
                color: o,
                lineHeight: 1,
                fontVariantNumeric: 'tabular-nums',
                overflow: 'hidden',
                animation: 'live' === c.current ? 'cr-flip .3s ease' : void 0,
              },
              children: (0, i.jsx)('span', {
                style: { display: 'block' },
                children: String(t).padStart(2, '0'),
              }),
            }),
            (0, i.jsx)('div', {
              style: {
                fontFamily: m,
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
function C() {
  let [e, n] = (0, t.useState)(!1)
  return (
    (0, t.useEffect)(() => {
      if ('u' < typeof sessionStorage || sessionStorage.getItem('riza-scrolled')) return
      n(!0)
      let e = () => {
        window.scrollY > 40 &&
          (n(!1), sessionStorage.setItem('riza-scrolled', '1'), window.removeEventListener('scroll', e))
      }
      return (
        window.addEventListener('scroll', e, { passive: !0 }),
        () => window.removeEventListener('scroll', e)
      )
    }, []),
    (0, i.jsxs)('div', {
      style: {
        position: 'absolute',
        bottom: 36,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
        zIndex: 4,
        pointerEvents: 'none',
        opacity: +!!e,
        transition: 'opacity .6s ease',
      },
      children: [
        (0, i.jsx)('p', {
          style: {
            fontFamily: m,
            fontSize: 8,
            letterSpacing: '.38em',
            textTransform: 'uppercase',
            color: o,
            opacity: 0.7,
            margin: 0,
          },
          children: 'Scroll',
        }),
        (0, i.jsx)('svg', {
          width: 18,
          height: 18,
          viewBox: '0 0 18 18',
          fill: 'none',
          style: { animation: 'cr-scroll-bounce 1.6s ease-in-out infinite' },
          children: (0, i.jsx)('path', {
            d: 'M3 6 L9 12 L15 6',
            stroke: o,
            strokeWidth: 1.5,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            opacity: 0.65,
          }),
        }),
        (0, i.jsx)('style', {
          children:
            '@keyframes cr-scroll-bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(6px)}}',
        }),
      ],
    })
  )
}
function H() {
  let [e, n] = (0, t.useState)(!1)
  ;(0, t.useEffect)(() => n(!0), [])
  let r = e ? void 0 : 'en-US',
    v = new Date('2026-08-01T16:00:00+05:30'),
    H = new Date('2026-08-02T11:00:00+05:30'),
    A = v.toLocaleDateString(r, {
      timeZone: 'Asia/Kolkata',
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
    M = H.toLocaleDateString(r, {
      timeZone: 'Asia/Kolkata',
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
    $ = S(0.08),
    T = S(0.08),
    I = S(0.08),
    D = S(0.08),
    _ = S(0.08),
    R = S(0.08),
    N = S(0.08)
  return (0, i.jsxs)('div', {
    children: [
      (0, i.jsx)('style', {
        children: `
        ${u}
        *{box-sizing:border-box}
        @media(min-width:480px){.cr-wrap{padding:32px 18px 80px!important}:root{--cr-pad:38px}}
        @media(min-width:640px){.cr-wrap{padding:40px 28px 80px!important}:root{--cr-pad:46px}}
        @media(max-width:479px){:root{--cr-pad:26px}}
        .cr-card-hover{transition:transform .25s ease,box-shadow .25s ease}
        .cr-card-hover:hover{transform:translateY(-3px);box-shadow:0 12px 38px rgba(61,10,16,.22),0 2px 8px rgba(61,10,16,.10)}
      `,
      }),
      (0, i.jsxs)('div', {
        ref: $.ref,
        style: {
          position: 'relative',
          minHeight: '100svh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          backgroundColor: p,
        },
        children: [
          (0, i.jsx)('img', {
            src: '/images/ninal-frame-bg.jpg',
            alt: '',
            'aria-hidden': !0,
            style: {
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              display: 'block',
              pointerEvents: 'none',
            },
          }),
          (0, i.jsx)(b, {}),
          (0, i.jsxs)('div', {
            style: {
              maxWidth: 500,
              width: '100%',
              padding: 'clamp(56px,14vw,100px) clamp(44px,13vw,80px) clamp(48px,10vw,80px)',
              textAlign: 'center',
              position: 'relative',
              zIndex: 1,
            },
            children: [
              (0, i.jsx)(z, {
                inView: $.inView,
                delay: 0,
                children: (0, i.jsx)('p', {
                  style: {
                    fontFamily: f,
                    fontSize: 'clamp(20px,5.5vw,36px)',
                    color: o,
                    lineHeight: 1.6,
                    margin: '0 0 2px',
                    direction: 'rtl',
                    letterSpacing: '.02em',
                    textShadow: '0 2px 20px rgba(134,16,25,.18)',
                  },
                  children: 'بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ',
                }),
              }),
              (0, i.jsx)(z, {
                inView: $.inView,
                delay: 0.12,
                children: (0, i.jsxs)('p', {
                  style: {
                    fontFamily: f,
                    fontSize: 'clamp(12px,3.5vw,18px)',
                    color: o,
                    margin: '0 0 20px',
                    fontWeight: 700,
                    lineHeight: 1.8,
                    textAlign: 'center',
                  },
                  children: [
                    'In the Name of Allah',
                    (0, i.jsx)('br', {}),
                    'The Most Gracious & The Most Merciful',
                  ],
                }),
              }),
              (0, i.jsx)(V, { inView: $.inView, style: { maxWidth: 240, margin: '0 auto 20px' } }),
              (0, i.jsx)(k, {
                inView: $.inView,
                delay: 0.1,
                style: { marginBottom: 18 },
                children: (0, i.jsxs)('p', {
                  style: {
                    fontFamily: h,
                    fontStyle: 'italic',
                    fontWeight: 500,
                    fontSize: 'clamp(20px,5.5vw,32px)',
                    color: o,
                    lineHeight: 1.3,
                    margin: 0,
                  },
                  children: ['Feroz Khan', (0, i.jsx)('br', {}), '& Fathimath Saneera'],
                }),
              }),
              (0, i.jsx)(V, { inView: $.inView, style: { maxWidth: 260, margin: '14px auto' } }),
              (0, i.jsx)(z, {
                inView: $.inView,
                delay: 0.28,
                children: (0, i.jsx)('p', {
                  style: {
                    fontFamily: g,
                    fontStyle: 'italic',
                    fontWeight: 400,
                    fontSize: 'clamp(11px,3vw,13px)',
                    color: d,
                    opacity: 0.68,
                    lineHeight: 2,
                    margin: '0 auto',
                    width: '85%',
                    textAlign: 'center',
                  },
                  children:
                    'With hearts full of joy and gratitude, we cordially invite your esteemed presence along with your family on the auspicious occasion of the Nikah ceremony of our beloved ones. Your prayers, blessings, and gracious presence will make this sacred and joyous occasion truly memorable.',
                }),
              }),
            ],
          }),
          (0, i.jsx)(C, {}),
        ],
      }),
      (0, i.jsxs)('div', {
        ref: T.ref,
        style: {
          position: 'relative',
          width: '100%',
          height: '100svh',
          backgroundColor: p,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
        children: [
          (0, i.jsx)('img', {
            src: '/images/crimson-scroll-bg.webp',
            alt: '',
            loading: 'lazy',
            decoding: 'async',
            style: {
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
            },
          }),
          (0, i.jsx)(b, {}),
          (0, i.jsxs)('div', {
            style: {
              position: 'relative',
              zIndex: 3,
              textAlign: 'center',
              padding: 'clamp(24px,6vw,48px) clamp(18px,6vw,36px) clamp(32px,8vw,60px)',
              maxWidth: 460,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: 0,
            },
            children: [
              (0, i.jsxs)('p', {
                style: {
                  fontFamily: f,
                  fontSize: 'clamp(13px,3.6vw,22px)',
                  color: o,
                  lineHeight: 1.6,
                  margin: '0 0 2px',
                  direction: 'rtl',
                  letterSpacing: '.02em',
                  textShadow: '0 2px 20px rgba(134,16,25,.18)',
                },
                children: [
                  'وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا',
                  (0, i.jsx)('br', {}),
                  'لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً',
                ],
              }),
              (0, i.jsx)('p', {
                style: {
                  fontFamily: m,
                  fontSize: 8,
                  letterSpacing: '.22em',
                  textTransform: 'uppercase',
                  color: o,
                  opacity: 0.65,
                  margin: '6px 0 10px',
                },
                children: 'Surah Ar-Rum · 30:21',
              }),
              (0, i.jsx)('p', {
                style: {
                  fontFamily: f,
                  fontSize: 'clamp(10px,2.4vw,12px)',
                  color: o,
                  margin: '0 0 0',
                  fontWeight: 700,
                  lineHeight: 1.8,
                  textAlign: 'center',
                },
                children: '“And He placed between you affection and mercy.”',
              }),
              (0, i.jsx)('div', {
                style: { width: 44, height: 1, background: `${c}60`, margin: '6px auto' },
              }),
              (0, i.jsx)('h1', {
                style: {
                  fontFamily: h,
                  fontStyle: 'italic',
                  fontWeight: 500,
                  fontSize: 'clamp(20px,5.8vw,38px)',
                  color: d,
                  lineHeight: 1.1,
                  margin: '0',
                },
                children: 'Fathimath Riza P',
              }),
              (0, i.jsx)('p', {
                style: {
                  fontFamily: g,
                  fontSize: 10,
                  fontWeight: 600,
                  color: d,
                  opacity: 0.65,
                  lineHeight: 1.75,
                  margin: '8px auto 0',
                  maxWidth: 400,
                  textAlign: 'center',
                },
                children: 'D/O Mr. Feroz Khan & Mrs. Fathimath Saneera',
              }),
              (0, i.jsxs)('p', {
                style: {
                  fontFamily: g,
                  fontSize: 9.5,
                  fontWeight: 400,
                  color: d,
                  opacity: 0.52,
                  lineHeight: 1.75,
                  margin: '4px auto 0',
                  maxWidth: 400,
                  textAlign: 'center',
                },
                children: [
                  'Grand Daughter of',
                  (0, i.jsx)('br', {}),
                  'Late Muhammad Rafi Haji & Mrs Aysha',
                  (0, i.jsx)('br', {}),
                  'Moideen Kunhi Haji & Mrs Subaida',
                ],
              }),
              (0, i.jsxs)('div', {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  justifyContent: 'center',
                  margin: '8px 0 6px',
                  width: '100%',
                },
                children: [
                  (0, i.jsx)('div', { style: { flex: 1, height: 1, background: `${c}70`, maxWidth: 30 } }),
                  (0, i.jsx)('span', {
                    style: {
                      fontFamily: h,
                      fontStyle: 'italic',
                      fontWeight: 300,
                      fontSize: 22,
                      color: c,
                      lineHeight: 1,
                    },
                    children: '&',
                  }),
                  (0, i.jsx)('div', { style: { flex: 1, height: 1, background: `${c}70`, maxWidth: 30 } }),
                ],
              }),
              (0, i.jsx)('h1', {
                style: {
                  fontFamily: h,
                  fontStyle: 'italic',
                  fontWeight: 500,
                  fontSize: 'clamp(20px,5.8vw,38px)',
                  color: d,
                  lineHeight: 1.1,
                  margin: 0,
                },
                children: 'Nizamudheen KP',
              }),
              (0, i.jsx)('p', {
                style: {
                  fontFamily: g,
                  fontSize: 10,
                  fontWeight: 600,
                  color: d,
                  opacity: 0.65,
                  lineHeight: 1.75,
                  margin: '8px auto 0',
                  maxWidth: 400,
                  textAlign: 'center',
                },
                children: 'S/O Mr. Muhammed Kunhi & Mrs. Ramla',
              }),
              (0, i.jsx)('div', {
                style: { width: 44, height: 1, background: `${c}60`, margin: '8px auto 4px' },
              }),
              (0, i.jsx)('p', {
                style: {
                  fontFamily: m,
                  fontSize: 11,
                  letterSpacing: '.28em',
                  textTransform: 'uppercase',
                  color: d,
                  opacity: 0.8,
                  margin: 0,
                  fontWeight: 700,
                },
                children: M,
              }),
              (0, i.jsx)('p', {
                style: {
                  fontFamily: m,
                  fontSize: 9,
                  letterSpacing: '.24em',
                  textTransform: 'uppercase',
                  color: d,
                  opacity: 0.55,
                  margin: '5px 0 0',
                  fontWeight: 700,
                },
                children: w,
              }),
            ],
          }),
          (0, i.jsx)(a.ScrollHint, { color: `${o}99` }),
        ],
      }),
      (0, i.jsxs)('div', {
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
          (0, i.jsx)('img', {
            src: '/images/ninal-frame-bg.jpg',
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
          (0, i.jsx)(b, {}),
          (0, i.jsx)('div', {
            style: {
              maxWidth: 620,
              margin: '0 auto',
              padding: 'clamp(60px,12vw,90px) clamp(24px,10vw,100px) clamp(40px,8vw,70px)',
              textAlign: 'center',
              width: '100%',
              position: 'relative',
              zIndex: 3,
            },
            children: (0, i.jsxs)('div', {
              ref: I.ref,
              children: [
                (0, i.jsx)(z, {
                  inView: I.inView,
                  delay: 0,
                  children: (0, i.jsx)(V, {
                    inView: I.inView,
                    style: { maxWidth: 260, margin: '0 auto 16px' },
                  }),
                }),
                (0, i.jsx)(z, {
                  inView: I.inView,
                  delay: 0.1,
                  children: (0, i.jsx)('p', {
                    style: {
                      fontFamily: m,
                      fontSize: 11,
                      letterSpacing: '.28em',
                      textTransform: 'uppercase',
                      color: o,
                      margin: '0 0 12px',
                      fontWeight: 600,
                    },
                    children: 'Nikah',
                  }),
                }),
                (0, i.jsx)(k, {
                  inView: I.inView,
                  delay: 0.14,
                  children: (0, i.jsx)('p', {
                    style: {
                      fontFamily: y,
                      fontStyle: 'italic',
                      fontWeight: 400,
                      fontSize: 'clamp(14px,4vw,26px)',
                      lineHeight: 1.3,
                      margin: '0 0 8px',
                      color: 'transparent',
                      backgroundImage: `linear-gradient(90deg, ${o} 0%, ${s} 28%, ${c} 50%, ${s} 72%, ${o} 100%)`,
                      backgroundSize: '200% auto',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      animation: I.inView ? 'cr-shimmer 4.5s linear 0.8s infinite' : 'none',
                    },
                    children: A,
                  }),
                }),
                (0, i.jsx)(z, {
                  inView: I.inView,
                  delay: 0.22,
                  children: (0, i.jsxs)('p', {
                    style: {
                      fontFamily: y,
                      fontStyle: 'italic',
                      fontWeight: 400,
                      fontSize: 15,
                      color: o,
                      lineHeight: 1,
                      margin: '0 0 14px',
                    },
                    children: [
                      '4:00 ',
                      (0, i.jsx)('span', {
                        style: { fontSize: '0.55em', letterSpacing: '.04em' },
                        children: 'PM',
                      }),
                    ],
                  }),
                }),
                (0, i.jsxs)(z, {
                  inView: I.inView,
                  delay: 0.3,
                  children: [
                    (0, i.jsx)('p', {
                      style: {
                        fontFamily: g,
                        fontStyle: 'italic',
                        fontWeight: 500,
                        fontSize: 15,
                        color: o,
                        margin: '0 0 5px',
                        lineHeight: 1.3,
                      },
                      children: 'Hena Hut',
                    }),
                    (0, i.jsxs)('p', {
                      style: {
                        fontFamily: m,
                        fontSize: 'clamp(9px,2.6vw,12px)',
                        letterSpacing: '.12em',
                        textTransform: 'uppercase',
                        color: l,
                        opacity: 0.85,
                        margin: 0,
                        lineHeight: 1.8,
                        fontWeight: 700,
                      },
                      children: ['Kavu Haji Road, Kottappuram,', (0, i.jsx)('br', {}), 'Nileshwar'],
                    }),
                  ],
                }),
                (0, i.jsx)('div', {
                  ref: R.ref,
                  style: { display: 'flex', justifyContent: 'center', marginTop: 18 },
                  children: (0, i.jsx)(z, {
                    inView: R.inView,
                    children: (0, i.jsx)(W, {
                      name: 'Hena Hut',
                      address: 'Kavu Haji Road, Kottappuram, Nileshwar',
                      url: 'https://maps.app.goo.gl/z2ay3uANz7QCJXsa7',
                    }),
                  }),
                }),
                (0, i.jsx)(z, {
                  inView: I.inView,
                  delay: 0.38,
                  children: (0, i.jsx)(V, {
                    inView: I.inView,
                    style: { maxWidth: 200, margin: '28px auto' },
                  }),
                }),
                (0, i.jsx)(z, {
                  inView: I.inView,
                  delay: 0.44,
                  children: (0, i.jsx)('p', {
                    style: {
                      fontFamily: m,
                      fontSize: 11,
                      letterSpacing: '.28em',
                      textTransform: 'uppercase',
                      color: o,
                      margin: '0 0 12px',
                      fontWeight: 600,
                    },
                    children: 'Reception',
                  }),
                }),
                (0, i.jsx)(k, {
                  inView: I.inView,
                  delay: 0.48,
                  children: (0, i.jsx)('p', {
                    style: {
                      fontFamily: y,
                      fontStyle: 'italic',
                      fontWeight: 400,
                      fontSize: 'clamp(14px,4vw,26px)',
                      lineHeight: 1.3,
                      margin: '0 0 8px',
                      color: 'transparent',
                      backgroundImage: `linear-gradient(90deg, ${o} 0%, ${s} 28%, ${c} 50%, ${s} 72%, ${o} 100%)`,
                      backgroundSize: '200% auto',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      animation: I.inView ? 'cr-shimmer 4.5s linear 1.0s infinite' : 'none',
                    },
                    children: A,
                  }),
                }),
                (0, i.jsx)(z, {
                  inView: I.inView,
                  delay: 0.54,
                  children: (0, i.jsxs)('p', {
                    style: {
                      fontFamily: y,
                      fontStyle: 'italic',
                      fontWeight: 400,
                      fontSize: 15,
                      color: o,
                      lineHeight: 1,
                      margin: '0 0 14px',
                    },
                    children: [
                      '7:00',
                      ' ',
                      (0, i.jsx)('span', {
                        style: { fontSize: '0.55em', letterSpacing: '.04em' },
                        children: 'PM',
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)(z, {
                  inView: I.inView,
                  delay: 0.6,
                  children: (0, i.jsx)('p', {
                    style: {
                      fontFamily: g,
                      fontStyle: 'italic',
                      fontWeight: 500,
                      fontSize: 15,
                      color: o,
                      margin: '0 0 5px',
                      lineHeight: 1.3,
                    },
                    children: "Bride's Residence",
                  }),
                }),
              ],
            }),
          }),
          (0, i.jsx)(a.ScrollHint, { color: `${o}99` }),
          (0, i.jsx)('div', {
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
      (0, i.jsxs)('div', {
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
          (0, i.jsx)('img', {
            src: '/images/ninal-frame-bg.jpg',
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
          (0, i.jsx)(b, {}),
          (0, i.jsxs)('div', {
            style: {
              maxWidth: 620,
              margin: '0 auto',
              padding: 'clamp(60px,12vw,90px) clamp(24px,10vw,100px) clamp(40px,8vw,70px)',
              textAlign: 'center',
              width: '100%',
              position: 'relative',
              zIndex: 3,
            },
            children: [
              (0, i.jsxs)('div', {
                ref: D.ref,
                children: [
                  (0, i.jsx)(z, {
                    inView: D.inView,
                    delay: 0,
                    children: (0, i.jsx)(V, {
                      inView: D.inView,
                      style: { maxWidth: 260, margin: '0 auto 16px' },
                    }),
                  }),
                  (0, i.jsx)(z, {
                    inView: D.inView,
                    delay: 0.1,
                    children: (0, i.jsx)('p', {
                      style: {
                        fontFamily: m,
                        fontSize: 11,
                        letterSpacing: '.28em',
                        textTransform: 'uppercase',
                        color: o,
                        margin: '0 0 12px',
                        fontWeight: 600,
                      },
                      children: 'Wedding',
                    }),
                  }),
                  (0, i.jsx)(k, {
                    inView: D.inView,
                    delay: 0.14,
                    children: (0, i.jsx)('p', {
                      style: {
                        fontFamily: y,
                        fontStyle: 'italic',
                        fontWeight: 400,
                        fontSize: 'clamp(14px,4vw,26px)',
                        lineHeight: 1.3,
                        margin: '0 0 8px',
                        color: 'transparent',
                        backgroundImage: `linear-gradient(90deg, ${o} 0%, ${s} 28%, ${c} 50%, ${s} 72%, ${o} 100%)`,
                        backgroundSize: '200% auto',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        animation: D.inView ? 'cr-shimmer 4.5s linear 1.2s infinite' : 'none',
                      },
                      children: M,
                    }),
                  }),
                  (0, i.jsx)(z, {
                    inView: D.inView,
                    delay: 0.22,
                    children: (0, i.jsxs)('p', {
                      style: {
                        fontFamily: y,
                        fontStyle: 'italic',
                        fontWeight: 400,
                        fontSize: 15,
                        color: o,
                        lineHeight: 1,
                        margin: '0 0 14px',
                      },
                      children: [
                        '11:00 ',
                        (0, i.jsx)('span', {
                          style: { fontSize: '0.55em', letterSpacing: '.04em' },
                          children: 'AM',
                        }),
                        ' – 3:00 ',
                        (0, i.jsx)('span', {
                          style: { fontSize: '0.55em', letterSpacing: '.04em' },
                          children: 'PM',
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsxs)(z, {
                    inView: D.inView,
                    delay: 0.3,
                    children: [
                      (0, i.jsx)('p', {
                        style: {
                          fontFamily: g,
                          fontStyle: 'italic',
                          fontWeight: 500,
                          fontSize: 15,
                          color: o,
                          margin: '0 0 5px',
                          lineHeight: 1.3,
                        },
                        children: 'Mina Villa',
                      }),
                      (0, i.jsx)('p', {
                        style: {
                          fontFamily: m,
                          fontSize: 'clamp(9px,2.6vw,12px)',
                          letterSpacing: '.12em',
                          textTransform: 'uppercase',
                          color: l,
                          opacity: 0.85,
                          margin: 0,
                          lineHeight: 1.8,
                          fontWeight: 700,
                        },
                        children: 'Near CK Nair College, Padannakkad',
                      }),
                    ],
                  }),
                  (0, i.jsx)('div', {
                    ref: N.ref,
                    style: { display: 'flex', justifyContent: 'center', marginTop: 18 },
                    children: (0, i.jsx)(z, {
                      inView: N.inView,
                      children: (0, i.jsx)(W, {
                        name: "Mina Villa — Bride's Residence",
                        address: 'Near CK Nair College, Padannakkad',
                        url: 'https://maps.app.goo.gl/ikPrfDBgTPo21RwN7',
                      }),
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)('div', {
                style: { paddingTop: 24 },
                children: [
                  (0, i.jsx)(z, {
                    inView: D.inView,
                    delay: 0.4,
                    children: (0, i.jsx)(V, {
                      inView: D.inView,
                      style: { maxWidth: 260, margin: '0px auto 6px' },
                    }),
                  }),
                  (0, i.jsx)(z, {
                    inView: D.inView,
                    delay: 0.46,
                    children: (0, i.jsx)('p', {
                      style: {
                        fontFamily: h,
                        fontStyle: 'italic',
                        fontWeight: 300,
                        fontSize: 'clamp(18px,5vw,28px)',
                        color: o,
                        margin: '0 0 14px',
                        letterSpacing: '.04em',
                      },
                      children: 'In Sha Allah',
                    }),
                  }),
                  (0, i.jsxs)(z, {
                    inView: D.inView,
                    delay: 0.54,
                    children: [
                      (0, i.jsx)('p', {
                        style: {
                          fontFamily: m,
                          fontSize: 9,
                          letterSpacing: '.20em',
                          textTransform: 'uppercase',
                          color: 'rgba(61,10,16,0.58)',
                          margin: '0 0 8px',
                        },
                        children: 'Sharing the Happiness',
                      }),
                      (0, i.jsx)('p', {
                        style: {
                          fontFamily: h,
                          fontStyle: 'italic',
                          fontWeight: 400,
                          fontSize: 'clamp(22px,5.5vw,34px)',
                          color: d,
                          lineHeight: 1.4,
                          margin: 0,
                        },
                        children: 'Pathu & Ayshu',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, i.jsx)('div', {
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
      (0, i.jsxs)('div', {
        style: { position: 'relative', backgroundColor: '#1e0408' },
        children: [
          (0, i.jsxs)('div', {
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
              (0, i.jsx)('div', {
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
              (0, i.jsx)('div', {
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
          (0, i.jsx)('div', {
            'aria-hidden': !0,
            style: {
              position: 'sticky',
              top: 0,
              height: 0,
              overflow: 'visible',
              zIndex: 3,
              pointerEvents: 'none',
            },
            children: (0, i.jsx)('div', {
              style: {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '100svh',
                overflow: 'hidden',
              },
              children: (0, i.jsx)(b, {}),
            }),
          }),
          (0, i.jsxs)('div', {
            className: 'cr-wrap',
            style: {
              maxWidth: 700,
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              position: 'relative',
              zIndex: 2,
              padding: '24px 14px 80px',
            },
            children: [
              (0, i.jsx)('div', {
                ref: _.ref,
                children: (0, i.jsxs)(z, {
                  inView: _.inView,
                  style: { ...x, padding: 'var(--cr-pad,32px)', textAlign: 'center' },
                  className: 'cr-card-hover',
                  children: [
                    (0, i.jsx)(V, { inView: _.inView, style: { maxWidth: 240, margin: '0 auto 22px' } }),
                    (0, i.jsx)('span', {
                      style: {
                        fontFamily: m,
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: '.22em',
                        textTransform: 'uppercase',
                        color: o,
                        display: 'block',
                        textAlign: 'center',
                        marginBottom: 16,
                        whiteSpace: 'nowrap',
                      },
                      children: 'Counting Down to the Wedding',
                    }),
                    (0, i.jsx)('div', {
                      style: { marginTop: 28 },
                      children: (0, i.jsx)(F, { targetDate: j.event_date, inView: _.inView }),
                    }),
                    (0, i.jsx)('p', {
                      style: {
                        fontFamily: m,
                        fontSize: 8,
                        letterSpacing: '.18em',
                        textTransform: 'uppercase',
                        color: l,
                        opacity: 0.5,
                        margin: '18px 0 0',
                        textAlign: 'center',
                      },
                      children: 'Sunday · 2 August 2026 · 11:00 AM',
                    }),
                  ],
                }),
              }),
              
              (0, i.jsxs)('div', {
                style: { textAlign: 'center', padding: '28px 20px' },
                children: [
                  (0, i.jsx)(V, { inView: !0, style: { maxWidth: 220, margin: '0 auto 22px' } }),
                  (0, i.jsx)('p', {
                    style: {
                      fontFamily: h,
                      fontStyle: 'italic',
                      fontWeight: 400,
                      fontSize: 23,
                      color: p,
                      margin: '0 0 10px',
                      textShadow: '0 2px 40px rgba(0,0,0,.92),0 1px 12px rgba(0,0,0,.75)',
                    },
                    children: 'Fathimath Riza P & Nizamudheen KP',
                  }),
                  (0, i.jsxs)('p', {
                    style: {
                      fontFamily: m,
                      fontSize: 8,
                      letterSpacing: '.16em',
                      textTransform: 'uppercase',
                      color: p,
                      opacity: 0.4,
                      margin: 0,
                    },
                    children: [(0, i.jsx)(ZtCredit, {})],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  })
}
export default function () {
  let [e, a] = (0, t.useState)(!1),
    [o, l] = (0, t.useState)(!1)
  return (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsx)(r.default, { slug: 'riza-nizamudheen' }),
      !e &&
        (0, i.jsx)(n.CrimsonCover, {
          wedding: j,
          onDone: function () {
            ;(a(!0), requestAnimationFrame(() => requestAnimationFrame(() => l(!0))))
          },
          nameFontSize: 'clamp(30px,7.5vw,56px)',
          hijriDate: w,
        }),
      e &&
        (0, i.jsx)('div', {
          style: { opacity: +!!o, transition: 'opacity .7s ease' },
          children: (0, i.jsx)(H, {}),
        }),
    ],
  })
}
