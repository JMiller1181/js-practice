function Person(
  firstName,
  lastName,
  favoriteColor,
  favoriteNumber,
  favoriteFoods
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.favoriteFoods = favoriteFoods;
}
Person.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};
Person.prototype.toString = function () {
  return (
    this.fullName() +
    ", Favorite Color: " +
    this.favoriteColor +
    ", Favorite Number: " +
    this.favoriteNumber +
    ", Favorite Foods: " +
    this.favoriteFoods[0] +
    ", " +
    this.favoriteFoods[1]
  );
};
Person.prototype.family = [];
Person.prototype.addToFamily = function (member) {
  this.family.push(member);
};
let George = new Person("George", "Washington", "Red", 1776, [
  "Apple Pie",
  "Cherries",
]);
let Martha = new Person("Martha", "Washington", "White", 2, ["Steak", "Eggs"]);
George.addToFamily(Martha);
console.log(George.fullName());
console.log(George.toString());
console.log(George.family.toString());