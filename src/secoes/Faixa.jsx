import ScrollVelocity from '../components/anim/ScrollVelocity'
import { IconeFlor } from '../components/ui'

const PALAVRAS = ['Leveza', 'Versatilidade', 'Feito para durar', 'Peça a peça', 'Você inteira']

export default function Faixa() {
  return (
    <section
      aria-hidden="true"
      className="grao relative overflow-hidden border-y border-terra/10 bg-terra-escuro py-7"
    >
      <ScrollVelocity velocidadeBase={55} copias={4}>
        {PALAVRAS.map((p) => (
          <span key={p} className="flex items-center whitespace-nowrap">
            <span className="font-display px-8 text-[clamp(1.8rem,4vw,3rem)] font-light text-creme">
              {p}
            </span>
            <IconeFlor className="size-5 shrink-0 text-ouro-claro" />
          </span>
        ))}
      </ScrollVelocity>
    </section>
  )
}
