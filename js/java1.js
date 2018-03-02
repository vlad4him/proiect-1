(function(window, document, undefined){


	window.onload = init;
	
	
	

	function init() {
		

		var bec = document.getElementById("bec");
			on  = document.getElementById("turn-on");
			off = document.getElementById("turn-off");

		on.addEventListener("click", function(){

			bec.src = 'https://www.w3schools.com/js/pic_bulbon.gif';
		});

		off.addEventListener("click", function(){

			bec.src = 'https://www.w3schools.com/js/pic_bulboff.gif';

		});

	
var counter = document.getElementById('counter'),
	counterValue = counter.innerHTML,
	counterInterval = -1,
	counterBackground = parseInt('FFFFFF', 16);

console.log(counterBackground);

var runner = document.getElementById('runner'),
	stopper = document.getElementById('stop');

stopper.addEventListener('click', function() {

	clearInterval(counterInterval);
	counterInterval = -1;

});

runner.addEventListener('click', function() {


	if (counterInterval !== -1) return;


	counterInterval = setInterval(function() {

		counterValue++;

		counter.innerHTML = counterValue; 


		counterBackground = counterBackground + 10000;

		counter.style.backgroundColor = '#'+ counterBackground.toString(16).substr(0, 6);
		console.log(counterBackground.toString(16));


	}, 1000);


});




// $('#runner').click(function() {
//    var amount=parseInt($('#amount').val());
//    $({c:0}).animate({c:amount}, { 
//         step: function(now) {
//             $("#count").val(Math.round(now))
//         },
//         duration: 30000,
//         easing: "linear"        
//     });
// })


		
//https://www.w3schools.com/js/pic_bulbon.gif
//https://www.w3schools.com/js/pic_bulboff.gif
	}

})(window, document, undefined); 

