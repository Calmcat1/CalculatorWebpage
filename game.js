const box = document.getElementById("box");

let x=0;
let y=0;


window.addEventListener("keydown", move);
window.addEventListener("DOMContentLoaded",gamestart);




function gamestart(){

  alert("game start!");
  box.style.marginTop = "245px";
  box.style.marginLeft = "370px";
  x=370;
  y=245;


}

function move(event){


  if (box.style.marginTop>"0px" && box.style.marginLeft>"0px" && box.style.marginTop<="540px"
  && box.style.marginLeft<="735px"){

    switch(event.key){

      case "ArrowRight":
        x+=5;
        box.style.marginLeft = x + "px";
        break;

      case "ArrowLeft":
        x-=5;
        box.style.marginLeft = x + "px";
        break;

     case "ArrowDown":
        y+=5;
        box.style.marginTop = y + "px";
        break;

      case "ArrowUp":
        y-=5;
        box.style.marginTop = y + "px";
        break;

      default:
      break;
    
  }
  }
  else if (box.style.marginTop<="0px"){

    alert("Game Over!");
    box.style.marginTop = "245px";
    box.style.marginLeft = "370px";
    x=370;
    y=245;

  }

  else if(box.style.marginLeft<="0px"){
    alert("Game over!");
    box.style.marginTop = "245px";
    box.style.marginLeft = "370px";
    x=370;
    y=245;
  }

  else if(box.style.marginLeft>="735px"){
    alert("Game over!");
    box.style.marginTop = "245px";
    box.style.marginLeft = "370px";
    x=370;
    y=245;
  }

  else if(box.style.marginTop>="540px"){
    alert("Game over!");
    box.style.marginTop = "245px";
    box.style.marginLeft = "370px";
    x=370;
    y=245;

  }

}



 









