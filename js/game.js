//game variables
var game = {
  feedback: null,
  lastUserChoice: null,
  userChoice: null,
  nextUserChoice: null,
  dragonHealth: 100,
  playerHealth: 150,
  gameEnd: null
};
//renewing the game
function newGame(){
  game.feedback = "You have encountered a sleeping dragon! What shall you do?!";
  game.gameEnd = false;
  game.userChoice = null;
  game.dragonHealth = 100;
  game.playerHealth = 150;
  $('#jsOptionOne').text("Flee");
  $('#jsOptionTwo').text("Steal");
  $('#jsOptionThree').text("Fight");
  $('.js-answer').val(null);
  displayGameState(game);
}
//game reset
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
//game mechanics
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
  game.gameEnd = true;
};
//fighting mechanics
function fighting(){
  var dragonAttack = Math.floor(Math.random()*(20 - 1 + 1)) + 1;
  var playerAttack = Math.floor(Math.random()*(40 - 1 + 1)) + 1;
  var newDragonHealth = game.dragonHealth - playerAttack;
  var newPlayerHealth = game.playerHealth - dragonAttack;
  game.dragonHealth = newDragonHealth;
  game.playerHealth = newPlayerHealth;

  if(game.playerHealth <= 0){
     $('.js-feedback').text("You have been slain by the dragon!!");
     resetOptions();
   }
   else if (game.dragonHealth > 0 && game.playerHealth > 0){
       $('.js-feedback').text("You have hurt the dragon! Keep attacking!" + " Health left " + game.dragonHealth + "." + " The dragon has fought back your health is: " + game.playerHealth );
       game.dragonHealth = newDragonHealth;
       game.playerHealth = newPlayerHealth;
   }
   else if (game.dragonHealth <= 0){
          $('.js-feedback').text("You have slain the dragon!!");
          resetOptions();
   }
   else if (game.dragonHealth <= 0 && game.playerHealth <= 0){
          $('.js-feedback').text("You and the dragon fought to the bitter end. Both of you have been slain....");
          resetOptions();
   }else{
         alert('Invaild choice..Try Again');
   }
}

function result(userChoice){
//Flee branch
switch(game.userChoice){
     case "FLEE":
              $('.js-feedback').text("Are you fast?");
              $('#jsOptionOne').text("Very fast");
              $('#jsOptionTwo').text("Not fast");
              $('#jsOptionThree').text("");
              break;
     case "VERY FAST":
                  $('.js-feedback').text("You have escaped!");
                  resetOptions();
                  break;
     case "NOT FAST":
                  $('.js-feedback').text("Are you a quiet runner?");
                  $('#jsOptionOne').text("Of Course");
                  $('#jsOptionTwo').text("Not really");
                  $('#jsOptionThree').text("");
                  break;
     case "OF COURSE":
                  $('.js-feedback').text("You have managed to sneak away from the still sleeping dragon!");
                  resetOptions();
                  break;
     case "NOT REALLY":
                  $('.js-feedback').text("The dragon has awakened and wasted no time in devouring you!!");
                  resetOptions();
                  break;
//Steal branch
  case "STEAL":
          $('.js-feedback').text("Are you silent like a shadow?");
          $('#jsOptionOne').text("Yup ninja silent");
          $('#jsOptionTwo').text("Super Clumsy");
          $('#jsOptionThree').text("");
          break;
  //steal option one results
  case "YUP NINJA SILENT":
                    $('.js-feedback').text("How much treasure are you stealing?");
                    $('#jsOptionOne').text("A wagon full");
                    $('#jsOptionTwo').text("Small bag full");
                    $('#jsOptionThree').text("A handful");
                    break;
                    //yup ninja silent option one results
                    case "A WAGON FULL":
                                    $('.js-feedback').text("You took way to long....the dragon is not pleased...you've been burnt to a crisp.");
                                    resetOptions();
                                    break;
                    //yup ninja silent option two results
                    case "SMALL BAG FULL":
                          $('.js-feedback').text("The dragon stirs...");
                          $('#jsOptionOne').text("Stand still");
                          $('#jsOptionTwo').text("Run for it");
                          $('#jsOptionThree').text("");
                          break;
                                  //small bag full option one results
                                  case "STAND STILL":
                                                $('.js-feedback').text("As you wait with bated breath the dragon continues to slumber. You leave while you still can...");
                                                resetOptions();
                                                break;
                                  //small bag full option two results
                                  case "RUN FOR IT":
                                                $('.js-feedback').text("The dragon was fully awakened by your mad scramble...After a long chase you fall in exhaustion and are devoured.");
                                                resetOptions();
                                                break;
                    //yup ninja silent choice result a handful
                    case "A HANDFUL":
                                $('.js-feedback').text(" You have succesfully taken your stolen treasure and escaped unnoticed!");
                                resetOptions();
                                break;
  //steal option two results
  case "SUPER CLUMSY":
                  $('.js-feedback').text("After grabbing some gold you tripped and made a racket! Your half stuck in gold..");
                  $('#jsOptionOne').text("Struggle and run");
                  $('#jsOptionTwo').text("Hide in the pile");
                  $('#jsOptionThree').text("Sing");
                  break;
                  //super clumsy option one results
                  case "STRUGGLE AND RUN":
                                  $('.js-feedback').text("OH NO! You are stuck and now the dragon has you in it's sight. You were incinerated...");
                                  resetOptions();
                                  break;
                  //super clumsy option two results
                  case "HIDE IN THE PILE":
                                  $('.js-feedback').text("The dragon awakens, but soon goes back to sleep too lazy to search for the source of the noise...You take the chance to escape");
                                  resetOptions();
                                  break;
                  //super clumsy option three results
                  case "SING":
                          $('.js-feedback').text("You start to sing in a surprisingly good singing voice..The dragon sees you and listens..");
                          $('#jsOptionOne').text("Keep Singing");
                          $('#jsOptionTwo').text("Run Away");
                          $('#jsOptionThree').text("");
                          break;
                          //sing option one results
                          case "KEEP SINGING":
                                        $('.js-feedback').text("The dragon is very pleased with your singing and traps you into a nearby cage. Where you sing for the rest of your days...");
                                        resetOptions();
                                        break;
                          //sing option two results
                          case "RUN AWAY":
                                  $('.js-feedback').text("Before you can even get out of reach you are turned into ribbons by the dragons sharp claws");
                                  resetOptions();
                                  break;
//Fight branch
  case "FIGHT":
        $('.js-feedback').text("You have chosen to fight!");
        $('#jsOptionOne').text("Sword");
        $('#jsOptionTwo').text("Magic");
        $('#jsOptionThree').text("Arrowså");
        break;
  case "SWORD":
         fighting();
         break;
  case "MAGIC":
         fighting();
         break;
  case "ARROWS":
        fighting();
        break;
  default:
     alert("invalid answer...try again");
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
