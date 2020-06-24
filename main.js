function play(choice){
  let compChoice = "";
  let playerChoice = ""
  let objPlayerOut=document.getElementById('playerChoice')
  let objCompOut=document.getElementById('compChoice')
  let objWinnerOut=document.getElementById('winner')
  
  let random = Math.floor(Math.random()*3);
  let winner="";
  objWinnerOut.textContent=winner;
  if(random==0)
    compChoice+="Rocks";
  else if(random==1)
    compChoice+="Paper";
  else
    compChoice+="Scissors"
  switch(choice){
    case "rock":
      playerChoice+="Rocks"
      break;
    case "paper":
      playerChoice+="Paper"
      break;
    case "scissors":
      playerChoice+="Scissors"
      break;
  }
  objCompOut.textContent=compChoice;
  objPlayerOut.textContent=playerChoice;

  if(choice=="rock"){
    if(random==0){
      winner="It's a Tie."
    }
    else if(random==1){
      winner="You Lose."
    }
    else{
      winner="You Win!"
    }
  }
  else if(choice=="paper"){
    if(random==0){
      winner="You Win!"
    }
    else if(random==1){
      winner="It's a Tie."
    }
    else{
      winner="You Lose."
    }
  }
  else{
    if(random==0){
      winner="You Lose."
    }
    else if(random==1){
      winner ="You Win!"
    }
    else{
      winner="It's a Tie."
    }

  }

  objWinnerOut.textContent=winner;
}
