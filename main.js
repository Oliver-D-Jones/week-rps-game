function play(choice){
  let compChoiceString = "";
  let playerChoiceString = ""
  let choiceNumber = parseInt(choice);
  let objPlayerOut=document.getElementById('playerChoice')
  let objCompOut=document.getElementById('compChoice')
  let objWinnerOut=document.getElementById('winner')
  
  let random = Math.floor(Math.random()*3);
  compChoiceString = random == 0 ? "Rocks" : random == 1 ? "Paper" : "Scissors";
  playerChoiceString = choiceNumber == 0 ? "Rocks" : choiceNumber == 1 ? "Paper" : "Scissors";

  objCompOut.textContent=compChoiceString;
  objPlayerOut.textContent=playerChoiceString;
  objWinnerOut.textContent = winner(choiceNumber,random);
}
function winner(p,c){
 return (p+1)%3 == c ? "You Lose." : p == c ? "It's a Tie." : "You Win!";
}
