function outer() {
    let a = "a";
    let b = {};
    console.log(a);
    console.log(b);
  function inner(a, b) {
  a = "g";
  b = {h: "h"};
  b.new = "new property";
  console.log(a);
  console.log(b);
}
  inner(a, b);
  console.log(a);
  console.log(b);
}
outer();
