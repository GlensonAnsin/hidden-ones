import './AcGlobal.css'
import acFC from '../../../../assets/ac-posters/ac-freedom-cry.png'
import Navbar from '../../../Navbar/Navbar'
import pic1 from '../../../../assets/acfc-gallery/pic1.jpg'
import pic2 from '../../../../assets/acfc-gallery/pic2.jpg'
import pic3 from '../../../../assets/acfc-gallery/pic3.jpg'
import pic4 from '../../../../assets/acfc-gallery/pic4.jpg'
import pic5 from '../../../../assets/acfc-gallery/pic5.jpg'
import pic6 from '../../../../assets/acfc-gallery/pic6.jpg'
import pic7 from '../../../../assets/acfc-gallery/pic7.jpg'
import pic8 from '../../../../assets/acfc-gallery/pic8.jpg'
import pic9 from '../../../../assets/acfc-gallery/pic9.jpg'
import pic10 from '../../../../assets/acfc-gallery/pic10.jpg'
import { useEffect, useState } from 'react'
import backBtn from '../../../../assets/back-button.png'
import { Link } from 'react-router-dom'
import ShowImg from '../../../ShowImg/ShowImg'
import Footer from '../../../Footer/Footer'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'

const AcFC = () => {
  const [imgLink, setImgLink] = useState(null);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const apiKey = 'ebecb9fad0bb4184a5498c97d7e27112';
    const gameId = '3767';

    const fetchAcFC = async () => {
      try{
        const response = await fetch(`https://api.rawg.io/api/games/${gameId}?key=${apiKey}`);

        if (!response.ok) {
          throw new Error('Could not fetch resource');
        }

        const data = await response.json();
        document.getElementById('acfc-total-reviews').innerHTML = data.reviews_count;
        document.getElementById('acfc-boring').innerHTML = data.ratings[0].percent;
        document.getElementById('acfc-recommended').innerHTML = data.ratings[1].percent;
        document.getElementById('acfc-skip').innerHTML = data.ratings[2].percent;
        document.getElementById('acfc-exceptional').innerHTML = data.ratings[3].percent;
        
      } catch (error) {
        console.error(error);
      }
    }
    fetchAcFC();
  }, [])

  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="container">
          <Link to='/acgames'><img className='back-btn' src={backBtn} alt="back" /></Link>
          <div className="poster-detail-container">
            <div className="poster-container">
              <img className="ac-poster" src={acFC} alt="poster" />
            </div>
            <div className="details-container">
            <h2>Assassin's Creed IV: Freedom Cry</h2>
            <br />
            <h4>Release Date: December 17, 2013</h4>
            <h4>Platform: Microsoft Windows, PlayStation 3, PlayStation 4, Nintendo Switch, Xbox 360, Xbox One, GeForce Now</h4>
            <h4>Size: 30 GB</h4>
            <br />
            <p>"Assassin's Creed IV: Freedom Cry" is a standalone expansion to "Assassin's Creed IV: Black Flag," released in 2013. The game shifts focus to Adéwalé, a former slave turned Assassin and Edward Kenway's quartermaster. Set in the Caribbean, particularly in Port-au-Prince, Haiti, during the 18th century, the story revolves around Adéwalé's fight against slavery and his efforts to liberate enslaved people.</p>
            </div>
          </div>
          <br />
          <div className="content-container">
            <div className="trailer-container">
              <h3>Trailer</h3>
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/6Gu3ifv-7Ck"></iframe>
              </div>
            </div>
            <br />
            <div className="key-characters-container">
              <h3>Key Characters</h3>
              <ol>
                <li><b>Adéwalé: </b>The main protagonist, a former slave turned Assassin who fights to liberate enslaved people in the Caribbean.</li>
                <li><b>Bastienne Josèphe: </b>A brothel owner in Port-au-Prince who assists Adéwalé in his mission and has her own complex motives.</li>
                <li><b>Pierre: </b>The primary antagonist, a plantation owner and slave trader who profits from the brutal system Adéwalé seeks to destroy.</li>
                <li><b>Augustin Dieufort: </b>Leader of the Maroons and a key ally in Adéwalé's fight against slavery.</li>
              </ol>
            </div>
            <br />
            <div className="plot-container">
              <h3>Plot</h3>
              <p><b>Prologue</b></p>
              <p>Adéwalé, who has been a loyal quartermaster to Edward Kenway aboard the Jackdaw, has now become a full-fledged Assassin. The game begins with Adéwalé on a mission for the Assassin Brotherhood.</p>
              <br />
              <p><b>Shipwreck and Discovery</b></p>
              <p>Adéwalé's ship, the Experto Crede, is shipwrecked during a storm, leaving him stranded near Port-au-Prince. Upon arrival, he witnesses the brutal realities of slavery and decides to take action against it, driven by his past as a former slave.</p>
              <br />
              <p><b>Liberation Efforts</b></p>
              <p>Adéwalé joins forces with local Maroons (escaped slaves) to fight against the French colonial authorities and plantation owners who profit from the slave trade. He leads missions to free enslaved people, sabotage slave ships, and dismantle the infrastructure supporting slavery.</p>
              <br />
              <p><b>Key Missions and Events</b></p>
              <ol>
                <li><b>Rescue and Sabotage: </b>Adéwalé rescues slaves from plantations, ships, and auctions, building a network of liberated people who aid in his fight.</li>
                <li><b>Alliances and Betrayals: </b>He forms alliances with key figures, including Bastienne Josèphe, a local brothel owner with ties to the Maroons. However, not everyone can be trusted, and Adéwalé faces betrayals that challenge his mission.</li>
                <li><b>Confrontation with Pierre: </b>The primary antagonist, Pierre, a plantation owner and slave trader, becomes a central figure in Adéwalé's efforts. Adéwalé's mission culminates in a final confrontation with Pierre and his forces.</li>
              </ol>
              <br />
              <p><b>Climax and Resolution</b></p>
              <p>Adéwalé's efforts lead to significant victories against the slave trade in Port-au-Prince. He dismantles the operations of the slavers and liberates numerous slaves. Despite the challenges, Adéwalé's actions inspire hope and lay the groundwork for future resistance against oppression.</p>
            </div>
            <br />
            <div className="setting-container">
              <h3>Setting</h3>
              <p>The game is set primarily in:</p>
              <br />
              <ol>
                <li><b>Port-au-Prince, Haiti: </b>The main location where much of the game's action takes place.</li>
                <li><b>The Caribbean Sea: </b>Including various islands and locations relevant to the slave trade.</li>
              </ol>
            </div>
            <br />
            <div className="gameplay-container">
              <h3>Gameplay</h3>
              <p>"Assassin's Creed IV: Freedom Cry" retains many gameplay elements from "Assassin's Creed IV: Black Flag" while introducing new mechanics and objectives:</p>
              <br />
              <ul>
                <li><b>Naval Combat: </b>Players command Adéwalé's ship, the Experto Crede, engaging in naval battles and freeing slaves from slave ships.</li>
                <li><b>Liberation Missions: </b>The game focuses heavily on missions that involve rescuing slaves, sabotaging plantations, and dismantling the slave trade.</li>
                <li><b>Weapons and Combat: </b>Adéwalé wields a machete and a blunderbuss, adding a unique combat style. Players can also use rope darts, pistols, and other weapons.</li>
                <li><b>Exploration and Side Activities: </b>The game features exploration of Port-au-Prince and surrounding areas, with various side activities such as freeing slaves, collecting shanties, and finding treasures.</li>
                <li><b>Economy and Upgrades: </b>Players can upgrade the Experto Crede and Adéwalé's equipment by collecting resources and completing missions.</li>
              </ul>
            </div>
            <br />
            <div className="themes-container">
              <h3>Themes</h3>
              <p>"Assassin's Creed IV: Freedom Cry" explores several key themes:</p>
              <br />
              <ol>
                <li><b>Freedom and Oppression: </b>The central theme of the game is the fight for freedom and the struggle against the oppressive system of slavery.</li>
                <li><b>Redemption and Justice: </b> Adéwalé's journey reflects themes of redemption as he seeks to atone for past actions and bring justice to the oppressed.</li>
                <li><b>Identity and Heritage: </b>The game delves into Adéwalé's identity as a former slave and his connection to his African heritage, influencing his motivations and actions.</li>
                <li><b>Resistance and Solidarity: </b>The collaboration between Adéwalé and the Maroons emphasizes the importance of solidarity and collective action in the fight against oppression.</li>
              </ol>
            </div>
            <br />
            <div className="reception-container">
              <h3>Reception</h3>
              <p>"Assassin's Creed IV: Freedom Cry" received generally positive reviews:</p>
              <br />
              <ol>
                <li><b>Story and Protagonist: </b>Adéwalé's character and the game's narrative were praised for addressing the serious issue of slavery with depth and sensitivity.</li>
                <li><b>Gameplay Mechanics: </b>The liberation missions and naval combat were well-received, adding meaningful content and challenges.</li>
                <li><b>Visuals and World Design: </b>The detailed depiction of Port-au-Prince and the surrounding areas was appreciated for its historical accuracy and immersive environment.</li>
                <li><b>Criticisms: </b>Some reviewers pointed out the relatively short length of the game and occasional repetitive missions. However, these criticisms were minor compared to the overall positive reception.</li>
              </ol>
              <br />
              <p>Overall, "Assassin's Creed IV: Freedom Cry" is recognized for its powerful narrative, engaging gameplay, and significant exploration of historical and social issues, making it a memorable and impactful entry in the Assassin's Creed series.</p>
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
              <p><b>Total Reviews: </b><span id='acfc-total-reviews'></span></p>
              <br />
              <div className="reviews">
                <p><b>Exceptional: </b>%<span id='acfc-exceptional'></span></p>
                <p><b>Recommended: </b>%<span id='acfc-recommended'></span></p>
                <p><b>Boring: </b>%<span id='acfc-boring'></span></p>
                <p><b>Skip: </b>%<span id='acfc-skip'></span></p>
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

export default AcFC
