import './AcGames.css'
import ac1 from '../../../assets/ac-posters/ac-1.png'
import ac2 from '../../../assets/ac-posters/ac-2.png'
import acBrotherhood from '../../../assets/ac-posters/ac-brotherhood.png'
import acRevelations from '../../../assets/ac-posters/ac-revelations.png'
import ac3 from '../../../assets/ac-posters/ac-3.png'
import acLiberation from '../../../assets/ac-posters/ac-liberation.png'
import acBlackFlag from '../../../assets/ac-posters/ac-black-flag.png'
import acFreedomCry from '../../../assets/ac-posters/ac-freedom-cry.png'
import acRogue from '../../../assets/ac-posters/ac-rogue.png'
import acUnity from '../../../assets/ac-posters/ac-unity.png'
import acSyndicate from '../../../assets/ac-posters/ac-syndicate.png'
import acOrigins from '../../../assets/ac-posters/ac-origins.png'
import acOdyssey from '../../../assets/ac-posters/ac-odyssey.png'
import acValhalla from '../../../assets/ac-posters/ac-valhalla.png'
import acMirage from '../../../assets/ac-posters/ac-mirage.png'
import acShadows from '../../../assets/ac-posters/ac-shadows.png'
import Navbar from '../../Navbar/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import ScrollToTop from '../../ScrollToTop/ScrollToTop'

const AcGames = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="ac-games">
            <div className="header-container">
                <h1>Explore the <span>Assassin's Creed</span> Series</h1>
                <br />
                <p>The Assassin's Creed series takes players on a journey through time, blending historical events with thrilling action and stealth gameplay. Each game offers a unique setting, a compelling story, and unforgettable characters. Explore the evolution of the series and discover your next adventure.</p>
            </div>
            <div className="ac-game">
                <div className="image-container">
                    <img className='poster' src={ac1} alt="ac-poster" />
                    <Link to='/acgames/assassins-creed'>
                        <div className="hover-content">
                            <h3>View Details</h3>
                        </div>
                    </Link>
                </div>
                <h3>Assassin's Creed</h3>
                <p>Release Date: November 13, 2007</p>
            </div>
            <div className="ac-game">
                <div className="image-container">
                    <img className='poster' src={ac2} alt="ac-poster" />
                    <Link to='/acgames/assassins-creed-2'>
                        <div className="hover-content">
                            <h3>View Details</h3>
                        </div>
                    </Link>
                </div>
                <h3>Assassin's Creed II</h3>
                <p>Release Date: November 17, 2009</p>
            </div>
            <div className="ac-game">
                <div className="image-container">
                    <img className='poster' src={acBrotherhood} alt="ac-poster" />
                    <Link to='/acgames/assassins-creed-brotherhood'>
                        <div className="hover-content">
                            <h3>View Details</h3>
                        </div>
                    </Link>
                </div>
                <h3>Assassin's Creed Brotherhood</h3>
                <p>Release Date: November 16, 2010</p>
            </div>
            <div className="ac-game">
                <div className="image-container">
                    <img className='poster' src={acRevelations} alt="ac-poster" />
                    <Link to='/acgames/assassins-creed-revelations'>
                        <div className="hover-content">
                            <h3>View Details</h3>
                        </div>
                    </Link>
                </div>
                <h3>Assassin's Creed Revelations</h3>
                <p>Release Date: November 15, 2011</p>
            </div>
            <div className="ac-game">
                <div className="image-container">
                    <img className='poster' src={ac3} alt="ac-poster" />
                    <Link to='/acgames/assassins-creed-3'>
                        <div className="hover-content">
                            <h3>View Details</h3>
                        </div>
                    </Link>
                </div>
                <h3>Assassin's Creed III</h3>
                <p>Release Date: October 30, 2012</p>
            </div>
            <div className="ac-game">
                <div className="image-container">
                    <img className='poster' src={acLiberation} alt="ac-poster" />
                    <Link to='/acgames/assassins-creed-liberation'>
                        <div className="hover-content">
                            <h3>View Details</h3>
                        </div>
                    </Link>
                </div>              
                <h3>Assassin's Creed III: Liberation</h3>
                <p>Release Date: October 30, 2012</p>
            </div>
            <div className="ac-game">
                <div className="image-container">
                    <img className='poster' src={acBlackFlag} alt="ac-poster" />
                    <Link to='/acgames/assassins-creed-black-flag'>
                        <div className="hover-content">
                            <h3>View Details</h3>
                        </div>
                    </Link>
                </div>
                <h3>Assassin's Creed IV: Black Flag</h3>
                <p>Release Date: October 19, 2013</p>
            </div>
            <div className="ac-game">
                <div className="image-container">
                    <img className='poster' src={acFreedomCry} alt="ac-poster" />
                    <Link to='/acgames/assassins-creed-freedom-cry'>
                        <div className="hover-content">
                            <h3>View Details</h3>
                        </div>
                    </Link>
                </div>
                <h3>Assassin's Creed IV: Freedom Cry</h3>
                <p>Release Date: December 17, 2013</p>
            </div>
            <div className="ac-game">
                <div className="image-container">
                    <img className='poster' src={acRogue} alt="ac-poster" />
                    <Link to='/acgames/assassins-creed-rogue'>
                        <div className="hover-content">
                            <h3>View Details</h3>
                        </div>
                    </Link>
                </div>
                <h3>Assassin's Creed Rogue</h3>
                <p>Release Date: November 11, 2014</p>
            </div>
            <div className="ac-game">
                <div className="image-container">
                    <img className='poster' src={acUnity} alt="ac-poster" />
                    <Link to='/acgames/assassins-creed-unity'>
                        <div className="hover-content">
                            <h3>View Details</h3>
                        </div>
                    </Link>
                </div>
                <h3>Assassin's Creed Unity</h3>
                <p>Release Date: November 11, 2014</p>
            </div>
            <div className="ac-game">
                <div className="image-container">
                    <img className='poster' src={acSyndicate} alt="ac-poster" />
                    <Link to='/acgames/assassins-creed-syndicate'>
                        <div className="hover-content">
                            <h3>View Details</h3>
                        </div>
                    </Link>
                </div>
                <h3>Assassin's Creed Syndicate</h3>
                <p>Release Date: October 23, 2015</p>
            </div>
            <div className="ac-game">
                <div className="image-container">
                    <img className='poster' src={acOrigins} alt="ac-poster" />
                    <Link to='/acgames/assassins-creed-origins'>
                        <div className="hover-content">
                            <h3>View Details</h3>
                        </div>
                    </Link>
                </div>
                <h3>Assassin's Creed Origins</h3>
                <p>Release Date: October 27, 2017</p>
            </div>
            <div className="ac-game">
                <div className="image-container">
                    <img className='poster' src={acOdyssey} alt="ac-poster" />
                    <Link to='/acgames/assassins-creed-odyssey'>
                        <div className="hover-content">
                            <h3>View Details</h3>
                        </div>
                    </Link>
                </div>
                <h3>Assassin's Creed Odyssey</h3>
                <p>Release Date: October 2, 2018</p>
            </div>
            <div className="ac-game">
                <div className="image-container">
                    <img className='poster' src={acValhalla} alt="ac-poster" />
                    <Link to='/acgames/assassins-creed-valhalla'>
                        <div className="hover-content">
                            <h3>View Details</h3>
                        </div>
                    </Link>
                </div>
                <h3>Assassin's Creed Valhalla</h3>
                <p>Release Date: November 10, 2020</p>
            </div>
            <div className="ac-game">
                <div className="image-container">
                    <img className='poster' src={acMirage} alt="ac-poster" />
                    <Link to='/acgames/assassins-creed-mirage'>
                        <div className="hover-content">
                            <h3>View Details</h3>
                        </div>
                    </Link>
                </div>
                <h3>Assassin's Creed Valhalla</h3>
                <p>Release Date: October 5, 2023</p>
            </div>
            <div className="ac-game">
                <div className="image-container">
                    <img className='poster' src={acShadows} alt="ac-poster" />
                    <Link to='/acgames/assassins-creed-shadows'>
                        <div className="hover-content">
                            <h3>View Details</h3>
                        </div>
                    </Link>
                </div>
                <h3>Assassin's Creed Shadows</h3>
                <p>Release Date: November 12, 2024</p>
            </div>
        </div>
        <br />
        <Footer />
    </div>
  )
}

export default AcGames
