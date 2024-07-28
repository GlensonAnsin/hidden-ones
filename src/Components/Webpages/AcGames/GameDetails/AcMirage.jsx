import './AcGlobal.css'
import acMirage from '../../../../assets/ac-posters/ac-mirage.png'
import Navbar from '../../../Navbar/Navbar'
import pic1 from '../../../../assets/acmirage-gallery/pic1.png'
import pic2 from '../../../../assets/acmirage-gallery/pic2.jpeg'
import pic3 from '../../../../assets/acmirage-gallery/pic3.jpeg'
import pic4 from '../../../../assets/acmirage-gallery/pic4.jpg'
import pic5 from '../../../../assets/acmirage-gallery/pic5.jpg'
import pic6 from '../../../../assets/acmirage-gallery/pic6.png'
import pic7 from '../../../../assets/acmirage-gallery/pic7.png'
import pic8 from '../../../../assets/acmirage-gallery/pic8.jpg'
import pic9 from '../../../../assets/acmirage-gallery/pic9.jpeg'
import pic10 from '../../../../assets/acmirage-gallery/pic10.jpeg'
import { useEffect, useState } from 'react'
import backBtn from '../../../../assets/back-button.png'
import { Link } from 'react-router-dom'
import ShowImg from '../../../ShowImg/ShowImg'
import Footer from '../../../Footer/Footer'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'

const AcMirage = () => {
  const [imgLink, setImgLink] = useState(null);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const apiKey = 'ebecb9fad0bb4184a5498c97d7e27112';
    const gameId = '845261';

    const fetchAcMirage = async () => {
      try{
        const response = await fetch(`https://api.rawg.io/api/games/${gameId}?key=${apiKey}`);

        if (!response.ok) {
          throw new Error('Could not fetch resource');
        }

        const data = await response.json();
        document.getElementById('acmirage-total-reviews').innerHTML = data.reviews_count;
        document.getElementById('acmirage-recommended').innerHTML = data.ratings[0].percent;
        document.getElementById('acmirage-boring').innerHTML = data.ratings[1].percent;
        document.getElementById('acmirage-exceptional').innerHTML = data.ratings[2].percent;
        document.getElementById('acmirage-skip').innerHTML = data.ratings[3].percent;
        
      } catch (error) {
        console.error(error);
      }
    }
    fetchAcMirage();
  }, [])

  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="container">
          <Link to='/acgames'><img className='back-btn' src={backBtn} alt="back" /></Link>
          <div className="poster-detail-container">
            <div className="poster-container">
              <img className="ac-poster" src={acMirage} alt="poster" />
            </div>
            <div className="details-container">
            <h2>Assassin's Creed Mirage</h2>
            <br />
            <h4>Release Date: October 5, 2023</h4>
            <h4>Platform: Microsoft Windows, PlayStation 4, PlayStation 5, Xbox Series X and Series S, Xbox One, iOS, Amazon Luna, GeForce Now</h4>
            <h4>Size: 35 GB</h4>
            <br />
            <p>"Assassin's Creed Mirage," released in 2023, is the thirteenth main installment in the Assassin's Creed series, developed by Ubisoft. The game returns to the series' roots with a focus on stealth, parkour, and assassinations, set against the backdrop of the Islamic Golden Age in 9th-century Baghdad. The story follows Basim Ibn Ishaq, a young thief who becomes a master assassin, exploring his journey and the events that shape his destiny.</p>
            </div>
          </div>
          <br />
          <div className="content-container">
            <div className="trailer-container">
              <h3>Trailer</h3>
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/x55lAlFtXmw"></iframe>
              </div>
            </div>
            <br />
            <div className="key-characters-container">
              <h3>Key Characters</h3>
              <ol>
                <li><b>Basim Ibn Ishaq: </b>The protagonist, a young thief who becomes a master assassin, exploring his destiny and connection to the Isu.</li>
                <li><b>Roshan: </b>A mentor and experienced assassin who guides Basim in his training and missions.</li>
                <li><b>Nehal: </b>A key ally and friend of Basim, supporting him throughout his journey.</li>
                <li><b>The Caliph: </b>The ruler of Baghdad, whose court is a center of political intrigue and power struggles.</li>
                <li><b>Order of the Ancients Members: </b>The antagonists seeking to control Baghdad and its people through manipulation and power.</li>
              </ol>
            </div>
            <br />
            <div className="plot-container">
              <h3>Plot</h3>
              <p><b>Prologue: The Thief of Baghdad</b></p>
              <p>The story begins with Basim Ibn Ishaq, a young street thief in Baghdad, who dreams of a greater destiny. His life changes when he encounters the Hidden Ones, a secretive organization dedicated to fighting tyranny and oppression.</p>
              <br />
              <p><b>The Path to Mastery</b></p>
              <p>Basim is recruited by the Hidden Ones and begins his training under the mentorship of Roshan, a seasoned assassin. He learns the ways of stealth, parkour, and assassination, honing his skills to take on powerful enemies.</p>
              <br />
              <p><b>Uncovering Conspiracies</b></p>
              <p>As Basim grows in skill and stature, he becomes entangled in the political and social intrigues of Baghdad. He uncovers a conspiracy involving the Order of the Ancients (precursors to the Templars), who seek to control the city and its people.</p>
              <br />
              <p><b>Personal Revelations</b></p>
              <p>Throughout his journey, Basim experiences visions and memories that hint at a deeper connection to the ancient Isu civilization and their artifacts. These revelations shape his understanding of his place in the world and his ultimate destiny.</p>
              <br />
              <p><b>Climax and Resolution</b></p>
              <p>The climax involves a confrontation with the leaders of the Order of the Ancients in Baghdad and a decisive battle to liberate the city from their control. Basim's journey concludes with significant personal growth and a deeper understanding of the Assassins' creed and his own path.</p>
            </div>
            <br />
            <div className="setting-container">
              <h3>Setting</h3>
              <p>The game is set in:</p>
              <br />
              <ol>
                <li><b>Baghdad: </b>The primary setting, during its golden age under the Abbasid Caliphate, showcasing its vibrant culture, architecture, and political intrigue.</li>
                <li><b>Alamut: </b>The legendary fortress of the Hidden Ones (early Assassins), playing a crucial role in Basim's training and development.</li>
              </ol>
            </div>
            <br />
            <div className="gameplay-container">
              <h3>Gameplay</h3>
              <p>"Assassin's Creed Mirage" emphasizes several key gameplay elements:</p>
              <br />
              <ul>
                <li><b>Stealth and Assassination: </b>A return to the series' roots with a focus on stealth mechanics, blending into crowds, and executing precise assassinations.</li>
                <li><b>Parkour and Exploration: </b>Enhanced parkour system allowing fluid movement across Baghdad's rooftops and streets, emphasizing verticality and traversal.</li>
                <li><b>Open-World Activities: </b>Various side missions, contracts, and activities that immerse players in the life and culture of 9th-century Baghdad.</li>
                <li><b>Combat Mechanics: </b>Refined combat system focusing on timing, counters, and the use of hidden blades and other assassin tools.</li>
                <li><b>Crafting and Customization: </b>Players can craft and upgrade weapons, tools, and outfits to suit their playstyle.</li>
              </ul>
            </div>
            <br />
            <div className="themes-container">
              <h3>Themes</h3>
              <p>"Assassin's Creed Mirage" explores several key themes:</p>
              <br />
              <ol>
                <li><b>Identity and Destiny: </b>Basim's journey is marked by questions of identity, destiny, and his connection to the ancient Isu civilization.</li>
                <li><b>Freedom and Oppression: </b>The struggle against the Order of the Ancients reflects broader themes of personal freedom versus societal control.</li>
                <li><b>Mentorship and Growth: </b>The relationship between Basim and Roshan highlights the importance of mentorship, guidance, and personal growth.</li>
                <li><b>Cultural and Historical Depth: </b>The game explores the rich cultural and historical context of the Islamic Golden Age, showcasing its achievements and complexities.</li>
              </ol>
            </div>
            <br />
            <div className="reception-container">
              <h3>Reception</h3>
              <p>"Assassin's Creed Mirage" received generally positive reviews:</p>
              <br />
              <ol>
                <li><b>Return to Roots: </b>Critics praised the game's return to the series' core elements of stealth, parkour, and assassination, providing a nostalgic yet fresh experience.</li>
                <li><b>Setting and Atmosphere: </b>The detailed and vibrant recreation of 9th-century Baghdad was highly acclaimed for its beauty, authenticity, and immersion.</li>
                <li><b>Character Development: </b>Basim's character arc and the supporting cast were well-received, offering a compelling narrative and personal growth.</li>
                <li><b>Gameplay Mechanics: </b>The refined stealth and combat mechanics were appreciated, along with the enhanced parkour system.</li>
                <li><b>Criticisms: </b>Some critics noted the game's relatively smaller scope compared to recent entries, and occasional technical issues were mentioned.</li>
              </ol>
              <br />
              <p>Overall, "Assassin's Creed Mirage" is recognized for its successful blend of traditional Assassin's Creed gameplay with new elements, engaging story, and rich historical setting, making it a notable addition to the franchise.</p>
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
              <p><b>Total Reviews: </b><span id='acmirage-total-reviews'></span></p>
              <br />
              <div className="reviews">
                <p><b>Exceptional: </b>%<span id='acmirage-exceptional'></span></p>
                <p><b>Recommended: </b>%<span id='acmirage-recommended'></span></p>
                <p><b>Boring: </b>%<span id='acmirage-boring'></span></p>
                <p><b>Skip: </b>%<span id='acmirage-skip'></span></p>
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

export default AcMirage
