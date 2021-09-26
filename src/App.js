import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import CardBody from './components/CardBody';
import Footer from './components/Footer';

/* ---------------------------------------------------------------------------- */

function App() {
  const [input, setInput] = useState('jakarta');
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [img, setImg] = useState('');
  const [weather, setWeather] = useState('');
  const [temp, setTemp] = useState('');

  const getData = async () => {
    try {
      const resData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=cacb232f4b748d0760b2ba579000d0d8&units=metric
      `);
      setName(resData.data.name);
      setCountry(resData.data.sys.country);
      setImg(resData.data.weather[0].icon);
      setWeather(resData.data.weather[0].description);
      setTemp(resData.data.main.temp);
    } catch (e) {
      console.log(e);
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
      <CardBody
        img={img}
        temp={temp}
        name={name}
        country={country}
        weather={weather}
      />
      <Footer />
    </Container>
  );
}

export default App;
