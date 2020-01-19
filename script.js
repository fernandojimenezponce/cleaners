"use strict";

var msnry = new Masonry( '.gallery-grid', {
    columnWidth: '.grid-sizer',
    itemSelector: '.gallery-item',
    percentPosition: true,
});

$(document).ready(function(){
    $('.gallery-carousel').slick({
        dots: true,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 1,
        arrows: false,
    });
  });
