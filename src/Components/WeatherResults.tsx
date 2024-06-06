// import { Weather } from "../hooks/useWeather"
import { Weather } from "../types/types"

type weatherProps = {
    weather : Weather
}

function WeatherResults({weather} : weatherProps) {
  return (
    <div className="text-white">
        <p>Weather City: {weather.name}</p>
        <p>{weather.main.feelsLike}</p>
        <p>{weather.main.temp}</p>
        <p>{weather.main.temp_max}</p>
        <p>{weather.main.temp_min}</p>

    </div>
  )
}

export default WeatherResults