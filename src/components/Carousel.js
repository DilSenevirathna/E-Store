// src/components/Carousel.js
import React from 'react';
import { Carousel } from 'react-bootstrap';

const FeaturedCarousel = () => (
  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://i.pinimg.com/736x/43/38/57/43385709b7181a454b32f6d80f4bff83.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Featured Product 1</h3>
        <p>Best product of the month.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://i.pinimg.com/736x/6d/89/21/6d8921c04e6859f98a55a60db4ef4ae9.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Featured Product 2</h3>
        <p>Highly recommended by customers.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://i.pinimg.com/736x/ee/a2/ed/eea2edf50ca1b64a77bb2a38aa77ffa0.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Featured Product 3</h3>
        <p>Special discount available now.</p>
      </Carousel.Caption>
    </Carousel.Item>
    
  </Carousel>
);

export default FeaturedCarousel;
