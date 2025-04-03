import './Estetic.css'
import EsteticOne from "../../assets/estetic.png";
import EsteticTwo from "../../assets/estetic2.png";
import EsteticThree from "../../assets/estetic3.png";
import EsteticFourth from "../../assets/estetic4.png";
 const Estetic = () =>{
    return(
        <div className='estetic-home'>
        <div className='Estetic-container'>
          <h1 className='modern-beauty'>Современная эстетика лобби</h1>
          
          <div className='lobby-container'>
            <h2>Центральные входные группы</h2>
            
            <div className='estetic-features'>
              <p>Зоны ожидания и встреч</p>
              <p>Пост охраны</p>
              <p>Переговорная комната</p>
              <p>Колясочная</p>
            </div>
            
            <div className='estetic-gallery'>
              <img src={EsteticOne} alt="Фото входной группы 1" />
              <img src={EsteticTwo}alt="Фото входной группы 2" />
            </div>
          </div>
          
          <div className='lift-hall'></div>
        </div>
        <div className='Estetic-container'>
          <h1 className='modern-beauty'>Современная эстетика лобби</h1>
          
          <div className='lobby-container'>
            <h2>Лифтовый холл</h2>
            
            <div className='estetic-features'>
              <p>2-4 лифта</p>
              <p>Грузовые и пассажирские</p>
              <p>Ведущие производители</p>
              
            </div>
            
            <div className='estetic-gallery'>
              <img src={EsteticThree} alt="Фото входной группы 1" />
              <img src={EsteticFourth}alt="Фото входной группы 2" />
            </div>
          </div>
          
          <div className='lift-hall'></div>
        </div>
      </div>
      
      
    )
 }
export default Estetic