function sumOrders(orders) {
  let total = 0;
  for (const order of orders) {
    total += order.price;
  }
  return total;
}

function getAllOrders() {
  const userID = getUserID();
  const orders = getOrders();

  sumOrders(orders);

  return {
    userID,
    orders,
    total,
  };
}

function getName() {
  return function () {
    return "Jack";
  };
}

const jack = getName();
jack();

function createGetName(name) {
  return function () {
    return name;
  };
}

const sally = createGetName("Sally");
sally();
const fred = createGetName("Fred");
fred();
sally();
sally();

function counter() {
  let count = 0;
  return function () {
    return count++; // 0, 1, 2, 3...
  };
}

const c1 = counter();
const c2 = counter();

c1();

c2();
c2();
c2();
c2();
c2();

c1();
c1();

class Counter {
  constructor() {
    this.count = 0;
  }
  getNextValue() {
    return this.count++;
  }
}
