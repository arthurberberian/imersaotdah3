/* ============================================================
   VARIANTS A — Countdown / Localizador de Edição
   Problema: ao entrar na LP, o usuário leva tempo até perceber
   que está na página da 3ª Edição. Soluções abaixo tornam isso
   imediato + adicionam urgência via timer.
   ============================================================ */

const navy = '#0B1220';
const navy2 = '#111A2C';
const navy3 = '#1A2438';
const off = '#FAF9F4';
const offWarm = '#F5F2E8';
const terra = '#C46D37';
const terraClaro = '#D88959';
const areia = '#E0C7A3';
const grey = '#8E97A3';
const grey2 = '#5C6573';

/* ---------- countdown digit primitive ---------- */
function CountdownDigits({size = 28, gap = 18, light = false, value = ['16','05','34','14']}){
  const digit = {
    fontFamily:"'Manrope', sans-serif",
    fontWeight:700,
    fontSize:size,
    lineHeight:1,
    letterSpacing:'-0.02em',
    color:light? navy : off,
    fontVariantNumeric:'tabular-nums',
  };
  const unit = {
    fontFamily:"'Manrope', sans-serif",
    fontSize:Math.max(9, size*0.32),
    fontWeight:500,
    letterSpacing:'0.18em',
    textTransform:'uppercase',
    color:light? grey2 : grey,
    marginLeft:6,
    alignSelf:'flex-end',
    paddingBottom:Math.max(2,size*0.08),
  };
  const cell = { display:'flex', alignItems:'baseline' };
  const sep = { color:light? grey2 : grey, opacity:0.4, fontSize:size*0.7, fontWeight:300, alignSelf:'center' };
  const labels = ['dias','horas','min','seg'];
  return (
    <div style={{display:'flex', alignItems:'center', gap}}>
      {value.map((v,i)=>(
        <React.Fragment key={i}>
          <div style={cell}>
            <span style={digit}>{v}</span>
            <span style={unit}>{labels[i]}</span>
          </div>
          {i<3 && <span style={sep}>·</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

/* ---------- M-PORTICO MONOGRAM (Escola do Psicólogo Master)
   Path extraído do design system oficial — arcos superiores formando
   um pórtico em torno do m. ----------------------------------------- */
function LogoM({size = 28, color = terra}){
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <path d="M10 90 L10 30 Q10 10, 30 10 L70 10 Q90 10, 90 30 L90 90 L75 90 L75 35 Q75 25, 65 25 Q55 25, 55 35 L55 90 L45 90 L45 35 Q45 25, 35 25 Q25 25, 25 35 L25 90 Z" fill={color}/>
    </svg>
  );
}

/* ============================================================
   A1 — STICKY TOP BAR (desktop) 
   Slim navy bar embaixo do header. Sempre visível.
   ============================================================ */
function A1_StickyTopBar_Desktop(){
  return (
    <div style={{width:'100%',height:'100%',background:'linear-gradient(180deg,#0B1220 0%,#111A2C 60%)',display:'flex',flexDirection:'column'}}>
      {/* header — LOGO REMOVIDO (vai aparecer dentro do countdown) */}
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'18px 40px',borderBottom:'1px solid rgba(255,255,255,0.04)'}}>
        {/* slot esquerdo intencionalmente vazio nessa variante */}
        <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:10,letterSpacing:'0.16em',color:grey,textTransform:'uppercase'}}>—</div>
        <div style={{display:'flex',gap:28,fontSize:12,color:grey,letterSpacing:'0.05em'}}>
          <span>Tese</span><span>Programa</span><span>Quem conduz</span><span>Investimento</span>
        </div>
      </div>
      {/* THE BAR — logo M-pórtico carrega a marca; texto reorganizado */}
      <div style={{
        background:'linear-gradient(180deg,#111A2C 0%,#0B1220 100%)',
        borderTop:`1px solid ${terra}40`,
        borderBottom:`1px solid rgba(255,255,255,0.06)`,
        padding:'14px 40px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        gap:24,
      }}>
        <div style={{display:'flex',alignItems:'center',gap:14}}>
          {/* Logo M-pórtico em terracota, sem fundo, mesma altura do bloco de texto */}
          <LogoM size={40} color={terra}/>
          <div style={{lineHeight:1.2}}>
            <div style={{fontSize:9.5,letterSpacing:'0.22em',color:areia,fontWeight:600,textTransform:'uppercase'}}>
              IMERSÃO TDAH AO LONGO DA VIDA · 3ª EDIÇÃO
            </div>
            <div style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontSize:20,fontWeight:500,color:off,marginTop:3,letterSpacing:'-0.01em'}}>
              TDAH na Era Digital
            </div>
          </div>
        </div>
        <CountdownDigits size={28} gap={16}/>
        <div style={{display:'flex',alignItems:'center',gap:14}}>
          <div style={{fontSize:11,color:grey,letterSpacing:'0.1em'}}>29.AGO.2026 · SÃO PAULO</div>
          <button style={{background:terra,border:'none',color:off,padding:'10px 18px',fontSize:12,fontWeight:600,letterSpacing:'0.05em',cursor:'pointer'}}>Reservar lugar →</button>
        </div>
      </div>
      {/* hint of hero below */}
      <div style={{flex:1,background:`linear-gradient(180deg,#111A2C 0%,#0B1220 100%)`,padding:'40px 40px 0',opacity:0.6}}>
        <div style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontSize:48,fontWeight:500,color:off,lineHeight:1,letterSpacing:'-0.02em'}}>
          Nem toda desatenção<br/>é transtorno.
        </div>
      </div>
    </div>
  );
}

function A1_StickyTopBar_Mobile(){
  return (
    <div style={{width:'100%',height:'100%',background:navy,display:'flex',flexDirection:'column'}}>
      {/* header — só o menu (logo migrou para dentro do countdown) */}
      <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',padding:'14px 18px'}}>
        <div style={{fontSize:18,color:off,lineHeight:1}}>≡</div>
      </div>
      {/* bar */}
      <div style={{
        background:navy2,
        borderTop:`1px solid ${terra}50`,
        borderBottom:'1px solid rgba(255,255,255,0.06)',
        padding:'12px 16px',
      }}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10}}>
          {/* Logo M-pórtico em terracota, mesma altura do bloco de texto */}
          <LogoM size={34} color={terra}/>
          <div style={{lineHeight:1.15,flex:1,minWidth:0}}>
            <div style={{fontSize:8.5,letterSpacing:'0.2em',color:areia,fontWeight:600,textTransform:'uppercase'}}>IMERSÃO TDAH · 3ª EDIÇÃO</div>
            <div style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontSize:14,fontWeight:500,color:off,marginTop:2,letterSpacing:'-0.01em'}}>
              TDAH na Era Digital
            </div>
          </div>
        </div>
        <CountdownDigits size={22} gap={10}/>
      </div>
      {/* hint of hero below */}
      <div style={{flex:1,padding:'28px 18px 0',opacity:0.5}}>
        <div style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontSize:32,fontWeight:500,color:off,lineHeight:1,letterSpacing:'-0.02em'}}>
          Nem toda<br/>desatenção é<br/>transtorno.
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   A2 — EDITORIAL INLINE COUNTDOWN
   Countdown vive DENTRO do hero, com tipografia editorial grande.
   Não fica fixo — mas é tão visível que carrega o título.
   ============================================================ */
function A2_EditorialCountdown_Desktop(){
  return (
    <div className="ab" style={{padding:'48px 56px',display:'flex',flexDirection:'column',gap:20}}>
      <div style={{display:'flex',alignItems:'center',gap:14,fontSize:10,letterSpacing:'0.22em',fontWeight:700,color:terra,textTransform:'uppercase'}}>
        <span style={{width:32,height:1,background:terra,display:'inline-block'}}></span>
        IMERSÃO TDAH AO LONGO DA VIDA · 3ª EDIÇÃO
      </div>
      <div style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:64,lineHeight:0.98,letterSpacing:'-0.025em',color:off}}>
        TDAH na <span style={{color:terraClaro}}>era digital</span>.
      </div>
      {/* Big editorial countdown */}
      <div style={{display:'flex',alignItems:'flex-end',gap:36,marginTop:24,paddingTop:24,borderTop:'1px solid rgba(255,255,255,0.1)'}}>
        <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:11,letterSpacing:'0.1em',color:grey,textTransform:'uppercase',maxWidth:140,lineHeight:1.4}}>
          Faltam para a sala abrir
        </div>
        {['16','05','34','14'].map((v,i)=>(
          <div key={i} style={{display:'flex',flexDirection:'column'}}>
            <span style={{fontFamily:"'Fraunces', serif",fontWeight:500,fontStyle:'italic',fontSize:72,lineHeight:0.9,color:off,fontVariantNumeric:'tabular-nums',letterSpacing:'-0.04em'}}>{v}</span>
            <span style={{fontFamily:"'JetBrains Mono', monospace",fontSize:10,letterSpacing:'0.2em',color:grey,textTransform:'uppercase',marginTop:8}}>
              {['dias','horas','minutos','segundos'][i]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function A2_EditorialCountdown_Mobile(){
  return (
    <div className="ab" style={{padding:'24px 18px',display:'flex',flexDirection:'column',gap:14}}>
      <div style={{fontSize:9,letterSpacing:'0.2em',fontWeight:700,color:terra,textTransform:'uppercase'}}>
        — IMERSÃO TDAH · 3ª EDIÇÃO
      </div>
      <div style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:38,lineHeight:0.98,letterSpacing:'-0.025em',color:off}}>
        TDAH na<br/><span style={{color:terraClaro}}>era digital</span>.
      </div>
      <div style={{paddingTop:16,borderTop:'1px solid rgba(255,255,255,0.1)'}}>
        <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:9.5,letterSpacing:'0.1em',color:grey,textTransform:'uppercase',marginBottom:10}}>
          Faltam para a sala abrir
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:10}}>
          {['16','05','34','14'].map((v,i)=>(
            <div key={i} style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
              <span style={{fontFamily:"'Fraunces', serif",fontWeight:500,fontStyle:'italic',fontSize:36,lineHeight:0.9,color:off,fontVariantNumeric:'tabular-nums'}}>{v}</span>
              <span style={{fontFamily:"'JetBrains Mono', monospace",fontSize:8,letterSpacing:'0.18em',color:grey,textTransform:'uppercase',marginTop:6}}>
                {['dias','horas','min','seg'][i]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   A3 — FLOATING GLASS PILL
   Inspirado no print (Mestre de Obras): cápsula glass-morph
   no canto inferior direito (desktop) / sticky bottom (mobile)
   ============================================================ */
function A3_FloatingPill_Desktop(){
  return (
    <div style={{width:'100%',height:'100%',background:'#0B1220',position:'relative',overflow:'hidden'}}>
      {/* faux hero behind */}
      <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,#0B1220 0%,#111A2C 100%)',opacity:0.95}}></div>
      <div style={{position:'absolute',top:60,left:56,maxWidth:540,opacity:0.7}}>
        <div style={{fontSize:10,letterSpacing:'0.22em',fontWeight:700,color:terra,textTransform:'uppercase',marginBottom:14}}>
          — REGISTRO CLÍNICO
        </div>
        <div style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:500,fontSize:54,lineHeight:1,letterSpacing:'-0.025em',color:off}}>
          Nem toda desatenção<br/>é transtorno.
        </div>
        <div style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:500,fontSize:54,lineHeight:1,letterSpacing:'-0.025em',color:areia,marginTop:8}}>
          Nem toda tecnologia<br/>é vilã.
        </div>
      </div>
      {/* the pill */}
      <div style={{
        position:'absolute', bottom:24, left:24, right:24,
        background:'rgba(17,26,44,0.78)',
        backdropFilter:'blur(20px)',
        WebkitBackdropFilter:'blur(20px)',
        border:'1px solid rgba(224,199,163,0.18)',
        borderRadius:14,
        padding:'16px 22px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        gap:20,
        boxShadow:'0 12px 40px rgba(0,0,0,0.5)',
      }}>
        <div style={{display:'flex',alignItems:'center',gap:14}}>
          <div style={{width:42,height:42,borderRadius:10,background:`linear-gradient(135deg,${terra} 0%,${terraClaro} 100%)`,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,boxShadow:`0 4px 14px ${terra}50`}}>
            <span style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontSize:22,fontWeight:600,color:navy}}>3ª</span>
          </div>
          <div style={{lineHeight:1.2}}>
            <div style={{fontSize:9.5,letterSpacing:'0.22em',color:grey,fontWeight:600,textTransform:'uppercase'}}>IMERSÃO TDAH AO LONGO DA VIDA</div>
            <div style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontSize:17,fontWeight:500,color:off,marginTop:3}}>
              3ª edição · TDAH na Era Digital
            </div>
          </div>
        </div>
        <CountdownDigits size={26} gap={14}/>
      </div>
    </div>
  );
}

function A3_FloatingPill_Mobile(){
  return (
    <div style={{width:'100%',height:'100%',background:'#0B1220',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',top:60,left:18,right:18,opacity:0.7}}>
        <div style={{fontSize:9,letterSpacing:'0.2em',fontWeight:700,color:terra,textTransform:'uppercase',marginBottom:10}}>
          — REGISTRO CLÍNICO
        </div>
        <div style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:500,fontSize:34,lineHeight:1,letterSpacing:'-0.025em',color:off}}>
          Nem toda<br/>desatenção é<br/>transtorno.
        </div>
      </div>
      {/* sticky-bottom pill, mobile */}
      <div style={{
        position:'absolute', bottom:16, left:14, right:14,
        background:'rgba(17,26,44,0.85)',
        backdropFilter:'blur(20px)',
        WebkitBackdropFilter:'blur(20px)',
        border:'1px solid rgba(224,199,163,0.2)',
        borderRadius:12,
        padding:'12px 14px',
        boxShadow:'0 8px 28px rgba(0,0,0,0.55)',
      }}>
        <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:10}}>
          <div style={{width:32,height:32,borderRadius:8,background:`linear-gradient(135deg,${terra} 0%,${terraClaro} 100%)`,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
            <span style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontSize:16,fontWeight:600,color:navy}}>3ª</span>
          </div>
          <div style={{lineHeight:1.15,flex:1,minWidth:0}}>
            <div style={{fontSize:8,letterSpacing:'0.2em',color:grey,fontWeight:600,textTransform:'uppercase'}}>IMERSÃO TDAH · 3ª EDIÇÃO</div>
            <div style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontSize:13,fontWeight:500,color:off,marginTop:2}}>
              TDAH na Era Digital
            </div>
          </div>
        </div>
        <CountdownDigits size={20} gap={8}/>
      </div>
    </div>
  );
}

Object.assign(window, {
  CountdownDigits, LogoM,
  A1_StickyTopBar_Desktop, A1_StickyTopBar_Mobile,
  A2_EditorialCountdown_Desktop, A2_EditorialCountdown_Mobile,
  A3_FloatingPill_Desktop, A3_FloatingPill_Mobile,
  EPM_TOKENS: { navy, navy2, navy3, off, offWarm, terra, terraClaro, areia, grey, grey2 },
});
