'use strict';
let sound=false;
const escapeText=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const chips=items=>'<div class="resume-chips">'+items.map(s=>'<span>'+escapeText(s)+'</span>').join('')+'</div>';
const sections={about:{tag:'01 / TRAINER CARD'},projects:{tag:'02 / PROJECT LAB'},experience:{tag:'03 / ADVENTURE LOG'},contact:{tag:'04 / LET’S CONNECT'}};
function sectionContent(id){const d=resumeContent,stamp='<span class="stamp">TYREE PAYNE / '+(id==='about'?'TRAINER NO. 001':'PORTFOLIO')+'</span>';
if(id==='about')return stamp+'<div class="trainer-intro"><figure class="trainer-portrait"><img src="assets/tyree-headshot.jpg" alt="Portrait of Tyree Payne" width="3456" height="2304"><figcaption>TRAINER PHOTO / TYREE</figcaption></figure><div><h2>Tyree Payne</h2><p class="role-line">Systems Engineer · '+escapeText(d.location)+'</p></div></div><nav class="section-jumps" aria-label="Trainer card contents"><button data-scroll="profile">Profile</button><button data-scroll="skills">Technical skills</button><button data-scroll="education">Education</button><button data-scroll="interests">Interests</button></nav><section id="profile"><h3>About me</h3><p>'+escapeText(d.summary)+'</p><p>'+escapeText(d.community)+'</p></section><section id="skills"><h3>Technical skills</h3>'+chips(d.skills)+'</section><section id="education"><h3>Education</h3>'+d.education.map(e=>'<article class="education-entry"><span class="entry-date">'+e.dates+'</span><h4>'+e.school+'</h4><p>'+escapeText(e.degree)+'</p><span class="entry-meta">'+e.location+(e.note?' · '+e.note:'')+'</span></article>').join('')+'</section><section id="interests"><h3>Outside the adventure</h3>'+chips(d.interests)+'</section>';
if(id==='experience')return stamp+'<h2>Experience</h2><p class="section-lead">Infrastructure, security, and the work that keeps things running.</p><p class="content-tip">Select a role to expand or collapse its details.</p><div class="career-timeline">'+d.experience.map((e,i)=>'<details class="career-entry" open><summary><span class="entry-date">'+escapeText(e.dates)+'</span><h3>'+escapeText(e.role)+'</h3><span class="entry-meta">'+e.company+' · '+e.location+'</span><span class="expand-label">'+(i===0?'CURRENT ROLE':'PREVIOUS ROLE')+' · DETAILS ↕</span></summary><ul>'+e.bullets.map(s=>'<li>'+escapeText(s)+'</li>').join('')+'</ul></details>').join('')+'</div>';
if(id==='contact')return stamp+'<h2>Let’s connect.</h2><p>Have an opportunity or a question? Let’s start a conversation.</p><div class="contact-list"><a href="mailto:'+d.email+'"><span>EMAIL</span><strong>'+d.email+'</strong><b>↗</b></a><a href="https://github.com/MrNxcho" target="_blank" rel="noopener noreferrer"><span>GITHUB</span><strong>MrNxcho</strong><b>↗</b></a><a href="'+d.linkedin+'" target="_blank" rel="noopener noreferrer"><span>LINKEDIN</span><strong>Tyree Payne</strong><b>↗</b></a><div><span>BASED IN</span><strong>'+d.location+'</strong></div></div>';
return stamp+renderProjects(escapeText);
}

const names={about:'About me',experience:'Experience',projects:'Projects',contact:'Contact'};
const cover=document.querySelector('#cover'),dex=document.querySelector('#pokedex'),screen=document.querySelector('#screen-content');
function showPage(id,focus=true){
if(!names[id])id='about';
screen.innerHTML=sectionContent(id);document.querySelector('#page-name').textContent=names[id];
document.querySelectorAll('[data-page]').forEach(b=>b.setAttribute('aria-current',b.dataset.page===id?'page':'false'));
screen.querySelectorAll('[data-scroll]').forEach(b=>b.addEventListener('click',()=>screen.querySelector('#'+b.dataset.scroll).scrollIntoView({block:'start'})));
document.querySelector('#back').disabled=id==='about';
if(focus){screen.focus({preventScroll:true});document.querySelector('#screen').scrollIntoView({block:'start'})}
}
function openDex(){cover.hidden=true;dex.hidden=false;showPage('about',false);screen.focus({preventScroll:true});dex.scrollIntoView({block:'start'});document.querySelector('#open-button').setAttribute('aria-expanded','true')}
function closeDex(){dex.hidden=true;cover.hidden=false;document.querySelector('#open-button').setAttribute('aria-expanded','false');document.querySelector('#open-button').focus();if(sound)setSoundtrack(false)}
document.querySelector('#open-button').addEventListener('click',openDex);
document.querySelector('#close-dex').addEventListener('click',closeDex);
document.querySelectorAll('[data-page]').forEach(b=>b.addEventListener('click',()=>showPage(b.dataset.page)));
document.querySelector('#back').addEventListener('click',()=>showPage('about'));
document.querySelector('#sound').addEventListener('click',()=>setSoundtrack(!sound));
document.querySelector('#theme').addEventListener('click',e=>{const green=document.body.classList.toggle('leaf');e.currentTarget.textContent=green?'Theme: Leaf Green':'Theme: Fire Red';e.currentTarget.setAttribute('aria-pressed',String(green))});
document.querySelector('.skip-link').addEventListener('click',e=>{e.preventDefault();if(dex.hidden)openDex();else screen.focus()});
document.addEventListener('keydown',e=>{if(e.repeat||e.ctrlKey||e.metaKey||e.altKey||e.isComposing||e.target.closest('input,textarea,select,[contenteditable="true"]'))return;
if((e.key==='z'||e.key==='Z'||e.key==='Escape')&&!dex.hidden){e.preventDefault();if(document.querySelector('#back').disabled)closeDex();else showPage('about')}
else if((e.key==='x'||e.key==='X')&&dex.hidden){e.preventDefault();openDex()}});
const ctx=document.querySelector('#partner-art').getContext('2d');ctx.scale(3,3);
const r=(x,y,w,h,c)=>{ctx.fillStyle=c;ctx.fillRect(x,y,w,h)},reducedMotion={matches:true};
const mudkipSprites={
down:[
'.......oo.......','......oppo......','......oppo......','.....opppo......',
'....opppppo.....','...oplllllpo....','..oplllllllpo...','.ggplbllblpgg...','gggpllllllpggg..','.ggpllllllpgg...',
'...opccccpo.....','....oppppo......','...opp..ppo.....','...oo....oo.....'],
up:[
'......ooo.......','......oppo......','.....opppo......','....opppppo.....','...oplllllpo....','..oplllllllpo...',
'.ggplllllllpgg..','gggplllllllpggg.','.ggppppppppgg...','...oppppppo.....','....otttto......','....otttto......','...opottopo.....','...oo.oo.oo.....'],
right:[
'......oo........','.....oppo.......','.....opppo......','.....oppppo.....','....opllllpo....','...opllllllpo...',
'.ttopllllblpo...','tttopllgglllpo..','tttopllgggllpo..','.ttopllggllpo...','...opcccclpo....','....opppppo.....','....opp.ppo.....','....oo..oo......']};
function mudkip(x,y,facing='down',step=0){
 const pal={o:'#614577',p:'#b36dcb',l:'#dda0e6',g:'#f4a354',c:'#f8d9ef',t:'#ead5f4',b:'#263448'};
 r(x+2,y+13,12,3,'#4a947d');
 mudkipSprites[facing==='left'?'right':facing].forEach((row,j)=>[...row].forEach((v,i)=>{if(pal[v])r(x+(facing==='left'?15-i:i),y+j+(step&&j>10?(i<8?1:-1):0),1,1,pal[v])}));
 // Keep the shiny marker still when reduced motion is preferred.
 const shine=reducedMotion.matches?0:Math.floor(performance.now()/400)%6;
 if(shine<2){r(x+17,y+2,1,5,'#fff6bf');r(x+15,y+4,5,1,'#fff6bf');r(x-2,y+9,1,1,'#fff6bf')}
}

mudkip(4,3);
