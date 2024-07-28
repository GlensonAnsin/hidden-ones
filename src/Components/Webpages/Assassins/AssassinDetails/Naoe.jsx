import './AssassinGlobal.css'
import naoe from '../../../../assets/assassins/naoe/naoe.png'
import backBtn from '../../../../assets/back-button.png'
import Navbar from '../../../Navbar/Navbar'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'
import { Link } from 'react-router-dom'
import Footer from '../../../Footer/Footer'

const Naoe = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="assassins-container">
            <Link to='/assassins'><img className='back-btn' src={backBtn} alt="back" /></Link>
            <div className="assassin-poster-detail-container">
                <div className="assassin-poster-container">
                    <img className="assassin-poster" src={naoe} alt="poster" />
                </div>
                <div className="assassin-details-container">
                    <h2>Fujibayashi Naoe</h2>
                    <br />
                    <h4>Born: Unknown (during the Sengoku period)</h4>
                    <h4>Died: Unknown</h4>
                    <h4>Affiliation: Hidden Ones</h4>
                    <h4>Rank: Master Assassin</h4>
                </div>
            </div>
            <br />
            <div className="biography-container">
                <h3>Biography</h3>
                <p><b>Early Life</b></p>
                <p>Fujibayashi Naoe was born during the tumultuous Sengoku period in Japan, a time marked by constant military conflict and political intrigue. Little is known about her early life, but it is believed that she came from a family with a strong martial tradition. Her skills in ninjutsu and espionage were honed from a young age, preparing her for a life in the shadows.</p>
                <br />
                <p><b>Joining the Hidden Ones</b></p>
                <p>Naoe's exceptional abilities and keen intellect brought her to the attention of the Hidden Ones, the precursors to the Assassin Brotherhood. She was recruited into their ranks and quickly rose to prominence due to her proficiency in stealth, combat, and intelligence gathering.</p>
                <br />
                <p><b>Key Missions and Achievements</b></p>
                <ol>
                    <li><b>Infiltration and Espionage: </b>Naoe was a master of infiltration and espionage. She played a crucial role in gathering intelligence on the activities of the Order of the Ancients in Japan, helping to uncover their plots and machinations.</li>
                    <li><b>Assassinations: </b>As a Master Assassin, Naoe was involved in several high-profile assassinations of key figures who threatened the peace and stability of Japan. Her targets often included corrupt warlords, traitorous samurai, and influential members of the Order of the Ancients.</li>
                    <li><b>Training and Mentorship: </b>Naoe was also instrumental in training the next generation of Assassins in Japan. Her teachings emphasized the importance of precision, discipline, and the ethical use of their skills to protect the innocent and fight against tyranny.</li>
                    <li><b>Alliance Building: </b>Naoe's strategic mind and diplomatic skills helped forge alliances with various factions, including ninja clans, ronin warriors, and sympathetic samurai. These alliances were crucial in expanding the influence and reach of the Hidden Ones in Japan.</li>
                </ol>
                <br />
                <p><b>Evolution as an Assassin</b></p>
                <p>Naoe's evolution as an Assassin was marked by her transition from a skilled ninja to a respected leader within the Hidden Ones. Her journey was one of constant growth and adaptation, as she navigated the complex and dangerous world of Sengoku Japan. Naoe's dedication to the principles of the Hidden Ones and her unwavering commitment to justice made her a formidable force in the fight against oppression.</p>
                <br />
                <p><b>Legacy</b></p>
                <p>Fujibayashi Naoe's legacy in the Assassin's Creed universe is one of strength, wisdom, and resilience. She is remembered as a pioneer who helped establish the presence of the Hidden Ones in Japan and played a key role in their efforts to counter the influence of the Order of the Ancients. Her teachings and achievements continued to inspire future generations of Assassins.</p>
                <br />
                <p>Naoe's story is a testament to the power of stealth, intelligence, and strategic thinking. Her contributions to the Hidden Ones' cause exemplify the enduring spirit of the Assassins and their commitment to fighting for a better world, even in the face of overwhelming odds.</p>
            </div>
            <br />
        </div>
        <Footer />     
    </div>
  )
}

export default Naoe
