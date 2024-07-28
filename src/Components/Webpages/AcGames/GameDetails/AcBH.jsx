import './AcGlobal.css'
import acBH from '../../../../assets/ac-posters/ac-brotherhood.png'
import Navbar from '../../../Navbar/Navbar'
import pic1 from '../../../../assets/acbh-gallery/pic1.jpg'
import pic2 from '../../../../assets/acbh-gallery/pic2.jpg'
import pic3 from '../../../../assets/acbh-gallery/pic3.jpg'
import pic4 from '../../../../assets/acbh-gallery/pic4.jpg'
import pic5 from '../../../../assets/acbh-gallery/pic5.jpg'
import pic6 from '../../../../assets/acbh-gallery/pic6.jpg'
import pic7 from '../../../../assets/acbh-gallery/pic7.jpg'
import pic8 from '../../../../assets/acbh-gallery/pic8.jpg'
import pic9 from '../../../../assets/acbh-gallery/pic9.jpg'
import pic10 from '../../../../assets/acbh-gallery/pic10.jpg'
import { useEffect, useState } from 'react'
import backBtn from '../../../../assets/back-button.png'
import { Link } from 'react-router-dom'
import ShowImg from '../../../ShowImg/ShowImg'
import Footer from '../../../Footer/Footer'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'

const AcBH = () => {
  const [imgLink, setImgLink] = useState(null);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const apiKey = 'ebecb9fad0bb4184a5498c97d7e27112';
    const gameId = '10064';

    const fetchAcBH = async () => {
      try{
        const response = await fetch(`https://api.rawg.io/api/games/${gameId}?key=${apiKey}`);

        if (!response.ok) {
          throw new Error('Could not fetch resource');
        }

        const data = await response.json();
        document.getElementById('acbh-total-reviews').innerHTML = data.reviews_count;
        document.getElementById('acbh-recommended').innerHTML = data.ratings[0].percent;
        document.getElementById('acbh-exceptional').innerHTML = data.ratings[1].percent;
        document.getElementById('acbh-boring').innerHTML = data.ratings[2].percent;
        document.getElementById('acbh-skip').innerHTML = data.ratings[3].percent;
        
      } catch (error) {
        console.error(error);
      }
    }
    fetchAcBH();
  }, [])

  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="container">
          <Link to='/acgames'><img className='back-btn' src={backBtn} alt="back" /></Link>
          <div className="poster-detail-container">
            <div className="poster-container">
              <img className="ac-poster" src={acBH} alt="poster" />
            </div>
            <div className="details-container">
            <h2>Assassin's Creed Brotherhood</h2>
            <br />
            <h4>Release Date: November 16, 2010</h4>
            <h4>Platform: Microsoft Windows, PlaysStation 3, PlayStation 4, Nintendo Switch, Xbox 360, Xbox One, macOS, GeForce Now</h4>
            <h4>Size: 8 GB</h4>
            <br />
            <p>"Assassin's Creed Brotherhood," released in 2010, is the third major installment in the Assassin's Creed series, developed by Ubisoft Montreal. It continues the story of Desmond Miles and his ancestor Ezio Auditore da Firenze, focusing on the ongoing battle between the Assassins and the Templars. The game introduces new gameplay mechanics and takes place primarily in Rome.</p>
            </div>
          </div>
          <br />
          <div className="content-container">
            <div className="trailer-container">
              <h3>Trailer</h3>
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/zzNs4-kRLaE"></iframe>
              </div>
            </div>
            <br />
            <div className="key-characters-container">
              <h3>Key Characters</h3>
              <p><b>Modern Day (2012)</b></p>
              <ol>
                <li><b>Desmond Miles: </b>The modern-day protagonist who relives Ezio's memories through the Animus to acquire Assassin skills and knowledge.</li>
                <li><b>Lucy Stillman: </b>An undercover Assassin and member of Desmond's team. She guides Desmond through Ezio's memories and plays a pivotal role in their missions.</li>
              </ol>
              <br />
              <p><b>Ezio's Story</b></p>
              <ol>
                <li><b>Ezio Auditore da Firenze: </b>The main protagonist, Ezio continues his journey as a Master Assassin. He leads the Brotherhood in Rome to fight against the Borgia family and their Templar allies.</li>
                <li><b>Leonardo da Vinci: </b>A Renaissance polymath and Ezio's friend and ally. Leonardo provides inventions, upgrades, and crucial support throughout the game.</li>
                <li><b>Cesare Borgia: </b>The main antagonist and Rodrigo Borgia's ambitious and ruthless son. Cesare aims to conquer Italy and expand Templar control, posing a significant threat to Ezio and the Brotherhood.</li>
                <li><b>Rodrigo Borgia (Pope Alexander VI): </b>Leader of the Templars, he controls Rome through his influence as Pope and seeks to maintain Templar dominance.</li>
                <li><b>Lucrezia Borgia: </b>Cesare's sister, who plays a significant role in the Borgia family's schemes.</li>
                <li><b>Caterina Sforza: </b>A noblewoman and ally to Ezio. She initially seeks Ezio's help to protect her city of Forlì from the Borgia's influence.</li>
              </ol>
            </div>
            <br />
            <div className="plot-container">
              <h3>Plot</h3>
              <p><b>Modern Day (2012)</b></p>
              <p>After escaping from Abstergo Industries with the help of Lucy Stillman, Desmond Miles, and his fellow modern-day Assassins, Shaun Hastings and Rebecca Crane, set up a new base in the ruins of the Auditore villa in Monteriggioni. They use the Animus 2.0 to continue exploring the memories of Desmond's ancestor, Ezio Auditore, to locate the Apple of Eden and stop Abstergo from using it to control humanity.</p>
              <br />
              <p><b>Ezio's Story (1499-1507)</b></p>
              <br />
              <p><b>Monteriggioni (1499-1500)</b></p>
              <p>The game picks up immediately after the events of "Assassin's Creed II." Ezio returns to Monteriggioni with the Apple of Eden, but the peace is short-lived. The villa is attacked by Cesare Borgia's forces. During the attack, Ezio's uncle Mario is killed, and the Apple is stolen. Ezio escapes with his mother and sister and decides to travel to Rome to rebuild the Assassin Brotherhood and take down the Borgia family.</p>
              <br />
              <p><b>Rome (1500-1507)</b></p>
              <p>Ezio arrives in Rome to find it under the oppressive control of the Borgia. He begins to dismantle their hold over the city by targeting key figures in their organization and freeing the city's districts from their influence.</p>
              <br />
              <p><b>Rebuilding the Brotherhood</b></p>
              <p>Ezio recruits citizens who have been wronged by the Borgia and trains them to become Assassins. He forms a new Brotherhood to help in his quest. Ezio also works to restore the city's economy by investing in businesses and renovating landmarks, which helps gain the support of the people.</p>
              <br />
              <p><b>Key Assassinations</b></p>
              <p>Ezio targets and eliminates several key Borgia allies, including:</p>
              <br />
              <ol>
                <li><b>Micheletto Corella: </b>Cesare's ruthless enforcer.</li>
                <li><b>Juan Borgia the Elder: </b>Cesare's brother and a cardinal.</li>
                <li><b>Lucrezia Borgia: </b>Cesare's sister, whom Ezio kidnaps to draw Cesare out.</li>
                <li><b>Rodrigo Borgia: </b>Former Pope and Cesare's father, whom Cesare eventually kills to consolidate his own power.</li>
              </ol>
              <br />
              <p><b>Final Confrontation with Cesare</b></p>
              <p>Cesare Borgia is determined to conquer all of Italy. After a series of battles, Ezio confronts Cesare during the siege of Viana Castle in Spain. In a climactic battle, Ezio defeats Cesare and throws him from the battlements, ending the Borgia threat.</p>
              <br />
              <p><b>Modern Day Epilogue</b></p>
              <p>Back in 2012, Desmond and his team locate the Apple of Eden in a temple hidden beneath the Colosseum in Rome. As Desmond retrieves the Apple, he is possessed by Juno, a member of the First Civilization. Under her influence, Desmond is forced to stab Lucy, leaving her fate uncertain. The game ends with Desmond falling into a coma, setting up the events for the next installment in the series.</p>
            </div>
            <br />
            <div className="setting-container">
              <h3>Setting</h3>
              <p>"Assassin's Creed Brotherhood" is primarily set in Renaissance Italy, with the majority of the game taking place in the city of Rome. The game also includes brief sequences in other locations, but Rome is the central and most significant setting. Here are the key locations featured in the game:</p>
              <br />
              <ol>
                <li><b>Rome: </b>The heart of the game, Rome is a vast and detailed open world filled with historical landmarks, bustling marketplaces, and distinct districts. The city is under the oppressive control of the Borgia family, and Ezio works to liberate it.</li>
                <li><b>Monteriggioni: </b>The ancestral home of the Auditore family. The game begins here with the attack by Cesare Borgia's forces. Monteriggioni serves as the initial hub before the action shifts to Rome.</li>
                <li><b>Viana, Spain: </b>The setting for the final confrontation between Ezio and Cesare Borgia. This location appears in the climax of the game where Ezio defeats Cesare.</li>
              </ol>
            </div>
            <br />
            <div className="gameplay-container">
              <h3>Gameplay</h3>
              <p>"Assassin's Creed Brotherhood" introduces several new gameplay mechanics and features:</p>
              <br />
              <ul>
                <li><b>Brotherhood System: </b>Players can recruit, train, and call upon Assassins for assistance. These recruits can be sent on missions to gain experience and improve their skills.</li>
                <li><b>Improved Combat and Stealth: </b>The combat system is refined, and new weapons and gadgets are introduced. Players can use smoke bombs, crossbows, and poison darts, among other tools.</li>
                <li><b>Open World Exploration: </b>Rome serves as the primary setting, offering a vast and detailed open world filled with side missions, collectibles, and activities.</li>
                <li><b>Multiplayer Mode: </b>The game introduces a multiplayer mode, where players can engage in various competitive and cooperative missions.</li>
              </ul>
            </div>
            <br />
            <div className="themes-container">
              <h3>Themes</h3>
              <p>The game explores themes of leadership, loyalty, and the struggle for power. It delves into the responsibilities of leading a Brotherhood and the sacrifices required to fight for freedom against tyranny.</p>
            </div>
            <br />
            <div className="reception-container">
              <h3>Reception</h3>
              <p>"Assassin's Creed Brotherhood" received critical acclaim for its engaging story, robust gameplay mechanics, and detailed recreation of Renaissance Rome. It was praised for its innovative multiplayer mode and improvements over its predecessors, solidifying its place as a standout title in the series.</p>
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
              <p><b>Total Reviews: </b><span id='acbh-total-reviews'></span></p>
              <br />
              <div className="reviews">
                <p><b>Exceptional: </b>%<span id='acbh-exceptional'></span></p>
                <p><b>Recommended: </b>%<span id='acbh-recommended'></span></p>
                <p><b>Boring: </b>%<span id='acbh-boring'></span></p>
                <p><b>Skip: </b>%<span id='acbh-skip'></span></p>
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

export default AcBH
