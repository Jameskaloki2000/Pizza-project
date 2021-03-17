"use strict";
//business logic
document.querySelector(".submit-btn").addEventListener("click", function () {
  let totalprice;
  function Getpizza(name, size, crust, topping, total) {
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.total = total;
  }

  let pizzaNumber = document.querySelector(".pizza-number").value;
  console.log(pizzaNumber);
  let deliveryCost;

  document.getElementsByName("delivery").forEach((radio) => {
    if (radio.checked) {
      deliveryCost = radio.value;
    }
  });

  if ((deliveryCost == 150)) {
    alert("Delivery costs 150 proceed");
    prompt("Please enter a delivery location");
  }
  let pizzaCrust;
  document.getElementsByName("crust").forEach((radio) => {
    if (radio.checked) {
      pizzaCrust = radio.value;
    }
  });
  var toppings = [];
  $.each($("input[name='checkbox']:checked"), function () {
    toppings.push($(this).val());
  });
  console.log(toppings);

  let pizzaSize;
  document.getElementsByName("size").forEach((radio) => {
    if (radio.checked) {
      pizzaSize = radio.value;
    }
  });
  document.querySelector(
    ".totals"
  ).textContent = `you have selected a ${pizzaSize} with ${pizzaCrust} and ${toppings} toppings  `;

  if (pizzaSize == "large") {
    pizzaSize = 1000;
  } else if ((pizzaSize = "medium")) {
    pizzaSize = 500;
    console.log(pizzaSize);
  } else if ((pizzaSize = "small")) {
    pizzaSize = 250;
  }
  if (pizzaCrust == "cripsy") {
    pizzaCrust = 200;
  } else if ((pizzaCrust = "gluten-free")) {
    pizzaCrust = 150;
    console.log(pizzaCrust);
  } else if ((pizzaCrust = "stuffed")) {
    pizzaCrust = 100;
  }

  if (toppings[0] === "bacon") {
    toppings[0] = 200;
  }
  if (toppings[1] === "mushroom") {
    toppings[1] = 150;
  }
  if (toppings[2] === "chicken") {
    toppings[2] = 100;
  }
  console.log(toppings);
  let results = 0;
  for (let i = 0; i < toppings.length; i++) {
    results = results + toppings[i];
  }
  console.log(results);

  totalprice = pizzaSize + pizzaCrust + deliveryCost + results;
  document.querySelector(
    ".totalprice"
  ).textContent = ` TOTAL:${totalprice} ksh`;

  console.log(totalprice);
});
