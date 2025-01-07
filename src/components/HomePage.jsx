import React, { useState } from 'react';
import Weather from '../weather/weather';
import Info from '../weather/info';
import Form from '../weather/form';

const API_KEY = '7c103622efc634160ce710fe05c1ec22';

const HomePage = () => {
  const [weather, setWeather] = useState({
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined,
  });

  const gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (!city) {
      setWeather({ ...weather, error: 'Введите название города' });
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) throw new Error('Не удалось получить данные о погоде');

      const data = await response.json();

      setWeather({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
        sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
        error: '',
      });
    } catch (error) {
      console.error('Ошибка при запросе:', error);
      setWeather({ ...weather, error: 'Не удалось получить данные о погоде' });
    }
  };

  return (
    <div>
      <h1>Добро пожаловать на главную страницу!</h1>
      <Form weatherMethod={gettingWeather} />
      <Info />
      <Weather
        temp={weather.temp}
        city={weather.city}
        country={weather.country}
        sunset={weather.sunset}
        sunrise={weather.sunrise}
        error={weather.error}
      />
    </div>
  );
};

export default HomePage;
