// JavaScript source code for order page
// Developed by: Jia Zhu, Tingting Song, Xiaotong Zhang
// Script Date: September 12, 2021

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

/* clear all cart items */
function ready() {
  let removeCartItemBtn = document.getElementsByClassName("btn-remove");
  for (let i = 0; i < removeCartItemBtn.length; i++) {
    let btn = removeCartItemBtn[i];
    btn.addEventListener("click", removeCartItem);
  }

  let itemQuantity = document.getElementsByClassName("cart-item-quantity");
  for (let i = 0; i < itemQuantity.length; i++) {
    let input = itemQuantity[i];
    input.addEventListener("change", quantityChanged);
  }

  let addToCartBtn = document.getElementsByClassName("order-button");
  for (let i = 0; i < addToCartBtn.length; i++) {
    let btn = addToCartBtn[i];
    btn.addEventListener("click", addToCartEvent);
  }

  document.getElementsByClassName("btn-placeOrder")[0].addEventListener("click", placeOrderClicked);
}

function removeCartItem(event) {
  let btnClicked = event.target;
  btnClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(event) {
  let itemQuantity = event.target;
  updateCartTotal();
}

function addToCartEvent(event) {
  var button = event.target;
  var cartItem = button.parentElement.parentElement;
  var title = cartItem.getElementsByClassName("menu-title")[0].innerText;
  var price = cartItem.getElementsByClassName("menu-price")[0].innerText;
  var imageSrc = cartItem.getElementsByClassName("menu-image")[0].src;
  addItemToCart(title, price, imageSrc);
  updateCartTotal();
}

function addItemToCart(title,price,imageSrc) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  var cartItemName = cartItems.getElementsByClassName("cart-item-title");
  for (let i = 0; i < cartItemName.length; i++) {
    if (cartItemName[i].innerText == title) {
      alert("This item is already added to the cart");
      return;
    }
  }
  var cartRowDetails = `
        <div class="cart-item  cart-column">
            <img class="cart-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-title">${title}</span>
        </div>
        <span class="cart-price  cart-column">${price}</span>
        <div class="cart-quantity">
            <input class="cart-item-quantity" type="number" min="1" value="1" >
            <button class="btn btn-remove" type="button">REMOVE</button>
        </div>`;
  cartRow.innerHTML = cartRowDetails;
  cartItems.append(cartRow);
  cartRow
    .getElementsByClassName("btn-remove")[0]
    .addEventListener("click", removeCartItem);
  cartRow
    .getElementsByClassName("cart-item-quantity")[0]
    .addEventListener("change", quantityChanged);
}

function updateCartTotal() {
  var cartItemLists = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemLists.getElementsByClassName("cart-row");
  var subtotal= 0;
  var tax=0;
  var total=0;
  const TAX_RATE=0.15;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRowItem = cartRows[i];
    var priceItem = cartRowItem.getElementsByClassName("cart-price")[0];
    var quantityItem = cartRowItem.getElementsByClassName("cart-item-quantity")[0];
    var price = parseFloat(priceItem.innerText.replace("$", ""));
    var quantity = quantityItem.value;
    subtotal = subtotal + price * quantity;
  }
  subtotal = Math.round(subtotal * 100) / 100;
  tax=(subtotal*TAX_RATE).toFixed(2);
  total=subtotal+tax;
  document.getElementsByClassName("cart-subtotal")[0].innerText = "$" + subtotal;
  document.getElementsByClassName("cart-tax")[0].innerText = "$" + tax;
  document.getElementsByClassName("cart-totalPrice")[0].innerText = "$" + total;
}

function placeOrderClicked() {
  var cartItems = document.getElementsByClassName("cart-items")[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCartTotal();
  window.location.href='checkout.html';
}