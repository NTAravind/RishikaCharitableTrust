import React, { useEffect, useState } from 'react';
import './Carousel.css';
import c1 from '../images/co/1.jpeg';
import c2 from '../images/co/2.jpeg';
import c3 from '../images/co/3.jpeg';
const images = [
  c1,
 c2,
 c3
];

const Carousel = () => {
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }, []);
  
    const getPositionClass = (i) => {
      if (i === index) return 'center';
      if (i === (index + 1) % images.length) return 'right';
      if (i === (index - 1 + images.length) % images.length) return 'left';
      return 'hidden';
    };
  
    return (
      <div className="carousel-container">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`img-${i}`}
            className={`carousel-image ${getPositionClass(i)}`}
          />
        ))}
      </div>
    );
  };
  
  export default Carousel;
  