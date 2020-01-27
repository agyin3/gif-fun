import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Route } from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import GifList from './components/GifList';
import StickersList from './components/StickersList'

function App() {
  const [query, setQuery] = useState('random')
  const [gifs, setGifs] = useState()
  const [stickers, setStickers] = useState()

  useEffect(() => {
      axios.get(`https://api.giphy.com/v1/gifs/search?api_key=C9FXZ8FuWmwXzHDo9CNQ8bueSEhjfXV8&q=${query}&weirdness=3`)
        .then(res => {
          console.log(res)
          setGifs(res.data.data)
        })
        .catch(err => {
          console.log(err.errorMessage)
        })
  }, [query])

  useEffect(() => {
    axios.get(`https://api.giphy.com/v1/stickers/search?api_key=C9FXZ8FuWmwXzHDo9CNQ8bueSEhjfXV8&q=${query}&weirdness=3`)
      .then(res => {
        console.log(res)
        setStickers(res.data.data)
      })
      .catch(err => {
        console.log(err.errorMessage)
      })
}, [query])

  return (
    <div className="App">
      <Header setQuery={setQuery} />
      <Route exact path='/'>
        <GifList gifs={gifs} />
      </Route>
      <Route exact path='/stickers'>
        <StickersList stickers={stickers} />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
