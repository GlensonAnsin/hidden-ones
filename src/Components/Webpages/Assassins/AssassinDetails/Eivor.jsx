import './AssassinGlobal.css'
import eivor from '../../../../assets/assassins/eivor/eivor.png'
import backBtn from '../../../../assets/back-button.png'
import Navbar from '../../../Navbar/Navbar'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'
import { Link } from 'react-router-dom'
import Footer from '../../../Footer/Footer'

const Eivor = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="assassins-container">
            <Link to='/assassins'><img className='back-btn' src={backBtn} alt="back" /></Link>
            <div className="assassin-poster-detail-container">
                <div className="assassin-poster-container">
                    <img className="assassin-poster" src={eivor} alt="poster" />
                </div>
                <div className="assassin-details-container">
                    <h2>Eivor Varinsdottir</h2>
                    <br />
                    <h4>Born: 847 CE</h4>
                    <h4>Died: Unknown</h4>
                    <h4>Affiliation: Raven Clan, Hidden Ones (informally)</h4>
                    <h4>Rank: Vikingr (Viking warrior), Jarlskona (female Jarl)</h4>
                </div>
            </div>
            <br />
            <div className="biography-container">
                <h3>Biography</h3>
                <p><b>Early Life</b></p>
                <p>Eivor Varinsdottir was born in 847 CE in the region of Rygjafylke, Norway. She was the daughter of Varin, a respected chieftain. Eivor's life took a tragic turn at a young age when her parents were killed during a raid by Kjotve the Cruel, a rival Viking warlord. Eivor was adopted by Styrbjorn Sigvaldisson, the King of the Raven Clan, and became close with his son, Sigurd.</p>
                <br />
                <p><b>Rise as a Viking Warrior</b></p>
                <p>Eivor grew up to become a fierce and skilled Viking warrior. She earned the moniker "Wolf-Kissed" after surviving a wolf attack that left her with a distinctive scar. Eivor's primary goal was to avenge her parents' deaths and prove herself as a formidable leader.</p>
                <br />
                <p><b>Journey to England</b></p>
                <p>In 873 CE, facing pressures from Harald Fairhair's unification of Norway, Eivor and Sigurd decided to lead their clan to England to establish a new settlement and seek greater fortunes. They settled in the region of Mercia, founding the settlement of Ravensthorpe.</p>
                <br />
                <p><b>Leadership and Legacy</b></p>
                <p>As Mentor, Altaïr reformed the Brotherhood, emphasizing knowledge and wisdom over blind obedience. He chronicled his philosophies and discoveries in the Codex, a series of writings that would later guide future generations of Assassins. Altaïr also married Maria Thorpe, a former Templar, and had two sons, Darim and Sef.</p>
                <br />
                <p><b>Key Missions and Achievements</b></p>
                <p>Eivor's journey in England involved numerous key missions and achievements:</p>
                <br />
                <ol>
                    <li><b>Settlement Building: </b>Eivor focused on expanding and improving Ravensthorpe, recruiting new settlers, and building alliances with local Saxon and Viking rulers.</li>
                    <li><b>Alliance Building: </b>To secure the Raven Clan's position in England, Eivor forged alliances with various kingdoms and factions, including alliances with notable figures like Guthrum, Ceolwulf II of Mercia, and Halfdan Ragnarsson.</li>
                    <li><b>Confrontation with the Order of the Ancients: </b>Eivor discovered the existence of the Order of the Ancients, a secretive group seeking to control England. She worked with the Hidden Ones, represented by Hytham and Basim, to eliminate key members of the Order and dismantle their influence.</li>
                    <li><b>Mystical and Isu Encounters: </b>Eivor encountered various mystical and supernatural elements, including visions of the Isu (a precursor civilization). She explored ancient Isu temples and artifacts, uncovering the deeper lore and history of the world.</li>
                    <li><b>Sigurd's Prophecy and Eivor's Destiny: </b>Eivor's journey was deeply intertwined with Sigurd's belief in a grand destiny, leading to tensions and revelations about their true heritage and purpose. Eivor discovered that she was a reincarnation of the Isu, Odin, and Sigurd believed himself to be a reincarnation of Tyr.</li>
                </ol>
                <br />
                <p><b>Evolution as a Leader</b></p>
                <p>Eivor's evolution as a leader was marked by her growth from a vengeful warrior to a wise and respected Jarlskona. She balanced the responsibilities of leadership, the needs of her people, and the complexities of forging alliances in a foreign land. Eivor's strategic mind, combat prowess, and ability to inspire loyalty helped her navigate the challenges of establishing a new home for the Raven Clan.</p>
                <br />
                <p><b>Legacy and Later Years</b></p>
                <p>Eivor's legacy as a leader and warrior endured through her actions and achievements in England. Her efforts in dismantling the Order</p>
            </div>
            <br />
        </div>
        <Footer />      
    </div>
  )
}

export default Eivor
