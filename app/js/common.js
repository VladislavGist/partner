
function parallax() {
  if(! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && $(window).width() > 992) {
    $.stellar();
  }
}


function anchor() {
  if($(document).has($(".anchor").length > 0)) {
    $(".anchor").click(function(event) {
    event.preventDefault();
    var el = $(this).attr("href");
    $("body, html").animate({
      scrollTop: $(el).offset().top-60
      }, 800);
        return false;
    })
  }
}

$(".linkNav2").click(function() {
  setTimeout(function() {
    $(this).trigger("click");
    alert("click");
  }, 2500)
})

//menu2
/*
function menu2()
{
  $(".menu2 li a").each(function(){
    var url = window.location.hash;
    var hash = url.substring(url.indexOf("#"));
    $('html,body').scrollTop($(hash).offset().top-78);
  })
}*/
/*
// scrolling
(function ($) {
  $(document).ready(function () {
    $.srSmoothscroll({
      step: 120,
      speed: 80,
      ease: 'linear',
    });
  });    
})(jQuery);
*/
var myMap, 
    myPlacemark;

function init() { 
  myMap = new ymaps.Map("map", {
      center: [52.61697075858002,39.562680974868755],
      zoom: 16
  }); 
  
  myPlacemark = new ymaps.Placemark([52.61697075858002,39.562680974868755], {
      hintContent: 'г.Липецк ул.Космонавтов, 42'
  });
  
  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom');
}

function insertElem() {
  var w = $(window).width();

  if(w < 992) {
    $(".phone").insertAfter(".navbar-header");
  } else {

  }
}

//validate
$("#modal-1-form").validate({
  rules: {
    name: {
      required: true
    },
    phone: {
      required: true
    }
  },
  messages: {
    name: {
      required: "Заполните поле"
    },
    phone: {
      required: "Заполните поле"
    }
  }
})

$("#bigForm").validate({
  rules: {
    name: {
      required: true
    },
    labelRev: {
      required: true
    },
    bigFormTextArea: {
      required: true
    }
  },
  messages: {
    name: {
      required: "Заполните поле"
    },
    labelRev: {
      required: "Заполните поле"
    },
    bigFormTextArea: {
      required: "Заполните поле"
    }
  }
})


//slick
$(".header-slider").slick({
  dots: true,
  infinite: false
});

$('.rew-slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1
});

$("#input-1-phone").mask("+ 7 *** *** ****", {placeholder:"*** *** ****"});

//resize
$(window).resize(function(){
  insertElem();
  //$.stellar();
});

$(window).ready(function(){
  insertElem();
  ymaps.ready(init);
  new WOW().init();
  $(".thisGallery .item a").fancybox({
    padding : 0,
      helpers: {
        overlay: {
          locked: false
        }
    },
    frameWidth : "436",
    frameHeight : "415"
  });
  anchor();
  //$.stellar();
});

/* placeholder */
function placeholder(){
	$('input[placeholder], textarea[placeholder]').placeholder();
}
/* placeholder end */
/*------------------------ 1. Placeholder ------------------------*/
(function(c){function f(a){this.input=a;"password"==a.attr("type")&&this.handlePassword();c(a[0].form).submit(function(){a.hasClass("placeholder")&&a[0].value==a.attr("placeholder")&&(a[0].value="")})}var d=window.navigator.userAgent.match(/MSIE *\d+\.\w+/i),op_b = navigator.userAgent,start_index = op_b.indexOf('Opera'),op_b = navigator.userAgent,e=!0;op_b = op_b.substr(start_index, 5);if("MSIE 6.0"==d||"MSIE 7.0"==d||"MSIE 8.0"==d||"Opera"==op_b)e=!1;f.prototype={show:function(a){if(""===this.input[0].value||a&&this.valueIsPlaceholder()){if(this.isPassword)try{this.input[0].setAttribute("type","text")}catch(b){this.input.before(this.fakePassword.show()).hide()}this.input.addClass("placeholder");
this.input[0].value=this.input.attr("placeholder")}},hide:function(){if(this.valueIsPlaceholder()&&this.input.hasClass("placeholder")&&(this.input.removeClass("placeholder"),this.input[0].value="",this.isPassword)){try{this.input[0].setAttribute("type","password")}catch(a){}this.input.show();this.input[0].focus()}},valueIsPlaceholder:function(){return this.input[0].value==this.input.attr("placeholder")},handlePassword:function(){var a=this.input;a.attr("realType","password");this.isPassword=!0;if(!e&&
a[0].outerHTML){var b=c(a[0].outerHTML.replace(/type=(['"])?password\1/gi,"type=$1text$1"));this.fakePassword=b.val(a.attr("placeholder")).addClass("placeholder").focus(function(){a.trigger("focus");c(this).hide()});c(a[0].form).submit(function(){b.remove();a.show()})}}};var g=!!("placeholder"in document.createElement("input"));c.fn.placeholder=function(){return g?this:this.each(function(){var a=c(this),b=new f(a);b.show(!0);a.focus(function(){b.hide()});a.blur(function(){b.show(!1)});e||(c(window).load(function(){a.val()&&
a.removeClass("placeholder");b.show(!0)}),a.focus(function(){if(""==this.value){var a=this.createTextRange();a.collapse(!0);a.moveStart("character",0);a.select()}}))})}})(jQuery);
/*------------------------ 1. Placeholder end ------------------------*/