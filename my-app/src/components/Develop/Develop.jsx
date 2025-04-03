import './Develop.css'
import Inteco from "../../assets3/inteco.png"
const Develop = () => {
    return(
     <div className='biggie'>
        <div className='inteco-content' style={{ backgroundImage: `url(${Inteco})` }}>
    
    <div className='h1-docs'>
      <div className="title-section">
        <h1>Девелопер <br />ИНТЕКО</h1>
      </div>
      <div className="docs-section">
        <div className="docs">
          <h3>Документы West Garden</h3>
          <p>
            <span className='underline'>Проектная документация</span><br />
            <span className='underline'>Разрешение на строительство</span><br />
            <span className='underline'>Проектная декларация (1 очередь)</span> <br />
           <span className='underline'> Проектная декларация (2 очередь)</span>
          </p>
        </div>
      </div>
    </div>
    <div className='realisation'>
      <p>Реализует лучшие проекты в сфере<br />
           недвижимости на основе анализа<br />
            и прогноза предпочтений человека</p> </div>
            <div className='container-advertising'>
            <div className="advertisment">
              <h2>20 лет</h2>
              <p>на рынке недвижимости<br /> Москвы и регионов</p>
            </div>
            <div className="advertisment">
              <h2>80+ проектов</h2>
              <p>жилых домов сдано в Москве</p>
            </div>
            <div className="advertisment">
              <h2>5 000 000 м²</h2>
              <p>общая площадь готовых<br /> объектов</p>
            </div>
            <div className="advertisment">
              <h2>500 сотрудников</h2>
              <p>в штате компании</p>
            </div>
            </div>
          
  </div>
     </div>
    )

}
export default Develop;