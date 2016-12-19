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
     game.feedback = result(userChoice);

     displayGameState(game);
     $('.js-answer').val(null);
 	 });
};
function resetOptions(){
  $('#jsOptionOne').text("");
  $('#jsOptionTwo').text("");
  $('#jsOptionThree').text("");
};
function result(userChoice){
 if(game.userChoice === "FLEE"){
   $('.js-feedback').text("Are you fast?")
   $('#jsOptionOne').text("Very fast");
   $('#jsOptionTwo').text("Not fast");
   $('#jsOptionThree').text("");
   }
 else if(game.lastUserChoice === "VERY FAST"){
   $('.js-feedback').text("You have escaped!");
   resetOptions();
 }
 else if(game.lastUserChoice === "NOT FAST"){
   $('.js-feedback').text("Are you a quiet runner?")
   $('#jsOptionOne').text("Of Course");
   $('#jsOptionTwo').text("Not really");
   $('#jsOptionThree').text("");
 }
 else if(game.lastUserChoice === "OF COURSE"){
   $('.js-feedback').text("You have managed to sneak way from the still sleeping dragon!");
   resetOptions();
 }
 else if(game.lastUserChoice === "NOT REALLY"){
   $('.js-feedback').text("The dragon has awakened and wasted no time in devouring you!!");
   resetOptions();
 }
 else{
   $('.js-feedback').text("invaild answer");
 };


 if(game.userChoice === "STEAL") {
   $('.js-feedback').text("Are you silent like a shadow?")
   $('#jsOptionOne').text("Yup ninja silent");
   $('#jsOptionTwo').text("Super Clumsy");
   $('#jsOptionThree').text("");
 }
 else if(game.userChoice === "YUP NINJA SILENT"){
   $('.js-feedback').text("How much treasure are you stealing?")
   $('#jsOptionOne').text("A wagon full");
   $('#jsOptionTwo').text("Small bag full");
   $('#jsOptionThree').text("A handful");
 }
 else if (game.userChoice === "A WAGON FULL") {
   $('.js-feedback').text("You took way to long....the dragon is not please...you've been burnt to a crisp.")
   resetOptions();
 }
 else if (game.userChoice === "SMALL BAG FULL") {
   $('.js-feedback').text("The dragon stirs...")
   $('#jsOptionOne').text("Stand still");
   $('#jsOptionTwo').text("Run for it");
   $('#jsOptionThree').text("");

 }
 else if (game.userChoice === "STAND STILL") {
   $('.js-feedback').text("As you wait with bated breath the dragon continues to slumber. You leave while you still can...")
   resetOptions();
 }
 else if (game.userChoice === "STAND STILL") {
   $('.js-feedback').text("As you wait with bated breath the dragon continues to slumber. You leave while you still can...")
   resetOptions();
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
