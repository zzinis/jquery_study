const $btnz = $(".navi li a");
const $boxz = $(".box");
let isDone = true;

$btnz.on("click", function(e){
    e.preventDefault();

    let isOn = $(this).hasClass("on");
    if(isOn) return;

    let tg = $(this).attr("href");

    if(isDone){
        activeBtn($(this));
        showTab(tg);
        isDone = false;
    }
});

function activeBtn(el){
    $btnz.removeClass("on");
    el.addClass("on");
}

function showTab(target){
    $boxz.fadeOut(1000);
    $boxz.removeClass("on");

    $(target).fadeIn(1000, function(){
        isDone = true;
    });
    $(target).addClass("on");
}