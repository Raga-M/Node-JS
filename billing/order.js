const eventEmitter = require("node:events");
const discount = require("./discount");
const itemDiscount = new discount();
class Order extends eventEmitter {
  constructor() {
    super();
    this.count = 0;
    this.cost = 0;
  }
  ordered(size = "", color = "",item="", cost =0) {
    this.count++;
    this.cost += cost;
    this.emit("order", size, color,item);
  }
  display() {
    console.log(
      `number of order is ${this.count} and total cost ₹${this.cost}`
    );
    itemDiscount.offer(this.cost)
  }
}

module.exports = Order;
