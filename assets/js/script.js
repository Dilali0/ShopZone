document.addEventListener("DOMContentLoaded", () => {
  fetchDataAndRender();
  updateNombreCart();
});

function fetchDataAndRender() {
  fetch('./Data.json')
    .then((response) => response.json())
    .then((data) => {
      displayProducts(data.products);
    })
    .catch((error) => console.error("Erreur de chargement du fichier JSON :", error));
}


function displayProducts(products) {
  const slider = document.getElementById("product-carousel-content");
  let carouselItem;
  let row;

  products.map((product, index) => {
    if (index % 4 === 0) {
      carouselItem = document.createElement("div");
      carouselItem.className = "carousel-item" + (index === 0 ? " active" : "");
      row = document.createElement("div");
      row.className = "row justify-content-center";
      carouselItem.appendChild(row);
      slider.appendChild(carouselItem);
    }

    const productCard = document.createElement("div");
    productCard.className = "col-md-3";
    productCard.innerHTML = `
                   <div class="card product-card">
                     <div class="card-img-top-container">
                       <img src="${product.image}" class="card-img-top" alt="${product.name}" width="100%" />
                    </div>
                   <div class="card-body text-center">
                   <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <h6 class="card-price">${product.price} Mad</h6>
                </div>
                <div class="card-icons d-flex justify-content-center">
                    <button onclick="addItemToCart(${product.id}, '${product.name}', '${product.price}', '${product.image}')" class="btn cart-icon"><i class="fas fa-shopping-cart"></i></button>
                    <button onclick="addItemToFavorites(${product.id}, '${product.name}', '${product.price}', '${product.image}')" class="btn ms-2 heart-icon"><i class="fas fa-heart"></i></button>
                </div>
            </div>

    `;
    row.appendChild(productCard);
  });
}



//- Panier script --------------------------- 

function addItemToCart(id,name,price,image) {

  let cart = JSON.parse(localStorage.getItem("cart")) || [] ;
  const product  = {id,name,price,image,quantity : 1} ;
 
  
  const existingProduct = cart.find(item => item.id === id);
  
  if (existingProduct) {

    existingProduct.quantity += 1;
  } else {

    cart.push(product);
    
  }
   
  localStorage.setItem("cart", JSON.stringify(cart));
  updateNombreCart();
  
}
function updateNombreCart(){
   const product_nombre = document.getElementById("itemsCount");
   product_nombre.textContent = JSON.parse(localStorage.getItem("cart")).length

}
function addItemToFavorites(productId, productName, productPrice, productImage) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (!favorites.some(item => item.id === productId)) {
    favorites.push({
      id: productId,
      name: productName,
      price: productPrice,
      image: productImage
    });
    localStorage.setItem("favorites", JSON.stringify(favorites));
  } 
}
