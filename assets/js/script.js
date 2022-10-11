$( document ).ready(function() {
   var w = $(window).width();
  
   if(w < 400){
      alert();
       $(".regular").slick({
         lazyLoad: 'ondemand',
        dots: true,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2   
      });
   }else{
        $(".regular").slick({
         lazyLoad: 'ondemand',
        dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4
      });
   }
    
    
    if(w < 400){
      alert();
       $(".client-list-1").slick({
         lazyLoad: 'ondemand',
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3   
      });
   }else{
        $(".client-list-1").slick({
         lazyLoad: 'ondemand',
        dots: true,
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 6
      });
   }
    
    
});


$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:2,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,1],
        pagination:false,
        navigation:true,
        navigationText:["",""],
        autoPlay:true
    });
});


$( document ).ready(function() {
    $('#nav-head').scrollToFixed();
})