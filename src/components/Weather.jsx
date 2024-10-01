import React, { useEffect, useRef, useState } from "react";
import "./Weather.css";
import cloud from "../assets/cloud.png";
import cloudy from "../assets/cloudy.png";
import weather from "../assets/weather.png";
import sun from "../assets/sun.png";

const Weather = () => {

    const inputRef = useRef();
    const [weatherData, setWeatherData] = useState(false);

    const allIcons = {
        "01d" : sun,
        "02d" : cloudy
    }
  const search = async (city) => {

    if (city === "") {
        alert("please enter a city name")
        return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const icon = allIcons[data.weather[0].icon];

       setWeatherData({
        humidity: data.main.humidity,
        wind: data.wind.speed,
        temprature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon
    })
    } catch (error) {}
  };

  useEffect(() => {
    search("new york");
  }, []);

  return (
    <div className="weather">
      <div className="searchBar">
        <input ref={inputRef} type="text" placeholder="search" />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width={16}
          height={16}
          onClick={() => search(
            inputRef.current.value
          )}
          style={{ width: 50, borderRadius: 50, height: 20, cursor: "pointer" }}
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </div>

      <img src={cloud} alt="" className="WeatherBackround" />
      <p className="temprature">
        {weatherData.temp}21<sup>o</sup>c
      </p>
      <p className="city">{weatherData.location}</p>

      <div className="weatherData">
        <div className="col">
          <img src={cloudy} alt="" />
          <div>
            <p>{weatherData.humidity} %</p>
            <span>humidity</span>
          </div>
        </div>

        <div className="col">
          <img src={weather} alt="" />
          <div>
            <p>{weatherData.windSpeed}2 km/h</p>
            <span>wind speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
