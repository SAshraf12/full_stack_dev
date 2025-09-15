// //json
// console.log("=== Hour 1 : JSON Basics ===");

// let student ={
//     Name : "Ashraf",
//     Age : 20,
//     Course : "CSM"
// };

// //convert object to JSON string
// let jsonString = JSON.stringify(student);
// console.log("JSON String:", jsonString);

// //convert JSON string to object
// let pardedObj = JSON.parse(jsonString);
// console.log("Parsed Object:", pardedObj);


// //create a json structure for variable name books having 3 attributes title, author, price

// let book1 = {
//     Title : "Book1",
//     Author : "Author1",
//     Price : 100
// };

// let book2 = {
//     Title : "Book2",
//     Author : "Author2",
//     Price : 200
// };

// let book3 ={
//     Title : "Book3",
//     Author : "Author3",
//     Price : 300
// };

// let book4 = JSON.stringify(book1);
// console.log("JSON String:", book4);

// let book5 = JSON.stringify(book2);
// console.log("JSON String:", book5);

// let book6 = JSON.stringify(book3);
// console.log("JSON String:", book6);


// // let books ={
// //     {title : "Book1", author : "Author1", price : 100},
// //     {title : "Book2", author : "Author2", price : 200},
// //     {title : "Book3", author : "Author3", price : 300}
// };


//Hour 2 : AJAX with fetch

// console.log ("=== Hour 2 : AJAX with fetch ===");

// //fetch sample JSON from API
// fetch('https://jsonplaceholder.typicode.com/posts/')
// .then(response => response.json()) //convert response to JSON
// .then(data => {
//     console.log("Fetched Data:", data);
// })
// .catch(error => console.error('Error fetching data:', error));


// //display json data on webpage
// console.log("=== Hour 3 : ");

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(users => {
//     let output = "<h3>User List</h3><ul>";
//     users.forEach(user => {
//        output += `<li>${user.name} - ${user.email}</li>`;
//     });
//     output += "</ul>";
//     //appeend result to page
//     document.body.innerHTML += output;
// });


//weather info fetcher project

console.log("=== Weather Info Fetcher ===");

//predefined city -> coordinates
const cityCoords = {
    "banglore": { lat: 12.9716, lon: 77.5946 },
    "mumbai": { lat: 19.0760, lon: 72.8777 },
    "delhi": { lat: 28.7041, lon: 77.1025 },
    "chennai": { lat: 13.0827, lon: 80.2707 },
    "kolkata": { lat: 22.5726, lon: 88.3639 },
    "london": { lat: 51.5074, lon: -0.1278 },
    "newyork": { lat: 40.7128, lon: -74.0060 }
};

//event listener for button click
document.getElementById("fetchWeatherBtn").addEventListener("click", () => {
    let city = document.getElementById("cityInput").value.toLowerCase();

    if(!cityCoords[city]){
        document.getElementById("weather").innerHTML = "<p>City not found in predefined list.</p>";
        return;
    }

    let coords = cityCoords[city];
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

    //ajax fetch
    fetch(url)
    .then(res => res.json())
    .then(data => {
        if(data.current_weather){
            document.getElementById("weather").innerHTML = `
                <h3>Weather in ${city}</h3>
                <p>Temperature: ${data.current_weather.temperature}°C</p>
                <p>Wind Speed: ${data.current_weather.windspeed} km/h</p>
                <p>Weather Code: ${data.current_weather.weathercode}</p>
            `;
        } else {
            document.getElementById("weather").innerHTML = "<p>Weather data not available.</p>";
        }       
    })
.catch(error => {
    console.error('Error fetching weather data:', error);
    document.getElementById("weather").innerHTML = "<p>Error fetching weather data.</p>";
}   
);
});

//https://newsapi.org/v2/everything?q=tesla&from=2025-08-12&sortBy=publishedAt&apiKey=5529ea051c742eaa88d6e1a86c6d788



