function createCar() {
  var make = document.getElementById("inputMake").value;
  var model = document.getElementById("inputModel").value;
  var year = document.getElementById("inputYear").value;
  var speed = 0;

  document.getElementById("makeSpan").innerHTML = make;
  document.getElementById("modelSpan").innerHTML = model;
  document.getElementById("yearSpan").innerHTML = year;
  document.getElementById("speedSpan").innerHTML = speed;
}

function accelerateCar(){
  if(parseInt(document.getElementById("speedSpan").innerHTML) > 75){
    document.getElementById("speedSpan").innerHTML = 85;
  }
  else{
    document.getElementById("speedSpan").innerHTML = parseInt(document.getElementById("speedSpan").innerHTML) + 10;
  }//end if else
}//end accelerate



/*function brakeCar(){
  if(parseInt(document.getElementById("speedSpan").innerHTML) < 7){
    speed = 0
  }
  else {
    speed=speed - 7;
  }//end if else
  return speed;
}//end brake

*/
    //
    //   badBrake: function(){
    //   var randomizer = Math.random()*2;//randomize plus or minus speed
    //   if(randomizer >= 1){//decrease speed
    //     speed = speed - Math.random()*speed;
    //   }
    //   else{//increase speed
    //     speed = speed + Math.random()*speed;
    //   }//end if else
    //   return speed;
    // },//end badBreak
