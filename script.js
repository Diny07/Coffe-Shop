/* ========================= MENU MOBILE ========================= */
const menuToggle=document.getElementById('menuToggle');
const navMenu=document.getElementById('navMenu');
menuToggle.addEventListener('click',()=>{navMenu.classList.toggle('active');menuToggle.textContent=navMenu.classList.contains('active')?'✕':'☰'});
document.querySelectorAll('.nav-menu a').forEach(link=>{link.addEventListener('click',()=>{navMenu.classList.remove('active');menuToggle.textContent='☰'})});
/* ========================= NAVBAR SCROLL ========================= */
const header=document.querySelector('.header');
window.addEventListener('scroll',()=>{if(window.scrollY>50){header.classList.add('scrolled')}else{header.classList.remove('scrolled')}});
/* ========================= ACTIVE NAVIGATION ========================= */
const sections=document.querySelectorAll('main section[id]');
const navLinks=document.querySelectorAll('.nav-menu a');
window.addEventListener('scroll',()=>{let current='';sections.forEach(section=>{const sectionTop=section.offsetTop-120;const sectionHeight=section.offsetHeight;if(window.scrollY>=sectionTop&&window.scrollY<sectionTop+sectionHeight){current=section.getAttribute('id')}});navLinks.forEach(link=>{link.classList.remove('active');if(link.getAttribute('href')==='#'+current){link.classList.add('active')}})});
/* ========================= COPYRIGHT YEAR ========================= */
const footerYear=document.querySelector('.footer-bottom p');
if(footerYear){footerYear.innerHTML=footerYear.innerHTML.replace('2026',new Date().getFullYear())}
/* ========================= CLOSE MENU OUTSIDE ========================= */
document.addEventListener('click',(event)=>{if(!navMenu.contains(event.target)&&!menuToggle.contains(event.target)){navMenu.classList.remove('active');menuToggle.textContent='☰'}});