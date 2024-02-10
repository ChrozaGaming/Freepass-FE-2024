const API_KEY = 'deea42b84e6083396d5b1c0f5ae73cff';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// fungsi untuk mendapatkan cuaca berdasarkan nama kota
async function fetchWeatherByCity(city) {
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
    const responseData = await response.json();

    if (response.ok) {
        return responseData;
    } else {
        throw new Error(responseData.message);
    }
}

export { fetchWeatherByCity };