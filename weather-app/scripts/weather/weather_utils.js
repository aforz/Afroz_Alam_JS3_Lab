class WeatherUtils {
  
  static convertResponse(responseJSON) {
    const weatherResponse = {
      LOCATION: `${responseJSON.name}, ${responseJSON.sys.country}`,
      DATE: WeatherUtils.getTodayDate(),
      TEMPERATURE: `${Math.floor(responseJSON.main.temp)}°c`,
      TEMPERATURE_TYPE: responseJSON.weather[0].main,
      MIN_TEMPERATURE: `${Math.floor(responseJSON.main.temp_min)}°c`,
      MAX_TEMPERATURE: `${Math.floor(responseJSON.main.temp_max)}°c`
    }
    return weatherResponse;
  }

  static getTodayDate() {
    const today = new Date();
    const dateAsString = today.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    })
    return dateAsString;
  }
}

export { WeatherUtils }