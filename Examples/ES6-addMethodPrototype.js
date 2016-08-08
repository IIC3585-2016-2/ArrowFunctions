function Prefixer(prefix) {
    this.prefix = prefix;
}
Prefixer.prototype.prefixArray = function (arr) {
    return arr.map( function (x) { return this.prefix + x;});       
};

var pre = new Prefixer('Hi ');
var prefixed = pre.prefixArray(['Joe', 'Alex']);
prefixed.forEach(alert);                            //Imprime "undefinedJoe, UndefinedAlex"


//------------------------------------------------------------------------------------------

function Prefixer(prefix) {
    this.prefix = prefix;
}
Prefixer.prototype.prefixArray = function (arr) {
    return arr.map( x => { return this.prefix + x;});    //Cambiamos a arrow function
};

var pre = new Prefixer('Hi ');
var prefixed = pre.prefixArray(['Joe', 'Alex']);
prefixed.forEach(alert);                            //Imprime "Hi Joe, Hi Alex"
