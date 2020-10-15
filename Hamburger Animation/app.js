const hamburger=document.querySelector('.hamburger');
const navlinks=document.querySelector('.nav-links');
const links=document.querySelectorAll('.nav-links li');
const lines=document.querySelectorAll('.line');

hamburger.addEventListener("click",()=>{
navlinks.classList.toggle("open");
links.forEach(link => {
    link.classList.toggle("fade");
});
lines.forEach(line =>{
    line.classList.toggle("cross");
});

});