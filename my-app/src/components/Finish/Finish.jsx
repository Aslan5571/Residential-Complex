import './Finish.css'
import logo from '../../assets5/logo.png'
import logo1 from '../../assets5/logo1.png'
import map from '../../assets5/map.png'
const Finish = () =>{
    return(
        <div className='fully'>
    
        <div className="finish-h1">
       
            <h1>Жилой комплекс «West Garden» — <br />все преимущества жизни на природе</h1>
        <img src={logo} alt="" />
       
     </div>
     <div className='to-flex'>
     <div className="organisation-blocks">
        <div className='estes-experts'>
        <img src={logo1} alt="" />
        <p> эксперты <br />недвижимости</p>
        </div>
        <div className='estes-experts'>
      
        <p> Офис продаж</p>
        <h2>Москва, Локал наб. 2/4,<br />
        строение 17, офис 308</h2>
        </div>
        <div className='estes-experts'>
      
      <p> Телефон</p>
      <h2>+7 495 805 19 34</h2>
      <p>работаем</p>
      </div>
     </div>
     <div className="finish-pic">
      <img src={map} alt="" />
     </div>
     </div>
    
        </div>
    )
}
export default Finish