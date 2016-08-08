//Use of plain objects (empty objects)

var puppies = ["Petunia", "Azucena"];

//Create a new empty object for each puppy
var chewToys = puppies.map(puppy => {});   // BUG!

var chewToys = puppies.map(puppy => ({})); // OK!

//-----------------------------------------------------------------------

//ES5 version
var puppies = ["Petunia", "Azucena"];
// create a new empty object for each puppy
var chewToys = puppies.map(function (puppy) {}); // BUG!
var chewToys = puppies.map(function (puppy) {
  return {};
}); // ok

//-----------------------------------------------------------------------
//The empty onject in the first example is interpreted as an empty block
//of a function, not an object.