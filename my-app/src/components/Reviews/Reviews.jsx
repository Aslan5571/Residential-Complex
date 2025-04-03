import './Reviews.css'
import ReviewOne from "../../assets/previews.png"
import ReviewTwo from "../../assets/previews2.png"
import ReviewThree from "../../assets/previews3.png"
import { useState } from 'react'

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { img: ReviewOne, wide: false },
    { img: ReviewTwo, wide: true },
    { img: ReviewThree, wide: false }
  ];

  const handleNextClick = () => {
    // Условие для перехода на следующий слайд
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevClick = () => {
    // Условие для перехода на предыдущий слайд
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className='review-container'>
      <div className='park-container'>
        <div className='park'>
          <h1>Park Line</h1>
          <p>Семь 14-этажных жилых корпусов,  расположенных вдоль Матвеевского леса</p>
        </div>
        <div className='park-button'>
          <button>Посмотреть планировки</button>
        </div>
      </div>

      <div className='review-wrapper'>
        {/* Кнопка влево */}
        <button 
          className={`nav-button left ${currentSlide === 0 ? 'disabled' : ''}`} 
          onClick={handlePrevClick}
        >
          &lt;
        </button>

        {/* Слайдер */}
        <div className='review-pics-container'>
          <div className='review-pics' style={{
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
                  className='review-image'
                />
              </div>
            ))}
          </div>
        </div>

        {/* Кнопка вправо */}
        <button 
          className={`nav-button right ${currentSlide === slides.length - 2 ? 'disabled' : ''}`} 
          onClick={handleNextClick}
          disabled={currentSlide === slides.length - 2} // Отключаем кнопку, когда достигнут последний слайд
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Reviews;