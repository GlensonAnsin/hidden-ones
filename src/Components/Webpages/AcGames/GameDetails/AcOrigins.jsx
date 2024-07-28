import './AcGlobal.css'
import acOrigins from '../../../../assets/ac-posters/ac-origins.png'
import Navbar from '../../../Navbar/Navbar'
import pic1 from '../../../../assets/acorigins-gallery/pic1.jpg'
import pic2 from '../../../../assets/acorigins-gallery/pic2.jpeg'
import pic3 from '../../../../assets/acorigins-gallery/pic3.jpg'
import pic4 from '../../../../assets/acorigins-gallery/pic4.jpg'
import pic5 from '../../../../assets/acorigins-gallery/pic5.jpg'
import pic6 from '../../../../assets/acorigins-gallery/pic6.jpg'
import pic7 from '../../../../assets/acorigins-gallery/pic7.jpg'
import pic8 from '../../../../assets/acorigins-gallery/pic8.jpg'
import pic9 from '../../../../assets/acorigins-gallery/pic9.jpg'
import pic10 from '../../../../assets/acorigins-gallery/pic10.jpg'
import { useEffect, useState } from 'react'
import backBtn from '../../../../assets/back-button.png'
import { Link } from 'react-router-dom'
import ShowImg from '../../../ShowImg/ShowImg'
import Footer from '../../../Footer/Footer'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'

const AcOrigins = () => {
  const [imgLink, setImgLink] = useState(null);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const apiKey = 'ebecb9fad0bb4184a5498c97d7e27112';
    const gameId = '28153';

    const fetchAcOrigins = async () => {
      try{
        const response = await fetch(`https://api.rawg.io/api/games/${gameId}?key=${apiKey}`);

        if (!response.ok) {
          throw new Error('Could not fetch resource');
        }

        const data = await response.json();
        document.getElementById('acorigins-total-reviews').innerHTML = data.reviews_count;
        document.getElementById('acorigins-recommended').innerHTML = data.ratings[0].percent;
        document.getElementById('acorigins-exceptional').innerHTML = data.ratings[1].percent;
        document.getElementById('acorigins-boring').innerHTML = data.ratings[2].percent;
        document.getElementById('acorigins-skip').innerHTML = data.ratings[3].percent;
        
      } catch (error) {
        console.error(error);
      }
    }
    fetchAcOrigins();

  }, [])
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="container">
          <Link to='/acgames'><img className='back-btn' src={backBtn} alt="back" /></Link>
          <div className="poster-detail-container">
            <div className="poster-container">
              <img className="ac-poster" src={acOrigins} alt="poster" />
            </div>
            <div className="details-container">
            <h2>Assassin's Creed Origins</h2>
            <br />
            <h4>Release Date: October 27, 2017</h4>
            <h4>Platform: Microsoft Windows, PlayStation 4, Xbox One, Xbox Cloud Gaming, Amazon Luna, GeForce Now</h4>
            <h4>Size: 42 GB</h4>
            <br />
            <p>"Assassin's Creed Origins," released in 2017, is the tenth main installment in the Assassin's Creed series, developed by Ubisoft. The game is set in Ancient Egypt during the Ptolemaic period and follows Bayek of Siwa, the last Medjay, as he seeks to avenge the death of his son and uncovers the origins of the Assassin Brotherhood. "Origins" marks a significant shift in the series, introducing a revamped combat system, RPG elements, and an open-world exploration focus.</p>
            </div>
          </div>
          <br />
          <div className="content-container">
            <div className="trailer-container">
              <h3>Trailer</h3>
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/kGq7ZCth7QY"></iframe>
              </div>
            </div>
            <br />
            <div className="key-characters-container">
              <h3>Key Characters</h3>
              <p><b>Modern Day</b></p>
              <ol>
                <li><b>Layla Hassan: </b>A modern-day Abstergo employee who discovers Bayek's story through his genetic memories.</li>
              </ol>
              <br />
              <p><b>Bayek's Story</b></p>
              <ol>
                <li><b>Bayek of Siwa: </b>The protagonist, a Medjay seeking vengeance for his son's death and co-founder of the Assassin Brotherhood.</li>
                <li><b>Aya/Amunet: </b>Bayek's wife, a fierce warrior deeply involved in political intrigue, who becomes a key figure in the early Brotherhood.</li>
                <li><b>Cleopatra: </b>The Queen of Egypt, who seeks Bayek and Aya's help to reclaim her throne.</li>
                <li><b>Julius Caesar: </b>The Roman general and statesman who becomes entangled in the political power struggle in Egypt.</li>
                <li><b>Flavius Metellus: </b>A high-ranking member of the Order of the Ancients, who plays a key role in the conspiracy against Egypt.</li>
                <li><b>Lucius Septimius: </b>Another prominent member of the Order, allied with Flavius and Caesar.</li>
              </ol>
            </div>
            <br />
            <div className="plot-container">
              <h3>Plot</h3>
              <p><b>Prologue: The Birth of a Quest</b></p>
              <p>Bayek of Siwa, a Medjay, and protector of his community, lives a peaceful life with his wife Aya and their son Khemu. Tragedy strikes when Khemu is killed during a confrontation with members of a secretive order known as the Order of the Ancients. This event sets Bayek on a path of vengeance.</p>
              <br />
              <p><b>Journey Across Egypt</b></p>
              <p>Bayek embarks on a quest to hunt down the members of the Order of the Ancients responsible for his son's death. His journey takes him across Egypt, where he encounters various allies and enemies, including historical figures such as Cleopatra and Julius Caesar.</p>
              <br />
              <p><b>Uncovering the Conspiracy</b></p>
              <p>As Bayek eliminates members of the Order, he uncovers their larger conspiracy to control Egypt and manipulate its rulers. He learns that the Order of the Ancients is the precursor to the Templar Order, seeking power through control and domination.</p>
              <br />
              <p><b>The Founding of the Brotherhood</b></p>
              <p>Throughout his journey, Bayek is supported by Aya, who is deeply involved in political intrigue and alliances. Together, they realize that their personal vendetta is part of a larger struggle for freedom against tyranny. They decide to form a secret organization to protect the free will of the people, laying the foundation for what will become the Assassin Brotherhood.</p>
              <br />
              <p><b>Climax and Resolution</b></p>
              <p>The climax occurs when Bayek and Aya confront the leaders of the Order, including Flavius and Lucius Septimius, who have allied with Caesar. After defeating them, Aya travels to Rome, where she assassinates Caesar to prevent the Order from gaining further power. Bayek and Aya part ways to continue their fight against oppression, with Bayek remaining in Egypt and Aya operating in Rome as Amunet.</p>
            </div>
            <br />
            <div className="setting-container">
              <h3>Setting</h3>
              <p>The game is set in:</p>
              <br />
              <ol>
                <li><b>Ancient Egypt: </b>During the Ptolemaic period, featuring locations such as Siwa, Alexandria, Memphis, the Nile Delta, and Giza.</li>
              </ol>
            </div>
            <br />
            <div className="gameplay-container">
              <h3>Gameplay</h3>
              <p>"Assassin's Creed Origins" introduces several new gameplay elements and improvements:</p>
              <br />
              <ul>
                <li><b>Open-World Exploration: </b>A vast and diverse open world that includes deserts, cities, temples, and historical landmarks.</li>
                <li><b>RPG Elements: </b>Introduction of RPG mechanics, including leveling up, skill trees, and gear customization.</li>
                <li><b>Revamped Combat System: </b>A new combat system focusing on hitboxes and timing, offering a more dynamic and challenging experience.</li>
                <li><b>Quests and Side Activities: </b>A variety of main and side quests, including tomb exploration, treasure hunting, and solving puzzles.</li>
                <li><b>Eagle Vision: </b>Bayek's companion eagle, Senu, is used to scout and mark enemies, adding a new layer to the stealth and exploration mechanics.</li>
                <li><b>Historical Accuracy: </b>Detailed and historically accurate depictions of Ancient Egyptian culture, architecture, and daily life.</li>
              </ul>
            </div>
            <br />
            <div className="themes-container">
              <h3>Themes</h3>
              <p>"Assassin's Creed Origins" explores several key themes:</p>
              <br />
              <ol>
                <li><b>Vengeance and Justice: </b>Bayek's personal quest for revenge transforms into a broader fight for justice and the protection of free will.</li>
                <li><b>Origins and Legacy: </b>The game explores the origins of the Assassin Brotherhood, setting the stage for the centuries-long conflict with the Templars.</li>
                <li><b>Freedom and Oppression: </b>The struggle against the Order of the Ancients reflects the broader fight against tyranny and control.</li>
                <li><b>Loss and Redemption: </b>Bayek and Aya's journey is marked by personal loss and their quest for redemption through their actions.</li>
              </ol>
            </div>
            <br />
            <div className="reception-container">
              <h3>Reception</h3>
              <p>"Assassin's Creed Origins" received generally positive reviews:</p>
              <br />
              <ol>
                <li><b>Setting and World Design: </b>The detailed and immersive recreation of Ancient Egypt was highly praised for its beauty and historical accuracy.</li>
                <li><b>Gameplay Mechanics: </b>The revamped combat system, RPG elements, and open-world exploration were well-received, providing a fresh experience for the series.</li>
                <li><b>Story and Characters: </b>The narrative and character development, particularly Bayek's story and his relationship with Aya, were appreciated.</li>
                <li><b>Side Content and Activities: </b>The variety and depth of side quests and activities added significant value to the gameplay experience.</li>
                <li><b>Criticisms: </b>Some critics noted minor technical issues and felt that the pacing of the story could be uneven at times.</li>
              </ol>
              <br />
              <p>Overall, "Assassin's Creed Origins" is recognized for its ambitious overhaul of the series' formula, its engaging characters and story, and its stunning depiction of Ancient Egypt, making it a standout entry in the Assassin's Creed franchise.</p>
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
              <p><b>Total Reviews: </b><span id='acorigins-total-reviews'></span></p>
              <br />
              <div className="reviews">
                <p><b>Exceptional: </b>%<span id='acorigins-exceptional'></span></p>
                <p><b>Recommended: </b>%<span id='acorigins-recommended'></span></p>
                <p><b>Boring: </b>%<span id='acorigins-boring'></span></p>
                <p><b>Skip: </b>%<span id='acorigins-skip'></span></p>
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

export default AcOrigins
