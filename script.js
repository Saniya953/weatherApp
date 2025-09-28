const API_KEY = "faa84bbb399ef1b6f97189f35296e798"; // Replace with your key
const weatherInfo = document.getElementById("weather-info");

function getWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const { name, main, weather } = data;
            weatherInfo.innerHTML = `
                <h2>${name}</h2>
                <p>🌡️ Temperature: ${main.temp}°C</p>
                <p>☁️ Condition: ${weather[0].description}</p>
                <p>💧 Humidity: ${main.humidity}%</p>
            `;
        })
        .catch(() => {
            weatherInfo.innerHTML = "<p>Unable to fetch weather data.</p>";
        });
}

function getLocation() {
    if (navigator.geolocation) {
        nnavigator.geolocation.getCurrentPosition(successCallback, errorCallback, { timeout: 5000 });
(
            (position) => {
                const { latitude, longitude } = position.coords;
                getWeather(latitude, longitude);
            },
            () => {
                weatherInfo.innerHTML = "<p>Location access denied. Please enable it.</p>";
            }
        );
    } else {
        weatherInfo.innerHTML = "<p>Geolocation not supported by your browser.</p>";
    }
}

getLocation();
