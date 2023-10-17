let username = document.querySelector("#username");
let email = document.querySelector("#email");
let pass = document.querySelector("#pass");
let registerBtn = document.querySelector("#sign-up");

registerBtn.addEventListener("click" , function(e){
    e.preventDefault()
    if(username.value==="" || email.value==="" || pass.value===""){
        alert("Please fill all data")
    }else{
        localStorage.setItem("username" , username.value);
        localStorage.setItem("email" , email.value);
        localStorage.setItem("password" , pass.value);

        setTimeout(()=>{
            window.location = "login.html"
        },1500)
    }
})