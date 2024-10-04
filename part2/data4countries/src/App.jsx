import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const WEATHER_API = import.meta.env.VITE_WEATHER_API_KEY;
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [weather, setWeather] = useState({});

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  useEffect(() => {
    if (filteredCountries.length === 1) {
      const capital = filteredCountries[0].capital;
      axios
        .get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${capital}&appid=${WEATHER_API}`
        )
        .then((response) => {
          const lat = response.data[0].lat;
          const lon = response.data[0].lon;
          axios
            .get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API}`
            )
            .then((response) => {
              const weatherData = {
                temp: response.data.main.temp,
                wind: response.data.wind.speed,
                icon: response.data.weather[0].icon,
              };
              setWeather(weatherData);
            });
        })
        .catch((error) => console.error("Error fetching weather:", error));
    }
  }, [filteredCountries]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setCountry(inputValue);

    if (inputValue.length > 0) {
      const filtered = countries.filter((c) =>
        c.name.common.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredCountries(filtered);
    }
  };

  return (
    <>
      <h1>COUNTRY INFORMATION FINDER</h1>
      <h3>Find information about: </h3>
      <input
        value={country}
        onChange={handleInputChange}
        placeholder="Type a country name"
      />
      <button
        onClick={() => {
          setCountry("");
          setFilteredCountries("");
        }}
      >
        clear
      </button>
      {filteredCountries.length === 1 ? (
        <div>
          <h2>{filteredCountries[0].name.common}</h2>
          <p>Capital: {filteredCountries[0].capital}</p>
          <p>Area: {filteredCountries[0].area}</p>
          <h3>Languages:</h3>
          <ul>
            {Object.values(filteredCountries[0].languages).map(
              (lang, index) => (
                <li key={index}>{lang}</li>
              )
            )}
          </ul>
          <img
            src={filteredCountries[0].flags.png}
            alt={`Flag of ${filteredCountries[0].name.common}`}
            style={{ width: "100px" }}
          />
          <h3>Weather in {filteredCountries[0].capital} :</h3>
          {
            <div>
              <p>temperature: {weather.temp}</p>
              <img
                src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                alt=""
              />
              <p>wind: {weather.wind}</p>
            </div>
          }
        </div>
      ) : filteredCountries.length > 1 && filteredCountries.length < 10 ? (
        <ul>
          {filteredCountries.map((c) => (
            <li key={c.cca3}>
              {c.name.common}{" "}
              <button onClick={() => setFilteredCountries([c])}>show</button>{" "}
            </li>
          ))}
        </ul>
      ) : filteredCountries.length >= 10 ? (
        <p>Too many matches, please specify another filter</p>
      ) : (
        <p>No matches found</p>
      )}
    </>
  );
}

export default App;
