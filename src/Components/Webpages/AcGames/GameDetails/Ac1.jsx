import './AcGlobal.css'
import ac1 from '../../../../assets/ac-posters/ac-1.png'
import Navbar from '../../../Navbar/Navbar'
import pic1 from '../../../../assets/ac1-gallery/pic1.jpg'
import pic2 from '../../../../assets/ac1-gallery/pic2.jpg'
import pic3 from '../../../../assets/ac1-gallery/pic3.jpg'
import pic4 from '../../../../assets/ac1-gallery/pic4.jpg'
import pic5 from '../../../../assets/ac1-gallery/pic5.jpg'
import pic6 from '../../../../assets/ac1-gallery/pic6.jpg'
import pic7 from '../../../../assets/ac1-gallery/pic7.jpg'
import pic8 from '../../../../assets/ac1-gallery/pic8.jpg'
import pic9 from '../../../../assets/ac1-gallery/pic9.jpg'
import pic10 from '../../../../assets/ac1-gallery/pic10.jpg'
import { useEffect, useState } from 'react'
import backBtn from '../../../../assets/back-button.png'
import { Link } from 'react-router-dom'
import ShowImg from '../../../ShowImg/ShowImg'
import Footer from '../../../Footer/Footer'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'

const Ac1 = () => {
  const [imgLink, setImgLink] = useState(null);
  const [display, setDisplay] = useState(false);
  
  useEffect(() => {
    const apiKey = 'ebecb9fad0bb4184a5498c97d7e27112';
    const gameId = '4729';

    const fetchAc1 = async () => {
      try{
        const response = await fetch(`https://api.rawg.io/api/games/${gameId}?key=${apiKey}`);

        if (!response.ok) {
          throw new Error('Could not fetch resource');
        }

        const data = await response.json();
        document.getElementById('ac1-total-reviews').innerHTML = data.reviews_count;
        document.getElementById('ac1-recommended').innerHTML = data.ratings[0].percent;
        document.getElementById('ac1-exceptional').innerHTML = data.ratings[1].percent;
        document.getElementById('ac1-boring').innerHTML = data.ratings[2].percent;
        document.getElementById('ac1-skip').innerHTML = data.ratings[3].percent;
        
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchAc1();
  }, []);

  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="container">
          <Link to='/acgames'><img className='back-btn' src={backBtn} alt="back" /></Link>
          <div className="poster-detail-container">
            <div className="poster-container">
              <img className="ac-poster" src={ac1} alt="poster" />
            </div>
            <div className="details-container">
            <h2>Assassin's Creed</h2>
            <br />
            <h4>Release Date: November 13, 2007</h4>
            <h4>Platform: Microsoft Windows, PlayStation 3, Xbox 360</h4>
            <h4>Size: 7 GB</h4>
            <br />
            <p>"Assassin's Creed," released in 2007, is an action-adventure game developed by Ubisoft Montreal. It is the first installment in the Assassin's Creed series.</p>
            </div>
          </div>
          <br />
          <div className="content-container">
            <div className="trailer-container">
              <h3>Trailer</h3>
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/RjQ6ZtyXoA0"></iframe>
              </div>
            </div>
            <br />
            <div className="key-characters-container">
              <h3>Key Characters</h3>
              <p><b>Modern Day (2012)</b></p>
              <ol>
                <li><b>Desmond Miles: </b>The protagonist in the modern-day storyline. Desmond is a descendant of a long line of Assassins. He is kidnapped by Abstergo Industries and forced to relive the genetic memories of his ancestor, Altaïr, through the Animus.</li>
                <li><b>Dr. Warren Vidic: </b>A high-ranking scientist at Abstergo Industries and the main antagonist in the modern-day storyline. He oversees Desmond's use of the Animus and has a hidden agenda related to the Templars.</li>
                <li><b>Lucy Stillman: </b>A scientist working at Abstergo Industries. She assists Desmond and is later revealed to be an undercover Assassin working against the Templars.</li>
              </ol>
              <br />
              <p><b>Altaïr's Story</b></p>
              <ol>
                <li><b>Altaïr Ibn-La'Ahad: </b>The main protagonist in the historical storyline. Altaïr is a skilled Assassin from the Levantine Brotherhood who seeks redemption after failing an important mission. He is tasked with eliminating nine key targets to restore his honor and uncover a Templar conspiracy.</li>
                <li><b>Al Mualim: </b>The Mentor of the Assassin Brotherhood and Altaïr's master. Al Mualim assigns Altaïr the mission to assassinate the nine Templar targets. He is later revealed to be a Templar himself, seeking the Apple of Eden to control humanity.</li>
                <li><b>Malik Al-Sayf: </b>A fellow Assassin who loses his brother and his arm due to Altaïr's reckless actions during the initial mission. Despite his injuries, Malik becomes a valuable ally and provides information and assistance to Altaïr.</li>
                <li><b>Robert de Sablé: </b>The Grand Master of the Knights Templar and the main antagonist in the historical storyline. He orchestrates the Templars' plans and is one of Altaïr's primary targets.</li>
                <li><b>Maria Thorpe: </b>Initially introduced as Robert de Sablé's steward, Maria is encountered by Altaïr during his mission to assassinate Robert. She later becomes an important character in the series, eventually joining the Assassins.</li>
              </ol>
            </div>
            <br />
            <div className="plot-container">
              <h3>Plot</h3>
              <p><b>Modern Day (2012)</b></p>
              <p>The story begins with Desmond Miles, a bartender, who is kidnapped by the mysterious company Abstergo Industries. Desmond learns that Abstergo is interested in his genetic memories, which can be accessed through a machine called the Animus. The Animus allows Desmond to relive the memories of his ancestors, one of whom is Altaïr Ibn-La'Ahad, a member of the Assassin Brotherhood during the Third Crusade.</p>
              <br />
              <p><b>Altaïr's Story (1191)</b></p>
              <p>The game shifts to the Third Crusade in the Holy Land, where Altaïr fails a mission to retrieve an artifact called the Apple of Eden from the Templars. His failure results in the death of one of his fellow Assassins, Malik, losing an arm, and the death of Malik's brother. As punishment, the Assassin leader, Al Mualim, demotes Altaïr to the rank of novice and gives him a chance to redeem himself by assassinating nine key targets:</p>
              <br />
              <ol>
                <li><b>Tamir: </b>A black market merchant in Damascus.</li>
                <li><b>Garnier de Naplouse: </b>The head of the Knights Hospitalier in Acre.</li>
                <li><b>Talal: </b>A slave trader in Jerusalem.</li>
                <li><b>Abu'l Nuqoud: </b>The wealthiest man in Damascus and the city's regent.</li>
                <li><b>William of Montferrat: </b>The regent of Acre.</li>
                <li><b>Majd Addin: </b>The cruel regent of Jerusalem.</li>
                <li><b>Jubair al Hakim: </b>The chief scholar in Damascus, who burns books to prevent their misuse.</li>
                <li><b>Sibrand: </b>The paranoid Grand Master of the Knights Teutonic in Acre.</li>
                <li><b>Robert de Sablé: </b>The Grand Master of the Knights Templar.</li>
              </ol>
              <br />
              <p>As Altaïr successfully assassinates each target, he discovers they are all connected as members of the Templar Order. The Templars are using their influence to manipulate the Crusades for their own benefit. Each target reveals more about the Templars' goals and the Apple of Eden.</p>
              <br />
              <p><b>Revelation and Confrontation</b></p>
              <p>After assassinating the targets, Altaïr confronts Robert de Sablé, who reveals that Al Mualim, the leader of the Assassins, is also a Templar and has betrayed the Brotherhood. Al Mualim seeks the Apple of Eden to control the minds of the people and establish peace through control.</p>
              <br />
              <p>Altaïr returns to the Assassin stronghold of Masyaf to confront Al Mualim. After a fierce battle, Altaïr defeats him and gains control of the Apple of Eden. The artifact reveals a map showing the locations of other Pieces of Eden around the world.</p>
              <br />
              <p><b>Modern Day Epilogue</b></p>
              <p>In the modern day, Desmond learns that Abstergo is the modern incarnation of the Templar Order, and they are searching for the Pieces of Eden to control humanity. Desmond also discovers he has inherited the "Eagle Vision" ability from Altaïr, allowing him to see hidden messages and symbols.</p>
              <br />
              <p>The game ends with Desmond seeing cryptic messages and symbols left by a mysterious figure, hinting at a larger conspiracy and setting the stage for the subsequent games in the series.</p>
            </div>
            <br />
            <div className="setting-container">
              <h3>Setting</h3>
              <p>The game's historical setting is one of its most praised features. It meticulously recreates the cities of Jerusalem, Acre, and Damascus with a high level of detail, capturing the atmosphere and architecture of the time.</p>
            </div>
            <br />
            <div className="gameplay-container">
              <h3>Gameplay</h3>
              <p>"Assassin's Creed" is notable for its open-world design and freedom of movement. The gameplay focuses on:</p>
              <br />
              <ul>
                <li><b>Parkour and Navigation: </b>Altaïr can climb buildings, jump between rooftops, and perform acrobatic moves to navigate through cities.</li>
                <li><b>Stealth: </b>Players must use stealth to avoid detection by enemies. Blending into crowds and hiding in plain sight are essential tactics.</li>
                <li><b>Combat: </b>The game features a mix of melee combat, counter-attacks, and use of hidden blades. Combat is realistic and requires timing and strategy.</li>
                <li><b>Investigation: </b>Before assassinating targets, players gather information by eavesdropping, interrogating informants, and completing side missions.</li>
              </ul>
            </div>
            <br />
            <div className="themes-container">
              <h3>Themes</h3>
              <p>The game explores themes of free will versus control, the nature of good and evil, and the role of the Assassins and Templars in shaping history. It also introduces the conflict between these two factions, which becomes a central element in the series.</p>
            </div>
            <br />
            <div className="reception-container">
              <h3>Reception</h3>
              <p>"Assassin's Creed" received positive reviews for its innovative gameplay mechanics, engaging storyline, and historical accuracy. It was praised for its visuals, the fluidity of its parkour system, and its ambitious open-world design. However, it also faced criticism for repetitive mission structure and some technical issues.</p>
              <br />
              <p>Overall, "Assassin's Creed" laid the foundation for one of the most successful and enduring franchises in gaming history, introducing players to a rich world of historical fiction intertwined with modern-day conspiracy.</p>
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
              <p><b>Total Reviews: </b><span id='ac1-total-reviews'></span></p>
              <br />
              <div className="reviews">
                <p><b>Exceptional: </b>%<span id='ac1-exceptional'></span></p>
                <p><b>Recommended: </b>%<span id='ac1-recommended'></span></p>
                <p><b>Boring: </b>%<span id='ac1-boring'></span></p>
                <p><b>Skip: </b>%<span id='ac1-skip'></span></p>
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

export default Ac1
