import { useEffect, useMemo, useRef, useState } from 'react'
import { gsap, semMovimento } from '../lib/gsap'
import { CATEGORIAS, PRODUTOS } from '../data/produtos'
import { linkPeca } from '../config'
import { IconeWhats, RotuloSecao } from '../components/ui'
import AnimatedContent from '../components/anim/AnimatedContent'
import SplitText from '../components/anim/SplitText'
import TiltedCard from '../components/anim/TiltedCard'

function CardProduto({ peca }) {
  const [foto, setFoto] = useState(0)

  return (
    <TiltedCard>
      <article
        data-tilt-conteudo
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-terra/10 bg-creme transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(74,53,32,0.45)]"
      >
        <div className="relative aspect-3/4 overflow-hidden bg-areia-claro">
          {peca.fotos.map((f, i) => (
            <img
              key={f.src}
              src={f.src}
              alt={f.alt}
              loading={i === 0 ? 'eager' : 'lazy'}
              className={`absolute inset-0 size-full object-cover transition-[opacity,transform] duration-[900ms] ease-[var(--ease-bellis)] group-hover:scale-[1.03] ${
                i === foto ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}

          {/* brilho que segue o cursor (TiltedCard) */}
          <span
            data-tilt-brilho
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-0"
            style={{
              background:
                'radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.5), transparent 55%)',
            }}
          />

          {peca.tags?.length > 0 && (
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {peca.tags.map((t) => (
                <span
                  key={t}
                  className="texto-fino rounded-full bg-creme/90 px-3 py-1.5 text-terra-escuro backdrop-blur-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* miniaturas para trocar a foto */}
          {peca.fotos.length > 1 && (
            <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
              {peca.fotos.map((f, i) => (
                <button
                  key={f.src}
                  type="button"
                  onClick={() => setFoto(i)}
                  onMouseEnter={() => setFoto(i)}
                  aria-label={`Ver foto ${i + 1} de ${peca.nome}`}
                  aria-pressed={i === foto}
                  className={`size-11 overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                    i === foto
                      ? 'border-creme opacity-100'
                      : 'border-creme/40 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={f.src} alt="" loading="lazy" className="size-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* CTA que sobe no hover */}
          {/* No celular não existe hover: o botão fica sempre visível.
              No desktop ele continua subindo quando o mouse entra. */}
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-terra-escuro/90 to-transparent p-5 pt-12 transition-transform duration-500 ease-[var(--ease-bellis)] md:translate-y-full md:group-hover:translate-y-0">
            <a
              href={linkPeca(peca)}
              target="_blank"
              rel="noreferrer noopener"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-creme px-5 py-3 text-[0.75rem] font-medium tracking-[0.16em] uppercase text-terra-escuro transition-colors hover:bg-ouro hover:text-creme"
            >
              <IconeWhats />
              Quero essa
            </a>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="texto-fino text-terra/50">{peca.categoria}</p>
          <h3 className="mt-2 font-display text-2xl leading-tight text-terra-escuro">
            {peca.nome}
          </h3>
          <p className="mt-2 text-[0.93rem] leading-relaxed text-terra/70">{peca.descricao}</p>

          {peca.tamanhos?.length > 0 && (
            <div className="mt-4 flex flex-wrap items-center gap-1.5">
              {peca.tamanhos.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-terra/15 px-2 py-1 font-sans text-[0.7rem] tracking-wide text-terra/70"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {peca.cores?.length > 0 && (
            <div className="mt-4 flex flex-1 flex-wrap items-center gap-2">
              {peca.cores.map((c) => (
                <span
                  key={c.nome}
                  title={c.nome}
                  className="size-5 rounded-full border border-terra/20 ring-2 ring-creme"
                  style={{ backgroundColor: c.hex }}
                />
              ))}
              <span className="ml-1 text-xs text-terra/50">
                {peca.cores.map((c) => c.nome).join(' · ')}
              </span>
            </div>
          )}

          <div className="mt-5 flex items-center justify-between border-t border-terra/10 pt-4">
            {/* O "Quero essa" sobre a foto já é o pedido no celular,
                então aqui fica só o preço. */}
            <span className="font-display text-xl text-ouro">{peca.preco}</span>
          </div>
        </div>
      </article>
    </TiltedCard>
  )
}

export default function Catalogo() {
  const [filtro, setFiltro] = useState('Tudo')
  const gradeRef = useRef(null)

  const visiveis = useMemo(
    () => (filtro === 'Tudo' ? PRODUTOS : PRODUTOS.filter((p) => p.categoria === filtro)),
    [filtro],
  )

  // re-anima a grade a cada troca de filtro
  useEffect(() => {
    const el = gradeRef.current
    if (!el || semMovimento()) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.children,
        { y: 34, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.055,
          ease: 'expo.out',
          overwrite: true,
        },
      )
    }, el)
    return () => ctx.revert()
  }, [filtro])

  return (
    <section id="catalogo" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <AnimatedContent distance={26}>
              <RotuloSecao numero="02" className="mb-8">
                Catálogo
              </RotuloSecao>
            </AnimatedContent>
            <SplitText
              text="As peças da estação"
              as="h2"
              splitBy="words"
              stagger={0.07}
              className="font-display text-[clamp(2.3rem,5.5vw,4rem)] leading-[1.05] font-light text-terra-escuro"
            />
          </div>

          <AnimatedContent distance={26} delay={0.1}>
            <p className="max-w-sm text-[1rem] leading-relaxed text-terra/75">
              Escolheu? É só tocar na peça que a conversa já começa no WhatsApp com o nome dela.
              Estoque pequeno e rotativo — o que sai, sai.
            </p>
          </AnimatedContent>
        </div>

        {/* filtros */}
        <AnimatedContent distance={22} delay={0.05}>
          <div className="mt-12 flex flex-wrap gap-2.5 border-y border-terra/10 py-5">
            {CATEGORIAS.map((c) => {
              const ativo = c === filtro
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setFiltro(c)}
                  aria-pressed={ativo}
                  className={`texto-fino rounded-full px-5 py-2.5 transition-all duration-400 ${
                    ativo
                      ? 'bg-terra-escuro text-creme'
                      : 'border border-terra/15 text-terra/70 hover:border-terra/40 hover:text-terra-escuro'
                  }`}
                >
                  {c}
                </button>
              )
            })}
            <span className="ml-auto self-center font-sans text-xs text-terra/45 tabular-nums">
              {visiveis.length} {visiveis.length === 1 ? 'peça' : 'peças'}
            </span>
          </div>
        </AnimatedContent>

        <div
          ref={gradeRef}
          className={`mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 ${
            // com poucas peças a grade de 3 colunas fica vazia demais
            visiveis.length > 2 ? 'lg:grid-cols-3' : 'mx-auto max-w-4xl'
          }`}
        >
          {visiveis.map((p) => (
            <CardProduto key={p.id} peca={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
