import React from 'react'
import Header from './components/Header/Header.jsx'
import Home from './views/Home.jsx'
import Pokemon from './views/Pokemon.jsx'

import { GlobalStyle } from './GlobalStyle'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:pokemonId" element={<Pokemon />} />
    </Routes>
    <GlobalStyle />
  </Router>
)


export default App