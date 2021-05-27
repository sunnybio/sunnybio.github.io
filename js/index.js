const navToggle= document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')
navToggle.addEventListener('click',()=>{
    document.body.classList.toggle('nav-open');
});


navLinks.forEach(link =>{
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open'); 
    })
})



const home=document.getElementById("home");
window.addEventListener("scroll",function () {
  let offset=window.pageYOffset;
  console.log('Offset' + offset*0.7);
  
})

