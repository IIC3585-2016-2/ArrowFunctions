function Prefixer(prefix) {
    this.prefix = prefix;
}
Prefixer.prototype.prefixArray = function (arr) {
    return arr.map( function (x) { return this.prefix + x;});
};

var pre = new Prefixer('Hi ');
var prefixed = pre.prefixArray(['Joe', 'Alex']);
prefixed.forEach(alert);