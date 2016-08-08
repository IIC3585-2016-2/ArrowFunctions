//Arguments object
//using arguments object; w/arrow function

var arr = () => arguments;

arr(); // 42

function foo() {
  var f = () => arguments[0]; // Reference to arguments object
  return f(2);
}

foo(1); // 1

//-----------------------------------------------------------------------

//ES5 version

var arr = function arr() {
  return _arguments;
};

arr(); // 42

function foo() {
  var _arguments2 = arguments;

  var f = function f() {
    return _arguments2[0]; 
  }; 
  return f(2);
}

foo(1); // 1