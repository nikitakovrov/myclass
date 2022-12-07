const slides = document.querySelectorAll('.slide')
for (const slide of slides) {
    slide.addEventListener('click', ()=>{
        clearActivClasses()
        slide.classList.add('active')
    })
}
function clearActivClasses (){
    slides.forEach((slide) =>{
        slide.classList.remove('active')
    })
}