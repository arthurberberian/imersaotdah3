/* ============================================================
   VARIANTS B — HERO: Tipografia + tratamento documental das fotos
   Problema: a tipografia atual não está agradando + fotos do
   mosaico precisam "emergir do fundo" (sumir nas bordas).
   ============================================================ */

const T = window.EPM_TOKENS;

/* ============================================================
   Hero photo with corner fade — utility component
   variant: 'radial' | 'corners' | 'gradient' | 'duotone'
   ============================================================ */
function FadePhoto({src, variant='corners', style={}, objectPosition='center'}){
  const base = { position:'relative', overflow:'hidden', ...style };
  const img = { width:'100%', height:'100%', objectFit:'cover', objectPosition, display:'block' };

  if(variant==='radial'){
    const mask = 'radial-gradient(ellipse 75% 65% at center, #000 30%, rgba(0,0,0,0.7) 60%, transparent 100%)';
    return (
      <div style={base}>
        <img src={src} style={{...img, WebkitMaskImage:mask, maskImage:mask}}/>
      </div>
    );
  }
  if(variant==='corners'){
    // Four overlapping linear gradients from each edge
    const overlay = {
      position:'absolute',inset:0,pointerEvents:'none',
      background:
        'linear-gradient(to bottom, #0B1220 0%, transparent 22%),' +
        'linear-gradient(to top, #0B1220 0%, transparent 22%),' +
        'linear-gradient(to right, #0B1220 0%, transparent 14%),' +
        'linear-gradient(to left, #0B1220 0%, transparent 14%)',
    };
    return (
      <div style={base}>
        <img src={src} style={img}/>
        <div style={overlay}></div>
      </div>
    );
  }
  if(variant==='gradient'){
    // Simple bottom-to-top fade
    return (
      <div style={base}>
        <img src={src} style={img}/>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,transparent 30%,#0B1220 100%)',pointerEvents:'none'}}></div>
      </div>
    );
  }
  if(variant==='duotone'){
    return (
      <div style={base}>
        <img src={src} style={{...img, filter:'grayscale(0.6) contrast(1.05) brightness(0.9)'}}/>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,rgba(11,18,32,0.2) 0%, rgba(11,18,32,0.55) 100%)',pointerEvents:'none',mixBlendMode:'multiply'}}></div>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(circle at center, transparent 40%, #0B1220 100%)',pointerEvents:'none'}}></div>
      </div>
    );
  }
}

/* ============================================================
   B1 — HERO: "Editorial Híbrido"
   Fraunces italic GIGANTE + Manrope all-caps + 3ª acentuada
   ============================================================ */
function B1_HeroEditorial_Desktop(){
  return (
    <div className="ab" style={{padding:'56px 56px 44px',display:'grid',gridTemplateColumns:'1.05fr 0.95fr',gap:48}}>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',gap:18}}>
        <div style={{fontSize:10,letterSpacing:'0.22em',fontWeight:700,color:T.terra,textTransform:'uppercase',display:'flex',alignItems:'center',gap:12}}>
          <span style={{width:32,height:1,background:T.terra}}></span>
          REGISTRO CLÍNICO · 3ª EDIÇÃO
        </div>
        <div style={{fontFamily:"'Manrope', sans-serif",fontWeight:800,fontSize:13,letterSpacing:'0.32em',color:T.areia,textTransform:'uppercase'}}>
          IMERSÃO &nbsp; TDAH &nbsp; AO &nbsp; LONGO &nbsp; DA &nbsp; VIDA
        </div>
        <h1 style={{
          fontFamily:"'Fraunces', serif",
          fontStyle:'italic', fontWeight:400,
          fontSize:84, lineHeight:0.92,
          letterSpacing:'-0.035em',
          margin:'8px 0 0', color:T.off,
        }}>
          Nem toda<br/>
          <span style={{color:T.terraClaro}}>desatenção</span><br/>
          é transtorno.
        </h1>
        <div style={{display:'flex',gap:14,marginTop:18,paddingTop:18,borderTop:'1px solid rgba(255,255,255,0.08)',fontFamily:"'JetBrains Mono', monospace",fontSize:11,letterSpacing:'0.08em',color:T.grey,textTransform:'uppercase'}}>
          <span>29 AGO 2026</span><span>·</span><span>SÃO PAULO</span><span>·</span><span>UMA SALA · UM DIA</span>
        </div>
      </div>
      <div style={{position:'relative'}}>
        <FadePhoto src="assets/hero-stage.webp" variant="corners" style={{width:'100%',height:'100%'}}/>
      </div>
    </div>
  );
}

function B1_HeroEditorial_Mobile(){
  return (
    <div className="ab" style={{padding:'28px 18px 18px',display:'flex',flexDirection:'column',gap:14}}>
      <div style={{fontSize:9,letterSpacing:'0.2em',fontWeight:700,color:T.terra,textTransform:'uppercase'}}>
        — REGISTRO CLÍNICO · 3ª EDIÇÃO
      </div>
      <div style={{fontFamily:"'Manrope', sans-serif",fontWeight:800,fontSize:9.5,letterSpacing:'0.28em',color:T.areia,textTransform:'uppercase'}}>
        IMERSÃO &nbsp; TDAH &nbsp; AO LONGO DA VIDA
      </div>
      <h1 style={{
        fontFamily:"'Fraunces', serif",
        fontStyle:'italic', fontWeight:400,
        fontSize:46, lineHeight:0.92,
        letterSpacing:'-0.03em',
        margin:'2px 0', color:T.off,
      }}>
        Nem toda<br/>
        <span style={{color:T.terraClaro}}>desatenção</span><br/>
        é transtorno.
      </h1>
      <div style={{height:200,marginTop:8}}>
        <FadePhoto src="assets/hero-stage.webp" variant="corners" style={{width:'100%',height:'100%'}}/>
      </div>
      <div style={{display:'flex',gap:8,paddingTop:10,borderTop:'1px solid rgba(255,255,255,0.08)',fontFamily:"'JetBrains Mono', monospace",fontSize:9,letterSpacing:'0.08em',color:T.grey,textTransform:'uppercase',flexWrap:'wrap'}}>
        <span>29 AGO 2026</span><span>·</span><span>SÃO PAULO</span>
      </div>
    </div>
  );
}

/* ============================================================
   B2 — HERO: "Magazine Headline"
   Manrope ExtraBold massivo + Fraunces como suporte
   Posicionamento: estilo "capa de revista"
   ============================================================ */
function B2_HeroMagazine_Desktop(){
  return (
    <div className="ab" style={{padding:'56px 56px 44px',display:'grid',gridTemplateColumns:'1fr',gap:32}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',fontSize:10,letterSpacing:'0.22em',fontWeight:700,color:T.terra,textTransform:'uppercase'}}>
        <span>VOL. 03 · IMERSÃO TDAH AO LONGO DA VIDA</span>
        <span style={{color:T.grey}}>29.08.2026 · SÃO PAULO</span>
      </div>
      <h1 style={{
        fontFamily:"'Manrope', sans-serif",
        fontWeight:800,
        fontSize:120, lineHeight:0.9,
        letterSpacing:'-0.045em',
        margin:0, color:T.off,
        textTransform:'uppercase',
      }}>
        TDAH<br/>
        <span style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,textTransform:'none',letterSpacing:'-0.03em',color:T.terraClaro}}>na era</span><br/>
        DIGITAL.
      </h1>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:24,paddingTop:24,borderTop:'1px solid rgba(255,255,255,0.1)'}}>
        <div style={{height:180,gridColumn:'1 / span 1'}}>
          <FadePhoto src="assets/hero-stage.webp" variant="corners" style={{width:'100%',height:'100%'}}/>
        </div>
        <div style={{gridColumn:'2 / span 2',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
          <p style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontSize:22,lineHeight:1.35,color:T.areia,margin:0,fontWeight:400}}>
            Um dia inteiro de raciocínio clínico aplicado ao TDAH em um ambiente que já não pode ser pensado fora da era digital.
          </p>
          <div style={{display:'flex',gap:10,marginTop:18}}>
            <button style={{background:T.terra,border:'none',color:T.off,padding:'14px 22px',fontWeight:600,fontSize:13,letterSpacing:'0.04em'}}>Reservar lugar →</button>
            <button style={{background:'transparent',border:`1px solid rgba(224,199,163,0.3)`,color:T.areia,padding:'14px 22px',fontWeight:500,fontSize:13,letterSpacing:'0.04em'}}>Ver programa</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function B2_HeroMagazine_Mobile(){
  return (
    <div className="ab" style={{padding:'24px 18px 16px',display:'flex',flexDirection:'column',gap:14}}>
      <div style={{display:'flex',justifyContent:'space-between',fontSize:8.5,letterSpacing:'0.2em',fontWeight:700,color:T.terra,textTransform:'uppercase'}}>
        <span>VOL. 03</span>
        <span style={{color:T.grey}}>29.08.2026</span>
      </div>
      <h1 style={{
        fontFamily:"'Manrope', sans-serif",
        fontWeight:800,
        fontSize:64, lineHeight:0.88,
        letterSpacing:'-0.045em',
        margin:'4px 0', color:T.off,
        textTransform:'uppercase',
      }}>
        TDAH<br/>
        <span style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,textTransform:'none',letterSpacing:'-0.025em',color:T.terraClaro}}>na era</span><br/>
        DIGITAL.
      </h1>
      <div style={{height:160,marginTop:4}}>
        <FadePhoto src="assets/hero-stage.webp" variant="corners" style={{width:'100%',height:'100%'}}/>
      </div>
      <p style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontSize:14,lineHeight:1.4,color:T.areia,margin:0,fontWeight:400}}>
        Um dia inteiro de raciocínio clínico aplicado ao TDAH em um ambiente que já não pode ser pensado fora da era digital.
      </p>
      <button style={{background:T.terra,border:'none',color:T.off,padding:'14px 18px',fontWeight:600,fontSize:12,letterSpacing:'0.04em',marginTop:4}}>Reservar lugar →</button>
    </div>
  );
}

/* ============================================================
   B3 — HERO: "Documental Silencioso" (escolhida pelo usuário)
   Fotos dominam, com fade 'corners' (4 lados) emergindo do navy.
   Título reorganizado: "TDAH na era digital." sozinho na primeira
   linha; subtítulo abaixo. Gradiente reforçado meio→baixo p/ contraste.
   ============================================================ */
function B3_HeroDocumental_Desktop(){
  return (
    <div className="ab" style={{padding:0,position:'relative'}}>
      {/* Full-bleed photo grid — cada foto com fade nos 4 cantos */}
      <div style={{position:'absolute',inset:0,display:'grid',gridTemplateColumns:'1.5fr 1fr 1fr',gap:2,background:T.navy}}>
        <FadePhoto src="assets/hero-stage.webp" variant="corners" style={{width:'100%',height:'100%'}}/>
        <FadePhoto src="assets/hero-question.webp" variant="corners" style={{width:'100%',height:'100%'}} objectPosition="center 30%"/>
        <FadePhoto src="assets/hero-bruna.webp" variant="corners" style={{width:'100%',height:'100%'}} objectPosition="center 25%"/>
      </div>
      {/* Gradient overlay para contraste: leve no topo, médio até 50%, forte do meio para baixo */}
      <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg, rgba(11,18,32,0.25) 0%, rgba(11,18,32,0.35) 40%, rgba(11,18,32,0.78) 62%, rgba(11,18,32,0.96) 82%, #0B1220 100%)',pointerEvents:'none'}}></div>
      {/* Vinheta lateral discreta reforça leitura do texto */}
      <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 85% 60% at 30% 90%, rgba(11,18,32,0.55) 0%, transparent 70%)',pointerEvents:'none'}}></div>
      {/* Texto, posicionado no rodapé */}
      <div style={{position:'relative',height:'100%',display:'flex',flexDirection:'column',justifyContent:'flex-end',padding:'40px 56px'}}>
        {/* Título principal: 'TDAH na era digital.' sozinho, destacado */}
        <h1 style={{
          fontFamily:"'Fraunces', serif",
          fontStyle:'italic', fontWeight:500,
          fontSize:96, lineHeight:0.92,
          letterSpacing:'-0.035em',
          margin:0, color:T.areia,
          textShadow:'0 2px 24px rgba(11,18,32,0.6)',
        }}>
          TDAH na era digital.
        </h1>
        {/* Subtítulo — cargo conceitual em off-white, menor */}
        <p style={{
          fontFamily:"'Fraunces', serif",
          fontStyle:'italic', fontWeight:400,
          fontSize:32, lineHeight:1.15,
          letterSpacing:'-0.018em',
          margin:'18px 0 0', color:T.off, maxWidth:740,
          textShadow:'0 1px 16px rgba(11,18,32,0.5)',
        }}>
          Uma discussão clínica que não cabe mais em protocolo.
        </p>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginTop:36,fontFamily:"'JetBrains Mono', monospace",fontSize:11,letterSpacing:'0.08em',color:T.grey,textTransform:'uppercase'}}>
          <span>SÃO PAULO · 29.AGO.2026 · 09:00 — 18:00</span>
          <button style={{background:T.terra,border:'none',color:T.off,padding:'14px 22px',fontFamily:"'Manrope', sans-serif",fontWeight:600,fontSize:12,letterSpacing:'0.05em',textTransform:'uppercase'}}>Reservar lugar na sala →</button>
        </div>
      </div>
    </div>
  );
}

function B3_HeroDocumental_Mobile(){
  return (
    <div className="ab" style={{padding:0,position:'relative'}}>
      {/* No mobile, layout vertical: foto principal + 2 menores */}
      <div style={{position:'absolute',inset:0,display:'grid',gridTemplateRows:'1.25fr 1fr',gap:2,background:T.navy}}>
        <FadePhoto src="assets/hero-stage.webp" variant="corners" style={{width:'100%',height:'100%'}}/>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:2}}>
          <FadePhoto src="assets/hero-question.webp" variant="corners" style={{width:'100%',height:'100%'}} objectPosition="center 30%"/>
          <FadePhoto src="assets/hero-bruna.webp" variant="corners" style={{width:'100%',height:'100%'}} objectPosition="center 25%"/>
        </div>
      </div>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg, rgba(11,18,32,0.2) 0%, rgba(11,18,32,0.35) 40%, rgba(11,18,32,0.82) 62%, rgba(11,18,32,0.97) 82%, #0B1220 100%)',pointerEvents:'none'}}></div>
      <div style={{position:'relative',height:'100%',display:'flex',flexDirection:'column',justifyContent:'flex-end',padding:'24px 18px'}}>
        <h1 style={{
          fontFamily:"'Fraunces', serif",
          fontStyle:'italic', fontWeight:500,
          fontSize:44, lineHeight:0.92,
          letterSpacing:'-0.03em',
          margin:0, color:T.areia,
          textShadow:'0 2px 18px rgba(11,18,32,0.6)',
        }}>
          TDAH na era digital.
        </h1>
        <p style={{
          fontFamily:"'Fraunces', serif",
          fontStyle:'italic', fontWeight:400,
          fontSize:18, lineHeight:1.2,
          letterSpacing:'-0.012em',
          margin:'12px 0 0', color:T.off,
          textShadow:'0 1px 12px rgba(11,18,32,0.5)',
        }}>
          Uma discussão clínica que não cabe mais em protocolo.
        </p>
        <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:9.5,letterSpacing:'0.08em',color:T.grey,textTransform:'uppercase',marginTop:16}}>
          SP · 29.AGO.2026 · 09h–18h
        </div>
        <button style={{background:T.terra,border:'none',color:T.off,padding:'12px 16px',fontWeight:600,fontSize:11,letterSpacing:'0.05em',textTransform:'uppercase',marginTop:14,fontFamily:"'Manrope', sans-serif"}}>Reservar lugar →</button>
      </div>
    </div>
  );
}

/* ============================================================
   B4 — TRATAMENTOS DE FOTO (sub-comparação)
   Mostra os 4 estilos de fade side-by-side para escolher um.
   ============================================================ */
function B4_FadeTreatments_Comparison(){
  const cell = { display:'flex', flexDirection:'column', gap:8 };
  const label = { fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:'0.1em', color:T.grey, textTransform:'uppercase' };
  const cap = { fontFamily:"'Manrope', sans-serif", fontSize:11, color:T.azulCinza, lineHeight:1.4 };
  return (
    <div className="ab" style={{padding:'32px',display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:20}}>
      <div style={cell}>
        <div style={label}>OPÇÃO 1 · CORNERS</div>
        <div style={{height:200,background:'#000'}}>
          <FadePhoto src="assets/hero-stage.webp" variant="corners" style={{width:'100%',height:'100%'}}/>
        </div>
        <div style={cap}>Gradiente linear nos 4 lados. Foto "emerge" do navy. Mais sutil. <strong style={{color:T.areia}}>Recomendado</strong>.</div>
      </div>
      <div style={cell}>
        <div style={label}>OPÇÃO 2 · RADIAL</div>
        <div style={{height:200,background:'#000'}}>
          <FadePhoto src="assets/hero-stage.webp" variant="radial" style={{width:'100%',height:'100%'}}/>
        </div>
        <div style={cap}>Máscara radial elíptica. Vignette forte. Mais "cinematográfico", menos editorial.</div>
      </div>
      <div style={cell}>
        <div style={label}>OPÇÃO 3 · DUOTONE</div>
        <div style={{height:200,background:'#000'}}>
          <FadePhoto src="assets/hero-stage.webp" variant="duotone" style={{width:'100%',height:'100%'}}/>
        </div>
        <div style={cap}>Dessaturação + tom navy. Vibe de "registro documental". Forte coesão visual.</div>
      </div>
      <div style={cell}>
        <div style={label}>OPÇÃO 4 · GRADIENT</div>
        <div style={{height:200,background:'#000'}}>
          <FadePhoto src="assets/hero-stage.webp" variant="gradient" style={{width:'100%',height:'100%'}}/>
        </div>
        <div style={cap}>Fade apenas no rodapé. Mais "limpo", típico de site editorial. Menos imersivo.</div>
      </div>
    </div>
  );
}

Object.assign(window, {
  FadePhoto,
  B1_HeroEditorial_Desktop, B1_HeroEditorial_Mobile,
  B2_HeroMagazine_Desktop, B2_HeroMagazine_Mobile,
  B3_HeroDocumental_Desktop, B3_HeroDocumental_Mobile,
  B4_FadeTreatments_Comparison,
});
