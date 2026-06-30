# ADR-001 · Estrutura de Lotes e Preços

**Status:** aceita
**Data:** decidido em maio/2026, lotes vigentes em jun/2026
**Decisores:** Arthur

## Contexto

A 3ª edição precisava de uma arquitetura de preços que sustentasse a meta de 150 inscritos e, ao mesmo tempo, o posicionamento premium da EPM. A edição 2 (2025) teve ticket médio de ~R$ 524; a 3ª edição salta para um patamar muito superior. Era preciso equilibrar urgência honesta, percepção de valor e a meta de fechar ~80% das inscrições cedo (até ~12/07).

## Decisão

Quatro níveis de preço:

| Lote | Preço | Janela |
|---|---|---|
| Lote 0 (privado, indicação alumni Avançada) | R$ 597 | 48h, fechado em 03/06 |
| Lote 1 (antecipado, público) | R$ 797 | até 12/07 ou 80 primeiras vagas |
| Lote 2 (intermediário) | R$ 1.097 | 13/07 a 14/08 |
| Lote 3 (final) | R$ 1.397 | 15/08 a 28/08 |

A virada do Lote 1 foi cravada em **12/07** (e não 19/07) para alinhar a subida de preço ao fim da janela-alvo de "80% cedo".

## Justificativa

- **Lotes decrescentes em duração** (L1 ~34 dias públicos / L2 33 dias / L3 14 dias) distribuem a pressão de forma crescente conforme o evento se aproxima — corrigindo o defeito do desenho anterior, em que o L2 durava ~50 dias e diluía a urgência no "vale do meio".
- **L1 até 12/07** faz a subida de preço cair exatamente no fim da janela onde se quer concentrar volume, trabalhando a favor da meta de 80%.
- **Teto do L3 em R$ 1.397:** Arthur rejeitou um teto mais baixo; o valor reflete o alinhamento entre valor percebido e posicionamento de marca. (Pushback fundamentado aceito.)
- **Trava das 80 primeiras vagas** sustenta a urgência por volume quando a urgência por preço enfraquece (L1 longo).

## Alternativas consideradas

- Estrutura de 3 lotes mais altos (R$ 1.300 / 1.500 / 1.700) considerada em fase inicial de planejamento — descartada em favor da estrutura atual, mais escalonada e com lote de entrada mais acessível (R$ 797), ampliando a base de conversão antecipada.
- L1 até 19/07 — descartado: a virada viria depois da janela-alvo, atrasando o gatilho de preço.

## Consequências

- Ticket médio real esperado fica em ~R$ 950-1.050 (não R$ 1.500). **Isso aperta a margem para tráfego pago** — o CAC máximo precisa ser recalculado com esse número (ver ADR-002).
- Receita de ingresso para 150 inscritos: ~R$ 140-155k (não ~R$ 225k).
- A LP precisa manter datas e preços sempre sincronizados com esta tabela.

## Pendências

- Nenhuma estrutural. Apenas garantir que toda peça (LP, e-mails, roteiros) reflita os valores e datas corretos.
