function home(){
    alert("Please Login First")
}
function Signup(){
    window.location.href="signup.html"
}
function login(){
    window.location.href="login.html"
}

var signdata=JSON.parse(localStorage.getItem("signup"))

var loginarr=[]


document.querySelector("#submit").addEventListener("click",funsub)

function funsub(){
event.preventDefault();
var flag=false

var name1=document.querySelector("#email").value
var pass=document.querySelector("#password").value

signdata.map(function(elem){


if(name1==elem.email && pass==elem.password)
{
flag=true

loginarr.push(elem.name)
}
})

if(flag==true)
{
alert("Succesfull Login")

localStorage.setItem("logindata",JSON.stringify(loginarr))
window.location.href="index.html"
console.log("KKKKK")
}

else{
alert("invalid Credentials")
return
}

}

