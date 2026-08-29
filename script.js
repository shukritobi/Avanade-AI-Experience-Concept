document.querySelectorAll('.persona').forEach(card=>{
  card.addEventListener('click',()=>{
    document.querySelectorAll('.persona').forEach(x=>x.classList.remove('active'));
    card.classList.add('active');
  });
});
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const el=document.querySelector(a.getAttribute('href'));
    if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'});}
  });
});