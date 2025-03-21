import { fetchWeatherApi } from 'openmeteo';

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

let currLocation = "Toronto";
let weatherData = {};

function updateWeather() {
	if (!(currLocation in LOCATIONS)) {
		return;
	}

	const params = {
		"latitude": LOCATIONS[currLocation].latitude,
		"longitude": LOCATIONS[currLocation].longitude,
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
	const weatherData = updateWeather();

	console.log("uh");
	return (
		<div className="centered">
			<h1>Waterloo</h1>
			<p>High: {Math.round(weatherData!.tempMax)}°</p>
			<p>Low: {Math.round(weatherData!.tempMin)}°</p>
		</div>
	)
}

export default Weather;