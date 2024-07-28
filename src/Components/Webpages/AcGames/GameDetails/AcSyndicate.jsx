import './AcGlobal.css'
import acSyndicate from '../../../../assets/ac-posters/ac-syndicate.png'
import Navbar from '../../../Navbar/Navbar'
import pic1 from '../../../../assets/acsyndicate-gallery/pic1.jpg'
import pic2 from '../../../../assets/acsyndicate-gallery/pic2.jpg'
import pic3 from '../../../../assets/acsyndicate-gallery/pic3.jpg'
import pic4 from '../../../../assets/acsyndicate-gallery/pic4.jpg'
import pic5 from '../../../../assets/acsyndicate-gallery/pic5.jpg'
import pic6 from '../../../../assets/acsyndicate-gallery/pic6.jpg'
import pic7 from '../../../../assets/acsyndicate-gallery/pic7.jpg'
import pic8 from '../../../../assets/acsyndicate-gallery/pic8.jpg'
import pic9 from '../../../../assets/acsyndicate-gallery/pic9.jpg'
import pic10 from '../../../../assets/acsyndicate-gallery/pic10.jpg'
import { useEffect, useState } from 'react'
import backBtn from '../../../../assets/back-button.png'
import { Link } from 'react-router-dom'
import ShowImg from '../../../ShowImg/ShowImg'
import Footer from '../../../Footer/Footer'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'

const AcSyndicate = () => {
  const [imgLink, setImgLink] = useState(null);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const apiKey = 'ebecb9fad0bb4184a5498c97d7e27112';
    const gameId = '42895';

    const fetchAcSyndicate = async () => {
      try{
        const response = await fetch(`https://api.rawg.io/api/games/${gameId}?key=${apiKey}`);

        if (!response.ok) {
          throw new Error('Could not fetch resource');
        }

        const data = await response.json();
        document.getElementById('acsyndicate-total-reviews').innerHTML = data.reviews_count;
        document.getElementById('acsyndicate-recommended').innerHTML = data.ratings[0].percent;
        document.getElementById('acsyndicate-boring').innerHTML = data.ratings[1].percent;
        document.getElementById('acsyndicate-exceptional').innerHTML = data.ratings[2].percent;
        document.getElementById('acsyndicate-skip').innerHTML = data.ratings[3].percent;
        
      } catch (error) {
        console.error(error);
      }
    }
    fetchAcSyndicate();
  }, [])

  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="container">
          <Link to='/acgames'><img className='back-btn' src={backBtn} alt="back" /></Link>
          <div className="poster-detail-container">
            <div className="poster-container">
              <img className="ac-poster" src={acSyndicate} alt="poster" />
            </div>
            <div className="details-container">
            <h2>Assassin's Creed Syndicate</h2>
            <br />
            <h4>Release Date: October 23, 2015</h4>
            <h4>Platform: Microsoft Windows, PlayStation 4, Xbox One, Amazon Luna, GeForce Now</h4>
            <h4>Size: 40 GB</h4>
            <br />
            <p>"Assassin's Creed Syndicate," released in 2015, is the ninth main installment in the Assassin's Creed series, developed by Ubisoft. The game is set in Victorian London during the Industrial Revolution and follows twin assassins Jacob and Evie Frye as they work to liberate the city from Templar control. "Syndicate" introduces new gameplay mechanics, including dual protagonists and an emphasis on gang warfare.</p>
            </div>
          </div>
          <br />
          <div className="content-container">
            <div className="trailer-container">
              <h3>Trailer</h3>
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/WTBbwgsyxvg"></iframe>
              </div>
            </div>
            <br />
            <div className="key-characters-container">
              <h3>Key Characters</h3>
              <ol>
                <li><b>Jacob Frye: </b> One of the protagonists, a brash and headstrong Assassin focused on direct action and gang warfare.</li>
                <li><b>Evie Frye: </b>The other protagonist, a strategic and disciplined Assassin dedicated to finding Pieces of Eden.</li>
                <li><b>Crawford Starrick: </b>The primary antagonist, a Templar Grand Master who controls London's industries and institutions.</li>
                <li><b>Henry Green: </b>The twins' mentor in London and an experienced Assassin, originally known as Jayadeep Mir.</li>
                <li><b>Charles Darwin: </b>A famous naturalist who assists the twins in their fight against Starrick.</li>
                <li><b>Charles Dickens: </b>A renowned author who provides information and support to the Fryes.</li>
                <li><b>Florence Nightingale: </b>A pioneering nurse who aids the twins with medical support.</li>
                <li><b>Alexander Graham Bell: </b>An inventor who supplies the Fryes with gadgets and technological assistance.</li>
              </ol>
            </div>
            <br />
            <div className="plot-container">
              <h3>Plot</h3>
              <p><b>Prologue: The Twins' Mission</b></p>
              <p>Jacob and Evie Frye, born into the Assassin Brotherhood, are sent to London by their mentor, Henry Green, to combat the Templar presence led by Crawford Starrick. The city is under Templar control, with Starrick manipulating industry, politics, and society.</p>
              <br />
              <p><b>Establishing the Rooks</b></p>
              <p>Upon arriving in London, the Frye twins establish a gang called the Rooks to challenge Starrick's influence. They aim to liberate various boroughs of London by overthrowing Templar-controlled gangs and corrupt officials.</p>
              <br />
              <p><b>Individual Pursuits</b></p>
              <p>While working together to dismantle Starrick's operations, Jacob and Evie have differing approaches and personal goals. Jacob focuses on direct confrontations and building the Rooks, while Evie is dedicated to finding Pieces of Eden and following the Assassin's creed.</p>
              <br />
              <p><b>Key Missions and Events</b></p>
              <ol>
                <li><b>Liberating Boroughs: </b>The twins undertake missions to liberate different parts of London, including Whitechapel, Lambeth, and Westminster, by defeating Templar leaders.</li>
                <li><b>Industrial Sabotage: </b>Jacob targets key industries controlled by Starrick, such as factories and transportation, to disrupt his power base.</li>
                <li><b>Artifact Hunts: </b>Evie searches for the Shroud of Eden, a powerful Piece of Eden, believed to be hidden in London.</li>
                <li><b>Alliances and Assistance: </b>The twins ally with notable historical figures, including Charles Dickens, Charles Darwin, Florence Nightingale, and Alexander Graham Bell.</li>
              </ol>
              <br />
              <p><b>Climax and Resolution</b></p>
              <p>The climax occurs when Jacob and Evie infiltrate Starrick's stronghold. They discover that Starrick plans to use the Shroud of Eden to consolidate his power. In a final confrontation, the twins defeat Starrick and retrieve the Shroud. The game concludes with Jacob and Evie reaffirming their commitment to the Assassin Brotherhood and the liberation of London.</p>
            </div>
            <br />
            <div className="setting-container">
              <h3>Setting</h3>
              <p>The game is set in:</p>
              <br />
              <ol>
                <li><b>London, England: </b>During the Victorian era, specifically the year 1868, featuring iconic locations such as the River Thames, Westminster, and the Tower of London.</li>
                <li><b>Crawley, England: </b>Early parts of the game take place in the twins' hometown.</li>
              </ol>
            </div>
            <br />
            <div className="gameplay-container">
              <h3>Gameplay</h3>
              <p>Assassin's Creed Syndicate" introduces several new gameplay elements:</p>
              <br />
              <ul>
                <li><b>Dual Protagonists: </b>Players can switch between Jacob and Evie Frye, each with unique skills and abilities tailored to different playstyles.</li>
                <li><b>Gang Warfare: </b>The game emphasizes the formation and management of the Rooks gang, including taking over Templar-controlled territories and engaging in gang fights.</li>
                <li><b>Traversal and Combat: </b>The introduction of the rope launcher allows for quick vertical movement and zip-lining across buildings. Combat is fast-paced and brutal, with an emphasis on close-quarters fighting.</li>
                <li><b>Stealth and Infiltration: </b>Enhanced stealth mechanics and the ability to blend into crowds or use environmental elements for cover.</li>
                <li><b>Side Missions and Activities: </b>Numerous side missions involving historical figures, collectibles, and activities like carriage races and bounty hunts.</li>
                <li><b>Upgrades and Customization: </b>Players can upgrade the twins' abilities, gang members, and equipment, tailoring their approach to missions.</li>
              </ul>
            </div>
            <br />
            <div className="themes-container">
              <h3>Themes</h3>
              <p>"Assassin's Creed Syndicate" explores several key themes:</p>
              <br />
              <ol>
                <li><b>Revolution and Change: </b>The game reflects the transformative impact of the Industrial Revolution on society, highlighting both progress and exploitation.</li>
                <li><b>Family and Loyalty: </b>The relationship between Jacob and Evie underscores themes of sibling loyalty, differing perspectives, and mutual support.</li>
                <li><b>Power and Corruption: </b>The Templars' control over London's institutions exemplifies the corrupting influence of power and the need for vigilant opposition.</li>
                <li><b>Freedom and Justice: </b>The twins' fight to liberate London echoes broader themes of social justice and the pursuit of freedom against oppressive forces.</li>
              </ol>
            </div>
            <br />
            <div className="reception-container">
              <h3>Reception</h3>
              <p>"Assassin's Creed Syndicate" received generally positive reviews:</p>
              <br />
              <ol>
                <li><b>Setting and World Design: </b>The detailed and vibrant recreation of Victorian London was highly praised for its historical accuracy and immersive environment.</li>
                <li><b>Characters and Story: </b>The dynamic between Jacob and Evie Frye and their character development were well-received.</li>
                <li><b>Gameplay Mechanics: </b>The new traversal options, gang warfare mechanics, and dual protagonists were seen as refreshing additions to the series.</li>
                <li><b>Side Missions and Activities: </b>The variety of side missions and the involvement of historical figures added depth and engagement to the game.</li>
                <li><b>Criticisms: </b>Some critics noted minor technical issues and felt that the game played it safe in terms of innovation, sticking closely to the series' established formula.</li>
              </ol>
              <br />
              <p>Overall, "Assassin's Creed Syndicate" is recognized for its engaging characters, detailed setting, and refined gameplay mechanics, making it a strong entry in the Assassin's Creed series.</p>
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
              <p><b>Total Reviews: </b><span id='acsyndicate-total-reviews'></span></p>
              <br />
              <div className="reviews">
                <p><b>Exceptional: </b>%<span id='acsyndicate-exceptional'></span></p>
                <p><b>Recommended: </b>%<span id='acsyndicate-recommended'></span></p>
                <p><b>Boring: </b>%<span id='acsyndicate-boring'></span></p>
                <p><b>Skip: </b>%<span id='acsyndicate-skip'></span></p>
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

export default AcSyndicate
