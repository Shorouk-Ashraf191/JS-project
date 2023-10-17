let username = document.querySelector("#username");
let pass = document.querySelector("#pass");
let loginBtn = document.querySelector("#login");

let getuser = localStorage.getItem("username");
let getpass = localStorage.getItem("password");

loginBtn.addEventListener("click" , function(e){
    e.preventDefault()
    if(username.value==="" || pass.value===""){
        alert("Please fill all data")
    }else{
        if(getuser && getuser.trim() === username.value.trim() && getpass && getpass.trim() === pass.value.trim()){
            setTimeout(()=>{
                window.location = "project4.html"
            },1500)
        }else{
            alert("wrong password or email")
        }
    }
})