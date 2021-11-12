/* for swipper slide card starts*/


$(document).ready(function(){

  var swipper_card = $('.swiper-container .swiper-wrapper .swiper-slide');

  var swipper_card_width = swipper_card.width();

  so_swipper_card_height = swipper_card_width * 1.33;

  swipper_card.css({ "height": so_swipper_card_height + 'px'});

  $(window).resize(function(){
      var swipper_card_width = $('.swiper-container .swiper-wrapper .swiper-slide').width();

      so_swipper_card_height = swipper_card_width * 1.43;

      swipper_card.css({ "height": so_swipper_card_height + 'px'});

      console.log(so_swipper_card_height);
  });

});


/* for swipper slide card ends*/