document.addEventListener("DOMContentLoaded", () => {
  displayCart();
  Commande();
});


function displayCart() {
  const cartContainer = document.getElementById("listCart");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Votre panier est vide</p>";
  } else {
  
    cart.map(product => {
      const cartItem = document.createElement("div");
      cartItem.className = "cart-item d-flex align-items-center mb-4";
      cartItem.innerHTML = `
        <img src="${product.image}" alt="Product" class="cart-item-image">
        <div class="cart-item-info flex-grow-1 ms-3">
            <h5 class="cart-item-title">${product.name}</h5>
            <p class="cart-item-price">${product.price} Dh</p>
            <div class="cart-item-quantity">
                <button class="btn btn-light btn-sm" onclick="moinQuantity(${product.id})">-</button>
                <span class="quantity" id="quantity">${product.quantity}</span>
                <button class="btn btn-light btn-sm" onclick="plusQuantity(${product.id})">+</button>
            </div>
        </div>
        <button class="btn btn-danger btn-sm ms-3" onclick="removeProduct(${product.id})"><i class="fas fa-trash"></i> Retirer</button>
      `;
      cartContainer.appendChild(cartItem);
    });
  }
}

function plusQuantity(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = cart.find(item => item.id === productId);
  if (product) {
    product.quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();  
    Commande();
  }
}

function  moinQuantity(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = cart.find(item => item.id === productId);
  if (product && product.quantity > 1) {
    product.quantity--;
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();  
    Commande();
  }
}
//Supprimer product
function removeProduct(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter(item => item.id !== productId);  
  localStorage.setItem("cart", JSON.stringify(cart));  
  displayCart();  
  Commande();
}

//----Resummer de la commande ----------
function Commande(){
  let items = document.getElementById("items") ;
let sousTotal = document.getElementById("sousTotal");
let Total = document.getElementById("total") ;
let livraison = document.getElementById("livraison").textContent ;
let taxes = document.getElementById("taxes").textContent ;
let somme = 0 ;
items.textContent = JSON.parse(localStorage.getItem("cart")).length || 0 ;

  for(let P in JSON.parse(localStorage.getItem("cart"))){
    let Q = (JSON.parse(localStorage.getItem("cart"))[P].quantity) ;
    let S = parseFloat((JSON.parse(localStorage.getItem("cart"))[P].price)).toFixed(2);
    somme+= (S * Q)  ;
  }
  sousTotal.textContent = somme + " MAD" ;
  if(items.textContent == 0){
    Total.textContent = 0 + " MAD"
  }else{
    Total.textContent = (somme + parseFloat(livraison) + parseFloat(taxes) ).toFixed(2)  + " MAD"   ; 
  }
  
}



  



