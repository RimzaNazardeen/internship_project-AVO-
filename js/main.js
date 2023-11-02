
$(document).ready(function (){
    $('#banner_slider').owlCarousel({
        items:1,
        dots:true,
        loop:true,
        autoplay:true,
        autoplayHoverPause:false,
        autoplayTimeout:5000,
        mouseDrag:true,
        animateIn:'fadeIn',
        animateOut:'fadeOut'
    })
})


$(document).ready(function (){
    $('#testimony-carousel').owlCarousel({
        items: 1,
        dots: true,
        loop: true,
        mouseDrag: true

    })
})

$('#testimony-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
    }
})