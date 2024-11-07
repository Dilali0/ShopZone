document.addEventListener("DOMContentLoaded", () => {
  fetchDataAndRender();
});

function fetchDataAndRender() {
  fetch("assets/data/data.json")
    .then((response) => response.json())
    .then((data) => {
      renderProducts(data.products);
      renderCategories(data.categories);
    })
    .catch((error) => console.error("Erreur lors du chargement des données :", error));
}

function renderProducts(products) {
  const productsContainer = document.querySelector("#popular-products .row");
  productsContainer.innerHTML = "";

  products.forEach((product) => {
    const productCard = `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body text-center">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">$${product.price.toFixed(2)}</p>
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div>
        </div>
      </div>
    `;
    productsContainer.innerHTML += productCard;
  });
}

function renderCategories(categories) {
  const categoriesContainer = document.querySelector("#categories .row");
  categoriesContainer.innerHTML = "";

  categories.forEach((category) => {
    const categoryCard = `
      <div class="col-md-3 mb-4">
        <div class="card text-center">
          <img src="assets/images/${category.name.toLowerCase()}.jpg" class="card-img-top" alt="${category.name}">
          <div class="card-body">
            <h5 class="card-title">${category.name}</h5>
            <p class="card-text">${category.description}</p>
            <a href="#" class="btn btn-outline-dark">Shop Now</a>
          </div>
        </div>
      </div>
    `;
    categoriesContainer.innerHTML += categoryCard;
  });
}
