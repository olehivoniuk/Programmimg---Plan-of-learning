let now = new Date();
console.log(now.getDate())
let hours = now.getHours();

let minutes = now.getMinutes();
let days = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"]
let day = days[now.getDay()];
let lineDate = document.querySelector("#currentTime")
lineDate.innerHTML = day + " " + hours + ":" + minutes;

function search (event){
    event.preventDefault();
    let seacrhInput = document.querySelector("#dataInput");
    let h3 = document.querySelector("h3");
    if (seacrhInput.value){
        h3.innerHTML = seacrhInput.value ;
    } else {
        alert("Please type the city")
    }

}
let form = document.querySelector("#citySearch")
form.addEventListener("submit", search)
