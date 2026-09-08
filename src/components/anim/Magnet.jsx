import { useEffect, useRef } from 'react'
import { gsap, semMovimento } from '../../lib/gsap'

/**
 * Magnet (React Bits) — o elemento é atraído pelo cursor quando
 * ele chega perto. Usado nos botões de Instagram e WhatsApp.
 */
export default function Magnet({
  children,
  className = '',
  forca = 0.35,
  raio = 120,
  as: Tag = 'div',
  ...props
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || semMovimento()) return
    if (window.matchMedia('(hover: none)').matches) return

    const mover = (e) => {
      const r = el.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.hypot(dx, dy)

      if (dist < r.width / 2 + raio) {
        gsap.to(el, { x: dx * forca, y: dy * forca, duration: 0.6, ease: 'power3.out' })
      } else {
        gsap.to(el, { x: 0, y: 0, duration: 0.9, ease: 'elastic.out(1, 0.4)' })
      }
    }

    const sair = () => gsap.to(el, { x: 0, y: 0, duration: 0.9, ease: 'elastic.out(1, 0.4)' })

    window.addEventListener('mousemove', mover, { passive: true })
    window.addEventListener('mouseleave', sair)
    return () => {
      window.removeEventListener('mousemove', mover)
      window.removeEventListener('mouseleave', sair)
      gsap.killTweensOf(el)
    }
  }, [forca, raio])

  return (
    <Tag ref={ref} className={`inline-block will-change-transform ${className}`} {...props}>
      {children}
    </Tag>
  )
}
