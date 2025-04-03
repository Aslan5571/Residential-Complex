import './Questions.css'
import PolygonOne from '../../assets2/Polygon2.png'
import PolygonTwo from '../../assets2/Polygon3.png'
import PolygonThree from '../../assets2/Polygon4.png'
import PolygonFour from '../../assets2/Polygon5.png'
import RectangleOne from '../../assets2/Rectangle.png'
import RectangleTwo from '../../assets2/Rectangle2.png'
import StarOne from '../../assets2/Star2.png'
import StarTwo from '../../assets2/Star3.png'

const Questions = ()=>{
    return (
        <div className="questions-container">
        <div className="questions-items">
          <div className="questions-title">
            <h1>Какая квартира <br />подойдет именно вам?</h1>
            <p>Ответьте на 4 вопроса, чтобы подобрать идеальный вариант недвижимости</p>
            <button className="go-test">Пройти тест</button>
          </div>
      
          <div className="photos-grid-inside">
            <img src={PolygonFour} alt="Пример 1"/>
            <img src={PolygonTwo} alt="Пример 2"/>
            <img src={PolygonThree} alt="Пример 3"/>
            <img src={PolygonOne} alt="Пример 4"/>
            <img src={RectangleOne} alt="Пример 5"/>
            <img src={RectangleTwo} alt="Пример 6"/>
            <img src={StarOne} alt="Пример 7"/>
            <img src={StarTwo} alt="Пример 8"/>
          </div>
        </div>
      </div>
          
      
      );
    }      

    


export default Questions;