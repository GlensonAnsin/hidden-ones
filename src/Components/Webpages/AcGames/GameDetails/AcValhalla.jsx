import './AcGlobal.css'
import acValhalla from '../../../../assets/ac-posters/ac-valhalla.png'
import Navbar from '../../../Navbar/Navbar'
import pic1 from '../../../../assets/acvalhalla-gallery/pic1.jpeg'
import pic2 from '../../../../assets/acvalhalla-gallery/pic2.jpeg'
import pic3 from '../../../../assets/acvalhalla-gallery/pic3.jpeg'
import pic4 from '../../../../assets/acvalhalla-gallery/pic4.png'
import pic5 from '../../../../assets/acvalhalla-gallery/pic5.jpg'
import pic6 from '../../../../assets/acvalhalla-gallery/pic6.jpg'
import pic7 from '../../../../assets/acvalhalla-gallery/pic7.jpg'
import pic8 from '../../../../assets/acvalhalla-gallery/pic8.jpg'
import pic9 from '../../../../assets/acvalhalla-gallery/pic9.jpg'
import pic10 from '../../../../assets/acvalhalla-gallery/pic10.jpg'
import { useEffect, useState } from 'react'
import backBtn from '../../../../assets/back-button.png'
import { Link } from 'react-router-dom'
import ShowImg from '../../../ShowImg/ShowImg'
import Footer from '../../../Footer/Footer'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'

const AcValhalla = () => {
  const [imgLink, setImgLink] = useState(null);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const apiKey = 'ebecb9fad0bb4184a5498c97d7e27112';
    const gameId = '437059';

    const fetchAcValhalla = async () => {
      try{
        const response = await fetch(`https://api.rawg.io/api/games/${gameId}?key=${apiKey}`);

        if (!response.ok) {
          throw new Error('Could not fetch resource');
        }

        const data = await response.json();
        document.getElementById('acvalhalla-total-reviews').innerHTML = data.reviews_count;
        document.getElementById('acvalhalla-recommended').innerHTML = data.ratings[0].percent;
        document.getElementById('acvalhalla-boring').innerHTML = data.ratings[1].percent;
        document.getElementById('acvalhalla-exceptional').innerHTML = data.ratings[2].percent;
        document.getElementById('acvalhalla-skip').innerHTML = data.ratings[3].percent;
        
      } catch (error) {
        console.error(error);
      }
    }
    fetchAcValhalla();
  }, [])

  return (
    <div>
      <ScrollToTop />
        <Navbar />
        <div className="container">
          <Link to='/acgames'><img className='back-btn' src={backBtn} alt="back" /></Link>
          <div className="poster-detail-container">
            <div className="poster-container">
              <img className="ac-poster" src={acValhalla} alt="poster" />
            </div>
            <div className="details-container">
            <h2>Assassin's Creed Valhalla</h2>
            <br />
            <h4>Release Date: November 10, 2020</h4>
            <h4>Platform: Microsoft Windows, PlayStation 4, PlayStation 5, Xbox Series X and Series S, Xbox One</h4>
            <h4>Size: 47 GB</h4>
            <br />
            <p>"Assassin's Creed Valhalla," released in 2020, is the twelfth main installment in the Assassin's Creed series, developed by Ubisoft. The game is set during the Viking invasion of England in the 9th century and follows Eivor, a Viking raider who becomes embroiled in the conflict between the Assassins and the Templars. The game introduces new mechanics, such as raids, settlement building, and a refined combat system.</p>
            </div>
          </div>
          <br />
          <div className="content-container">
            <div className="trailer-container">
              <h3>Trailer</h3>
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/L0Fr3cS3MtY"></iframe>
              </div>
            </div>
            <br />
            <div className="key-characters-container">
              <h3>Key Characters</h3>
              <p><b>Modern Day</b></p>
              <ol>
                <li><b>Layla Hassan: </b>The modern-day protagonist continuing her quest to prevent a global catastrophe using Isu artifacts.</li>
              </ol>
              <br />
              <p><b>Eivor's Story</b></p>
              <ol>
                <li><b>Eivor Varinsdottir/Varinson: </b>The protagonist, a Viking raider and leader seeking to establish a new home in England.</li>
                <li><b>Sigurd Styrbjornsson: </b>Eivor's adoptive brother, who believes he has a grand destiny linked to the gods.</li>
                <li><b>Basim Ibn Ishaq: </b>A Hidden One (Assassin) who mentors Eivor and has his own mysterious agenda.</li>
                <li><b>Randvi: </b>Sigurd's wife and the chief advisor at Ravensthorpe, playing a crucial role in managing alliances.</li>
                <li><b>King Alfred of Wessex: </b>A historical figure and antagonist who seeks to unify England under Christian rule.</li>
              </ol>
            </div>
            <br />
            <div className="plot-container">
              <h3>Plot</h3>
              <p><b>Prologue: A Viking's Fate</b></p>
              <p>Eivor Varinsdottir/Varinson, a Viking warrior, seeks revenge against Kjotve the Cruel, who killed their parents. After avenging their death, Eivor and their adoptive brother Sigurd set sail for England to establish a new settlement and seek fortune.</p>
              <br />
              <p><b>Establishing Ravensthorpe</b></p>
              <p>In England, Eivor and Sigurd establish the settlement of Ravensthorpe. They form alliances with various Anglo-Saxon kingdoms and Danish Viking leaders, navigating the complex political landscape.</p>
              <br />
              <p><b>Sigurd's Destiny</b></p>
              <p>Sigurd, influenced by visions and prophecies, believes he is destined for greatness. This leads to tension between him and Eivor, especially as Sigurd becomes increasingly drawn to mystical and esoteric beliefs.</p>
              <br />
              <p><b>The Order of the Ancients</b></p>
              <p>Eivor uncovers a conspiracy involving the Order of the Ancients (precursors to the Templar Order). Working with Hidden Ones (the early Assassins), Eivor hunts down members of the Order to dismantle their influence over England.</p>
              <br />
              <p><b>Mythical Journeys</b></p>
              <p>Throughout the journey, Eivor experiences visions and memories of Odin, exploring mythical realms such as Asgard and Jotunheim. These sequences reveal deeper lore about the First Civilization (Isu) and their impact on human history.</p>
              <br />
              <p><b>Climax and Resolution</b></p>
              <p>The story culminates in a confrontation with the leader of the Order of the Ancients in England and resolving the conflict with Sigurd. Eivor's decisions throughout the game influence the fate of their settlement and alliances. In the modern-day storyline, Layla Hassan's arc reaches a critical point involving the Isu artifacts and the impending catastrophe.</p>
            </div>
            <br />
            <div className="setting-container">
              <h3>Setting</h3>
              <p>The game is set in:</p>
              <br />
              <ol>
                <li><b>Norway: </b>Eivor's homeland, where the story begins.</li>
                <li><b>England: </b>The primary setting, featuring regions such as Mercia, East Anglia, Northumbria, and Wessex.</li>
                <li><b>Vinland: </b>A location across the Atlantic, explored during a specific story arc.</li>
                <li><b>Asgard and Jotunheim: </b>Mythical realms visited during mystical visions.</li>
              </ol>
            </div>
            <br />
            <div className="gameplay-container">
              <h3>Gameplay</h3>
              <p>"Assassin's Creed Valhalla" introduces several new gameplay elements and improvements:</p>
              <br />
              <ul>
                <li><b>Raids and Settlements: </b>Players can lead raids on Saxon fortresses and monasteries to gather resources and grow their settlement, Ravensthorpe.</li>
                <li><b>Open-World Exploration: </b>A vast open world that includes both England and parts of Norway, featuring dynamic weather, day-night cycles, and diverse biomes.</li>
                <li><b>Combat System: </b>Refined combat mechanics, including dual-wielding weapons, a variety of combat abilities, and brutal finishing moves.</li>
                <li><b>RPG Elements: </b>Extensive RPG elements, including dialogue choices, branching storylines, and multiple endings based on player decisions.</li>
                <li><b>Stealth and Assassinations: </b>Enhanced stealth mechanics, including social stealth, disguises, and the return of the iconic Hidden Blade.</li>
                <li><b>Mythical and Historical Quests: </b>Integration of mythical stories and historical events, offering a blend of grounded and fantastical narratives.</li>
              </ul>
            </div>
            <br />
            <div className="themes-container">
              <h3>Themes</h3>
              <p>"Assassin's Creed Valhalla" explores several key themes:</p>
              <br />
              <ol>
                <li><b>Identity and Destiny: </b>Eivor's journey is marked by questions of identity, destiny, and the influence of fate versus free will.</li>
                <li><b>Home and Belonging: The establishment of Ravensthorpe and the creation of a new home is central to the narrative.</b></li>
                <li><b>Conflict and Conquest: </b>The Viking invasion of England and the ensuing conflicts highlight themes of power, conquest, and cultural clash.</li>
                <li><b>Myth and Reality: </b>The game intertwines Norse mythology with historical events, exploring the blurred lines between myth and reality.</li>
              </ol>
            </div>
            <br />
            <div className="reception-container">
              <h3>Reception</h3>
              <p>"Assassin's Creed Valhalla" received generally positive reviews:</p>
              <br />
              <ol>
                <li><b>Setting and World Design: </b>The detailed and expansive recreation of 9th-century England and Norway was highly praised for its beauty and historical depth.</li>
                <li><b>Story and Characters: </b>The narrative, character development, and player choices were well-received, providing a compelling and personalized experience.</li>
                <li><b>Gameplay Mechanics: </b>The integration of raids, settlement building, and refined combat mechanics were seen as significant improvements.</li>
                <li><b>Side Content and Activities: </b>The variety and depth of side quests, mythical adventures, and world exploration added significant value to the game.</li>
                <li><b>Criticisms: </b>Some critics noted technical issues and bugs at launch, as well as occasional repetitiveness in certain gameplay elements.</li>
              </ol>
              <br />
              <p>Overall, "Assassin's Creed Valhalla" is recognized for its ambitious blend of historical and mythical storytelling, engaging gameplay mechanics, and immersive world-building, making it a standout entry in the Assassin's Creed series.</p>
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
              <p><b>Total Reviews: </b><span id='acvalhalla-total-reviews'></span></p>
              <br />
              <div className="reviews">
                <p><b>Exceptional: </b>%<span id='acvalhalla-exceptional'></span></p>
                <p><b>Recommended: </b>%<span id='acvalhalla-recommended'></span></p>
                <p><b>Boring: </b>%<span id='acvalhalla-boring'></span></p>
                <p><b>Skip: </b>%<span id='acvalhalla-skip'></span></p>
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

export default AcValhalla
