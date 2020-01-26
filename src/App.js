import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Footer from './components/Footer';

function App() {
  const [query, setQuery] = useState('random')
  const [gifs, setGifs] = useState()

  useEffect(() => {
      axios.get(`api.giphy.com/v1/gifs/translate?api_key=C9FXZ8FuWmwXzHDo9CNQ8bueSEhjfXV8&s=${query}&weirdness=3`)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err.errorMessage)
        })
  }, [query])

  return (
    <div className="App">
      <Footer />
    </div>
  );
}

export default App;
