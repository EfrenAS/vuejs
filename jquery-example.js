$(document).ready(function() {
	
	function isValid() 
	{
		return $('#name').val() !='' && $('#lastnames').val() !='';
	}

	function toggleEnableContinue() 
	{
		$('#guardar').prop('disabled', !isValid());
	}

	$('#name, #lastnames').keyup(toggleEnableContinue);

	$('#register').submit( (evt) => {
		evt.preventDefault();
		if(!isValid()) return;
		$('#register').hide();
		$('#welcome').show();
		$('#message').text('Bienvenido ' + $('#name').val() + ' ' +  $('#lastnames').val());
	});
});