let userinfo = document.querySelector("#user-info")
let user = document.querySelector("#user")

if(localStorage.getItem("username")){
    userinfo.style.display="flex"
    user.innerHTML=localStorage.getItem("username")
}
///////////////////////////////////////////////////
/***********************Draw-products***********************/
let allproducts = document.querySelector("#products")
let products = [
    {
        id : 0,
        imageUrl : "images/2.jpg",
        title : "File sheet",
        price : "150.5",
        category : "Storage items",
    },
    {
        id : 1,
        imageUrl : "images/3.jpg",
        title : "Flower notebook",
        price : "60.00",
        category : "Notebooks",
    },
    {
        id : 2,
        imageUrl : "images/4.jpg",
        title : "Handmade bookmarks",
        price : "50.00",
        category : "Bookmarks",
    },
    {
        id : 3,
        imageUrl : "images/5.jpg",
        title : "Flowers stickers",
        price : "20.6",
        category : "Stickers",
    },
    {
        id : 4,
        imageUrl : "images/6.jpg",
        title : "Bear sticky note",
        price : "30.00",
        category : "Papers",
    },
    {
        id : 5,
        imageUrl : "images/8.jpg",
        title : "Gold Desk Accessories",
        price : "200.00",
        category : "Desk Accessories",
    },
    {
        id : 6,
        imageUrl : "images/7.jpg",
        title : "Cat Claw Design knife",
        price : "70.00",
        category : "Cutting supplies",
    },
    {
        id : 7,
        imageUrl : "images/9.jpg",
        title : "Original Highlighters",
        price : "80.55",
        category : "Markers",
    },
]
/////////////////////////search///////////////////////////
let searchbtn = document.querySelector("#searchbtn")
searchbtn.addEventListener("click",()=>{
    let selecttype = document.querySelector("#select").value
    let searchinput = document.querySelector("#searchinput").value.toLowerCase()
    console.log(selecttype," ", searchinput)
    let filterdata = products.filter((item)=>{
        if(selecttype === "Select By Name"){
            return item.title.toLowerCase().includes(searchinput)
        }
        else if(selecttype === "Select By Catogary"){
            return item.category.toLowerCase().includes(searchinput)
        }
    })
    console.log(filterdata)
    if (filterdata){
        draw(filterdata)
    }
    if (searchinput===""){
        draw(products)
    }
})
function draw(products){
    let y = products.map((item) => {
        return`
        <div class="col-lg-3 col-md-6 col-sm-12 mb-5 " id="item">
            <div class="card" style="width: 300px;">
            <img src="${item.imageUrl}" style="width:280px ; height:340px ;">
            <p>Product : ${item.title} </p>
            <p style="color:green">Price : ${item.price} EGP</p>
            <p>Category : ${item.category}</p> 
            <button class="btn btn-primary" id="check" onClick="addToCart(${item.id}) ">Add to Cart</button>
            <a id="favCheck" class="text-secondary" onClick="addfav(${item.id})"><i class="fa-solid fa-heart fav iii"></i></a>
            </div>
        </div>
        `
    })
    allproducts.innerHTML=y;
}
draw(products)
///////////////////////////////////////////////////////////
let bage = document.querySelector(".bage")
let cartProductsDiv = document.querySelector(".carts-products div")
let addeditem = [];
if(localStorage.getItem("username"))
{
    function addToCart(id){
        let choosenitem = products.find((item)=>item.id === id);
        cartProductsDiv.innerHTML +=`<p>${choosenitem.title}</p>`;
        let cartproductslength = document.querySelectorAll(".carts-products div p")
        //console.log(cartproductslength.length)
        bage.style.display="block"
        bage.innerHTML = cartproductslength.length

        addeditem = [...addeditem , choosenitem]
        //console.log(addeditem)
        localStorage.setItem("Productscart" , JSON.stringify(addeditem))
        
    }
}else{
    window.location="login.html"
}
//////////////////////////////////////////////////////////
let addedfav = [];
if(localStorage.getItem("username"))
{
    function addfav(id){
        let choosenitem = products.find((item)=>item.id === id);
        console.log(choosenitem)
        addedfav = [...addedfav , choosenitem]
        //console.log(addeditem)
        localStorage.setItem("Favproducts" , JSON.stringify(addedfav))
        
    }
}else{
    window.location="login.html"
}
//////////////////////////////////////////////////////////
let check = document.querySelectorAll("#check")
check.forEach((item) => {
    item.addEventListener("click", function(){
        if(item.innerHTML== "Add to Cart"){
            item.classList.add("btn-success")
            item.innerHTML="Added"
            item.classList.remove("btn-primary")
        }
        else{
            item.classList.add("btn-primary")
            item.innerHTML= "Add to Cart"
            item.classList.remove("btn-success")
        }
    })
})
let favCheck = document.querySelectorAll("#favCheck")
favCheck.forEach((item)=>{
    item.addEventListener("click",()=>{
        if (item.classList.contains("text-secondary"))
        {
            item.classList.add("text-danger")
            item.classList.remove("text-secondary")
        }
        else if (item.classList.contains("text-danger")){
            item.classList.add("text-secondary")
            item.classList.remove("text-danger")
        }
    })
})
//////////////////////////shopping cart div/////////////////////////////
let shopping_cart = document.querySelector(".shopp-cart")
let cartproducts = document.querySelector(".carts-products")
shopping_cart.addEventListener("click",opencart)
function opencart(){
    if(cartProductsDiv.innerHTML !=""){
        if(cartproducts.style.display=="block"){
            cartproducts.style.display="none"
        }else{
            cartproducts.style.display="block"
        }
    }
}
