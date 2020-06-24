function play(choice){
  let choiceNumber = parseInt(choice);  
  let random = Math.floor(Math.random()*3);
  let compChoiceString = random == 0 ? "Rocks" : random == 1 ? "Paper" : "Scissors";
  let playerChoiceString = choiceNumber == 0 ? "Rocks" : choiceNumber == 1 ? "Paper" : "Scissors";

  document.getElementById('compChoice').textContent=compChoiceString;
  document.getElementById('playerChoice').textContent=playerChoiceString;
  document.getElementById('winner').textContent = winner(choiceNumber,random);
}
function winner(p,c){
 return (p+1)%3 == c ? "You Lose." : p == c ? "It's a Tie." : "You Win!";
}
