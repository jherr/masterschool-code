/*
Rules to live by:

* Avoid shadowing.
* Name variables with meaningful names.
* Declare variables as close as possible to where you use them.
* Keep your scopes to 3-15 lines.
*/
let currentUser = "Jack";
for (const friend of ["Jill", "Sally"]) {
  console.log(friend); // <-- And this?
}
console.log(currentUser); // <-- What's this?

/*
function getAllOrders() {
  let sum = 0;
  let orders = [];
  let userID;
  let order;
  const summary = {};
  
  userID = getUserID();
  orders = getOrders();
  summary.userID = userID;
  summary.orders = orders;
  summary.total = sum;
  for(order of orders) {
    sum += order.price;
  }
  return summary;
}
*/

function getAllOrders() {
  const userID = getUserID();
  const orders = getOrders();
  let total = 0;
  for (const order of orders) {
    total += order.price;
  }
  return {
    userID,
    orders,
    total,
  };
}
