
fetch('../../Data.json')
.then((response) => response.json())
.then((data) => displaycategories(data.products));

function displaycategories(prods){
const row = document.getElementById("row");
    prods.forEach(cat => {
row.innerHTML += `    
    <div class="col-md-4 mb-4">
        <div class="card category-card">
            <img  src="${cat.image}" class="card-img-top" alt="Électronique">
                <div class="card-body text-center">
                    <h5 class="card-title">${cat.name}</h5>
                    <p>${cat.price}</p>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary"></a>
                </div>
        </div>
     </div>
    `
});
}


