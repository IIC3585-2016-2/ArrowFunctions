test = "attached to the module";

var foo = {
  test: "attached to an object"
};

foo.bar = () => {
 alert(this.test); 
};

foo.bar();  //Imprime "atached to the module"