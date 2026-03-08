/* CURSOR */
const cur=document.getElementById('cur'),ring=document.getElementById('curRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.transform=`translate(${mx-5}px,${my-5}px)`});
(function tick(){rx+=(mx-rx-19)*.1;ry+=(my-ry-19)*.1;ring.style.transform=`translate(${rx}px,${ry}px)`;requestAnimationFrame(tick)})();
document.querySelectorAll('a,button').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cur.style.width='16px';cur.style.height='16px';ring.style.opacity='.15'});
  el.addEventListener('mouseleave',()=>{cur.style.width='10px';cur.style.height='10px';ring.style.opacity='.45'});
});

/* LOADER COUNTER */
let pct=0;
const pctEl=document.getElementById('loaderPct');
const iv=setInterval(()=>{pct=Math.min(pct+Math.floor(Math.random()*6)+2,100);pctEl.textContent=pct+'%';if(pct>=100)clearInterval(iv)},60);
setTimeout(()=>document.getElementById('enterBtn').classList.add('visible'),3200);

/* ENTER SITE */
function enterSite(){
  document.getElementById('curtain').querySelectorAll('.intro-curtain-panel').forEach(p=>p.classList.add('fly'));
  setTimeout(()=>{
    const intro=document.getElementById('intro');
    intro.style.transition='opacity .5s ease';intro.style.opacity='0';intro.style.pointerEvents='none';
    document.body.classList.add('unlocked');
    setTimeout(()=>intro.style.display='none',550);
  },700);
}

/* NAV */
window.addEventListener('scroll',()=>document.getElementById('nav').classList.toggle('scrolled',scrollY>60));

/* SCROLL REVEAL */
const obs=new IntersectionObserver(entries=>{
  entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('visible'),i*90);obs.unobserve(e.target)}});
},{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));