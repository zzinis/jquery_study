const $btn1 = $(".btn1");
const $btn2 = $(".btn2");
const $top = $(".top");
const $right = $(".right");
const $bottom = $(".bottom");
const $left = $(".left");
const $content = $(".content");
const $close1 = $content.children(".close");
const $wrap2 = $("#wrap2");
const $close2 = $wrap2.children(".close");
let speed = 1000;

$btn1.on("click", function(){
    $top.animate({width: "100%"},speed, function(){
        $right.animate({height: "100%"},speed, function(){
            $bottom.animate({width: "100%"}, speed, function(){
                $left.animate({height: "100%"},speed, function(){
                    $content.fadeIn(speed/2, function(){
                        $close1.animate({right: 30, opacity:1}, speed);
                    });
                });
            });
        });
    });
});

$close1.on("click", function(){
    $close1.animate({ right:0, opacity:0},speed/2);
    $content.fadeOut(speed/2, function(){
        $top.animate({width: 0},speed/2);
        $right.animate({height:0},speed/2);
        $bottom.animate({width:0},speed/2);
        $left.animate({height:0},speed/2);
    })
});

$btn2.on("click", function(){
    $wrap2.animate({height: 400, marginTop: -200},speed);
});


$close2.on("click", function(){
    $wrap2.animate({height:0, marginTop:0},speed);
});