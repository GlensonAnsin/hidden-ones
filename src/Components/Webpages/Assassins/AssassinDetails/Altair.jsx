import './AssassinGlobal.css'
import altair1 from '../../../../assets/assassins/altair/altair-1.png'
import backBtn from '../../../../assets/back-button.png'
import Navbar from '../../../Navbar/Navbar'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'
import { Link } from 'react-router-dom'
import Footer from '../../../Footer/Footer'

const Altair = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="assassins-container">
            <Link to='/assassins'><img className='back-btn' src={backBtn} alt="back" /></Link>
            <div className="assassin-poster-detail-container">
                <div className="assassin-poster-container">
                    <img className="assassin-poster" src={altair1} alt="poster" />
                </div>
                <div className="assassin-details-container">
                    <h2>Altaïr Ibn-La'Ahad</h2>
                    <br />
                    <h4>Born: January 11, 1165</h4>
                    <h4>Died: August 12, 1257 (aged 92)</h4>
                    <h4>Affiliation: Assassin Brotherhood</h4>
                    <h4>Rank: Mentor</h4>
                </div>
            </div>
            <br />
            <div className="biography-container">
                <h3>Biography</h3>
                <p><b>Early Life</b></p>
                <p>Altaïr Ibn-La'Ahad was born to Umar Ibn-La'Ahad and Maud in 1165. His father was a prominent member of the Assassin Brotherhood, while his mother died shortly after his birth. Raised in the Assassin Order, Altaïr showed remarkable promise from a young age, being trained rigorously in the ways of the Assassins.</p>
                <br />
                <p><b>Rise to Prominence</b></p>
                <p>By the age of 25, Altaïr had achieved the rank of Master Assassin, a prestigious position within the Brotherhood. However, his arrogance and overconfidence led to a significant failure during a mission to retrieve a powerful artifact known as the Apple of Eden from the Templar, Robert de Sablé. This failure resulted in the deaths of fellow Assassins and the loss of the artifact, leading to Altaïr's demotion to a novice rank by the Mentor of the Brotherhood, Al Mualim.</p>
                <br />
                <p><b>Redemption and Discovery</b></p>
                <p>To redeem himself, Altaïr was tasked with assassinating nine prominent individuals who were secretly Templars. Through these missions, Altaïr uncovered a conspiracy and realized that his Mentor, Al Mualim, was also a Templar and intended to use the Apple of Eden for his own gain. Confronting Al Mualim, Altaïr defeated and killed him, taking the Apple and becoming the new Mentor of the Assassin Brotherhood.</p>
                <br />
                <p><b>Leadership and Legacy</b></p>
                <p>As Mentor, Altaïr reformed the Brotherhood, emphasizing knowledge and wisdom over blind obedience. He chronicled his philosophies and discoveries in the Codex, a series of writings that would later guide future generations of Assassins. Altaïr also married Maria Thorpe, a former Templar, and had two sons, Darim and Sef.</p>
                <br />
                <p>Throughout his leadership, Altaïr created numerous innovations, including improvements to the Hidden Blade and the development of new techniques. His influence extended across the globe, strengthening the Brotherhood's presence.</p>
                <br />
                <p><b>Final Years and Death</b></p>
                <p>In his later years, Altaïr continued to protect the Apple of Eden and the Brotherhood. His leadership was not without challenges, including internal strife and external threats from the Templars. In 1257, during the Mongol invasion of Masyaf, Altaïr secured the Apple in a hidden library within the fortress. He recorded his final words and locked himself inside the library, where he died peacefully.</p>
                <br />
                <p><b>Legacy</b></p>
                <p>Altaïr's legacy endured through the centuries, with his Codex and teachings influencing many Assassins, including Ezio Auditore da Firenze. His life and achievements solidified his status as one of the greatest Assassins in history, remembered for his wisdom, strength, and dedication to the Brotherhood's ideals.</p>
            </div>
            <br />
        </div>
        <Footer />
    </div>
  )
}

export default Altair
