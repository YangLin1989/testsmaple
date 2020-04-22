// 貼心小叮嚀
$(document).ready(function() {	
	$('.accordion > a').click(function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
		$(this).siblings('.accordion_con').slideToggle();
	});

});