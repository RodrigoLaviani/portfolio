import React from 'react';
import '../assets/styles/components/CarouselItem.scss'

const CarouselItem = () => (
    <div className="carousel-item">
        <img className="carousel-item__img" alt="" />
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--img" alt="Play Icon" />
                <img className="carousel-item__details--img" alt="Plus Icon" />
            </div>
            <p className="carousel-item__details--title">Hola</p>
        </div>
    </div>
);

export default CarouselItem;