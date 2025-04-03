import feature   from "../../assets/flat4.png";
import './Features.css'
const Features = ()=>{
return(
    <div className="features">
    <div className="features-content">
      <h1>Наслаждайтесь видами <br />из окон своей квартиры</h1>
      <div className="image-container">
        <img src={feature} alt="Виды из окон" />
        <div className="location-buttons">
          <button className="location-btn">
            Поклонная гора
            <span className="underline"></span>
          </button>
          <button className="location-btn">
            Москва Сити
            <span className="underline"></span>
          </button>
          <button className="location-btn">
            Матвеевский лес
            <span className="underline"></span>
          </button>
          <button className="location-btn">
            Район Раменки
            <span className="underline"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
)
}
export default Features