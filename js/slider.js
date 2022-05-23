let enableClick = true;  
let len = $(".list li").length; 
console.log(len); 


$(".list li").last().prependTo(".list"); 

$(".list").css({
    width: 100 * len +"%",
    height:"100%", 
    marginLeft:"-100%"
}); 

$(".list li").css({
    width: 100 / len +"%",
    height:"100%", 
    float:"left"
});



$(".next").on("click", function(e){
    e.preventDefault(); 

    if(enableClick){
        enableClick = false; 
        console.log("1");
        $(".list").animate({marginLeft:"-200%" },1000, function(){
            $(".list").css({marginLeft : "-100%"}); 
            $(".list li").first().appendTo(".list");
            enableClick = true;  
            console.log("2"); 
        }); 
    }
}); 

$(".prev").on("click", function(e){
    e.preventDefault(); 

    if(enableClick){
        $(".list").animate({ marginLeft: "0%"},1000, function(){
            $(".list").css({marginLeft :"-100%"}); 
            $(".list li").last().prependTo(".list"); 
            enableClick = true; 
        });
        enableClick = false; 
    }    
});
