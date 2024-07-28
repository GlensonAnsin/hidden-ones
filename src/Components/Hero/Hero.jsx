import './Hero.css'
import playBtn from '../../assets/play-button.png'
import pauseBtn from '../../assets/pause-button.png'

const Hero = ({heroData, setSlideCount, slideCount, setPlayStatus, playStatus}) => {
  return (
    <div className='hero'>
        <div className="hero-text">
            <p>{heroData.text1}</p>
            <p>{heroData.text2}</p>
        </div>
        <div className="hero-dot-play">
            <ul className="hero-dots">
                <li onClick = {() => setSlideCount(0)} className = {slideCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
                <li onClick = {() => setSlideCount(1)} className = {slideCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
                <li onClick = {() => setSlideCount(2)} className = {slideCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
                <li onClick = {() => setSlideCount(3)} className = {slideCount === 3 ? "hero-dot orange" : "hero-dot"}></li>
                <li onClick = {() => setSlideCount(4)} className = {slideCount === 4 ? "hero-dot orange" : "hero-dot"}></li>
                <li onClick = {() => setSlideCount(5)} className = {slideCount === 5 ? "hero-dot orange" : "hero-dot"}></li>
                <li onClick = {() => setSlideCount(6)} className = {slideCount === 6 ? "hero-dot orange" : "hero-dot"}></li>
                <li onClick = {() => setSlideCount(7)} className = {slideCount === 7 ? "hero-dot orange" : "hero-dot"}></li>
                <li onClick = {() => setSlideCount(8)} className = {slideCount === 8 ? "hero-dot orange" : "hero-dot"}></li>
                <li onClick = {() => setSlideCount(9)} className = {slideCount === 9 ? "hero-dot orange" : "hero-dot"}></li>
            </ul>
            <div className="hero-play">
                <img onClick={() => setPlayStatus(!playStatus)} src = {playStatus ? pauseBtn : playBtn} />
                <p>Play video</p>
            </div>
        </div>
    </div>
  )
}

export default Hero
