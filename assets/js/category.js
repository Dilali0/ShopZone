let myProducts = [];
fetch('../../Data.json')
.then((response) => response.json())
.then((data) =>{
    myProducts = data.products;
    displaycategories(myProducts)
})


function displaycategories(prods){
const row = document.getElementById("row");
row.innerHTML = '';
    prods.map(cat => {
row.innerHTML += `    
    <div class="col-md-4 mb-4">
        <div class="card category-card">
            <img  src="${cat.image}" class="card-img-top" alt="Électronique">
                <div class="card-body text-center">
                    <h5 class="card-title">${cat.name}</h5>
                    <p>$${cat.price}</p>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary" >Details</a>
                    <a href="./favorites.html" class="icon mx-3"><i class="fas fa-heart"></i></a>
                    <a href="./panier.html" class="icon"><i class="fas fa-shopping-cart"></i></a>
                </div>
        </div>
     </div>
    `
})
};





let filtrage = document.getElementById("dropdown");
filtrage.addEventListener("change",filterByCategory);


function filterByCategory(e){
    if(e.target.value === "All"){
        displaycategories(myProducts);
    }
     else {
        const myProductsMaison = myProducts.filter((products) => products.category == e.target.value);
        displaycategories(myProductsMaison);
    }
}


function searchByName() {
    const recherche = document.getElementById('search-input').value.toLowerCase();
    const filter = myProducts.filter(prd => prd.name.toLowerCase().includes(recherche));
    if(recherche){
        row.innerHTML = '';
        filter.map(cat => {
        row.innerHTML   += `    
        <div class="col-md-4 mb-4">
            <div class="card category-card">
                <img  src="${cat.image}" class="card-img-top" alt="Électronique">
                    <div class="card-body text-center">
                        <h5 class="card-title">${cat.name}</h5>
                        <p>$${cat.price}</p>
                        <p class="card-text"></p>
                        <a href="#" class="btn btn-primary">Details</a>
                        <a href="./favorites.html" class="icon mx-3"><i class="fas fa-heart"></i></a>
                        <a href="./panier.html" class="icon"><i class="fas fa-shopping-cart"></i></a>
                    </div>
            </div>
        </div>
        `;
    });
    } else {
        displaycategories(myProducts);
    }
}



