const $slider = $("#slider"); 
const $panel = $slider.find(".panel"); 
const $btns = $slider.find(".navi li"); 
const $circle = $slider.find("#circle"); 
let enableClick = true; 
let speed = 1000; 

$btns.on("click", function(e){
    e.preventDefault(); 
    let isOn = $(this).hasClass("on"); 
    if(isOn) return; 

    var i = $(this).index(); 

    if(enableClick){         
        movePanel(i); 
        activationBtn(i);  
        rotation(i); 
        enableClick = false; 
    }   
}); 

function activationBtn(index){
    $btns.removeClass("on"); 
    $btns.eq(index).addClass("on");
}

function rotation(index){
    $circle.removeClass(); 
    $circle.addClass("rot"+index);
}

function movePanel(index){
    $panel.animate({ marginLeft : (-100 * index) +"%"}, speed, function(){
        enableClick = true; 
    });
}


// const $slider = $("#slider"); 
// const $panel = $slider.find(".panel"); 
// const $btns = $slider.find(".navi li"); 
// const $circle = $slider.find("#circle"); 
// let enableClick = true; 
// let speed = 1000; 

// $btns.on("click", function(e){
//     e.preventDefault(); 

//     let isOn = $(this).hasClass("on"); 
//     if(isOn) return; 
//     var i = $(this).index(); 

//     if(enableClick){
//         $panel.animate({ marginLeft : (-100 * i) +"%"}, speed, function(){
//             enableClick = true; 
//         }); 

//         $btns.removeClass("on"); 
//         $btns.eq(i).addClass("on"); 

//         $circle.removeClass(); 
//         $circle.addClass("rot"+i); 

//         enableClick = false; 
//     }
// }); 

