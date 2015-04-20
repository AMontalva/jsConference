
// responsive dropdown
$(function() {
    var pull        = $('#pull');
        menu        = $('nav ul');
        menuHeight  = menu.height();
        menuList = $('nav ul li a');
    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

    $(menuList).on('click', function() {
        var w = $(window).width();
        if(w < 481) {
            menu.slideToggle();
        }
    });
});



$(function() {
  var topoffset = 39;


  var isTouch = 'ontouchstart' in document.documentElement;

  var navheight = $("#nav").height();

  //window height
  var wheight = $(window).height(); //get height of the window
  var wheight = wheight - navheight;

  $('.fullheight').css('height', wheight);

  $(window).resize(function() {
    var wheight = $(window).height(); //get height of the window
    $('.fullheight').css('height', wheight);
  }) //on resize


// Animated Scrolling
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset
        }, 1000);
        return false;
      } // target.length
    } //location hostname
  }); //on click


  //set up ScrollMagic
  var controller = new ScrollMagic({
    globalSceneOptions: {
      triggerHook: "onLeave"
    }
  });

  //pin the navigation
  var pin = new ScrollScene({
    triggerElement: '#nav',
  }).setPin('#nav').addTo(controller);


}); //on load


$(function () {
    var endDate = new Date();
    endDate = new Date(endDate.getFullYear() + 0, 8 - 1, 28); // year, month, day
    $('#byMonth').countdown({until: endDate, format: 'odHMS'});
    $('#month').text(endDate.getFullYear());

});

  //highlight navigation
  $(window).scroll(function() {
    var topoffset = 48;

    var windowpos = $(window).scrollTop() + topoffset;
    $('nav li a').removeClass('active');

    if (windowpos > $('#home').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#home"]').addClass('active');
    } //windowpos

    if (windowpos > $('#about').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#about"]').addClass('active');
    } //windowpos

    if (windowpos > $('#speakers').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#speakers"]').addClass('active');
    } //windowpos

    if (windowpos > $('#program').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#program"]').addClass('active');
    } //windowpos

    if (windowpos > $('#sponsors').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#sponsors"]').addClass('active');
    } //windowpos

    if (windowpos > $('#register').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#register"]').addClass('active');
    } //windowpos

  }); //window scroll

