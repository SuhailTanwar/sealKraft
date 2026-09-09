const btn=document.querySelector('.menu-btn'), nav=document.querySelector('.nav-links');
btn?.addEventListener('click',()=>{nav.classList.toggle('open');btn.classList.toggle('open')});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));
const form=document.querySelector('#enquiry');
form?.addEventListener('submit',e=>{
 e.preventDefault(); const d=new FormData(form);
 const text=`Hello Seal Kraft,\n\nName: ${d.get('name')}\nPhone: ${d.get('phone')}\nLocation: ${d.get('location')}\nRequirement: ${d.get('service')}\nMessage: ${d.get('message')}`;
 window.open('https://wa.me/919999999999?text='+encodeURIComponent(text),'_blank');
});
