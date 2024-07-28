import './AcGlobal.css'
import acLib from '../../../../assets/ac-posters/ac-liberation.png'
import Navbar from '../../../Navbar/Navbar'
import pic1 from '../../../../assets/aclib-gallery/pic1.jpg'
import pic2 from '../../../../assets/aclib-gallery/pic2.jpg'
import pic3 from '../../../../assets/aclib-gallery/pic3.jpg'
import pic4 from '../../../../assets/aclib-gallery/pic4.jpg'
import pic5 from '../../../../assets/aclib-gallery/pic5.jpg'
import pic6 from '../../../../assets/aclib-gallery/pic6.jpg'
import pic7 from '../../../../assets/aclib-gallery/pic7.jpg'
import pic8 from '../../../../assets/aclib-gallery/pic8.jpg'
import pic9 from '../../../../assets/aclib-gallery/pic9.jpg'
import pic10 from '../../../../assets/aclib-gallery/pic10.jpg'
import { useEffect, useState } from 'react'
import backBtn from '../../../../assets/back-button.png'
import { Link } from 'react-router-dom'
import ShowImg from '../../../ShowImg/ShowImg'
import Footer from '../../../Footer/Footer'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'

const AcLib = () => {
  const [imgLink, setImgLink] = useState(null);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const apiKey = 'ebecb9fad0bb4184a5498c97d7e27112';
    const gameId = '4209';

    const fetchAcLib = async () => {
      try{
        const response = await fetch(`https://api.rawg.io/api/games/${gameId}?key=${apiKey}`);

        if (!response.ok) {
          throw new Error('Could not fetch resource');
        }

        const data = await response.json();
        document.getElementById('aclib-total-reviews').innerHTML = data.reviews_count;
        document.getElementById('aclib-boring').innerHTML = data.ratings[0].percent;
        document.getElementById('aclib-recommended').innerHTML = data.ratings[1].percent;
        document.getElementById('aclib-skip').innerHTML = data.ratings[2].percent;
        document.getElementById('aclib-exceptional').innerHTML = data.ratings[3].percent;
        
      } catch (error) {
        console.error(error);
      }
    }
    fetchAcLib();
  }, [])

  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="container">
          <Link to='/acgames'><img className='back-btn' src={backBtn} alt="back" /></Link>
          <div className="poster-detail-container">
            <div className="poster-container">
              <img className="ac-poster" src={acLib} alt="poster" />
            </div>
            <div className="details-container">
            <h2>Assassin's Creed III: Liberation</h2>
            <br />
            <h4>Release Date: October 30, 2012</h4>
            <h4>Platform: Microsoft Windows, PlayStation 3, PlayStation 4, Nintendo Switch, Xbox 360, Xbox One, Amazon Luna, PlayStation Vita</h4>
            <h4>Size: 3 GB</h4>
            <br />
            <p>"Assassin's Creed III: Liberation" is a spin-off entry in the Assassin's Creed series, released in 2012 for the PlayStation Vita and later remastered for other platforms. The game introduces Aveline de Grandpré, the first female protagonist in the series, and is set against the backdrop of 18th-century New Orleans and its surrounding bayou during the French and Indian War and the American Revolution.</p>
            </div>
          </div>
          <br />
          <div className="content-container">
            <div className="trailer-container">
              <h3>Trailer</h3>
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/zfpfhztOBVI"></iframe>
              </div>
            </div>
            <br />
            <div className="key-characters-container">
              <h3>Key Characters</h3>
              <ol>
                <li><b>Aveline de Grandpré: </b>The main protagonist, a strong-willed Assassin dedicated to fighting the Templars and liberating the oppressed.</li>
                <li><b>Agaté: </b>A former slave and Aveline's mentor in the Assassin Brotherhood.</li>
                <li><b>Philippe de Grandpré: </b>Aveline's father, a wealthy French merchant.</li>
                <li><b>Jeanne: </b>Aveline's mother, who mysteriously disappears early in the story.</li>
                <li><b>Madeleine de L'Isle: </b>Aveline's stepmother and a high-ranking Templar.</li>
                <li><b>Roussillon: </b>An Assassin ally who helps Aveline in her missions.</li>
                <li><b>Baptiste: </b>A former Assassin turned Templar who poses a significant threat to Aveline.</li>
              </ol>
            </div>
            <br />
            <div className="plot-container">
              <h3>Plot</h3>
              <p><b>Childhood and Early Life</b></p>
              <p>Aveline de Grandpré is born to a wealthy French merchant, Philippe de Grandpré, and an African slave, Jeanne. Aveline's mother mysteriously disappears when she is young, leaving her in the care of her father and his new wife, Madeleine. Aveline is trained as an Assassin by a former slave named Agaté, who becomes her mentor.</p>
              <br />
              <p><b>Joining the Assassins</b></p>
              <p>Aveline joins the Assassin Brotherhood and dedicates herself to fighting against oppression and the Templar Order. Her missions involve freeing slaves, uncovering Templar plots, and protecting her home and family.</p>
              <br />
              <p><b>Key Missions and Events</b></p>
              <ol>
                <li><b>Investigation in New Orleans: </b>Aveline uncovers a Templar plot to control the city through economic and political manipulation.</li>
                <li><b>The Bayou: </b>She undertakes several missions in the bayou, dealing with smugglers, freeing slaves, and dismantling Templar operations.</li>
                <li><b>Mexico Expedition: </b>Aveline travels to Chichen Itza to retrieve a First Civilization artifact and confronts a high-ranking Templar, who reveals shocking truths about her mother and her own lineage.</li>
              </ol>
              <br />
              <p><b>Confrontation and Resolution</b></p>
              <p>In the final act, Aveline confronts the leaders of the Templar Order in New Orleans. She discovers that her stepmother, Madeleine, is a high-ranking Templar. Aveline must decide whether to reconcile with her family or fully embrace her Assassin identity. She ultimately defeats the Templars and secures the artifact, ensuring it does not fall into the wrong hands.</p>
            </div>
            <br />
            <div className="setting-container">
              <h3>Setting</h3>
              <p>The game is set primarily in:</p>
              <br />
              <ol>
                <li><b>New Orleans: </b>A vibrant city under Spanish rule with a mix of French, Spanish, African, and Native American influences.</li>
                <li><b>The Bayou: </b>The swamps and forests surrounding New Orleans, teeming with wildlife and hidden dangers.</li>
                <li><b>Chichen Itza: </b>A location in Mexico that becomes significant in Aveline's quest.</li>
              </ol>
            </div>
            <br />
            <div className="gameplay-container">
              <h3>Gameplay</h3>
              <p>"Assassin's Creed III: Liberation" features several unique gameplay elements:</p>
              <br />
              <ul>
                <li><b>Persona System: </b>Aveline can adopt three personas—Assassin, Lady, and Slave—each with distinct abilities and limitations: 
                <ul>
                  <li><b>Assassin Persona: </b>Full combat abilities and agility but attracts attention.</li>
                  <li><b>Lady Persona: </b>Limited combat, can charm and bribe, and can move through high society unnoticed.</li>
                  <li><b>Slave Persona: </b>Moderate combat abilities, can blend in with lower-class citizens, and access areas restricted to other personas.</li>
                </ul>
                </li>
                <li><b>Free Roaming and Parkour: </b>Similar to other Assassin's Creed games, players can explore New Orleans and the bayou using parkour, climbing, and free-running mechanics.</li>
                <li><b>Combat System: </b>A mix of melee combat, stealth kills, and ranged weapons, including pistols, blowpipes, and the iconic hidden blade.</li>
                <li><b>Economy and Trade: </b>Players can manage Aveline's business dealings, trading goods to earn money and unlock upgrades.</li>
                <li><b>Missions and Side Quests: </b>A variety of main story missions, side quests, and collectibles provide a rich gameplay experience.</li>
              </ul>
            </div>
            <br />
            <div className="themes-container">
              <h3>Themes</h3>
              <p>"Assassin's Creed III: Liberation" explores several key themes:</p>
              <br />
              <ol>
                <li><b>Freedom and Oppression: </b>The game highlights the struggles of slaves and the fight against oppression, reflecting Aveline's mixed heritage and her quest for justice.</li>
                <li><b>Identity and Duality: </b>Aveline's personas represent different aspects of her identity, and the game explores her internal conflict between her roles as an Assassin, a lady of society, and a daughter.</li>
                <li><b>Family and Loyalty: </b>The complex relationships between Aveline, her parents, and her stepmother drive much of the narrative, exploring themes of loyalty, betrayal, and family bonds.</li>
                <li><b>Power and Corruption: </b> The Templar's control over New Orleans and their manipulation of power structures serve as a critique of corruption and abuse of power.</li>
              </ol>
            </div>
            <br />
            <div className="reception-container">
              <h3>Reception</h3>
              <p>"Assassin's Creed III: Liberation" received mixed to positive reviews:</p>
              <br />
              <ol>
                <li><b>Story and Protagonist: </b>Aveline's character and the story were praised for bringing a fresh perspective and addressing important social issues.</li>
                <li><b>Gameplay Mechanics: </b>The Persona System and unique setting were appreciated, though some critics found the mechanics to be underutilized or imbalanced.</li>
                <li><b>Visuals and World Design: </b>The game's visuals and the depiction of New Orleans were generally well-received, though the original Vita version faced criticism for technical limitations.</li>
                <li><b>Criticisms: </b>Some reviews pointed out issues with mission design, pacing, and occasional technical glitches.</li>
              </ol>
              <br />
              <p>Overall, "Assassin's Creed III: Liberation" is recognized for its unique protagonist and setting, contributing to the broader Assassin's Creed universe with its distinct narrative and gameplay innovations.</p>
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
              <p><b>Total Reviews: </b><span id='aclib-total-reviews'></span></p>
              <br />
              <div className="reviews">
                <p><b>Exceptional: </b>%<span id='aclib-exceptional'></span></p>
                <p><b>Recommended: </b>%<span id='aclib-recommended'></span></p>
                <p><b>Boring: </b>%<span id='aclib-boring'></span></p>
                <p><b>Skip: </b>%<span id='aclib-skip'></span></p>
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

export default AcLib