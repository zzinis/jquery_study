const $frame = $("#wrap234"); 
const $btns = $frame.find("dt"); 
const $boxs = $frame.find("dd");  
let speed = 500; 

$btns.on("click", function(e){
    e.preventDefault(); 
    var isOn = $(this).hasClass("on"); 

    $btns.removeClass("on"); 
    $boxs.slideUp(speed); 

    if(isOn){  
        $(this).removeClass("on");
        $(this).next().slideUp(speed); 
    }else{
        $(this).addClass("on"); 
        $(this).next().slideDown(speed); 
    }
});

