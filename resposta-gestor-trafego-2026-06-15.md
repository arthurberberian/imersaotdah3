# Resposta ao gestor de tráfego — leitura do funil (15/06/2026)

**Objetivo (uma linha):** traduzir os números do gestor (4 carrinhos, 12,5%, 78% de carregamento, 0 vendas) em diagnóstico de funil e decidir o que fazer — sem reagir a ruído de <24h.

---

## TL;DR

Não há nada quebrado. **0 vendas em ~32 visitas e menos de 24h não é sinal de conversão — é amostra insuficiente.** O topo do funil está ótimo (12,5% de carrinho é forte para um ticket de R$ 797). O que falta não é "consertar a página": é **volume suficiente para ler o funil** e **duas alavancas de checkout** (PIX com desconto + coerência de marca). Pode desligar o Advantage, desde que o público não fique tão estreito a ponto de não gerar dados.

---

## Os números, traduzidos

| Métrica reportada | Leitura |
|---|---|
| 78% de carregamento | ~22% saem antes da página abrir. Em ticket alto + Advantage, isso é majoritariamente **clique acidental de posicionamento amplo**, não defeito da página. "Ok", como você disse. |
| 4 adições ao carrinho = 12,5% | Implica **~32 visitantes** que carregaram (4 ÷ 0,125). E ~41 cliques no link (32 ÷ 0,78). |
| 0 vendas | Com **4 carrinhos**, o esperado é ~1–2 vendas mesmo num checkout ótimo. **0 ainda cai dentro do ruído.** |

**Conclusão estatística:** com 32 visitas você não tem amostra para concluir nada sobre venda. Precisa de **~150–300 cliques** para ter um sinal honesto de conversão de compra.

---

## Onde está (e onde NÃO está) o gargalo

**Não está no topo.** 12,5% de carrinho para um ticket de R$ 797 é forte — a página e a oferta comunicam bem. Não mexa na persuasão da página por causa disso.

**Está no carrinho → compra — e a causa principal é tempo + amostra, não defeito de checkout.** Auditei o checkout do Green ao vivo hoje:

- Formulário **curto**: nome, e-mail, telefone, CPF. Sem fricção excessiva.
- **Três meios de pagamento**: cartão (12x de R$ 81,94), PIX, boleto.
- Selo "compra 100% segura", campo de cupom, resumo do pedido claro.
- O link da LP (`/ngeafnx`) cai corretamente na seleção de ingresso. Fluxo de 2 passos (selecionar ingresso → "Comprar ingressos" → formulário) é padrão de ticketing, não defeito.

Por que 0 compras com 4 carrinhos, então? **Compra de R$ 797 para um sábado presencial em SP é decisão refletida** — a pessoa checa agenda, deslocamento e finanças, adiciona ao carrinho e sai para decidir. Menos de 24h é cedo demais para essa categoria.

---

## Achados concretos no checkout (alavancas reais, corrigíveis)

1. **PIX sem desconto.** O Green cobra **R$ 797 no PIX**, igual ao cartão à vista. O contexto do projeto previa "PIX com desconto". Um desconto à vista no PIX (ex.: 5–10%) é uma das alavancas mais fortes em ticket alto — reduz fricção de preço **sem queimar a marca**. → Decidir: configurar no Green ou remover a promessa do contexto.
2. **Criativo do Green destoa da voz EPM.** O banner do checkout ("ENTENDA E DOMINE", "INSCREVA-SE AGORA") é mais "infoproduto" que a LP institucional. Coerência no momento do pagamento sustenta a confiança do público sênior.
3. **Timer de 10 min na reserva** (padrão Green). Para compra refletida, pressão de tempo pode empurrar abandono. Baixa prioridade — apenas observar.

---

## O que já corrigi hoje na LP

- O problema crítico de imagens pesadas do diagnóstico de maio (página de ~16 MB, foto de 9,3 MB) **já estava resolvido** (commit `42a2e98`). A página hoje pesa ~2,7 MB.
- Apliquei a **única melhoria de carregamento segura que faltava**: o hero no mobile deixa de baixar 2 imagens que ficavam ocultas (~424 KB economizados no celular, onde cai a maior parte do tráfego pago).
- Ganho adicional possível: enxugar as fontes (3 famílias, muitos pesos). **Recomendo, mas não fiz às cegas** — exige checar quais pesos a página realmente usa.

> Nota honesta: o carregamento **não é** onde o dinheiro está sendo perdido. 78% é aceitável e ligado a público/posicionamento, não à página.

---

## Sobre desligar o Advantage (público envolvimento 365)

Razoável — mais controle, público mais qualificado. **Mas reduz ainda mais o volume**, e o envolvimento 365 já é pequeno (gerou ~32 visitas). Risco: concluir "não vende" a partir de uma amostra que ficou ainda menor.

Enquadramento que não pode se perder (ADR-002): **o tráfego frio só precisa entregar ~60 dos 150** inscritos; base própria + parcerias carregam ~60%. Reagir a <24h de microdado de público quente, cortando setup e orçamento, contradiz o plano. Estamos a **~27 dias da virada do Lote 1** — há tempo, desde que o volume seja alimentado.

---

## Mensagem pronta para o gestor (copiar/colar)

> Olhei os números. Resumo: **não dá pra concluir nada de venda ainda** — 0 vendas em ~32 visitas e menos de 24h é amostra pequena demais (esperaríamos ~1–2 vendas só com 4 carrinhos, e 0 ainda é ruído). O importante: **12,5% de carrinho está ótimo** pra um ticket de R$ 797, então a página e a oferta estão funcionando.
>
> O que eu peço:
> 1. Pode desligar o Advantage, **mas não estreite o público a ponto de não gerar dados.** Preciso de ~150–300 cliques pra ler conversão de venda com honestidade.
> 2. Vamos definir **teto de gasto + janela** (ex.: R$ ___ em 5–7 dias) antes de qualquer veredito. Sem isso, ficamos otimizando ruído.
> 3. Próximo passo de volume: além do envolvimento 365, abrir **lookalike de leads/compradores e frio segmentado por interesse profissional, com peso em SP/Grande SP** (o evento é presencial).
> 4. Confirma pra mim se o **pixel de AddToCart e Purchase está disparando certo a partir do Green**? É a base de toda leitura de funil.

---

## Pendências / decisões em aberto (o que falta cravar)

- [ ] **Desconto PIX no Green** — configurar (ex.: 5–10% à vista) ou remover a promessa do `00-CONTEXTO`. *(Arthur / financeiro)*
- [ ] **Inconsistência de data do Lote 1** — LP e Green dizem **09–10/07**; `00-CONTEXTO` diz 12–13/07. Reconciliar (provavelmente atualizar o contexto para 09/07). *(Arthur)*
- [ ] **Teto de gasto + janela de teste** antes de veredito de conversão (ADR-002: R$ 12k vs 18k segue em aberto). *(Arthur / gestor)*
- [ ] **Geo do público de tráfego** — confirmar peso de SP/Grande SP. *(gestor)*
- [ ] **Criativo do checkout no Green** alinhado à voz EPM. *(Arthur / design)*
- [ ] **Verificar disparo do pixel AddToCart/Purchase** a partir do Green (atribuição). *(gestor)*
- [ ] **Opcional:** enxugar fontes da LP (checar pesos usados). *(eu, se aprovado)*

---

## Gatilho de alerta (quando isto vira problema de verdade)

Aí sim repensar página/oferta, **não antes**: se com **150+ visitantes** e **15+ carrinhos** a conversão de venda ficar **abaixo de ~1%** — ou se o pixel revelar que ninguém chega ao passo de pagamento no Green.
