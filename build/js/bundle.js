(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

$(document).ready(function () {
  //Apaptive tabs
  $(".tab_contents").hide();
  $(".tab_contents:first").show();
  /* if in tab mode */

  $("ul.tabss li").click(function () {
    $(".tab_contents").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();
    $("ul.tabss li").removeClass("active");
    $(this).addClass("active");
    $(".tab_drawer_headings").removeClass("d_active");
    $(".tab_drawer_headings[rel^='" + activeTab + "']").addClass("d_active");
    /*$(".tabs").css("margin-top", function(){ 
    	return ($(".tab_container").outerHeight() - $(".tabs").outerHeight() ) / 2;
    });*/
  });
  $(".tab_containers").css("min-height", function () {
    return $(".tabss").outerHeight() + 50;
  });
  /* if in drawer mode */

  $(".tab_drawer_headings").click(function () {
    $(".tab_contents").hide();
    var d_activeTab = $(this).attr("rel");
    $("#" + d_activeTab).fadeIn();
    $(".tab_drawer_headings").removeClass("d_active");
    $(this).addClass("d_active");
    $("ul.tabss li").removeClass("active");
    $("ul.tabss li[rel^='" + d_activeTab + "']").addClass("active");
  }); //Header BURGER

  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $('.header__link').click(function (event) {
    $('.header__burger, .header__menu').removeClass('active');
    $('body').removeClass('lock');
  }); //Adaptive SlickSlider 

  $(window).on('resize', function (e) {
    var init = $(".news__wrapper").data('init-slider');

    if (window.innerWidth < 769) {
      if (init != 1) {
        $('.news__wrapper').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          adaptiveHeight: true
        }).data({
          'init-slider': 1
        });
      }
    } else {
      if (init == 1) {
        $('.news__wrapper').slick('unslick').data({
          'init-slider': 0
        });
      }
    }
  }).trigger('resize');
}); // Counter

var counters = document.querySelectorAll(".counter");
counters.forEach(function (counter) {
  counter.innerHTML = "0";

  var updateCounter = function updateCounter() {
    var target = +counter.getAttribute("data-target");
    var c = +counter.innerText;

    if (c < target) {
      counter.innerText = c + 1;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
}); // Anchor Slide

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
}); //Acordeon

$(document).ready(function () {
  $('.block__title').click(function (event) {
    if ($('.block').hasClass('one')) {
      $('.block__title').not($(this)).removeClass('active');
      $('.block__text').not($(this).next()).slideUp(300);
    }

    $(this).toggleClass('active').next().slideToggle(300);
  });
});

},{}]},{},[1])

//# sourceMappingURL=bundle.js.map
