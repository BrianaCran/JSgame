var game = {
  feedback: null,
  lastUserChoice: null,
  userChoice: null,
  nextUserChoice: null,
  gameWon: null
};

function newGame(){
  game.feedback = "You have encountered a sleeping dragon! What shall you do? Flee, Steal, or Fight?";
  game.gameWon = false;
  game.userChoice = null;
  $('.js-answer').val(null);
};

function gameReset(){
  $('.js-reset').click(function(event){
    event.preventDefault();
		newGame();
  });
};

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
     game.lastUserChoice = userChoice;
     game.feedback = result(userChoice);
     game.nextUserChoice = result(userChoice);

     displayGameState(game);
     $('.js-answer').val(null);
 	 });
};
function result(userChoice){
 if(game.userChoice === "FLEE"){
   return "Are you a fast runner?";
   }
 else if (game.lastUserChoice === "FLEE" && game.nextUserChoice === "Yes"){
   return "You have escaped!";
 }
 else{
   return "invaild answer";
 };
 if(game.userChoice === "STEAL"){
   return "Are you silent?";
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
