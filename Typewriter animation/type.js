// class TypeWriter{
//     constructor(txtElement,words,wait=300){
//         this.txtElement=txtElement;
//         this.words=words;
//         this.txt=' ';
//         this.wordIndex=0;
//         this.wait=parseInt(wait,10);
//         this.type();
//         this.isDeleting=false;
//     }
//     type(){
//         //to get the current index of the word
//         const currrent=this.wordIndex % this.words.length;

//         //get the full text of the current word
//         const fullTxt=this.words[currrent];
//         if(this.isDeleting){
//             //if it is in deleting mode then you have to remove each char
//             this.txt=fullTxt.substring(0,this.txt.length-1);

//         }
//         else{
//             //add char
//             this.txt=fullTxt.substring(0,this.txt.length+1);
//         }
        
//         //insertion into the html element
//         this.txtElement.innerHTML= `<span class="txt">${this.txt}</span>`;

//         let typeSpeed =300;
//         if(this.isDeleting){
//             typeSpeed /=2;
//         }

//         //if the word is complete
//         if(!this.isDeleting && this.txt ===fullTxt){
//             //make a pause at the end
//             typeSpeed=this.txt;
//             //set delete to true
//             this.isDeleting=true;
//         }
//         else if(this.isDeleting && this.txt === ''){
//             this.isDeleting=false;
//             //move to next word in the array
//             this.wordIndex++;
//             //pause before start typing
//             typeSpeed=500;
//         }
//         setTimeout(() => this.type(), typeSpeed);
//     }

// }
// //init on DOM load
// document.addEventListener('DOMContentLoaded',init);
// //init App
// function init(){
//     const txtElement=document.querySelector('.typewriter');
//     const words = JSON.parse(txtElement.getAttribute('data-words'));
//     const wait=txtElement.getAttribute('data-wait');

//     new TypeWriter(txtElement,words,wait);
// }
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
