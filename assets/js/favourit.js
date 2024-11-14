document.addEventListener("DOMContentLoaded", () => {
  displayFavorites();
});

function displayFavorites() {
  const favoritesContainer = document.querySelector(".favorites-page .row");
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  favoritesContainer.innerHTML = "";

  if (favorites.length === 0) {
    favoritesContainer.innerHTML = "<p>Vous n'avez aucun favori</p>";
  } else {
    favorites.forEach(product => {
      const favoriteCard = document.createElement("div");
      favoriteCard.className = "col-md-4 col-lg-3 mb-4";
      favoriteCard.innerHTML = `
        <div class="card favorite-card">
          <div class="favorite-image-container">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
          </div>
          <div class="card-body text-center">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-price">${product.price} Dh</p>
            <button class="btn btn-remove" onclick="removeFavorite(${product.id})">
              <i class="fas fa-heart-broken"></i> Retirer
            </button>
          </div>
        </div>
      `;
      favoritesContainer.appendChild(favoriteCard);
    });
  }
}

function removeFavorite(productId) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites = favorites.filter(item => item.id !== productId);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  displayFavorites(); 
}
