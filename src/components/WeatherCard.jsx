export default function WeatherCard({ weather }) {
  if (!weather || !weather.main) return null;

  return (
    <div className="border p-5 rounded-2xl shadow-md bg-white dark:bg-gray-800 text-center">
      <h2 className="text-2xl font-bold mb-2">{weather.name}</h2>

      <p className="text-4xl font-semibold mb-2">
        {weather.main.temp}°C
      </p>

      <p className="capitalize mb-2">
        {weather.weather[0].description}
      </p>

      <div className="flex justify-around mt-4 text-sm">
        <div>
          <p className="font-semibold">Humidity</p>
          <p>{weather.main.humidity}%</p>
        </div>

        <div>
          <p className="font-semibold">Feels Like</p>
          <p>{weather.main.feels_like}°C</p>
        </div>
      </div>
    </div>
  );
}
