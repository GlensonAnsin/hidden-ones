import './AssassinGlobal.css'
import jacob from '../../../../assets/assassins/jacob/jacob.png'
import backBtn from '../../../../assets/back-button.png'
import Navbar from '../../../Navbar/Navbar'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'
import { Link } from 'react-router-dom'
import Footer from '../../../Footer/Footer'

const Jacob = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="assassins-container">
            <Link to='/assassins'><img className='back-btn' src={backBtn} alt="back" /></Link>
            <div className="assassin-poster-detail-container">
                <div className="assassin-poster-container">
                    <img className="assassin-poster" src={jacob} alt="poster" />
                </div>
                <div className="assassin-details-container">
                    <h2>Jacob Frye</h2>
                    <br />
                    <h4>Born: November 9, 1847</h4>
                    <h4>Died: Unknown</h4>
                    <h4>Affiliation: Assassin Brotherhood</h4>
                    <h4>Rank: Master Assassin</h4>
                </div>
            </div>
            <br />
            <div className="biography-container">
                <h3>Biography</h3>
                <p><b>Early Life</b></p>
                <p>Jacob Frye was born on November 9, 1847, in Crawley, England. He and his twin sister, Evie Frye, were raised by their grandmother after the death of their mother. Their father, Ethan Frye, was a respected Assassin who trained his children in the ways of the Brotherhood from a young age. Jacob and Evie were close, often competing with each other but sharing a deep bond and a common goal.</p>
                <br />
                <p><b>Moving to London</b></p>
                <p>In 1868, at the age of 21, Jacob and Evie decided to leave their small hometown and move to London. Their goal was to liberate the city from Templar control and establish a strong Assassin presence. London, during the height of the Industrial Revolution, was rife with corruption, poverty, and exploitation. The Templars, led by Crawford Starrick, held significant power over the city's institutions and industries.</p>
                <br />
                <p><b>Establishing the Rooks</b></p>
                <p>Jacob quickly set out to build his own gang, the Rooks, to counter the Templar-controlled Blighters. He aimed to take control of the city's criminal underworld, using it as a base to undermine Templar influence. His methods were often direct and violent, favoring brute force and charisma to rally allies and intimidate enemies. Jacob's approach contrasted with Evie's more strategic and stealthy tactics, often leading to conflicts between the siblings.</p>
                <br />
                <p><b>Key Missions and Achievements</b></p>
                <p>Jacob's journey in London involved several key missions and achievements:</p>
                <br />
                <ol>
                    <li><b>Liberation of Whitechapel: </b>Jacob began by liberating the district of Whitechapel, taking down the Blighters and earning the loyalty of the local population.</li>
                    <li><b>Assassination of Templar Leaders: </b>Jacob systematically targeted and assassinated several high-ranking Templar leaders who were instrumental in Starrick's control over London. These included Rupert Ferris, a factory owner exploiting child labor, and Pearl Attaway, a corrupt railway magnate.</li>
                    <li><b>Disruption of Templar Operations: </b>Jacob disrupted various Templar operations, including weapons manufacturing and trafficking, weakening their grip on the city's economy and infrastructure.</li>
                    <li><b>Confrontation with Crawford Starrick: </b>The culmination of Jacob's efforts was the direct confrontation with Crawford Starrick. Alongside Evie, Jacob infiltrated Starrick's stronghold and assassinated him, effectively breaking Templar control over London.</li>
                </ol>
                <br />
                <p><b>Evolution as an Assassin</b></p>
                <p>Jacob's evolution as an Assassin was marked by his growing understanding of the broader implications of his actions. Initially driven by a desire for immediate results and a penchant for violence, Jacob learned the importance of strategy, patience, and the ethical considerations of his role. His relationship with Evie was central to this growth, as her influence helped temper his impulsiveness and refine his approach.</p>
                <br />
                <p><b>Becoming a Master Assassin</b></p>
                <p>By the end of their campaign in London, both Jacob and Evie earned the rank of Master Assassin. They succeeded in establishing a strong Assassin presence in the city, with the Rooks transitioning from a gang to a force for good, helping to maintain order and protect the oppressed.</p>
                <br />
                <p><b>Later Years and Legacy</b></p>
                <p>Jacob's later years are not extensively documented, but it is known that he continued to play a significant role in the Brotherhood. His leadership and actions in London left a lasting impact on the city's Assassin and Templar dynamics. He also maintained a close relationship with Evie, and together they ensured the continued prosperity and influence of the Brotherhood.</p>
                <br />
                <p>Jacob Frye's story is one of transformation, from a brash and impulsive young man to a seasoned and thoughtful leader. His journey reflects the themes of family, loyalty, and the struggle for justice in a rapidly changing world. His legacy as a Master Assassin is marked by his contributions to the liberation of London and the strengthening of the Assassin Brotherhood during the Industrial Revolution.</p>
            </div>
            <br />
        </div>
        <Footer />     
    </div>
  )
}

export default Jacob
