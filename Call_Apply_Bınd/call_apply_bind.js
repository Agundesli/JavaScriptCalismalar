const user1 = {
  id: 1,
  username: "Abdullah",
  DateOfBirth: "1994-12-05",
};
const user2 = {
  id: 1,
  username: "Yusuf",
  DateOfBirth: "1998-6-24",
};
const yearToday = new Date().getFullYear();
const user1Year = new Date(user1.DateOfBirth).getFullYear();
const user2Year = new Date(user2.DateOfBirth).getFullYear();
const calculateAge = (yToday, yOfBirth) => {
  return yToday - yOfBirth;
};

console.log("Call");
console.log(calculateAge.call(user1, yearToday, user1Year));
console.log(calculateAge.call(user2, yearToday, user2Year));
console.log("Apply");
console.log(calculateAge.apply(user1, [yearToday, user1Year]));
console.log(calculateAge.apply(user2, [yearToday, user2Year]));
console.log("Bind");
const boundCalcAgeUser1 = calculateAge.bind(user1);
console.log(boundCalcAgeUser1(yearToday, user1Year));
const boundCalcAgeUser2 = calculateAge.bind(user2);
console.log(boundCalcAgeUser2(yearToday, user2Year));
//Bınd Implementation example
const game1 = {
  name: "cyberpunk",
  studio: "cd project red",
  getInfo: function () {
    return `Game ${this.name} by ${this.studio}`;
  },
};
console.log(game1.getInfo());
const game2 = {
  name: "GTA 5",
  studio: "Rockstar",
};
const game2Info = game1.getInfo.bind(game2);
console.log(game2Info());
