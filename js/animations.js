$(document).ready(function(){
   
  /*Minimum & Maximum font Size*/
  var minFontSize = 11;
  var maxFontSize = 22;
   
  $('.services').find('.service').each(function(e) {
    $(this).css("fontSize", randomNumberGenerator(minFontSize, maxFontSize));
  });

  setTimeout(function(){$(".project-header h1").addClass('active');}, 500);
  setTimeout(function(){$(".project .logo").removeClass('non-active');}, 500);

  setTimeout(function(){$(".cs .logo").removeClass('non-active');}, 500);
  setTimeout(function(){$(".about .logo").removeClass('non-active');}, 500);
  setTimeout(function(){$(".case-content").addClass('active');}, 500);

  var counter = 0;
      var clickCounter = 0;
      var projectCount = $('div.case-s').length;
      var projectCountDisplay = projectCount - 3;

      $('.arrow-right').on('click',function () {
        counter -= 100;
        clickCounter += 1;
        $(".case-studies").animate({ 'left': counter + '%'}, 800);

        if (counter == -100) {
          $('.arrow-left').addClass('visible');
        };

        if (counter == -300) {
          $('.arrow-left').addClass('visible');
          $('.arrow-right').removeClass('visible');
        };

        if (clickCounter == projectCountDisplay){
          $('.arrow-right').removeClass('visible');
        };

        // $('.arrow-left').addClass('visible');
        // $('.arrow-right').removeClass('visible');
      });

      $('.arrow-left').on('click',function () {
        counter += 100;
        clickCounter -= 1;
        $('.arrow-left').addClass('visible');
        $(".case-studies").animate({ 'left': counter + '%'}, 800);

        if (counter == 0) {
          $('.arrow-left').removeClass('visible');
        };

        if (clickCounter < projectCountDisplay){
          $('.arrow-right').addClass('visible');
        };

        // $('.arrow-left').removeClass('visible');
        // $('.arrow-right').addClass('visible');
      });

   
  function randomNumberGenerator(min,max) { return Math.floor(Math.random()*(max-min+1)+min); };
  
  if (document.location.href.indexOf('#no-animation') > -1 ) {
    // No Animation

    $('.animation').hide();

    setTimeout(function(){$(".logo").removeClass('non-active');}, 500);
    
    function slideshow() { 
      setTimeout(function(){$(".case-study.active .headline").addClass('active');}, 800);
      setTimeout(function(){$(".case-study.active .headline").addClass('open');}, 1800);
      
      setTimeout(function(){$(".loadingbar").css("display", "block");}, 1800);
      setTimeout(function(){$(".loadingbar").animate({width: '100%'});}, 1800);
      setTimeout(function(){$(".loadingbar").fadeOut(300);}, 8400);
      setTimeout(function(){$(".loadingbar").css("width", "0%");}, 8700);

      setTimeout(function(){$(".case-study.active").addClass('temp');}, 9100);
      setTimeout(function(){$(".case-study.non-active").addClass('active');}, 9200);
      setTimeout(function(){$(".case-study.active").removeClass('non-active');}, 9300);
      setTimeout(function(){$(".case-study.temp").addClass('non-active');}, 9500);
      setTimeout(function(){$(".case-study.temp").removeClass('active');}, 9500);
      setTimeout(function(){$(".case-study.temp").removeClass('temp');}, 9600);

      setTimeout(function(){$(".case-study.active .headline").removeClass('active');}, 8500);
      setTimeout(function(){$(".case-study.active .headline").removeClass('open');}, 7700);
    };

    setTimeout(slideshow, 0);
    setTimeout(slideshow, 9300);
    setTimeout(slideshow, 18600);
    setTimeout(slideshow, 27900);
    setTimeout(slideshow, 37200);
    setTimeout(slideshow, 46500);
    setTimeout(slideshow, 55800);
    setTimeout(slideshow, 65100);

  } else {
    // Animation

    setTimeout(function(){$(".main-logo").addClass('active');}, 2400);
    setTimeout(function(){$(".left-part").removeClass('active');}, 300);
    setTimeout(function(){$(".right-part").removeClass('active');}, 300);
    setTimeout(function(){$(".animation").fadeOut(800);}, 4800);


    setTimeout(function(){$(".logo").removeClass('non-active');}, 5500);
                
    function slideshow() { 
      setTimeout(function(){$(".case-study.active .headline").addClass('active');}, 800);
      setTimeout(function(){$(".case-study.active .headline").addClass('open');}, 1800);
      
      setTimeout(function(){$(".loadingbar").css("display", "block");}, 1800);
      setTimeout(function(){$(".loadingbar").animate({width: '100%'});}, 1800);
      setTimeout(function(){$(".loadingbar").fadeOut(300);}, 8400);
      setTimeout(function(){$(".loadingbar").css("width", "0%");}, 8700);

      setTimeout(function(){$(".case-study.active").addClass('temp');}, 9100);
      setTimeout(function(){$(".case-study.non-active").addClass('active');}, 9200);
      setTimeout(function(){$(".case-study.active").removeClass('non-active');}, 9300);
      setTimeout(function(){$(".case-study.temp").addClass('non-active');}, 9500);
      setTimeout(function(){$(".case-study.temp").removeClass('active');}, 9500);
      setTimeout(function(){$(".case-study.temp").removeClass('temp');}, 9600);

      setTimeout(function(){$(".case-study.active .headline").removeClass('active');}, 8500);
      setTimeout(function(){$(".case-study.active .headline").removeClass('open');}, 7700);
    };

    setTimeout(slideshow, 5100);
    setTimeout(slideshow, 14400);
    setTimeout(slideshow, 23700);
    setTimeout(slideshow, 33000);
    setTimeout(slideshow, 42300);
    setTimeout(slideshow, 51600);
    setTimeout(slideshow, 60900);
    setTimeout(slideshow, 70200);
    setTimeout(slideshow, 79500);
  }

});

$(document).ready(function(){
  resizeDiv();
});

window.onresize = function(event) {
  resizeDiv();
}

function resizeDiv() {
vph = $(window).height();
vph2 = vph - 120;
  
  $('.project-header').css({'height': vph2 + 'px'});
  $('body').css({'height': vph + 'px'});
  $('.animation').css({'height': vph + 'px'});
  $('.homepage-holder').css({'height': vph + 'px'});
};

$(document).ready(function(){
  $('.nav-icon').click(function () {
    $('.nav-icon').toggleClass('open');
    $('.nav').toggleClass('open');
    $('.logo').toggleClass('open');
  });

  $('.case-s.first').hover(function () {
    $('.case-s.first .case-content').toggleClass('open');
  });

  $('.case-s.second').hover(function () {
    $('.case-s.second .case-content').toggleClass('open');
  });

  $('.case-s.third').hover(function () {
    $('.case-s.third .case-content').toggleClass('open');
  });

  $('.case-s.fourth').hover(function () {
    $('.case-s.fourth .case-content').toggleClass('open');
  });

  $('.case-s.fifth').hover(function () {
    $('.case-s.fifth .case-content').toggleClass('open');
  });

  $('.case-s.sixth').hover(function () {
    $('.case-s.sixth .case-content').toggleClass('open');
  });

  $('.case-s.seventh').hover(function () {
    $('.case-s.seventh .case-content').toggleClass('open');
  });

  $('.case-s.eight').hover(function () {
    $('.case-s.eight .case-content').toggleClass('open');
  });

  $('.case-s.ninth').hover(function () {
    $('.case-s.ninth .case-content').toggleClass('open');
  });

  $('.case-s.tenth').hover(function () {
    $('.case-s.tenth .case-content').toggleClass('open');
  });

  $('.case-s.eleventh').hover(function () {
    $('.case-s.eleventh .case-content').toggleClass('open');
  });

  setTimeout(function(){$(".service p").fadeIn(400);}, 1000);
});


