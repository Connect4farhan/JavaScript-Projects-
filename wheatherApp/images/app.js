const apiKey = "5bfb51d1215471d234a7e27f813b942d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?unitsmetric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const wheatherIcon = document.querySelector(".weather-icon");


async function checkWheather(city) {
    const response = await fetch(apiUrl + city + `&appId=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

    if (data.wheather[0].main == "Clouds") {
        wheatherIcon.src = "images/clouds.png";
    }

    else if (data.wheather[0].main == "Clear") {
        wheatherIcon.src = "images/clear.png";
    }


    else if (data.wheather[0].main == "Rain") {
        wheatherIcon.src = "images/rain.png";
    }

    else if (data.wheather[0].main == "Drizzle") {
        wheatherIcon.src = "images/drizzle.png";
    }

    else if (data.wheather[0].main == "Mist") {
        wheatherIcon.src = "images/mist.png";
    }



}

searchBtn.addEventListener("click", () => {
    checkWheather(searchBox.value);

})
