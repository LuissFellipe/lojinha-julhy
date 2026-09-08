import { useEffect, useRef } from 'react'
import { gsap, semMovimento } from '../../lib/gsap'

/**
 * AnimatedContent (React Bits) — envelope genérico de revelação
 * no scroll. Direção, distância e escala configuráveis.
 */
export default function AnimatedContent({
  children,
  className = '',
  distance = 60,
  direction = 'vertical', // 'vertical' | 'horizontal'
  reverse = false,
  duration = 1.1,
  delay = 0,
  scale = 1,
  blur = 0,
  start = 'top 88%',
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (semMovimento()) {
      gsap.set(el, { opacity: 1 })
      return
    }

    const eixo = direction === 'horizontal' ? 'x' : 'y'
    const deslocamento = reverse ? -distance : distance

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          [eixo]: deslocamento,
          opacity: 0,
          scale,
          filter: blur ? `blur(${blur}px)` : 'none',
        },
        {
          [eixo]: 0,
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          duration,
          delay,
          ease: 'expo.out',
          scrollTrigger: { trigger: el, start, once: true },
        },
      )
    }, el)

    return () => ctx.revert()
  }, [distance, direction, reverse, duration, delay, scale, blur, start])

  return (
    <div ref={ref} className={`gsap-oculto ${className}`}>
      {children}
    </div>
  )
}
