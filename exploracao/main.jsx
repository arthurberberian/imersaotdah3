/* ============================================================
   MAIN — Composes all variants into a DesignCanvas
   ============================================================ */

const { DesignCanvas, DCSection, DCArtboard, DCPostIt } = window;

const T2 = window.EPM_TOKENS;

/* Tiny inline component for the intro panel at top of the canvas */
function IntroPanel(){
  return (
    <div style={{
      width:920, padding:'32px 36px',
      background:'#fff',
      border:'1px solid rgba(0,0,0,0.08)',
      borderRadius:8,
      boxShadow:'0 2px 8px rgba(0,0,0,0.04)',
      fontFamily:"'Manrope', sans-serif",
      color:'#1f2937',
    }}>
      <div style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:500,fontSize:28,letterSpacing:'-0.02em',margin:'0 0 14px',color:T2.navy}}>
        Bloco de exploração — antes de mexer no <code style={{fontFamily:"'JetBrains Mono', monospace",fontSize:18,background:'#f3f0e8',padding:'2px 6px',borderRadius:3}}>index.html</code>
      </div>
      <p style={{fontSize:14.5,lineHeight:1.65,color:'#4a5568',margin:'0 0 14px'}}>
        Cada seção abaixo apresenta uma <strong>ideia que você levantou</strong>, com <strong>3 variantes em mid-fi</strong>, sempre mostrando <strong>desktop + mobile lado a lado</strong>. Use as setas no canto direito de cada artboard para abrir em fullscreen. As fotos das "edições anteriores" são reais; as de "zumbis digitais" são <em>placeholders briefados</em> (precisamos buscar/produzir).
      </p>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:14,marginTop:18,paddingTop:18,borderTop:'1px solid rgba(0,0,0,0.06)'}}>
        <div>
          <div style={{fontSize:10,letterSpacing:'0.18em',fontWeight:700,color:T2.terra,textTransform:'uppercase',marginBottom:6}}>SEÇÕES</div>
          <div style={{fontSize:13,color:'#1f2937',lineHeight:1.6}}>
            A · Countdown / 3ª edição<br/>
            B · Hero — tipografia<br/>
            B-fade · Tratamento de fotos<br/>
            C · Edições anteriores<br/>
            D · Tensão clínica (zumbis)<br/>
            E · O que você leva
          </div>
        </div>
        <div>
          <div style={{fontSize:10,letterSpacing:'0.18em',fontWeight:700,color:T2.terra,textTransform:'uppercase',marginBottom:6}}>PALETA</div>
          <div style={{display:'flex',gap:4,marginBottom:8}}>
            {[T2.navy, T2.navy2, T2.terra, T2.terraClaro, T2.areia, T2.off].map((c,i)=>(
              <div key={i} title={c} style={{width:28,height:28,background:c,borderRadius:4,border:'1px solid rgba(0,0,0,0.08)'}}></div>
            ))}
          </div>
          <div style={{fontSize:11.5,color:'#4a5568',lineHeight:1.5}}>
            Fraunces italic · Manrope · JetBrains Mono
          </div>
        </div>
        <div>
          <div style={{fontSize:10,letterSpacing:'0.18em',fontWeight:700,color:T2.terra,textTransform:'uppercase',marginBottom:6}}>COMO USAR</div>
          <div style={{fontSize:12.5,color:'#4a5568',lineHeight:1.6}}>
            Aponte para cada variante. Diga quais te interessam (pode misturar A2 + B1 + C1 + E2, etc). Eu então aplico no <code style={{fontFamily:"'JetBrains Mono', monospace",fontSize:11,background:'#f3f0e8',padding:'1px 4px'}}>index.html</code>.
          </div>
        </div>
      </div>
    </div>
  );
}

function Diagnostico({title, body}){
  return (
    <div style={{
      width:560, padding:'20px 22px',
      background:'#fef4a8',
      borderRadius:6,
      fontFamily:"'Manrope', sans-serif",
      color:'#5a4a2a',
      boxShadow:'2px 3px 0 rgba(0,0,0,0.06)',
      transform:'rotate(-0.5deg)',
    }}>
      <div style={{fontSize:10,letterSpacing:'0.18em',fontWeight:700,textTransform:'uppercase',marginBottom:6,opacity:0.7}}>
        ↳ DIAGNÓSTICO
      </div>
      <div style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontSize:18,fontWeight:500,lineHeight:1.25,marginBottom:8,color:'#3a2a10'}}>
        {title}
      </div>
      <div style={{fontSize:13,lineHeight:1.55}}>{body}</div>
    </div>
  );
}

function App(){
  return (
    <DesignCanvas>

      {/* ============ INTRO ============ */}
      <DCSection id="intro" title="Exploração · Seções da Landing Page" subtitle="Cada ideia que você trouxe — em 3 variantes, mobile + desktop">
        <DCArtboard id="intro-card" label="Briefing" width={920} height={280}>
          <IntroPanel/>
        </DCArtboard>
      </DCSection>

      {/* ============ A · COUNTDOWN ============ */}
      <DCSection id="A" title="A · Countdown — 'localizar' o usuário na 3ª edição"
        subtitle="Problema: ao entrar, demora pra perceber que é a 3ª edição. Solução: marcador visual + timer.">
        <DCArtboard id="A-diag" label="Diagnóstico" width={560} height={170}>
          <Diagnostico
            title="A primeira impressão precisa dizer '3ª edição · TDAH na era digital · faltam X dias'."
            body="Hoje a hero começa pela tese ('Nem toda desatenção…'), o que é forte — mas a pessoa não sabe ONDE está. Um marcador visual fixo de edição + countdown resolve isso em <1s."
          />
        </DCArtboard>
        <DCArtboard id="A1-d" label="A1 · Top-bar sticky · Desktop" width={1200} height={520}>
          <A1_StickyTopBar_Desktop/>
        </DCArtboard>
        <DCArtboard id="A1-m" label="A1 · Top-bar sticky · Mobile" width={390} height={520}>
          <A1_StickyTopBar_Mobile/>
        </DCArtboard>
        <DCArtboard id="A2-d" label="A2 · Countdown editorial dentro do hero · Desktop" width={1200} height={520}>
          <A2_EditorialCountdown_Desktop/>
        </DCArtboard>
        <DCArtboard id="A2-m" label="A2 · Countdown editorial dentro do hero · Mobile" width={390} height={520}>
          <A2_EditorialCountdown_Mobile/>
        </DCArtboard>
        <DCArtboard id="A3-d" label="A3 · Glass pill flutuante · Desktop" width={1200} height={520}>
          <A3_FloatingPill_Desktop/>
        </DCArtboard>
        <DCArtboard id="A3-m" label="A3 · Glass pill flutuante · Mobile" width={390} height={520}>
          <A3_FloatingPill_Mobile/>
        </DCArtboard>
        <DCPostIt x={920} y={620} width={300}>
          <strong>Minha recomendação:</strong> <strong>A1 (Top-bar sticky)</strong> resolve melhor o problema de "onde estou?" — fica visível 100% do tempo, mesmo após scroll. A2 é mais editorial mas só aparece na primeira tela. A3 é o mais elegante mas concorre com o CTA.
        </DCPostIt>
      </DCSection>

      {/* ============ B · HERO TIPOGRAFIA ============ */}
      <DCSection id="B" title="B · Hero — tipografia + tratamento documental"
        subtitle="3 caminhos tipográficos + comparação dos 4 estilos de fade nas fotos do mosaico.">
        <DCArtboard id="B-diag" label="Diagnóstico" width={560} height={180}>
          <Diagnostico
            title="O hero precisa de um título que 'pare a página', sem clichê de fonte."
            body="As 3 variantes exploram: editorial híbrido (Fraunces gigante), magazine (Manrope ExtraBold massivo + Fraunces como suporte) e documental silencioso (fotos dominam, tipo aparece como legenda). Todas mantêm Fraunces + Manrope, sem trocar a família."
          />
        </DCArtboard>
        <DCArtboard id="B1-d" label="B1 · Editorial híbrido · Desktop" width={1200} height={620}>
          <B1_HeroEditorial_Desktop/>
        </DCArtboard>
        <DCArtboard id="B1-m" label="B1 · Editorial híbrido · Mobile" width={390} height={620}>
          <B1_HeroEditorial_Mobile/>
        </DCArtboard>
        <DCArtboard id="B2-d" label="B2 · Magazine headline · Desktop" width={1200} height={680}>
          <B2_HeroMagazine_Desktop/>
        </DCArtboard>
        <DCArtboard id="B2-m" label="B2 · Magazine headline · Mobile" width={390} height={620}>
          <B2_HeroMagazine_Mobile/>
        </DCArtboard>
        <DCArtboard id="B3-d" label="B3 · Documental silencioso · Desktop" width={1200} height={620}>
          <B3_HeroDocumental_Desktop/>
        </DCArtboard>
        <DCArtboard id="B3-m" label="B3 · Documental silencioso · Mobile" width={390} height={620}>
          <B3_HeroDocumental_Mobile/>
        </DCArtboard>
        <DCArtboard id="B4-fades" label="B-fade · Tratamento das fotos (4 opções)" width={1200} height={380}>
          <B4_FadeTreatments_Comparison/>
        </DCArtboard>
        <DCPostIt x={920} y={720} width={300}>
          <strong>Sobre o fade:</strong> a opção <strong>Corners</strong> é a que mais responde ao seu pedido ("fotos emergindo do fundo, bordas sumindo nos 4 cantos"). Duotone vem em segundo se a gente quiser coesão visual mais forte com o navy.
        </DCPostIt>
      </DCSection>

      {/* ============ C · EDIÇÕES ANTERIORES ============ */}
      <DCSection id="C" title="C · Edições anteriores — registro documental"
        subtitle="Função: provar que o evento existe como experiência real, logo após o hero (antes do manifesto).">
        <DCArtboard id="C-diag" label="Diagnóstico" width={560} height={180}>
          <Diagnostico
            title="Antes de explicar a tese, mostrar que já aconteceu."
            body="A pessoa precisa SENTIR a sala — sala cheia, pessoas anotando, palco. As 3 variantes têm o mesmo conteúdo (fotos das edições 01/02), tratamento duotone navy, mas estruturas diferentes: mosaico assimétrico, scroll cinema, ou ensaio fotográfico com narrativa."
          />
        </DCArtboard>
        <DCArtboard id="C1-d" label="C1 · Mosaico editorial · Desktop" width={1200} height={780}>
          <C1_Mosaic_Desktop/>
        </DCArtboard>
        <DCArtboard id="C1-m" label="C1 · Mosaico editorial · Mobile" width={390} height={780}>
          <C1_Mosaic_Mobile/>
        </DCArtboard>
        <DCArtboard id="C2-d" label="C2 · Cinema scroll · Desktop" width={1200} height={560}>
          <C2_CinemaScroll_Desktop/>
        </DCArtboard>
        <DCArtboard id="C2-m" label="C2 · Cinema scroll · Mobile" width={390} height={460}>
          <C2_CinemaScroll_Mobile/>
        </DCArtboard>
        <DCArtboard id="C3-d" label="C3 · Photo essay + estatística · Desktop" width={1200} height={700}>
          <C3_PhotoEssay_Desktop/>
        </DCArtboard>
        <DCArtboard id="C3-m" label="C3 · Photo essay + estatística · Mobile" width={390} height={760}>
          <C3_PhotoEssay_Mobile/>
        </DCArtboard>
        <DCPostIt x={920} y={500} width={300}>
          <strong>Mobile:</strong> C1 e C3 funcionam bem empilhados. C2 (scroll horizontal) é o mais natural pra mobile mas precisa de "indicação de arraste" forte — incluímos.
        </DCPostIt>
      </DCSection>

      {/* ============ D · ZUMBIS / TENSÃO ============ */}
      <DCSection id="D" title="D · Tensão clínica — 'zumbis digitais'"
        subtitle="Geração de identificação imediata. Sua ideia das pessoas submersas em tecnologia.">
        <DCArtboard id="D-diag" label="Diagnóstico + briefing fotográfico" width={560} height={210}>
          <Diagnostico
            title="Você ainda não tem as fotos. As variantes mostram o LUGAR delas + o briefing pra produzir/buscar."
            body="Recomendação: contratar 1 ensaio fotográfico curto OU comprar 4-6 imagens de banco (Unsplash editorial, Getty). B&W com leve duotone navy. Pessoas em ambientes saturados por telas — nunca close em rosto inteiro (questão de privacidade)."
          />
        </DCArtboard>
        <DCArtboard id="D1-d" label="D1 · Díptico antes/sala · Desktop" width={1200} height={620}>
          <D1_Diptych_Desktop/>
        </DCArtboard>
        <DCArtboard id="D1-m" label="D1 · Díptico antes/sala · Mobile" width={390} height={620}>
          <D1_Diptych_Mobile/>
        </DCArtboard>
        <DCArtboard id="D2-d" label="D2 · Grade de observação clínica · Desktop" width={1200} height={840}>
          <D2_ObservationGrid_Desktop/>
        </DCArtboard>
        <DCArtboard id="D2-m" label="D2 · Grade de observação clínica · Mobile" width={390} height={1020}>
          <D2_ObservationGrid_Mobile/>
        </DCArtboard>
        <DCArtboard id="D3-d" label="D3 · Full-bleed + manifesto · Desktop" width={1200} height={560}>
          <D3_FullBleed_Desktop/>
        </DCArtboard>
        <DCArtboard id="D3-m" label="D3 · Full-bleed + manifesto · Mobile" width={390} height={640}>
          <D3_FullBleed_Mobile/>
        </DCArtboard>
        <DCPostIt x={920} y={620} width={320}>
          <strong>D2 é o mais arriscado e o mais memorável.</strong> "6 casos que aparecem toda semana" gera identificação por reconhecimento. Mas precisa de copy real (de você) + 6 fotos. D1 e D3 podem coexistir — D3 logo após o hero (manifesto), D1 mais adiante (tensão de diagnóstico).
        </DCPostIt>
      </DCSection>

      {/* ============ E · O QUE VOCÊ LEVA ============ */}
      <DCSection id="E" title="E · O que você vai levar — versão premium do print 2"
        subtitle="Sem ícones, copy mais sofisticado, sem 'cards genéricos com sombra'.">
        <DCArtboard id="E-diag" label="Diagnóstico" width={560} height={180}>
          <Diagnostico
            title="O print 2 funciona pela densidade — mas os ícones genéricos rebaixam o tom."
            body="As 3 variantes mantêm a estrutura (5 entregas) mas substituem ícones por: numerais grandes em Fraunces italic (E1), entrada de dicionário (E2), ou pull-quote editorial (E3). E3 muda o approach: vira 'perguntas que você leva', não 'o que você aprende' — mais coerente com o tom do evento."
          />
        </DCArtboard>
        <DCArtboard id="E1-d" label="E1 · Numerais editoriais · Desktop" width={1200} height={780}>
          <E1_NumberedCards_Desktop/>
        </DCArtboard>
        <DCArtboard id="E1-m" label="E1 · Numerais editoriais · Mobile" width={390} height={920}>
          <E1_NumberedCards_Mobile/>
        </DCArtboard>
        <DCArtboard id="E2-d" label="E2 · Entrada de dicionário (light) · Desktop" width={1200} height={780}>
          <E2_Dictionary_Desktop/>
        </DCArtboard>
        <DCArtboard id="E2-m" label="E2 · Entrada de dicionário (light) · Mobile" width={390} height={880}>
          <E2_Dictionary_Mobile/>
        </DCArtboard>
        <DCArtboard id="E2b-d" label="★ E2b · Prático light (escolha) · Desktop · COM borda terracota" width={1200} height={900}>
          <E2b_Pratico_Desktop/>
        </DCArtboard>
        <DCArtboard id="E2b-noborder-d" label="E2b · Prático light · Desktop · SEM borda" width={1200} height={900}>
          <E2b_Pratico_NoBorder_Desktop/>
        </DCArtboard>
        <DCArtboard id="E2b-m" label="★ E2b · Prático light (escolha) · Mobile" width={390} height={1180}>
          <E2b_Pratico_Mobile/>
        </DCArtboard>
        <DCArtboard id="E3-d" label="E3 · Perguntas / pull-quote · Desktop" width={1200} height={560}>
          <E3_PullQuote_Desktop/>
        </DCArtboard>
        <DCArtboard id="E3-m" label="E3 · Perguntas / pull-quote · Mobile" width={390} height={680}>
          <E3_PullQuote_Mobile/>
        </DCArtboard>
        <DCPostIt x={920} y={620} width={320}>
          <strong>★ Escolha aplicada em E2b:</strong> mantém o tom claro do E2 + adapta a copy do E3 para tom prático ("você sai sabendo investigar/abordar", não "você sai com perguntas melhores"). Acrescentei glow areia no topo + glow central radial em cada card. Duas versões para decidir: COM borda terracota fina e SEM borda — comparar lado a lado.
        </DCPostIt>
      </DCSection>

      {/* ============ F · ESTRUTURA DA PÁGINA ============ */}
      <DCSection id="F" title="F · Reordenação da página (texto colado, 343 linhas)"
        subtitle="Mapa lado a lado: ordem atual da LP vs ordem proposta no seu briefing.">
        <DCArtboard id="F-compare" label="Comparação de estrutura · atual vs proposto" width={1200} height={680}>
          <EstruturaComparativa/>
        </DCArtboard>
      </DCSection>

    </DesignCanvas>
  );
}

/* ============================================================
   F — Estrutura comparativa
   ============================================================ */
function EstruturaComparativa(){
  const atual = [
    {n:'01', t:'Hero documental', s:'mosaico documental + tese'},
    {n:'02', t:'Manifesto', s:'tese conceitual densa'},
    {n:'03', t:'Tese', s:'continuação argumentativa'},
    {n:'04', t:'Caso longitudinal', s:'narrativa clínica'},
    {n:'05', t:'Programa', s:'ementa por blocos'},
    {n:'06', t:'Para quem é', s:'auto-seleção'},
    {n:'07', t:'Quem conduz', s:'anfitriões'},
    {n:'08', t:'Convidados', s:'experts'},
    {n:'09', t:'Entregáveis', s:'o que você leva'},
    {n:'10', t:'Painel DTC', s:'discussão final'},
    {n:'10b', t:'Orientação parental', s:''},
    {n:'11', t:'Investimento', s:'preço + lotes'},
    {n:'12', t:'Info prática', s:'local, data, horário'},
    {n:'13', t:'FAQ', s:''},
    {n:'14', t:'CTA final', s:''},
  ];
  const proposto = [
    {n:'01', t:'Hero documental + countdown', s:'atmosfera + localização'},
    {n:'02', t:'Edições anteriores', s:'prova de experiência', dest:true},
    {n:'03', t:'Manifesto curto editorial', s:'tese reduzida a 1 pullquote', dest:true},
    {n:'04', t:'Tensão clínica (zumbis)', s:'microcenas / identificação', dest:true},
    {n:'05', t:'Anfitriões (think tank)', s:'autoridade institucional', dest:true},
    {n:'06', t:'A experiência presencial', s:'como será o dia', dest:true},
    {n:'07', t:'Quem está na sala', s:'pertencimento'},
    {n:'08', t:'Programa', s:'só depois do desejo'},
    {n:'09', t:'O que você leva', s:'enquadres, não técnicas'},
    {n:'10', t:'Depoimentos qualificados', s:'poucos e fortes'},
    {n:'11', t:'Investimento', s:'reserva, não compra'},
    {n:'12', t:'CTA final cinematográfico', s:'convocação, não venda'},
  ];
  const col = (title, items, accent) => (
    <div>
      <div style={{fontSize:10,letterSpacing:'0.22em',fontWeight:700,color:accent,textTransform:'uppercase',marginBottom:14,display:'flex',alignItems:'center',gap:10}}>
        <span style={{width:24,height:1,background:accent}}></span>
        {title}
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:6}}>
        {items.map((it,i)=>(
          <div key={i} style={{
            display:'flex',gap:12,alignItems:'flex-start',
            padding:'10px 14px',
            background: it.dest ? 'rgba(196,109,55,0.1)' : 'rgba(255,255,255,0.03)',
            border: it.dest ? `1px solid rgba(196,109,55,0.35)` : '1px solid rgba(255,255,255,0.05)',
          }}>
            <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:11,color:it.dest?T2.terraClaro:T2.grey,fontWeight:600,letterSpacing:'0.06em',flexShrink:0,minWidth:28}}>{it.n}</div>
            <div style={{flex:1}}>
              <div style={{fontFamily:"'Manrope', sans-serif",fontSize:14,fontWeight:600,color:T2.off,letterSpacing:'-0.005em'}}>{it.t}</div>
              <div style={{fontFamily:"'Manrope', sans-serif",fontSize:12,color:T2.grey,marginTop:2}}>{it.s}</div>
            </div>
            {it.dest && <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:9,color:T2.terraClaro,letterSpacing:'0.1em',textTransform:'uppercase',alignSelf:'center'}}>NOVO/MOVIDO</div>}
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <div className="ab" style={{padding:'36px 40px',background:T2.navy}}>
      <h2 style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:32,lineHeight:1,letterSpacing:'-0.02em',margin:'0 0 28px',color:T2.off}}>
        Ordem atual <span style={{color:T2.grey,fontWeight:400}}>→</span> ordem proposta no seu briefing
      </h2>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:32}}>
        {col('ATUAL · index.html', atual, T2.grey)}
        {col('PROPOSTO · da sua reformulação', proposto, T2.terra)}
      </div>
      <div style={{marginTop:24,padding:'14px 18px',background:'rgba(196,109,55,0.08)',borderLeft:`2px solid ${T2.terra}`,fontFamily:"'Manrope', sans-serif",fontSize:13,color:T2.areia,lineHeight:1.55}}>
        <strong>Diferença central:</strong> a estrutura atual organiza <em>seções</em>; a proposta organiza <em>progressão psicológica</em> — atmosfera → prova → relevância → identificação → autoridade → pertencimento → profundidade → decisão. As caixas destacadas em terracota são as que mudam de posição ou são novas.
      </div>
    </div>
  );
}

window.EstruturaComparativa = EstruturaComparativa;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
