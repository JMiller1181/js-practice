// make the cart or call cart
function initializeCart() {
  let emptyCart = [];
  let cart = localStorage.getItem("cart");
  if (cart === null) {
    localStorage.setItem("cart", JSON.stringify(emptyCart));
    cart = localStorage.getItem("cart");
  }
  return JSON.parse(cart);
}
// add item function
function addItem(item) {
  let cart = initializeCart();
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
}
// remove an item, no button to call it though
function removeItem() {
  let cart = initializeCart();
  cart = cart.pop();
  localStorage.setItem("cart", JSON.stringify(cart));
}
// dispplay the cat contents
function displayCart() {
  let cart = initializeCart();
  console.log(cart);
}
// add item button
document.querySelector("#addButton").addEventListener("click", () => {
  const item = {
    name: document.querySelector("#itemName").value,
    price: document.querySelector("#itemPrice").value,
  };
  addItem(item);
});
// display cart button
document.querySelector("#displayCartButton").addEventListener("click", () => {
  displayCart();
});
