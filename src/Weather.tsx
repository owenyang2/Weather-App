import { fetchWeatherApi } from 'openmeteo';
import { useState, useEffect } from 'react';

let LOCATIONS: {[location: string]: {[key: string]: number;}} = {
	Toronto: {
		"latitude": 43.6532,
		"longitude": -79.3832	
	},
	
	Waterloo: {
		"latitude": 43.4668,
		"longitude": -80.5164
	},
}

async function updateWeather(location: string) {
	if (!(location in LOCATIONS)) {
		return null;
	}

	const params = {
		"latitude": LOCATIONS[location].latitude,
		"longitude": LOCATIONS[location].longitude,
		"daily": ["temperature_2m_max", "temperature_2m_min"],
		"timezone": "America/New_York",
		"forecast_days": 1
	};
	
	const url = "https://api.open-meteo.com/v1/forecast";
	const response = (await fetchWeatherApi(url, params))[0];
	const daily = response.daily()!;
	
	return {
		tempMax: daily.variables(0)!.valuesArray()![0],
		tempMin: daily.variables(1)!.valuesArray()![0],
	};	
}

function Weather() {
	let currLocation = "Toronto";
	const [weatherData, setWeatherData] = useState<{ tempMax: number; tempMin: number } | null>(null);
  
	useEffect(() => {
		updateWeather(currLocation).then((data) => {
		if (data) setWeatherData(data);
	  });
	}, []);
  
	return (
	  <div className="centered">
		<h1>{currLocation}</h1>
		{weatherData ? (
		  <>
			<p>High: {Math.round(weatherData.tempMax)}°</p>
			<p>Low: {Math.round(weatherData.tempMin)}°</p>
		  </>
		) : (
		  <p>Loading...</p>
		)}
	  </div>
	);
  }
  
export default Weather;