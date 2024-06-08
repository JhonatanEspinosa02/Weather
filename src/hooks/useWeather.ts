import axios from "axios";
import { z } from "zod";
import { searchType } from "../types/types";
import { useState } from "react";

const Weather = z.object({
  name: z.string(),
  main: z.object({
    feels_like: z.number(),
    humidity: z.number(),
    temp: z.number(),
    temp_max: z.number(),
    temp_min: z.number(),
  }),
  weather: z.array(
    z.object({
      main: z.string(),
      icon: z.string(),
    })
  ),
  sys: z.object({
    country: z.string(),
  }),
});

export type Weather = z.infer<typeof Weather>;

const initialState = {
  name: "",
  main: {
    feels_like: 0,
    humidity: 0,
    temp: 0,
    temp_max: 0,
    temp_min: 0,
  },
  weather: [
    {
      main: "",
      icon: "",
    },
  ],
  sys: {
    country: "",
  },
};

function useWeather() {
  const [weather, setWeather] = useState<Weather>(initialState);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (search: searchType) => {
    setLoading(true);
    setWeather(initialState);
    const apiKey = import.meta.env.VITE_API;
    try {
      const getGeoURL = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${apiKey}`;
      const { data } = await axios(getGeoURL);
      const lat = data[0].lat;
      const lon = data[0].lon;

      const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
      const { data: weatherResult } = await axios.get(weatherURL);
      const result = Weather.safeParse(weatherResult);
      if (result.success) {
        setWeather(weatherResult);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    weather,
    loading,
    fetchWeather,
  };
}

export default useWeather;
