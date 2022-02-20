/*
Rules to live by:

* Count curly brack to find the scope.
* Try to never use real globals, but module globals.

*/
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i);

const user = "Jack"; // <-- And here?
function processOrders() {
  const apiKey = "12345"; // <-- And here?
  function getOrders() {
    const orders = [1, 2, 3]; // <-- How about here?
    for (const order of orders) {
      console.log(order); // <-- What can be seen here?
    }
  }
}
