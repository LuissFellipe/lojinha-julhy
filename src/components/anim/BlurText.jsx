import { Fragment, useEffect, useRef } from 'react'
import { gsap, semMovimento } from '../../lib/gsap'

/**
 * BlurText (React Bits) — cada palavra chega desfocada e vai
 * ganhando nitidez. Bom para parágrafos de apresentação.
 */
export default function BlurText({
  text,
  as: Tag = 'p',
  className = '',
  delay = 0,
  stagger = 0.06,
  start = 'top 85%',
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || semMovimento()) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll('[data-blur]'),
        { opacity: 0, filter: 'blur(10px)', y: 14 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 1,
          delay,
          stagger,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start, once: true },
        },
      )
    }, el)

    return () => ctx.revert()
  }, [text, delay, stagger, start])

  return (
    <Tag ref={ref} className={className}>
      {/* O espaço fica FORA do span: dentro (ou como &nbsp;) o navegador
          não encontra onde quebrar a linha e o parágrafo estoura no
          celular, porque cada palavra é um inline-block colado no outro. */}
      {String(text)
        .split(' ')
        .map((p, i) => (
          <Fragment key={i}>
            <span data-blur className="inline-block will-change-[filter,transform]">
              {p}
            </span>{' '}
          </Fragment>
        ))}
    </Tag>
  )
}
