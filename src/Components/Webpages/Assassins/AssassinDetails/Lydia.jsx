import './AssassinGlobal.css'
import lydia from '../../../../assets/assassins/lydia/lydia.png'
import backBtn from '../../../../assets/back-button.png'
import Navbar from '../../../Navbar/Navbar'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'
import { Link } from 'react-router-dom'
import Footer from '../../../Footer/Footer'

const Lydia = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="assassins-container">
            <Link to='/assassins'><img className='back-btn' src={backBtn} alt="back" /></Link>
            <div className="assassin-poster-detail-container">
                <div className="assassin-poster-container">
                    <img className="assassin-poster" src={lydia} alt="poster" />
                </div>
                <div className="assassin-details-container">
                    <h2>Lydia Frye</h2>
                    <br />
                    <h4>Born: March 19, 1893</h4>
                    <h4>Died: Unknown</h4>
                    <h4>Affiliation: Assassin Brotherhood</h4>
                    <h4>Rank: Assassin</h4>
                </div>
            </div>
            <br />
            <div className="biography-container">
                <h3>Biography</h3>
                <p><b>Early Life</b></p>
                <p>Lydia Frye was born into the Frye family, a distinguished lineage within the Assassin Brotherhood. She was the granddaughter of the legendary Assassins Jacob and Evie Frye, who played pivotal roles in the Assassin activities during Victorian London. Lydia grew up immersed in the world of the Assassins, learning the values and skills necessary to fight against the Templar threat from a young age.</p>
                <br />
                <p><b>Becoming an Assassin</b></p>
                <p>Lydia was trained rigorously by her family, particularly by her grandparents Jacob and Evie, who were influential figures in the Brotherhood. Her training included combat, stealth, parkour, and the use of various Assassin tools and techniques. Lydia quickly demonstrated exceptional skill and determination, earning her place as a full-fledged Assassin.</p>
                <br />
                <p><b>Key Missions and Achievements</b></p>
                <ol>
                    <li><b>World War I: </b>Lydia's most notable contributions to the Brotherhood came during World War I. She operated in London during the war, a time of great turmoil and chaos. The city was under threat from both external enemies and internal strife, providing Lydia with numerous challenges.</li>
                    <li><b>Protecting Winston Churchill: </b>One of Lydia's significant missions involved protecting Winston Churchill, who was targeted by the Templars. Her efforts ensured that Churchill could continue his vital work, which was crucial for the war effort and the future of Britain.</li>
                    <li><b>Fighting Templar Influence: </b>During the war, Lydia worked tirelessly to disrupt Templar activities, which were aimed at taking advantage of the chaos to further their own goals. She dismantled several key Templar operations and thwarted their plans to manipulate the outcome of the war.</li>
                    <li><b>Collaboration with Modern-Day Assassins: </b>Lydia's legacy continued into the modern era through the memories accessed by Layla Hassan and the modern-day Assassins. Her experiences provided valuable insights and inspiration for their ongoing battle against the Templars.</li>
                </ol>
                <br />
                <p><b>Evolution as an Assassin</b></p>
                <p>Lydia's evolution as an Assassin was shaped by the unique challenges of operating during a global conflict. Her adaptability, resourcefulness, and unwavering commitment to the Assassin cause allowed her to navigate the complexities of war-torn London. Lydia's actions not only contributed to the Brotherhood's efforts but also solidified her reputation as a capable and fearless Assassin.</p>
                <br />
                <p><b>Legacy</b></p>
                <p>Lydia Frye's legacy is one of courage and resilience. She upheld the principles of the Brotherhood during one of the most tumultuous periods in history, ensuring that the fight for freedom and justice continued despite the overwhelming odds. Her dedication to protecting key figures and thwarting Templar schemes made her an indispensable part of the Assassin Brotherhood.</p>
                <br />
                <p>Lydia's story is a testament to the enduring spirit of the Assassins, who continue to fight against oppression and tyranny regardless of the era or circumstances. Her contributions during World War I highlight the global nature of the Assassin-Templar conflict and the importance of each Assassin's role in shaping history.</p>
            </div>
            <br />
        </div>
        <Footer />  
    </div>
  )
}

export default Lydia
