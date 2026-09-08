import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from './lib/gsap'
import { linkWhats } from './config'
import { IconeWhats } from './components/ui'
import Cabecalho from './secoes/Cabecalho'
import Hero from './secoes/Hero'
import Sobre from './secoes/Sobre'
import Faixa from './secoes/Faixa'
import Catalogo from './secoes/Catalogo'
import Contato from './secoes/Contato'
import Rodape from './secoes/Rodape'

/** Barra fina de progresso do scroll, no dourado da marca. */
function ProgressoScroll() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const tw = gsap.fromTo(
      el,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: 'none',
        transformOrigin: '0 50%',
        scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.3 },
      },
    )
    return () => {
      tw.scrollTrigger?.kill()
      tw.kill()
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left scale-x-0 bg-linear-to-r from-ouro to-ouro-claro"
    />
  )
}

/** Botão flutuante do WhatsApp — aparece depois do hero. */
function BotaoFlutuante() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const st = ScrollTrigger.create({
      start: 'top -85%',
      onToggle: ({ isActive }) =>
        gsap.to(el, {
          autoAlpha: isActive ? 1 : 0,
          y: isActive ? 0 : 24,
          scale: isActive ? 1 : 0.8,
          duration: 0.5,
          ease: 'back.out(1.6)',
        }),
    })
    return () => st.kill()
  }, [])

  return (
    <a
      ref={ref}
      href={linkWhats()}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Falar no WhatsApp"
      className="invisible fixed right-5 bottom-5 z-50 grid size-14 place-items-center rounded-full bg-ouro text-creme opacity-0 shadow-[0_16px_40px_-12px_rgba(74,53,32,0.6)] transition-colors duration-500 hover:bg-terra-escuro sm:right-8 sm:bottom-8"
    >
      <IconeWhats className="size-7" />
    </a>
  )
}

export default function App() {
  // recalcula os gatilhos quando fontes/imagens mudam a altura da página
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    document.fonts?.ready.then(refresh)
    return () => window.removeEventListener('load', refresh)
  }, [])

  return (
    <>
      <ProgressoScroll />
      <Cabecalho />
      <main>
        <Hero />
        <Sobre />
        <Faixa />
        <Catalogo />
        <Contato />
      </main>
      <Rodape />
      <BotaoFlutuante />
    </>
  )
}
