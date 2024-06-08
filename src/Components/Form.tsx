import { useState } from "react";
import { countries } from "../data/countries";
import { searchType } from "../types/types";
import Alert from "./Alert";

export type fetchWeatherProp = {
  fetchWeather: (search: searchType) => Promise<void>
}

function Form({fetchWeather} : fetchWeatherProp) {

  const [search, setSearch] = useState<searchType>({city: "", country: ""});
  const [alert, setAlert] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    setSearch({...search, [e.target.name] : e.target.value})
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(Object.values(search).includes("")) {
      setAlert('All The fields are required')
      return
    } 

    //Render API Information
    fetchWeather(search)
    
  }

  return (
 <>

<div className="min-h-screen flex items-center justify-center bg-autum">
  <form className="bg-slate-950 p-5 rounded-lg shadow-lg max-w-md w-full" onSubmit={handleSubmit}>
    {alert && <Alert>{alert}</Alert>}
    <div className="w-full">
      <div className="flex justify-center">
        <h1 className="text-white font-semibold text-3xl p-5 m-5">
        AtmosphereWatch
        </h1>
      </div>

      <div className="flex flex-col items-start m-3">
        <label className="text-white text-xl mb-2" htmlFor="city">
          City:
        </label>
        <input
          className="w-full h-9 m-1 p-1 rounded-lg border border-slate-600 bg-white hover:bg-gray-100 focus:bg-gray-50"
          type="text"
          id="city"
          name="city"
          placeholder="Search a location..."
          value={search.city}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col items-start m-3">
        <label className="text-white text-xl mb-2" htmlFor="country">
          Country:
        </label>
        <select
          className="w-full h-9 m-1 p-1 rounded-lg border border-slate-600"
          name="country"
          id="country"
          value={search.country}
          onChange={handleChange}
        >
          <option>---Choose Country---</option>
          {countries.map(country => (
            <option value={country.code} key={country.code}>{country.country}</option>
          ))}
        </select>
      </div>

      <div className="flex justify-center">
        <input
          type="submit"
          value="Search weather"
          className="text-white text-xl m-10 p-3 rounded-md bg-red-600 hover:bg-red-800 cursor-pointer"
        />
      </div>
    </div>
  </form>
</div>







</>
  )  
  
}

export default Form;


