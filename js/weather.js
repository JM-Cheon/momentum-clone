const API_KEY = "302c6576380c77ec95d38f2ddfd39d84";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weahterDiv = document.getElementById("weather");
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      const weatherIcon = document.createElement("img");
      weatherIcon.src =
        "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      city.innerText = data.name;
      weather.innerText = `/ ${data.main.temp}°C`;
      weahterDiv.append(weatherIcon);
    })
  );
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
