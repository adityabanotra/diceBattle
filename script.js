var a= Math.floor(Math.random()*6)+1;
var b= Math.floor(Math.random()*6)+1;

var dice1=document.querySelectorAll('img')[0];

dice1.setAttribute('src',"diceimg/"+a+".png");

var dice2=document.querySelectorAll('img')[1];

dice2.setAttribute('src',"diceimg/"+b+".png");


if(a==b)
{
   document.getElementById('result').textContent="Draw!"; 
}
else if(a>b)
{
    document.getElementById('result').textContent="Player 1 wins!"; 
}
else
{
    document.getElementById('result').textContent="Player 2 wins!"; 
}