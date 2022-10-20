let now = new Date();
console.log(now.getDate())
let hours = now.getHours();

let minutes = now.getMinutes();
let days = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"]
let day = days[now.getDay()];
let lineDate = document.querySelector("#currentTime")
lineDate.innerHTML = day + " " + hours + ":" + minutes;


let apiKey = "0c82e3d9689abed74d1ce4e8c98ed561";
let city = document.querySelector("#dataInput")
let apiUrl =
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0c82e3d9689abed74d1ce4e8c98ed561&units=metric`;

function search (event){
    event.preventDefault();
    let h3 = document.querySelector("h3");
    if (city.value){
        h3.innerHTML = city.value ;
    } else {
        alert("Please type the city")
    }

    function showTemperature(response){
        let currentCity = response.data.main.temp;
        let chosenTemp = document.querySelector("#tempSwitcher")
        chosenTemp.innerHTML = Math.round(currentCity);

    }
    axios.get(apiUrl).then(showTemperature);

}
let form = document.querySelector("#citySearch")
form.addEventListener("submit", search)

function switchTemp(event){
    event.preventDefault();
    let tempertarure = document.querySelector("#tempSwitcher") ;
    tempertarure.innerHTML = "19" ;
    
}

let tempCelcius = document.querySelector("#celcius");
tempCelcius.addEventListener("click",switchTemp);

function changeTemp(event){
    event.preventDefault();
    let degrees = document.querySelector("#tempSwitcher");
    degrees.innerHTML = "63";
}
let tempFaringates = document.querySelector("#faringates");
tempFaringates.addEventListener("click", changeTemp);
