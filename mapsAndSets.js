
let fruitInventory = new Map([["apple", 10], ["banana", 20], ["orange", 30]]);
let bananaInventory = fruitInventory.get("banana");
fruitInventory.set("apple", 15);
//
let uniqueColors = new Set(["red", "blue", "green"]);
uniqueColors.add("yellow");
let hasBlue = uniqueColors.has("blue");
console.log(fruitInventory);
console.log(bananaInventory);
console.log(uniqueColors);
console.log(hasBlue);
