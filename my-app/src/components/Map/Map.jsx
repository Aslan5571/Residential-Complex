import './Map.css'
import Map from "../../assets/Map.png"
const Mapic = () =>{
    return(
   <div>
   <div className='description'>
    <p>Престижное расположение</p>
    <div> <h1>Один из самых зелёных районов<br/>столицы — <span className="underline-green">Раменки</span></h1> </div>
  <div className="map-container">
  <img src={Map} alt="" className="map" />
  <div className="map-description">
   <p>ЖК West Garden окружен Матвеевским лесом, набережной реки Раменки и природным 
    заказником «Долина реки Сетунь»</p>
    <button className="button-class">Панорама района 360˚</button>
  </div>
  </div> 
   </div>
   </div>
    )
}
export default Mapic;