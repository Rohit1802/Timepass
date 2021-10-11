$(document).ready(function(){
    $(window).on("scroll" , function(){
        if($(this).scrollTop() > 90){
            $(".navbar").addClass("navbar-shrink");
        }else {
            $(".navbar").removeClass("navbar-shrink");
        }
    })

    $('.features-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        autoplay:true,
        responsive:{
            0:{
                items:1,             
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    })

    $(".nav-link").on("click",function(){
        $(".navbar-collapse").collapse("hide")
    })

    $("#Model").on("click",function(){
        $('#Popup').addClass("active")
    })

    $("#dismiss-popup-btn").on("click",function(){
        $('#Popup').removeClass("active")
    })
})