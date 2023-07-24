import { UI_man } from "./UI_man.js";
import { AccessoriesDataMan } from "./AccessoriesDataMan.js";
import { T_ShirtDataMan } from "./T_ShirtDataMan.js";
import { PantsDataMan } from "./PantsDataMan.js";
import { ShoesDataMan } from "./ShoesDataMan.js";
import { PullsDataMan } from "./PullsDataMan.js";

import { UI_woman } from "./UI_woman.js";
import { AccessoriesDataWoman } from "./AccessoriesDataWoman.js";
import { T_ShirtDataWoman } from "./T_ShirtDataWoman.js";
import { PantsDataWoman } from "./PantsDataWoman.js";
import { ShoesDataWoman } from "./ShoesDataWoman.js";
import { PullsDataWoman } from "./PullsDataWoman.js";

const randomTshirtButton = document.querySelector('#random-tshirt-button');
const weatherButton = document.querySelector('#btn-weather');
let gender = document.getElementById('gender-info').value;
let weather = document.getElementById('weather-info').value;
let temperature_actuel = null;

let currentIndex = 0;
let currentIndex1 = 15;
let currentIndex2 = 0;
let currentIndex3 = 10;
let currentIndex4 = 8;
let currentIndex5 = 10;
let currentIndex6 = 9;
let currentIndex7 = 20;
let currentIndex8 = 12;
let currentIndex9 = 5;
let currentIndex10 = 8;
let currentIndex11 = 4;
let currentIndex12 = 6;
let currentIndex13 = 3;
let currentIndex14 = 7;

function getWeather() {
    const apiKey = "c0eb5e5b9f0b6b26ad7a81f6382f8fe7";
    const city = document.getElementById("cityInput").value;

    if(city !== "") {
        const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

        // Effectuer la requête AJAX vers l'API Weatherstack
        $.getJSON(url)
            .done(function(data) {
                const location = data.location.name;
                const country = data.location.country;
                const temperature = data.current.temperature;
                const weatherDescription = data.current.weather_descriptions[0];
                
                const weatherSelect = document.querySelector('#weather-info');
                if (!isNaN(temperature) && temperature !== null) {
                    weatherSelect.disabled = true; // Désactiver le select si la température a une valeur numérique
                } else {
                    weatherSelect.disabled = false; // Activer le select si la température n'a pas de valeur numérique
                }
    
                const weatherDataDiv = document.getElementById("weatherData");
                weatherDataDiv.innerHTML = `
                    <h2>Weather in ${location}, ${country}:</h2>
                    <p>Description: ${weatherDescription}</p>
                    <p>Temperature: ${temperature} °C</p>
                `;
                temperature_actuel = temperature;
            })
            .fail(function(jqxhr, textStatus, error) {
                const errorMessage = "City not found or an error occurred while fetching weather data.";
                const weatherDataDiv = document.getElementById("weatherData");
                weatherDataDiv.innerHTML = `<p>${errorMessage}</p>`;
            });
    } else {
        console.log("Empty input");
    }
}


export class ClothesGenerator {
    constructor() {

        if(gender === "Man") {
            if(weather === "Hot") {
                UI_man.setTshirtData(currentIndex);
                UI_man.setTshirtData1(currentIndex3);
                UI_man.setTshirtData2(currentIndex6);
            } else {
                UI_man.setPullData(currentIndex9);
                UI_man.setPullData1(currentIndex10);
                UI_man.setPullData2(currentIndex11);
            }


            UI_man.setAccessoryData(currentIndex12)
            UI_man.setPantsData(currentIndex1);
            UI_man.setShoesData(currentIndex2);
            

            UI_man.setAccessoryData1(currentIndex13)
            UI_man.setPantsData1(currentIndex4);
            UI_man.setShoesData1(currentIndex5);
    
            
            UI_man.setAccessoryData2(currentIndex14)
            UI_man.setPantsData2(currentIndex7);
            UI_man.setShoesData2(currentIndex8);

        } else {
            if(weather === "Hot") {
                UI_woman.setTshirtData(currentIndex);
                UI_woman.setTshirtData1(currentIndex3);
                UI_woman.setTshirtData2(currentIndex6);
            } else {
                UI_woman.setPullData(currentIndex9);
                UI_woman.setPullData1(currentIndex10);
                UI_woman.setPullData2(currentIndex11);
            }
            

            UI_woman.setAccessoryData(currentIndex12)
            UI_woman.setPantsData(currentIndex1);
            UI_woman.setShoesData(currentIndex2);
            

            UI_woman.setAccessoryData1(currentIndex13)
            UI_woman.setPantsData1(currentIndex4);
            UI_woman.setShoesData1(currentIndex5);
            

            UI_woman.setAccessoryData2(currentIndex14)
            UI_woman.setPantsData2(currentIndex7);
            UI_woman.setShoesData2(currentIndex8);

        }

        weatherButton.addEventListener('click', getWeather);
        randomTshirtButton.addEventListener('click', this.getRandomIndex);

    } 
    getRandomIndex() {
        gender = document.getElementById('gender-info').value;
        weather = document.getElementById('weather-info').value;
        
        if(gender === "Man")
        {
            const randomIndex = Math.floor(Math.random() * T_ShirtDataMan.length);
            const randomIndex1 = Math.floor(Math.random() * PantsDataMan.length);
            const randomIndex2 = Math.floor(Math.random() * ShoesDataMan.length);
            const randomIndex3 = Math.floor(Math.random() * T_ShirtDataMan.length);
            const randomIndex4 = Math.floor(Math.random() * PantsDataMan.length);
            const randomIndex5 = Math.floor(Math.random() * ShoesDataMan.length);
            const randomIndex6 = Math.floor(Math.random() * T_ShirtDataMan.length);
            const randomIndex7 = Math.floor(Math.random() * PantsDataMan.length);
            const randomIndex8 = Math.floor(Math.random() * ShoesDataMan.length);
            const randomIndex9 = Math.floor(Math.random() * PullsDataMan.length);
            const randomIndex10 = Math.floor(Math.random() * PullsDataMan.length);
            const randomIndex11 = Math.floor(Math.random() * PullsDataMan.length);
            const randomIndex12 = Math.floor(Math.random() * AccessoriesDataMan.length);
            const randomIndex13 = Math.floor(Math.random() * AccessoriesDataMan.length);
            const randomIndex14 = Math.floor(Math.random() * AccessoriesDataMan.length);

            currentIndex = randomIndex;
            currentIndex1 = randomIndex1;
            currentIndex2 = randomIndex2;
            currentIndex3 = randomIndex3;
            currentIndex4 = randomIndex4;
            currentIndex5 = randomIndex5;
            currentIndex6 = randomIndex6;
            currentIndex7 = randomIndex7;
            currentIndex8 = randomIndex8;
            currentIndex9 = randomIndex9;
            currentIndex10 = randomIndex10;
            currentIndex11 = randomIndex11;
            currentIndex12 = randomIndex12;
            currentIndex13 = randomIndex13;
            currentIndex14 = randomIndex14;
            
            if(weather === "Hot" && temperature_actuel === null || temperature_actuel > 18 && !isNaN(temperature_actuel)) {
                UI_man.setTshirtData(currentIndex);
                UI_man.setTshirtData1(currentIndex3);
                UI_man.setTshirtData2(currentIndex6);
            } else {
                UI_man.setPullData(currentIndex9);
                UI_man.setPullData1(currentIndex10);
                UI_man.setPullData2(currentIndex11);
            }


            UI_man.setAccessoryData(currentIndex12);
            UI_man.setPantsData(currentIndex1);
            UI_man.setShoesData(currentIndex2);
    
            
            UI_man.setAccessoryData1(currentIndex13);
            UI_man.setPantsData1(currentIndex4);
            UI_man.setShoesData1(currentIndex5);
    
            
            UI_man.setAccessoryData2(currentIndex14);
            UI_man.setPantsData2(currentIndex7);
            UI_man.setShoesData2(currentIndex8);


        } else if (gender === "Women") {
            const randomIndex = Math.floor(Math.random() * T_ShirtDataWoman.length);
            const randomIndex1 = Math.floor(Math.random() * PantsDataWoman.length);
            const randomIndex2 = Math.floor(Math.random() * ShoesDataWoman.length);
            const randomIndex3 = Math.floor(Math.random() * T_ShirtDataWoman.length);
            const randomIndex4 = Math.floor(Math.random() * PantsDataWoman.length);
            const randomIndex5 = Math.floor(Math.random() * ShoesDataWoman.length);
            const randomIndex6 = Math.floor(Math.random() * T_ShirtDataWoman.length);
            const randomIndex7 = Math.floor(Math.random() * PantsDataWoman.length);
            const randomIndex8 = Math.floor(Math.random() * ShoesDataWoman.length);
            const randomIndex9 = Math.floor(Math.random() * PullsDataWoman.length);
            const randomIndex10 = Math.floor(Math.random() * PullsDataWoman.length);
            const randomIndex11 = Math.floor(Math.random() * PullsDataWoman.length);
            const randomIndex12 = Math.floor(Math.random() * AccessoriesDataWoman.length);
            const randomIndex13 = Math.floor(Math.random() * AccessoriesDataWoman.length);
            const randomIndex14 = Math.floor(Math.random() * AccessoriesDataWoman.length);

            currentIndex = randomIndex;
            currentIndex1 = randomIndex1;
            currentIndex2 = randomIndex2;
            currentIndex3 = randomIndex3;
            currentIndex4 = randomIndex4;
            currentIndex5 = randomIndex5;
            currentIndex6 = randomIndex6;
            currentIndex7 = randomIndex7;
            currentIndex8 = randomIndex8;
            currentIndex9 = randomIndex9;
            currentIndex10 = randomIndex10;
            currentIndex11 = randomIndex11;
            currentIndex12 = randomIndex12;
            currentIndex13 = randomIndex13;
            currentIndex14 = randomIndex14;

            if(weather === "Hot" && temperature_actuel === null || temperature_actuel > 18 && !isNaN(temperature_actuel)) {
                UI_woman.setTshirtData(currentIndex);
                UI_woman.setTshirtData1(currentIndex3);
                UI_woman.setTshirtData2(currentIndex6);
            } else {
                UI_woman.setPullData(currentIndex9);
                UI_woman.setPullData1(currentIndex10);
                UI_woman.setPullData2(currentIndex11);
            }
            

            UI_woman.setAccessoryData(currentIndex12);
            UI_woman.setPantsData(currentIndex1);
            UI_woman.setShoesData(currentIndex2);
            
            UI_woman.setAccessoryData1(currentIndex13);
            UI_woman.setPantsData1(currentIndex4);
            UI_woman.setShoesData1(currentIndex5);
            
            UI_woman.setAccessoryData2(currentIndex14);
            UI_woman.setPantsData2(currentIndex7);
            UI_woman.setShoesData2(currentIndex8);
        }
    }
}