import React from "react";
import { useState } from "react";

const api = {
  key: "efeab354bd29fbe85d0e73b078075f46",
  base: "https://api.openweathermap.org/data/2.5/",
};

const Home = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const handleClick = (e) => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setQuery("");
      });
  };

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
        });

        
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear();
   

    return `${day},${date} ${month} ${year}`
  };
  return (
    <div className="main">
      <div className="search_box">
        <input
          type="text"
          placeholder="search.."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search || handleClick}
        />
        <i className="fas fa-search" onClick={handleClick}></i>
      </div>

      {typeof weather.main != "undefined" ? (
        <div className="info">
          <div className="location">
            <h1>
              {weather.name},{weather.sys.country}
            </h1>
          </div>
          <div className="date">{dateBuilder(new Date())}</div>
          <div className="weather">
            <h2 className="temp">{Math.round(weather.main.temp)}°C</h2>
            <h3 className="condition">{weather.weather[0].main}</h3>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
