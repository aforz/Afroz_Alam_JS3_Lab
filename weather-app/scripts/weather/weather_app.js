import { WeatherUtils } from "./weather_utils.js";
import { WeatherAPI } from "./weather-api.js";

class WeatherApp {

  init() {
    this.addListener();
  }

  addListener() {
    const searchTextFieldElement = document.querySelector(".search-box");
    searchTextFieldElement.addEventListener("keypress", (event) => {
      const keyCode = event.keyCode;
      if (keyCode === 13) {
        const userInput = event.target.value
        const weatherAPIObj = new WeatherAPI();
        weatherAPIObj.constructURL(userInput);
        weatherAPIObj.invokeURL2()
          .then((responseJSON) => {
            const convertedResponse = WeatherUtils.convertResponse(responseJSON);
            const locationElement = document.querySelector(".location .city")
            locationElement.innerText = convertedResponse.LOCATION;
            const dateElement = document.querySelector(".location .date")
            dateElement.innerText = convertedResponse.DATE;
            const temperatureElement = document.querySelector(".current .temp")
            temperatureElement.innerText = convertedResponse.TEMPERATURE;
            const temperatureTypeElement = document.querySelector(".current .weather")
            temperatureTypeElement.innerText = convertedResponse.TEMPERATURE_TYPE;
            const lowHighElement = document.querySelector(".current .hi-low")
            lowHighElement.innerText = `${convertedResponse.MIN_TEMPERATURE} / ${convertedResponse.MAX_TEMPERATURE}`;
          });
      }
    })
  }
  
}
export { WeatherApp };