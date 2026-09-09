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
const revealItems=document.querySelectorAll('.section,.page-hero,.dark-section,.cta,.footer,.service-card,.video-card,.client-logo,.service-list article,.three-values>div,.cap-grid>div');
revealItems.forEach(item=>{
 item.classList.add(item.matches('.service-card,.video-card,.client-logo,.service-list article,.three-values>div,.cap-grid>div')?'reveal-stagger':'reveal');
});
if('IntersectionObserver' in window){
 const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
   if(entry.isIntersecting){
    entry.target.classList.add('is-visible');
    revealObserver.unobserve(entry.target);
   }
  });
 },{threshold:.12,rootMargin:'0px 0px -40px'});
 revealItems.forEach(item=>revealObserver.observe(item));
}else{
 revealItems.forEach(item=>item.classList.add('is-visible'));
}
document.querySelectorAll('a[href]').forEach(link=>{
 const target=link.getAttribute('href');
 if(!target || link.target==='_blank' || target.startsWith('#') || target.startsWith('tel:') || target.startsWith('mailto:') || target.startsWith('https://wa.me/')) return;
 link.addEventListener('click',event=>{
  if(event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const url=new URL(link.href,window.location.href);
  if(url.origin!==window.location.origin) return;
  event.preventDefault();
  document.body.classList.add('page-leaving');
  window.setTimeout(()=>{window.location.href=url.href},260);
 });
});
const form=document.querySelector('#enquiry');
form?.addEventListener('submit',e=>{
 e.preventDefault(); const d=new FormData(form);
 const text=`Hello Seal Kraft,\n\nName: ${d.get('name')}\nPhone: ${d.get('phone')}\nLocation: ${d.get('location')}\nRequirement: ${d.get('service')}\nMessage: ${d.get('message')}`;
 window.open('https://wa.me/919987028576?text='+encodeURIComponent(text),'_blank');
});
