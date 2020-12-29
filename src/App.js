import React from 'react';
import Carousel from './components/Carousel';
import CarouselItem from './components/CarouselItem';
import Footer from './components/Footer';
import Header from './components/Header';
import './assets/styles/components/App.css'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Carousel>
        <CarouselItem></CarouselItem>
      </Carousel>
      <Footer></Footer>
    </div>
  );
}

export default App;
