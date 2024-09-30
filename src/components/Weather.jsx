import React from "react";
import "./Weather.css";
import cloud from "../assets/cloud.png"

const Weather = () => {
  return (
    <div className="weather">
      <div className="searchBar">
        <input type="text" placeholder="search" />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width={16}
          height={16}
          style={{ width: 50, borderRadius: 50, height: 20, cursor: "pointer" }}
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </div>

      <img src={cloud} alt="" className="WeatherBackround" />
      <p className="temprature">16^c</p>
      <p className="city">Kabul</p>

      <div className="weatherData">
        <div className="col">
          <img src="" alt="" />
          <div>
            <p>79 %</p>
            <span>humidity</span>
          </div>
        </div>

        <div className="col">
          <img src="" alt="" />
          <div>
            <p>2 km/h</p>
            <span>wind speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
