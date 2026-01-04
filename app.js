const API_KEY = "e01c177d898972fce98c1957371f3969"

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=en`;

    const response = await fetch(url);

    if(!response.ok) {
        throw new Error("City not found");
    }

    const data = await response.json();
    console.log(data);
}

getWeather("London");

