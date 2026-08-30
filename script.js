const toggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('.site-nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));}

function refreshNexaPortfolioCard(){
  const cards=[...document.querySelectorAll('.project-card')];
  const card=cards.find(item=>item.querySelector('h3')?.textContent.trim()==='Nexa');
  if(!card)return;

  const type=card.querySelector('.project-type');
  if(type)type.textContent='AI COMMAND CENTER · FULL-STACK · NODE + PYTHON';

  const lead=card.querySelector('.project-lead');
  if(lead)lead.textContent='A production AI Engineering Command Center that unifies repository intelligence, deterministic PR risk, deployment evidence, incident RCA, system health, and context-aware engineering conversations in one mixed-runtime product.';

  const points=card.querySelector('.project-points');
  if(points)points.innerHTML=`
    <li>Seven engineering surfaces: Overview, Repositories, PR Risk, Deployments, Incidents, Conversations, and System Health</li>
    <li>Context-aware Ask Nexa: the client sends workspace intent while the server independently rebuilds authoritative PR, deployment, repository, and health evidence</li>
    <li>Mixed-runtime Vercel architecture with React/Vite + Express/Node orchestration and a Python ForgeIncident RCA specialist</li>
    <li>MongoDB Atlas persistence, OpenAI Responses API, deterministic evidence boundaries, and separate Node + Python GitHub Actions CI lanes</li>
  `;

  const stack=card.querySelector('.project-stack');
  if(stack)stack.innerHTML='<span>React</span><span>Node.js</span><span>Express</span><span>Python</span><span>MongoDB</span><span>OpenAI API</span><span>GitHub Actions</span><span>Vercel</span>';

  let note=card.querySelector('.project-note');
  if(!note){
    note=document.createElement('p');
    note.className='project-note';
    const actions=card.querySelector('.card-actions');
    if(actions)card.insertBefore(note,actions);else card.appendChild(note);
  }
  note.textContent='Engineering evolution: Nexa began as a MERN conversation workspace and was iteratively refactored into a production command center using protected feature splinters, preview deployments, mixed-runtime CI, and evidence-first specialist boundaries.';
}

refreshNexaPortfolioCard();

const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
