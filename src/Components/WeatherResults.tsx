import { Weather } from "../hooks/useWeather";
import { formatTemperature } from "../utils/index";

type weatherProps = {
  weather: Weather;
  dateWeather: string;
};

function WeatherResults({ weather, dateWeather }: weatherProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-900 p-5 rounded-lg shadow-lg max-w-md w-full">
        <div>
          <h1 className="font-bold text-center text-3xl text-white">
            {weather.name}
          </h1>
          <p className="text-white text-md p-1">{dateWeather}</p>
        </div>

        <div className="m-5 p-5">
          <h2 className="font-bold text-center text-xl text-white">Temp</h2>
          <p className="text-white text-xl text-center">
            {formatTemperature(weather.main.temp)}&deg;C
          </p>
        </div>

        <div className="flex justify-around m-5 p-5">
          <div>
            <h2 className="font-bold text-center text-xl text-white">Max</h2>
            <p className="text-white text-xl text-center">
              {formatTemperature(weather.main.temp_max)}&deg;C
            </p>
          </div>
          <div>
            <h2 className="font-bold text-center text-xl text-white">Min</h2>
            <p className="text-white text-xl text-center">
              {formatTemperature(weather.main.temp_min)}&deg;C
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherResults;
