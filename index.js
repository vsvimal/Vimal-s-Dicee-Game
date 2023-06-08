
var Number1=Math.floor(Math.random()*6)+1;
var DiceImage1="dice"+ Number1 +".png";
var ImageSource1="images/" + DiceImage1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",ImageSource1);

var  Number2=Math.floor(Math.random()*6)+1;
var DiceImage2="dice"+ Number2 +".png";
var ImageSource2="images/" + DiceImage2 ;
var image=document.querySelectorAll("img")[1];
image.setAttribute("src", ImageSource2);

if(Number1>Number2)
{
 document.querySelector("h1").innerHTML="🚩Player 1 Wins🚩 ";


}
else if(Number1<Number2)
{
  document.querySelector("h1").innerHTML="🚩Player 2 Wins🚩";
}
else{
  document.querySelector("h1").innerHTML="Match Draw";
}
