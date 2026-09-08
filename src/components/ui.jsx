import Magnet from './anim/Magnet'

export function IconeInstagram({ className = 'size-[1.05em]' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  )
}

export function IconeWhats({ className = 'size-[1.05em]' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M20.5 11.7c0 4.6-3.8 8.4-8.5 8.4-1.5 0-2.9-.4-4.1-1.1L3.5 20.5l1.6-4.2a8.2 8.2 0 0 1-1.1-4.1c0-4.6 3.8-8.4 8.5-8.4s8 3.8 8 7.9Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 8.6c.3-.6.6-.6.9-.6h.5c.2 0 .4 0 .6.5l.7 1.6c.1.3 0 .5-.1.7l-.4.5c-.1.2-.2.3 0 .6.2.4.7 1.1 1.3 1.6.7.6 1.3.8 1.6.9.2.1.4 0 .5-.1l.6-.6c.2-.2.4-.2.6-.1l1.5.8c.4.2.4.4.4.6 0 .3-.2 1-.5 1.3-.4.3-1 .6-1.7.5-1 0-2.6-.5-4.2-2-1.6-1.5-2.4-3-2.6-4-.2-.9.1-1.6.4-2Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function IconeFlor({ className = 'size-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <ellipse
          key={a}
          cx="12"
          cy="6.2"
          rx="2.1"
          ry="4.6"
          fill="currentColor"
          opacity="0.85"
          transform={`rotate(${a} 12 12)`}
        />
      ))}
      <circle cx="12" cy="12" r="3.1" fill="var(--color-ouro)" />
    </svg>
  )
}

/**
 * Botão-link da marca. `variante`: 'ouro' (sólido) | 'contorno' | 'terra'.
 * Traz um brilho que atravessa o botão no hover.
 */
export function Botao({
  children,
  href,
  variante = 'ouro',
  icone = null,
  className = '',
  magnetico = true,
  ...props
}) {
  const base =
    'group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-7 py-3.5 font-sans text-[0.8rem] font-medium tracking-[0.16em] uppercase transition-colors duration-500'

  const variantes = {
    ouro: 'bg-ouro text-creme hover:bg-terra-escuro',
    terra: 'bg-terra-escuro text-creme hover:bg-ouro',
    contorno:
      'border border-terra/25 text-terra-escuro hover:border-terra-escuro hover:bg-terra-escuro hover:text-creme',
    // Vazado que preenche em dourado — combina com os ícones circulares
    // do cabeçalho, que usam o mesmo hover.
    'contorno-ouro':
      'border border-terra/20 text-terra-escuro hover:border-ouro hover:bg-ouro hover:text-creme',
  }

  const conteudo = (
    <>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
      />
      {icone}
      <span className="relative">{children}</span>
    </>
  )

  const el = (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noreferrer noopener' : undefined}
      className={`${base} ${variantes[variante]} ${className}`}
      {...props}
    >
      {conteudo}
    </a>
  )

  return magnetico ? <Magnet forca={0.22} raio={70}>{el}</Magnet> : el
}

/** Rótulo pequeno de seção: "· 01 · Sobre" */
export function RotuloSecao({ numero, children, className = '' }) {
  return (
    <div className={`flex items-center gap-3 text-terra/55 ${className}`}>
      <IconeFlor className="size-3.5 text-terra/40" />
      {numero && <span className="texto-fino tabular-nums">{numero}</span>}
      <span className="h-px w-8 bg-terra/25" />
      <span className="texto-fino">{children}</span>
    </div>
  )
}
