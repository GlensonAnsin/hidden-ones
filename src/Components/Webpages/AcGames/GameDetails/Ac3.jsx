import './AcGlobal.css'
import ac3 from '../../../../assets/ac-posters/ac-3.png'
import Navbar from '../../../Navbar/Navbar'
import pic1 from '../../../../assets/ac3-gallery/pic1.jpg'
import pic2 from '../../../../assets/ac3-gallery/pic2.jpg'
import pic3 from '../../../../assets/ac3-gallery/pic3.jpg'
import pic4 from '../../../../assets/ac3-gallery/pic4.jpg'
import pic5 from '../../../../assets/ac3-gallery/pic5.jpg'
import pic6 from '../../../../assets/ac3-gallery/pic6.jpg'
import pic7 from '../../../../assets/ac3-gallery/pic7.jpg'
import pic8 from '../../../../assets/ac3-gallery/pic8.jpg'
import pic9 from '../../../../assets/ac3-gallery/pic9.png'
import pic10 from '../../../../assets/ac3-gallery/pic10.jpg'
import { useEffect, useState } from 'react'
import backBtn from '../../../../assets/back-button.png'
import { Link } from 'react-router-dom'
import ShowImg from '../../../ShowImg/ShowImg'
import Footer from '../../../Footer/Footer'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'

const Ac3 = () => {
  const [imgLink, setImgLink] = useState(null);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const apiKey = 'ebecb9fad0bb4184a5498c97d7e27112';
    const gameId = '13305';

    const fetchAc3 = async () => {
      try{
        const response = await fetch(`https://api.rawg.io/api/games/${gameId}?key=${apiKey}`);

        if (!response.ok) {
          throw new Error('Could not fetch resource');
        }

        const data = await response.json();
        document.getElementById('ac3-total-reviews').innerHTML = data.reviews_count;
        document.getElementById('ac3-recommended').innerHTML = data.ratings[0].percent;
        document.getElementById('ac3-boring').innerHTML = data.ratings[1].percent;
        document.getElementById('ac3-exceptional').innerHTML = data.ratings[2].percent;
        document.getElementById('ac3-skip').innerHTML = data.ratings[3].percent;
        
      } catch (error) {
        console.error(error);
      }
    }
    fetchAc3();
  }, [])

  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="container">
          <Link to='/acgames'><img className='back-btn' src={backBtn} alt="back" /></Link>
          <div className="poster-detail-container">
            <div className="poster-container">
              <img className="ac-poster" src={ac3} alt="poster" />
            </div>
            <div className="details-container">
            <h2>Assassin's Creed III</h2>
            <br />
            <h4>Release Date: October 30, 2012</h4>
            <h4>Platform: Microsoft Windows, PlayStation 3, PlayStation 4, Nintendo Switch, Wii U, Xbox 360, Xbox One, GeForce Now</h4>
            <h4>Size: 16 GB</h4>
            <br />
            <p>"Assassin's Creed III," released in 2012, is the fifth main installment in the Assassin's Creed series, developed by Ubisoft. The game introduces a new protagonist, Ratonhnhaké (also known as Connor), and features a rich historical setting during the American Revolution. The story interweaves the narratives of Connor and Desmond Miles, the modern-day Assassin, as they continue their fight against the Templar Order.</p>
            </div>
          </div>
          <br />
          <div className="content-container">
            <div className="trailer-container">
              <h3>Trailer</h3>
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/-pUhraVG7Ow"></iframe>
              </div>
            </div>
            <br />
            <div className="key-characters-container">
              <h3>Key Characters</h3>
              <p><b>Modern Day (2012)</b></p>
              <ol>
                <li><b>Desmond Miles: </b>The modern-day protagonist who relives Connor's memories to find a way to prevent the impending solar flare.</li>
                <li><b>William Miles: </b>Desmond's father and leader of the modern-day Assassin Brotherhood.</li>
                <li><b>Shaun Hastings: </b>Historian and member of Desmond's team.</li>
                <li><b>Rebecca Crane: </b>Technician and member of Desmond's team.</li>
              </ol>
              <br />
              <p><b>Connor's Story</b></p>
              <ol>
                <li><b>Ratonhnhaké/Connor: </b>The main protagonist, a half-Mohawk, half-British Assassin who fights during the American Revolution.</li>
                <li><b>Haytham Kenway: </b>Connor's father, a Templar Grand Master whose actions and beliefs often conflict with Connor's.</li>
                <li><b>Achilles Davenport: </b>A retired Assassin who mentors Connor and helps rebuild the Brotherhood in America.</li>
                <li><b>Charles Lee: </b>The main antagonist and a high-ranking Templar responsible for the attack on Connor's village.</li>
                <li><b>George Washington: </b>The leader of the Continental Army and later the first President of the United States, who allies with Connor.</li>
                <li><b>Benjamin Franklin: </b>A key figure in the American Revolution who provides Connor with support and inventions.</li>
                <li><b>Samuel Adams: </b>A leader of the American Revolution who collaborates with Connor in various missions.</li>
              </ol>
            </div>
            <br />
            <div className="plot-container">
              <h3>Plot</h3>
              <p><b>Modern Day (2012)</b></p>
              <p>Desmond Miles and his team—comprised of his father William Miles, historian Shaun Hastings, and technician Rebecca Crane—locate the Grand Temple of the First Civilization in New York. They enter the temple to find a way to prevent the catastrophic solar flare predicted to devastate Earth. To unlock the temple's secrets, Desmond must relive the memories of his ancestor, Ratonhnhaké.</p>
              <br />
              <p><b>Connor's Story (1754-1783)</b></p>
              <br />
              <p><b>Childhood and Early Years (1754-1760)</b></p>
              <p>The game begins with the story of Haytham Kenway, Connor's father, who travels to America in 1754 on a mission for the Templars. Haytham meets Kaniehtí, a Native American woman, and the two conceive a child, Ratonhnhaké. Unaware of his father's true allegiance, young Connor grows up in the Mohawk village of Kanatahséton.</p>
              <br />
              <p><b>Tragedy and Training (1760-1770)</b></p>
              <p>In 1760, the village is attacked by colonial forces led by Charles Lee, a Templar. Connor's mother dies in the attack, fueling his desire for justice. Years later, Connor meets Achilles Davenport, a retired Assassin living in Davenport Homestead. Achilles agrees to train Connor in the ways of the Assassin Brotherhood, giving him the name Connor to blend in with colonial society.</p>
              <br />
              <p><b>The American Revolution (1770-1783)</b></p>
              <p>As Connor matures, he becomes embroiled in the American Revolution. He aids key figures such as George Washington, Benjamin Franklin, and Samuel Adams. His primary goal is to stop the Templars, who are manipulating both sides of the conflict to establish their control over the new nation.</p>
              <br />
              <ol>
                <li><b>Boston Massacre (1770): </b>Connor witnesses the Boston Massacre and begins to understand the complexities of the colonial struggle.</li>
                <li><b>Boston Tea Party (1773): </b>Connor participates in the Boston Tea Party, striking a blow against the Templars' influence.</li>
                <li><b>Battle of Bunker Hill (1775): </b> Connor aids the colonial forces during the Battle of Bunker Hill, showcasing his combat prowess.</li>
                <li><b>Declaration of Independence (1776): </b>Connor works behind the scenes to ensure the success of the Declaration of Independence, cementing his role in the revolution.</li>
              </ol>
              <br />
              <p><b>Personal Vendettas and Templar Confrontations</b></p>
              <p>Throughout his journey, Connor confronts various Templar leaders, including his father, Haytham Kenway, and Charles Lee. The complex relationship with his father adds emotional depth to the story.</p>
              <br />
              <ol>
                <li><b>Haytham Kenway: </b>Connor discovers his father's role as a Templar Grand Master. Despite their opposing views, the two share moments of mutual respect and conflict.</li>
                <li><b>Charles Lee: </b>The primary antagonist who orchestrated the attack on Connor's village. Connor's pursuit of Lee is central to his quest for justice.</li>
              </ol>
              <br />
              <p><b>The Grand Temple</b>As the revolution progresses, Connor learns of the Grand Temple and its connection to the Pieces of Eden. His efforts lead to the eventual defeat of the Templars in America, but the true challenge lies in the modern-day storyline.</p>
              <br />
              <p><b>Modern Day Epilogue</b></p>
              <p>Desmond, using the knowledge gained from Connor's memories, accesses the Grand Temple and uncovers the key to preventing the solar flare. However, he faces a critical decision: save the world at the cost of his own life or let the disaster occur. Desmond chooses to activate the device, sacrificing himself to save humanity. Juno, a member of the First Civilization, is released in the process, setting the stage for future conflicts.</p>
            </div>
            <br />
            <div className="setting-container">
              <h3>Setting</h3>
              <p>"Assassin's Creed III" is set during the American Revolution, primarily between 1754 and 1783. Key locations include:</p>
              <br />
              <ol>
                <li><b>Colonial America: </b>Boston, New York, and Philadelphia serve as major urban centers where significant events and missions take place.</li>
                <li><b>Frontier: </b>The vast wilderness of the American frontier provides a dynamic and expansive environment for exploration and combat.</li>
                <li><b>Davenport Homestead: </b>Achilles Davenport's estate, where Connor is trained and where he builds a community of settlers and artisans.</li>
                <li><b>The Caribbean: </b>Naval missions take place in the Caribbean Sea, showcasing the game's enhanced naval combat system.</li>
              </ol>
            </div>
            <br />
            <div className="gameplay-container">
              <h3>Gameplay</h3>
              <p>"Assassin's Creed III" introduces several new gameplay mechanics and features that enhance the player's experience:</p>
              <br />
              <ul>
                <li><b>Naval Combat: </b>One of the most notable additions, players can command Connor's ship, the Aquila, engaging in naval battles and completing missions on the high seas.</li>
                <li><b>Hunting and Wilderness Exploration: </b>The game features a vast frontier where players can hunt animals, gather resources, and explore dynamic environments with changing weather and seasons.</li>
                <li><b>Improved Combat System: </b>The combat mechanics have been revamped to include dual-wielding weapons, new fighting techniques, and a focus on fluid, realistic movements.</li>
                <li><b>Homestead Building: </b>Connor can develop and expand the Davenport Homestead by recruiting artisans and settlers, which provides economic and gameplay benefits.</li>
                <li><b>Parkour and Free Running: </b>The movement system has been refined to allow more fluid traversal of both urban and natural environments, including tree-climbing and navigating through dense forests.</li>
              </ul>
            </div>
            <br />
            <div className="themes-container">
              <h3>Themes</h3>
              <p>"Assassin's Creed III" explores several key themes:</p>
              <br />
              <ol>
                <li><b>Freedom and Independence: </b>The game's setting during the American Revolution highlights the struggle for freedom and the quest for independence, both on a national and personal level.</li>
                <li><b>Identity and Heritage: </b>Connor's dual heritage as a Native American and a British colonial shapes his identity and perspective, influencing his actions and relationships.</li>
                <li><b>Conflict and Compromise: </b>The game delves into the complexities of the revolution, showcasing the moral ambiguities and the personal cost of the fight for freedom.</li>
                <li><b>Legacy and Responsibility: </b>Both Desmond and Connor grapple with the legacies left by their ancestors and the responsibilities they bear as members of the Assassin Brotherhood.</li>
              </ol>
            </div>
            <br />
            <div className="reception-container">
              <h3>Reception</h3>
              <p>"Assassin's Creed III" received generally positive reviews from critics and players:</p>
              <br />
              <ol>
                <li><b>Story and Characters: </b>The game was praised for its engaging story, well-developed characters, and historical accuracy. Connor's journey and the depiction of the American Revolution were particularly highlighted.</li>
                <li><b>Gameplay Innovations: </b>The introduction of naval combat, wilderness exploration, and the refined combat system were well-received, adding depth and variety to the gameplay experience.</li>
                <li><b>Graphics and World Design: </b>The game's visuals, attention to detail, and dynamic environments were lauded for creating an immersive and realistic representation of 18th-century America.</li>
                <li><b>Criticisms: </b>Some criticisms were directed at the pacing of the story, occasional technical issues, and the complexity of the modern-day narrative, which some players found confusing.</li>
              </ol>
            </div>
            <br />
            <div className="gallery-container">
              <h3>Gallery</h3>
              <div onClick={() => setDisplay(true)} className="pic-container">
                <div className="pic">
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
              <p><b>Total Reviews: </b><span id='ac3-total-reviews'></span></p>
              <br />
              <div className="reviews">
                <p><b>Exceptional: </b>%<span id='ac3-exceptional'></span></p>
                <p><b>Recommended: </b>%<span id='ac3-recommended'></span></p>
                <p><b>Boring: </b>%<span id='ac3-boring'></span></p>
                <p><b>Skip: </b>%<span id='ac3-skip'></span></p>
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

export default Ac3
