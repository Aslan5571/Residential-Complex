import React, { useState } from 'react';
import './Gallery.css';
import slideOne from "../../assets/gallery.png";
import slideTwo from "../../assets/gallery2.png";
import slideThree from "../../assets/gallery3.png";

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { img: slideOne, wide: false },
    { img: slideTwo, wide: true },
    { img: slideThree, wide: false }
  ];

  const handleNextClick = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className='gallery-container'>
      <div className='river-container'>
        <div className='river'>
          <h1>River Line</h1>
          <p>Восемь жилых корпусов по 12-14 этажей выстроены вдоль реки Раменки</p>
        </div>
        <div className='river-button'>
          <button>Посмотреть планировки</button>
        </div>
      </div>

      <div className='gallery-wrapper'>
        {/* Кнопка влево */}
        <button 
          className={`nav-button left ${currentSlide === 0 ? 'disabled' : ''}`} 
          onClick={handlePrevClick}
          disabled={currentSlide === 0}
        >
          &lt;
        </button>

        {/* Слайдер */}
        <div className='gallery-pics-container'>
          <div className='gallery-pics' style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: 'transform 0.5s ease',
            gap: '20px'
          }}>
            {slides.map((slide, index) => (
              <div 
                key={index}
                className={`slide-item ${slide.wide ? 'wide' : 'narrow'}`}
              >
                <img 
                  src={slide.img} 
                  alt={`Корпус ${index + 1}`} 
                  className='gallery-image'
                />
              </div>
            ))}
          </div>
        </div>

        {/* Кнопка вправо */}
        <button 
          className={`nav-button right ${currentSlide === slides.length - 2 ? 'disabled' : ''}`} 
          onClick={handleNextClick}
          disabled={currentSlide === slides.length - 2}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Gallery;