const P=[
{n:"Солнце",t:"Звезда, жёлтый карлик (G2V)",c:["#fff3b0","#ff9a1f"],sz:30,or:0,yrs:0,au:"—",per:"≈230 млн лет вокруг центра Галактики",
 d:"1 392 700 км",m:"1,99·10³⁰ кг (99,86% массы системы)",day:"≈25 суток на экваторе",moons:"8 планет",temp:"Поверхность ≈5 500 °C, ядро ≈15 млн °C",g:"274 м/с²",atm:"Водород ≈73%, гелий ≈25%",
 about:"Единственная звезда Солнечной системы. Энергия рождается в ядре при термоядерном синтезе: водород превращается в гелий.",
 facts:["Свет от Солнца доходит до Земли за 8 минут 20 секунд.","Возраст Солнца — около 4,6 млрд лет, примерно столько же ему осталось до стадии красного гиганта.","В объём Солнца поместилось бы около 1,3 млн Земель."]},
{n:"Меркурий",t:"Планета земной группы",c:["#c9c2b8","#6f6a63"],sz:4,or:.17,yrs:.241,au:"0,39 а.е. (57,9 млн км)",per:"88 земных суток",
 d:"4 879 км",m:"3,30·10²³ кг (0,055 массы Земли)",day:"58,6 земных суток",moons:"нет",temp:"от −173 до +427 °C",g:"3,7 м/с²",atm:"практически отсутствует (экзосфера)",
 about:"Самая маленькая и самая близкая к Солнцу планета. Поверхность покрыта кратерами и похожа на лунную.",
 facts:["Год на Меркурии короче его солнечных суток: сутки длятся около 176 земных.","В полярных кратерах, куда не попадает свет, обнаружен водяной лёд.","Из-за отсутствия атмосферы перепад температур — более 600 °C."]},
{n:"Венера",t:"Планета земной группы",c:["#f5d9a0","#b9863b"],sz:7,or:.26,yrs:.615,au:"0,72 а.е. (108,2 млн км)",per:"224,7 земных суток",
 d:"12 104 км",m:"4,87·10²⁴ кг (0,815 массы Земли)",day:"243 земных суток (обратное вращение)",moons:"нет",temp:"≈+465 °C",g:"8,9 м/с²",atm:"CO₂ ≈96%, давление ≈92 атм",
 about:"Самая горячая планета из-за мощного парникового эффекта. Скрыта плотными облаками из серной кислоты.",
 facts:["Вращается в обратную сторону: Солнце встаёт на западе.","Сутки на Венере длиннее её года.","Это самая яркая «звезда» земного неба после Луны."]},
{n:"Земля",t:"Планета земной группы",c:["#7fc4ff","#1f5fb0"],sz:7.5,or:.36,yrs:1,au:"1,00 а.е. (149,6 млн км)",per:"365,25 суток",
 d:"12 742 км",m:"5,97·10²⁴ кг",day:"23 ч 56 мин",moons:"1 (Луна)",temp:"от −89 до +57 °C, средняя +15 °C",g:"9,8 м/с²",atm:"азот 78%, кислород 21%",
 about:"Единственная известная планета с жизнью. Около 71% поверхности покрыто жидкой водой.",
 facts:["Ось наклонена на 23,4° — отсюда смена времён года.","Магнитное поле защищает от солнечного ветра.","Луна стабилизирует наклон оси и вызывает приливы."]},
{n:"Марс",t:"Планета земной группы",c:["#e8896a","#8f3a22"],sz:5,or:.46,yrs:1.881,au:"1,52 а.е. (227,9 млн км)",per:"687 земных суток",
 d:"6 779 км",m:"6,42·10²³ кг (0,107 массы Земли)",day:"24 ч 37 мин",moons:"2 (Фобос и Деймос)",temp:"от −125 до +20 °C, средняя −63 °C",g:"3,7 м/с²",atm:"разреженная, CO₂ ≈95%, давление ≈0,6% земного",
 about:"«Красная планета» окрашена оксидами железа. На ней есть полярные шапки, каньоны и древние русла рек.",
 facts:["Гора Олимп высотой около 22 км — самый высокий вулкан Солнечной системы.","Каньон Долины Маринера тянется более чем на 4 000 км.","На Марсе работают марсоходы и орбитальные аппараты."]},
{n:"Юпитер",t:"Газовый гигант",c:["#e9cfae","#a8723f"],sz:16,or:.60,yrs:11.86,au:"5,20 а.е. (778,5 млн км)",per:"11,86 лет",
 d:"139 820 км",m:"1,90·10²⁷ кг (318 масс Земли)",day:"9 ч 56 мин",moons:"более 95",temp:"≈−110 °C на уровне облаков",g:"24,8 м/с²",atm:"водород ≈90%, гелий ≈10%",
 about:"Крупнейшая планета системы: тяжелее всех остальных планет вместе взятых более чем вдвое.",
 facts:["Большое красное пятно — антициклон, существующий не менее 150 лет.","Спутник Ганимед — самый большой в системе, крупнее Меркурия.","На Европе под ледяной коркой, вероятно, есть океан."]},
{n:"Сатурн",t:"Газовый гигант",c:["#f2e0b0","#b8975a"],sz:13,or:.73,yrs:29.46,au:"9,58 а.е. (1,43 млрд км)",per:"29,4 года",rings:1,
 d:"116 460 км",m:"5,68·10²⁶ кг (95 масс Земли)",day:"10 ч 33 мин",moons:"более 140",temp:"≈−140 °C",g:"10,4 м/с²",atm:"водород ≈96%, гелий ≈3%",
 about:"Известен своей системой колец из льда и камня. Средняя плотность ниже плотности воды.",
 facts:["Кольца простираются на ≈280 000 км, но толщина — от десятка метров до километра.","У спутника Титана есть плотная атмосфера и метановые озёра.","На северном полюсе Сатурна наблюдается шестиугольный вихрь."]},
{n:"Уран",t:"Ледяной гигант",c:["#b6f0f0","#4aa9b5"],sz:10,or:.86,yrs:84.0,au:"19,2 а.е. (2,87 млрд км)",per:"84 года",
 d:"50 724 км",m:"8,68·10²⁵ кг (14,5 масс Земли)",day:"17 ч 14 мин (обратное вращение)",moons:"28",temp:"≈−195 °C (минимум −224 °C)",g:"8,9 м/с²",atm:"водород, гелий, метан",
 about:"Планета «лежит на боку»: ось наклонена почти на 98°. Голубоватый цвет создаёт метан.",
 facts:["Открыт Уильямом Гершелем в 1781 году.","Времена года длятся по ≈21 году.","У Урана есть тонкая система из 13 колец."]},
{n:"Нептун",t:"Ледяной гигант",c:["#7b9cff","#2c3fa8"],sz:10,or:.98,yrs:164.8,au:"30,1 а.е. (4,5 млрд км)",per:"164,8 года",
 d:"49 244 км",m:"1,02·10²⁶ кг (17 масс Земли)",day:"16 ч 6 мин",moons:"16",temp:"≈−201 °C",g:"11,1 м/с²",atm:"водород, гелий, метан",
 about:"Самая далёкая планета. Здесь дуют самые сильные ветры в системе — до 2 000 км/ч.",
 facts:["Открыта в 1846 году «на кончике пера» — по расчётам Леверье и Адамса.","С момента открытия Нептун совершил лишь один полный оборот (2011 г.).","Крупнейший спутник Тритон движется в обратную сторону."]}
];
const cv=document.getElementById('c'),ctx=cv.getContext('2d'),tip=document.getElementById('tip'),ov=document.getElementById('ov');
let W,H,R,cx,cy,k,stars=[],t=0,speed=1,paused=false,ts=1,hov=null,mx=0,my=0,m=0,real=false,last=performance.now();
const UA=[0,.39,.72,1,1.52,5.2,9.58,19.2,30.1];
P.forEach((p,i)=>{p.a=i*1.1+.4;p.ua=UA[i]/30.1});
P[3].mv=[{d:2.2,s:6,z:1.6,c:"#ddd"}];
P[5].mv=[{d:1.7,s:9,z:1.7,c:"#e8d28a"},{d:2.1,s:6,z:1.5,c:"#c9b7a0"},{d:2.6,s:4,z:2.1,c:"#b8b0a8"},{d:3.2,s:2.4,z:1.9,c:"#9a8f85"}];
const belt=Array.from({length:260},()=>({a:Math.random()*6.28,r:Math.random(),s:Math.random()*.9+.4}));
function resize(){const d=devicePixelRatio||1,r=cv.getBoundingClientRect();W=r.width;H=r.height;cv.width=W*d;cv.height=H*d;ctx.setTransform(d,0,0,d,0,0);cx=W/2;cy=H/2;R=Math.min(W,H)/2-16;k=Math.max(.6,Math.min(1.3,R/380));stars=Array.from({length:220},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.1+.2,p:Math.random()*6}))}
addEventListener('resize',resize);
const orr=p=>p.or+(p.ua-p.or)*m;
function pos(p){if(!p.or)return{x:cx,y:cy,r:p.sz*k*(1-.85*m)};const a=p.a+t*.5/Math.sqrt(p.yrs),o=orr(p)*R;return{x:cx+Math.cos(a)*o,y:cy+Math.sin(a)*o,r:p.sz*k}}
function orb(x,y,r,c){const g=ctx.createRadialGradient(x-r*.35,y-r*.35,r*.1,x,y,r);g.addColorStop(0,c[0]);g.addColorStop(1,c[1]);ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,r,0,7);ctx.fill()}
function frame(now){
 const dt=Math.min(.05,(now-last)/1000);last=now;
 ts+=((hov?.12:1)-ts)*.12;m+=((real?1:0)-m)*.08;
 if(!paused)t+=dt*speed*ts;
 ctx.clearRect(0,0,W,H);
 stars.forEach(s=>{ctx.globalAlpha=.4+.4*Math.sin(now/900+s.p);ctx.fillStyle="#fff";ctx.fillRect(s.x,s.y,s.r,s.r)});
 ctx.globalAlpha=1;
 ctx.strokeStyle="rgba(150,170,220,.18)";ctx.lineWidth=1;
 P.forEach(p=>{if(p.or){ctx.beginPath();ctx.arc(cx,cy,orr(p)*R,0,7);ctx.stroke()}});
 const br=.53+(2.7/30.1-.53)*m;ctx.fillStyle="rgba(190,180,165,.7)";
 belt.forEach(b=>{const a=b.a+t*.5/Math.sqrt(4.5),o=(br+(b.r-.5)*.05*(1-.5*m))*R;ctx.fillRect(cx+Math.cos(a)*o,cy+Math.sin(a)*o,b.s,b.s)});
 const sun=P[0],sk=sun.sz*k*(1-.85*m);
 const gl=ctx.createRadialGradient(cx,cy,sk*.6,cx,cy,sk*2.6);gl.addColorStop(0,"rgba(255,170,40,.5)");gl.addColorStop(1,"rgba(255,170,40,0)");
 ctx.fillStyle=gl;ctx.beginPath();ctx.arc(cx,cy,sk*2.6,0,7);ctx.fill();
 P.forEach(p=>{
  const q=pos(p);p.q=q;
  if(p.rings){ctx.save();ctx.translate(q.x,q.y);ctx.rotate(-.35);ctx.strokeStyle="rgba(230,210,160,.75)";ctx.lineWidth=2.5*k;ctx.beginPath();ctx.ellipse(0,0,q.r*2,q.r*.65,0,Math.PI,2*Math.PI);ctx.stroke();ctx.restore()}
  orb(q.x,q.y,q.r,p.c);(p.mv||[]).forEach(v=>{const a=t*v.s+p.a*3,d=q.r*v.d;ctx.fillStyle=v.c;ctx.beginPath();ctx.arc(q.x+Math.cos(a)*d,q.y+Math.sin(a)*d,v.z*k,0,7);ctx.fill()});
  if(p.rings){ctx.save();ctx.translate(q.x,q.y);ctx.rotate(-.35);ctx.strokeStyle="rgba(230,210,160,.75)";ctx.lineWidth=2.5*k;ctx.beginPath();ctx.ellipse(0,0,q.r*2,q.r*.65,0,0,Math.PI);ctx.stroke();ctx.restore()}
  if(p===hov){ctx.strokeStyle="#ffb347";ctx.lineWidth=2;ctx.beginPath();ctx.arc(q.x,q.y,q.r+6,0,7);ctx.stroke()}
  ctx.fillStyle=p===hov?"#fff":"rgba(200,210,235,.7)";ctx.font="11px system-ui,sans-serif";ctx.textAlign="center";
  ctx.fillText(p.n,q.x,q.y+q.r+(p.rings?q.r*.9:0)+14);
 });
 requestAnimationFrame(frame)
}
function hit(x,y){let b=null,bd=1e9;P.forEach(p=>{const q=p.q;if(!q)return;const d=Math.hypot(x-q.x,y-q.y);if(d<=Math.max(q.r+(p.rings?q.r:0)+6,14)&&d<bd){bd=d;b=p}});return b}
function pt(e){const r=cv.getBoundingClientRect();return[e.clientX-r.left,e.clientY-r.top]}
cv.addEventListener('pointermove',e=>{[mx,my]=pt(e);hov=hit(mx,my);cv.style.cursor=hov?'pointer':'default';
 if(hov){tip.innerHTML=`<b>${hov.n}</b><i>${hov.t}</i>${hov.or?`От Солнца: ${hov.au}<br>Год: ${hov.per}`:`Диаметр: ${hov.d}<br>Поверхность: ${hov.temp.split(',')[0]}`}<br><small>Нажмите — подробнее</small>`;
  tip.style.left=Math.min(mx+16,W-240)+'px';tip.style.top=Math.min(my+16,H-130)+'px';tip.style.opacity=1}else tip.style.opacity=0});
cv.addEventListener('pointerleave',()=>{hov=null;tip.style.opacity=0});
cv.addEventListener('click',e=>{const[x,y]=pt(e),p=hit(x,y);if(p)openM(p)});
function openM(p){tip.style.opacity=0;
 const row=(a,b)=>`<div><small>${a}</small>${b}</div>`;
 document.getElementById('mc').innerHTML=`<div class="hd"><div class="orb" style="background:radial-gradient(circle at 35% 35%,${p.c[0]},${p.c[1]})"></div><div><h2>${p.n}</h2><p>${p.t}</p></div></div>
 <p>${p.about}</p><div class="grid">${row("Диаметр",p.d)}${row("Масса",p.m)}${row("Расстояние от Солнца",p.au)}${row(p.or?"Год (оборот вокруг Солнца)":"Оборот вокруг Галактики",p.per)}${row("Сутки (вращение)",p.day)}${row(p.or?"Спутники":"Планеты",p.moons)}${row("Температура",p.temp)}${row("Сила тяжести",p.g)}${row(p.or?"Атмосфера":"Состав",p.atm)}</div>
 <h3>Интересные факты</h3><ul>${p.facts.map(f=>`<li>${f}</li>`).join('')}</ul>`;
 ov.classList.add('on')}
function closeM(){ov.classList.remove('on')}
document.getElementById('x').onclick=closeM;
ov.addEventListener('click',e=>{if(e.target===ov)closeM()});
addEventListener('keydown',e=>{if(e.key==='Escape')closeM()});
document.getElementById('pp').onclick=e=>{paused=!paused;e.target.textContent=paused?'Продолжить':'Пауза'};
document.getElementById('sp').oninput=e=>speed=+e.target.value;
document.getElementById('sc').onclick=e=>{real=!real;e.target.textContent=real?'Масштаб: реальный':'Масштаб: условный'};
resize();requestAnimationFrame(frame);