import React, { useState } from 'react'
import SearchIcon from '../components/assets/search.png';
import ClearIcon from '../components/assets/clear.png';
import CloudeIcon from '../components/assets/cloud.png';
import DrizzleIcon from '../components/assets/drizzle.png';
import BrokenCloud from '../components/assets/broken-cloud.png';
import LightRainIcon from '../components/assets/rain.png';
import RainIcon from '../components/assets/heavy-rain.png';
import ThunderIcon from '../components/assets/thunderstorm.png';
import SnowIcon from '../components/assets/snow.png';
import HazeIcon from '../components/assets/haze.png';
import WindIcon from '../components/assets/wind.png';
import HumidityIcon from '../components/assets/humidity.png';
import TempFeelIcon from '../components/assets/temp-fee.png';
import SunriseIcon from '../components/assets/sunrise.png';

const WeatherApp = () => {

  let apiKey = "030334adc5c00b0bea8ef5166e250fc9";
  const [wicon, setWicon] = useState(ClearIcon);

  const search = async () => {
    const element = document.getElementsByClassName("city-input");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`;

    let response = await fetch(url);
    let data = await response.json()
    console.log(data);

    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temprature = document.getElementsByClassName("weather-temp");
    const weatherFeel = document.getElementsByClassName("feel-like");
    const weatherName = document.getElementsByClassName("weather-name");
    const location = document.getElementsByClassName("weather-location");
    const sunrise = document.getElementsByClassName("sunrise");
    const sunset = document.getElementsByClassName("sunset");

    humidity[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = data.wind.speed + " km/h";
    temprature[0].innerHTML = Math.round(data.main.temp) + "°c";
    weatherFeel[0].innerHTML = Math.round(data.main.feels_like) + "°c";
    weatherName[0].innerHTML = data.weather[0].description
    location[0].innerHTML = data.name;
    sunrise[0].innerHTML = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    sunset[0].innerHTML = new Date(data.sys.sunset * 1000).toLocaleTimeString();

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWicon(ClearIcon);
    }
    else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
      setWicon(CloudeIcon);
    }
    else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
      setWicon(DrizzleIcon);
    }
    else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
      setWicon(BrokenCloud);
    }
    else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
      setWicon(SnowIcon);
    }
    else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
      setWicon(LightRainIcon);
    }
    else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
      setWicon(RainIcon);
    }
    else if (data.weather[0].icon === "11d" || data.weather[0].icon === "11n") {
      setWicon(ThunderIcon);
    }
    else if (data.weather[0].icon === "50d" || data.weather[0].icon === "50n") {
      setWicon(HazeIcon);
    }
    else {
      setWicon(ClearIcon);
    }

  }

  return (
    <>
      <div className="container">
        <div className="top-bar">
          <input type="text" placeholder='Search' className="city-input" />
          <div className="search-icon" onClick={search}>
            <img src={SearchIcon} alt="" />
          </div>
        </div>

        <div className="weather-img">
          <img src={wicon} alt="" />
        </div>

        <div className="weather-temp">24°c</div>
        <div className='weather-name'>Clear</div>
        <div className="weather-location">London</div>

        <div className="data-container">
          <div className="element">
            <img src={HumidityIcon} alt="" className="icon" />
            <div className="data">
              <div className="humidity-percent">64%</div>
              <div className="text">Humidity</div>
            </div>
          </div>

          <div className="element">
            <img src={TempFeelIcon} alt="" className="icon" />
            <div className="data">
              <div className="feel-like">25°c</div>
              <div className="text">Feels like</div>
            </div>
          </div>

          <div className="element">
            <img src={WindIcon} alt="" className="icon" />
            <div className="data">
              <div className="wind-rate">18 km/h</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>

        <div className="data-container-sun">
          <div className="element">
            <img src={SunriseIcon} alt="" className="icon" />
            <div className="data">
              <div className="sunrise">6:48:00 AM</div>
              <div className="text">Sunrise</div>
            </div>
          </div>

          <div className="element">
            <img src={SunriseIcon} alt="" className="icon" />
            <div className="data">
              <div className="sunset">6:57:00 PM</div>
              <div className="text">Sunset</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WeatherApp
