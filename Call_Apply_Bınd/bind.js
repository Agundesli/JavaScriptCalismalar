// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const member = {
//   firstName: "Hege",
//   lastName: "Nilsen,",
// };

// let fullName1 = person.fullName.bind(member);
// console.log(fullName1());

var Btn = function (content) {
  this.content = content;
};
Btn.prototype.click = function () {
  console.log(this.content + " clicked");
};

var myButton = new Btn("OK");
myButton.click();

var looseClick = myButton.click;
looseClick();

var boundClick = myButton.click.bind(myButton);
boundClick();

// Example showing binding some parameters
var sum = function (a, b) {
  return a + b;
};

var add5 = sum.bind(null, 5);
console.log(add5(10));
console.log("----------------------------");
//Bind an object to a function
let a1 = {
  x: 5,
  y: 10,
};
let a2 = {
  x: 15,
  y: 100,
};
function printCoordinates() {
  console.log(this.x + " " + this.y);
}
let a1_fonk = printCoordinates.bind(a1);
let a2_fonk = printCoordinates.bind(a2);
a1_fonk();
a2_fonk();
