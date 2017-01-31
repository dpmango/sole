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
  $("#tin").mask("99-9999999");
  $("#ssn").mask("999-99-9999");

});
