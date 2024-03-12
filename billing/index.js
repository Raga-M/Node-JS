const order = require("./order");


const itemOrder = new order();

itemOrder.on("order", (size, color,item) => {
  console.log(`your order ${size} size ${item} with color ${color}`);
});
itemOrder.ordered("M", "White","Pant", 250);
itemOrder.ordered("s", "red","shirt" ,250);
itemOrder.ordered("L", "Green","pant", 300);
itemOrder.ordered("L", "gray","pant", 340);
itemOrder.ordered("L", "shade White","pant", 380);


itemOrder.display();

// const emitter=new eventEmitter()

// emitter.on("order",(count)=>{
// console.log("order recived"+count);
// })
// emitter.emit("order",3)
