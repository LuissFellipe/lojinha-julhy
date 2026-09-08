import { Fragment, useEffect, useRef } from 'react'
import { gsap, semMovimento } from '../../lib/gsap'

/**
 * SplitText (React Bits) — quebra o texto em caracteres ou palavras
 * e anima cada pedaço em cascata quando entra na viewport.
 */
export default function SplitText({
  text,
  as: Tag = 'span',
  className = '',
  splitBy = 'chars', // 'chars' | 'words'
  delay = 0,
  stagger = 0.03,
  duration = 0.9,
  from = { y: '110%', opacity: 0, rotateZ: 3 },
  to = { y: '0%', opacity: 1, rotateZ: 0 },
  start = 'top 88%',
  once = true,
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || semMovimento()) return
    const pedacos = el.querySelectorAll('[data-split]')

    const ctx = gsap.context(() => {
      gsap.fromTo(pedacos, from, {
        ...to,
        duration,
        delay,
        stagger,
        ease: 'expo.out',
        scrollTrigger: { trigger: el, start, once },
      })
    }, el)

    return () => ctx.revert()
  }, [text, splitBy, delay, stagger, duration, start, once])

  const palavras = String(text).split(' ')

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {/* Cada palavra é um inline-block; o espaço entre elas precisa ficar
          fora do span, senão não há onde quebrar a linha no celular. */}
      {palavras.map((palavra, i) => (
        <Fragment key={`${palavra}-${i}`}>
          <span className="inline-block overflow-hidden align-bottom" aria-hidden="true">
            {splitBy === 'words' ? (
              <span data-split className="inline-block will-change-transform">
                {palavra}
              </span>
            ) : (
              [...palavra].map((ch, j) => (
                <span key={j} data-split className="inline-block will-change-transform">
                  {ch}
                </span>
              ))
            )}
          </span>
          {i < palavras.length - 1 && ' '}
        </Fragment>
      ))}
    </Tag>
  )
}
