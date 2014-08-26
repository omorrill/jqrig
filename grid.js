// ACTUAL PROJECT FILE 

$(document).ready(function() {

// EXPAND ON CLICK
$('.orng, .blu, .gre, .gol, .imgs').click(function() {

	$(this).animate({'height': '250px'}, { duration: 200, queue: false });
	$(this).animate({'width': '25%'}, { duration: 200, queue: false });
	
	$('body').mouseup(function () {
		$('.orng, .blu, .gre, .gol, .imgs').animate({'height': '150px'}, { duration: 200, queue: false });
		$('.orng, .blu, .gre, .gol, .imgs').animate({'width': '20%'}, { duration: 200, queue: false });
	});
});


// Show All
$( "#showall" ).click(function() {
	var allCamp = $('.orng, .blu, .gre, .gol, .imgs');
  $(allCamp).fadeIn(750);
});

// Show orange Only
$( "#showorng" ).click(function() {
  $('.orng').fadeIn(750);
  $('.blu, .gre, .gol, .imgs').fadeOut(10);
});

// Show blue Only
$( "#showblu" ).click(function() {
  $('.blu').fadeIn(750);
  $('.orng, .gre, .gol, .imgs').fadeOut(10);
});

// Show green Only
$( "#showgre" ).click(function() {
  $('.gre').fadeIn(750);
  $('.orng, .blu, .gol, .imgs').fadeOut(10);
});

// Show gold Only
$( "#showgol" ).click(function() {
  $('.gol').fadeIn(750);
  $('.orng, .blu, .gre, .imgs').fadeOut(10);
});

// Show imgs Images Only
$( "#showpic" ).click(function() {
  $('.imgs').fadeIn(750);
  $('.orng, .blu, .gre, .gol').fadeOut(10);
});

console.log("You've reached the end of button functions");

});


// SHUFFLE ON REFRESH
jQuery(function($){    
    // a series of paragraphs
    $('.shuf').ready(function(){
        $('#grid-wrap').shuffle();
    });
});

(function($){

    $.fn.shuffle = function() {
        return this.each(function(){
            var items = $(this).children().clone(true);
            return (items.length) ? $(this).html($.shuffle(items)) : this;
        });
    }
    
    $.shuffle = function(arr) {
        for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
        return arr;
    }
    
})(jQuery);