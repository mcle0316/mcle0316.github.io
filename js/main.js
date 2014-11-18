$(document).ready(function() {
	
	// Portfolio section 
	
	// Toggle a portfolio item
	$('.portfolio-work a').click(function() {
		$('.portfolio-details .portfolio-item').hide();
		
		var itemId = $(this).attr('href');
		$('.portfolio-details ' + itemId).show();
		
		if ($('.portfolio-details').css('display') == 'none') {
			$('.portfolio-details').slideDown();
		}
		
		$.smoothScroll({
	      scrollTarget: '#portfolio-details',
		  offset: -54
	    });
		
		return false;
		
	});
	
	// Close portfolio
	$('#close-portfolio').click(function() {
		$('.portfolio-details').slideUp();
		return false;
	});
	// END - Portfolio section	
	
	// Smooth scroll in header links
	$('.nav-bar a').smoothScroll({ offset: -54 });
	// END - Smooth scroll in header links
	
});

$(document).ready(function() {
  $('body').addClass('js');
  var $menu = $('#menu'),
    $menulink = $('.menu-link');
  
$menulink.click(function() {
  $menulink.toggleClass('active');
  $menu.toggleClass('active');
  return false;
});});