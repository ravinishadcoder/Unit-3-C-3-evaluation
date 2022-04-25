// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

const data = JSON.parse(localStorage.getItem("movie"));
let money = JSON.parse(localStorage.getItem("money"));
money = +money;
//console.log(typeof money)
document.getElementById("wallet").innerText = money;

data.map(({Title,Poster})=>{
let div = document.createElement("div");
let img = document.createElement("img");
img.src = Poster;
let p = document.createElement("h3");
p.innerText = "Title : "+Title;
div.append(img,p);
document.getElementById("movie").append(div)
})

function userdata(){
    event.preventDefault();
    let form = document.getElementById("form");
    let name = form.user_name.value;
    let seat = form.number_of_seats.value;
   seat = +seat;
   let total = seat*100;
   if(total>money){
     alert("Insufficient Balance!")
   }
   else{
       alert("Booking successful!");
       let newAmount = money - total;
       localStorage.setItem("money",JSON.stringify(newAmount));
       location.reload();
   }
   
}