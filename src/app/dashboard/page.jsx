"use client";
import { useState } from "react";
import WeatherCard from "@/components/WeatherCard";

export default function Dashboard() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const res = await fetch(`/api/weather?city=${city}`);
    const data = await res.json();
    setWeather(data);
    setCity('')
    
  };

  return (
    <div className="p-10 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 p-1">Weather Dashboard</h1>

      <div className="flex gap-2 mb-4">
        <input
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border p-2 flex-1"
        />
        <button
          onClick={fetchWeather}
          className="bg-blue-500 text-white p-2  cursor-pointer rounded-3xl"
        >
          Search
        </button>
      </div>

      
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}
