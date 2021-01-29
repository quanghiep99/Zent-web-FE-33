$(document).ready(function($) {
	console.log($('p'));
	console.log($('#web-33'));
	console.log($('.sayHello'));
	console.log($(':input'));
	console.log($(':password'));
	//Jquery Object >< DOM Object

	console.log($('.sayHello').text());
	$('.sayHello').text('web front end 33');
	console.log($('.say').html());
	// $('.say').html('<b>Ahoho</b>');

	$('sayHello').css('font-size', '24px');

	console.log($('#myDiv').width());
	$('#myDiv').width(400);

	//$('#myDiv').remove();
	$('.sayHello').empty();

	$('#myDiv').prepend('<a href="">prepend</a>');
	$('#myDiv').append('<a href="">append</a>');
	$('#myDiv').before('<a href="">before</a>');
	$('#myDiv').after('<a href="">after</a>');

	// $('#web-33').addClass('class-1');
	// $('#web-33').removeClass('class-1');
	$('#web-33').toggleClass('class-1');
	$('#web-33').hasClass('class-2');



	// $('.say').click(function(){
	// 	$(this).css('color', 'red');
	// });
	// $('.say').mouseenter(function(){
	// 	$(this).css('color', 'red');
	// });

	$('.say').on('click mouseenter', function() {
		console.log(1);
		$(this).css('color' , 'blue' );
	});








})