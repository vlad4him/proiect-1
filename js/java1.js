(function(window, document, undefined){


	window.onload = init;


	function init() {


		var bec = document.getElementById("bec"),
			on  = document.getElementById("turn-on"),
			off = document.getElementById("turn-off");

		on.addEventListener("click", function(){

			bec.src = 'https://www.w3schools.com/js/pic_bulbon.gif';
		});

		off.addEventListener("click", function(){

			bec.src = 'https://www.w3schools.com/js/pic_bulboff.gif';

		});


//https://www.w3schools.com/js/pic_bulbon.gif
//https://www.w3schools.com/js/pic_bulboff.gif
	}


})(window, document, undefined); 