/* ============================================================
   VARIANTS E — O QUE VOCÊ VAI LEVAR (entrega / aprendizado)
   Adaptação do print 2 ("O QUE VOCÊ IRÁ APRENDER") para a
   identidade premium da EPM. Sem ícones, copy mais sofisticado,
   espaço editorial.
   ============================================================ */

const Te = window.EPM_TOKENS;

/* O conteúdo é o mesmo nas 3 variantes — copy clínico, premium */
const ITEMS = [
  { n:'01', t:'Repertório clínico ampliado', d:'Formulações mais precisas para casos em que sintoma, ambiente, desenvolvimento e adaptação se misturam.' },
  { n:'02', t:'Critérios para diferenciar quadros', d:'Distinções entre atenção, motivação, impulsividade e sobrecarga ambiental — onde o DSM ainda não chega.' },
  { n:'03', t:'Leitura crítica da era digital', d:'Como o ambiente cognitivo contemporâneo participa do que ainda chamamos de sintoma.' },
  { n:'04', t:'Ferramentas para discussão com famílias', d:'Linguagem clínica que sustenta conversas difíceis com pais, escola e equipe multiprofissional.' },
  { n:'05', t:'Enquadres novos para casos ambíguos', d:'O que fazer diante do paciente que não cabe nos enquadres anteriores que você aprendeu.' },
];

/* ============================================================
   E1 — NUMBERED EDITORIAL CARDS (3 colunas desktop / stack mobile)
   Inspiração: print 2, mas sem ícones, com numerais grandes em
   Fraunces italic substituindo os ícones genéricos.
   ============================================================ */
function E1_NumberedCards_Desktop(){
  return (
    <div className="ab" style={{padding:'72px 56px',background:Te.navy}}>
      <div style={{textAlign:'center',marginBottom:48}}>
        <div style={{fontSize:10,letterSpacing:'0.32em',fontWeight:700,color:Te.terra,textTransform:'uppercase',marginBottom:14}}>
          O QUE VOCÊ LEVA DA SALA
        </div>
        <h2 style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:48,lineHeight:1,letterSpacing:'-0.025em',margin:0,color:Te.off}}>
          Não são técnicas. São enquadres.
        </h2>
        <p style={{fontFamily:"'Manrope', sans-serif",fontSize:15,lineHeight:1.6,color:Te.azulCinza,margin:'18px auto 0',maxWidth:580}}>
          Ao final do dia você sai com formulações novas para casos que, na rotina, parecem iguais — e quase nunca são.
        </p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:1,background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.06)'}}>
        {ITEMS.slice(0,3).map((it,i)=>(
          <div key={i} style={{background:Te.navy,padding:'40px 32px',display:'flex',flexDirection:'column',gap:14,minHeight:280}}>
            <div style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:72,lineHeight:0.9,color:Te.terra,letterSpacing:'-0.04em'}}>{it.n}</div>
            <h3 style={{fontFamily:"'Manrope', sans-serif",fontWeight:600,fontSize:18,lineHeight:1.25,color:Te.off,margin:0,letterSpacing:'-0.01em'}}>{it.t}</h3>
            <p style={{fontFamily:"'Manrope', sans-serif",fontSize:14,lineHeight:1.6,color:Te.azulCinza,margin:0}}>{it.d}</p>
          </div>
        ))}
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:1,background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.06)',borderTop:'none',maxWidth:'66.66%',marginLeft:'auto',marginRight:'auto'}}>
        {ITEMS.slice(3,5).map((it,i)=>(
          <div key={i} style={{background:Te.navy,padding:'40px 32px',display:'flex',flexDirection:'column',gap:14,minHeight:280}}>
            <div style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:72,lineHeight:0.9,color:Te.terra,letterSpacing:'-0.04em'}}>{it.n}</div>
            <h3 style={{fontFamily:"'Manrope', sans-serif",fontWeight:600,fontSize:18,lineHeight:1.25,color:Te.off,margin:0,letterSpacing:'-0.01em'}}>{it.t}</h3>
            <p style={{fontFamily:"'Manrope', sans-serif",fontSize:14,lineHeight:1.6,color:Te.azulCinza,margin:0}}>{it.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function E1_NumberedCards_Mobile(){
  return (
    <div className="ab" style={{padding:'36px 18px',background:Te.navy}}>
      <div style={{textAlign:'center',marginBottom:28}}>
        <div style={{fontSize:9,letterSpacing:'0.28em',fontWeight:700,color:Te.terra,textTransform:'uppercase',marginBottom:10}}>
          O QUE VOCÊ LEVA DA SALA
        </div>
        <h2 style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:30,lineHeight:1,letterSpacing:'-0.02em',margin:0,color:Te.off}}>
          Não são técnicas.<br/>São enquadres.
        </h2>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:1,background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.06)'}}>
        {ITEMS.map((it,i)=>(
          <div key={i} style={{background:Te.navy,padding:'24px 20px',display:'flex',gap:18,alignItems:'flex-start'}}>
            <div style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:42,lineHeight:0.9,color:Te.terra,letterSpacing:'-0.04em',flexShrink:0,paddingTop:2}}>{it.n}</div>
            <div>
              <h3 style={{fontFamily:"'Manrope', sans-serif",fontWeight:600,fontSize:15.5,lineHeight:1.3,color:Te.off,margin:'0 0 6px',letterSpacing:'-0.005em'}}>{it.t}</h3>
              <p style={{fontFamily:"'Manrope', sans-serif",fontSize:13,lineHeight:1.55,color:Te.azulCinza,margin:0}}>{it.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   E2 — EDITORIAL DICTIONARY (entradas com cor de fundo)
   Cada item é uma "entrada" como num verbete clínico/dicionário.
   Mais formal, denso, intelectual. Cards com leve elevação areia.
   ============================================================ */
function E2_Dictionary_Desktop(){
  return (
    <div className="ab" style={{padding:'72px 56px',background:Te.offWarm,color:Te.navy}}>
      <div style={{maxWidth:680,marginBottom:48}}>
        <div style={{fontSize:10,letterSpacing:'0.28em',fontWeight:700,color:Te.terra,textTransform:'uppercase',marginBottom:14,display:'flex',alignItems:'center',gap:12}}>
          <span style={{width:32,height:1,background:Te.terra}}></span>
          ENTREGÁVEIS · CINCO ENQUADRES
        </div>
        <h2 style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:48,lineHeight:1,letterSpacing:'-0.025em',margin:0,color:Te.navy}}>
          Cinco distinções clínicas que você não tinha antes.
        </h2>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:1,background:'rgba(11,18,32,0.08)',border:'1px solid rgba(11,18,32,0.08)'}}>
        {ITEMS.map((it,i)=>(
          <div key={i} style={{background:Te.offWarm,padding:'36px 32px',display:'flex',gap:24,alignItems:'flex-start',borderBottom:'none'}}>
            <div style={{flexShrink:0}}>
              <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:11,letterSpacing:'0.18em',color:Te.terra,fontWeight:600,textTransform:'uppercase'}}>{it.n}</div>
              <div style={{width:24,height:1,background:Te.terra,marginTop:8}}></div>
            </div>
            <div>
              <h3 style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:500,fontSize:22,lineHeight:1.2,color:Te.navy,margin:'0 0 8px',letterSpacing:'-0.015em'}}>{it.t}</h3>
              <p style={{fontFamily:"'Manrope', sans-serif",fontSize:14.5,lineHeight:1.6,color:Te.grey2,margin:0}}>{it.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function E2_Dictionary_Mobile(){
  return (
    <div className="ab" style={{padding:'32px 18px',background:Te.offWarm,color:Te.navy}}>
      <div style={{fontSize:9,letterSpacing:'0.22em',fontWeight:700,color:Te.terra,textTransform:'uppercase',marginBottom:10}}>
        — ENTREGÁVEIS
      </div>
      <h2 style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:28,lineHeight:1,letterSpacing:'-0.02em',margin:'0 0 28px',color:Te.navy}}>
        Cinco distinções clínicas que você não tinha antes.
      </h2>
      <div style={{display:'flex',flexDirection:'column',gap:0,background:'rgba(11,18,32,0.08)',border:'1px solid rgba(11,18,32,0.08)'}}>
        {ITEMS.map((it,i)=>(
          <div key={i} style={{background:Te.offWarm,padding:'22px 18px',display:'flex',flexDirection:'column',gap:8,borderBottom:i===ITEMS.length-1?'none':'1px solid rgba(11,18,32,0.08)'}}>
            <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:10,letterSpacing:'0.18em',color:Te.terra,fontWeight:600,textTransform:'uppercase'}}>{it.n} · ENQUADRE</div>
            <h3 style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:500,fontSize:19,lineHeight:1.2,color:Te.navy,margin:0,letterSpacing:'-0.015em'}}>{it.t}</h3>
            <p style={{fontFamily:"'Manrope', sans-serif",fontSize:13.5,lineHeight:1.55,color:Te.grey2,margin:0}}>{it.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   E2b — PRÁTICO CLAREADO (escolha do usuário)
   Estética light do E2 + copy adaptado para tom prático-clínico
   (não "perguntas que você leva", e sim "o que você sai sabendo
   fazer"). Cada card ganha:
   - Glow areia/terracota no topo (subtle highlight)
   - Glow central radial (warm)
   - Borda 1px terracota a 0.18 (versão com borda)
   ============================================================ */

const PRATICOS = [
  { n:'01', t:'Diferenciar atenção, hábito digital e sobrecarga', d:'Critérios clínicos práticos para distinguir o que é sintoma, o que é ambiente cognitivo e o que é desenvolvimento — no consultório, em cima do caso.' },
  { n:'02', t:'As perguntas certas para investigar o uso de telas', d:'Roteiro de investigação por faixa etária: o que perguntar para criança, adolescente, adulto e seus cuidadores. Sem moralismo, com método.' },
  { n:'03', t:'Conduzir a conversa com famílias', d:'Como sustentar a conversa sobre limites e telas com pais e escola — em linguagem clínica, sem virar prescrição de comportamento.' },
  { n:'04', t:'Decidir entre intervir, encaminhar ou observar', d:'Sinalizadores práticos para o momento da decisão clínica: quando o uso é sintoma, quando é causa e quando é apenas o pano de fundo.' },
  { n:'05', t:'Roteiro para casos de TDAH + uso excessivo de telas', d:'Como conduzir os primeiros 3 atendimentos quando o quadro combina suspeita de TDAH e comportamento digital intenso.' },
];

/* shared card chrome — light, com glow no topo + radial central */
function PraticoCard({n, t, d, border=true}){
  return (
    <div style={{
      position:'relative',
      background:Te.offWarm,
      padding:'40px 32px 36px',
      overflow:'hidden',
      border: border ? `1px solid ${Te.terra}30` : '1px solid rgba(11,18,32,0.05)',
      isolation:'isolate',
    }}>
      {/* GLOW TOPO: linear fade areia/terracota descendo */}
      <div style={{
        position:'absolute', top:0, left:0, right:0, height:180,
        background:`linear-gradient(180deg, ${Te.terra}1A 0%, ${Te.terra}08 35%, transparent 100%)`,
        pointerEvents:'none', zIndex:0,
      }}></div>
      {/* GLOW CENTRAL: radial difuso warm */}
      <div style={{
        position:'absolute', top:'30%', left:'50%', width:'140%', height:'70%',
        transform:'translateX(-50%)',
        background:`radial-gradient(ellipse at center, ${Te.areia}40 0%, ${Te.areia}10 35%, transparent 70%)`,
        filter:'blur(28px)',
        pointerEvents:'none', zIndex:0,
      }}></div>
      <div style={{position:'relative', zIndex:1, display:'flex', flexDirection:'column', gap:14}}>
        <div style={{display:'flex',alignItems:'center',gap:10}}>
          <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:11,letterSpacing:'0.22em',color:Te.terra,fontWeight:600}}>
            {n}
          </div>
          <div style={{flex:1,height:1,background:`${Te.terra}30`}}></div>
        </div>
        <h3 style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:500,fontSize:22,lineHeight:1.2,color:Te.navy,margin:0,letterSpacing:'-0.015em'}}>{t}</h3>
        <p style={{fontFamily:"'Manrope', sans-serif",fontSize:14,lineHeight:1.6,color:Te.grey2,margin:0}}>{d}</p>
      </div>
    </div>
  );
}

function E2b_Pratico_Desktop(){
  return (
    <div className="ab" style={{padding:'72px 56px',background:Te.offWarm,color:Te.navy,position:'relative',overflow:'hidden'}}>
      {/* fundo: textura sutil para dar densidade na seção light */}
      <div style={{position:'absolute',inset:0,background:`radial-gradient(circle at 15% 0%, ${Te.terra}10 0%, transparent 45%), radial-gradient(circle at 85% 100%, ${Te.areia}25 0%, transparent 50%)`,pointerEvents:'none'}}></div>
      <div style={{position:'relative',zIndex:1}}>
        <div style={{maxWidth:720,marginBottom:48}}>
          <div style={{fontSize:10,letterSpacing:'0.28em',fontWeight:700,color:Te.terra,textTransform:'uppercase',marginBottom:14,display:'flex',alignItems:'center',gap:12}}>
            <span style={{width:32,height:1,background:Te.terra}}></span>
            O QUE VOCÊ SAI SABENDO FAZER
          </div>
          <h2 style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:48,lineHeight:1,letterSpacing:'-0.025em',margin:'0 0 16px',color:Te.navy}}>
            Cinco coisas que você passa a fazer melhor depois desse dia.
          </h2>
          <p style={{fontFamily:"'Manrope', sans-serif",fontSize:16,lineHeight:1.6,color:Te.grey2,margin:0,maxWidth:600}}>
            Ao final da imersão, você sai sabendo como <strong style={{color:Te.navy,fontWeight:600}}>investigar</strong> e <strong style={{color:Te.navy,fontWeight:600}}>abordar</strong> o uso excessivo de telas na sua prática clínica — com método, não com palpite.
          </p>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:18}}>
          {PRATICOS.slice(0,3).map((it,i)=>(
            <PraticoCard key={i} n={it.n} t={it.t} d={it.d} border={true}/>
          ))}
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:18,marginTop:18,maxWidth:'66.66%',marginLeft:'auto',marginRight:'auto'}}>
          {PRATICOS.slice(3,5).map((it,i)=>(
            <PraticoCard key={i} n={it.n} t={it.t} d={it.d} border={true}/>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Versão SEM borda terracota — para o usuário comparar */
function E2b_Pratico_NoBorder_Desktop(){
  return (
    <div className="ab" style={{padding:'72px 56px',background:Te.offWarm,color:Te.navy,position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,background:`radial-gradient(circle at 15% 0%, ${Te.terra}10 0%, transparent 45%), radial-gradient(circle at 85% 100%, ${Te.areia}25 0%, transparent 50%)`,pointerEvents:'none'}}></div>
      <div style={{position:'relative',zIndex:1}}>
        <div style={{maxWidth:720,marginBottom:48}}>
          <div style={{fontSize:10,letterSpacing:'0.28em',fontWeight:700,color:Te.terra,textTransform:'uppercase',marginBottom:14,display:'flex',alignItems:'center',gap:12}}>
            <span style={{width:32,height:1,background:Te.terra}}></span>
            O QUE VOCÊ SAI SABENDO FAZER · sem borda
          </div>
          <h2 style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:48,lineHeight:1,letterSpacing:'-0.025em',margin:'0 0 16px',color:Te.navy}}>
            Cinco coisas que você passa a fazer melhor depois desse dia.
          </h2>
          <p style={{fontFamily:"'Manrope', sans-serif",fontSize:16,lineHeight:1.6,color:Te.grey2,margin:0,maxWidth:600}}>
            Ao final da imersão, você sai sabendo como <strong style={{color:Te.navy,fontWeight:600}}>investigar</strong> e <strong style={{color:Te.navy,fontWeight:600}}>abordar</strong> o uso excessivo de telas na sua prática clínica — com método, não com palpite.
          </p>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:18}}>
          {PRATICOS.slice(0,3).map((it,i)=>(
            <PraticoCard key={i} n={it.n} t={it.t} d={it.d} border={false}/>
          ))}
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:18,marginTop:18,maxWidth:'66.66%',marginLeft:'auto',marginRight:'auto'}}>
          {PRATICOS.slice(3,5).map((it,i)=>(
            <PraticoCard key={i} n={it.n} t={it.t} d={it.d} border={false}/>
          ))}
        </div>
      </div>
    </div>
  );
}

function E2b_Pratico_Mobile(){
  return (
    <div className="ab" style={{padding:'36px 18px',background:Te.offWarm,color:Te.navy,position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,background:`radial-gradient(circle at 0% 0%, ${Te.terra}10 0%, transparent 40%), radial-gradient(circle at 100% 100%, ${Te.areia}20 0%, transparent 45%)`,pointerEvents:'none'}}></div>
      <div style={{position:'relative',zIndex:1}}>
        <div style={{fontSize:9,letterSpacing:'0.22em',fontWeight:700,color:Te.terra,textTransform:'uppercase',marginBottom:10}}>
          — O QUE VOCÊ SAI SABENDO FAZER
        </div>
        <h2 style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:28,lineHeight:1.02,letterSpacing:'-0.02em',margin:'0 0 12px',color:Te.navy}}>
          Cinco coisas que você passa a fazer melhor depois desse dia.
        </h2>
        <p style={{fontFamily:"'Manrope', sans-serif",fontSize:14,lineHeight:1.55,color:Te.grey2,margin:'0 0 24px'}}>
          Ao final da imersão, você sai sabendo como <strong style={{color:Te.navy,fontWeight:600}}>investigar</strong> e <strong style={{color:Te.navy,fontWeight:600}}>abordar</strong> o uso excessivo de telas — com método, não com palpite.
        </p>
        <div style={{display:'flex',flexDirection:'column',gap:14}}>
          {PRATICOS.map((it,i)=>(
            <PraticoCard key={i} n={it.n} t={it.t} d={it.d} border={true}/>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   E3 — PULL-QUOTE GRID (mais editorial, cada item é um quote)
   Cada entrega é apresentada como uma frase de manifesto, em
   Fraunces italic grande. Estilo "página de abertura de capítulo".
   ============================================================ */
function E3_PullQuote_Desktop(){
  const items = [
    { n:'01', q:'Como diferenciar atenção, motivação e ambiente em casos que parecem iguais.' },
    { n:'02', q:'O que perguntar quando o sintoma se confunde com hábito digital.' },
    { n:'03', q:'Como conduzir famílias diante de diagnósticos contemporâneos.' },
    { n:'04', q:'Quando ler hiperadaptação ao invés de transtorno — e o contrário.' },
  ];
  return (
    <div className="ab" style={{padding:'72px 56px',background:Te.navy}}>
      <div style={{textAlign:'center',marginBottom:64}}>
        <div style={{fontSize:10,letterSpacing:'0.32em',fontWeight:700,color:Te.terra,textTransform:'uppercase',marginBottom:14}}>
          PERGUNTAS QUE VOCÊ LEVA DE VOLTA
        </div>
        <h2 style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:42,lineHeight:1.02,letterSpacing:'-0.025em',margin:0,color:Te.off,maxWidth:720,marginLeft:'auto',marginRight:'auto'}}>
          Ao final do dia, você sai com perguntas melhores. Não com respostas prontas.
        </h2>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:48}}>
        {items.map((it,i)=>(
          <div key={i} style={{borderLeft:`2px solid ${Te.terra}`,paddingLeft:28,paddingTop:8,paddingBottom:8}}>
            <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:11,letterSpacing:'0.18em',color:Te.terra,textTransform:'uppercase',marginBottom:14,fontWeight:600}}>
              PERGUNTA {it.n}
            </div>
            <p style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:26,lineHeight:1.25,color:Te.off,margin:0,letterSpacing:'-0.015em'}}>
              {it.q}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function E3_PullQuote_Mobile(){
  const items = [
    { n:'01', q:'Como diferenciar atenção, motivação e ambiente em casos que parecem iguais.' },
    { n:'02', q:'O que perguntar quando o sintoma se confunde com hábito digital.' },
    { n:'03', q:'Como conduzir famílias diante de diagnósticos contemporâneos.' },
    { n:'04', q:'Quando ler hiperadaptação ao invés de transtorno.' },
  ];
  return (
    <div className="ab" style={{padding:'36px 18px',background:Te.navy}}>
      <div style={{fontSize:9,letterSpacing:'0.28em',fontWeight:700,color:Te.terra,textTransform:'uppercase',marginBottom:10,textAlign:'center'}}>
        PERGUNTAS QUE VOCÊ LEVA
      </div>
      <h2 style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:26,lineHeight:1.05,letterSpacing:'-0.02em',margin:'0 auto 32px',color:Te.off,textAlign:'center',maxWidth:300}}>
        Você sai com perguntas melhores. Não com respostas prontas.
      </h2>
      <div style={{display:'flex',flexDirection:'column',gap:24}}>
        {items.map((it,i)=>(
          <div key={i} style={{borderLeft:`2px solid ${Te.terra}`,paddingLeft:16}}>
            <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:9.5,letterSpacing:'0.16em',color:Te.terra,textTransform:'uppercase',marginBottom:8,fontWeight:600}}>
              PERGUNTA {it.n}
            </div>
            <p style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:17.5,lineHeight:1.3,color:Te.off,margin:0,letterSpacing:'-0.01em'}}>
              {it.q}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, {
  E1_NumberedCards_Desktop, E1_NumberedCards_Mobile,
  E2_Dictionary_Desktop, E2_Dictionary_Mobile,
  E2b_Pratico_Desktop, E2b_Pratico_Mobile,
  E2b_Pratico_NoBorder_Desktop,
  E3_PullQuote_Desktop, E3_PullQuote_Mobile,
});
