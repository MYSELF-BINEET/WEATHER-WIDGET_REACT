import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
import InfoBox from './InfoBox';

function SearchBox({info}) {
  let [City,setCity]=useState("");
  let [error,setError]=useState(false);


     const API_URL="https://api.openweathermap.org/data/2.5/weather";
     const API_KEY="7086badd8eda640e6e61c5e01b569549";

     let getWeatherInfo=async(city)=>{
     try {
      
      let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse=await response.json();
      console.log(jsonResponse);

      let result={
        city:City,
        temp:jsonResponse.main.temp,
        tempmin:jsonResponse.main.temp_min,
        tempmax:jsonResponse.main.temp_max,
        hum:jsonResponse.main.humidity,
        feelslike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
     } catch (error) {
       throw error;
     }


     }


     let handleChange=(evt)=>{
      setCity(evt.target.value);
  };

    let handleSubmit=async (evt)=>{
      try {
        evt.preventDefault();
        console.log(City);
        setCity("");
        let newinfo=await getWeatherInfo(City);
        info(newinfo);
      } catch (error) {
        setError(true);
      }
      
    };
  return (
    <div className="SearchBox">
        <h3>Search For Weather</h3>
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" required value={City} onChange={handleChange}/>
        <br /><br />
        <Button variant="contained" type='submit'>
            Search
      </Button>
      {error && <p>This Place Is Not  Found In Api !</p>}
        </form>
    </div>
  )
}

export default SearchBox
