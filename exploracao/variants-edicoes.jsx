/* ============================================================
   VARIANTS C — EDIÇÕES ANTERIORES (registro documental)
   Função: provar que o evento existe como experiência real,
   antes de explicar conceitualmente. Logo após o hero.
   ============================================================ */

const Tc = window.EPM_TOKENS;
const Fade = window.FadePhoto;

/* ============================================================
   C1 — MOSAICO EDITORIAL ASSIMÉTRICO
   Foto principal grande + colunas de fotos menores ao lado.
   Estilo: revista de fotografia (Magnum, ATPM).
   ============================================================ */
function C1_Mosaic_Desktop(){
  return (
    <div className="ab" style={{padding:'56px 56px',background:Tc.navy}}>
      {/* Section header */}
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:36}}>
        <div>
          <div style={{fontSize:10,letterSpacing:'0.22em',fontWeight:700,color:Tc.terra,textTransform:'uppercase',marginBottom:10,display:'flex',alignItems:'center',gap:12}}>
            <span style={{width:32,height:1,background:Tc.terra}}></span>
            REGISTRO · EDIÇÕES 01 E 02
          </div>
          <h2 style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:42,lineHeight:1,letterSpacing:'-0.025em',margin:0,color:Tc.off,maxWidth:600}}>
            Uma discussão que já ocupou a sala<br/>antes de ocupar a página.
          </h2>
        </div>
        <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:11,letterSpacing:'0.08em',color:Tc.grey,textTransform:'uppercase',textAlign:'right'}}>
          2024 — 2025<br/>
          <span style={{color:Tc.azulCinza2}}>São Paulo</span>
        </div>
      </div>
      {/* Mosaic grid */}
      <div style={{display:'grid',gridTemplateColumns:'1.6fr 1fr 1fr',gridTemplateRows:'180px 180px',gap:14,height:374}}>
        <div style={{gridRow:'1 / span 2',position:'relative'}}>
          <Fade src="assets/doc-1.jpg" variant="duotone" style={{width:'100%',height:'100%'}}/>
          <div style={{position:'absolute',bottom:16,left:16,right:16,fontFamily:"'JetBrains Mono', monospace",fontSize:10,letterSpacing:'0.12em',color:Tc.areia,textTransform:'uppercase'}}>
            2ª EDIÇÃO · DISCUSSÃO ABERTA
          </div>
        </div>
        <div><Fade src="assets/doc-2.jpg" variant="duotone" style={{width:'100%',height:'100%'}}/></div>
        <div><Fade src="assets/doc-3.jpg" variant="duotone" style={{width:'100%',height:'100%'}}/></div>
        <div><Fade src="assets/doc-4.jpg" variant="duotone" style={{width:'100%',height:'100%'}}/></div>
        <div><Fade src="assets/doc-5.jpg" variant="duotone" style={{width:'100%',height:'100%'}}/></div>
      </div>
      {/* Caption strip */}
      <div style={{marginTop:24,display:'grid',gridTemplateColumns:'2fr 1fr',gap:36,paddingTop:24,borderTop:'1px solid rgba(255,255,255,0.08)'}}>
        <p style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:18,lineHeight:1.45,color:Tc.areia,margin:0,maxWidth:520}}>
          “Voltei para o consultório com perguntas melhores para casos que eu achava já compreender.”
        </p>
        <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:10,letterSpacing:'0.1em',color:Tc.grey,textTransform:'uppercase',alignSelf:'end'}}>
          PSICÓLOGA, 2ª EDIÇÃO<br/><span style={{color:Tc.azulCinza2}}>SÃO PAULO · 2025</span>
        </div>
      </div>
    </div>
  );
}

function C1_Mosaic_Mobile(){
  return (
    <div className="ab" style={{padding:'28px 18px',background:Tc.navy}}>
      <div style={{fontSize:9,letterSpacing:'0.2em',fontWeight:700,color:Tc.terra,textTransform:'uppercase',marginBottom:10}}>
        — REGISTRO · EDIÇÕES 01 E 02
      </div>
      <h2 style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:26,lineHeight:1,letterSpacing:'-0.02em',margin:'0 0 24px',color:Tc.off}}>
        Uma discussão que já ocupou a sala antes da página.
      </h2>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
        <div style={{gridColumn:'1 / span 2',height:200,position:'relative'}}>
          <Fade src="assets/doc-1.jpg" variant="duotone" style={{width:'100%',height:'100%'}}/>
          <div style={{position:'absolute',bottom:10,left:10,fontFamily:"'JetBrains Mono', monospace",fontSize:8.5,letterSpacing:'0.12em',color:Tc.areia,textTransform:'uppercase'}}>
            2ª EDIÇÃO · DISCUSSÃO
          </div>
        </div>
        <div style={{height:130}}><Fade src="assets/doc-2.jpg" variant="duotone" style={{width:'100%',height:'100%'}}/></div>
        <div style={{height:130}}><Fade src="assets/doc-3.jpg" variant="duotone" style={{width:'100%',height:'100%'}}/></div>
        <div style={{height:130}}><Fade src="assets/doc-4.jpg" variant="duotone" style={{width:'100%',height:'100%'}}/></div>
        <div style={{height:130}}><Fade src="assets/doc-5.jpg" variant="duotone" style={{width:'100%',height:'100%'}}/></div>
      </div>
      <p style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:14,lineHeight:1.45,color:Tc.areia,margin:'20px 0 6px',paddingTop:16,borderTop:'1px solid rgba(255,255,255,0.08)'}}>
        “Voltei para o consultório com perguntas melhores para casos que eu achava já compreender.”
      </p>
      <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:8.5,letterSpacing:'0.12em',color:Tc.grey,textTransform:'uppercase'}}>
        PSICÓLOGA · 2ª EDIÇÃO
      </div>
    </div>
  );
}

/* ============================================================
   C2 — CINEMA SCROLL (carrossel letterbox)
   Faixa horizontal de fotos com proporção cinematográfica.
   Cada slide tem caption embaixo. Indicação de "scroll".
   ============================================================ */
function C2_CinemaScroll_Desktop(){
  const items = [
    {src:'assets/doc-1.jpg', cap:'SALA CHEIA · 2ª EDIÇÃO', loc:'SP, 2025'},
    {src:'assets/doc-3.jpg', cap:'DISCUSSÃO DE CASO · MANHÃ', loc:'SP, 2025'},
    {src:'assets/doc-2.jpg', cap:'PERGUNTAS DA AUDIÊNCIA', loc:'SP, 2024'},
    {src:'assets/doc-5.jpg', cap:'INTERAÇÃO ENTRE PARES', loc:'SP, 2025'},
  ];
  return (
    <div className="ab" style={{padding:'56px 0 36px',background:Tc.navy}}>
      <div style={{padding:'0 56px',marginBottom:32,display:'flex',justifyContent:'space-between',alignItems:'flex-end'}}>
        <div>
          <div style={{fontSize:10,letterSpacing:'0.22em',fontWeight:700,color:Tc.terra,textTransform:'uppercase',marginBottom:10}}>
            — COMO FORAM AS EDIÇÕES ANTERIORES
          </div>
          <h2 style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:42,lineHeight:1,letterSpacing:'-0.025em',margin:0,color:Tc.off}}>
            Já aconteceu. Duas vezes.
          </h2>
        </div>
        <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:10,letterSpacing:'0.12em',color:Tc.grey,textTransform:'uppercase'}}>
          ARRASTE → 04 FOTOS
        </div>
      </div>
      <div style={{display:'flex',gap:12,paddingLeft:56,paddingRight:56,overflowX:'auto',scrollbarWidth:'none'}}>
        {items.map((it,i)=>(
          <div key={i} style={{flexShrink:0,width:340}}>
            {/* Cinema bars wrapper */}
            <div style={{aspectRatio:'2.39 / 1',background:'#000',position:'relative'}}>
              <img src={it.src} style={{width:'100%',height:'100%',objectFit:'cover',filter:'grayscale(0.6) contrast(1.05)'}}/>
            </div>
            <div style={{marginTop:12,fontFamily:"'JetBrains Mono', monospace",fontSize:10,letterSpacing:'0.12em',color:Tc.areia,textTransform:'uppercase'}}>
              {it.cap}
            </div>
            <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:9.5,letterSpacing:'0.1em',color:Tc.grey,textTransform:'uppercase',marginTop:4}}>
              {it.loc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function C2_CinemaScroll_Mobile(){
  const items = [
    {src:'assets/doc-1.jpg', cap:'SALA CHEIA', loc:'SP, 2025'},
    {src:'assets/doc-3.jpg', cap:'DISCUSSÃO DE CASO', loc:'SP, 2025'},
    {src:'assets/doc-2.jpg', cap:'PERGUNTAS', loc:'SP, 2024'},
  ];
  return (
    <div className="ab" style={{padding:'28px 0 24px',background:Tc.navy}}>
      <div style={{padding:'0 18px',marginBottom:20}}>
        <div style={{fontSize:9,letterSpacing:'0.2em',fontWeight:700,color:Tc.terra,textTransform:'uppercase',marginBottom:10}}>
          — EDIÇÕES ANTERIORES
        </div>
        <h2 style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:28,lineHeight:1,letterSpacing:'-0.02em',margin:0,color:Tc.off}}>
          Já aconteceu.<br/>Duas vezes.
        </h2>
      </div>
      <div style={{display:'flex',gap:10,paddingLeft:18,paddingRight:18,overflowX:'auto'}}>
        {items.map((it,i)=>(
          <div key={i} style={{flexShrink:0,width:260}}>
            <div style={{aspectRatio:'2.39 / 1',background:'#000'}}>
              <img src={it.src} style={{width:'100%',height:'100%',objectFit:'cover',filter:'grayscale(0.6) contrast(1.05)'}}/>
            </div>
            <div style={{marginTop:10,fontFamily:"'JetBrains Mono', monospace",fontSize:9,letterSpacing:'0.12em',color:Tc.areia,textTransform:'uppercase'}}>
              {it.cap} · <span style={{color:Tc.grey}}>{it.loc}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{padding:'14px 18px 0',fontFamily:"'JetBrains Mono', monospace",fontSize:9,letterSpacing:'0.12em',color:Tc.grey,textTransform:'uppercase'}}>
        ARRASTE PARA OS LADOS →
      </div>
    </div>
  );
}

/* ============================================================
   C3 — PHOTO ESSAY (fotos com narrativa lateral)
   Mais editorial, mais íntimo. Fotos pequenas em coluna direita,
   texto narrativo curto à esquerda.
   ============================================================ */
function C3_PhotoEssay_Desktop(){
  return (
    <div className="ab" style={{padding:'56px',background:Tc.navy,display:'grid',gridTemplateColumns:'0.85fr 1.15fr',gap:48}}>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
        <div style={{fontSize:10,letterSpacing:'0.22em',fontWeight:700,color:Tc.terra,textTransform:'uppercase',marginBottom:14}}>
          — REGISTRO · EDIÇÕES 01 E 02
        </div>
        <h2 style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:38,lineHeight:1.05,letterSpacing:'-0.025em',margin:'0 0 24px',color:Tc.off}}>
          O que aconteceu nas duas primeiras edições.
        </h2>
        <p style={{fontFamily:"'Manrope', sans-serif",fontSize:15,lineHeight:1.6,color:Tc.azulCinza,margin:0,maxWidth:380}}>
          Duas salas cheias, em São Paulo. Profissionais de todo o país discutindo, lado a lado, casos clínicos reais durante um dia inteiro.
        </p>
        <div style={{marginTop:32,display:'grid',gridTemplateColumns:'1fr 1fr',gap:20,maxWidth:380}}>
          <div>
            <div style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:500,fontSize:36,color:Tc.areia,lineHeight:1}}>237</div>
            <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:10,letterSpacing:'0.12em',color:Tc.grey,textTransform:'uppercase',marginTop:6}}>profissionais em sala</div>
          </div>
          <div>
            <div style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:500,fontSize:36,color:Tc.areia,lineHeight:1}}>02</div>
            <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:10,letterSpacing:'0.12em',color:Tc.grey,textTransform:'uppercase',marginTop:6}}>edições anteriores</div>
          </div>
        </div>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gridTemplateRows:'1fr 1fr',gap:8,height:480}}>
        <div style={{gridRow:'1 / span 2'}}><Fade src="assets/doc-1.jpg" variant="duotone" style={{width:'100%',height:'100%'}}/></div>
        <div><Fade src="assets/doc-2.jpg" variant="duotone" style={{width:'100%',height:'100%'}}/></div>
        <div><Fade src="assets/doc-3.jpg" variant="duotone" style={{width:'100%',height:'100%'}}/></div>
      </div>
    </div>
  );
}

function C3_PhotoEssay_Mobile(){
  return (
    <div className="ab" style={{padding:'28px 18px',background:Tc.navy}}>
      <div style={{fontSize:9,letterSpacing:'0.2em',fontWeight:700,color:Tc.terra,textTransform:'uppercase',marginBottom:10}}>
        — REGISTRO · EDIÇÕES 01 E 02
      </div>
      <h2 style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:26,lineHeight:1.02,letterSpacing:'-0.02em',margin:'0 0 14px',color:Tc.off}}>
        O que aconteceu nas duas primeiras edições.
      </h2>
      <p style={{fontFamily:"'Manrope', sans-serif",fontSize:13,lineHeight:1.55,color:Tc.azulCinza,margin:'0 0 22px'}}>
        Duas salas cheias em SP. Profissionais de todo o país discutindo casos clínicos reais durante um dia inteiro.
      </p>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:6,marginBottom:18}}>
        <div style={{gridColumn:'1 / span 2',height:200}}><Fade src="assets/doc-1.jpg" variant="duotone" style={{width:'100%',height:'100%'}}/></div>
        <div style={{height:130}}><Fade src="assets/doc-2.jpg" variant="duotone" style={{width:'100%',height:'100%'}}/></div>
        <div style={{height:130}}><Fade src="assets/doc-3.jpg" variant="duotone" style={{width:'100%',height:'100%'}}/></div>
      </div>
      <div style={{display:'flex',gap:24,paddingTop:14,borderTop:'1px solid rgba(255,255,255,0.08)'}}>
        <div>
          <div style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:500,fontSize:28,color:Tc.areia,lineHeight:1}}>237</div>
          <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:9,letterSpacing:'0.12em',color:Tc.grey,textTransform:'uppercase',marginTop:4}}>profissionais</div>
        </div>
        <div>
          <div style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:500,fontSize:28,color:Tc.areia,lineHeight:1}}>02</div>
          <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:9,letterSpacing:'0.12em',color:Tc.grey,textTransform:'uppercase',marginTop:4}}>edições anteriores</div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  C1_Mosaic_Desktop, C1_Mosaic_Mobile,
  C2_CinemaScroll_Desktop, C2_CinemaScroll_Mobile,
  C3_PhotoEssay_Desktop, C3_PhotoEssay_Mobile,
});
