var socket = io();

socket.on('connect', function () {
	console.log('connected to server!');
});

socket.on('message', function (message) {
	console.log('New Message');
	console.log();

	jQuery('.messages').append('<p>' + message.text + '</p>');

});

// handle submitting a new message
var $form = jQuery('#message-form');
$form.on('submit', function (event) {
	event.preventDefault();

	socket.emit('message', {
		text: $form.find('input[name=message]').val()
	});
	//
	$form.find('input[name=message]').val('');
});

