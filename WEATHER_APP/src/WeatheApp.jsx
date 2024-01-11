import SearchBox from "./searchBox";
import InfoBox from "./InfoBox";
import { useState } from 'react';



export default function WeatherApp(){
    const [weatherInfo,setweatherInfo]=useState({
        city:"Delhi",
        feelslike:24.84,
        temp:25.05,
        tempmin:25.05,
        tempmax:25.05,
        hummidity:47,
        weather:"haze",
    });
    let updateInfo=(result)=>{
        setweatherInfo(result);
    }
    return(
       <div style={{textAlign:"center"}}>
        <h2>Weather App By Coder</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
       </div>
    )
}