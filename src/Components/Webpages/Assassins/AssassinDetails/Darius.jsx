import './AssassinGlobal.css'
import darius from '../../../../assets/assassins/darius/darius.png'
import backBtn from '../../../../assets/back-button.png'
import Navbar from '../../../Navbar/Navbar'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'
import { Link } from 'react-router-dom'
import Footer from '../../../Footer/Footer'

const Darius = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="assassins-container">
            <Link to='/assassins'><img className='back-btn' src={backBtn} alt="back" /></Link>
            <div className="assassin-poster-detail-container">
                <div className="assassin-poster-container">
                    <img className="assassin-poster" src={darius} alt="poster" />
                </div>
                <div className="assassin-details-container">
                    <h2>Darius</h2>
                    <br />
                    <h4>Born: Unknown (circa 5th century BCE)</h4>
                    <h4>Died: Unknown</h4>
                    <h4>Affiliation: Proto-Assassin (before Hidden Ones)</h4>
                    <h4>Rank: Mentor</h4>
                </div>
            </div>
            <br />
            <div className="biography-container">
                <h3>Biography</h3>
                <p><b>Early Life</b></p>
                <p>Darius, originally named Artabanus, was born in ancient Persia during the 5th century BCE. Little is known about his early life, but he was a skilled warrior who became increasingly disillusioned with the tyrannical rule of Xerxes I, the King of Kings of the Achaemenid Empire.</p>
                <br />
                <p><b>Being a Proto-Assassin</b></p>
                <p>Darius is most famous for being one of the proto-assassin, the precursor organization to the Assassin Brotherhood. His disillusionment with Xerxes' rule led him to join a group dedicated to fighting tyranny and oppression.</p>
                <br />
                <p><b>Key Missions and Achievements</b></p>
                <ol>
                    <li><b>Assassination of Xerxes I: </b>Darius's most famous act was the assassination of Xerxes I in 465 BCE. This was the first recorded use of the iconic Hidden Blade, a weapon that became synonymous with the Assassins. By killing Xerxes, Darius aimed to disrupt the oppressive rule and inspire others to rise against tyranny.</li>
                    <li><b>Symbolic Acts and Legacy: </b>Darius's assassination of Xerxes became a legendary act, symbolizing the fight against oppression. His legacy continued to inspire future generations of Hidden Ones and Assassins. His actions set a precedent for the use of assassination as a tool to combat tyranny.</li>
                    <li><b>Mentorship and Training: </b>After the assassination, Darius continued to fight against tyranny and train new members of their organization. His teachings and philosophies laid the groundwork for what would eventually become the Assassin Brotherhood.</li>
                </ol>
                <br />
                <p><b>Evolution as an Assassin</b></p>
                <p>Darius's evolution from a disillusioned warrior to a legendary figure in the fight against oppression is marked by his strategic mind, combat prowess, and unwavering dedication to the cause. His use of the Hidden Blade and the successful assassination of a powerful ruler set the foundation for the methods and tools that the Assassins would continue to use for centuries.</p>
                <br />
                <p><b>Later Years and Death</b></p>
                <p>Details of Darius's later years and death are shrouded in mystery. However, his legacy lived on through his children and the continued activities of the Hidden Ones. His lineage continued to play a significant role in the Assassin Brotherhood.</p>
                <br />
                <p><b>Legacy</b></p>
                <p>Darius's legacy is one of bravery, innovation, and foundational influence. As the first recorded user of the Hidden Blade and a key figure in the early days before the founding of the Hidden Ones, his actions and teachings were instrumental in shaping the future of the Assassin Brotherhood. His story is a testament to the enduring fight against tyranny and the power of individual action to inspire widespread change.</p>
                <br />
                <p>In the Assassin's Creed universe, Darius is revered as a founding figure, whose legacy continues to influence the Assassins' philosophy and methods. His story bridges the gap between ancient history and the enduring struggle for freedom that defines the Assassin Brotherhood.</p>
            </div>
            <br />
        </div>
        <Footer />      
    </div>
  )
}

export default Darius
