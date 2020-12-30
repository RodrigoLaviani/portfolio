import React from 'react';
import Categories from './components/Categories';
import Carousel from './components/Carousel';
import CarouselItem from './components/CarouselItem';
import Footer from './components/Footer';
import Header from './components/Header';
import './assets/styles/components/App.scss'

const App = () => {
  // const items = new Array(5)

  return (
    <div className="App">
      <Header></Header>
      <Categories>
        <Carousel>
          <CarouselItem />
        </Carousel>
      </Categories>
      <Footer></Footer>
    </div>
  );
}

export default App;
