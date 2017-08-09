//Cart functionality:
const cart = document.getElementById("cart")
const displayCartButton = document.getElementById("cart-button")
const listOfItemsInCart = document.getElementById('list-items-in-cart');
const cartCostTotal = document.getElementById('total-cost')
const emptyCartButton = document.getElementById('clear');
const closeCartButton = document.getElementById('close');

let totalCost = 0

displayCartButton.onclick = function(){
  cart.style.display = "block";
}

cartCostTotal.innerHTML = totalCost.toFixed(2);

emptyCartButton.onclick = function () {
  countOfItemsInCart.innerHTML = 0
  listOfItemsInCart.innerHTML = "";
  totalCost = 0;
  updateTotalCost();
}

closeCartButton.onclick = function () {
  cart.style.display = "none";
}

//Add to Cart buttons functionality:
const addOnions = document.getElementById("onion-button");
const addTomatoes = document.getElementById("tomato-button");
const addCarrots = document.getElementById("carrot-button");
const addColdCuts = document.getElementById("cold-cut-button");
const addOrangeJuice = document.getElementById("orange-juice-button");
const addIceCream = document.getElementById("ice-cream-button");
const addPizza = document.getElementById("pizza-button");
let countOfItemsInCart = document.getElementById("cart-item-count")

countOfItemsInCart.innerHTML = 0;

function updateCartCount () {
  countOfItemsInCart.innerHTML ++
}

addOnions.onclick = function() {
  updateCartCount()
  listOfItemsInCart.innerHTML += "<li>Onions $1.11</li>"
  totalCost+= 1.11;
  updateTotalCost();
}

addTomatoes.onclick = function() {
  updateCartCount()
  listOfItemsInCart.innerHTML += "<li>Tomatoes $1.56</li>"
  totalCost += 1.56;
  updateTotalCost();
}

addCarrots.onclick = function() {
  updateCartCount()
  listOfItemsInCart.innerHTML += "<li>Carrots $2.88</li>"
  totalCost += 2.88
  updateTotalCost();
}

addColdCuts.onclick = function() {
  updateCartCount()
  listOfItemsInCart.innerHTML += "<li>Cold Cuts $1.47</li>"
  totalCost += 1.47
  updateTotalCost();
}

addOrangeJuice.onclick = function() {
  updateCartCount()
  listOfItemsInCart.innerHTML += "<li>Orange Juice $2.52</li>"
  totalCost += 2.52
  updateTotalCost();
}

addIceCream.onclick = function() {
  updateCartCount()
  listOfItemsInCart.innerHTML += "<li>Ice Cream $14.08</li>"
  totalCost += 14.08
  updateTotalCost();
}

addPizza.onclick = function() {
  updateCartCount()
  listOfItemsInCart.innerHTML += "<li>Pizza $16.61</li>"
  totalCost += 16.61
  updateTotalCost();
}

//Used in both cart and add to cart buttons:
function updateTotalCost () {
  document.getElementById('total-cost').innerHTML = totalCost.toFixed(2);
}

//Section functionality
const produceLabel = document.getElementById("produce-sidebar-label");
const deliLabel = document.getElementById("deli-sidebar-label");
const frozenLabel = document.getElementById("frozen-sidebar-label");
const produceSection = document.getElementById("produce-section");
const deliSection = document.getElementById("deli-section");
const frozenSection = document.getElementById("frozen-section");

produceLabel.onclick = function() {
  produceSection.style.background = '#eee';
  deliSection.style.background = 'transparent';
  frozenSection.style.background = 'transparent';
}

deliLabel.onclick = function() {
  deliSection.style.background = '#eee'
  produceSection.style.background = 'transparent';
  frozenSection.style.background = 'transparent';
}

frozenLabel.onclick = function() {
  frozenSection.style.background = '#eee';
  produceSection.style.background = 'transparent';
  deliSection.style.background = 'transparent'
}
