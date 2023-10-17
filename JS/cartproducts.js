let userinfo = document.querySelector("#user-info")
let user = document.querySelector("#user")

if(localStorage.getItem("username")){
    userinfo.style.display="flex"
    user.innerHTML=localStorage.getItem("username")
}
////////////////////draw-products-cart///////////////////
let productsInCart = localStorage.getItem("Productscart")
let allproducts = document.querySelector("#cart-products")
let total = document.querySelector(".total")
let allTotalPrice = 0

if(productsInCart){
    let item = JSON.parse(productsInCart)
    drawCartProducts(item)
}
function drawCartProducts(products){
    let y = products.map((item) => {
      allTotalPrice += +(item.price)
      return`
      <div class="col-lg-4 col-md-6 col-sm-12 mb-5 " id="item">
        <div class="item" >
          <img src="${item.imageUrl}">
          <p>Product : ${item.title} <br>Price : ${item.price} EGP<br>Category : ${item.category}</p>
          <span id="cartcounter">1</span>
          <button class="btn btn-success btn-style" id="plusbtn">+</button>
          <button class="btn btn-danger btn-style" id="minsbtn">-</button>
          <button class="btn btn-outline-danger" id="removecart" onClick="remove(${item.id})">Remove</button>
        </div>
      </div>
        `
    })
    allproducts.innerHTML=y;   
    total.innerHTML = allTotalPrice
}
////////////////////draw-fav-products///////////////////
let productsInFav = localStorage.getItem("Favproducts")
let favproducts = document.querySelector("#fav-products")

if(productsInFav){
  let product = JSON.parse(productsInFav)
  drawFavProducts(product)
}

function drawFavProducts(product){
    let y = product.map((item) => {
      return`
      <div  id="item" class="swiper-slide">
        <div class="card" style="width: 250px;" >
          <img src="${item.imageUrl}" style="width:200px ; height:250px ;">
          <p>Product : ${item.title} <br>Price : ${item.price}<br>Category : ${item.category}</p>
          <a id="favCheck" class="text-danger"><i class="fa-solid fa-heart fav iii"></i></a>
        </div>
      </div>
       `
    })
    favproducts .innerHTML=y;  
}

