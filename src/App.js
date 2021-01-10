import React from 'react';
import CarouselContainer from './components/CarouselContainer';
import Footer from './components/Footer';
import Header from './components/Header';
import './assets/styles/App.scss'

const App = () => {
  return (
    <div className="app">
      <Header />
      <CarouselContainer />
      <Footer />
    </div>
  );
}

export default App;
