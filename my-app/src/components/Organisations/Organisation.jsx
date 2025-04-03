import './Organisation.css'

import './Organisation.css';
import Onepng from '../../assets4/1.png';
import Twopng from '../../assets4/2.png';
import Threepng from '../../assets4/3.png';
import Fourpng from '../../assets4/4.png';
import Fivepng from '../../assets4/5.png';
import Sixpng from '../../assets4/6.png';
import Sevenpng from '../../assets4/7.png';
import Eightpng from '../../assets4/8.png';
import Ninepng from '../../assets4/9.png';
import Tenpng from '../../assets4/10.png';
import Elevenpng from '../../assets4/11.png';
import Twelvepng from '../../assets4/12.png';
import Thirteenpng from '../../assets4/13.png';
import Fourteenpng from '../../assets4/14.png';
import Fifteenpng from '../../assets4/15.png';
import Sixteenpng from '../../assets4/16.png';
import Seventeenpng from '../../assets4/17.png';
import Eighteenpng from '../../assets4/18.png';
import Nineteenpng from '../../assets4/19.png';
import Twentypng from '../../assets4/20.png';

const Organisation = () => {
  const bankLogos = [
    Onepng, Twopng, Threepng, Fourpng, Fivepng,
    Sixpng, Sevenpng, Eightpng, Ninepng, Tenpng,
    Elevenpng, Twelvepng, Thirteenpng, Fourteenpng, Fifteenpng,
    Sixteenpng, Seventeenpng, Eighteenpng, Nineteenpng, Twentypng
  ];

  return (
    <div className='organisation-container'>
      <h1>Самые выгодные условия<br /> кредитования от 20 банков</h1>
      <div className="parent">
        {bankLogos.map((logo, index) => (
          <div key={index} className="bank-logo">
            <img src={logo} alt={`Банк ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Organisation;