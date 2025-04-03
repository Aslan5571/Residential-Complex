import './Otdelka.css'
import FrameOne from '../../assets3/Frame1.png'
import FrameTwo from '../../assets3/Frame2.png'
import FrameThree from '../../assets3/Frame3.png'
const Otdelka = () =>{
    return(
        <div className="otdelka-container">
  <div className="otdelka-header">
    <h1>Отделка от застройщика</h1>
    <p className="subtitle">Экономьте на стоимости ремонта, покупая квартиру с готовой отделкой</p>
  </div>
  
  <div className='otdelka-varities'>
    <div className='otdelka-items'>
      <div className="image-wrapper">
        <img src={FrameOne} alt="Дизайн-проект" />
      </div>
      <div className="content">
        <h2>Готовый дизайн-проект</h2>
        <p>Воспользуйтесь возможностью сразу же заняться меблировкой и благоустройством новой квартиры, как только получите ключи</p>
      </div>
    </div>
    
    <div className='otdelka-items'>
      <div className="image-wrapper">
        <img src={FrameTwo} alt="Чистота и тишина" />
      </div>
      <div className="content">
        <h2>Чистота и тишина, без шума и пыли</h2>
        <p>Забудьте шум от «бесконечного ремонта» соседей и лифт, декорированный защитными материалами</p>
      </div>
    </div>
    
    <div className='otdelka-items'>
      <div className="image-wrapper">
        <img src={FrameThree} alt="Выгода" />
      </div>
      <div className="content">
        <h2>Выгода за счет оптовых закупок</h2>
        <p>Благодаря оптовым закупкам застройщика, вы получаете возможность сэкономить на стоимости ремонта</p>
      </div>
    </div>
  </div>
</div>
    )
}
export default Otdelka;