import React from 'react';
import '../assets/styles/components/CarouselItem.scss'

const CarouselItem = () => (
    <div className="carousel-item">
        <img className="carousel-item__img" alt="" />
        <div className="carousel-item__details">
            <p className="carousel-item__details--title">Hola</p>
        </div>
    </div>
);

export default CarouselItem;