
var buttons = Array();
var numberValues = ['0','1','2','3','4','5','6','7','8','9','.']
var buttonClear = document.getElementById('C');
var buttonAddition = document.getElementById('+');
var buttonSubtraction = document.getElementById('-');
var buttonMultiplication = document.getElementById('*');
var buttonDivision = document.getElementById('/');
var buttonEquals = document.getElementById('=');
var buttonModulo = document.getElementById('mod')

var value = 0.0;
var operand1 = 0.0;
var operand2 = 0.0;
var screenValue = '0';
var operation = '';

function addToScreen(char){
  if(screenValue=='0'){
    screenValue = char;
  }
  else if (!(char=='.'&&screenValue.includes('.'))) {
    screenValue+=char;
    }
  if(operation==''){
    operand1 = parseFloat(screenValue);
  }
  else {
    operand2 = parseFloat(screenValue);
  }

  document.getElementById("screen").value = screenValue;

}

for(var i=0; i<11; i++){
  buttons[i] = document.getElementById(numberValues[i]);
  buttons[i].addEventListener("click", function(event){
    var value = event.target.id;
    addToScreen(value);
  });
}

buttonClear.addEventListener("click", function(){
  resetScreen();
  value = 0.0;
});


buttonAddition.addEventListener("click", function(event){
  operation = 'addition';
  if(operand2!=0){
    equals();
  }
  else{
    resetScreen();
  }

});

buttonSubtraction.addEventListener("click", function(event){
  operation = 'subtraction';
  resetScreen();
});

buttonMultiplication.addEventListener("click", function(event){
  operation = 'multiplication';
  resetScreen();
});

buttonDivision.addEventListener("click", function(event){
  operation = 'division';
  resetScreen();
});

buttonModulo.addEventListener("click", function(event){
  operation = 'modulo';
  resetScreen();
})


buttonEquals.addEventListener("click", function(event){
  equals();
})

function resetScreen(){
  screenValue = '0';
  addToScreen('0');
}

function equals(){
  if(operation=='addition'){
    value += operand1 + operand2;
    operand1 = 0.0;
    operand2 = 0.0;
    operation = '';
    setScreen();
  }
  else if (operation=='subtraction'){
    if(value==0.0){
      value = operand1;
    }
    value -= operand2;
    operand1 = 0.0;
    operand2 = 0.0;
    operation = ''
    setScreen();
  }
  else if (operation=='division'){
    if(operand2!=0){
      value += operand1;
      value = value/operand2;
      operand1 = 0.0;
      operand2 = 0.0;
      operation = ''
      setScreen();
    }
    else{
      alert("Division by zero");
    }

  }
  else if (operation=='multiplication'){
    value += operand1;
    value = value*operand2;
    operand1 = 0.0;
    operand2 = 0.0;
    operation = '';
    setScreen();
  }
  else if (operation=='modulo'){
    if(value==0){
      value = operand1;
    }
    value = value%operand2;
    operand1 = 0.0;
    operand2 = 0.0;
    operation = '';
    setScreen();
  }
}

function setScreen(){
  document.getElementById("screen").value = value.toString();
}
addToScreen('0');
