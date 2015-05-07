var $container = $('#windowContainer').imagesLoaded( function() {
var $displayDefaultArtist = $("[data_display=default]");

setTimeout(function(){
      $container.isotope({
        filter: '.artist1',
        itemSelector : '.mainPhotoWrapper',
        masonry: {
			columnWidth: '.grid-sizer'
    	}
    });

    var $stampElem = $container.find('.stamp');
    $container.isotope( 'stamp', $stampElem );
    $container.isotope('layout');

  }, 1000);
	});



  $('nav.menu a').click(function(){
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
    return false;
  });

$(document).ready(function() {

	setTimeout(function(){
		$('body').addClass('loaded');
	}, 3000);

});


$(document).ready(function(){

(function() {

	var bodyEl = document.body,
		content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		// close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
		}
		isOpen = !isOpen;
	}

	init();

})();

});
