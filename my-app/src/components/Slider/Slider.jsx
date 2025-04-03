import './Slider.css'
import picture1 from "../../assets/1.png"
import picture2 from "../../assets/2.png"
import picture3 from "../../assets/3.png"
import picture4 from "../../assets/4.png"
const Slider = () =>{
    return(
        <div className='slider-container'>
          <div className='slider'>
            <img src={picture1} alt="" className='pic'/>
            <img src={picture2} alt="" className='pic'/>
            <img src={picture3} alt="" className='pic'/>
            <img src={picture4} alt="" className='pic'/>
          </div>
        </div>
    )
}
export default Slider