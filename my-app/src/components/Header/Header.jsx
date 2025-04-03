import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import Logo from "../../assets/Logo.png";
import westgarden from "../../assets/westgarden.png";
import Garden from "../../assets/garden.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-container">
      <div className="header">
        <div className="logo-info">
          <img src={Logo} alt="Логотип ЖК" className="logo" />
          <p>Официальный партнер АО «КККК»</p>
        </div>
        
        <div className="menu-wrapper">
          <button className="menu-trigger" onClick={toggleMenu}>
            ☰ Разделы
          </button>
          
          {isMenuOpen && (
            <nav className="dropdown-menu">
              <Link to="/" className="menu-item" onClick={toggleMenu}>
                Главная (все компоненты)
              </Link>
              <Link to="/header" className="menu-item" onClick={toggleMenu}>
                Только Header
              </Link>
              <Link to="/map" className="menu-item" onClick={toggleMenu}>
                Только Карта
              </Link>
              <Link to="/slider" className="menu-item" onClick={toggleMenu}>
                Только Слайдер
              </Link>
              <Link to="/features" className="menu-item" onClick={toggleMenu}>
                Только Features
              </Link>
              <Link to="/about" className="menu-item" onClick={toggleMenu}>
                Только About
              </Link>
              <Link to="/gallery" className="menu-item" onClick={toggleMenu}>
                Только Gallery
              </Link>
              <Link to="/estetic" className="menu-item" onClick={toggleMenu}>
                Только Estetic
              </Link>
              <Link to="/flats" className="menu-item" onClick={toggleMenu}>
                Только Flats
              </Link>
              <Link to="/questions" className="menu-item" onClick={toggleMenu}>
                Только Questions
              </Link>
              <Link to="/otdelka" className="menu-item" onClick={toggleMenu}>
                Только Otdelka
              </Link>
              <Link to="/design" className="menu-item" onClick={toggleMenu}>
                Только Design
              </Link>
              <Link to="/develop" className="menu-item" onClick={toggleMenu}>
                Только Develop
              </Link>
              <Link to="/organisation" className="menu-item" onClick={toggleMenu}>
                Только Organisation
              </Link>
            </nav>
          )}
        </div>
        
        <div className="number">
          <p>+7 495 845 19 34</p>
          <ul>
            <li>Работаем</li>
          </ul>
        </div>
      </div>
      
      <div className="west-garden">
        <div className="west-garden__logo">
          <img src={westgarden} alt="West Garden" className="westgarden"/>
        </div>
        <div>
          <h1>Жизнь в зеленом оазисе в статусном районе Москвы</h1>
        </div>
        <p>Жилой комплекс бизнес-класса в 20 минутах от Кремля</p>
      </div>
      
      <div className="gardenpic-container">
        <img src={Garden} className="garden-pic" alt="Жилой комплекс" />
      </div>
    </div>
  );
};

export default Header;