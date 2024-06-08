import { Weather } from "../hooks/useWeather";
import { formatTemperature } from "../utils/index";

type weatherProps = {
  weather: Weather;
  dateWeather: string;
};

function WeatherResults({ weather, dateWeather }: weatherProps) {
  const weatherData = weather.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${weatherData}@2x.png`;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-900 p-5 rounded-lg shadow-lg max-w-md w-full border border-white">
        <div>
          <h1 className="font-bold text-center text-3xl text-white">
            {weather.name}, {weather.sys.country}
          </h1>
          <p className="text-white text-md p-1">{dateWeather}</p>
        </div>

        <div className="">
          <p className="text-white text-3xl text-center p-7">
            {weather.weather[0].main}
          </p>

          <img
            className="mx-auto"
            src={iconUrl}
            alt={weather.weather[0].main}
          />
        </div>

        <div className="m-5 p-5 flex justify-around">
          <div>
            <h2 className="font-bold text-center text-xl text-white">Temp</h2>
            <p className="text-white text-4xl text-center">
              {formatTemperature(weather.main.temp)}&deg;C
            </p>
          </div>
          <div>
            <h2 className="font-bold text-center text-xl text-white">
              Humidity
            </h2>
            <p className="text-white text-4xl text-center">
              {weather.main.humidity}%
            </p>
          </div>
        </div>

        <div className="flex justify-around m-5 p-5 bg-slate-950 rounded-lg">
          <div>
            <h2 className="font-bold text-center text-xl text-white">Max</h2>
            <p className="text-white text-xl text-center">
              {formatTemperature(weather.main.temp_max)}&deg;C
            </p>
          </div>

          <div>
            <h2 className="font-bold text-center text-xl text-white">
              Feels Like
            </h2>
            <p className="text-white text-xl text-center">
              {formatTemperature(weather.main.feels_like)}&deg;C
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
