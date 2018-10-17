$(document).ready(function() {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
});

$(document).ready(function() {
  $('#incfont').click(function(){   
    curSize= parseInt($('.main').css('font-size')) + 2;
    if(curSize<=20)
      $('.main').css('font-size', curSize);
  }); 
  $('#decfont').click(function(){   
    curSize= parseInt($('.main').css('font-size')) - 2;
    if(curSize>=11)
      $('.main').css('font-size', curSize);
  });
});