import { useState } from "react";

import { ButtonNav } from "../components/common/button";

type WeatherData = {
  location: {
    name: string;
    region: string;
    country: string;
    localtime: number
  };
  current: {
    temp_c: number;
    condition: { text: string, icon: string };
    feelslike_c: number
    windchill_c: number
    gust_kph: number
  };
};

export const WeatherApi = () => {
  const API_KEY = '67a009b4873d410386d161225251603';
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const fetchWeather = async () => {
    if (!inputValue) return alert('Please enter a city name!');

    setLoading(true);
    try {
      const result = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${inputValue}`
      );

      if (!result.ok) {
        throw new Error(`HTTP Error! Status: ${result.status}`);
      }

      const data: WeatherData = await result.json();
      setWeather(data);

    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="app-bar-fix hero-bg hero-center p-6">
      {loading && <p className="text-white-500 text-lg">🔎 Search for a city...</p>}

      {weather ? (
        <div className="weather-info p-4 border border-gray-300 rounded shadow-md mt-4">
          <p className="text-xl font-bold text-white-600">
            🌍 {weather.location.name}, {weather.location.region} - {weather.location.country}
          </p>

          <p className="text-lg text-primary-700">
            🕠 {weather.location.localtime}
          </p>

          <p className="text-lg text-primary-700 flex items-center gap-2">
            🌡️ {weather.current.temp_c}°C - {weather.current.condition.text} <img className="h-6 w-6]" src={weather.current.condition.icon} alt="🌁" />
          </p>
          <p className="text-lg text-primary-700 flex items-center gap-2">
            🥶 {weather.current.feelslike_c}°C - {weather.current.gust_kph} kph 🌪️
          </p>
        </div>
      ) : (
        !loading && <p className="text-red-500 text-lg">❌ Failed to fetch weather data.</p>
      )}

      <div className="mt-6 flex flex-col gap-3">
        <input
          type="text"
          value={inputValue}
          placeholder="Enter the city..."
          onChange={handleInput}
          className="p-3 w-64 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <ButtonNav
          type="submit"
          onClick={fetchWeather}
          text="Submit"
          size="medium"
          variant="primary-btn"
          className="w-64"
        />
      </div>
    </div>
  );
};