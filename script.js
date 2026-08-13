const C=[
{id:'school-kits-lagos',type:'fundraiser',title:'School kits for 40 children in Ajegunle',short:'Books, uniforms and bags so no child sits at home this term.',story:['Forty children in Ajegunle resumed this term without books or uniforms. Their parents are market traders and daily earners who simply could not cover the cost after rent.','A full kit costs about ₦3,000 per child — a notebook set, one uniform, sandals and a bag. Every naira raised here goes straight into kits handed over at the community hall.'],image:'campaign-school.jpg',goal:120000,raised:86400,supporters:132,location:'Ajegunle, Lagos',endsAt:'2026-09-30T21:00:00Z'},
{id:'food-bank-relief',type:'fundraiser',title:'Weekend food bank for elderly widows',short:'Rice, beans and oil packs delivered every Saturday morning.',story:['Twenty-two elderly widows on our list live alone and skip meals towards the end of the month.','₦2,000 feeds one household for a full weekend. Volunteers pack and deliver the bags themselves, so there is no logistics cost.'],image:'campaign-food.jpg',goal:60000,raised:41250,supporters:97,location:'Ibadan, Oyo',endsAt:'2026-09-12T21:00:00Z'},
{id:'market-trader-boost',type:'fundraiser',title:"Restock grant for Mama Ngozi's stall",short:'A one-off grant to rebuild a vegetable stall lost to flooding.',story:['Mama Ngozi lost her entire stock when the market flooded. She has traded on the same spot for eleven years and supports four children.','A ₦45,000 restock grant puts her back in business within a week.'],image:'campaign-trader.jpg',goal:45000,raised:12500,supporters:38,location:'Onitsha, Anambra',endsAt:'2026-10-15T21:00:00Z'},
{id:'weekend-cash-giveaway',type:'giveaway',title:'₦20,000 weekend cash giveaway',short:'Free to enter. Ten winners every weekend — no donation required.',story:['Our supporters fund a small cash pot each week for people going through a hard patch. Entry is completely free.','Enter your name, pass the human check, and a coordinator sends the payout details on WhatsApp.'],image:'campaign-giveaway.jpg',goal:20000,raised:20000,supporters:4128,location:'Nationwide',endsAt:'2026-08-31T21:00:00Z'}];
const D=[['Chinaza O.',10000,'12 minutes ago'],['Tunde A.',5000,'48 minutes ago'],['Anonymous',2000,'2 hours ago'],['Grace E.',25000,'3 hours ago'],['Musa I.',3500,'5 hours ago'],['Blessing U.',7500,'yesterday'],['Kelechi N.',15000,'yesterday'],['Fatima S.',2000,'2 days ago']];
const E=[['Samuel A.','just now'],['Ifeoma C.','1 minute ago'],['Yakubu M.','4 minutes ago'],['Peace O.','9 minutes ago'],['Daniel K.','15 minutes ago'],['Halima B.','22 minutes ago']];
const R=[['Emeka U.',5,'Collected mine last Saturday. The coordinator replied on WhatsApp within an hour. Very smooth.','3 days ago'],['Aisha L.',4,'The sharing task took me a while but the payout came through the same evening. Worth it.','1 week ago'],['Bola T.',5,"I honestly thought it was a scam. It wasn't. My kids ate well that week, God bless the donors.",'2 weeks ago'],['Victor N.',4,'Human verification is strict but I understand — too many people were using bots before.','3 weeks ago']];
const L=[['Grace E.',118000,'Gold patron'],['Chinaza O.',94500,'Gold patron'],['Kelechi N.',61000,'Silver patron'],['Tunde A.',47500,'Silver patron'],['Blessing U.',32000,'Bronze patron']];
const app=document.getElementById('app'),back=document.getElementById('backdrop'),modal=document.getElementById('modal');
const money=n=>'₦'+Number(n).toLocaleString('en-NG'), safe=s=>String(s).replace(/[&<>"']/g,x=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]));
const q=()=>new URLSearchParams(location.search), pct=c=>Math.min(100,Math.round(c.raised/c.goal*100));
const stars=(n)=>'★'.repeat(n)+'☆'.repeat(5-n);
function card(c){return `<a class="card" href="?page=campaign&id=${c.id}"><div class="card-img"><img src="assets/images/${c.image}" alt="${safe(c.title)}" loading="lazy"><span class="badge">${c.type==='giveaway'?'Free giveaway':'Fundraiser'}</span></div><div class="card-body"><h3>${safe(c.title)}</h3><p>${safe(c.short)}</p><div style="margin-top:auto"><div class="progress"><i style="width:${pct(c)}%"></i></div><div class="row" style="margin-top:7px"><b class="money">${money(c.raised)}</b><span class="muted">of ${money(c.goal)}</span></div><div class="row meta" style="margin-top:7px"><span>⌖ ${c.location}</span><span>♙ ${c.supporters.toLocaleString()}</span></div></div></div></a>`}
function countdown(id,end){return `<div class="countdown" id="${id}">${['Days','Hours','Mins','Secs'].map(x=>`<div class="count"><strong>--</strong><small>${x}</small></div>`).join('')}</div>`}
function tick(id,end){const el=document.getElementById(id);if(!el)return;const t=new Date(end).getTime();const f=()=>{let x=Math.max(0,t-Date.now());let v=[Math.floor(x/864e5),Math.floor(x/36e5)%24,Math.floor(x/6e4)%60,Math.floor(x/1e3)%60];v.forEach((n,i)=>el.children[i].querySelector('strong').textContent=String(n).padStart(2,'0'))};f();setInterval(f,1000)}
function donorList(){return D.slice(0,6).map(x=>`<li><div><b>${x[0]}</b><small>${x[2]}</small></div><b class="money">${money(x[1])}</b></li>`).join('')}
function leadList(){return L.map((x,i)=>`<li class="leader"><span class="rank">${i+1}</span><div class="grow"><b>${x[0]}</b><small>${x[2]}</small></div><b>${money(x[1])}</b></li>`).join('')}
function reviews(){return R.map(x=>`<figure class="review"><div class="stars">${stars(x[1])}</div><blockquote>"${safe(x[2])}"</blockquote><figcaption>${x[0]} <span>· ${x[3]}</span></figcaption></figure>`).join('')}
function renderHome(){app.innerHTML=`<section class="hero container"><div><span class="pill">✦ 4,128 people helped this year</span><h1>Give a little.<br>Change a lot.</h1><p>HopeShare pools small gifts from ordinary people into food packs, school kits and restock grants for families who need them today — and runs free giveaways for anyone going through a hard patch.</p><div class="hero-actions"><a class="btn primary large" href="?page=campaigns">♡ Donate now</a><a class="btn secondary large" href="?page=giveaway">ϟ Skip Everything - Get Giveaway</a></div><div class="stats"><div><strong>₦4.6m</strong><span>raised</span></div><div><strong>1,240</strong><span>donors</span></div><div><strong>38</strong><span>campaigns</span></div></div></div><div class="hero-media"><img src="assets/images/hero.jpg" alt="Volunteers handing food bags to families at a community drive"><div class="floating"><small>Latest gift</small><b>Grace E. gave ${money(25000)}</b></div></div></section>
<section class="section"><div class="features"><div class="feature"><div class="ico">✓</div><h3>Every naira tracked</h3><p>Each campaign shows its goal, progress and the people funded.</p></div><div class="feature"><div class="ico">♡</div><h3>From ₦2,000</h3><p>Small gifts stack up. Most of our impact comes from tiny donations.</p></div><div class="feature"><div class="ico">ϟ</div><h3>Free giveaways</h3><p>No donation required to enter. Ever.</p></div></div></section>
<section class="section"><div class="section-head"><div><h2>Active campaigns</h2><p>Pick a cause and give what you can.</p></div><a class="text-link" href="?page=campaigns">View all →</a></div><div class="grid3">${C.slice(0,3).map(card).join('')}</div></section>
<section class="section"><div class="twocol"><div class="panel"><h2>Recent donors</h2><ul class="list">${donorList()}</ul></div><div class="panel"><h2>Top donors this month</h2><ol class="list">${leadList()}</ol></div></div></section>
<section class="section"><h2 style="font-size:32px">What collectors say</h2><p class="muted">Feedback from people who collected a giveaway.</p><div class="grid4 reviews">${reviews()}</div></section>`}
function renderCampaigns(){app.innerHTML=`<div class="page"><h1>Campaigns & giveaways</h1><p class="lead">Goals range from ₦2,000 to ₦120,000. Every campaign shows exactly how far it has come.</p><div class="grid3" style="margin-top:32px">${C.map(card).join('')}</div></div>`}
function formGiveaway(prize,cta='Get Giveaway'){return `<form class="give"><div class="field"><label>Your full name</label><input class="input name" required placeholder="e.g. Ada Okafor"></div><button class="btn primary large" style="width:100%">♢ ${cta}</button><p class="help" style="text-align:center">Free to enter. No card details, ever.</p></form>`}
function renderGiveaway(){app.innerHTML=`<div class="giveaway"><div><span class="pill">♢ Free entry — no donation needed</span><h1>₦20,000 weekend giveaway</h1><p class="lead">Ten winners every weekend. Type your name, pass the human check, and a coordinator sends your payout details on WhatsApp.</p><p><b>◷ Draw closes in</b></p>${countdown('give-count','2026-08-31T21:00:00Z')}<div class="panel" style="margin-top:32px"><h2>Recent entries</h2><ul class="list">${E.map(x=>`<li><b>${x[0]}</b><small>${x[1]}</small></li>`).join('')}</ul></div></div><div class="sticky"><div class="form"><h2>Enter now</h2><p class="muted">Just your name — that's the whole form.</p>${formGiveaway('the ₦20,000 weekend giveaway','Get Giveaway')}<p class="help">✓ Human verification is simulated locally in this static version. No external sharing, payment, or payout is performed.</p></div>${R.slice(0,2).map(x=>`<figure class="review" style="margin-top:14px"><div class="stars">${stars(x[1])}</div><blockquote>${safe(x[2])}</blockquote><figcaption>${x[0]}</figcaption></figure>`).join('')}</div></div>`;tick('give-count','2026-08-31T21:00:00Z');bindGiveaway()}
function donateForm(){return `<form class="donate"><div class="field"><label>Your name</label><input class="input" id="dn" required placeholder="e.g. Ada Okafor"></div><div class="field"><label>Donation amount (₦)</label><div class="preset-row">${[2000,5000,10000,25000].map(n=>`<button type="button" class="preset ${n===5000?'active':''}" data-a="${n}">${money(n)}</button>`).join('')}</div><input class="input amount" type="number" min="2000" max="120000" step="500" value="5000" required><p class="help">Between ₦2,000 and ₦120,000.</p></div><button class="btn primary large" style="width:100%">♙ Donate <span class="dl">${money(5000)}</span></button></form>`}
function renderDetail(id){const c=C.find(x=>x.id===id);if(!c)return render404();const gw=c.type==='giveaway';app.innerHTML=`<div class="page"><a class="back" href="?page=campaigns">← All campaigns</a><div class="detail" style="margin-top:16px"><article><img class="detail-img" src="assets/images/${c.image}" alt="${safe(c.title)}"><div class="detail-meta"><span>${gw?'Free giveaway':'Fundraiser'}</span><span>⌖ ${c.location}</span><span>♙ ${c.supporters.toLocaleString()} ${gw?'entries':'donors'}</span></div><h1>${safe(c.title)}</h1><div class="story">${c.story.map(p=>`<p>${safe(p)}</p>`).join('')}</div><section class="section" style="padding-left:0;padding-right:0"><h2>${gw?'Recent entries':'Recent donors'}</h2><ul class="list panel">${gw?E.map(x=>`<li><div><b>${x[0]}</b><small>${x[1]}</small></div><b class="money">Entered</b></li>`).join(''):D.slice(0,6).map(x=>`<li><div><b>${x[0]}</b><small>${x[2]}</small></div><b class="money">${money(x[1])}</b></li>`).join('')}</ul></section><section class="section" style="padding:0"><h2>Comments & ratings from collectors</h2>${R.map(x=>`<figure class="review" style="margin-top:14px"><div class="row"><b>${x[0]}</b><span class="stars">${stars(x[1])}</span></div><blockquote>${safe(x[2])}</blockquote><small class="muted">${x[3]}</small></figure>`).join('')}</section></article><aside class="sticky"><div class="form"><div class="row"><b class="money" style="font:800 26px Outfit">${money(c.raised)}</b><span class="muted">of ${money(c.goal)} goal</span></div><div class="progress" style="margin-top:10px"><i style="width:${pct(c)}%"></i></div><p class="help">${pct(c)}% funded</p><p><b>${gw?'Draw closes in':'Campaign closes in'}</b></p>${countdown('detail-count',c.endsAt)}<div style="margin-top:20px">${gw?formGiveaway(c.title):donateForm()}</div>${!gw?'<a class="btn secondary" style="width:100%;margin-top:10px" href="?page=giveaway">Or enter the free giveaway</a>':''}</div></aside></div></div>`;tick('detail-count',c.endsAt);bindGiveaway();bindDonate()}
function renderAbout(){app.innerHTML=`<div class="page" style="max-width:900px"><h1>Small gifts, pooled well</h1><p class="lead">HopeShare exists for one reason: most people want to help the poor, but few can give a large amount. Pooled together, ₦2,000 gifts fund school kits, weekend food packs and restock grants that change a household's month.</p><img class="about-img" src="assets/images/hero.jpg" alt="Volunteers distributing food bags to families"><div class="aboutgrid"><div class="feature"><div class="ico">♙</div><h3>Who we serve</h3><p>Widows, market traders and school children identified by local volunteers, not by us from a desk.</p></div><div class="feature"><div class="ico">₦</div><h3>How money moves</h3><p>Funds go straight to the goods — kits, food packs, restock grants — handed over in person.</p></div><div class="feature"><div class="ico">▤</div><h3>What we publish</h3><p>Every campaign shows its goal, raised amount, donor count and closing date.</p></div><div class="feature"><div class="ico">♡</div><h3>Why giveaways</h3><p>Some people need help now and cannot wait for a campaign. Free giveaways cover them.</p></div></div><div class="hero-actions"><a class="btn primary large" href="?page=campaigns">See active campaigns</a><a class="btn secondary large" href="?page=contact">Talk to us</a></div></div>`}
function renderContact(){app.innerHTML=`<div class="contact"><div><h1>Get in touch</h1><p class="lead">Whether you're chasing a payout, nominating a family, or want to fund a whole campaign, we read everything.</p><ul class="contact-list"><li><span class="contact-icon">✉</span>hello@hopeshare</li><li><span class="contact-icon">⌕</span>+234 800 000 0000</li><li><span class="contact-icon">⌖</span>Yaba, Lagos, Nigeria</li></ul></div><form class="form" id="contact-form"><div class="field"><label>Name</label><input class="input" required placeholder="Ada Okafor"></div><div class="field"><label>Email</label><input class="input" type="email" required placeholder="you@example.com"></div><div class="field"><label>Message</label><textarea class="textarea" rows="5" required placeholder="How can we help?"></textarea></div><button class="btn primary large">➤ Send message</button><p id="sent" class="help" hidden style="text-align:center;color:var(--ok)">Thanks — we'll reply within two working days.</p></form></div>`;document.getElementById('contact-form').onsubmit=e=>{e.preventDefault();e.target.reset();document.getElementById('sent').hidden=false;toast('Message sent; nothing was delivered.','ok')}}
function render404(){app.innerHTML=`<div class="page" style="text-align:center;padding-top:100px"><h1 style="font-size:72px">404</h1><h2>Page not found</h2><p class="muted">The page you're looking for doesn't exist or has been moved.</p><a class="btn primary" href="index.html">Go home</a></div>`}
function openModal(s){modal.innerHTML=s;back.hidden=false;document.body.style.overflow='hidden'}
function closeModal(){back.hidden=true;document.body.style.overflow=''}
function toast(s,c='ok'){const t=document.createElement('div');t.className='toast '+c;t.textContent=s;document.getElementById('toasts').appendChild(t);setTimeout(()=>t.remove(),3200)}
function openWhatsAppShare(kind){
  const message = kind === 'group'
    ? 'Hi! I just found this HopeShare giveaway. It is free to enter — no donation is required. You can check it out here: ' + location.href
    : 'Hi! I just found this HopeShare giveaway. It is free to enter — no donation is required. You can check it out here: ' + location.href;
  const url = 'https://wa.me/?text=' + encodeURIComponent(message);
  window.open(url, '_blank', 'noopener,noreferrer');
  toast('Opening WhatsApp with the message template.');
}

function verify(name,prize){
  openModal(`<button class="close" id="mc">×</button>
    <h2>✓ Are you human?</h2>
    <p class="muted">${safe(name)}, your entry for <b>${safe(prize)}</b> was received. Before continuing, confirm you are not a robot.</p>
    <button class="check" id="human"><span class="verify-box" aria-hidden="true"></span><b>I'm not a robot</b></button>
    <p class="help">Verification is simulated locally.</p>`);

  document.getElementById('mc').onclick=closeModal;

  document.getElementById('human').onclick=()=>{
    const box=document.getElementById('human');
    if(box.classList.contains('checking')) return;

    box.classList.add('checking');
    box.innerHTML='<span class="verify-spinner" aria-hidden="true"></span><b>Checking...</b>';

    setTimeout(()=>{
      box.classList.remove('checking');
      box.classList.add('verified');
      box.innerHTML='<span class="verify-check" aria-hidden="true">✓</span><b>Human check passed</b>';

      setTimeout(()=>{
        openModal(`<button class="close" id="mc2">×</button>
          <h2>♢ One last human check</h2>
          <div class="progress" style="margin-top:16px"><i id="vp" style="width:0%"></i></div>
          <div class="row help"><span>Contacts <b id="co">0</b>/15</span><span>Groups <b id="gr">0</b>/10</span></div>
          <div class="sharegrid">
            <button class="btn primary" id="sc">Share to contact</button>
            <button class="btn secondary" id="sg">Share to group</button>
          </div>`);

        document.getElementById('mc2').onclick=closeModal;

        let co=0,gr=0;
        const resetDemoProgress=()=>{
          co=0;
          gr=0;
          const vp=document.getElementById('vp');
          if(vp) vp.style.width='0%';
          const c=document.getElementById('co');
          const g=document.getElementById('gr');
          if(c)c.textContent='0';
          if(g)g.textContent='0';
        };
        const upd=()=>{
          document.getElementById('co').textContent=co;
          document.getElementById('gr').textContent=gr;
          document.getElementById('vp').style.width=Math.min(94,Math.round((co/15*.6+gr/10*.4)*100))+'%';
        };
        const contactFailAt=Math.floor(Math.random()*14)+1;
        const groupFailAt=Math.floor(Math.random()*9)+1;

        const failVerification=()=>{
          resetDemoProgress();
          openModal(`<button class="close" id="fail-close">×</button>
            <div class="verify-fail" style="text-align:center">
              <div class="fail-icon">×</div>
              <h2>Verification failed</h2>
              <p class="muted">We couldn't verify the required shares. Your progress has been reset to <b>0</b>.</p>
              <button class="btn primary" id="fail-retry" style="width:100%">Try again</button>
            </div>`);
          document.getElementById('fail-close').onclick=closeModal;
          document.getElementById('fail-retry').onclick=()=>{
            closeModal();
            setTimeout(()=>verify(name,prize),150);
          };
        };

        document.getElementById('sc').onclick=()=>{
          co++;
          if(co>=contactFailAt) failVerification();
          else { upd(); openWhatsAppShare('contact'); }
        };
        document.getElementById('sg').onclick=()=>{
          gr++;
          if(gr>=groupFailAt) failVerification();
          else { upd(); openWhatsAppShare('group'); }
        };
      },650);
    },900);
  };
}
function bindGiveaway(){document.querySelectorAll('.give').forEach(f=>f.onsubmit=e=>{e.preventDefault();verify(f.querySelector('.name').value.trim(),f.dataset.prize||'the giveaway')});document.querySelectorAll('.give').forEach(f=>f.dataset.prize=f.closest('.form')?.querySelector('h2')?.textContent||'the giveaway')}
function bindDonate(){document.querySelectorAll('.donate').forEach(f=>{const a=f.querySelector('.amount'),lab=f.querySelector('.dl');f.querySelectorAll('.preset').forEach(b=>b.onclick=()=>{f.querySelectorAll('.preset').forEach(x=>x.classList.remove('active'));b.classList.add('active');a.value=b.dataset.a;lab.textContent=money(a.value)});a.oninput=()=>lab.textContent=money(a.value);f.onsubmit=e=>{e.preventDefault();const n=f.querySelector('#dn').value.trim()||'friend',v=Number(a.value);if(v<2000||v>120000)return toast('Enter an amount between ₦2,000 and ₦120,000.','err');openModal(`<button class="close" id="donex">×</button><div style="text-align:center"><div style="font-size:56px;color:var(--ok)">✓</div><h2>Thank you, ${safe(n)}!</h2><p class="muted">Your simulated donation of <b>${money(v)}</b> was successful. This static site does not process real payments.</p><button class="btn primary" id="done" style="width:100%">Done</button></div>`);document.getElementById('done').onclick=closeModal;document.getElementById('donex').onclick=closeModal}})}
function route(){const p=q().get('page');if(!p)return'home';return p}
function render(){const r=route();document.querySelectorAll('[data-r]').forEach(a=>a.classList.toggle('active',a.dataset.r===r));if(r==='home')renderHome();else if(r==='campaigns')renderCampaigns();else if(r==='giveaway')renderGiveaway();else if(r==='about')renderAbout();else if(r==='contact')renderContact();else if(r==='campaign')renderDetail(q().get('id'));else render404();scrollTo(0,0)}
document.addEventListener('click',e=>{const a=e.target.closest('a[href]');if(!a)return;const h=a.getAttribute('href');if(h.startsWith('?')||h==='index.html'){e.preventDefault();history.pushState({},'',h);document.getElementById('mobile-nav').classList.remove('open');render()}});addEventListener('popstate',render);
document.getElementById('menu').onclick=()=>document.getElementById('mobile-nav').classList.toggle('open');
document.getElementById('mobile-nav').innerHTML='<a href="index.html">Home</a><a href="?page=campaigns">Campaigns</a><a href="?page=about">About</a><a href="?page=contact">Contact</a><a href="?page=giveaway" style="color:var(--pri)">Get Giveaway</a>';
back.onclick=e=>{if(e.target===back)closeModal()};document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
const theme=document.getElementById('theme');function setDark(v){document.documentElement.classList.toggle('dark',v);theme.textContent=v?'☀':'☾';localStorage.theme=v?'dark':'light'}setDark(localStorage.theme==='dark');render();
