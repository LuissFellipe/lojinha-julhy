import { useEffect, useRef } from 'react'
import { gsap, semMovimento } from '../../lib/gsap'

/**
 * ScrollVelocity (React Bits) — faixa infinita que corre sozinha e
 * acelera/inverte conforme a velocidade e a direção do scroll.
 */
export default function ScrollVelocity({
  children,
  className = '',
  velocidadeBase = 40, // px/s
  direcao = 1,
  copias = 4,
}) {
  const wrapRef = useRef(null)
  const trilhoRef = useRef(null)

  useEffect(() => {
    const trilho = trilhoRef.current
    if (!trilho) return
    if (semMovimento()) return

    const primeiro = trilho.firstElementChild
    if (!primeiro) return

    let largura = primeiro.offsetWidth
    let x = 0
    let fator = 1
    let ultimoScroll = window.scrollY
    let raf

    const medir = () => {
      largura = primeiro.offsetWidth
    }

    const aoScroll = () => {
      const delta = window.scrollY - ultimoScroll
      ultimoScroll = window.scrollY
      // o scroll empurra a faixa; ela volta ao ritmo base sozinha
      fator = gsap.utils.clamp(-6, 6, fator + delta * 0.06)
    }

    let anterior = performance.now()
    const tick = (agora) => {
      const dt = (agora - anterior) / 1000
      anterior = agora
      fator += (1 - fator) * Math.min(1, dt * 2.2) // amortece de volta pro 1
      x -= velocidadeBase * direcao * fator * dt
      if (largura > 0) x = ((x % largura) + largura) % largura
      gsap.set(trilho, { x: -x })
      raf = requestAnimationFrame(tick)
    }

    medir()
    raf = requestAnimationFrame(tick)
    window.addEventListener('scroll', aoScroll, { passive: true })
    window.addEventListener('resize', medir)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', aoScroll)
      window.removeEventListener('resize', medir)
    }
  }, [velocidadeBase, direcao])

  return (
    <div ref={wrapRef} className={`overflow-hidden ${className}`}>
      <div ref={trilhoRef} className="flex w-max will-change-transform">
        {Array.from({ length: copias }).map((_, i) => (
          <div key={i} className="flex shrink-0 items-center" aria-hidden={i > 0}>
            {children}
          </div>
        ))}
      </div>
    </div>
  )
}
