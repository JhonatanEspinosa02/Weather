import axios from "axios";
import {z} from "zod";
import { searchType } from "../types/types";
import { useState } from "react";

// const Weather = z.object({
//   name: z.string(),
//   main: z.object({
//     feelsLike: z.number(),
//     temp: z.number(),
//     temp_max: z.number(),
//     temp_min: z.number()
//   })
// })

// export type Weather = z.infer<typeof Weather>

const initialState = {
  name: "",
  main : {
   feelsLike: 0,
   temp: 0,
   temp_max: 0,
   temp_min: 0
  }
}


function useWeather() {

  // const [weather, setWeather] = useState<Weather>(initialState);
  const [weather, setWeather] = useState(initialState);

  const fetchWeather = async (search : searchType) => {

    const apiKey = import.meta.env.VITE_API;
    try {
      const getGeoURL = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${apiKey}`;
      const {data} = await axios(getGeoURL)
      const lat = data[0].lat;
      const lon = data[0].lon

      const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
      const {data : weatherResult} = await axios.get(weatherURL)
      setWeather(weatherResult)

      
    } catch (error) {
      console.log(error)
    }

  }

  return {
    weather,
    fetchWeather
  }
}

export default useWeather