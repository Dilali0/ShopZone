document.addEventListener("DOMContentLoaded", () => { 
    getData();
    affichierFavorites();
});

    const favoritespage = document.querySelector("#favorites-page");
    const choixpage = document.querySelector("#choix-page");
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];


async function getData() {
    const response = await fetch("../../Data.json");
    const data = await response.json();
    displayproducts(data.products);
    return data.products;
}


function displayproducts(products) {
    choixpage.innerHTML = "";

    products.forEach((produit) => {
        const newrow = document.createElement('div');
        newrow.innerHTML = `
        <div class="col-md-6 col-lg-3 mb-4">
            <div class="card choix-card p-4">
                <img src="${produit.image}" alt="${produit.name}">
                <h5>${produit.name}</h5>
                <p>$${produit.price.toFixed(2)}</p>
                <button class="btn btn-outline-danger btn-sm" onclick="ajouteraufavories(${produit.id})" >
                    <i class="fas fa-heart"></i>
                    <span> Ajouter Au favorie<span>
                </button>
            </div>
        </div>
    `;
    choixpage.appendChild(newrow);
    });
}

function ajouteraufavories(produitId){
    const produit = { id: produitId };
    const produitExists = favorites.some(item => item.id === produitId);
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
                    <img src="${produit.image}" alt="${produit.name}">
                    <h5>${produit.name}</h5>
                    <p>$${produit.price.toFixed(2)}</p>
                    <button class="btn btn-outline-danger btn-sm" onclick="supprimerdefavories(${produit.id})"><i class="fas fa-heart-broken"></i> Retirer</button>
                    <button class="btn btn-outline btn-sm" onclick="addToCart(${produit.id})"><i class="fas fa-shopping-cart"></i> Ajouter Au panier</button>
                </div>
            `;
            favoritespage.innerHTML += favoritCard;
        });
    }
}

function supprimerdefavories(produitId) {
    favorites = favorites.filter(produit => produit.id !== produitId); 
    localStorage.setItem('favorites', JSON.stringify(favorites)); 
    affichierFavorites(); 
    alert("Produit supprimé des favoris.");
}