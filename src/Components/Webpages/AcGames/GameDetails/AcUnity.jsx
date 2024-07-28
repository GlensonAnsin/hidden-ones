import './AcGlobal.css'
import acUnity from '../../../../assets/ac-posters/ac-unity.png'
import Navbar from '../../../Navbar/Navbar'
import pic1 from '../../../../assets/acunity-gallery/pic1.jpg'
import pic2 from '../../../../assets/acunity-gallery/pic2.jpg'
import pic3 from '../../../../assets/acunity-gallery/pic3.jpg'
import pic4 from '../../../../assets/acunity-gallery/pic4.jpg'
import pic5 from '../../../../assets/acunity-gallery/pic5.jpg'
import pic6 from '../../../../assets/acunity-gallery/pic6.jpg'
import pic7 from '../../../../assets/acunity-gallery/pic7.jpg'
import pic8 from '../../../../assets/acunity-gallery/pic8.jpg'
import pic9 from '../../../../assets/acunity-gallery/pic9.jpg'
import pic10 from '../../../../assets/acunity-gallery/pic10.jpg'
import { useEffect, useState } from 'react'
import backBtn from '../../../../assets/back-button.png'
import { Link } from 'react-router-dom'
import ShowImg from '../../../ShowImg/ShowImg'
import Footer from '../../../Footer/Footer'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'

const AcUnity = () => {
  const [imgLink, setImgLink] = useState(null);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const apiKey = 'ebecb9fad0bb4184a5498c97d7e27112';
    const gameId = '8146';

    const fetchAcUnity = async () => {
      try{
        const response = await fetch(`https://api.rawg.io/api/games/${gameId}?key=${apiKey}`);

        if (!response.ok) {
          throw new Error('Could not fetch resource');
        }

        const data = await response.json();
        document.getElementById('acunity-total-reviews').innerHTML = data.reviews_count;
        document.getElementById('acunity-recommended').innerHTML = data.ratings[0].percent;
        document.getElementById('acunity-boring').innerHTML = data.ratings[1].percent;
        document.getElementById('acunity-exceptional').innerHTML = data.ratings[2].percent;
        document.getElementById('acunity-skip').innerHTML = data.ratings[3].percent;
        
      } catch (error) {
        console.error(error);
      }
    }
    fetchAcUnity();
  }, [])

  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="container">
          <Link to='/acgames'><img className='back-btn' src={backBtn} alt="back" /></Link>
          <div className="poster-detail-container">
            <div className="poster-container">
              <img className="ac-poster" src={acUnity} alt="poster" />
            </div>
            <div className="details-container">
            <h2>Assassin's Creed Unity</h2>
            <br />
            <h4>Release Date: November 11, 2014</h4>
            <h4>Platform: Microsoft Windows, PlayStation 4, Xbox One, Amazon Luna, GeForce Now</h4>
            <h4>Size: 50 GB</h4>
            <br />
            <p>"Assassin's Creed Unity," released in 2014, is the eighth main installment in the Assassin's Creed series, developed by Ubisoft. The game is set during the French Revolution and follows Arno Dorian, a young Assassin seeking redemption and revenge. "Unity" is notable for its detailed recreation of Paris, its emphasis on parkour, and its introduction of cooperative multiplayer gameplay.</p>
            </div>
          </div>
          <br />
          <div className="content-container">
            <div className="trailer-container">
              <h3>Trailer</h3>
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/xzCEdSKMkdU"></iframe>
              </div>
            </div>
            <br />
            <div className="key-characters-container">
              <h3>Key Characters</h3>
              <ol>
                <li><b>Arno Dorian: </b>The protagonist, a young Assassin seeking redemption and revenge amidst the French Revolution.</li>
                <li><b>Élise de la Serre: </b>Arno's love interest and a Templar, whose complicated relationship with Arno drives much of the story.</li>
                <li><b>Pierre Bellec: </b>Arno's mentor within the Assassin Brotherhood, who later betrays the Assassins.</li>
                <li><b>François de la Serre: </b>Templar Grand Master and Arno's adoptive father, whose murder sets the story in motion.</li>
                <li><b>Germain: </b>The primary antagonist, a Templar who manipulates the Revolution for his gain.</li>
                <li><b>Marquis de Sade: </b>An ally of Arno, known for his libertine lifestyle and philosophical views.</li>
                <li><b>Napoleon Bonaparte: </b>A rising military leader during the Revolution, who interacts with Arno.</li>
              </ol>
            </div>
            <br />
            <div className="plot-container">
              <h3>Plot</h3>
              <p><b>Prologue: Childhood and Tragedy</b></p>
              <p>The story begins in 1776 with a young Arno Dorian, who witnesses the murder of his father, Charles Dorian, an Assassin. Arno is subsequently adopted by François de la Serre, a Templar Grand Master, in Versailles. Years later, in 1789, François is murdered, and Arno is framed for the crime.</p>
              <br />
              <p><b>Joining the Assassins</b></p>
              <p>Imprisoned in the Bastille, Arno meets Pierre Bellec, an Assassin. They escape during the storming of the Bastille, and Bellec introduces Arno to the Assassin Brotherhood in Paris. Seeking redemption for his perceived failures and revenge for François' death, Arno joins the Brotherhood.</p>
              <br />
              <p><b>The Revolution and the Templar Conspiracy</b></p>
              <p>As the Revolution intensifies, Arno uncovers a Templar conspiracy to manipulate the revolutionaries for their gain. He is reunited with Élise de la Serre, François' daughter and a Templar, with whom he shares a complicated romantic relationship. Despite their conflicting allegiances, they work together to uncover the Templars' plans.</p>
              <br />
              <p><b>Key Missions and Events</b></p>
              <ol>
                <li><b>Investigations and Assassinations: </b>Arno undertakes various missions to assassinate Templar leaders, uncover conspiracies, and protect key figures of the Revolution.</li>
                <li><b>Personal Conflicts: </b>Arno's relationship with Élise and his struggle to balance his loyalty to the Assassins with his personal vendetta create internal and external conflicts.</li>
                <li><b>Betrayals and Revelations: </b>The story reveals betrayals within both the Assassins and Templars, with Arno's mentor Bellec turning against the Brotherhood.</li>
              </ol>
              <br />
              <p><b>Climax and Resolution</b></p>
              <p>The climax occurs when Arno and Élise confront Germain, the true antagonist and leader of the Templar conspiracy. In a final battle beneath the Temple, Élise is killed, and Arno avenges her by killing Germain. Arno reflects on the lessons learned and commits to upholding the Assassin Brotherhood's principles, dedicating himself to the continued fight for freedom.</p>
            </div>
            <br />
            <div className="setting-container">
              <h3>Setting</h3>
              <p>The game is set primarily in:</p>
              <br />
              <ol>
                <li><b>Paris, France: </b>During the French Revolution (late 18th century), featuring iconic landmarks such as Notre-Dame, the Louvre, and the Bastille.</li>
                <li><b>Versailles: </b>Early parts of the game take place in the Palace of Versailles.</li>
              </ol>
            </div>
            <br />
            <div className="gameplay-container">
              <h3>Gameplay</h3>
              <p>"Assassin's Creed Unity" introduces several new gameplay elements and improvements:</p>
              <br />
              <ul>
                <li><b>Parkour and Movement: </b>Enhanced parkour system with more fluid and natural movement, allowing players to navigate vertical environments with ease.</li>
                <li><b>Combat: </b>Refined combat mechanics focusing on timing and skill, with a variety of weapons and combat styles.</li>
                <li><b>Stealth: </b>Improved stealth mechanics, including a cover system, crowd blending, and distraction tools.</li>
                <li><b>Cooperative Multiplayer: </b>Players can join up to three other players in cooperative missions, completing heists and assassination missions together.</li>
                <li><b>Customization: </b>Extensive character customization options, including outfits, weapons, and skills, allowing players to tailor Arno to their playstyle.</li>
                <li><b>Open World Exploration: </b>A detailed and dynamic recreation of Paris, with numerous side missions, collectibles, and events reflecting the tumultuous period of the Revolution.</li>
              </ul>
            </div>
            <br />
            <div className="themes-container">
              <h3>Themes</h3>
              <p>"Assassin's Creed Unity" explores several key themes:</p>
              <br />
              <ol>
                <li><b>Revolution and Change: </b>The game examines the upheaval and chaos of the French Revolution, highlighting the quest for liberty and the costs of radical change.</li>
                <li><b>Redemption and Revenge: </b>rno's journey is driven by his desire for redemption and revenge, reflecting the personal struggles within larger historical events.</li>
                <li><b>Loyalty and Betrayal: </b>The story delves into themes of loyalty and betrayal within the Assassins and Templars, emphasizing the complex nature of their conflict.</li>
                <li><b>Love and Conflict: </b>The relationship between Arno and Élise represents the personal conflicts that arise from differing ideologies and loyalties.</li>
              </ol>
            </div>
            <br />
            <div className="reception-container">
              <h3>Reception</h3>
              <p>"Assassin's Creed Unity" received mixed reviews:</p>
              <br />
              <ol>
                <li><b>Graphics and World Design: </b>The game's recreation of Paris was widely praised for its stunning visuals, attention to detail, and immersive atmosphere.</li>
                <li><b>Parkour and Movement: </b>The improved parkour system and fluid movement mechanics were positively received.
                </li>
                <li><b>Story and Characters: </b>The narrative and character development, particularly the relationship between Arno and Élise, were appreciated.</li>
                <li><b>Technical Issues: </b>At launch, the game faced significant criticism for numerous bugs, glitches, and performance issues, which overshadowed many of its positive aspects.</li>
                <li><b>Multiplayer: </b>The cooperative multiplayer mode was a welcome addition, though it faced some technical challenges.</li>
              </ol>
              <br />
              <p>Overall, "Assassin's Creed Unity" is recognized for its ambitious portrayal of the French Revolution, innovative gameplay mechanics, and complex characters, despite its rocky launch and technical problems.</p>
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
              <p><b>Total Reviews: </b><span id='acunity-total-reviews'></span></p>
              <br />
              <div className="reviews">
                <p><b>Exceptional: </b>%<span id='acunity-exceptional'></span></p>
                <p><b>Recommended: </b>%<span id='acunity-recommended'></span></p>
                <p><b>Boring: </b>%<span id='acunity-boring'></span></p>
                <p><b>Skip: </b>%<span id='acunity-skip'></span></p>
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

export default AcUnity
