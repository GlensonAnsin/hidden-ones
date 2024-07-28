import './AcGlobal.css'
import ac2 from '../../../../assets/ac-posters/ac-2.png'
import Navbar from '../../../Navbar/Navbar'
import pic1 from '../../../../assets/ac2-gallery/pic1.jpg'
import pic2 from '../../../../assets/ac2-gallery/pic2.jpg'
import pic3 from '../../../../assets/ac2-gallery/pic3.jpg'
import pic4 from '../../../../assets/ac2-gallery/pic4.jpg'
import pic5 from '../../../../assets/ac2-gallery/pic5.jpg'
import pic6 from '../../../../assets/ac2-gallery/pic6.jpg'
import pic7 from '../../../../assets/ac2-gallery/pic7.jpg'
import pic8 from '../../../../assets/ac2-gallery/pic8.jpg'
import pic9 from '../../../../assets/ac2-gallery/pic9.jpg'
import pic10 from '../../../../assets/ac2-gallery/pic10.jpg'
import { useEffect, useState } from 'react'
import backBtn from '../../../../assets/back-button.png'
import { Link } from 'react-router-dom'
import ShowImg from '../../../ShowImg/ShowImg'
import Footer from '../../../Footer/Footer'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'

const Ac2 = () => {
  const [imgLink, setImgLink] = useState(null);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const apiKey = 'ebecb9fad0bb4184a5498c97d7e27112';
    const gameId = '28568';

    const fetchAc2 = async () => {
      try{
        const response = await fetch(`https://api.rawg.io/api/games/${gameId}?key=${apiKey}`);

        if (!response.ok) {
          throw new Error('Could not fetch resource');
        }

        const data = await response.json();
        document.getElementById('ac2-total-reviews').innerHTML = data.reviews_count;
        document.getElementById('ac2-exceptional').innerHTML = data.ratings[0].percent;
        document.getElementById('ac2-recommended').innerHTML = data.ratings[1].percent;
        document.getElementById('ac2-boring').innerHTML = data.ratings[2].percent;
        document.getElementById('ac2-skip').innerHTML = data.ratings[3].percent;
        
      } catch (error) {
        console.error(error);
      }
    }
    fetchAc2();
  }, [])
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="container">
          <Link to='/acgames'><img className='back-btn' src={backBtn} alt="back" /></Link>
          <div className="poster-detail-container">
            <div className="poster-container">
              <img className="ac-poster" src={ac2} alt="poster" />
            </div>
            <div className="details-container">
            <h2>Assassin's Creed II</h2>
            <br />
            <h4>Release Date: November 17, 2009</h4>
            <h4>Platform: Microsoft Windows, PlaysStation 3, PlayStation 4, Nintendo Switch, Xbox 360, Xbox One, macOS, GeForce Now</h4>
            <h4>Size: 8 GB</h4>
            <br />
            <p>"Assassin's Creed II," released in 2009, is the second installment in the Assassin's Creed series, developed by Ubisoft Montreal. It continues the story of Desmond Miles and introduces a new protagonist, Ezio Auditore da Firenze, in Renaissance Italy.</p>
            </div>
          </div>
          <br />
          <div className="content-container">
            <div className="trailer-container">
              <h3>Trailer</h3>
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/_xkCPNECud8"></iframe>
              </div>
            </div>
            <br />
            <div className="key-characters-container">
              <h3>Key Characters</h3>
              <p><b>Modern Day (2012)</b></p>
              <ol>
                <li><b>Desmond Miles: </b>The modern-day protagonist, Desmond relives Ezio's memories through the Animus to learn Assassin skills. He is part of a team seeking Pieces of Eden to combat the Templars.</li>
                <li><b>Lucy Stillman: </b>An undercover Assassin posing as a scientist at Abstergo Industries. She helps Desmond and the team navigate through Ezio's memories.</li>
              </ol>
              <br />
              <p><b>Ezio's Story</b></p>
              <ol>
                <li><b>Ezio Auditore da Firenze: </b>The main protagonist of the game, Ezio starts as a young nobleman in Florence but becomes an Assassin after his family is betrayed and executed. He seeks revenge and uncovers a larger Templar conspiracy.</li>
                <li><b>Leonardo da Vinci: </b>A brilliant Renaissance inventor and artist who becomes Ezio's ally. Leonardo provides Ezio with inventions, upgrades, and valuable support.</li>
                <li><b>Rodrigo Borgia (Pope Alexander VI): </b>The main antagonist and a powerful Templar leader. He manipulates events in Italy to consolidate Templar power and control the Papacy.</li>
                <li><b>Caterina Sforza: </b>A noblewoman and ally to Ezio. She initially seeks his help to protect her city, Forlì, from the Templars.</li>
                <li><b>Mario Auditore: </b>Ezio's uncle and a prominent member of the Assassin Brotherhood. He guides Ezio after the tragedy in Florence.</li>
              </ol>
            </div>
            <br />
            <div className="plot-container">
              <h3>Plot</h3>
              <p><b>Modern Day (2012)</b></p>
              <p>After being rescued from Abstergo Industries by modern-day Assassins, including Lucy Stillman, Desmond Miles is taken to a safe house. Here, he meets Shaun Hastings and Rebecca Crane, who help him use the Animus 2.0, a more advanced version of the machine that allows Desmond to relive the memories of his ancestor, Ezio Auditore da Firenze. The goal is to train Desmond by unlocking Ezio's skills through a process called the Bleeding Effect.</p>
              <br />
              <p><b>Ezio's Story (1476-1499)</b></p>
              <br />
              <p><b>Florence (1476)</b></p>
              <p>The story begins in Florence, where Ezio Auditore is a carefree young nobleman. His life changes dramatically when his father, Giovanni, and his brothers, Federico and Petruccio, are betrayed by their allies and executed by a corrupt magistrate, Uberto Alberti, who is working with the Templars. Ezio, with his mother Maria and sister Claudia, escapes the city with the help of his friend Leonardo da Vinci and other allies.</p>
              <br />
              <p><b>Journey of Revenge and Discovery</b></p>
              <p>Ezio embarks on a quest for revenge, initially targeting Alberti. After killing him, Ezio learns that his family's betrayal is part of a larger conspiracy involving high-ranking Templars. He sets out to hunt down and assassinate those responsible, including:</p>
              <br />
              <ol>
                <li><b>Vieri de' Pazzi: </b>A rival nobleman in Florence.</li>
                <li><b>Francesco de' Pazzi: </b>Vieri's father and a key figure in the Pazzi conspiracy.</li>
                <li><b>Antonio Maffei: </b>A clergyman involved in the Pazzi conspiracy.</li>
                <li><b>Bernardo di Bandino Baroncelli: </b>Another member of the Pazzi family.</li>
                <li><b>Stefano da Bagnone: </b>An ambitious monk.</li>
                <li><b>Archbishop Salviati: </b>The corrupt archbishop of Florence.</li>
              </ol>
              <br />
              <p>During his journey, Ezio discovers that his father was an Assassin, and he is inducted into the Assassin Brotherhood. He meets important historical figures, including Lorenzo de' Medici, ruler of Florence, who becomes an ally.</p>
              <br />
              <p><b>Venice (1481)</b></p>
              <p>Ezio's quest takes him to Venice, where he continues his fight against the Templars. He uncovers a plot to take over the city and assassinates several key figures:</p>
              <br />
              <ol>
                <li><b>Carlo Grimaldi: </b>A Venetian nobleman.</li>
                <li><b>Silvio Barbarigo: </b>A member of the powerful Barbarigo family.</li>
                <li><b>Marco Barbarigo: </b>The Doge of Venice.</li>
              </ol>
              <br />
              <p>In Venice, Ezio deepens his relationship with Leonardo da Vinci, who helps him decode codex pages left by Altaïr and provides him with new equipment and gadgets.</p>
              <br />
              <p><b>Rome and the Vatican (1499)</b></p>
              <p>Ezio learns that Rodrigo Borgia, a high-ranking Templar, is the mastermind behind the conspiracy. Borgia plans to use a powerful artifact, the Apple of Eden, to dominate the world. Ezio infiltrates the Vatican and confronts Borgia, who reveals himself to be the "Prophet" destined to open a vault that contains the knowledge and power of the ancient civilization.</p>
              <br />
              <p>Ezio defeats Borgia but spares his life, taking the Apple of Eden. Inside the vault, a holographic figure named Minerva appears and speaks directly to Desmond through Ezio. Minerva warns of a great catastrophe that once nearly destroyed humanity and could happen again. She implores Desmond to use the knowledge and abilities gained from Ezio to prevent this disaster.</p>
              <br />
              <p><b>Modern Day Epilogue</b></p>
              <p>Desmond awakens from the Animus and learns that Abstergo, the modern-day Templars, is planning to launch a satellite that will use a Piece of Eden to control humanity. The Assassins prepare to stop them, and Desmond begins training with the skills he acquired from Ezio, thanks to the Bleeding Effect.</p>
              <br />
              <p>The game ends with a cliffhanger, setting the stage for the next installment in the series.</p>
            </div>
            <br />
            <div className="setting-container">
              <h3>Setting</h3>
              <p>The setting of "Assassin's Creed II" is primarily in Renaissance Italy, spanning the late 15th and early 16th centuries. The game features several historically accurate and richly detailed cities:</p>
              <br />
              <ol>
                <li><b>Florence (Firenze): </b>The game begins in Florence, the birthplace of Ezio Auditore. Florence is a bustling city known for its vibrant culture, politics, and art. Key locations in Florence include the Palazzo della Signoria, the Cathedral of Santa Maria del Fiore (Duomo), and various landmarks that reflect the city's architectural splendor.</li>
                <li><b>Monteriggioni: </b>Ezio's ancestral home and the base of operations for the Auditore family. Monteriggioni serves as a hub where players can manage their finances, upgrade equipment, and interact with Ezio's family and allies.</li>
                <li><b>San Gimignano: </b>A smaller town known for its medieval towers. It is one of the locations where Ezio pursues his enemies and uncovers more of the Templar conspiracy.</li>
                <li><b>Forlì: </b>Another important city in Ezio's journey, where he encounters Caterina Sforza, an ally who plays a significant role in the fight against the Templars.</li>
                <li><b>Venice (Venezia): </b>A major city in the game, Venice is famous for its canals, gondolas, and stunning architecture. Key locations include the Piazza San Marco, the Rialto Bridge, and various palaces and churches.</li>
                <li><b>Tuscany: </b>The game also features the Tuscan countryside, offering a more rural setting with small villages, rolling hills, and open landscapes.</li>
                <li><b>Rome and the Vatican: </b>The climax of the game takes place in Rome, specifically in the Vatican. Here, Ezio confronts Rodrigo Borgia and discovers the ancient vault beneath the Vatican.</li>
              </ol>
            </div>
            <br />
            <div className="gameplay-container">
              <h3>Gameplay</h3>
              <p>"Assassin's Creed II" builds on the gameplay mechanics of the first game and introduces several new features:</p>
              <br />
              <ul>
                <li><b>Open World Exploration: </b>Players can explore detailed and historically accurate recreations of Italian cities.</li>
                <li><b>Economic System: </b>Players can earn money through various activities and invest in property and equipment.</li>
                <li><b>Improved Combat and Stealth: </b>Combat is more refined, and stealth mechanics are enhanced, including the introduction of smoke bombs and the ability to disarm opponents.</li>
                <li><b>Side Missions and Collectibles: </b>Numerous side missions and collectibles, such as feathers and codex pages, add depth to the game.</li>
              </ul>
            </div>
            <br />
            <div className="themes-container">
              <h3>Themes</h3>
              <p>The game explores themes of revenge, justice, and the conflict between the Assassins and Templars. It delves into the idea of freedom versus control, with the Assassins fighting for free will and the Templars seeking order through control.</p>
            </div>
            <br />
            <div className="reception-container">
              <h3>Reception</h3>
              <p>"Assassin's Creed II" received critical acclaim for its engaging storyline, rich historical setting, improved gameplay mechanics, and detailed world design. It is often regarded as one of the best games in the series and a significant improvement over its predecessor.</p>
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
              <p><b>Total Reviews: </b><span id='ac2-total-reviews'></span></p>
              <br />
              <div className="reviews">
                <p><b>Exceptional: </b>%<span id='ac2-exceptional'></span></p>
                <p><b>Recommended: </b>%<span id='ac2-recommended'></span></p>
                <p><b>Boring: </b>%<span id='ac2-boring'></span></p>
                <p><b>Skip: </b>%<span id='ac2-skip'></span></p>
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

export default Ac2
