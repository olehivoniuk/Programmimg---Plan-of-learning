let now = new Date();

let hours = now.getHours();
let day = now.getDay();

let lineDate = document.querySelector("#currentTime")
lineDate.innerHTML = day + hours
