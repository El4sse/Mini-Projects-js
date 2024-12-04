const apiKey = "5857820e28db73896be02326a7e184e8";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "imagers/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "imagers/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "imagers/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "imagers/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
  searchBox.value = "";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
