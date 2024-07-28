import './AssassinGlobal.css'
import alMualim from '../../../../assets/assassins/almualim/almualim.png'
import backBtn from '../../../../assets/back-button.png'
import Navbar from '../../../Navbar/Navbar'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'
import { Link } from 'react-router-dom'
import Footer from '../../../Footer/Footer'

const AlMualim = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="assassins-container">
            <Link to='/assassins'><img className='back-btn' src={backBtn} alt="back" /></Link>
            <div className="assassin-poster-detail-container">
                <div className="assassin-poster-container">
                    <img className="assassin-poster" src={alMualim} alt="poster" />
                </div>
                <div className="assassin-details-container">
                    <h2>Rashid ad-din Sinan</h2>
                    <br />
                    <h4>Born: 1132</h4>
                    <h4>Died: 1191 (aged 59)</h4>
                    <h4>Affiliation: Assassin Brotherhood</h4>
                    <h4>Rank: Mentor</h4>
                </div>
            </div>
            <br />
            <div className="biography-container">
                <h3>Biography</h3>
                <p><b>Early Life</b></p>
                <p>Rashid ad-din Sinan, also known as "Al Mualim" and "The Old Man of the Mountain," was born in Basra, in modern-day Iraq, in 1132. Little is known about his early life before he joined the Assassin Brotherhood, but his profound intelligence and strategic mind soon became evident. He studied in the Nizari Ismaili center of learning in Alamut, where he was trained in philosophy, strategy, and the ways of the Assassins.</p>
                <br />
                <p><b>Rise to Mentor</b></p>
                <p>Rashid's exceptional skills and leadership abilities led to his rapid rise within the ranks of the Assassins. By the mid-12th century, he had become the leader of the Syrian branch of the Assassin Brotherhood, operating from the mountain fortress of Masyaf. As Mentor, he played a crucial role in directing the Assassins' efforts against the Crusaders and other enemies.</p>
                <br />
                <p><b>Key Missions and Achievements</b></p>
                <ol>
                    <li><b>Strategic Warfare: </b>Rashid was a master strategist, employing guerrilla tactics and psychological warfare to combat the Crusaders and other adversaries. His ability to orchestrate complex operations and outmaneuver larger forces was legendary.</li>
                    <li><b>Political Influence: </b>Rashid leveraged his influence to negotiate with powerful figures, including the Crusader states and Muslim leaders. His negotiations and alliances were instrumental in maintaining the Assassins' power and autonomy in a volatile region.</li>
                    <li><b>Defending Masyaf: </b>Under Rashid's leadership, Masyaf became a symbol of resistance and a stronghold for the Assassins. He successfully defended the fortress against multiple sieges and attacks, solidifying his reputation as a formidable leader.</li>
                    <li><b>Mentorship and Training: </b>Rashid was a mentor to many young Assassins, instilling in them the principles and tactics of the Brotherhood. His teachings emphasized the importance of secrecy, intelligence, and strategic planning.</li>
                    <li><b>Symbolic Acts: </b>Rashid's most famous acts often involved highly symbolic and public assassinations of key targets, designed to send a message to enemies and potential allies alike. These acts were meant to demonstrate the Assassins' reach and resolve.</li>
                </ol>
                <br />
                <p><b>Evolution as an Assassin</b></p>
                <p>Rashid's evolution as an Assassin was marked by his transition from a skilled operative to a revered leader and strategist. His deep understanding of the political and social dynamics of the time allowed him to navigate complex situations and ensure the survival and influence of the Assassin Brotherhood.</p>
                <br />
                <p><b>Later Years and Death</b></p>
                <p>Rashid continued to lead the Syrian Assassins until his death in 1191. His legacy endured through the continued strength and influence of the Brotherhood in the region, as well as the lasting impact of his teachings and strategies.</p>
                <br />
                <p><b>Legacy</b></p>
                <p>Rashid ad-din Sinan's legacy is one of resilience, intelligence, and unwavering dedication to the Assassin cause. His leadership during a critical period in the Brotherhood's history ensured its survival and set the foundation for future generations of Assassins. Rashid is remembered as a master strategist and a symbol of the Assassins' enduring fight against oppression and tyranny.</p>
                <br />
                <p>His story in the Assassin's Creed universe highlights the blend of historical fact and creative interpretation, showcasing the pivotal role he played in shaping the Brotherhood's philosophy and methods. Rashid's contributions continue to inspire and inform the actions of Assassins in the ongoing struggle for freedom and justice.</p>
            </div>
            <br />
        </div>
        <Footer />   
    </div>
  )
}

export default AlMualim
