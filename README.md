# Imersão Clínica EPM — 3ª Edição · Repositório de Projeto (Cowork)

Este repositório é a **camada de contexto** do projeto. Ele não guarda os entregáveis finais (LP, sequências, roteiros) — guarda o conhecimento que torna qualquer nova conversa no Cowork imediatamente situada: o que é o projeto, o que já foi decidido e por quê, como falar na voz da marca, e o que significa "pronto".

**Última atualização do estado:** 15 de junho de 2026.

---

## Como usar este repositório

**Ao abrir uma nova conversa no Cowork**, comece pedindo que o assistente leia, nesta ordem:

1. `00-CONTEXTO-PROJETO.md` — o que é o evento, metas, estado atual
2. `04-STATUS-E-BACKLOG.md` — onde estamos hoje e o que vem a seguir
3. O ADR relevante em `decisoes/` (se a tarefa toca uma decisão já tomada)

Para tarefas de escrita (copy, e-mail, roteiro, post), leia também:
4. `02-VOZ-EPM.md` — o filtro de marca, obrigatório
5. `03-DEFINITION-OF-DONE.md` — o checklist de "pronto" para o tipo de entrega

**Prompt de partida sugerido (cole no início de uma nova conversa):**

> "Estou retomando o projeto Imersão Clínica EPM 3ª Edição. Leia `00-CONTEXTO-PROJETO.md`, `04-STATUS-E-BACKLOG.md` e `02-VOZ-EPM.md` antes de começar. A tarefa de hoje é: [descrever]. Ao final, valide a entrega contra o `03-DEFINITION-OF-DONE.md`."

---

## Mapa de arquivos

| Arquivo | O que contém | Quando consultar |
|---|---|---|
| `00-CONTEXTO-PROJETO.md` | Fato-base do evento, metas, números, estrutura comercial | Sempre, primeiro |
| `01-MEMORIA-ARTHUR.md` | Como Arthur trabalha, decide e prefere | Tarefas de estratégia/escrita |
| `02-VOZ-EPM.md` | Filtro de marca (tom, o que evitar) | Qualquer copy ou conteúdo |
| `03-DEFINITION-OF-DONE.md` | DoD por tipo de entrega | Antes de fechar qualquer entrega |
| `04-STATUS-E-BACKLOG.md` | Estado atual, pendências, próximos passos | Sempre, segundo |
| `decisoes/ADR-000-template.md` | Modelo para novas decisões | Ao registrar uma decisão nova |
| `decisoes/ADR-001` … `ADR-007` | Decisões já tomadas, com justificativa | Quando a tarefa toca a decisão |

---

## Entregáveis do projeto (vivem na pasta do projeto, não aqui)

- `index.html` / `obrigado.html` — landing page publicada e página de obrigado
- `design-system-epm.html` — sistema de design da marca
- `imersao-tdah-3a-edicao-boneco.docx` — boneco/documento-mãe da edição
- `fase-0-antessala-privada-imersao-tdah.md` — playbook da Fase 0 (executado)
- `peca-2-parcerias-institucionais-imersao-tdah.md` — playbook de parcerias
- `roteiro-gravacao-bruna-tecnologia-cognicao-tdah.md` — roteiro das 9 peças de vídeo

---

## Princípio de manutenção

Este repositório é vivo. Sempre que uma decisão significativa for tomada, **registre um ADR novo** (copie o template). Sempre que o estado mudar (lote virou, peça entrou no ar, parceria fechou), **atualize `04-STATUS-E-BACKLOG.md`**. Um repositório desatualizado é pior que nenhum: ele situa a conversa no passado.
