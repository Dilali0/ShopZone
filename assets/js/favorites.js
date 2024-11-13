document.addEventListener("DOMContentLoaded", () => {
    getData();
    const ajoutfavorie = document.querySelectorAll("button[onclick^='add']");
    const supprfavorie = document.querySelectorAll("button[onclick^='delet']");
    const favoritespage = document.querySelector("#favorites-page");
    const choixpage = document.querySelector("#choix-page");
    const produitExists = favorites.some(item => item.id === produit.id);
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

async function getData() {
    const response = await fetch("../../Data.json");
    const data = await response.json();
    displayproducts(data.products);
    return data.products;
}

function displayproducts(products) {
    choixpage.innerHTML = "";

    products.forEach((product) => {
        const productCard = `
        <div class="col-md-6 col-lg-3 mb-4">
            <div class="card choix-card p-4">
                <img src="${product.image}" alt="${product.name}">
                <h5>${product.name}</h5>
                <p>$${product.price.toFixed(2)}</p>
                <button class="btn btn-outline-danger btn-sm" onclick="supprimerdefavories(${product.id})"><i class="fas fa-heart-broken"></i> Retirer</button>
                <button class="btn btn-outline btn-sm" onclick="addToCart(${product.id})"><i class="fas fa-shopping-cart"></i> Ajouter Au panier</button>
            </div>
        </div>
    `;
    choixpage.innerHTML += productCard;
    });
}

function ajouteraufavories(produit) {
    if (!produitExists) {
        favorites.push(produit); 
        localStorage.setItem('favorites', JSON.stringify(favorites));  
        alert("Produit ajouté aux favoris !");
        affichierFavorites();
    }
    else {
        alert("Produit déjà dans les favoris.");
    }
}

function affichierFavorites() {
    favoritespage.innerHTML = "";  
    if (favorites.length === 0) {
        favoritespage.innerHTML = "<p>Aucun produit dans les favoris.</p>";
    }
    else {
        favorites.forEach(produit => {
            const favoritCard = `
                <div class="card favorite-card">
                    <img src="${product.image}" alt="${product.name}">
                    <h5>${product.name}</h5>
                    <p>$${product.price.toFixed(2)}</p>
                    <button class="btn btn-outline-danger btn-sm" onclick="supprimerdefavories(${product.id})"><i class="fas fa-heart-broken"></i> Retirer</button>
                    <button class="btn btn-outline btn-sm" onclick="addToCart(${product.id})"><i class="fas fa-shopping-cart"></i> Ajouter Au panier</button>
                </div>
            `;
            favoritespage.innerHTML += favoritCard;
        });
    }
}

function supprimerdefavories(produitId) {
    favorites = favorites.filter(produit => produit.id !== produittId); 
    localStorage.setItem('favorites', JSON.stringify(favorites)); 
    affichierFavorites(); 
    alert("Produit supprimé des favoris.");
}

document.addEventListener("DOMContentLoaded", affichierFavorites);
});