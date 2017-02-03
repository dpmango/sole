$(document).ready(function(){

  // menuFixed
  $('#menuDropOpen').on('click', function(){
    $('.menuDrop').addClass('is-active');
  });
  $('#menuDropClose').on('click', function(){
    $('.menuDrop').removeClass('is-active');
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
    $(this).closest('.row').find('img').hide();
    $(this).closest('.row').find('.videoMainpage__video').show();
    $('video').play();
  });

  $("video").click(function() {
    //console.log(this);
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
      600:{
        items: 1,
      },
      1000:{
        items: 1,
      }
    }
  });

  // Magnific Popup
  $('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });

  $('.popup-with-move-anim').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });

  $('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
		}
	});

  // Masked input
  $("#date").mask("99/99/9999",{placeholder:"mm/dd/yyyy"});
  $("input[name='phone']").mask("9 (999) 999-9999");
  $(".--ui-number input").mask("99");

});
