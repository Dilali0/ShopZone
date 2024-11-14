
// function sorting 
// var sortbyprice =document.getElementById("price") ;
// var sortbypopulation =document.getElementById("pop") ;

async function getData(){
  try {
    const response = await fetch("../../Data.json");
    const data = await response.json();
    cardstatus(data.products) ;
    return data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
}
getData()

var allsort = document.getElementById("sorting");
  
allsort.addEventListener('change' , async () => {
  await filterData(allsort.value)
})

async function  filterData(choice) {
  let res = await getData();
  let data = res.products ;
  if(choice === 'prix'){
    data.sort((a, b) => a.price - b.price) 
    await cardstatus(data)
  }else if (choice === "pop"){
    data.sort((a, b)=>a.id - b.id);
    await cardstatus(data);

}
}




 async function cardstatus(products){ 
    const row1 = document.getElementById("row1");
    row1.innerHTML = ''
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
 
