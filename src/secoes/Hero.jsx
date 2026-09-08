import { useEffect, useRef } from 'react'
import { gsap, semMovimento } from '../lib/gsap'
import { LOJA, MENSAGENS, linkWhats } from '../config'
import { Botao, IconeInstagram, IconeWhats } from '../components/ui'
import Margarida from '../components/Margarida'
import CircularText from '../components/anim/CircularText'
import SplitText from '../components/anim/SplitText'
import BlurText from '../components/anim/BlurText'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // A cortina é opaca e cobre a tela inteira: se a animação não roda,
    // a página fica bege. Some com ela antes de qualquer saída antecipada.
    const cortina = el.querySelector('[data-cortina]')
    if (semMovimento()) {
      if (cortina) cortina.style.display = 'none'
      return
    }

    const ctx = gsap.context(() => {
      // cortina de abertura: o bege sobe e revela a página
      gsap.to('[data-cortina]', {
        yPercent: -100,
        duration: 1.2,
        ease: 'expo.inOut',
        delay: 0.1,
        onComplete: () => gsap.set('[data-cortina]', { display: 'none' }),
      })

      gsap.from('[data-hero-fade]', {
        y: 26,
        opacity: 0,
        duration: 1.2,
        delay: 0.75,
        stagger: 0.12,
        ease: 'expo.out',
      })

      // parallax do fundo ao rolar
      gsap.to('[data-hero-fundo]', {
        yPercent: 14,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top top', end: 'bottom top', scrub: true },
      })

      gsap.to('[data-hero-conteudo]', {
        y: -60,
        opacity: 0.25,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'center center', end: 'bottom top', scrub: true },
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="topo"
      ref={ref}
      className="grao relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >
      {/* cortina de abertura */}
      <div
        data-cortina
        className="fixed inset-0 z-[999] bg-areia"
        aria-hidden="true"
      />

      {/* fundo */}
      <div
        data-hero-fundo
        aria-hidden="true"
        className="absolute inset-0 -z-10 scale-110 bg-linear-160 from-areia-claro via-creme to-areia"
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-32 -z-10 size-[46rem] rounded-full bg-ouro/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-52 -left-24 -z-10 size-[34rem] rounded-full bg-rosa/20 blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* coluna do texto */}
        <div data-hero-conteudo className="relative z-10">
          <p data-hero-fade className="texto-fino mb-7 text-terra/60">
            {LOJA.cidade} · desde 2024
          </p>

          <h1 className="font-display text-[clamp(3.2rem,10vw,7rem)] leading-[0.92] font-light text-terra-escuro">
            <SplitText
              text="Seu cotidiano"
              as="span"
              className="block"
              delay={0.85}
              stagger={0.035}
            />
            <SplitText
              text="mais bonito."
              as="span"
              className="block italic text-ouro"
              delay={1.05}
              stagger={0.035}
            />
          </h1>

          <BlurText
            text="A BELLIS nasceu de uma ideia simples: roupa que você veste sem pensar duas vezes e que te faz sentir bem o dia inteiro. Peças leves, versáteis e femininas — feitas para combinar com você, e entre si."
            className="mt-8 max-w-lg text-[1.05rem] leading-relaxed text-terra/80"
            delay={1.2}
          />

          <div data-hero-fade className="mt-11 flex flex-wrap items-center gap-4">
            <Botao href="#catalogo" variante="ouro">
              Ver o catálogo
            </Botao>
            <Botao href={LOJA.instagram} variante="contorno" icone={<IconeInstagram />}>
              {LOJA.instagramHandle}
            </Botao>
          </div>

          <div
            data-hero-fade
            className="mt-10 flex items-center gap-3 text-sm text-terra/65"
          >
            <IconeWhats className="size-5 text-ouro" />
            <a
              href={linkWhats(MENSAGENS.duvida)}
              target="_blank"
              rel="noreferrer noopener"
              className="underline decoration-terra/25 underline-offset-4 transition-colors hover:text-terra-escuro hover:decoration-ouro"
            >
              Atendimento pelo WhatsApp, de segunda a sábado
            </a>
          </div>
        </div>

        {/* coluna da margarida */}
        <div className="relative flex items-center justify-center">
          <div className="relative grid place-items-center">
            <div
              aria-hidden="true"
              className="absolute size-[16rem] rounded-full bg-creme/70 blur-2xl sm:size-[26rem]"
            />
            {/* As classes de largura mandam no atributo do SVG, então a
                margarida encolhe junto com a tela em vez de estourar. */}
            <Margarida
              className="relative h-auto w-[min(68vw,360px)] drop-shadow-[0_28px_60px_rgba(74,53,32,0.18)]"
              tamanho={360}
            />
            {/* Texto circular tem largura fixa em px: some no celular,
                onde ele passaria por baixo do texto do hero. */}
            <CircularText
              className="absolute hidden sm:block"
              tamanho={430}
              text={`${LOJA.nome} · ${LOJA.slogan.toUpperCase()} · `}
            />
          </div>
        </div>
      </div>

      {/* indicador de scroll */}
      <div
        data-hero-fade
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="texto-fino text-terra/45">Role</span>
        <span className="relative block h-14 w-px overflow-hidden bg-terra/15">
          <span className="absolute inset-x-0 top-0 h-5 animate-[descer_2.2s_ease-in-out_infinite] bg-ouro" />
        </span>
      </div>
    </section>
  )
}
