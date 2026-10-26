'use strict';
// Change only after the salon owner verifies the details and WhatsApp registration.
const SALON = Object.freeze({phone:'919710103101', name:'Freshmen Beauty Salon'});
const $ = selector => document.querySelector(selector);
const menu = $('.menu-toggle');
function closeMenu(){ $('#navigation').classList.remove('open'); menu.setAttribute('aria-expanded','false'); menu.setAttribute('aria-label','Open navigation'); }
menu.addEventListener('click',()=>{const open=$('#navigation').classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
$('#navigation').querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
let previousFocus;
function openDialog(dialog){previousFocus=document.activeElement;dialog.showModal();document.body.classList.add('modal-open');}
document.querySelectorAll('dialog').forEach(dialog=>{dialog.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');previousFocus?.focus();});dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});});
document.querySelectorAll('.gallery-item').forEach(button=>button.addEventListener('click',()=>{$('#lightbox-image').src=button.dataset.photo;$('#lightbox-image').alt=button.dataset.caption;$('#lightbox-caption').textContent=button.dataset.caption+' · Illustrative stock photo';openDialog($('#lightbox'));}));
$('#demo-info').addEventListener('click',()=>openDialog($('#info-dialog')));
document.querySelectorAll('.select-service').forEach(button=>button.addEventListener('click',()=>{$('#service').value=button.dataset.service;$('#appointment').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});$('#name').focus({preventScroll:true});}));
function todayInIndia(){const parts=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Kolkata',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());const part=t=>parts.find(p=>p.type===t).value;return `${part('year')}-${part('month')}-${part('day')}`;}
$('#date').min=todayInIndia();
$('#date').addEventListener('input',()=>$('#date').setCustomValidity(''));
$('#time').addEventListener('input',()=>$('#time').setCustomValidity(''));
$('#name').addEventListener('input',()=>$('#name').setCustomValidity(''));
$('#appointment-form').addEventListener('submit',event=>{event.preventDefault();const name=$('#name').value.trim(),date=$('#date').value,time=$('#time').value;$('#date').min=todayInIndia();if(!name){$('#name').setCustomValidity('Please enter your name.');$('#name').reportValidity();return;}if(date<todayInIndia()){$('#date').setCustomValidity('Please select today or a future date.');$('#date').reportValidity();return;}if(time<'07:30'||time>'22:00'){$('#time').setCustomValidity('Please choose a time between 7:30 AM and 10 PM.');$('#time').reportValidity();return;}const nowIST=new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Kolkata',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(new Date());if(date===todayInIndia()&&time<=nowIST){$('#time').setCustomValidity('Please choose a future time in Chennai.');$('#time').reportValidity();return;}const formatted=new Intl.DateTimeFormat('en-IN',{day:'numeric',month:'long',year:'numeric'}).format(new Date(date+'T12:00:00'));const message=`Hello Freshmen Beauty Salon,\nI'm ${name}.\nI'd like to enquire about ${$('#service').value}.\nPreferred date: ${formatted}\nPreferred time: ${time} (Chennai time)\nPlease confirm service availability, price and appointment time. Thank you!`;$('#message-preview').textContent=message;$('#whatsapp-send').href=`https://wa.me/${SALON.phone}?text=${encodeURIComponent(message)}`;openDialog($('#enquiry-dialog'));});
$('#year').textContent=new Date().getFullYear();
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('reveal');observer.unobserve(entry.target);}}),{threshold:.12});document.querySelectorAll('.about-copy,.section-head,.gallery-item').forEach(el=>observer.observe(el));}
