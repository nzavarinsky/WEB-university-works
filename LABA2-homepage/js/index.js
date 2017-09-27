//SMOOTH SCROLL ON NAVBAR CLICKS
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  
  //TV SET CHANNEL FLIP
  $(function(){
      $('.fadein img:gt(0)').hide();
      setInterval(function(){
        $('.fadein :first-child').fadeOut()
           .next('img').fadeIn()
           .end().appendTo('.fadein');}, 
        1500);
  });
  
  
  // NAV BAR CLOSE ON PAGE CLICK
  $(document).ready(function () {
      $(".navbar-nav li a").click(function(event) {
          $(".navbar-collapse").collapse('hide');
      });
  })
  
  
  //Fade header on scroll
  $(window).scroll(function(){
      $(".main-title").css("opacity", 1 - $(window).scrollTop() / 500);
      $(".hr-size").css("opacity", 1 - $(window).scrollTop() / 500);
      $(".fa-chevron-down").css("opacity", 1 - $(window).scrollTop() / 500);
    });
  
  
  
  
  $(document).ready(function() {
    $('.grid').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'iframe',
    // other options
       gallery:{
      enabled:true
    }
  });
  });
  
  
  window.sr = ScrollReveal();
  sr.reveal('.section-header');
  sr.reveal('.effect-sarah');
  sr.reveal('.bio-text');
  sr.reveal('.about-item');
  sr.reveal('.contact-wrapper');