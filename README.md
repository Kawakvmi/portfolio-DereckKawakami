# Portfólio - Dereck Kawakami

Portfólio online desenvolvido em React, com seções de apresentação, projetos, habilidades e contato.

## Tecnologias
- React (Vite)
- CSS Modules
- GitHub Pages (deploy via gh-pages)

## Seções do portfólio
- Início (resumo profissional)
- Projetos (lista + detalhes em modal)
- Habilidades
- Sobre mim (com imagem)
- Contato (formulário simples via mailto)

## Projetos apresentados
- Agência Criativa Web (SCSS + BEM + Responsividade)
- Gestor de Clientes (CRUD com Fetch API)
- Simulador de Parquímetro (POO + cálculo de tempo e troco)
- FitDaily PRO (MVP em andamento - extra)

## Rodar localmente
1. Instalar dependências:
   - npm install
2. Rodar:
   - npm run dev

## Build
- npm run build
- npm run preview

## Deploy (GitHub Pages)
Este projeto usa o pacote `gh-pages`.

1. Confirme o `base` no `vite.config.js` com o nome do repositório:
   - base: "/portfolio-DereckKawakami/"

2. Publicar:
   - npm run deploy

3. No GitHub:
   - Settings > Pages
   - Branch: `gh-pages` e folder `/ (root)`

Link do site (depois de publicado):
- https://SEU-USUARIO.github.io/portfolio-DereckKawakami/