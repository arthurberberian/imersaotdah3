# Diagnóstico — Landing Page Imersão TDAH 3ª Edição

**Objetivo deste documento:** mapear, de forma priorizada, o que ajustar na landing page (`index.html` + `assets/styles.css`) em quatro frentes — **SEO, performance, responsividade e acessibilidade** — com foco na experiência **mobile**. Nada foi alterado no código ainda. Este é o passo de diagnóstico que antecede a execução: você lê, decide o que entra, e só então eu mexo no código.

**Data:** 22/05/2026
**Arquivos analisados:** `index.html` (1.138 linhas), `assets/styles.css` (940 linhas), pasta `assets/` (23 imagens).

---

## Resumo executivo

| Área | Situação | Achado mais grave |
|---|---|---|
| **Performance** | 🔴 Crítica | `bruna-portrait.jpg` tem **9,3 MB / 4480×6720 px** |
| **SEO** | 🟡 Base boa, faltam itens | Sem dados estruturados de Evento (rich results) |
| **Acessibilidade** | 🟡 Ajustes pontuais | Contraste de botões e textos abaixo do mínimo AA |
| **Responsividade** | 🟡 Funcional, mas pesada | Topbar de 120 px + hero saturada no mobile |

A página é bem construída — estrutura semântica limpa, tipografia consistente, `alt` na maioria das imagens, foco de teclado estilizado. O problema número 1, de longe, é **peso de imagens**: a página carrega cerca de **16 MB**, e quase 10 MB são um único arquivo. Isso derruba a performance e, por consequência, o SEO (Core Web Vitals são fator de ranqueamento).

---

## 🔴 Crítico

### C1 · Imagem de 9,3 MB no ar

- **Área:** Performance
- **O que é:** `assets/bruna-portrait.jpg` tem 4480×6720 px e 9,3 MB — um arquivo direto da câmera. Na página ele aparece num espaço de no máximo ~600 px de largura (card do anfitrião).
- **Impacto:** sozinho, esse arquivo é ~60% do peso total da página. Em 4G mais lenta são vários segundos só para ele. Penaliza o LCP (Largest Contentful Paint) e a nota de performance do Google PageSpeed.
- **Onde:** `index.html`, linha 754.
- **Correção:** redimensionar para ~1200 px de largura e recomprimir (ou converter para WebP, como as imagens da hero). Cai para ~150–250 KB. **Economia: ~9 MB.**
- **Esforço:** baixo (1 imagem).

### C2 · Conjunto de imagens superdimensionadas

- **Área:** Performance
- **O que é:** além da `bruna-portrait`, estão maiores do que precisam:
  - `arthur-portrait.jpg` — 1360×2040, **1,2 MB**
  - `doc-1/2/3/5/6.jpg` — 1365×2048, **600–950 KB cada** (~3,9 MB somados), exibidas em miniaturas de ~150 px
  - `logo-branco.png` — 2695×938, **348 KB**, exibida a 64 px de altura
- **Impacto:** mais ~5,5 MB desnecessários. As `doc-*.jpg` aparecem numa faixa de miniaturas e não precisam de 2048 px de resolução.
- **Onde:** `index.html`, linhas 737, 627, 657–660, 1035.
- **Correção:** redimensionar cada imagem para ~2× o tamanho de exibição e converter para WebP. Total estimado pós-otimização: ~300–400 KB para todo o conjunto.
- **Esforço:** baixo–médio (dá para fazer em lote, por script, sem tocar no layout).

> **Resultado combinado C1 + C2:** a página sai de ~16 MB para ~2 MB. É o ajuste de maior impacto e menor risco de toda a lista.

---

## 🟠 Alto

### A1 · Sem dados estruturados de Evento (SEO)

- **Área:** SEO
- **O que é:** a página não tem JSON-LD com o schema `Event`. Para uma landing de evento, isso é a maior oportunidade de SEO perdida.
- **Impacto:** o Google não consegue exibir resultado enriquecido (data, local, faixa de preço, organizadores) na busca. Um evento com schema correto ganha destaque visual no SERP.
- **Onde:** `<head>` do `index.html`.
- **Correção:** adicionar um bloco `<script type="application/ld+json">` com `Event` — nome, `startDate` (2026-08-29), `location` (Salas Brasil, São Paulo), `offers` (R$ 797, lote 1), `performer` (Arthur e Bruna) e `organizer` (Escola do Psicólogo Master).
- **Esforço:** baixo.

### A2 · Contraste de cor abaixo do mínimo AA

- **Área:** Acessibilidade
- **O que é:** três combinações ficam abaixo do mínimo WCAG AA (4,5:1 para texto normal). Valores medidos:

  | Elemento | Contraste | Mínimo |
  |---|---|---|
  | Botões primários (texto sobre terracota) | **3,56:1** | 4,5:1 |
  | `.overline` (etiquetas "A tese", "Investimento"…) em seção clara | **3,35:1** | 4,5:1 |
  | `.footer-bot` (rodapé "© 2026…") | **2,95:1** | 4,5:1 |

- **Impacto:** leitura difícil para pessoas com baixa visão; reprovação garantida em auditoria automática (Lighthouse / aXe). Os botões afetam o site inteiro.
- **Onde:** `assets/styles.css` — `.btn-primary` (linha 93), `.overline` (linha 72), `.footer-bot` (linha 928).
- **Correção:** escurecer o terracota usado como fundo de botão (algo próximo de `--terracota-escuro #9E5328`) e ajustar os tons pequenos de texto citados.
- **Esforço:** baixo (ajuste de tokens de cor).

### A3 · Mobile baixa imagens da hero que não usa

- **Área:** Performance / Responsividade
- **O que é:** a hero carrega 3 imagens WebP com `loading="eager"`. No mobile, o CSS esconde 2 delas (`display:none`), mas o navegador **ainda baixa** as três (~415 KB desperdiçados no celular).
- **Onde:** `index.html`, linhas 548–552; regra mobile no `<style>` interno, linhas 373–374.
- **Correção:** usar `<picture>` com `source` por media query, ou repensar a estratégia do mosaico para que o mobile só requisite a imagem que vê.
- **Esforço:** médio.

---

## 🟡 Médio

### M1 · Open Graph / compartilhamento incompleto

- **Área:** SEO / Social
- **O que é:** `og:image` aponta para caminho **relativo** (`assets/hero-bruna.webp`) — deveria ser URL absoluta. Além disso, WebP não pré-visualiza de forma confiável no WhatsApp e em alguns apps. Faltam `og:url`, `twitter:card` e `twitter:image`.
- **Onde:** `index.html`, linhas 9–12.
- **Correção:** criar um card social dedicado em 1200×630 px (JPG ou PNG), referenciar por URL absoluta e adicionar as tags do Twitter e `og:url`.
- **Esforço:** baixo (mais o desenho do card).

### M2 · `<head>` incompleto

- **Área:** SEO
- **O que é:** sem `<link rel="canonical">`, sem favicon / `apple-touch-icon`, sem `theme-color`.
- **Correção:** completar essas tags. Itens simples, mas que contam em auditoria e na aparência em aba/celular.
- **Esforço:** baixo.

### M3 · Topbar de 120 px engole o primeiro quadro no mobile

- **Área:** Responsividade
- **O que é:** a barra fixa tem 120 px de altura, inclusive no mobile. Numa tela de ~780 px de altura útil, são ~15% do viewport consumidos antes de a hero começar. Isso **agrava a sensação de hero saturada** que você notou.
- **Onde:** `assets/styles.css`, `--topbar-h:120px` (linha 39 e linha 212 no breakpoint mobile).
- **Correção:** compactar a topbar no mobile (linha única de ~64–72 px, contagem regressiva menor ou só dias/horas). Recomendo tratar isso **junto** com o redesenho da hero.
- **Esforço:** médio.

### M4 · Âncoras param escondidas sob a topbar

- **Área:** Responsividade / UX
- **O que é:** o JavaScript de rolagem usa deslocamento de 110 px, mas a topbar tem 120 px. Ao clicar em "Programa", "Investimento" etc., a seção para ~10 px atrás da barra.
- **Onde:** `index.html`, linha 1112 (`const offset = 110`).
- **Correção:** trocar 110 por 128 (altura da barra + folga).
- **Esforço:** trivial.

### M5 · Animações ignoram "reduzir movimento"

- **Área:** Acessibilidade
- **O que é:** não há tratamento de `prefers-reduced-motion`. As animações de revelação (`.reveal`) e a rolagem suave rodam mesmo para quem pediu menos movimento no sistema (relevante para enxaqueca, vertigem, sensibilidade vestibular).
- **Onde:** `assets/styles.css`, `.reveal` (linha 114), `html{scroll-behavior:smooth}` (linha 44).
- **Correção:** adicionar `@media (prefers-reduced-motion: reduce)` desligando transições e rolagem suave.
- **Esforço:** baixo.

### M6 · Conteúdo depende de JavaScript para aparecer

- **Área:** Acessibilidade / Resiliência
- **O que é:** `.reveal` começa com `opacity:0` e só fica visível quando o `IntersectionObserver` dispara. Se o JS falhar ou o observer não rodar, **seções inteiras ficam invisíveis**.
- **Onde:** `assets/styles.css`, linha 114.
- **Correção:** fallback que garanta o conteúdo visível sem JS (classe `no-js`, ou animação que se autorresolve).
- **Esforço:** baixo.

---

## 🟢 Baixo

### B1 · Menu hambúrguer sem estado acessível
O botão tem `aria-label="Menu"` fixo e não expõe `aria-expanded`. Leitor de tela não anuncia se o menu está aberto ou fechado. Adicionar `aria-expanded` alternado e trocar o rótulo para "Fechar menu" quando aberto. (`index.html`, linha 508; script linhas 1058–1069.)

### B2 · CSS morto / legado
Há regras que não correspondem a nenhum elemento atual: estilos mobile da hero antiga referenciando `.ph-stage` / `.ph-mid-top` (`styles.css` 359–370), o mosaico antigo `.mosaic` / `.edicoes-head` / `.edicoes-quote` (372–429), o `#manifesto` centralizado antigo (431–447) e `.zumbi-placeholder` (482–493). Some-se a isso o uso intenso de `!important` no `<style>` interno. Não quebra nada, mas dificulta manutenção. Vale uma limpeza.

### B3 · Áreas de toque pequenas no mobile
O CTA da topbar (~30 px de altura) e o link "Ver a experiência" na hero (~25 px) ficam abaixo dos 44 px recomendados para alvos de toque.

### B4 · Fontes: 3 famílias, muitos pesos
São carregados Manrope (6 pesos), Fraunces (eixo óptico completo, vários pesos, itálico) e JetBrains Mono (3 pesos). Reduzir para os pesos efetivamente usados acelera o carregamento. (`index.html`, linha 16.)

### B5 · Sobras de page-builder
Atributos `data-screen-label`, `<style id="__om-edit-overrides">` vazio e `<template id="__bundler_thumbnail">` são resíduos da ferramenta de edição. Inofensivos, mas podem ser removidos.

---

## Ordem de execução sugerida

1. **Otimizar imagens** (C1 + C2) — maior ganho, menor risco. Feito por script, sem tocar no layout.
2. **Contraste AA** (A2) — ajuste de tokens de cor.
3. **Event schema + Open Graph** (A1 + M1) — SEO.
4. **Hero mobile** — conforme a variante que você escolher (ver mockup comparativo).
5. **Acabamento** — âncoras (M4), reduced-motion (M5), fallback de JS (M6), `aria` do menu (B1), limpeza de CSS morto (B2).

---

## Hero mobile — decisão pendente

Sua leitura está correta: **dois botões empilhados + subtítulo longo + duas linhas de data realmente saturam o primeiro quadro no celular**. Some isso aos 120 px de topbar (item M3) e quase metade da primeira tela vira "moldura" antes de a mensagem aparecer.

Preparei um comparativo visual (no chat) com três variantes de layout e copy. A recomendação é: **uma frase curta e curada + um botão primário**, com "Ver a experiência" rebaixado a link leve em vez de bloco. O desktop mantém as frases completas. Escolha a variante e a copy, e aí eu executo.
