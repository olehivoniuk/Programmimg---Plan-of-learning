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
    let textInput = document.querySelector("#dataInput")
}
if (form){
    innerHTML.currentCity = ("#dataInput")
}
let form = document.querySelector("#citySearch")
form.addEventListener("submit", search)
