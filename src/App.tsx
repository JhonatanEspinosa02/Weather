import Form from "./Components/Form";
import useWeather from "./hooks/useWeather";
import WeatherResults from "./Components/WeatherResults";
import useDate from "./hooks/useDate";
import Spinner from "./Components/Spinner/Spinner";

function App() {
  const { weather, loading, fetchWeather } = useWeather();
  const { dateWeather } = useDate();

  return (
    <div className="grid grid-cols-1 text-center md:grid-cols-2">
      <Form fetchWeather={fetchWeather} />
      {loading && <Spinner />}
      <WeatherResults weather={weather} dateWeather={dateWeather} />
    </div>
  );
}

export default App;
