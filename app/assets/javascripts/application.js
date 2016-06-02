// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
	$('body').append('<div id="sidr">' +
					 	'<ul>' +
					 		'<li><a href="/home">Home</a></li>' +
					 		'<li><a href="/about">About</a></li>' +
					 		'<li><a href="/signups/new">Contact</a></li>' +
					 		'<a id="btnClose" href=""><img src="/assets/close-white.svg"></button></a>' +
					 	'</ul>' +
					 '</div>');

	$('#menu').sidr({
		displace:false
	});

    $('#btnClose').click(function(){ // when 'btnClose' is clicked
        $.sidr('close', 'sidr');  // close the div with the ID of "sidr"
    });
})

$(document).ready(function() {

});
Status API Training Shop Blog About
