const slider=document.querySelector(".slider"); 
const slides=document.querySelectorAll(".slide"); 
console.log(slides.length); 

//Button section 
const prevBtn=document.querySelector(".prev-slide"); 
const nextBtn=document.querySelector(".next-slide"); 

//Counter
let slideIndex=0; 

slides[slideIndex].classList.add('active'); 

//Event listener
prevBtn.addEventListener('click',prevSlide);
nextBtn.addEventListener('click',nextSlide);


//Functions
function prevSlide(){
    slides[slideIndex].classList.remove('active'); 
    slideIndex=(slideIndex===0) ? slides.length-1 : slideIndex-1; 
    slides[slideIndex].classList.add('active');
    slider. style.transform=`translateX(-${slideIndex*100}%)`; 

}
function nextSlide(){
    slides[slideIndex].classList.remove('active'); 
    slideIndex=(slideIndex===slides.length-1) ? 0 : slideIndex+1; 
    slides[slideIndex].classList.add('active');
    slider. style.transform=`translateX(-${slideIndex*100}%)`; 
}
