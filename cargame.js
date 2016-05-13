var myCar;

function createCar() { //pass all user inputs to browser output
  var make = document.getElementById("inputMake").value;
  var model = document.getElementById("inputModel").value;
  var year = document.getElementById("inputYear").value;
  var speed = 0;

  document.getElementById("makeSpan").innerHTML = make;
  document.getElementById("modelSpan").innerHTML = model;
  document.getElementById("yearSpan").innerHTML = year;
  document.getElementById("speedSpan").innerHTML = 0;

  return {//begin object
    getSpeed : function() { return speed; },
    accelerateCar: function() {
      if(speed > 75) { //prevent car from going over 85
        speed = 85;
      }
      else {//increase speed by 10
        speed = speed + 10;
      } //end if else
    },//end accelerate
    brakeCar: function() {
      if(speed < 7) { //prevent car from going negative
        speed = 0;
      }
      else {//decrease speed by 7
        speed = speed - 7; //end if else
      } //end if else
    },//end brake
    badBrakeCar: function() {
      var randomizer = Math.random()*2;//randomize plus or minus speed
      var changeSpeed = Math.random()*speed;
      if(randomizer >= 1){//decrease speed
        speed = speed - changeSpeed;
      }
      else{//increase speed
        speed = speed + changeSpeed;
      }//end if else
      if(speed > 85){speed = 85};
    }//endBrakeCar
  }//end object
}//end function


function createCarButton() {
  myCar = createCar();
}

function accelCar() {
  myCar.accelerateCar();
  document.getElementById("speedSpan").innerHTML = myCar.getSpeed();
}

function decelCar() {
  myCar.brakeCar();
  document.getElementById("speedSpan").innerHTML = myCar.getSpeed();
}

function badDecel() {
  myCar.badBrakeCar();
  document.getElementById("speedSpan").innerHTML = myCar.getSpeed();
}

function speedUp() {
  var checkSpeed = myCar.getSpeed();
  while (checkSpeed <= 60) {
    myCar.accelerateCar();
    checkSpeed = myCar.getSpeed();
    document.getElementById("speedSpan").innerHTML = checkSpeed;
  }
}

function speedDown() {
  var checkSpeed = myCar.getSpeed();
  while (checkSpeed > 0) {
    myCar.brakeCar();
    checkSpeed = myCar.getSpeed();
    document.getElementById("speedSpan").innerHTML = checkSpeed;
  }
}
