import Form from "./Components/Form"
import useWeather from "./hooks/useWeather"
import WeatherResults from "./Components/WeatherResults"

function App() {

  const {weather, fetchWeather} = useWeather()

  return (
    <div className="grid grid-cols-1 text-center md:grid-cols-2">
      <Form fetchWeather={fetchWeather}/>
      <WeatherResults weather={weather}/>
    </div>
  )
}

export default App
