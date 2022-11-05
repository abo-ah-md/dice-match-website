

  
function randomDice_Player1(){
let randomNumber1= Math.floor(Math.random()*6+1);

let player_1_img =document.querySelector(".img1");
switch(randomNumber1){
    case 1:
      player_1_img.setAttribute("src","images/dice1.png")
      return 1;
      break;
       
     case 2:
     
      player_1_img.setAttribute("src","images/dice2.png")
      return 2;
      break; 
     case 3:
     
      player_1_img.setAttribute("src","images/dice3.png")
      return 3;
      break; 
     case 4:
      player_1_img.setAttribute("src","images/dice4.png")
      return 4;
      break; 
     case 5:
      player_1_img.setAttribute("src","images/dice5.png")
      return 5;
      break; 
      default:
       return 6
  } 
}



function randomDice_Player2() {
    let randomNumber2= Math.floor(Math.random()*6+1);

let player_2_img =document.querySelector(".img2");
   switch(randomNumber2){
  case 1:
    player_2_img.setAttribute("src","images/dice1.png")
    return 1;
    break;
     
   case 2:
   
    player_2_img.setAttribute("src","images/dice2.png")
    return 2;
    break; 
   case 3:
   
    player_2_img.setAttribute("src","images/dice3.png")
    return 3;
    break; 
   case 4:
    player_2_img.setAttribute("src","images/dice4.png")
    return 4;
    break; 
   case 5:
    player_2_img.setAttribute("src","images/dice5.png")
    return 5;
    break; 
    default:
     return 6
} 
}


console.log(randomDice_Player1());
console.log(randomDice_Player2());

function winner() {
    let winingText=document.querySelector(".container h1");
   if (randomDice_Player1()>randomDice_Player2()) {
    winingText.textContent="🏴player1 wins";
   }
   else if (randomDice_Player1()<randomDice_Player2()) {
    winingText.textContent="player2 wins🏴";
    
   }
   else
   {
    winingText.textContent="draw!";
   }
}
 
                                   
winner()        