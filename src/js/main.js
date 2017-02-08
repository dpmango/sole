$(document).ready(function(){

  // Prevent # errors
	$('[href="#"]').click(function (e) {
		e.preventDefault();
	});

  // smoth scroll
  $('a[href^="#section"]').click(function(){
    var el = $(this).attr('href');
    $('body, html').animate({
        scrollTop: $(el).offset().top}, 1000);
    return false;
  });

  // menuFixed
  $('#menuDropOpen').on('click', function(){
    $('.menuDrop').addClass('is-active');
    $('body').addClass('locked');
  });
  $('#menuDropClose').on('click', function(){
    $('.menuDrop').removeClass('is-active');
    $('body').removeClass('locked');
  });

  $('#showCompare').on('click', function(){
    $('.menuFixed__compareDrop').toggleClass('is-active');
    $('#showCompareBtn').toggleClass('is-active');
  });

  $('.menuFixed__compareDrop .ico-close').on('click', function(){
    $('.menuFixed__compareDrop').removeClass('is-active');
    $('#showCompareBtn').removeClass('is-active');
  });

  // Play Video
  $('#startVideo').on('click', function(){
    $(this).hide();
    $(this).closest('.row').find('img').hide();
    $(this).closest('.row').find('.videoMainpage__video').show();
    //$('video').play();
  });

  $("video").click(function() {
    if (this.paused) {
      this.play();
    } else {
      this.pause();
    }
  });

  // FAQ
  $('.faqList__title, .ico-faq-toggle').on('click', function(){
    $(this).parent().toggleClass('is-active');
  });

  // Shop images and video toggler
  $('.shopIntro__pictures__miniWrap img, .shopIntro__pictures__miniWrap > span').on('click', function(){
    $('.shopIntro__pictures__main video').remove();
    $('.shopIntro__pictures__main img').remove();
    var appendedObject = '';

    if ($(this).data('type') == 'video'){
      var targetVideo = $(this).data('src');
      appendedObject = "<video autoplay='autoplay' style='width:100%;'><source src="+ targetVideo +" type='video/mp4'></video>"
    } else {
      var targetImage = $(this).data('src');
      appendedObject = "<img src="+ targetImage + " />"
    }
    $('.shopIntro__pictures__main').fadeOut(0, function() {
        $(this).append(appendedObject);
      }).fadeIn(300);

    // $('.shopIntro__pictures__main').append(appendedObject);
    $(this).addClass('active').siblings().removeClass('active');
  });

  // UI
  $('.ui-number .ico').on('click', function(e){
    var element = $(this).parent().find('input');
    var currentValue = parseInt($(this).parent().find('input').val()) || 0;

    if( $(this).is('.ico-inputNum-less') ){
      if(currentValue <= 1){
        return false;
      }else{
        element.val( currentValue - 1 );
      }
    } else{
      if(currentValue >= 10){
        return false;
      } else{
        element.val( currentValue + 1 );
      }
    }
  });
  // numbers only
  $(".ui-number input").keydown(function (e) {
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
        (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
        (e.keyCode >= 35 && e.keyCode <= 40)) {
             return;
    }
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
    if ( $(this).val().length > 1 ){
      e.preventDefault();
    }
  });

  //select
  $('.ui-select > span').on('click', function(){
    // hide all first
    $(this).parent().find('.ui-selectDrop').addClass('active');
  });
  $('.ui-selectDrop span').on('click', function(){
    $(this).closest('.ui-select').find('> span').text($(this).text());
    $(this).parent().removeClass('active');
  });


  // FAKE CART
  $('#cartStepTwo').hide();
  $('#cartStepThree').hide();
  $('#cartStepFour').hide();

  $('#cartStepOneTrigger').on('click', function(){
    $("html, body").animate({ scrollTop: 175 }, 2000);

    $('#cartStepOne').hide();
    $('.cartActions').hide();
    $('#cartShopAcessories').hide();
    $('.shopAcessories').hide();

    $('#cartStepTwo').fadeIn();
    $('.cartSteps .cartSteps__step:nth-child(2)').addClass('active');
  });
  $('#cartStepTwoTrigger').on('click', function(){
    $("html, body").animate({ scrollTop: 175 }, 2000);

    $('#cartStepTwo').hide();

    $('#cartStepThree').fadeIn();
    $('.cartSteps .cartSteps__step:nth-child(3)').addClass('active');
  });
  $('#cartStepThreeTrigger').on('click', function(){
    $("html, body").animate({ scrollTop: 175 }, 2000);

    $('#cartStepThree').hide();

    $('#cartStepFour').fadeIn();
    $('.cartSteps .cartSteps__step:nth-child(4)').addClass('active');
  });


  $('.shareTrigger').on('click', function(){
    $(this).toggleClass('active');
    $(this).parent().find('.shareArticle').toggleClass('active');
  });

  //CONTACT
  $('.contactMaps__tabs').on('click', 'a:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('body').find('.contactMaps__maps__map').removeClass('active').eq($(this).index()).addClass('active');
  });

  // PRODUCT TABS - the Kostyl
  $('.shopTabs__navi').on('click', 'a', function() {
    $(this)
      .addClass('active').siblings().removeClass('active');
    $('.shopTabs__content--mobile').removeClass('visible');
    $(this).next().addClass('visible');
  });

  // Custom modal
  $('.modal__trigger').on('click', function(e){
    e.preventDefault();
    var target = $(this).attr('href');
    $(target).fadeIn();
  });
  $('.modal__close').on('click', function(){
    $(this).closest('.modal').fadeOut();
  });

  // Compare
  responsiveCompare();

  $(window).resize(function() {
    responsiveCompare();
  });

  // get controlls

  function responsiveCompare(){
    $('.compare__row .compare__col').removeClass('visible');

    // var getNav = $('.compare__row--controls .controllable').html();
    var getNav = "<span>Показать еще</span><i class='ico ico-nav-prev'></i><i class='ico ico-nav-next active'></i>";
    $('.compare__row--controls .controllable').find('span, i').remove();

    if ( $(window).width() > 992 ) {
      $('.compare__row .compare__col:nth-child(1)').addClass('visible');
      $('.compare__row .compare__col:nth-child(2)').addClass('visible');
      $('.compare__row .compare__col:nth-child(3)').addClass('visible');
      $('.compare__row .compare__col:nth-child(4)').addClass('visible');
      $('.compare__row--controls .compare__col:nth-child(4)').append(getNav).addClass('controllable');
    } else {
      $('.compare__row .compare__col:nth-child(1)').addClass('visible');
      $('.compare__row .compare__col:nth-child(2)').addClass('visible');
      $('.compare__row .compare__col:nth-child(3)').addClass('visible');
      $('.compare__row--controls .compare__col:nth-child(3)').append(getNav).addClass('controllable');
    } 

  }

  // get number of elements
  var elementsToCompare = 0;
  $('.compare__row').first().each(function(key, val){
    var elementsToCompare = $(this).find('.compare__col').length - 1
  });

  $('.ico-nav-next').on('click', function(){

  });


  // owl
  $('#owlTechMainpage').owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    responsiveRefreshRate: 10,
    margin: 0,
    responsive: {
      0:{
        items: 1,
      },
      768:{
        items: 1,
      },
      992:{
        items: 1,
      }
    }
  });

  $('#owlGoodsMobile').owlCarousel({
    loop: false,
    nav: false,
    dots: true,
    responsiveRefreshRate: 10,
    margin: 0,
    responsive: {
      0:{
        items: 1,
      },
      568:{
        items: 2,
      },
      768:{
        items: 3,
      },
      992:{
        items: 4,
      }
    }
  });

  // INSIDE GOODS
  $('#owlGoodFeatured').owlCarousel({
    loop: false,
    nav: false,
    dots: true,
    responsiveRefreshRate: 10,
    margin: 0,
    responsive: {
      0:{
        items: 1,
      },
      568:{
        items: 2,
      },
      768:{
        items: 3,
      },
      992:{
        items: 4,
      }
    }
  });

  $('#owlGoodSimilar').owlCarousel({
    loop: false,
    nav: false,
    dots: true,
    responsiveRefreshRate: 10,
    margin: 0,
    responsive: {
      0:{
        items: 1,
      },
      568:{
        items: 2,
      },
      768:{
        items: 3,
      },
      992:{
        items: 4,
      }
    }
  });

  // Masked input
  $("#date").mask("99/99/9999",{placeholder:"mm/dd/yyyy"});
  $("input[name='phone']").mask("9 (999) 999-9999");
  $("input[type='tel']").mask("9 (999) 999-9999");
  $(".--ui-number input").mask("99");

  // Magnific Popup
  // $('.popup-with-zoom-anim').magnificPopup({
  //   type: 'inline',
  //   fixedContentPos: false,
  //   fixedBgPos: true,
  //   overflowY: 'auto',
  //   closeBtnInside: true,
  //   preloader: false,
  //   midClick: true,
  //   removalDelay: 300,
  //   mainClass: 'my-mfp-zoom-in'
  // });
  //
  // $('.popup-with-move-anim').magnificPopup({
  //   type: 'inline',
  //   fixedContentPos: false,
  //   fixedBgPos: true,
  //   overflowY: 'auto',
  //   closeBtnInside: true,
  //   preloader: false,
  //   midClick: true,
  //   removalDelay: 300,
  //   mainClass: 'my-mfp-slide-bottom'
  // });
  //
  // $('.popup-gallery').magnificPopup({
  //   delegate: 'a',
  //   type: 'image',
  //   tLoading: 'Loading image #%curr%...',
  //   mainClass: 'mfp-img-mobile',
  //   gallery: {
  //     enabled: true,
  //     navigateByImgClick: true,
  //     preload: [0,1]
  //   },
  //   image: {
  //     tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
  //   }
  // });

});
