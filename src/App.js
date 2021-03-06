import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import CircleBlur from './components/CircleBlur';
import ErrorMessage from './components/ErrorMessage';

/* ---------------------------------------------------------------------------- */

function App() {
  // state
  const [input, setInput] = useState('jakarta');
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [img, setImg] = useState('');
  const [weather, setWeather] = useState('');
  const [temp, setTemp] = useState('');
  const [wind, setWind] = useState('');
  const [humidity, setHumidity] = useState('');
  const [visibility, setVisibility] = useState('');
  const [error, setError] = useState('d-block d-none');

  // function to get data from api
  const getData = async () => {
    try {
      const resData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=cacb232f4b748d0760b2ba579000d0d8&units=metric
    `);
      setName(resData.data.name);
      setCountry(resData.data.sys.country);
      setImg(resData.data.weather[0].icon);
      setWeather(resData.data.weather[0].description);
      setTemp(resData.data.main.temp);
      setWind(resData.data.wind.speed);
      setHumidity(resData.data.main.humidity);
      setVisibility(resData.data.visibility / 1000);
      setError('d-block d-none');
    } catch (e) {
      setError('d-block');
    }

    setInput('');
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Header
        value={input}
        changed={(e) => setInput(e.target.value)}
        clicked={getData}
      />
      <ErrorMessage show={error} />
      <Main
        img={img}
        temp={temp}
        name={name}
        country={country}
        weather={weather}
        wind={wind}
        humidity={humidity}
        visibility={visibility}
      />
      <Footer />
      <CircleBlur />
    </Container>
  );
}

export default App;
