const $btn1 = $(".btn1");
const $top = $(".top");
const $right = $(".right");
const $bottom = $(".bottom");
const $left = $(".left");

$btn1.on("click", function(){
    $top.animate({width: "100%"},1000, function(){
        $right.animate({height: "100%"},1000, function(){
            $bottom.animate({width: "100%"}, 1000, function(){
                $left.animate({height: "100%"},1000);
            });
        });
    });
})


// $(".btn1").on("click", function(){
//     $(".box1").animate({marginLeft : 700},1000);
// })

$(".btn1").on("click", function(){
    $(".box1").animate({margintLeft : 700},1000, function(){
        $(this).animate({marginTop: 500},1000, function(){
            $(this).animate({marginLeft: 0},1000, function(){
                $(this).animate({marginTop:0},1000, function(){
                    $(this).css({backgroundColor:"red"});
                });
            });
        });
    });
});

