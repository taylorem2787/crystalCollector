// GLOBAL VARIABLES
//--------------------------------------------------------------


  $( document ).ready(function() {
  	
  	var numberToGuess = Math.round(Math.random() * 120) + 18;  
  	crystals = ['assets/images/ruby.png', 'assets/images/multi.png', 'assets/images/emerald.png', 'assets/images/blue.png'];
    var counter = 0;
    // Game Counters
    winCount = 0;
    lossCount = 0;
   
   //	$('#number').text(numberToGuess);
  
    newCrystals();
	startGame();
	$('#number').text(numberToGuess);

	function newCrystals () {
		var numbers = []
			while(numbers.length < 4){
			  var randomnumber = Math.ceil(Math.random()*12)
			  var found = false;
			  for (var i=0; i< numbers.length; i++){
				if (numbers[i] == randomnumber){
					found = true; break
				}
			  }
			  if(!found)numbers[numbers.length]=randomnumber;
			}
		console.log(numbers);
   

    for (var i=0; i< numbers.length; i++){

      var imageCrystal = $('<img>');
      
      imageCrystal.attr('data-num', numbers[i]);

      imageCrystal.attr('src',  crystals[i]);

      imageCrystal.attr('alt', 'crystals');

      imageCrystal.addClass('crystalImage');

      $('#crystals').append(imageCrystal);
    }

 }  

 	function startGame() {
    $('.crystalImage').on('click', function(){
      counter = counter + parseInt($(this).data('num'));
      
      $('#yourNumber').text(counter);

      if (counter == numberToGuess){
      	setTimeout(function(){ 
      	$('#gameCount').text('You won!');
      	winCount++;
        //alert('You won!!!!');
     	document.getElementById("winCounter").innerHTML = winCount;
     	reset ();
     	newCrystals ();
      	startGame ();
		}, 1000);
      }


      else if( counter > numberToGuess){
      	setTimeout(function(){ 
      	$('#gameCount').text('You Lost!');
      	lossCount++;
        //alert('You lost!');
       	document.getElementById("lossCounter").innerHTML = lossCount;
        reset();
        newCrystals();
        startGame ();
    	}, 1000);
      }     
      

    });
	}
  
  });

    $(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="chime.wav";
        obj.autoPlay=false;
        obj.preLoad=true;       
 
        $(".playSound").click(function() {
            obj.play();
        });
 
    }); 

   // function reset () {

   // 	if (gameOver === true) {
   // 		numberToGuess = Math.round((Math.random() * 120) + 18); 
   // 		randomnumber = Math.ceil(Math.random()*12);
   // 		numbers = [];
   // 		gameOver = false;


   // 	}

   //  function newGame () {
   //  var numberToGuess = Math.round(Math.random() * 120) + 18;  
    
    


 
  


