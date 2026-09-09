const btn=document.querySelector('.menu-btn'), nav=document.querySelector('.nav-links');
const closeMenu=()=>{
 nav?.classList.remove('open');
 btn?.classList.remove('open');
 btn?.setAttribute('aria-expanded','false');
};
btn?.setAttribute('aria-expanded','false');
btn?.addEventListener('click',()=>{
 const isOpen=nav?.classList.toggle('open') ?? false;
 btn.classList.toggle('open',isOpen);
 btn.setAttribute('aria-expanded',String(isOpen));
});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('click',e=>{
 if(nav?.classList.contains('open') && !nav.contains(e.target) && !btn?.contains(e.target)) closeMenu();
});
document.addEventListener('keydown',e=>{
 if(e.key==='Escape') closeMenu();
});
const form=document.querySelector('#enquiry');
form?.addEventListener('submit',e=>{
 e.preventDefault(); const d=new FormData(form);
 const text=`Hello Seal Kraft,\n\nName: ${d.get('name')}\nPhone: ${d.get('phone')}\nLocation: ${d.get('location')}\nRequirement: ${d.get('service')}\nMessage: ${d.get('message')}`;
 window.open('https://wa.me/919999999999?text='+encodeURIComponent(text),'_blank');
});
