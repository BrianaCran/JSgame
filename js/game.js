//game variables
var game = {
  feedback: null,
  lastUserChoice: null,
  userChoice: null,
  nextUserChoice: null,
  gameWon: null
};

function newGame(){
  game.feedback = "You have encountered a sleeping dragon! What shall you do?!";
  game.gameWon = false;
  game.userChoice = null;
  $('#jsOptionOne').text("Flee");
  $('#jsOptionTwo').text("Steal");
  $('#jsOptionThree').text("Fight");
  $('.js-answer').val(null);
  displayGameState(game);
}

function gameReset(){
  $('.js-reset').click(function(event){
    event.preventDefault();
		newGame();
  });
}

function displayGameState(game){
	// display feedback to the user
	$('.js-feedback').text(game.feedback);
}
function gameConsequence(){
  $('.js-submit').click(function(event){
 		 /* by default if user clicks a submit button/input,
 		 the browser will try to submit form. but that's not
 		 what we want to happen -- we want javascript to handle
 		 the form submission, so this line stops the default behavior.*/
 		 event.preventDefault();
 		 var userChoice = $('.js-answer').val();
     var userChoiceConform = userChoice.toUpperCase();
     game.userChoice = userChoiceConform;
     game.feedback = result(userChoice);

     displayGameState(game);
     $('.js-answer').val(null);
 	 });
};

//blank out option choices when ending is achieved
function resetOptions(){
  $('#jsOptionOne').text("");
  $('#jsOptionTwo').text("");
  $('#jsOptionThree').text("");
};

function result(userChoice){
 //Flee branch 1
 if(game.userChoice === "FLEE"){
   $('.js-feedback').text("Are you fast?");
   $('#jsOptionOne').text("Very fast");
   $('#jsOptionTwo').text("Not fast");
   $('#jsOptionThree').text("");
   }
   //Flee Branch 2 second answer results
        else if (game.userChoice === "VERY FAST"){
          $('.js-feedback').text("You have escaped!");
          resetOptions();
        }
        else if (game.userChoice === "NOT FAST"){
          $('.js-feedback').text("Are you a quiet runner?");
          $('#jsOptionOne').text("Of Course");
          $('#jsOptionTwo').text("Not really");
          $('#jsOptionThree').text("");
        }
        //Flee Branch 3 Answer results
          else if (game.userChoice === "OF COURSE"){
            $('.js-feedback').text("You have managed to sneak away from the still sleeping dragon!");
            resetOptions();
          }
          else if (game.userChoice === "NOT REALLY"){
            $('.js-feedback').text("The dragon has awakened and wasted no time in devouring you!!");
            resetOptions();
          }
//Steal Branch 1
else if (game.userChoice === "STEAL") {
   $('.js-feedback').text("Are you silent like a shadow?");
   $('#jsOptionOne').text("Yup ninja silent");
   $('#jsOptionTwo').text("Super Clumsy");
   $('#jsOptionThree').text("");
 }
   //Steal Branch 2 answer results
      else if (game.userChoice === "YUP NINJA SILENT"){
        $('.js-feedback').text("How much treasure are you stealing?");
        $('#jsOptionOne').text("A wagon full");
        $('#jsOptionTwo').text("Small bag full");
        $('#jsOptionThree').text("A handful");
      }
      else if (game.userChoice === "SUPER CLUMSY"){
        $('.js-feedback').text("After grabbing some gold you tripped and made a racket! Your half stuck in gold..");
        $('#jsOptionOne').text("Struggle and run");
        $('#jsOptionTwo').text("Hide in the pile");
        $('#jsOptionThree').text("Sing");
      }
      //Steal Branch 3 answer results
        else if (game.userChoice === "A WAGON FULL") {
          $('.js-feedback').text("You took way to long....the dragon is not please...you've been burnt to a crisp.");
          resetOptions();
        }
        else if (game.userChoice === "SMALL BAG FULL") {
          $('.js-feedback').text("The dragon stirs...");
          $('#jsOptionOne').text("Stand still");
          $('#jsOptionTwo').text("Run for it");
          $('#jsOptionThree').text("");
        }
        //Steal Branch 3 small bag full answer results
            else if (game.userChoice === "STAND STILL") {
              $('.js-feedback').text("As you wait with bated breath the dragon continues to slumber. You leave while you still can...");
              resetOptions();
            }
            else if (game.userChoice === "RUN FOR IT") {
              $('.js-feedback').text("The dragon was fully awakened by your mad scramble...After a long chase you fall in exhaustion and are devoured.");
              resetOptions();
            }
        else if (game.userChoice === "A HANDFUL"){
          $('.js-feedback').text(" You have succesfully taken your stolen treasure and escaped unnoticed!");
          resetOptions();
        }
        else if (game.userChoice === "STRUGGLE AND RUN"){
          $('.js-feedback').text("OH NO! You are stuck and now the dragon has you in it's sight. You were incinerated...");
          resetOptions();
        }
        else if (game.userChoice === "HIDE IN THE PILE"){
          $('.js-feedback').text("The dragon awakens, but soon goes back to sleep too lazy to search for the source of the noise...You take the chance to escape");
          resetOptions();
        }
        else if (game.userChoice === "SING"){
          $('.js-feedback').text("You start to sing in a surprisingly good singing voice..The dragon sees you and listens..");
          $('#jsOptionOne').text("Keep Singing");
          $('#jsOptionTwo').text("Run Away");
          $('#jsOptionThree').text("");
        }
       //Steal Branch 3 sing answer results
            else if (game.userChoice === "KEEP SINGING"){
              $('.js-feedback').text("The dragon is very pleased with your singing and traps you into a nearby cage. Where you sing for the rest of your days...");
              resetOptions();
            }
            else if (game.userChoice === "RUN AWAY"){
              $('.js-feedback').text("Before you can even get out of reach you are turned into ribbons by the dragons sharp claws");
              resetOptions();
            }
  else if (game.userChoice === "FIGHT"){
    $('.js-feedback').text("You have chosen to fight!")

    var dragonDamage = Math.floor(Math.random() * (20)) +1;
    var userDamage = Math.floor(Math.random() * (100 - 1 + 1)) +1;
    if(userDamage >= 0){
      var dragonHealth = 100;
      var userHealth = 100;
      var newDragonHealth = dragonHealth - userDamage;
      $('.js-feedback').text(newDragonHealth);
      if(newDragonHealth > 0){
        var newDragonHealth = dragonHealth - userDamage;
        $('.js-feedback').text(newerDragonHealth);
      }
      else if (newDragonHealth <= 0){
        $('.js-feedback').text("You have slain the dragon!");
      }
    }

  }
}

$(document).ready(
  function(){
  $('.js-help').click(function(){
      $('.intro').hide();
      $('.actions').hide();
      $('.js-display').show();
  });
  $('.js-close').click(function(){
      $('.intro').show();
      $('.actions').show();
      $('.js-display').hide();
  });
});

$(document).ready(
  function(){
    newGame();
  gameReset();
  gameConsequence();
});
