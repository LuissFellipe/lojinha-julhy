import { useEffect, useRef } from 'react'
import { gsap, semMovimento } from '../lib/gsap'

/**
 * A margarida (Bellis perennis) da marca, desenhada em SVG para
 * poder animar pétala por pétala. 16 pétalas, miolo dourado.
 */
export default function Margarida({ className = '', tamanho = 340, animar = true }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !animar) return

    const petalas = el.querySelectorAll('[data-petala]')
    const miolo = el.querySelector('[data-miolo]')

    if (semMovimento()) {
      gsap.set([petalas, miolo], { opacity: 1, scale: 1 })
      return
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.25 })

      tl.fromTo(
        petalas,
        { scale: 0, opacity: 0, transformOrigin: '50% 50%' },
        {
          scale: 1,
          opacity: 1,
          duration: 1.1,
          stagger: { each: 0.055, from: 'start' },
          ease: 'back.out(1.7)',
        },
      )
        .fromTo(
          miolo,
          { scale: 0, opacity: 0, transformOrigin: '50% 50%' },
          { scale: 1, opacity: 1, duration: 0.8, ease: 'elastic.out(1, 0.5)' },
          '-=0.5',
        )
        // respiração contínua depois da entrada
        .to(el, {
          rotate: 8,
          duration: 9,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          transformOrigin: '50% 50%',
        })

      // parallax leve no scroll
      gsap.to(el, {
        y: -70,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top top', end: 'bottom top', scrub: 1 },
      })
    }, el)

    return () => ctx.revert()
  }, [animar])

  const petalas = Array.from({ length: 16 }, (_, i) => (i * 360) / 16)

  return (
    <svg
      ref={ref}
      width={tamanho}
      height={tamanho}
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Margarida, símbolo da BELLIS"
    >
      <defs>
        <radialGradient id="mioloGrad" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#F7CF63" />
          <stop offset="55%" stopColor="#E0A526" />
          <stop offset="100%" stopColor="#C07E06" />
        </radialGradient>
        <linearGradient id="petalaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFDF8" />
          <stop offset="100%" stopColor="#EFE4D2" />
        </linearGradient>
      </defs>

      <g>
        {petalas.map((ang, i) => (
          <ellipse
            key={i}
            data-petala
            cx="100"
            cy="43"
            rx="12.5"
            ry="37"
            fill="url(#petalaGrad)"
            stroke="#DFCDB4"
            strokeWidth="0.7"
            transform={`rotate(${ang} 100 100)`}
            style={{ opacity: 0 }}
          />
        ))}
      </g>

      <circle
        data-miolo
        cx="100"
        cy="100"
        r="30"
        fill="url(#mioloGrad)"
        style={{ opacity: 0 }}
      />
      <path
        data-miolo-brilho
        d="M88 90 q10 -8 22 -2"
        stroke="#FBE49B"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      />
    </svg>
  )
}
