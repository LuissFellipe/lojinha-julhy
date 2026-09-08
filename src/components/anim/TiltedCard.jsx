import { useEffect, useRef } from 'react'
import { gsap, semMovimento } from '../../lib/gsap'

/**
 * TiltedCard (React Bits) — inclinação 3D acompanhando o cursor,
 * com brilho que segue o ponteiro. Base dos cards do catálogo.
 *
 * A inclinação é discreta de propósito: com ângulo alto a foto da
 * peça distorce e o texto perde o alinhamento com os cards vizinhos.
 * O movimento é levantar o card, não girá-lo.
 */
export default function TiltedCard({
  children,
  className = '',
  intensidade = 4,
  escala = 1.012,
  elevacao = 6,
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || semMovimento()) return
    if (window.matchMedia('(hover: none)').matches) return

    const conteudo = el.querySelector('[data-tilt-conteudo]') ?? el
    const brilho = el.querySelector('[data-tilt-brilho]')

    // quickTo interpola o valor atual em vez de reiniciar um tween a
    // cada mousemove — é o que tira o "tranco" do movimento.
    const rotY = gsap.quickTo(conteudo, 'rotateY', { duration: 0.9, ease: 'power2.out' })
    const rotX = gsap.quickTo(conteudo, 'rotateX', { duration: 0.9, ease: 'power2.out' })

    gsap.set(conteudo, { transformPerspective: 1400, transformOrigin: '50% 50%' })

    const mover = (e) => {
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width
      const py = (e.clientY - r.top) / r.height

      rotY((px - 0.5) * intensidade * 2)
      rotX(-(py - 0.5) * intensidade * 2)

      if (brilho) {
        gsap.to(brilho, {
          opacity: 0.35,
          duration: 0.5,
          '--mx': `${px * 100}%`,
          '--my': `${py * 100}%`,
        })
      }
    }

    const entrar = () => {
      gsap.to(conteudo, { scale: escala, y: -elevacao, duration: 0.7, ease: 'power3.out' })
    }

    const sair = () => {
      // volta sem quique: o elastic fazia o card balançar no fim
      rotX(0)
      rotY(0)
      gsap.to(conteudo, { scale: 1, y: 0, duration: 0.8, ease: 'power3.out' })
      if (brilho) gsap.to(brilho, { opacity: 0, duration: 0.5 })
    }

    el.addEventListener('mouseenter', entrar)
    el.addEventListener('mousemove', mover)
    el.addEventListener('mouseleave', sair)
    return () => {
      el.removeEventListener('mouseenter', entrar)
      el.removeEventListener('mousemove', mover)
      el.removeEventListener('mouseleave', sair)
      gsap.killTweensOf([conteudo, brilho])
    }
  }, [intensidade, escala, elevacao])

  return (
    <div ref={ref} className={className} style={{ perspective: '1400px' }}>
      {children}
    </div>
  )
}
