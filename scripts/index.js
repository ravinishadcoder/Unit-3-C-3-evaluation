// Store the wallet amount to your local storage with key "amount"

let amount = JSON.parse(localStorage.getItem("money"));
amount = +amount;
function Addmoney(){
    let money = document.getElementById("amount").value;
    money = amount + (+money);
    localStorage.setItem("money",JSON.stringify(money));
    
    location.reload();
}



    let h = document.createElement("h2");
    h.innerText = amount;
    document.getElementById("wallet").append(h);
    
     