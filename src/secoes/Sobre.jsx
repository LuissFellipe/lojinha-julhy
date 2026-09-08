import { LOJA } from '../config'
import { RotuloSecao } from '../components/ui'
import AnimatedContent from '../components/anim/AnimatedContent'
import SplitText from '../components/anim/SplitText'
import BlurText from '../components/anim/BlurText'
import TiltedCard from '../components/anim/TiltedCard'

const PILARES = [
  {
    titulo: 'Curadoria de gente pequena',
    texto:
      'Cada peça entra na loja porque alguém aqui vestiu, aprovou e usaria de novo. Nada de arara sem critério.',
  },
  {
    titulo: 'Feita para combinar',
    texto:
      'A coleção conversa entre si: a blusa de hoje é a de amanhã com outra saia. Menos roupa, mais possibilidade.',
  },
  {
    titulo: 'Atendimento de perto',
    texto:
      'Você fala com uma pessoa, não com um robô. Dúvida de tamanho, tecido ou caimento? Manda no zap que a gente responde.',
  },
]

export default function Sobre() {
  return (
    <section id="sobre" className="relative overflow-hidden py-28 sm:py-36">
      <div
        aria-hidden="true"
        className="absolute top-1/3 -left-40 -z-10 size-[30rem] rounded-full bg-areia/50 blur-3xl"
      />

      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* imagem / colagem */}
          {/* Entrada vertical: deslizar na horizontal joga a foto para
              fora da tela no celular enquanto a animação não roda. */}
          <AnimatedContent distance={50}>
            <TiltedCard intensidade={3} elevacao={4}>
              <div
                data-tilt-conteudo
                className="grao relative aspect-4/5 overflow-hidden rounded-t-[999px] rounded-b-3xl border border-terra/10 bg-areia-claro"
              >
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1000&q=80"
                  alt="Ambiente da BELLIS: araras com peças leves em tons de bege e off white"
                  loading="lazy"
                  className="size-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-terra-escuro/35 via-transparent to-transparent" />
                <div className="absolute right-6 bottom-6 left-6 text-creme">
                  <p className="texto-fino opacity-80">{LOJA.cidade}</p>
                  <p className="mt-1 font-display text-2xl italic">Bellis perennis</p>
                </div>
              </div>
            </TiltedCard>
          </AnimatedContent>

          {/* texto */}
          <div>
            <AnimatedContent distance={30}>
              <RotuloSecao numero="01" className="mb-8">
                A loja
              </RotuloSecao>
            </AnimatedContent>

            <SplitText
              text="Margarida é flor de todo dia."
              as="h2"
              splitBy="words"
              stagger={0.07}
              className="font-display text-[clamp(2.3rem,5.5vw,4rem)] leading-[1.05] font-light text-terra-escuro"
            />

            <BlurText
              text="Bellis perennis é o nome científico da margarida — a flor que nasce no meio do caminho, sem pedir licença, e deixa tudo mais bonito. É exatamente isso que a gente quer que a sua roupa faça pelo seu dia."
              className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-terra/80"
            />
            <BlurText
              text="Somos uma loja pequena, de Juiz de Fora, que escolhe peça por peça e conhece cliente pelo nome. Você escolhe aqui, conversa com a gente no WhatsApp e recebe em casa — ou combina de retirar."
              className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-terra/80"
              delay={0.15}
            />

            <div className="mt-12 space-y-px overflow-hidden rounded-2xl border border-terra/10 bg-terra/10">
              {PILARES.map((p, i) => (
                <AnimatedContent key={p.titulo} distance={26} delay={i * 0.08}>
                  <article className="group bg-creme p-7 transition-colors duration-500 hover:bg-areia-claro">
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-lg text-ouro tabular-nums">
                        0{i + 1}
                      </span>
                      <div>
                        <h3 className="font-display text-2xl text-terra-escuro">{p.titulo}</h3>
                        <p className="mt-2 text-[0.97rem] leading-relaxed text-terra/75">
                          {p.texto}
                        </p>
                      </div>
                    </div>
                  </article>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
