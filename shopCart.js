let cart = [];
const maximumCartCapacity = 10;
let totalPrice = 0;
let freeShipping = false;

const addItemButton = document.querySelector(".addItem");
addItemButton.addEventListener("click", addItem);
let totalPriceList;

function addItem() {
  const itemName = document.getElementById("itemName").value;
  const itemPrice = Number(document.getElementById("itemPrice").value);

  let totalItem = document.querySelector("#total-items");
  totalPriceList = document.querySelector("#total-price");
  const freeShip = document.querySelector("#free-shipping");

  if (cart.length < maximumCartCapacity) {
    totalItem.textContent = cart.push(itemName);

    totalPrice += itemPrice;
    totalPriceList.textContent = totalPrice;

    freeShipping = totalPrice >= 5000;
    freeShip.textContent = freeShipping;
  } else if (!itemName || isNaN(itemPrice) || itemPrice <= 0) {
    warningDescription("Please enter an item name");
  } else if (cart.length >= maximumCartCapacity) {
    warningDescription(
      `The cart is full! You have ${cart.length} Items already`
    );
  }
}

const removeItem = document.querySelector(".removeItem");
removeItem.addEventListener("click", function () {
  cart.pop();
  //   console.log(cart);
  document.querySelector("#total-items").textContent = cart.length;
  const itemPrice = Number(document.getElementById("itemPrice").value);
  totalPrice -= itemPrice;
  document.querySelector("#total-price").textContent = totalPrice;
});

function warningDescription(text) {
  const description = document.querySelector("#description");
  description.textContent = text;
}

const checkOut = document.querySelector(".checkout");
checkOut.addEventListener("click", function () {
  const showItem = document.querySelector("#checkout");
  showItem.textContent = cart;
});