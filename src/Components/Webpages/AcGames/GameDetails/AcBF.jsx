import './AcGlobal.css'
import acBF from '../../../../assets/ac-posters/ac-black-flag.png'
import Navbar from '../../../Navbar/Navbar'
import pic1 from '../../../../assets/acbf-gallery/pic1.jpg'
import pic2 from '../../../../assets/acbf-gallery/pic2.jpg'
import pic3 from '../../../../assets/acbf-gallery/pic3.jpg'
import pic4 from '../../../../assets/acbf-gallery/pic4.jpg'
import pic5 from '../../../../assets/acbf-gallery/pic5.jpg'
import pic6 from '../../../../assets/acbf-gallery/pic6.jpg'
import pic7 from '../../../../assets/acbf-gallery/pic7.jpg'
import pic8 from '../../../../assets/acbf-gallery/pic8.jpg'
import pic9 from '../../../../assets/acbf-gallery/pic9.jpg'
import pic10 from '../../../../assets/acbf-gallery/pic10.jpg'
import { useEffect, useState } from 'react'
import backBtn from '../../../../assets/back-button.png'
import { Link } from 'react-router-dom'
import ShowImg from '../../../ShowImg/ShowImg'
import Footer from '../../../Footer/Footer'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'

const AcBF = () => {
  const [imgLink, setImgLink] = useState(null);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const apiKey = 'ebecb9fad0bb4184a5498c97d7e27112';
    const gameId = '3841';

    const fetchAcBF = async () => {
      try{
        const response = await fetch(`https://api.rawg.io/api/games/${gameId}?key=${apiKey}`);

        if (!response.ok) {
          throw new Error('Could not fetch resource');
        }

        const data = await response.json();
        document.getElementById('acbf-total-reviews').innerHTML = data.reviews_count;
        document.getElementById('acbf-recommended').innerHTML = data.ratings[0].percent;
        document.getElementById('acbf-exceptional').innerHTML = data.ratings[1].percent;
        document.getElementById('acbf-boring').innerHTML = data.ratings[2].percent;
        document.getElementById('acbf-skip').innerHTML = data.ratings[3].percent;
        
      } catch (error) {
        console.error(error);
      }
    }
    fetchAcBF();
  }, [])

  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="container">
          <Link to='/acgames'><img className='back-btn' src={backBtn} alt="back" /></Link>
          <div className="poster-detail-container">
            <div className="poster-container">
              <img className="ac-poster" src={acBF} alt="poster" />
            </div>
            <div className="details-container">
            <h2>Assassin's Creed IV: Black Flag</h2>
            <br />
            <h4>Release Date: October 19, 2013</h4>
            <h4>Platform: Microsoft Windows, PlayStation 3, PlayStation 4, Nintendo Switch, Wii U, Xbox 360, Xbox One, GeForce Now</h4>
            <h4>Size: 30 GB</h4>
            <br />
            <p>"Assassin's Creed IV: Black Flag," released in 2013, is the sixth main installment in the Assassin's Creed series, developed by Ubisoft. The game shifts focus to a new protagonist, Edward Kenway, a pirate who becomes embroiled in the conflict between Assassins and Templars during the Golden Age of Piracy. Set in the early 18th century, the game combines naval exploration with land-based action and adventure.</p>
            </div>
          </div>
          <br />
          <div className="content-container">
            <div className="trailer-container">
              <h3>Trailer</h3>
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/OwVe4ZNeQZk"></iframe>
              </div>
            </div>
            <br />
            <div className="key-characters-container">
              <h3>Key Characters</h3>
              <p><b>Modern Day</b></p>
              <ol>
                <li><b>Unnamed Abstergo Employee (Player): </b>The player character working for Abstergo Entertainment, uncovering Edward Kenway's memories.</li>
                <li><b>John Standish: </b>A technician at Abstergo who reveals himself as an undercover Sage, a reincarnation of a First Civilization being.</li>
                <li><b>Melanie Lemay: </b>A senior researcher at Abstergo Entertainment.</li>
              </ol>
              <br />
              <p><b>Edward's Story</b></p>
              <ol>
                <li><b>Edward Kenway: </b>The main protagonist, a pirate who becomes an Assassin and fights against the Templars.</li>
                <li><b>Blackbeard (Edward Thatch): </b>A legendary pirate and ally of Edward Kenway.</li>
                <li><b>Charles Vane: </b>A notorious pirate known for his brutal tactics.</li>
                <li><b>Mary Read (James Kidd): </b>A female pirate who disguises herself as a man and befriends Edward.</li>
                <li><b>Calico Jack (Jack Rackham): </b>A pirate captain and associate of Edward.</li>
                <li><b>Benjamin Hornigold: </b>A pirate turned pirate hunter, who plays a crucial role in Edward's journey.</li>
                <li><b>Adéwalé: </b>Edward's quartermaster and a former slave who becomes an Assassin.</li>
              </ol>
            </div>
            <br />
            <div className="plot-container">
              <h3>Plot</h3>
              <p><b>Prologue: Modern Day</b></p>
              <p>The modern-day storyline continues from the events of "Assassin's Creed III." The player is an unnamed employee of Abstergo Entertainment, a subsidiary of Abstergo Industries. Tasked with researching the memories of Edward Kenway, the player uncovers more about the First Civilization and the conflict between Assassins and Templars through the Animus.</p>
              <br />
              <p><b>Edward's Story (1715-1722)</b></p>
              <br />
              <p><b>Early Years and Rise to Piracy</b></p>
              <p>Edward Kenway, a young and ambitious Welshman, dreams of wealth and adventure. Leaving his family behind, he becomes a privateer during the War of Spanish Succession. When the war ends, Edward turns to piracy to achieve his dreams of fortune and fame.</p>
              <br />
              <p><b>Becoming an Assassin</b></p>
              <p>After a shipwreck, Edward kills an Assassin named Duncan Walpole and takes his place in a mission to Havana. There, he meets Templar leaders who seek to locate the Observatory, a First Civilization site that can track anyone using a blood sample. Edward becomes entangled in the Assassins' conflict, gradually understanding their cause.</p>
              <br />
              <p><b>The Pirate Republic</b></p>
              <p>Edward becomes a prominent pirate captain, forming alliances with famous pirates such as Blackbeard (Edward Thatch), Charles Vane, and Mary Read. He helps establish a pirate republic in Nassau, dreaming of a utopia free from government control. However, internal conflicts and external pressures lead to the republic's downfall.</p>
              <br />
              <p><b>The Search for the Observatory</b></p>
              <p>Driven by the potential riches, Edward seeks the Observatory, encountering both Assassins and Templars along the way. He learns more about the Assassins' creed and begins to question his own motivations.</p>
              <br />
              <p><b>Climax and Redemption</b></p>
              <p>Edward's pursuit of the Observatory leads to personal losses, including the deaths of close friends and allies. Realizing the greater good, he finally embraces the Assassin's cause. Edward successfully secures the Observatory from Templar control, ensuring it cannot be misused.</p>
              <br />
              <p><b>Epilogue: Legacy</b></p>
              <p>Edward returns to England, where he reconnects with his estranged family and raises his son, Haytham Kenway, who will later become a significant figure in the series. The modern-day storyline reveals that Edward's memories hold crucial information about the First Civilization.</p>
            </div>
            <br />
            <div className="setting-container">
              <h3>Setting</h3>
              <p>The game is set primarily in:</p>
              <br />
              <ol>
                <li><b>The Caribbean: </b> Including cities such as Havana (Cuba), Nassau (Bahamas), and Kingston (Jamaica).</li>
                <li><b>The Open Sea: </b>The vast Caribbean Sea where much of the game's naval exploration and combat occur.</li>
                <li><b>Islands and Hidden Coves: </b>Various islands and hidden coves serve as important locations for treasure hunting and side missions.</li>
              </ol>
            </div>
            <br />
            <div className="gameplay-container">
              <h3>Gameplay</h3>
              <p>"Assassin's Creed IV: Black Flag" features a blend of naval and land-based gameplay:</p>
              <br />
              <ul>
                <li><b>Naval Exploration and Combat: </b>Players command Edward's ship, the Jackdaw, engaging in naval battles, exploring islands, and plundering ships. The naval mechanics are a core aspect of the game.</li>
                <li><b>Open World Exploration: </b>The Caribbean Sea and its many islands offer a vast open world to explore, with dynamic weather, day-night cycles, and diverse environments.</li>
                <li><b>Stealth and Combat: </b>The game retains the series' focus on stealth and parkour, with improved combat mechanics allowing dual-wielding swords, pistols, and a variety of weapons.</li>
                <li><b>Side Missions and Activities: </b>Numerous side missions, including hunting, treasure hunting, diving for shipwrecks, and assassination contracts, provide additional content and rewards.</li>
                <li><b>Upgrades and Customization: </b> Players can upgrade the Jackdaw, Edward's equipment, and the hideout at Great Inagua by gathering resources and completing missions.</li>
              </ul>
            </div>
            <br />
            <div className="themes-container">
              <h3>Themes</h3>
              <p>"Assassin's Creed IV: Black Flag" explores several key themes:</p>
              <br />
              <ol>
                <li><b>Freedom and Independence: </b>The pirates' quest for a free life on the open sea parallels Edward's personal journey toward understanding true freedom and responsibility.</li>
                <li><b>Greed and Ambition: </b>Edward's initial pursuit of wealth and power leads to personal losses, highlighting the destructive nature of unchecked ambition.</li>
                <li><b>Redemption and Legacy: </b>Edward's transformation from a self-serving pirate to a committed Assassin reflects themes of redemption and the impact of one's legacy.</li>
                <li><b>Conflict and Cooperation: </b>The game explores the complex relationships among pirates, Assassins, and Templars, emphasizing the necessity of cooperation and the inevitability of conflict.</li>
              </ol>
            </div>
            <br />
            <div className="reception-container">
              <h3>Reception</h3>
              <p>"Assassin's Creed IV: Black Flag" received widespread acclaim:</p>
              <br />
              <ol>
                <li><b>Story and Characters: </b>The game was praised for its engaging narrative, charismatic protagonist, and well-developed supporting characters.</li>
                <li><b>Naval Gameplay: </b>The naval exploration and combat mechanics were particularly lauded for their innovation and execution, adding a new dimension to the series.</li>
                <li><b>Open World Design: </b>The vast and beautifully designed open world of the Caribbean, filled with diverse activities and secrets, was highly appreciated.</li>
                <li><b>Visuals and Soundtrack: </b>The game's graphics, attention to detail, and immersive soundtrack contributed to its positive reception.</li>
                <li><b>Criticisms: </b>Some reviews pointed out repetitive mission structures and occasional technical issues, but these did not significantly detract from the overall experience.</li>
              </ol>
              <br />
              <p>Overall, "Assassin's Creed IV: Black Flag" is celebrated as one of the best entries in the series, offering a unique and immersive pirate adventure that blends historical fiction with engaging gameplay mechanics.</p>
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
              <p><b>Total Reviews: </b><span id='acbf-total-reviews'></span></p>
              <br />
              <div className="reviews">
                <p><b>Exceptional: </b>%<span id='acbf-exceptional'></span></p>
                <p><b>Recommended: </b>%<span id='acbf-recommended'></span></p>
                <p><b>Boring: </b>%<span id='acbf-boring'></span></p>
                <p><b>Skip: </b>%<span id='acbf-skip'></span></p>
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

export default AcBF
