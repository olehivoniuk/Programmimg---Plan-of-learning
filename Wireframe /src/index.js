let now = new Date();
console.log(now.getDate())
let hours = now.getHours();
let day = now.getDay();

let lineDate = document.querySelector("#currentTime")
lineDate.innerHTML = day + hours
