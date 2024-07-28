import './AssassinGlobal.css'
import aya from '../../../../assets/assassins/aya/aya.png'
import backBtn from '../../../../assets/back-button.png'
import Navbar from '../../../Navbar/Navbar'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'
import { Link } from 'react-router-dom'
import Footer from '../../../Footer/Footer'

const Aya = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="assassins-container">
            <Link to='/assassins'><img className='back-btn' src={backBtn} alt="back" /></Link>
            <div className="assassin-poster-detail-container">
                <div className="assassin-poster-container">
                    <img className="assassin-poster" src={aya} alt="poster" />
                </div>
                <div className="assassin-details-container">
                    <h2>Amunet/Aya</h2>
                    <br />
                    <h4>Born: 85 BCE</h4>
                    <h4>Died: Unknown</h4>
                    <h4>Affiliation: Hidden Ones (early Assassin Brotherhood)</h4>
                    <h4>Rank: Founder of the Hidden Ones, later Mentor</h4>
                </div>
            </div>
            <br />
            <div className="biography-container">
                <h3>Biography</h3>
                <p><b>Early Life</b></p>
                <p>Aya was born in Alexandria, Egypt, in 85 BCE. She was of Greek and Egyptian descent, reflecting the multicultural nature of the city. Aya's upbringing in the intellectual and cultural hub of Alexandria exposed her to a wide range of knowledge and skills. She was well-educated and trained in combat, which prepared her for the challenges she would face later in life.</p>
                <br />
                <p><b>Meeting Bayek and Family Life</b></p>
                <p>Aya met Bayek of Siwa, a Medjay, and the two fell in love. They married and had a son named Khemu. Aya's life took a dramatic turn when Khemu was kidnapped and killed during a ritual by the Order of the Ancients. The tragedy drove a wedge between Aya and Bayek, as they both dealt with their grief and guilt in different ways. While Bayek sought vengeance, Aya focused on a broader mission to dismantle the Order's influence.</p>
                <br />
                <p><b>Founding the Hidden Ones</b></p>
                <p>Aya played a crucial role in the formation of the Hidden Ones, the precursor to the Assassin Brotherhood. She and Bayek realized that their personal vendetta against the Order of the Ancients needed to become a larger movement to protect the free will of all people. Aya's strategic mind and political acumen were instrumental in shaping the ideals and operations of the Hidden Ones.</p>
                <br />
                <p><b>Key Missions and Achievements</b></p>
                <p>Aya's journey was marked by several key missions and achievements:</p>
                <br />
                <ol>
                    <li><b>Alliances with Cleopatra and Caesar: </b>Aya and Bayek initially allied with Cleopatra VII and Julius Caesar, believing that they could help overthrow the corrupt Ptolemaic regime and weaken the Order of the Ancients. Aya became Cleopatra's confidante and played a vital role in Cleopatra's ascent to power.</li>
                    <li><b>Assassination of Pompey: </b>Aya was involved in the assassination of Pompey, a Roman general who posed a threat to Cleopatra's rule.</li>
                    <li><b>Confrontation with the Order of the Ancients: </b>Aya directly confronted and assassinated key members of the Order, disrupting their plans and weakening their control over Egypt.</li>
                    <li><b>Founding the Hidden Ones Bureau: </b>Aya helped establish the first Hidden Ones Bureau in Alexandria, creating a foundation for the organization's future operations.</li>
                    <li><b>Assassination of Julius Caesar: </b>Disillusioned by Julius Caesar's betrayal and his consolidation of power, Aya, along with Brutus and other conspirators, planned and executed the assassination of Caesar. This event marked a significant turning point in Aya's evolution as an Assassin and her commitment to the ideals of the Hidden Ones.</li>
                </ol>
                <br />
                <p><b>Evolution as an Assassin</b></p>
                <p>Aya's evolution as an Assassin was characterized by her transformation from a grieving mother and wife to a visionary leader. Her strategic thinking, political acumen, and unwavering commitment to justice made her a formidable figure within the Hidden Ones. She adopted the alias "Amunet," symbolizing her dedication to the cause and her willingness to operate in the shadows.</p>
                <br />
                <p><b>Becoming a Mentor</b></p>
                <p>After the assassination of Julius Caesar, Aya fully embraced her role as a leader of the Hidden Ones. She parted ways with Bayek, understanding that their missions required them to operate in different parts of the world. Aya traveled to Rome to continue her work, establishing a Hidden Ones Bureau there and spreading their influence throughout the Roman Empire.</p>
                <br />
                <p>As a Mentor, Aya guided and trained new recruits, ensuring that the principles and practices of the Hidden Ones were upheld. Her leadership and vision helped shape the early Assassin Brotherhood, laying the groundwork for its future evolution.</p>
                <br />
                <p><b>Legacy and Later Years</b></p>
                <p>Aya's later years are not extensively documented, but her influence on the Hidden Ones and the Assassin Brotherhood is profound. She is remembered as a key figure in the fight against tyranny and oppression, and her actions had a lasting impact on the course of history. Statues and monuments were erected in her honor, and her legacy as Amunet is celebrated by future generations of Assassins.</p>
                <br />
                <p>Aya's story is one of strength, resilience, and unwavering commitment to justice. Her journey from a grieving mother to a founder and Mentor of the Hidden Ones reflects the themes of sacrifice, dedication, and the enduring fight for freedom. Her legacy endures as a testament to her vision and the ideals she championed.</p>
            </div>
            <br />
        </div>
        <Footer />      
    </div>
  )
}

export default Aya
