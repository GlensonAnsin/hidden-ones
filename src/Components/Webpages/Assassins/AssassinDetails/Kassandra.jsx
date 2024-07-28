import './AssassinGlobal.css'
import kassandra from '../../../../assets/assassins/kassandra/kassandra.png'
import backBtn from '../../../../assets/back-button.png'
import Navbar from '../../../Navbar/Navbar'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'
import { Link } from 'react-router-dom'
import Footer from '../../../Footer/Footer'


const Kassandra = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="assassins-container">
            <Link to='/assassins'><img className='back-btn' src={backBtn} alt="back" /></Link>
            <div className="assassin-poster-detail-container">
                <div className="assassin-poster-container">
                    <img className="assassin-poster" src={kassandra} alt="poster" />
                </div>
                <div className="assassin-details-container">
                    <h2>Kassandra</h2>
                    <br />
                    <h4>Born: 458 BCE</h4>
                    <h4>Died: 2018 (aged 2,476)</h4>
                    <h4>Affiliation: None formally (pre-Assassin Brotherhood era)</h4>
                    <h4>Rank: Misthios (mercenary), Keeper of the Staff of Hermes Trismegistus</h4>
                </div>
            </div>
            <br />
            <div className="biography-container">
                <h3>Biography</h3>
                <p><b>Early Life</b></p>
                <p>Kassandra was born in 458 BCE in Sparta, Greece, to Myrrine and the Spartan general Nikolaos. She was a descendant of the legendary Spartan king Leonidas, from whom she inherited a powerful artifact, the Spear of Leonidas, which was a Piece of Eden. Kassandra had a younger brother, Alexios.</p>
                <br />
                <p><b>Tragedy and Exile</b></p>
                <p>At a young age, Kassandra's life was dramatically altered by a tragic event. The Oracle of Delphi prophesied that one of Myrrine's children would bring doom to Sparta. This led to a situation where Kassandra's younger brother Alexios was to be thrown off a cliff as part of the ritual to avert the prophecy. In a desperate attempt to save her brother, Kassandra accidentally pushed a Spartan elder off the cliff and was subsequently condemned for her actions. She was exiled from Sparta, and her family was torn apart.</p>
                <br />
                <p><b>Becoming a Mercenary (Misthios)</b></p>
                <p>After her exile, Kassandra grew up on the island of Kephallonia, where she was raised by a man named Markos. She became a mercenary, or "misthios," and developed formidable combat skills, taking on various jobs for pay. Her abilities and the influence of the Spear of Leonidas allowed her to excel as a warrior.</p>
                <br />
                <p><b>Quest for Family and Truth</b></p>
                <p>Kassandra's journey truly began when she was hired to assassinate a Spartan general, who turned out to be her father, Nikolaos. This revelation set her on a path to uncover the truth about her family and the prophecy that had destroyed it. Her quest took her across the Greek world during the Peloponnesian War, involving her in significant historical events and conflicts between Athens and Sparta.</p>
                <br />
                <p><b>Key Missions and Achievements</b></p>
                <ol>
                    <li><b>Peloponnesian War: </b>Kassandra played a crucial role in the Peloponnesian War, fighting for both Athens and Sparta at different times, depending on her missions and objectives.</li>
                    <li><b>Cult of Kosmos: </b>Kassandra discovered the existence of the Cult of Kosmos, a secretive organization manipulating the war and Greek politics for their gain. She embarked on a mission to dismantle the cult, uncovering its members, and thwarting their plans.</li>
                    <li><b>Family Reunification: </b>Throughout her journey, Kassandra sought to reunite her family. She discovered that her mother, Myrrine, was still alive and that Alexios had been raised by the Cult of Kosmos and turned into their enforcer, Deimos. The quest to save her brother and bring her family back together was central to her story.</li>
                    <li><b>Mythical Creatures and Artifacts: </b>Kassandra encountered and defeated several mythical creatures, such as the Minotaur, Medusa, and the Cyclops, which were guarding powerful artifacts related to the Isu, an ancient and advanced civilization.</li>
                    <li><b>Keeper of the Staff of Hermes Trismegistus: </b>Kassandra obtained the Staff of Hermes Trismegistus, a powerful Isu artifact that granted her immortality and the duty of safeguarding its power. This role connected her to Layla Hassan, a modern-day Assassin, through the Animus.</li>
                </ol>
                <br />
                <p><b>Evolution as a Character</b></p>
                <p>Kassandra's evolution as a character is marked by her growth from a mercenary focused on survival to a key player in the broader conflict involving the Isu and the Cult of Kosmos. Her journey was driven by personal loss, the search for truth, and the desire to protect her loved ones. She evolved from a lone warrior to someone who understood the complexities of power, destiny, and responsibility.</p>
                <br />
                <p><b>Legacy and Immortality</b></p>
                <p>Kassandra's acquisition of the Staff of Hermes Trismegistus granted her immortality, ensuring that she would live through the ages. She used this time to safeguard humanity from the misuse of Isu artifacts and continued her role as a protector.</p>
                <br />
                <p>In the modern era, Kassandra, under the alias Aletheia, guided Layla Hassan, an Assassin, through her knowledge and experiences. This connection emphasized her lasting impact on the ongoing battle between Assassins and Templars.</p>
                <br />
                <p><b>Significance</b></p>
                <p>Kassandra's story is one of resilience, strength, and an unyielding quest for justice and truth. Her journey through ancient Greece, filled with battles, mythical encounters, and personal discoveries, shaped her into a legendary figure. Though she was never formally part of the Assassin Brotherhood, her actions and legacy significantly influenced the ideals and missions of the Assassins. Kassandra remains a symbol of perseverance, heroism, and the enduring fight against</p>
            </div>
            <br />
        </div>
        <Footer />      
    </div>
  )
}

export default Kassandra
