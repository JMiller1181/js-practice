initializeCart = function () {
    if ( localStorage.getItem('cart') === null) {
        localStorage.setItem('cart', []);
    }
        return localStorage.getItem('cart');
};

cart = []

newItem = {
    name: "",
    price: 0
}

localStorage = {
    cart: []
}

addItem = function (newItem) {
    initializeCart();
    let itemName = newItem.keys();
    let itemPrice = newItem.values();
    cart.push(newItem);
    localStorage.setItem('cart', cart);
};
removeItem = function (remItem) {

};
displayCart = function () {
    console.log(localStorage.cart)
};
