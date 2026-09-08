# BELLIS — Vitrine

Site vitrine da BELLIS (Juiz de Fora · MG): catálogo de peças com contato direto
por WhatsApp. React + Vite + Tailwind, com animações em GSAP.

## Rodando

Com Node instalado:

```bash
npm install
npm run dev      # http://localhost:5173
```

Ou via Docker (hot reload já configurado para bind mount em HD externo):

```bash
docker compose up
```

Build de produção:

```bash
npm run build    # gera dist/
npm run preview
```

## Estrutura

| Caminho              | O que é                                              |
| -------------------- | ---------------------------------------------------- |
| `src/config.js`      | Dados da loja (nome, WhatsApp, redes). Edite só aqui. |
| `src/data/produtos.js` | Catálogo de peças.                                  |
| `src/secoes/`        | Seções da página (Hero, Catálogo, Sobre, Contato…).   |
| `src/components/`    | Componentes reutilizáveis de UI.                      |
| `public/produtos/`   | Fotos das peças.                                      |
