/* ============================================================
   VARIANTS D — ZUMBIS DIGITAIS / TENSÃO CLÍNICA
   Função: dramatizar visualmente o problema central
   (pessoas submersas em tecnologia) + gerar identificação
   antes do programa.
   IMPORTANTE: as imagens reais ainda não existem. Usamos
   placeholders striped com legenda monospace explicando
   o que entra ali (briefing fotográfico).
   ============================================================ */

const Td = window.EPM_TOKENS;
const FadeD = window.FadePhoto;

/* ---------- placeholder briefing block ---------- */
function PhotoBriefing({label, brief, height='100%', light=false}){
  return (
    <div className={"placeholder "+(light?"light":"")} style={{width:'100%',height,position:'relative',padding:0}}>
      <div style={{position:'absolute',top:14,left:14,fontFamily:"'JetBrains Mono', monospace",fontSize:9.5,letterSpacing:'0.14em',color:light?Td.grey2:Td.areia,textTransform:'uppercase',fontWeight:600}}>
        ↳ {label}
      </div>
      <div style={{position:'absolute',bottom:14,left:14,right:14,fontFamily:"'JetBrains Mono', monospace",fontSize:10.5,letterSpacing:'0.04em',color:light?Td.navy:Td.azulCinza,lineHeight:1.4}}>
        {brief}
      </div>
    </div>
  );
}

/* ============================================================
   D1 — DIPTYCH "ANTES / SALA"
   Lado esquerdo: zumbi tecnológico. Lado direito: profissional 
   na sala da imersão. Em mobile, empilhados.
   ============================================================ */
function D1_Diptych_Desktop(){
  return (
    <div className="ab" style={{padding:'56px',background:Td.navy}}>
      <div style={{fontSize:10,letterSpacing:'0.22em',fontWeight:700,color:Td.terra,textTransform:'uppercase',marginBottom:14,display:'flex',alignItems:'center',gap:12}}>
        <span style={{width:32,height:1,background:Td.terra}}></span>
        TENSÃO CLÍNICA · A PERGUNTA QUE NÃO CABE EM PROTOCOLO
      </div>
      <h2 style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:42,lineHeight:1.02,letterSpacing:'-0.025em',margin:'0 0 36px',color:Td.off,maxWidth:780}}>
        Ele não consegue sustentar atenção na aula, mas passa horas em jogos altamente estimulantes.
      </h2>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20,height:340}}>
        <div style={{position:'relative'}}>
          <PhotoBriefing
            label="FOTO A · AMBIENTE DIGITAL"
            brief="Criança/jovem com celular na mão. Ambiente cinzento, luz fria do tela. B&W com toque de azul. Captura de absorção total. — Buscar em Unsplash / fotógrafo brasileiro."
          />
          <div style={{position:'absolute',top:14,right:14,background:'rgba(11,18,32,0.7)',padding:'4px 10px',fontFamily:"'JetBrains Mono', monospace",fontSize:9.5,letterSpacing:'0.16em',color:Td.areia,textTransform:'uppercase'}}>HIPERADAPTAÇÃO?</div>
        </div>
        <div style={{position:'relative'}}>
          <FadeD src="assets/doc-1.jpg" variant="duotone" style={{width:'100%',height:'100%'}}/>
          <div style={{position:'absolute',top:14,right:14,background:'rgba(11,18,32,0.7)',padding:'4px 10px',fontFamily:"'JetBrains Mono', monospace",fontSize:9.5,letterSpacing:'0.16em',color:Td.areia,textTransform:'uppercase'}}>SINTOMA?</div>
        </div>
      </div>
      <p style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:22,lineHeight:1.4,color:Td.areia,margin:'28px 0 0',maxWidth:780}}>
        Isso é TDAH, hiperadaptação ao ambiente digital, ou outra forma de sofrimento contemporâneo?
      </p>
    </div>
  );
}

function D1_Diptych_Mobile(){
  return (
    <div className="ab" style={{padding:'28px 18px',background:Td.navy}}>
      <div style={{fontSize:9,letterSpacing:'0.2em',fontWeight:700,color:Td.terra,textTransform:'uppercase',marginBottom:10}}>
        — TENSÃO CLÍNICA
      </div>
      <h2 style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:24,lineHeight:1.05,letterSpacing:'-0.02em',margin:'0 0 20px',color:Td.off}}>
        Ele não sustenta atenção na aula, mas passa horas em jogos altamente estimulantes.
      </h2>
      <div style={{display:'grid',gridTemplateRows:'180px 180px',gap:10}}>
        <div style={{position:'relative'}}>
          <PhotoBriefing
            label="A · DIGITAL"
            brief="Criança com celular. B&W frio. Absorção total."
          />
          <div style={{position:'absolute',top:10,right:10,background:'rgba(11,18,32,0.7)',padding:'3px 8px',fontFamily:"'JetBrains Mono', monospace",fontSize:8.5,letterSpacing:'0.14em',color:Td.areia,textTransform:'uppercase'}}>HIPERADAPTAÇÃO?</div>
        </div>
        <div style={{position:'relative'}}>
          <FadeD src="assets/doc-1.jpg" variant="duotone" style={{width:'100%',height:'100%'}}/>
          <div style={{position:'absolute',top:10,right:10,background:'rgba(11,18,32,0.7)',padding:'3px 8px',fontFamily:"'JetBrains Mono', monospace",fontSize:8.5,letterSpacing:'0.14em',color:Td.areia,textTransform:'uppercase'}}>SINTOMA?</div>
        </div>
      </div>
      <p style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:15,lineHeight:1.4,color:Td.areia,margin:'18px 0 0'}}>
        Isso é TDAH, hiperadaptação ao ambiente digital, ou outro sofrimento contemporâneo?
      </p>
    </div>
  );
}

/* ============================================================
   D2 — GRADE DE OBSERVAÇÃO CLÍNICA
   6 fotos pequenas + microcenas em mono ao lado. Cada uma 
   é uma "anotação clínica" sobre comportamento digital.
   ============================================================ */
function D2_ObservationGrid_Desktop(){
  const cases = [
    {label:'CASO 01 · 12 ANOS', text:'4h diárias em jogos. Concentração impecável. Reprovou em três matérias.'},
    {label:'CASO 02 · 34 ANOS', text:'Trabalho remoto. 47 abas abertas. Crise de pânico ao fechar o navegador.'},
    {label:'CASO 03 · 16 ANOS', text:'Mestre da edição de vídeo. Esquece de comer. Dorme com o celular na mão.'},
    {label:'CASO 04 · 8 ANOS',  text:'Iniciou medicação aos 7. Ainda chamada de "agitada" pela escola.'},
    {label:'CASO 05 · 41 ANOS', text:'Diagnóstico tardio. Filho recém-diagnosticado. Não sabe mais o que é hereditário.'},
    {label:'CASO 06 · 19 ANOS', text:'Conseguiu entrar na faculdade. Não consegue terminar uma leitura.'},
  ];
  return (
    <div className="ab" style={{padding:'56px',background:Td.navy}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:36}}>
        <div>
          <div style={{fontSize:10,letterSpacing:'0.22em',fontWeight:700,color:Td.terra,textTransform:'uppercase',marginBottom:10}}>
            — REGISTROS DE OBSERVAÇÃO CLÍNICA
          </div>
          <h2 style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:38,lineHeight:1,letterSpacing:'-0.025em',margin:0,color:Td.off,maxWidth:720}}>
            Seis casos que aparecem no consultório toda semana.
          </h2>
        </div>
        <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:10,letterSpacing:'0.12em',color:Td.grey,textTransform:'uppercase'}}>
          ANOTAÇÕES · 2026
        </div>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24}}>
        {cases.map((c,i)=>(
          <div key={i}>
            <div style={{aspectRatio:'4/3',marginBottom:14,position:'relative'}}>
              <PhotoBriefing label={c.label.split(' · ')[0]} brief="Placeholder: foto documental B&W relacionada (tela, dispositivo, ambiente saturado de tecnologia)."/>
            </div>
            <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:9.5,letterSpacing:'0.14em',color:Td.terra,textTransform:'uppercase',marginBottom:6}}>{c.label}</div>
            <p style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:15.5,lineHeight:1.45,color:Td.off,margin:0}}>
              {c.text}
            </p>
          </div>
        ))}
      </div>
      <div style={{marginTop:36,paddingTop:24,borderTop:'1px solid rgba(255,255,255,0.08)',fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:18,lineHeight:1.5,color:Td.areia,maxWidth:680}}>
        Você reconheceu pelo menos um desses casos? Provavelmente está vendo dois ou três por semana.
      </div>
    </div>
  );
}

function D2_ObservationGrid_Mobile(){
  const cases = [
    {label:'CASO 01 · 12A', text:'4h diárias em jogos. Concentração impecável. Reprovou em três matérias.'},
    {label:'CASO 02 · 34A', text:'47 abas abertas. Crise de pânico ao fechar o navegador.'},
    {label:'CASO 03 · 16A', text:'Mestre da edição. Esquece de comer. Dorme com o celular na mão.'},
  ];
  return (
    <div className="ab" style={{padding:'28px 18px',background:Td.navy}}>
      <div style={{fontSize:9,letterSpacing:'0.2em',fontWeight:700,color:Td.terra,textTransform:'uppercase',marginBottom:10}}>
        — REGISTROS DE OBSERVAÇÃO CLÍNICA
      </div>
      <h2 style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:26,lineHeight:1.02,letterSpacing:'-0.02em',margin:'0 0 24px',color:Td.off}}>
        Seis casos que aparecem toda semana no consultório.
      </h2>
      <div style={{display:'flex',flexDirection:'column',gap:24}}>
        {cases.map((c,i)=>(
          <div key={i}>
            <div style={{aspectRatio:'16/10',marginBottom:10,position:'relative'}}>
              <PhotoBriefing label={c.label} brief="Placeholder: foto documental B&W."/>
            </div>
            <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:9,letterSpacing:'0.14em',color:Td.terra,textTransform:'uppercase',marginBottom:4}}>{c.label}</div>
            <p style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:14,lineHeight:1.45,color:Td.off,margin:0}}>
              {c.text}
            </p>
          </div>
        ))}
      </div>
      <div style={{marginTop:22,paddingTop:16,borderTop:'1px solid rgba(255,255,255,0.08)',fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:14,lineHeight:1.5,color:Td.areia}}>
        Reconheceu algum? Provavelmente vê dois ou três por semana.
      </div>
      <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:9,letterSpacing:'0.12em',color:Td.grey,textTransform:'uppercase',marginTop:14}}>
        + VER OS OUTROS 3 CASOS
      </div>
    </div>
  );
}

/* ============================================================
   D3 — FULL-BLEED MANIFESTO + FOTOS
   Foto vertical full-bleed cobrindo metade. Manifesto na 
   outra metade. Estética: capa de filme + livro de não-ficção.
   ============================================================ */
function D3_FullBleed_Desktop(){
  return (
    <div className="ab" style={{padding:0,background:Td.navy,display:'grid',gridTemplateColumns:'1.2fr 1fr'}}>
      <div style={{position:'relative',minHeight:520}}>
        <PhotoBriefing label="FOTO PRINCIPAL · VERTICAL FULL-BLEED" brief="Placeholder: foto documental vertical, alta densidade emocional. Jovem em ambiente saturado por telas (TV, celular, monitor). Iluminação azul-fria. B&W com leve duotone navy. Inspiração: cinema documental brasileiro contemporâneo."/>
        {/* Right-edge gradient blending into navy */}
        <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg,transparent 60%,rgba(11,18,32,0.5) 85%,#0B1220 100%)',pointerEvents:'none'}}></div>
      </div>
      <div style={{padding:'56px 56px 56px 36px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
        <div style={{fontSize:10,letterSpacing:'0.22em',fontWeight:700,color:Td.terra,textTransform:'uppercase',marginBottom:18}}>
          — MANIFESTO · POR QUE AGORA
        </div>
        <h2 style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:38,lineHeight:1.05,letterSpacing:'-0.025em',margin:'0 0 18px',color:Td.off}}>
          A clínica do TDAH já não pode ser pensada fora do ambiente que disputa a atenção.
        </h2>
        <p style={{fontFamily:"'Manrope', sans-serif",fontSize:15,lineHeight:1.65,color:Td.azulCinza,margin:'0 0 22px',maxWidth:420}}>
          O dispositivo móvel não é mais um sintoma — é parte do sistema cognitivo. Diagnosticar nesse cenário exige enquadres novos que o protocolo ainda não capturou.
        </p>
        <div style={{paddingTop:18,borderTop:'1px solid rgba(255,255,255,0.1)',fontFamily:"'JetBrains Mono', monospace",fontSize:11,letterSpacing:'0.12em',color:Td.areia,textTransform:'uppercase'}}>
          ↓ O QUE A IMERSÃO PROPÕE
        </div>
      </div>
    </div>
  );
}

function D3_FullBleed_Mobile(){
  return (
    <div className="ab" style={{padding:0,background:Td.navy,display:'flex',flexDirection:'column'}}>
      <div style={{position:'relative',height:300}}>
        <PhotoBriefing label="FOTO VERTICAL B&W" brief="Jovem em ambiente saturado por telas. Iluminação azul-fria, duotone navy."/>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,transparent 50%,rgba(11,18,32,0.6) 85%,#0B1220 100%)',pointerEvents:'none'}}></div>
      </div>
      <div style={{padding:'24px 18px 28px'}}>
        <div style={{fontSize:9,letterSpacing:'0.2em',fontWeight:700,color:Td.terra,textTransform:'uppercase',marginBottom:12}}>
          — MANIFESTO · POR QUE AGORA
        </div>
        <h2 style={{fontFamily:"'Fraunces', serif",fontStyle:'italic',fontWeight:400,fontSize:26,lineHeight:1.05,letterSpacing:'-0.02em',margin:'0 0 14px',color:Td.off}}>
          A clínica do TDAH já não pode ser pensada fora do ambiente que disputa a atenção.
        </h2>
        <p style={{fontFamily:"'Manrope', sans-serif",fontSize:13.5,lineHeight:1.6,color:Td.azulCinza,margin:0}}>
          O dispositivo móvel não é mais um sintoma — é parte do sistema cognitivo. Diagnosticar exige enquadres novos.
        </p>
        <div style={{marginTop:18,paddingTop:14,borderTop:'1px solid rgba(255,255,255,0.1)',fontFamily:"'JetBrains Mono', monospace",fontSize:9.5,letterSpacing:'0.12em',color:Td.areia,textTransform:'uppercase'}}>
          ↓ O QUE A IMERSÃO PROPÕE
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  PhotoBriefing,
  D1_Diptych_Desktop, D1_Diptych_Mobile,
  D2_ObservationGrid_Desktop, D2_ObservationGrid_Mobile,
  D3_FullBleed_Desktop, D3_FullBleed_Mobile,
});
