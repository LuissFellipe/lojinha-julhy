import { LOJA, MENSAGENS, linkWhats } from '../config'
import { Botao, IconeInstagram, IconeWhats, RotuloSecao } from '../components/ui'
import AnimatedContent from '../components/anim/AnimatedContent'
import SplitText from '../components/anim/SplitText'
import BlurText from '../components/anim/BlurText'
import Margarida from '../components/Margarida'

export default function Contato() {
  return (
    <section
      id="contato"
      className="grao relative overflow-hidden bg-terra-escuro py-28 text-creme sm:py-36"
    >
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 size-[34rem] rounded-full bg-ouro/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 opacity-[0.07]"
      >
        <Margarida tamanho={420} animar={false} />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        <AnimatedContent distance={26}>
          <RotuloSecao numero="03" className="mb-8 text-creme/60">
            Contato
          </RotuloSecao>
        </AnimatedContent>

        <SplitText
          text="Vem conversar com a gente."
          as="h2"
          splitBy="words"
          stagger={0.07}
          className="max-w-3xl font-display text-[clamp(2.5rem,7vw,5rem)] leading-[1.02] font-light"
        />

        <BlurText
          text="A venda acontece no WhatsApp e o dia a dia da loja está todo no Instagram — novidades, provador e as clientes vestindo. Escolha por onde prefere começar."
          className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-creme/75"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <AnimatedContent distance={34}>
            <a
              href={linkWhats()}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex h-full flex-col justify-between gap-10 rounded-3xl border border-creme/15 bg-creme/5 p-8 transition-colors duration-500 hover:border-ouro hover:bg-ouro"
            >
              <IconeWhats className="size-9 text-ouro-claro transition-colors duration-500 group-hover:text-creme" />
              <div>
                <p className="texto-fino text-creme/55 transition-colors group-hover:text-creme/80">
                  Pedidos e dúvidas
                </p>
                <p className="mt-2 font-display text-3xl">WhatsApp</p>
                <p className="mt-2 text-sm text-creme/70">
                  Tamanho, tecido, frete, pix — respondemos de segunda a sábado.
                </p>
              </div>
            </a>
          </AnimatedContent>

          <AnimatedContent distance={34} delay={0.1}>
            <a
              href={LOJA.instagram}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex h-full flex-col justify-between gap-10 rounded-3xl border border-creme/15 bg-creme/5 p-8 transition-colors duration-500 hover:border-rosa hover:bg-rosa"
            >
              <IconeInstagram className="size-9 text-rosa transition-colors duration-500 group-hover:text-terra-escuro" />
              <div>
                <p className="texto-fino text-creme/55 transition-colors group-hover:text-terra-escuro/70">
                  Novidades todo dia
                </p>
                <p className="mt-2 font-display text-3xl transition-colors group-hover:text-terra-escuro">
                  {LOJA.instagramHandle}
                </p>
                <p className="mt-2 text-sm text-creme/70 transition-colors group-hover:text-terra-escuro/80">
                  Provador, looks montados e as peças que acabaram de chegar.
                </p>
              </div>
            </a>
          </AnimatedContent>
        </div>

        <AnimatedContent distance={24} delay={0.15}>
          <div className="mt-14 flex flex-wrap items-center gap-5">
            <Botao href={linkWhats(MENSAGENS.catalogo)} variante="ouro" icone={<IconeWhats />}>
              Começar meu pedido
            </Botao>
            <a
              href={LOJA.linktree}
              target="_blank"
              rel="noreferrer noopener"
              className="texto-fino text-creme/60 underline decoration-creme/25 underline-offset-8 transition-colors hover:text-creme"
            >
              Todos os links
            </a>
          </div>
        </AnimatedContent>
      </div>
    </section>
  )
}
