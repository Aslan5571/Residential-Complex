import './Flats.css';
import flatone from "../../assets/flat.png"
import flattwo from "../../assets/flat2.png"
import array from "../../assets/array.png"
import flatthree from "../../assets/flat3.png"
import flatfour from "../../assets/flat4.1.png"
const Flats = () => {
  return (
    <div class='flats-container'>
  <h1 class="flats-title">
    Более 100 свободных квартир<br/>
    <span>редких форматов</span>
  </h1>
  
  <div class='flats-grid'>
   
    <div class='flats-item'>
      <div class='flats-content'>
        <div class='flats-text'>
          <h2>Свободная планировка, возможность объединить квартиры до 500 м²</h2>
          <div class='flats-information '>
            Не ограничивайте себя при создании жилого пространства Вашей мечты,
            воспользуйтесь возможностью увеличения площади до комфортного Вам размера
          </div>
          <div class='flats-cta'>
            <a href="#" class='flats-link'>Узнать стоимость</a>
            <img src={array} alt="" class='flats-arrow'/>
          </div>
        </div>
        <div class='flats-image'>
          <img src={flatone} alt="Пример квартиры" class='flats-photo'/>
        </div>
      </div>
    </div>
    
  
    <div class='flats-item'>
      <div class='flats-content'>
        <div class='flats-text'>
          <h2>Настоящий дровяной камин</h2>
          <div class='flats-information '>
            В пентхаусах предусмотрен дымоход с 
            возможностью установки камина, чтобы Вы получали 
            наслаждение от живого тепла в холодное время года
          </div>
          <div class='flats-cta'>
            <a href="#" class='flats-link'>Узнать стоимость</a>
            <img src={array} alt="" class='flats-arrow'/>
          </div>
        </div>
        <div class='flats-image'>
          <img src={flattwo} alt="Пример квартиры" class='flats-photo'/>
        </div>
      </div>
    </div>
    
  
    <div class='flats-item'>
      <div class='flats-content'>
        <div class='flats-text'>
          <h2>Собственная терраса до 17 м²</h2>
          <div class='flats-information'>
            Современная террасса c 
            необыкновенными видами на благоустроенную 
            набережную, МГУ им. М.В. Ломоносова и Воробьевы горы
          </div>
          <div class='flats-cta'>
            <a href="#" class='flats-link'>Узнать стоимость</a>
            <img src={array} alt="" class='flats-arrow'/>
          </div>
        </div>
        <div class='flats-image'>
          <img src={flatthree} alt="Пример квартиры" class='flats-photo'/>
        </div>
      </div>
    </div>
    
  
    <div class='flats-item'>
      <div class='flats-content'>
        <div class='flats-text'>
          <h2>Увеличенная высота потолка</h2>
          <div class='flats-information '>
            Почувствуйте простор помещений 
            в полной мере с увеличенной высотой потолка 4,2 м
          </div>
          <div class='flats-cta'>
            <a href="#" class='flats-link'>Узнать стоимость</a>
            <img src={array} alt="" class='flats-arrow'/>
          </div>
        </div>
        <div class='flats-image'>
          <img src={flatfour} alt="Пример квартиры" class='flats-photo'/>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Flats;