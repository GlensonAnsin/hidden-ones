import './AcGlobal.css'
import acShadows from '../../../../assets/ac-posters/ac-shadows.png'
import Navbar from '../../../Navbar/Navbar'
import pic1 from '../../../../assets/acshadows-gallery/pic1.jpeg'
import pic2 from '../../../../assets/acshadows-gallery/pic2.jpeg'
import pic3 from '../../../../assets/acshadows-gallery/pic3.png'
import pic4 from '../../../../assets/acshadows-gallery/pic4.jpeg'
import pic5 from '../../../../assets/acshadows-gallery/pic5.jpeg'
import pic6 from '../../../../assets/acshadows-gallery/pic6.png'
import pic7 from '../../../../assets/acshadows-gallery/pic7.png'
import pic8 from '../../../../assets/acshadows-gallery/pic8.jpeg'
import pic9 from '../../../../assets/acshadows-gallery/pic9.jpeg'
import pic10 from '../../../../assets/acshadows-gallery/pic10.jpeg'
import backBtn from '../../../../assets/back-button.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ShowImg from '../../../ShowImg/ShowImg'
import Footer from '../../../Footer/Footer'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'

const AcShadows = () => {
  const [imgLink, setImgLink] = useState(null);
  const [display, setDisplay] = useState(false);

  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="container">
          <Link to='/acgames'><img className='back-btn' src={backBtn} alt="back" /></Link>
          <div className="poster-detail-container">
            <div className="poster-container">
              <img className="ac-poster" src={acShadows} alt="poster" />
            </div>
            <div className="details-container">
            <h2>Assassin's Creed Shadows</h2>
            <br />
            <h4>Release Date: November 12, 2024</h4>
            <h4>Platform: Microsoft Windows, PlayStation 5, Xbox Series X and Series S, macOS</h4>
            <h4>Size: N/A</h4>
            <br />
            <p>"Assassin's Creed Shadows," set to release on November 15, 2024, takes the franchise to feudal Japan during the late Sengoku period. The game features two protagonists: Yasuke, an African samurai based on a real historical figure, and Naoe, a skilled shinobi. The story spans from 1579 into the early 1580s, highlighting the clash between the Assassins and the Order of the Ancients.</p>
            </div>
          </div>
          <br />
          <div className="content-container">
            <div className="trailer-container">
              <h3>Trailer</h3>
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/vovkzbtYBC8"></iframe>
              </div>
            </div>
            <br />
            <div className="key-characters-container">
              <h3>Key Characters</h3>
              <ol>
                <li><b>Yasuke: </b>An African samurai serving under Oda Nobunaga.</li>
                <li><b>Naoe: </b>A shinobi working with the Hidden Ones to uncover and thwart the Order of the Ancients.</li>
                <li><b>Oda Nobunaga: </b>A powerful daimyo and Yasuke's master.</li>
                <li><b>Order of the Ancients Members: </b>Antagonists seeking to control Japan.</li>
              </ol>
            </div>
            <br />
            <div className="plot-container">
              <h3>Plot</h3>
              <p>The narrative follows Yasuke, who arrives in Japan with Jesuit missionaries and becomes a samurai under Oda Nobunaga. Alongside Naoe, a shinobi with ties to the Hidden Ones, Yasuke uncovers and battles the machinations of the Order of the Ancients. The protagonists’ paths intertwine as they strive to protect Japan from internal and external threats, delving into personal growth and the essence of their roles.</p>
            </div>
            <br />
            <div className="setting-container">
              <h3>Setting</h3>
              <p>The game is primarily set in:</p>
              <br />
              <ol>
                <li><b>Kyoto: </b>The cultural and political hub of Japan.</li>
                <li><b>Azuchi-Momoyama period Japan: </b>Featuring diverse landscapes including bustling cities, serene temples, and hidden villages.</li>
              </ol>
            </div>
            <br />
            <div className="gameplay-container">
              <h3>Gameplay</h3>
              <ul>
                <li><b>Stealth and Combat: </b>Emphasis on traditional stealth mechanics and katana-based combat.</li>
                <li><b>Parkour and Exploration: </b>Enhanced movement across rooftops and varied terrains.</li>
                <li><b>Dual Protagonist System: </b>Players can switch between Yasuke and Naoe, each with unique abilities and missions.</li>
                <li><b>Dynamic Weather and Seasons: </b>Impacting gameplay and strategy.</li>
              </ul>
            </div>
            <br />
            <div className="themes-container">
              <h3>Themes</h3>
              <ol>
                <li><b>Cultural Integration and Identity: </b>Yasuke's journey as a foreigner in Japan.</li>
                <li><b>Honor and Duty: </b>Central to the samurai and shinobi codes.</li>
                <li><b>Power and Corruption: </b>The struggle against the Order of the Ancients.</li>
                <li><b>Personal Growth: </b>Character development through trials and challenges.</li>
              </ol>
            </div>
            <br />
            <div className="reception-container">
              <h3>Reception</h3>
              <p>"Assassin's Creed Shadows" has generated both excitement and controversy. The inclusion of Yasuke, an African samurai, has been praised for its originality but also faced criticism from some fans. The setting and dual protagonists have been highly anticipated, and early impressions highlight the game's ambitious blend of historical accuracy and creative storytelling.</p>
            </div>
            <br />
            <div className="gallery-container">
              <h3>Gallery</h3>
              <div className="pic-container">
                <div onClick={() => setDisplay(true)} className="pic">
                  <img onClick={() => setImgLink(pic1)} src={pic1} alt="picture" />
                </div>
                <div onClick={() => setDisplay(true)} className="pic">
                  <img onClick={() => setImgLink(pic2)} src={pic2} alt="picture" />
                </div>
                <div onClick={() => setDisplay(true)} className="pic">
                  <img onClick={() => setImgLink(pic3)} src={pic3} alt="picture" />
                </div>
                <div onClick={() => setDisplay(true)} className="pic">
                  <img onClick={() => setImgLink(pic4)} src={pic4} alt="picture" />
                </div>
                <div onClick={() => setDisplay(true)} className="pic">
                  <img onClick={() => setImgLink(pic5)} src={pic5} alt="picture" />
                </div>
                <div onClick={() => setDisplay(true)} className="pic">
                  <img onClick={() => setImgLink(pic6)} src={pic6}alt="picture" />
                </div>
                <div onClick={() => setDisplay(true)} className="pic">
                  <img onClick={() => setImgLink(pic7)} src={pic7} alt="picture" />
                </div>
                <div onClick={() => setDisplay(true)} className="pic">
                  <img onClick={() => setImgLink(pic8)} src={pic8} alt="picture" />
                </div>
                <div onClick={() => setDisplay(true)} className="pic">
                  <img onClick={() => setImgLink(pic9)} src={pic9} alt="picture" />
                </div>
                <div onClick={() => setDisplay(true)} className="pic">
                  <img onClick={() => setImgLink(pic10)} src={pic10} alt="picture" />
                </div>
              </div>
            </div>
            <br />
            <div className="reviews-container">
              <h3>Reviews</h3>
              <p>Reviews based on RAWG data:</p>
              <br />
              <p><b>Total Reviews: </b><span id='ac1-total-reviews'>N/A</span></p>
              <br />
              <div className="reviews">
                <p><b>Exceptional: </b><span id='ac1-exceptional'>N/A</span></p>
                <p><b>Recommended: </b><span id='ac1-recommended'>N/A</span></p>
                <p><b>Boring: </b><span id='ac1-boring'>N/A</span></p>
                <p><b>Skip: </b><span id='ac1-skip'>N/A</span></p>
              </div>
            </div>
            <br />
          </div>
        </div>
        <ShowImg 
          imgLink = {imgLink}
          display = {display}
          setDisplay = {setDisplay}
        />
        <Footer />
    </div>
  )
}

export default AcShadows
