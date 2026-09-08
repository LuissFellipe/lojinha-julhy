// ─────────────────────────────────────────────────────────────
//  Configuração central da loja. Edite só aqui.
// ─────────────────────────────────────────────────────────────

export const LOJA = {
  nome: 'BELLIS',
  slogan: 'Seu cotidiano mais bonito.',
  cidade: 'Juiz de Fora · MG',

  // Formato internacional, só dígitos: 55 (Brasil) + 32 (DDD) + número
  whatsapp: '5532991640895',

  instagram: 'https://www.instagram.com/vistabellis/',
  instagramHandle: '@vistabellis',
  linktree: 'https://linktr.ee/VistaBELLIS',
}

/**
 * Monta o link do WhatsApp com uma mensagem pronta.
 * Sem emoji de propósito: nem todo teclado/versão do WhatsApp renderiza
 * o que vem pela URL, e o que quebra vira caractere solto no meio do texto.
 */
export function linkWhats(mensagem) {
  const texto = mensagem ?? MENSAGENS.geral
  return `https://wa.me/${LOJA.whatsapp}?text=${encodeURIComponent(texto)}`
}

/**
 * Mensagens de abertura. Cada botão do site manda uma diferente, então
 * você já sabe de onde a pessoa veio antes de responder.
 */
export const MENSAGENS = {
  geral:
    'Olá! Vim pelo site da BELLIS e gostaria de conhecer melhor as peças. Pode me ajudar?',

  catalogo:
    'Olá! Estava vendo o catálogo no site da BELLIS e quero fazer um pedido. Pode me passar as formas de pagamento e de entrega?',

  duvida:
    'Olá! Vim pelo site da BELLIS e fiquei com uma dúvida sobre tamanho e caimento. Pode me orientar?',
}

/** Link de WhatsApp já com nome, preço e opções da peça na mensagem. */
export function linkPeca(peca) {
  const linhas = [
    'Olá! Vim pelo site da BELLIS e me interessei por esta peça:',
    '',
    `${peca.nome} — ${peca.categoria}`,
    peca.preco,
  ]

  if (peca.cores?.length) {
    linhas.push(`Cores: ${peca.cores.map((c) => c.nome).join(', ')}`)
  }
  if (peca.tamanhos?.length) {
    linhas.push(`Tamanhos: ${peca.tamanhos.join(', ')}`)
  }

  // A pergunta muda: se a peça tem grade, ela já viu os tamanhos no site.
  linhas.push(
    '',
    peca.tamanhos?.length
      ? 'Ainda está disponível? Queria confirmar a cor e o tamanho.'
      : 'Ainda está disponível? Gostaria de saber os tamanhos.',
  )

  return linkWhats(linhas.join('\n'))
}
