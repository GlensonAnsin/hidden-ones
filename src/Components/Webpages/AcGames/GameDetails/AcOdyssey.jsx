import './AcGlobal.css'
import acOdyssey from '../../../../assets/ac-posters/ac-odyssey.png'
import Navbar from '../../../Navbar/Navbar'
import pic1 from '../../../../assets/acodyssey-gallery/pic1.png'
import pic2 from '../../../../assets/acodyssey-gallery/pic2.jpg'
import pic3 from '../../../../assets/acodyssey-gallery/pic3.jpg'
import pic4 from '../../../../assets/acodyssey-gallery/pic4.jpg'
import pic5 from '../../../../assets/acodyssey-gallery/pic5.jpg'
import pic6 from '../../../../assets/acodyssey-gallery/pic6.jpg'
import pic7 from '../../../../assets/acodyssey-gallery/pic7.jpg'
import pic8 from '../../../../assets/acodyssey-gallery/pic8.jpg'
import pic9 from '../../../../assets/acodyssey-gallery/pic9.jpg'
import pic10 from '../../../../assets/acodyssey-gallery/pic10.jpg'
import { useEffect, useState } from 'react'
import backBtn from '../../../../assets/back-button.png'
import { Link } from 'react-router-dom'
import ShowImg from '../../../ShowImg/ShowImg'
import Footer from '../../../Footer/Footer'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'

const AcOdyssey = () => {
  const [imgLink, setImgLink] = useState(null);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const apiKey = 'ebecb9fad0bb4184a5498c97d7e27112';
    const gameId = '58616';

    const fetchAcOdyssey = async () => {
      try{
        const response = await fetch(`https://api.rawg.io/api/games/${gameId}?key=${apiKey}`);

        if (!response.ok) {
          throw new Error('Could not fetch resource');
        }

        const data = await response.json();
        document.getElementById('acodyssey-total-reviews').innerHTML = data.reviews_count;
        document.getElementById('acodyssey-recommended').innerHTML = data.ratings[0].percent;
        document.getElementById('acodyssey-exceptional').innerHTML = data.ratings[1].percent;
        document.getElementById('acodyssey-boring').innerHTML = data.ratings[2].percent;
        document.getElementById('acodyssey-skip').innerHTML = data.ratings[3].percent;
        
      } catch (error) {
        console.error(error);
      }
    }
    fetchAcOdyssey();
  }, [])

  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="container">
          <Link to='/acgames'><img className='back-btn' src={backBtn} alt="back" /></Link>
          <div className="poster-detail-container">
            <div className="poster-container">
              <img className="ac-poster" src={acOdyssey} alt="poster" />
            </div>
            <div className="details-container">
            <h2>Assassin's Creed Odyssey</h2>
            <br />
            <h4>Release Date: October 2, 2018</h4>
            <h4>Platform: Microsoft Windows, PlayStation 4, Nintendo Switch, Xbox One, Xbox Cloud Gaming, Amazon Luna, GeForce Now</h4>
            <h4>Size: 46 GB</h4>
            <br />
            <p>"Assassin's Creed Odyssey," released in 2018, is the eleventh main installment in the Assassin's Creed series, developed by Ubisoft. The game is set in Ancient Greece during the Peloponnesian War and follows a mercenary who becomes embroiled in a conspiracy involving their family and the fate of the Greek world. "Odyssey" continues the series' shift towards RPG mechanics, offering extensive player choice and multiple story paths.</p>
            </div>
          </div>
          <br />
          <div className="content-container">
            <div className="trailer-container">
              <h3>Trailer</h3>
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/s_SJZSAtLBA"></iframe>
              </div>
            </div>
            <br />
            <div className="key-characters-container">
              <h3>Key Characters</h3>
              <p><b>Modern Day</b></p>
              <ol>
                <li><b>Layla Hassan: </b>The modern-day protagonist continuing her quest to uncover the secrets of the First Civilization.</li>
              </ol>
              <br />
              <p><b>Alexios/Kassandra's Story</b></p>
              <ol>
                <li><b>Alexios/Kassandra: </b>The protagonist, a Spartan mercenary seeking to uncover their family's past and dismantle the Cult of Kosmos.</li>
                <li><b>Myrrine: </b>The protagonist's mother, a key figure in their quest for family reunification.</li>
                <li><b>Deimos: </b>The protagonist's sibling, brainwashed by the Cult of Kosmos to become a powerful enforcer.</li>
                <li><b>Pythagoras: </b>The protagonist's father, who holds important knowledge about ancient artifacts and the First Civilization.</li>
                <li><b>Aspasia: </b>The partner of Pericles and a covert member of the Cult of Kosmos, influencing Greek politics from behind the scenes.</li>
              </ol>
            </div>
            <br />
            <div className="plot-container">
              <h3>Plot</h3>
              <p><b>Prologue: The Misthios' Origins</b></p>
              <p>The story begins with the player choosing to play as either Alexios or Kassandra, descendants of King Leonidas of Sparta. As children, they are cast out of their home after a family tragedy orchestrated by the Cult of Kosmos, a shadowy organization manipulating Greek politics and society.</p>
              <br />
              <p><b>Mercenary Life and Discovery</b></p>
              <p>The story begins in Florence, where Ezio Auditore is a carefree young nobleman. His life changes dramatically when his father, Giovanni, and his brothers, Federico and Petruccio, are betrayed by their allies and executed by a corrupt magistrate, Uberto Alberti, who is working with the Templars. Ezio, with his mother Maria and sister Claudia, escapes the city with the help of his friend Leonardo da Vinci and other allies.</p>
              <br />
              <p><b>Journey of Revenge and Discovery</b></p>
              <p>Years later, Alexios/Kassandra becomes a mercenary (misthios) and is drawn back into the political intrigue of Greece when they receive a contract to kill a powerful general. This mission sets them on a path to uncover their family's history and the larger conspiracy threatening Greece.</p>
              <br />
              <p><b>Key Missions and Events</b></p>
              <ol>
                <li><b>Family Reunification: T</b>The protagonist seeks to reunite with their lost family members, including their mother Myrrine and sibling Deimos, who has become a powerful agent of the Cult.</li>
                <li><b>The Cult of Kosmos: </b>The protagonist systematically hunts down and eliminates members of the Cult, uncovering their plans to control Greece.</li>
                <li><b>Mythical Adventures: </b>Along the way, the protagonist encounters mythical creatures and explores legendary locations, adding a fantastical element to their journey.</li>
                <li><b>Peloponnesian War: </b>The protagonist becomes involved in the conflict between Athens and Sparta, influencing the outcome of key battles and political events.</li>
              </ol>
              <br />
              <p><b>Climax and Resolution</b></p>
              <p>The climax of the story involves confronting the leader of the Cult of Kosmos and dealing with the fallout of their actions. The protagonist can make choices that determine the fate of their family and the future of Greece. In the modern-day storyline, Layla Hassan uncovers significant revelations about the First Civilization and their artifacts.</p>
            </div>
            <br />
            <div className="setting-container">
              <h3>Setting</h3>
              <p>The game is set in:</p>
              <br />
              <ol>
                <li><b>Ancient Greece: </b>During the Peloponnesian War (431 - 422 BCE), featuring locations such as Athens, Sparta, Delos, and Kephallonia.</li>
              </ol>
            </div>
            <br />
            <div className="gameplay-container">
              <h3>Gameplay</h3>
              <p>"Assassin's Creed Odyssey" introduces several new gameplay elements and improvements:</p>
              <br />
              <ul>
                <li><b>RPG Mechanics: </b>Extensive RPG elements, including dialogue choices, branching storylines, and multiple endings based on player decisions.</li>
                <li><b>Skill Trees and Abilities: </b>A comprehensive skill tree system allowing players to specialize in different combat and stealth abilities.</li>
                <li><b>Naval Combat and Exploration: </b>Enhanced naval mechanics, allowing players to explore the Aegean Sea, engage in ship battles, and recruit crew members.</li>
                <li><b>Open-World Exploration: </b>A vast and diverse open world with dynamic weather, day-night cycles, and numerous side quests and activities.</li>
                <li><b>Combat and Stealth: </b>Refined combat system with abilities tied to a skill tree, offering varied combat styles. Improved stealth mechanics include environmental manipulation and assassination techniques.</li>
                <li><b>Mythical Elements: </b>Encounters with mythical creatures and exploration of legendary locations, adding a fantastical dimension to the historical setting.</li>
              </ul>
            </div>
            <br />
            <div className="themes-container">
              <h3>Themes</h3>
              <p>"Assassin's Creed Odyssey" explores several key themes:</p>
              <br />
              <ol>
                <li><b>Family and Identity: </b>The protagonist's quest to reunite with their family and uncover their heritage is central to the narrative.</li>
                <li><b>Freedom and Control: </b>The conflict with the Cult of Kosmos reflects broader themes of personal freedom versus societal control.</li>
                <li><b>War and Politics: </b>The backdrop of the Peloponnesian War highlights the complexities of political power, loyalty, and conflict.</li>
                <li><b>Myth and Legend: </b>The game intertwines historical events with Greek mythology, exploring the intersection of legend and reality.</li>
              </ol>
            </div>
            <br />
            <div className="reception-container">
              <h3>Reception</h3>
              <p>"Assassin's Creed Odyssey" received generally positive reviews:</p>
              <br />
              <ol>
                <li><b>Setting and World Design: </b>The detailed and expansive recreation of Ancient Greece was highly praised for its beauty and historical depth.</li>
                <li><b>Story and Characters: </b>The branching storylines, character development, and player choices were well-received, providing a personalized narrative experience.</li>
                <li><b>Gameplay Mechanics: </b>The integration of RPG elements, enhanced combat, and naval exploration were seen as significant improvements.</li>
                <li><b>Side Content and Activities: </b> The variety and depth of side quests, mythical adventures, and world exploration added significant value to the game.</li>
                <li><b>Criticisms: </b>Some critics noted the game's length and occasional repetitiveness in side missions. Additionally, the emphasis on microtransactions for in-game purchases received some negative feedback.</li>
              </ol>
              <br />
              <p>Overall, "Assassin's Creed Odyssey" is recognized for its ambitious RPG mechanics, engaging story, and stunning depiction of Ancient Greece, making it a standout entry in the Assassin's Creed series.</p>
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
              <p><b>Total Reviews: </b><span id='acodyssey-total-reviews'></span></p>
              <br />
              <div className="reviews">
                <p><b>Exceptional: </b>%<span id='acodyssey-exceptional'></span></p>
                <p><b>Recommended: </b>%<span id='acodyssey-recommended'></span></p>
                <p><b>Boring: </b>%<span id='acodyssey-boring'></span></p>
                <p><b>Skip: </b>%<span id='acodyssey-skip'></span></p>
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

export default AcOdyssey
