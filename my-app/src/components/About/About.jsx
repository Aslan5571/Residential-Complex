import './About.css'
import frame   from "../../assets/Frame.png"

const About = () =>{
    return(
        <div className='About-container'>
         <div className='special-information'>
          <h1>Персональная презентация West Garden</h1>
          <div className='particularly'>
           <p>Подробно расскажем про жилой комплекс</p>
           <p>Ознакомитесь со всеми планировками и ценами</p>
           <p>Прогуляетесь по благоустроенной набережной</p>
          </div>
          <div className='contact-information'>
            <p>Закрепить за номером</p>
            <div className='input-button'>
               <input  type='tel'
    placeholder='+7 (___) ___-__-__'
    pattern='\+7\s?[\(]{0,1}[0-9]{3}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}'
    required
    className='phone-input'/>
               <button>Записаться на презентацию</button>
               <p>Нажимая на кнопку, вы даёте согласие 
                на обработку персональных данных и соглашаетесь c 
                политикой конфиденциальности</p>
            </div>
          </div> 
         </div> 
         <div className='for-pic'>
          <img src={frame} alt="" />
         </div>
        </div>
    )
}
export default About