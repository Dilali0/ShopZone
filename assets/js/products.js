// function sorting 
var allsort = document.getElementById("sorting");
var sortbyprice =document.getElementById("price") ;
var sortbypopulation =document.getElementById("pop") ;



fetch("../../Data.json")
.then((response) => response.json())
.then((data)=> cardstatus(data.products) );

 function cardstatus(products){ 

    products.sort((a, b) => a.price-b.price);

    const row1 = document.getElementById("row1");
    products.map(ele=>{
        row1.innerHTML += `            <div class="col-md-4 col-lg-3 mb-4" id="test">
            <div class="card product-card">
                <div class="d-flex">
                    <a href="./favorites.html" class="icon mx-3"
                      ><i class="fas fa-heart"></i 
                    ></a>
                    <a href="./panier.html" class="icon"
                      ><i class="fas fa-shopping-cart"></i
                    ></a>
                  </div>
              <img
                src="${ele.image}"
                class="card-img-top"
                style ="height: 16rem";
                alt="Product 1"
              />
              <div class="card-body text-center">
                <h5 class="card-title">${ele.name}</h5>
                <p class="card-text" id="card-text1" >${ele.price}$</p>
                <a href="#" class="btn btn-primary"> Details</a>
              </div>
            </div>
          </div>`
    })
}

// function sorted(){
// const hey = document.getElementById("card-text1").value;
// const sort1 = document.getElementById("test");
// sort1.sort((a, b) => a.ele.price - b.ele.price);
 

