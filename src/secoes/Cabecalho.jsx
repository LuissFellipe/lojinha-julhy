import { useEffect, useRef, useState } from 'react'
import { gsap } from '../lib/gsap'
import { LOJA, linkWhats } from '../config'
import { Botao, IconeFlor, IconeInstagram, IconeWhats } from '../components/ui'

const LINKS = [
  { href: '#sobre', rotulo: 'A loja' },
  { href: '#catalogo', rotulo: 'Catálogo' },
  { href: '#contato', rotulo: 'Contato' },
]

export default function Cabecalho() {
  const ref = useRef(null)
  const [solido, setSolido] = useState(false)
  const [menuAberto, setMenuAberto] = useState(false)

  useEffect(() => {
    const aoScroll = () => setSolido(window.scrollY > 40)
    aoScroll()
    window.addEventListener('scroll', aoScroll, { passive: true })
    return () => window.removeEventListener('scroll', aoScroll)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from(el, { y: -70, opacity: 0, duration: 1.1, delay: 0.15, ease: 'expo.out' })
    }, el)
    return () => ctx.revert()
  }, [])

  // trava o scroll do fundo com o menu aberto
  useEffect(() => {
    document.body.style.overflow = menuAberto ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuAberto])

  return (
    <header
      ref={ref}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solido
          ? 'border-b border-terra/10 bg-creme/85 py-3 backdrop-blur-xl'
          : 'border-b border-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 sm:px-8">
        <a href="#topo" className="group flex items-center gap-2.5">
          <IconeFlor className="size-5 text-areia transition-transform duration-700 group-hover:rotate-180" />
          <span className="font-display text-2xl leading-none font-semibold tracking-[0.22em] text-terra-escuro">
            {LOJA.nome}
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="texto-fino relative text-terra-escuro/75 transition-colors hover:text-terra-escuro"
            >
              {l.rotulo}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-ouro transition-all duration-500 hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={LOJA.instagram}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Instagram ${LOJA.instagramHandle}`}
            className="grid size-10 place-items-center rounded-full border border-terra/15 text-terra-escuro transition-colors duration-500 hover:border-ouro hover:bg-ouro hover:text-creme"
          >
            <IconeInstagram className="size-[1.15rem]" />
          </a>

          {/* Vazado como o ícone do Instagram ao lado: um botão sólido
              aqui pesa mais que a própria logo da marca.
              O `hidden` vai no wrapper, não no botão: a classe `inline-flex`
              do próprio Botao ganharia dele e ele apareceria no celular. */}
          <span className="hidden sm:inline-block">
            <Botao
              href={linkWhats()}
              variante="contorno-ouro"
              icone={
                <IconeWhats className="size-[1.1em] text-ouro transition-colors duration-500 group-hover:text-creme" />
              }
              className="px-5 py-2.5 text-[0.7rem] tracking-[0.18em] whitespace-nowrap"
            >
              Comprar
            </Botao>
          </span>

          <button
            type="button"
            onClick={() => setMenuAberto((v) => !v)}
            aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuAberto}
            className="grid size-10 place-items-center rounded-full border border-terra/15 text-terra-escuro md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 block h-px w-full bg-current transition-all duration-400 ${
                  menuAberto ? 'top-1.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-full bg-current transition-all duration-400 ${
                  menuAberto ? 'top-1.5 -rotate-45' : 'top-3'
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`grid overflow-hidden bg-creme/95 backdrop-blur-xl transition-[grid-template-rows] duration-500 md:hidden ${
          menuAberto ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="min-h-0">
          <nav className="flex flex-col gap-1 px-6 py-6">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuAberto(false)}
                className="border-b border-terra/10 py-4 font-display text-3xl text-terra-escuro"
              >
                {l.rotulo}
              </a>
            ))}
            <Botao
              href={linkWhats()}
              variante="ouro"
              icone={<IconeWhats />}
              magnetico={false}
              className="mt-6 justify-center"
            >
              Comprar pelo WhatsApp
            </Botao>
          </nav>
        </div>
      </div>
    </header>
  )
}
