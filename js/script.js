$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){

     $('#menu').removeClass('fa-times');
     $('header').removeClass('toggle');   

    });

    //smooth scrolling

    $('a[href*="#"]').on('click',function(e){

      e.preventDefault();

      $('html, body').animate({

        scrollTop : $($(this).attr('href')).offset().top,

      },
        500,
        'linear'
      );

    });


    const text = "An aspiring Web Developer";

    let index = 0;
    function typeText() {
      if (index < text.length) {
        document.getElementById("typeWriter").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
      }
    }
    
    typeText();

  });