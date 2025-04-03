import './Design.css'
import DarkOne from '../../assets3/Dark_1.png'
import DarkTwo from '../../assets3/Dark_2.png'
import DarkThree from '../../assets3/Dark_3.png'
import LightOne from '../../assets3/Light_1.png'
import LightTwo from '../../assets3/Light_2.png'
import LightThree from '../../assets3/Light_3.png'
const Design = () =>{
    return(
       
       <div>
         <div className="design-container">
        <h1>2 варианта отделки</h1>
        <div className="light-repair">
            <div className="header-button">
            <h2>Тёмная отделка</h2>
                
                <button>Скачать дизайн-буклет</button>
                <div className='light-dark'>
                    <div className='div1'><img src={DarkOne} alt="Интерьер 1" /></div>
                    <div className='div2'><div className="content-block">
                        <p>ОСОБЕННОСТИ ИНТЕРЬЕРА</p>
                 <p>Сочетание белых стен и светлой напольной доски с 
                            текстурой дерева расширяет пространство, формируя гармоничную,
                             наполненную светом атмосферу</p></div></div>
                    <div className='div3'><img src={DarkTwo} alt="Интерьер 2" /></div>
                    <div className='div4'><img src={DarkThree} alt="Интерьер 3" /></div>
                </div>
            </div>
        </div>
    </div>
    <div className="design-container">
        
        <div className="light-repair">
            <div className="header-button">
            <h2>Светлая отделка</h2>
                <button>Скачать дизайн-буклет</button>
                <div className='light-dark'>
                    <div className='div1'><img src={LightOne} alt="Интерьер 1" /></div>
                    <div className='div2-1'><div className="content-block">
                        <p>ОСОБЕННОСТИ ИНТЕРЬЕРА</p>
                 <p>Отделка в тёмном варианте формируется за счет нейтральных оттенков стен,
                     а также напольной доски, выполненной в цвете темного 
                     дерева
                 </p></div></div>
                    <div className='div3'><img src={LightTwo} alt="Интерьер 2" /></div>
                    <div className='div4'><img src={LightThree} alt="Интерьер 3" /></div>
                </div>
            </div>
        </div>
    </div>
       </div>
   
    )
}
export default Design;