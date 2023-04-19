//make variables for empty ul, input box, and the button to submit, and storage for browser
const toDoList = document.querySelector("#toDoList");
const toDoInput = document.querySelector("#toDoInput");
const addToDoButton = document.querySelector("#addToDo");
let savedList = [];
//Initialize storage
(function () {
  if (localStorage.getItem("list") === null) {
    localStorage.setItem("list", JSON.stringify(savedList));
  } else {
    savedList = JSON.parse(localStorage.getItem("list"));
    console.log(savedList);
    //imports old data
    for (item of savedList) {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      toDoList.appendChild(listItem);
    }
  }
})();
//add the input and clear the field
addToDoButton.addEventListener("click", () => {
  const toDoText = toDoInput.value;
  if (toDoText) {
    const listItem = document.createElement("li");
    listItem.textContent = toDoText;
    toDoList.appendChild(listItem);
    savedList.push(toDoText);
    toDoInput.value = "";
    localStorage.setItem("list", JSON.stringify(savedList));
    console.log(localStorage.getItem("list"));
  }
});
//remove the li that is clicked on
toDoList.addEventListener("click", (e) => {
  const listItem = e.target;
  if (listItem.tagName === "LI") {
    let remove = savedList.indexOf(listItem.textContent);
    savedList.splice(remove,1);
    localStorage.setItem("list", JSON.stringify(savedList));
    toDoList.removeChild(listItem);
  }
});
