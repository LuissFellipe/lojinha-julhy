import { useEffect, useRef } from 'react'
import { gsap, semMovimento } from '../../lib/gsap'

/**
 * CircularText (React Bits) — texto disposto em círculo, girando
 * devagar. Abraça a margarida do hero.
 */
export default function CircularText({
  text = 'BELLIS · SEU COTIDIANO MAIS BONITO · ',
  className = '',
  tamanho = 220,
  duracao = 26,
  sentido = 1,
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || semMovimento()) return
    const tw = gsap.to(el, {
      rotate: 360 * sentido,
      duration: duracao,
      repeat: -1,
      ease: 'none',
    })
    return () => tw.kill()
  }, [duracao, sentido])

  const letras = [...text]
  const passo = 360 / letras.length
  const raio = tamanho / 2

  return (
    <div
      ref={ref}
      className={`pointer-events-none relative ${className}`}
      style={{ width: tamanho, height: tamanho }}
      aria-hidden="true"
    >
      {letras.map((ch, i) => (
        <span
          key={i}
          className="absolute top-1/2 left-1/2 font-sans text-[0.62rem] tracking-[0.2em] text-terra/60"
          style={{
            transform: `rotate(${i * passo}deg) translateY(-${raio}px)`,
            transformOrigin: '0 0',
          }}
        >
          {ch}
        </span>
      ))}
    </div>
  )
}
