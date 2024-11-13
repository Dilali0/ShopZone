let produits;
async function getData(){
    try{
    const response = await fetch("../../Data.json");
    const data = await response.json();
    // produits = data.products
    // transfer(produits)
    dataCard(data.products);
    return data;
    } catch(error){
        console.error("error ther is no data to find", error);
        return [];
    }
}
getData()
var sortData = document.getElementById("sorting");
sortData.addEventListener("change", async () => {
    await dataValue(sortData.value)
})
 async  function dataValue(choice){
    let res =await getData();
    let data = res.products;
    if (choice === "prix"){
     data.sort((a, b)=>a.price - b.price);
     await dataCard(data);
    }else if (choice === "pop"){
        data.sort((a, b)=>a.id - b.id);
        await dataCard(data);

  }
}


  

  async function dataCard(products){
  let row1= document.getElementById("row1")
  row1.innerHTML =''
  products.map((ele)=>{
    row1.innerHTML +=`            <div class="col-md-4 col-lg-3 mb-4" id="test">
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
                style ="height:16rem";
                alt="Product 1"
              />_
              <div class="card-body text-center">
                <h5 class="card-title">${ele.name}</h5>
                <p class="card-text" id="card-text1" >${ele.price}$</p>
                <a href="./details.html" class="btn btn-primary" id="details" onclick="${transfer(ele.id)}" > Details  </a>
              </div>
            </div>
          </div>`
  }
) 

  }
//   let array = []

//   function transfer(id){
//     console.log(id);
    
//     array.push(id)
//     console.log(array);
    
//     localStorage.setItem("products",JSON.stringify(array))
//     //   const array = produits.filter(produit => {
//     //   if(produit.id === id)
//     //   localStorage.setItem("products",JSON.stringify(produit))
//     // });
    
//     // console.log(array)
//     // // console.log(localStorage)
//   }
  
// var click = document.getElementById("details").addEventListener

  
