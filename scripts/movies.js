// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page


let amount = JSON.parse(localStorage.getItem("money"));
document.getElementById("wallet").innerText = amount;

async function searchmovie(){
    try{
     let query = document.getElementById("search").value;   
    const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=fb631683`);
    const data = await res.json();
    //appendmovies(data.Search)
    return data;
    }
    catch(err){
        console.log("err:",err)
    }
}

async function main(){
  let data =await searchmovie();
  if(data.Search===undefined){
      return false;
  }
  else{
  appendmovies(data.Search);
  }
  
}
let id ;
function debouncing(main,delay){
  if(id){
      clearTimeout(id);
  }
  id = setTimeout(()=>{
      main();
  },delay)  
}





function appendmovies(data){
//console.log(data)
document.getElementById("movies").innerHTML= null;
  data.forEach(({Title,Poster})=>{
   let div = document.createElement("div");
   let img = document.createElement("img");
   img.src = Poster;
   let p = document.createElement("h2");
   p.innerText = "Title : "+Title;
   let button = document.createElement("button");
   button.setAttribute("class","book_now");
   button.innerText = "Book Now";
   button.addEventListener("click",()=>{
       Booknow(Title,Poster);
   })
   div.append(img,p,button);
   document.getElementById("movies").append(div)
  })
}
let arr = [];
function Booknow(Title,Poster){
let obj = {Title,Poster}
arr.push(obj);
localStorage.setItem("movie",JSON.stringify(arr));
window.location.href = "checkout.html";
}