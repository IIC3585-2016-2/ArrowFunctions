
//Declaration VS Expression



//Use of function declaration
//The order does not affect the result
alert(fn());

function fn() {
  return 'Hello world!';
}


//-----------------------------------------------------------------------


//When using expressions, the order matters.
//Wrong use of expressions
alert(fho()); //'function fho doesn't exist'

var fho = () => {
  return 'Heya';
}

//Correct use of expressions
var fho = () => {
  return 'Heya';
}

alert(fho());