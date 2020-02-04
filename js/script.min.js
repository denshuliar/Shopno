'use strict'

$(document).ready(function(){

  // Scroll
  $("a").on("click", function(event) {
      if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
          {
          scrollTop: $(hash).offset().top
          },
          1000,
          function() {
          window.location.hash = hash;
          }
      );
      }
  });

  // Header menu

  var menuBtn = $('.js-header-menu');
  var menu = $('.js-menu');

  menuBtn.on('click', function(){
      menu.toggleClass('modal__menu--is-active')
  });

  $('.menu__item').on('click', function() {
    menu.removeClass('modal__menu--is-active');
  });

  $('#menu-close').on('click', function() {
    menu.removeClass('modal__menu--is-active');
  })
  // Home modal btn

  var homeMadalBtn = $('.js-modal-btn');
  var modalBox = $('.js-modal-box');
  var sendBtn = $('.js-btn-send');
  var closeBtn = $('.js-btn-close');

  homeMadalBtn.on('click', function(){
      modalBox.toggleClass('modal__btn-box--is-active');
  });

  sendBtn.on('click', function(){
      modalBox.removeClass('modal__btn-box--is-active');
  });

  closeBtn.on('click', function(){
      modalBox.removeClass('modal__btn-box--is-active');
  });

  // Slider section about

  $('.about__slider').slick({
      centerMode:false,     
      draggable:false,    
      arrows:false,    
      autoplay:true,
      autoplaySpeed:3000,     
      slidesToShow:1,     
      slidesToScroll:1,   
      dots:true,

  });

    // Slider section team-say

    $('.team-say__slider').slick({
      centerMode:false,     
      draggable:false,    
      arrows:true,    
      autoplay:false,
      autoplaySpeed:3000,     
      slidesToShow:1,     
      slidesToScroll:1, 
      nextArrow: $('.right-arrow'),
      prevArrow: $('.left-arrow'),
      dots:true,

  });

  // rating

  // Click 
  var addClass = function(id, index) {
    $(id + ' .rating__star').removeClass('rating__star--active');

    for (var i = 0; i < index; i++) {
      $(id + ' .rating__btn').eq(i).children().addClass('rating__star--active');
    }
  };

  $('.rating').click(function(e) {
    var itemId = '#' + $(this).attr('id');
    var rateIndex = e.target.closest('button').dataset.rate;

    $(itemId + ' .rating__btn').removeClass('js-active');
 
    for (var i = 0; i < rateIndex; i++) {
      $(itemId + ' .rating__btn').eq(i).addClass('js-active');
    }

    addClass(itemId, rateIndex);
  });

  // Hover
  $('.rating__btn').mouseover(function(e) {
    var slideId = '#' + $(this).parent('div').attr('id'); 
    var rateIndex = $(this).data('rate');

    addClass(slideId, rateIndex);
  });

  $('.rating__btn').mouseleave(function(e) {
    var slideId = '#' + $(this).parent('div').attr('id'); 
    var items = $(slideId + ' .rating__btn');
    var activeItems = 0;
    
    for (var i = 0; i < items.length; i++) {
      if (items.eq(i).hasClass('js-active')) {
        activeItems += 1;
      }
    }

    addClass(slideId, activeItems);
  });

  // Popup section services

  $('.blog__btn').click(function(e) {
    var elemId = '#js-popup-' + $(this).data('order');
    $(elemId).addClass('blog__popup--is-active');
  });

  $('.js-blog-close').on('click', function(){
    $(this).closest('div').removeClass('blog__popup--is-active');
  });  
});

// Google map

var map;
var mapConteiner = $('#map')[0];
var mapCenter = {lat: 51.4904732, lng: 31.3050769};

function initMap() {
  map = new google.maps.Map(mapConteiner, {
      center: mapCenter,
      zoom: 15,
      disableDefaultUI: true
  });
}