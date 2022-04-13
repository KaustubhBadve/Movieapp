function home()
{
    alert("Signup First")
}

function login()
{
    window.location.href="login.html"
}

document.querySelector("#submit").addEventListener("click",funsubmit)

function signupdata(n,c,e,p){
    this.name=n,
    this.contact=c,
    this.email=e,
    this.password=p
}

function funsubmit(){
    event.preventDefault()

    var form=document.querySelector("form")

    var name=form.name.value
    var contact=form.contact.value
    var email=form.email.value
    var password=form.password.value

    if(name.length<=4)
    {
        alert("Please Enter Valid name")
        return
    }

    if(contact.length<=9 || contact.length>11)
    {
        alert("Please Enter 10 digit Number")
        return
    }

    if(email.includes("@")==false || email.includes(".com")==false)
    {
        alert("Please Enter Valid EmailID")
        return
    }

    if(password.length<=4)
    {
        alert("Please Enter Valid Password")
        return
    }

    var signup=JSON.parse(localStorage.getItem("signup")) || []

    var P1=new signupdata(name,contact,email,password)
      signup.push(P1)
      localStorage.setItem("signup",JSON.stringify(signup))


      document.querySelector("#name").value=""
      document.querySelector("#contact").value=""
      document.querySelector("#email").value=""
      document.querySelector("#password").value=""
}