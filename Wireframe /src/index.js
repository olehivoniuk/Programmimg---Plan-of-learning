let weather = {
    paris: {
      temp: 19.7,
      humidity: 80
    },
    tokyo: {
      temp: 17.3,
      humidity: 50
    },
    lisbon: {
      temp: 30.2,
      humidity: 20
    },
    "san francisco": {
      temp: 20.9,
      humidity: 100
    },
    oslo: {
      temp: -5,
      humidity: 20
    }
  };
  
   let city  = prompt(" Enter a city ?");
    weather["san francisco"] = "san francisco"
  if (city === "paris") {
      alert(" It is currenty " + weather.paris.temp + "°" + " in " + city + " with a humidity of " + weather.paris.humidity + " %"  );
  }
  
  else { if (city === "tokyo"){
      alert( " It is currenty " + weather.tokyo.temp + "°" + " in " + city + " with a humidity of " + weather.tokyo.humidity + " %" );
  } 
  
  else { if (city === "lisbon") {
    alert( " It is currenty " + weather.lisbon.temp + "°" + " in " + city + " with a humidity of " + weather.lisbon.humidity + " %" );
  } 
  
  else { if(city === "oslo"){
    alert( " It is currenty " + weather.oslo.temp + "°" + " in " + city + " with a humidity of " + weather.oslo.humidity + " %" );
  } else { if(city === "san francisco"){
    alert( " It is currenty " + weather["san francisco"].temp + "°" + " in " + city + " with a humidity of " + weather["san francisco"].humidity + " %" );
  }
  
  
  

  else {
    alert ("Sorry we don't know the weather for this city , try going to https://www.google.com/search?q=weather+sydney ");}
  }
}
  }
}

