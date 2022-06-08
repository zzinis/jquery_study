// const swiper = new Swiper('.wrap', {
//     navigation :{
//         nextEl :".swiper-button-next", 
//         prevEl :".swiper-button-prev" 
//     }, 
//     pagination :{
//         el : ".swiper-pagination", 
//         clickable: true
//     }, 
//     loop: true, 
//     speed : 500,
//     direction : "horizontal", 
//     spaceBetween : 0, 
//     slidesPerView : 1, 
//     grabCursor : true, 
//     autoplay :{
//         delay:1000, 
//         disableOnInteraction : true 
//     },
//     effect : "fade" 
// });

// var btnStart = document.querySelector(".btnStart"); 
// var btnStop = document.querySelector(".btnStop"); 

// swiper.autoplay.stop(); 

// btnStart.onclick = function(){
//     swiper.autoplay.start(); 
// }
// btnStop.onclick = function(){
//     swiper.autoplay.stop(); 
// }


const swiper = new Swiper('.wrap', {

    navigation :{
        nextEl :".swiper-button-next", 
        prevEl :".swiper-button-prev" 
    }, 
    pagination :{
        el : ".swiper-pagination", 
        clickable: true
    }, 
    loop: true, 
    speed : 500, 
    direction : "horizontal",  
    spaceBetween : 0, 
    slidesPerView : "auto", 
    centeredSlides : true, 
    grabCursor : true,

    autoplay :{
        delay:1000, 
        disableOnInteraction : true 

    },
    effect: "coverflow",        
        coverflowEffect: {
            rotate : 50, 
            stretch : -100,  
            depth : 400,  
            modifier : 1, 
            slideShadows : false, 
        },
});

var btnStart = document.querySelector(".btnStart"); 
var btnStop = document.querySelector(".btnStop"); 

swiper.autoplay.stop(); 

btnStart.onclick = function(){
    swiper.autoplay.start(); 
}
btnStop.onclick = function(){
    swiper.autoplay.stop(); 
}
