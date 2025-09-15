const cityCoords = {
    "banglore": { lat: 12.9716, lon: 77.5946 },
    "mumbai": { lat: 19.0760, lon: 72.8777 },
    "delhi": { lat: 28.7041, lon: 77.1025 },
    "chennai": { lat: 13.0827, lon: 80.2707 },
    "kolkata": { lat: 22.5726, lon: 88.3639 },
    "london": { lat: 51.5074, lon: -0.1278 },
    "newyork": { lat: 40.7128, lon: -74.0060 }
};

$(document).ready(function () {
    $("#fetchWeatherBtn").on("click", function () {
        let city = $("#cityInput").val().toLowerCase();

        if (!cityCoords[city]) {
            $("#weather").html("<p>City not found in predefined list.</p>");
            return;
        }

        let coords = cityCoords[city];
        let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

        // jQuery AJAX
        $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            success: function (data) {
                if (data.current_weather) {
                    $("#weather").html(`
                        <h3>Weather in ${city}</h3>
                        <p>Temperature: ${data.current_weather.temperature}°C</p>
                        <p>Wind Speed: ${data.current_weather.windspeed} km/h</p>
                        <p>Weather Code: ${data.current_weather.weathercode}</p>
                    `);
                } else {
                    $("#weather").html("<p>Weather data not available.</p>");
                }
            },
            error: function (xhr, status, error) {
                console.error("Error fetching weather data:", error);
                $("#weather").html("<p>Error fetching weather data.</p>");
            }
        });
    });
});
