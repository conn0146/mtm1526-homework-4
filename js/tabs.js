// JavaScript Document
$(document).ready(function () {

	$('.group img').hide();

	$('.boba').on('click', function () {
		$('.tabs li').css("background-color", "#beb4aa");
		$('.boba').css("background-color", "#dbd3cc");
		$('.group img').fadeOut(500, function() {
			$('.group .tab-1').fadeIn();
		});
	});

	$('.dengar').on('click', function () {
		$('.tabs li').css("background-color", "#beb4aa");
		$('.dengar').css("background-color", "#dbd3cc");
		$('.group img').fadeOut(500, function() {
			$('.group .tab-2').fadeIn();
		});
	});

	$('.ig').on('click', function () {
		$('.tabs li').css("background-color", "#beb4aa");
		$('.ig').css("background-color", "#dbd3cc");
		$('.group img').fadeOut(500, function() {
			$('.group .tab-3').fadeIn();
		});
	});

	$('.bossk').on('click', function () {
		$('.tabs li').css("background-color", "#beb4aa");
		$('.bossk').css("background-color", "#dbd3cc");
		$('.group img').fadeOut(500, function() {
			$('.group .tab-4').fadeIn();
		});
	});

}); 