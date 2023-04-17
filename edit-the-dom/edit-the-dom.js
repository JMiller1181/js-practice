// Declaring Variables
const list = document.querySelector("#list");
const appleType = list.children[1];
const arr = ["Protein Bars", "Almonds", "Peanut Butter"];
const items = document.querySelectorAll("li");
console.log(items);
console.log(list);
//Editing DOM
appleType.innerHTML = "Granny Smith Apples";
list.children[3].remove();
const newLI = document.createElement("li");
newLI.innerHTML = "Kombucha";
list.appendChild(newLI);
items.forEach((index) => index.remove());
for (index in arr) {
let listItems = document.createElement("li");
listItems.innerHTML = arr[index];
list.appendChild(listItems);
}
const almond = list.children[1];
almond.classList.add("important");
console.log(almond);