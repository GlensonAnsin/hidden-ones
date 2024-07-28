import './Background.css'
import acVideo from '../../assets/ac-vid.mp4'
import acImage1 from '../../assets/ac-landscape/ac-ls-1.jpg'
import acImage2 from '../../assets/ac-landscape/ac-ls-2.jpg'
import acImage3 from '../../assets/ac-landscape/ac-ls-3.jpeg'
import acImage4 from '../../assets/ac-landscape/ac-ls-4.jpg'
import acImage5 from '../../assets/ac-landscape/ac-ls-5.jpg'
import acImage6 from '../../assets/ac-landscape/ac-ls-6.jpg'
import acImage7 from '../../assets/ac-landscape/ac-ls-7.jpg'
import acImage8 from '../../assets/ac-landscape/ac-ls-8.jpg'
import acImage9 from '../../assets/ac-landscape/ac-ls-9.jpg'
import acImage10 from '../../assets/ac-landscape/ac-ls-10.jpg'

const Background = ({playStatus, slideCount}) => {
  if (playStatus) {
    return (
      <video className='background fade-in' autoPlay loop muted>
        <source src = {acVideo} type='video/mp4'/>
      </video>
    )
  } else if (slideCount === 0) {
    return <img className='background fade-in' src={acImage1}/>
  } else if (slideCount === 1) {
    return <img className='background fade-in' src={acImage2}/>
  } else if (slideCount === 2) {
    return <img className='background fade-in' src={acImage3}/>
  } else if (slideCount === 3) {
    return <img className='background fade-in' src={acImage4}/>
  } else if (slideCount === 4) {
    return <img className='background fade-in' src={acImage5}/>
  } else if (slideCount === 5) {
    return <img className='background fade-in' src={acImage6}/>
  } else if (slideCount === 6) {
    return <img className='background fade-in' src={acImage7}/>
  } else if (slideCount === 7) {
    return <img className='background fade-in' src={acImage8}/>
  } else if (slideCount === 8) {
    return <img className='background fade-in' src={acImage9}/>
  } else if (slideCount === 9) {
    return <img className='background fade-in' src={acImage10}/>
  }
}

export default Background
