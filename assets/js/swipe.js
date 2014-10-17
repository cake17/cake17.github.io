$(function () {
	$("body").on("swipeleft", function(event) {
		if(typeof $('#jquery-prev').attr('href') !== 'undefined'){
			window.location.href = $('#jquery-prev').attr('href');
		};
	});
	$("body").on("swipeRight", function(event) {
		if(typeof $('#jquery-next').attr('href') !== 'undefined'){
			window.location.href = $('#jquery-next').attr('href');
		};
	});
	$(document).keydown(function(event){    
		var key = event.which;                
		switch(key) {
			case 37:
				if(typeof $('#jquery-prev').attr('href') !== 'undefined'){
					window.location.href = $('#jquery-prev').attr('href');
	 			};
			break;
			case 39:
				if(typeof $('#jquery-next').attr('href') !== 'undefined'){
					window.location.href = $('#jquery-next').attr('href');
	 			};
			break;
		}   
	});
});
