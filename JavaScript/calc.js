let number1=0;
let number2=0;







document.getElementById("addbttn").onclick=
  function addcalc(){

    number1=Number(document.getElementById("number1").value);
    number2=Number(document.getElementById("number2").value);
    document.getElementById("result1").value=number1+number2;

    console.log(number1+number2);

  }


document.getElementById("minusbttn").onclick=
  function(){

    number1=Number(document.getElementById("number1").value);
    number2=Number(document.getElementById("number2").value);
    document.getElementById("result1").value=number1-number2;

    console.log(number1-number2);
   
  }



  document.getElementById("multibttn").onclick=
  function(){

    number1=Number(document.getElementById("number1").value);
    number2=Number(document.getElementById("number2").value);
    document.getElementById("result1").value=number1*number2;

    console.log(number1*number2);
   
  }


  
document.getElementById("dividebttn").onclick=
function(){

  number1=Number(document.getElementById("number1").value);
  number2=Number(document.getElementById("number2").value);
  document.getElementById("result1").value=number1/number2;

  console.log(number1/number2);
 
}




