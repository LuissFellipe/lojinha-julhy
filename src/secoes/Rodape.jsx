import { LOJA, linkWhats } from '../config'
import { IconeFlor, IconeInstagram, IconeWhats } from '../components/ui'

export default function Rodape() {
  return (
    <footer className="border-t border-terra/10 bg-creme py-14">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-10 px-5 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <IconeFlor className="size-5 text-areia" />
            <span className="font-display text-2xl font-semibold tracking-[0.22em] text-terra-escuro">
              {LOJA.nome}
            </span>
          </div>
          <p className="mt-3 max-w-xs font-display text-lg italic text-terra/70">
            {LOJA.slogan}
          </p>
          <p className="mt-4 text-sm text-terra/55">{LOJA.cidade}</p>
        </div>

        <div className="flex flex-col gap-5 md:items-end">
          <div className="flex gap-3">
            <a
              href={LOJA.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram da BELLIS"
              className="grid size-11 place-items-center rounded-full border border-terra/15 text-terra-escuro transition-colors duration-500 hover:border-ouro hover:bg-ouro hover:text-creme"
            >
              <IconeInstagram className="size-5" />
            </a>
            <a
              href={linkWhats()}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="WhatsApp da BELLIS"
              className="grid size-11 place-items-center rounded-full border border-terra/15 text-terra-escuro transition-colors duration-500 hover:border-ouro hover:bg-ouro hover:text-creme"
            >
              <IconeWhats className="size-5" />
            </a>
          </div>
          <p className="text-xs text-terra/45">
            © {new Date().getFullYear()} {LOJA.nome}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
