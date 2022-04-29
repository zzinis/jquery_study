$("#tab ul li a").on("click",function(e){
    e.preventDefault();

    let i = $(this).parent().index();
    $("#tab .group div").hide();
    $("#tab .group div").eq(i).show();

    $("#tab ul li a").removeClass("on");
    $("#tab ul li").eq(i).children("a").addClass("on");
});

$("#tab ul li a").on("click",function(e){
    e.preventDefault();

    let target = $(this).attr("href");
    console.log(target)
    $("#tab .group div").hide();
    $(target).show();
});