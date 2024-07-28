import './AcGlobal.css'
import acRogue from '../../../../assets/ac-posters/ac-rogue.png'
import Navbar from '../../../Navbar/Navbar'
import pic1 from '../../../../assets/acrogue-gallery/pic1.jpg'
import pic2 from '../../../../assets/acrogue-gallery/pic2.jpg'
import pic3 from '../../../../assets/acrogue-gallery/pic3.jpg'
import pic4 from '../../../../assets/acrogue-gallery/pic4.jpg'
import pic5 from '../../../../assets/acrogue-gallery/pic5.jpg'
import pic6 from '../../../../assets/acrogue-gallery/pic6.jpg'
import pic7 from '../../../../assets/acrogue-gallery/pic7.jpg'
import pic8 from '../../../../assets/acrogue-gallery/pic8.jpg'
import pic9 from '../../../../assets/acrogue-gallery/pic9.jpg'
import pic10 from '../../../../assets/acrogue-gallery/pic10.jpg'
import { useEffect, useState } from 'react'
import backBtn from '../../../../assets/back-button.png'
import { Link } from 'react-router-dom'
import ShowImg from '../../../ShowImg/ShowImg'
import Footer from '../../../Footer/Footer'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'

const AcRogue = () => {
  const [imgLink, setImgLink] = useState(null);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const apiKey = 'ebecb9fad0bb4184a5498c97d7e27112';
    const gameId = '17545';

    const fetchAcRogue = async () => {
      try{
        const response = await fetch(`https://api.rawg.io/api/games/${gameId}?key=${apiKey}`);

        if (!response.ok) {
          throw new Error('Could not fetch resource');
        }

        const data = await response.json();
        document.getElementById('acrogue-total-reviews').innerHTML = data.reviews_count;
        document.getElementById('acrogue-recommended').innerHTML = data.ratings[0].percent;
        document.getElementById('acrogue-boring').innerHTML = data.ratings[1].percent;
        document.getElementById('acrogue-exceptional').innerHTML = data.ratings[2].percent;
        document.getElementById('acrogue-skip').innerHTML = data.ratings[3].percent;
        
      } catch (error) {
        console.error(error);
      }
    }
    fetchAcRogue();
  }, [])

  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="container">
          <Link to='/acgames'><img className='back-btn' src={backBtn} alt="back" /></Link>
          <div className="poster-detail-container">
            <div className="poster-container">
              <img className="ac-poster" src={acRogue} alt="poster" />
            </div>
            <div className="details-container">
            <h2>Assassin's Creed Rogue</h2>
            <br />
            <h4>Release Date: November 11, 2014</h4>
            <h4>Platform: Microsoft Windows, PlayStation 3, PlayStation 4, Nintendo Switch, Xbox 360, Xbox One, GeForce Now</h4>
            <h4>Size: 12 GB</h4>
            <br />
            <p>"Assassin's Creed Rogue," released in 2014, is the seventh main installment in the Assassin's Creed series, developed by Ubisoft. The game is notable for its unique perspective, as players take on the role of Shay Patrick Cormac, an Assassin who turns into a Templar. Set during the Seven Years' War, the game explores the complex conflict between Assassins and Templars, focusing on the transformation of Shay from an Assassin to a Templar.</p>
            </div>
          </div>
          <br />
          <div className="content-container">
            <div className="trailer-container">
              <h3>Trailer</h3>
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/RDeyI31pG8A"></iframe>
              </div>
            </div>
            <br />
            <div className="key-characters-container">
              <h3>Key Characters</h3>
              <ol>
                <li><b>Shay Patrick Cormac: </b>The protagonist who transitions from an Assassin to a Templar after becoming disillusioned with the Brotherhood.</li>
                <li><b>Achilles Davenport: </b>Shay's former mentor in the Assassin Brotherhood, who leads the Assassins in the region.</li>
                <li><b>Haytham Kenway: </b>A high-ranking Templar and Edward Kenway's son, who becomes Shay's mentor and ally.</li>
                <li><b>Liam O'Brien: </b>Shay's closest friend within the Assassins, who becomes a significant adversary after Shay's betrayal.</li>
                <li><b>Adéwalé: </b>A former Assassin turned maroon leader, who opposes Shay's actions.</li>
                <li><b>George Monro: </b>A British officer and Templar who mentors Shay and helps guide his transformation.</li>
              </ol>
            </div>
            <br />
            <div className="plot-container">
              <h3>Plot</h3>
              <p><b>Prologue: Assassin Beginnings</b></p>
              <p>Shay Patrick Cormac is a young and skilled Assassin under the mentorship of Achilles Davenport. The game begins with Shay undertaking various missions for the Assassin Brotherhood, including retrieving artifacts and eliminating targets.</p>
              <br />
              <p><b>Turning Point: The Lisbon Earthquake</b></p>
              <p>Shay is tasked with recovering an ancient artifact linked to a Piece of Eden in Lisbon. When he tries to retrieve it, a catastrophic earthquake occurs, causing massive destruction and loss of life. Shay realizes that the Assassins' pursuit of these artifacts is dangerous and questions their methods and goals.</p>
              <br />
              <p><b>Betrayal and Transformation</b></p>
              <p>Disillusioned with the Assassins, Shay decides to steal a manuscript that reveals the locations of other artifacts. This act leads to a confrontation with his former comrades, resulting in his near-death and rescue by the Templars. Shay, believing the Templars' mission to maintain order is more righteous, joins them and begins hunting down his former Assassin allies.</p>
              <br />
              <p><b>Hunt for the Assassins</b></p>
              <p>Shay's mission as a Templar involves tracking down and eliminating key members of the Assassin Brotherhood who continue to seek the dangerous artifacts. This journey takes him across the North Atlantic, New York, and the River Valley, where he encounters former friends and mentors, leading to intense and emotional confrontations.</p>
              <br />
              <p><b>Climax and Resolution</b></p>
              <p>Shay's actions significantly weaken the Assassin Brotherhood, culminating in a final showdown with Achilles Davenport. Shay spares Achilles but cripples him, ensuring the Assassins' downfall in the region. The modern-day storyline reveals that Shay's actions have long-lasting impacts on the Assassin-Templar conflict.</p>
            </div>
            <br />
            <div className="setting-container">
              <h3>Setting</h3>
              <p>The game is set in several key locations during the mid-18th century:</p>
              <br />
              <ol>
                <li><b>North Atlantic Ocean: </b>Featuring naval exploration and combat.</li>
                <li><b>New York City: </b>Depicted during the colonial period.</li>
                <li><b>River Valley: </b>A mix of rural and wilderness areas in the American colonies.</li>
              </ol>
            </div>
            <br />
            <div className="gameplay-container">
              <h3>Gameplay</h3>
              <p>"Assassin's Creed Rogue" features a mix of naval and land-based gameplay similar to "Assassin's Creed IV: Black Flag":</p>
              <br />
              <ul>
                <li><b>Naval Combat and Exploration: </b>Players command Shay's ship, the Morrigan, engaging in naval battles, boarding enemy ships, and exploring the North Atlantic.</li>
                <li><b>Land-Based Missions: </b>The game includes missions in New York, the River Valley, and various forts, with a focus on stealth, combat, and parkour.</li>
                <li><b>Templar Abilities and Weapons: </b>Shay has access to new Templar-specific abilities and weapons, including an air rifle with various types of ammunition and grenades.</li>
                <li><b>Assassin Interception: </b>A unique gameplay mechanic where Shay must counter Assassins who try to ambush him, reversing the traditional roles of the series.</li>
                <li><b>Upgrades and Customization: </b>Players can upgrade the Morrigan, Shay's equipment, and purchase new weapons and outfits.</li>
              </ul>
            </div>
            <br />
            <div className="themes-container">
              <h3>Themes</h3>
              <p>"Assassin's Creed Rogue" explores several key themes:</p>
              <br />
              <ol>
                <li><b>Loyalty and Betrayal: </b>The game delves into Shay's sense of betrayal by the Assassins and his loyalty to the Templar cause.</li>
                <li><b>Moral Ambiguity: </b>It highlights the complex and often ambiguous moralities of both the Assassins and Templars, challenging players' perceptions of right and wrong.</li>
                <li><b>Redemption and Guilt: </b>Shay's journey is marked by his quest for redemption and the guilt he carries for the destruction caused by the Assassins' pursuit of artifacts.</li>
                <li><b>Conflict and Consequences: </b>The game emphasizes the far-reaching consequences of the Assassins' and Templars' actions on history and individuals' lives.</li>
              </ol>
            </div>
            <br />
            <div className="reception-container">
              <h3>Reception</h3>
              <p>"Assassin's Creed Rogue" received generally positive reviews:</p>
              <br />
              <ol>
                <li><b>Story and Protagonist: </b>The narrative and Shay's character arc were praised for their depth and the unique perspective on the Assassin-Templar conflict.</li>
                <li><b>Naval Gameplay: </b>The naval exploration and combat mechanics were well-received, building on the success of "Black Flag."</li>
                <li><b>World Design: </b>The diverse settings of the North Atlantic, New York, and the River Valley were appreciated for their historical detail and variety.</li>
                <li><b>Criticisms: </b>Some reviewers pointed out that the game reused many assets from "Black Flag" and felt more like an expansion than a full-fledged new entry. However, these criticisms were minor compared to the overall positive reception.</li>
              </ol>
              <br />
              <p>Overall, "Assassin's Creed Rogue" is recognized for its compelling story, engaging gameplay, and unique perspective, making it a significant and memorable entry in the Assassin's Creed series.</p>
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
              <p><b>Total Reviews: </b><span id='acrogue-total-reviews'></span></p>
              <br />
              <div className="reviews">
                <p><b>Exceptional: </b>%<span id='acrogue-exceptional'></span></p>
                <p><b>Recommended: </b>%<span id='acrogue-recommended'></span></p>
                <p><b>Boring: </b>%<span id='acrogue-boring'></span></p>
                <p><b>Skip: </b>%<span id='acrogue-skip'></span></p>
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

export default AcRogue
