const h=document.querySelector('header');const f=()=>h.classList.toggle('on',scrollY>60);f();addEventListener('scroll',f,{passive:true});
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
document.querySelectorAll('[data-typ]').forEach(a=>a.addEventListener('click',()=>{const r=document.querySelector(`input[name=typ][value="${a.dataset.typ}"]`);if(r)r.checked=true}));
document.querySelector('form').addEventListener('submit',e=>{e.preventDefault();e.target.querySelector('button').textContent='V náhľade sa formulár neodosiela'});
