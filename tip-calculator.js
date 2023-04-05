let bill = 350;
function caluculateTip(amount) {
  amount *= 0.2;
  return amount;
}
console.log("The tip for the meal is: $" + caluculateTip(bill));
function getBillTotal(price) {
  let tip = caluculateTip(price).toFixed(2);
  let trueTip = parseFloat(tip);
  let total = (trueTip + price).toFixed(2);
  let values = [price, tip, total];
  return values;
}
console.log(
  "The price of the meal is: $" +
    getBillTotal(203)[0] +
    ". The claculated tip is: $" +
    getBillTotal(203)[1] +
    ". The total price of the meal is: $" +
    getBillTotal(203)[2] +
    "."
);
