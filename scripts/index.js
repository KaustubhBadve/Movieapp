

// To display userid instead of login

var loginname=JSON.parse(localStorage.getItem("logindata"))

document.querySelector("#login").innerText=loginname[0]


// function to work navbar buttons

document.getElementById("home").addEventListener("click",funhome)
document.querySelector("#signup").addEventListener("click",funSignup)
document.querySelector("#login").addEventListener("click",funlogin)

    function funhome(){
        window.location.href="./index.html"
    }
    function funSignup(){
        window.location.href="signup.html"
    }
    function funlogin(){
        window.location.href="login.html"
    }

// For Sliding movie imgaes

var imgarr=["https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5210/1165210-h-a72a0a95461e","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5061/675061-h","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5061/675061-h","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9028/1159028-h-b04b55cd3e4a","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6362/936362-h","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2441/862441-h","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1681/1011681-h-ac6ee255f074","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4621/1114621-h-9781e2d5b694","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4559/674559-h","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4586/674586-h"]

var i=0
var img=document.createElement("img")
var id= setInterval(function(){
            if(i==imgarr.length)
            {
                i=0
            }
            document.getElementById("slideshow").innerHTML=null
            img.src=imgarr[i]
            document.getElementById("slideshow").append(img)
            i++
        },2000)
    
// Creating database and saved in localstorage to show movie info in grid format

   function moviedetail(n,d,p,r){
       this.Mname=n,
       this.MreleaseDate=d,
       this.Mposter=p,
       this.Mrating=r
   }      
   var moviee =[]

   let P1=new moviedetail("K.G.F. Chapter 2","14th Apr","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR78rJifVr1HiVWkxZsqKo-ovYyDzGpFDQyoQ&usqp=CAU","8.2")

   let P2=new moviedetail("Jersy","14th Apr","https://assets.thehansindia.com/h-upload/2021/12/28/1138311-jersey.webp","6.2")

   let P3=new moviedetail("The Kashmir Files","14th March","https://assetscdn1.paytm.com/images/cinema/kashmir-files-695ccb40-92f3-11ec-a572-c12353223f0c.jpg","9.2")

   let P4=new moviedetail("83","26th Jan","https://i.ytimg.com/vi/-MYZrPEMxF4/maxresdefault.jpg","5.2")

   let P5=new moviedetail("Gangubai","21th Feb","https://www.bollymoviereviewz.com/wp-content/uploads/2011/12/Gangubai_Kathiawadi_film_poster-1.jpg","7.0")

   let P6=new moviedetail("RRR","26th March","https://images.news18.com/ibnlive/uploads/2022/03/rrr-9.jpg","7.6")

   let P7=new moviedetail("Spider Man Homecoming","9th Sep","https://img.etimg.com/thumb/msid-88317664,width-650,imgsize-80252,,resizemode-4,quality-100/spider-man-no-way-home-is-also-driving-more-mentions-and-conversations-on-social-media-than-any-other-pandemic-era-release-.jpg","7.8")

   let P8=new moviedetail("Atrangi re","4th Dec","https://assets.gadgets360cdn.com/pricee/assets/product/202112/MV5BZGI2MDk2NGEtNDcwZC00NmU5LTk5_1638535115.jpg","6.2")

   let P9=new moviedetail("Pirates of the Caribbean","21th July","https://www.lifewire.com/thmb/QWFexw3DlK6AUoJLZ8t0Hm1WhSQ=/1920x1080/filters:fill(auto,1)/Piratesofthecarribean-0fc72c9f13da4b29a527546ed83edce3.jpg","9.1")

let P10=new moviedetail("M.S Dhoni","29th March","https://images.indianexpress.com/2016/09/ms-dhoni-review-759.jpg","8.9")

let P11=new moviedetail("Nemo","14th Feb","https://i.ytimg.com/vi/DQOwZCzLUEg/maxresdefault.jpg","4.3")

let P12=new moviedetail("Bahubali","4th Oct","https://i.ytimg.com/vi/9rGRNzoE6O8/maxresdefault.jpg","5.5")


moviee.push(P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12)

localStorage.setItem("movies",JSON.stringify(moviee))
console.log(moviee)




// Create a database of movies of your choice. Each movie object will have properties like ‘name, release date, poster (add url of a poster), IMDb rating, etc.
// Create at least 9 movies object, push all of them as array items. Store the array in local storage with key 'movies'.
// Whenever the user visits index.html, show the movies in 3*3 grid ( 3 columns, 3 rows ).



// For showing movie info down inform of Grid 

function displaymovies(moviee){

    document.querySelector("#movies").innerHTML=null
    moviee.map(function(elem){
    var main=document.createElement("div")
    
    var imgdiv=document.createElement("div")
    imgdiv.setAttribute("id","imgdiv")
    var img=document.createElement("img")
    img.src=elem.Mposter

    imgdiv.append(img)

    var Moviename=document.createElement("div")
    Moviename.innerText="Movie Name :-"+ "  "+elem.Mname

    var Moviedate=document.createElement("div")
    Moviedate.innerText="Release Date :- "+ elem.MreleaseDate

    var Movierate=document.createElement("div")
    Movierate.innerText=" IMDB Ratings  :- "+ elem.Mrating

    main.append(imgdiv,Moviename,Moviedate,Movierate)
    document.querySelector("#movies").append(main)

})
}

displaymovies(moviee)

// To sort movie name with ratings

console.log(moviee)

document.getElementById("sort-hl").addEventListener("click",funsorthl)

function funsorthl(){
    console.log("HL")
    moviee.sort(function(a,b){
   return (b.Mrating-a.Mrating)
 })
 displaymovies(moviee)
}

document.getElementById("sort-lh").addEventListener("click",funsortlh)

function funsortlh(){
    console.log("LH")
    moviee.sort(function(a,b){
   return (a.Mrating-b.Mrating)
 })
 displaymovies(moviee)
}
