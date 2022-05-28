const $slider = $("#slider"); 
const $panel = $slider.find(".panel"); 
const $btns = $slider.find(".navi li"); 

$btns.on("click", function(e){
    e.preventDefault(); 
    var i = $(this).index(); 

    $panel.animate({ marginLeft : (-100 * i) +"%"}, 1000); 

    $btns.removeClass("on"); 
    $btns.eq(i).addClass("on"); 
}); 

