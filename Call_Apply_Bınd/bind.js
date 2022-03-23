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

var Button = function (content) {
  this.content = content;
};
Button.prototype.click = function () {
  console.log(this.content + " clicked");
};

var myButton = new Button("OK");
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
