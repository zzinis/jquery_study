let enableClick = true; 
let len = $(".list li").length; 
let timer;

$(".list li").last().prependTo(".list"); 

$(".list").css({
    width: 100 * len +"%",
    marginLeft:"-100%"
}); 

$(".list li").css({
    width: 100 / len +"%", 
    float:"left"
});


$(".next").on("click", function(e){
    e.preventDefault(); 

    if(enableClick){
        enableClick = false;

        $(".list").animate({marginLeft :"-200%"},1000, function(){
            $(".list").css({marginLeft: "-100%"}); 
            $(".list li").first().appendTo(".list"); 
            enableClick = true; 
        });
    }
});

$(".prev").on("click", function(e){
    e.preventDefault(); 
    if(enableClick){
        enableClick = false; 
        $(".list").animate({marginLeft:"0%"},1000, function(){
            $(".list").css({marginLeft:"-100%"}); 
            $(".list li").last().prependTo(".list"); 
            enableClick = true; 
        }); 
    }
}); 


$(".start").on("click", function(e){
    e.preventDefault(); 

    timer = setInterval(function(){
        $(".list").animate({marginLeft :"-200%"},1000, function(){
            $(".list").css({marginLeft: "-100%"}); 
            $(".list li").first().appendTo(".list"); 
        });
    },2000);
    
    $(".start").addClass("on"); 
    $(".stop").removeClass("on"); 
}); 

$(".stop").on("click", function(e){
    e.preventDefault(); 
    clearInterval(timer); 

    $(".start").removeClass("on"); 
    $(".stop").addClass("on");
});
