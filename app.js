const API_KEY = "e97520a1021db8e017ed0ed6f6373da0";

const showWeatherButton = document.getElementById("showWeatherButton");
const cityInput = document.getElementById("cityInput");
const weatherDiv = document.getElementById("weather");

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=en`;

    const response = await fetch(url);

    if(!response.ok) {
        throw new Error("City not found");
    }

    const data = await response.json();
    console.log(data);
    return data;
}

async function showWeather() {
    try {
        const cityName = cityInput.value;
        const data = await getWeather(cityName);

        renderWeatherDivText(data);
    } catch (error) {
        weatherDiv.innerHTML = error.message;
    }
}

function renderWeatherDivText(data) {
    weatherDiv.innerText = `${data.main.temp}°C`;
}

