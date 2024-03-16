function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteCharacter() {
    var display =
        document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculateSquare(){
  var number= ("enter a number:");
  var square = number * number;
  console.log("Square of " + number + "is " + square);

//   document.getElementById("output").innerHTML = "square of " + x+ "is" + result;
}


function calculateSquare() {
    var input = document.getElementById('display').value;
    var result = eval(input) ** 2; // Using the exponentiation operator (**) to calculate square
    document.getElementById('display').value = result;
  }


function calculateCube(){
    var input= document.getElementById('display').value;
    var result = eval(input) **3;
    document.getElementById('display').value = result;
}

function calculate() {
    var result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
    // console.log(result) 
}
