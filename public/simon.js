"use strict";
(function (){
		
	
	var buttonArray = [];
	var userClick = 0;
	var interval = 1000
	var countdown = 5;
	var round = 1; 

	var randomButton = function(){
		var colorBox = $('.classBox')
		var rand = Math.floor(Math.random()*4);
		var toAnimate = colorBox[rand]
		var id = toAnimate.getAttribute('id')
		buttonArray.push(id);
		console.log(buttonArray);
	}
    
    function animateButton(id){
		$("#" + id).fadeTo(500, 0.5, function(){});
		$("#" + id).fadeTo(500, 1.0, function(){});
	};
	
	function simonsTurn(){
		var i=0;
		var animateInterval = setInterval(function(){
			if(i >= buttonArray.length){
				clearInterval(animateInterval)
			} animateButton(buttonArray[i]);
			i++;
		}, interval)
		
	};

	$('#startBtn').click(function(e) {
		randomButton();
		simonsTurn(); 

	});

	function updateRound(){
		var round = 1
		round += 1;
		$('.round').text(round);
	}

	var boxClick = $('.classBox').click(function(e) {
		var squareClicked = $(this).attr('id');
		animateButton(squareClicked);
		if (squareClicked == buttonArray[userClick]){
			userClick++;
			if(userClick == buttonArray.length){
				updateRound();
				randomButton();
				simonsTurn();
				userClick = 0;

			}
		} else {
			alert ('Game Over');
			location.reload(true);
		}
	});


	

	// This function needs to be called once every second
 //    function updateTimer() {
 //        if (countdown == 0) {
 //            alert('DEATH!');
 //            clearAll();
 //        } else if (countdown > 0) {
 //            $('#timer').html(countdown);
 //        }
 //        updateTimer--;
 //    }; 
    
 //    var IntervalID = setInterval(updateTimer, interval);
 //    TODO: When this function runs, it needs to
 //    cancel the interval/timeout for updateTimer()













})();