import './AcGlobal.css'
import acRev from '../../../../assets/ac-posters/ac-revelations.png'
import Navbar from '../../../Navbar/Navbar'
import pic1 from '../../../../assets/acrev-gallery/pic1.jpg'
import pic2 from '../../../../assets/acrev-gallery/pic2.jpg'
import pic3 from '../../../../assets/acrev-gallery/pic3.jpg'
import pic4 from '../../../../assets/acrev-gallery/pic4.jpg'
import pic5 from '../../../../assets/acrev-gallery/pic5.jpg'
import pic6 from '../../../../assets/acrev-gallery/pic6.jpg'
import pic7 from '../../../../assets/acrev-gallery/pic7.jpg'
import pic8 from '../../../../assets/acrev-gallery/pic8.jpg'
import pic9 from '../../../../assets/acrev-gallery/pic9.jpg'
import pic10 from '../../../../assets/acrev-gallery/pic10.jpg'
import { useEffect, useState } from 'react'
import backBtn from '../../../../assets/back-button.png'
import { Link } from 'react-router-dom'
import ShowImg from '../../../ShowImg/ShowImg'
import Footer from '../../../Footer/Footer'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'

const AcRev = () => {
  const [imgLink, setImgLink] = useState(null);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const apiKey = 'ebecb9fad0bb4184a5498c97d7e27112';
    const gameId = '4358';

    const fetchAcRev = async () => {
      try{
        const response = await fetch(`https://api.rawg.io/api/games/${gameId}?key=${apiKey}`);

        if (!response.ok) {
          throw new Error('Could not fetch resource');
        }

        const data = await response.json();
        console.log(data);
        document.getElementById('acrev-total-reviews').innerHTML = data.reviews_count;
        document.getElementById('acrev-recommended').innerHTML = data.ratings[0].percent;
        document.getElementById('acrev-exceptional').innerHTML = data.ratings[1].percent;
        document.getElementById('acrev-boring').innerHTML = data.ratings[2].percent;
        document.getElementById('acrev-skip').innerHTML = data.ratings[3].percent;
        
      } catch (error) {
        console.error(error);
      }
    }
    fetchAcRev();
  }, [])

  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="container">
          <Link to='/acgames'><img className='back-btn' src={backBtn} alt="back" /></Link>
          <div className="poster-detail-container">
            <div className="poster-container">
              <img className="ac-poster" src={acRev} alt="poster" />
            </div>
            <div className="details-container">
            <h2>Assassin's Creed Revelations</h2>
            <br />
            <h4>Release Date: November 15, 2011</h4>
            <h4>Platform: Microsoft Windows, PlayStation 3, PlayStation 4, Nintendo Switch, Xbox 360, Xbox One, GeForce Now</h4>
            <h4>Size: 12 GB</h4>
            <br />
            <p>"Assassin's Creed Revelations," released in 2011, is the fourth major installment in the Assassin's Creed series, developed by Ubisoft Montreal. The game serves as a continuation of the story of both Ezio Auditore and Desmond Miles, intertwining their narratives across different time periods.</p>
            </div>
          </div>
          <br />
          <div className="content-container">
            <div className="trailer-container">
              <h3>Trailer</h3>
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/753327AMNIM"></iframe>
              </div>
            </div>
            <br />
            <div className="key-characters-container">
              <h3>Key Characters</h3>
              <p><b>Modern Day (2012)</b></p>
              <ol>
                <li><b>Desmond Miles: </b>The modern-day protagonist who relives Ezio Auditore's memories through the Animus to stabilize his own mind.</li>
                <li><b>Lucy Stillman: </b>An undercover Assassin who guides Desmond and the team in their efforts to uncover the secrets within Ezio's memories.</li>
                <li><b>Shaun Hastings: </b>A historian and member of Desmond's team, providing research and support during their exploration of Ezio's memories.</li>
                <li><b>Rebecca Crane: </b>A technician and member of Desmond's team, responsible for maintaining and operating the Animus during their missions.</li>
                <li><b>William Miles: </b>Desmond's father and the leader of the modern-day Assassin Brotherhood, guiding the team's actions against the Templars.</li>
              </ol>
              <br />
              <p><b>Ezio's Story</b></p>
              <ol>
                <li><b>Ezio Auditore da Firenze: </b>TThe main protagonist of the game, now an older Master Assassin on a quest to uncover the secrets of Altaïr Ibn-La'Ahad and protect the Assassin Brotherhood.</li>
                <li><b>Altaïr Ibn-La'Ahad: </b>The legendary Mentor of the Assassin Brotherhood during the Third Crusade and Ezio's predecessor. His legacy and secrets play a significant role in the game.</li>
                <li><b>Suleiman I: </b>The young and progressive Sultan of the Ottoman Empire, who forms an alliance with Ezio and the Assassins against the Templars.</li>
                <li><b>Yusuf Tazim: </b>The charismatic leader of the Ottoman Assassins in Constantinople, assisting Ezio in navigating the city and combating the Templars.</li>
                <li><b>Manuel Palaiologos: </b>A high-ranking member of the Byzantine Templar Order and the primary antagonist in Constantinople, seeking to destabilize the city and seize power.</li>
                <li><b>Ahmet: </b>Suleiman's ambitious uncle and a key player in the political intrigue within the Ottoman Empire. His actions have far-reaching consequences for Ezio and the Assassins.</li>
                <li><b>Sophia Sartor: </b>A bookish and independent woman who becomes romantically involved with Ezio in Constantinople. She owns a bookstore and assists Ezio in his quest.</li>
                <li><b>Shahkulu: </b>A formidable and brutal leader of a Janissary faction in Constantinople, allied with the Templars and posing a significant threat to Ezio.</li>
                <li><b>Tarik Barleti: </b>An influential captain of the Janissaries and a potential ally or adversary depending on Ezio's actions in Constantinople.</li>
              </ol>
            </div>
            <br />
            <div className="plot-container">
              <h3>Plot</h3>
              <p><b>Modern Day (2012)</b></p>
              <p>The story begins with Desmond Miles, a bartender, who is kidnapped by the mysterious company Abstergo Industries. Desmond learns that Abstergo is interested in his genetic memories, which can be accessed through a machine called the Animus. The Animus allows Desmond to relive the memories of his ancestors, one of whom is Altaïr Ibn-La'Ahad, a member of the Assassin Brotherhood during the Third Crusade.</p>
              <br />
              <p><b>Ezio's Story (1511-1512)</b></p>
              <br />
              <p><b>Masyaf and Constantinople (1511)</b></p>
              <p>Ezio Auditore, now an older and wiser Master Assassin, travels to Masyaf, the ancient Assassin stronghold in Syria. His goal is to uncover the secrets left behind by his predecessor, Altaïr Ibn-La'Ahad, who was both a legendary Assassin and Mentor of the Brotherhood. In Masyaf, Ezio discovers a hidden library that Altaïr sealed away centuries ago, believing it holds powerful artifacts and knowledge that could aid the Assassins in their ongoing struggle against the Templars.</p>
              <br />
              <p>Upon arriving in Constantinople (modern-day Istanbul), Ezio becomes embroiled in the political and religious conflicts of the Ottoman Empire. He forges alliances with key figures such as:</p>
              <br />
              <ul>
                <li><b>Suleiman I: </b>The young and progressive Sultan of the Ottoman Empire, who becomes Ezio's ally and provides valuable assistance in the fight against the Byzantine Templars.</li>
                <li><b>Yusuf Tazim: </b>The charismatic and skilled leader of the Ottoman Assassins, who assists Ezio in navigating Constantinople's complex social and political landscape.</li>
              </ul>
              <br />
              <p><b>Search for the Keys</b></p>
              <p>Ezio's primary mission in Constantinople revolves around locating the five Masyaf keys, hidden by members of the Byzantine Templar Order. These keys are essential to unlocking Altaïr's library and revealing its secrets. Each key is protected by a Templar leader, leading Ezio to engage in stealthy assassinations, strategic infiltrations, and alliances with local factions to retrieve them.</p>
              <br />
              <p><b>Templar Threat</b></p>
              <p>The primary antagonist in Constantinople is Manuel Palaiologos, a high-ranking member of the Byzantine Templar Order. Manuel seeks to destabilize Constantinople and seize control of the city for the Templars. His ambitions lead to widespread unrest, conspiracies, and threats to the stability of the Ottoman Empire, forcing Ezio to intervene to protect the city and its people.</p>
              <br />
              <p><b>Altaïr's Revelations</b></p>
              <p>As Ezio collects the Masyaf keys and unlocks Altaïr's library, he experiences memories and revelations from Altaïr's final days. These revelations provide profound insights into the history and philosophy of the Assassin Brotherhood, the enigmatic Pieces of Eden, and the ongoing struggle against the Templars. The knowledge Ezio gains reshapes his understanding of the Assassin's Creed and his own role as a leader within the Brotherhood.</p>
              <br />
              <p><b>Modern Day Epilogue</b></p>
              <p>Through Desmond's experience reliving Ezio's memories, he gains the knowledge needed to awaken from his coma. Emerging from the Animus, Desmond and his team embark on a new mission to find the Grand Temple, a First Civilization structure hinted at in the memories of both Ezio and Altaïr. This mission sets the stage for future conflicts and revelations in the ongoing battle between Assassins and Templars.</p>
            </div>
            <br />
            <div className="setting-container">
              <h3>Setting</h3>
              <p>"Assassin's Creed Revelations" primarily takes place in two main locations:</p>
              <br />
              <ol>
                <li><b>Constantinople (Istanbul): </b>The majority of the game is set in Constantinople during the early 16th century. It serves as the vibrant and bustling center of the Ottoman Empire, featuring iconic landmarks such as the Hagia Sophia, Topkapi Palace, and the Galata Tower. Constantinople is a key location where Ezio Auditore explores, interacts with allies and adversaries, and uncovers secrets related to the Assassin Brotherhood and the Templar Order.</li>
                <li><b>Masyaf: </b>Located in the mountains of Syria, Masyaf is the ancient stronghold of the Assassin Brotherhood and the former seat of power of Altaïr Ibn-La'Ahad. Ezio travels to Masyaf at the beginning of the game to uncover Altaïr's secrets and locate the keys needed to unlock Altaïr's library. Masyaf serves as a significant historical and spiritual center for the Assassins, steeped in mystery and hidden knowledge.</li>
              </ol>
            </div>
            <br />
            <div className="gameplay-container">
              <h3>Gameplay</h3>
              <p>"Assassin's Creed Revelations" introduces several new gameplay features and mechanics, including:</p>
              <br />
              <ul>
                <li><b>Hookblade: </b>A versatile tool that enhances navigation, combat, and interaction with the environment.</li>
                <li><b>Bomb Crafting: </b>Players can create various types of bombs with different effects to aid in stealth, distraction, or combat.</li>
                <li><b>Den Defense: </b>A strategic minigame where Ezio defends Assassin dens from Templar attacks, adding a new layer of tactical gameplay.</li>
              </ul>
            </div>
            <br />
            <div className="themes-container">
              <h3>Themes</h3>
              <p>The game explores themes of legacy, redemption, and the passing of wisdom from one generation of Assassins to the next. It delves into the personal journey of Ezio Auditore as he comes to terms with his past and prepares for the future of the Brotherhood.</p>
            </div>
            <br />
            <div className="reception-container">
              <h3>Reception</h3>
              <p>"Assassin's Creed Revelations" received generally positive reviews for its storytelling, gameplay improvements, and conclusion to Ezio's arc. Critics praised its narrative depth and the exploration of Altaïr's legacy, though some felt that the gameplay innovations were not as groundbreaking as in previous entries.</p>
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
              <p><b>Total Reviews: </b><span id='acrev-total-reviews'></span></p>
              <br />
              <div className="reviews">
                <p><b>Exceptional: </b>%<span id='acrev-exceptional'></span></p>
                <p><b>Recommended: </b>%<span id='acrev-recommended'></span></p>
                <p><b>Boring: </b>%<span id='acrev-boring'></span></p>
                <p><b>Skip: </b>%<span id='acrev-skip'></span></p>
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

export default AcRev
