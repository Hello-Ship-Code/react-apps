import { useEffect, useState } from "react";

type WeatherData = {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_c: number;
    condition: { text: string };
  };
};

export const WeatherApi = () => {
  const API_KEY = '67a009b4873d410386d161225251603';
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const result = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Paris`
        );

        if (!result.ok) {
          throw new Error(`HTTP Error! Status: ${result.status}`);
        }

        const data: WeatherData = await result.json();
        console.log('API Response:', data); // ✅ Log API response
        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  console.log('Weather State in JSX:', weather); // ✅ Check state in JSX

  return (
    <div className="app-bar-fix">
      {loading && <p>Loading...</p>}

      {/* ✅ Correct Conditional Rendering */}
      {weather ? (
        <p>
          🌍 {weather.location.name}, {weather.location.country} <br />
          🌡️ {weather.current.temp_c}°C - {weather.current.condition.text}
        </p>
      ) : (
        !loading && <p>❌ Failed to fetch weather data.</p>
      )}
    </div>
  );
};