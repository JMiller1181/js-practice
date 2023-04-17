// Declaring Variables
const list = document.querySelector("#list");
const appleType = list.children[1];
const arr = ["Protein Bars", "Almonds", "Peanut Butter"];
console.log(list);
//Editing DOM
// Changing inner HTML to Granny Smith Apples
appleType.innerHTML = "Granny Smith Apples";
// Removing Oat Milk
list.children[3].remove();
// Adding Kombucha
const newLI = document.createElement("li");
newLI.innerHTML = "Kombucha";
list.appendChild(newLI);
// Removing items from list
document.querySelectorAll("li").forEach((item) => item.remove());
console.log(document.querySelectorAll("li"));
// Adding array items to list
arr.forEach((item) => {
  let listItems = document.createElement("li");
  listItems.innerHTML = item;
  list.appendChild(listItems);
});
// Making Almonds important
const almond = list.children[1];
almond.classList.add("important");
console.log(almond);
