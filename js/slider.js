$(".next").on("click", function(e){
    e.preventDefault(); 

    $(".list").animate({marginLeft:"-200%" },1000, function(){
        $(".list").css({marginLeft : "-100%"}); 
        $(".list li").first().appendTo(".list"); 
    }); 
}); 

$(".prev").on("click", function(e){
    e.preventDefault(); 

    $(".list").animate({ marginLeft: "0%"},1000, function(){
        $(".list").css({marginLeft :"-100%"}); 
        $(".list li").last().prependTo(".list"); 
    });
});
