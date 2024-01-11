import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import WeatherApp from './WeatheApp';
import SearchBox from './searchBox';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1621260938401-7bdad0aec8fd?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HoT_URL="https://images.unsplash.com/photo-1493936734716-77ba6da66365?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q09MRCUyMFdFQVRIRVJ8ZW58MHx8MHx8fDA%3D";
    const RAINY_URL="https://images.unsplash.com/photo-1599806112354-67f8b5425a06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";


    return(
        <div className='InfoBox'>
        
       
        <div className="cardContainer">

         <Card sx={{ maxWidth: 345 }} >

      <CardMedia
        sx={{ height: 140 }}
        image={info.hummidity>80 ? RAINY_URL : info.temp>15 ? HoT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.hummidity>80 ? <ThunderstormIcon></ThunderstormIcon>  : info.temp>15 ? <WbSunnyIcon></WbSunnyIcon>:<AcUnitIcon></AcUnitIcon>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Tempareture={info.temp}&deg;C</p>
          <p>Hummidity:{info.hum}</p>
          <p>Min Tempareture={info.tempmin}&deg;C</p>
          <p>Max Tempareture={info.tempmax}&deg;C</p>
          <p>The Weather Feels Like={info.feelslike}&deg;C</p>
          <p>Weather={info.weather}</p>
        </Typography>
      </CardContent>
     
    </Card>
</div>

 </div>
    )
}