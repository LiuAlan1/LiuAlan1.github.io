var count= 60 * 15;

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     location.href = "gameover5.html";
     return;
  }

 document.getElementById("timer").innerHTML= Math.floor(count / 60)+ ":" + (count % 60); // watch for spelling
}