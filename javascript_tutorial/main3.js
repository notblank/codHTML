$(document).ready(function() {

	var a = 1;

	$('button').on('click', function(){
		alert(a);
		a = a + 1;
	});

});