test = "attached to the module";

var foo = {
  test: "attached to an object"
};

foo.bar = () => {
 alert(this.test); 
};

foo.bar();  //Imprime "atached to the module"


//----------------------------------------------

test = "attached to the module";

var foo = {
  test: "attached to an object"
};

foo.bar = function() {                      //Usamos notación function() en vez de arrow functions
 alert(this.test); 
};

foo.bar();  //Imprime "atached to the object"
