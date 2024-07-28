import './AssassinGlobal.css'
import adewale from '../../../../assets/assassins/adewale/adewale.png'
import backBtn from '../../../../assets/back-button.png'
import Navbar from '../../../Navbar/Navbar'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'
import { Link } from 'react-router-dom'
import Footer from '../../../Footer/Footer'

const Adewale = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="assassins-container">
            <Link to='/assassins'><img className='back-btn' src={backBtn} alt="back" /></Link>
            <div className="assassin-poster-detail-container">
                <div className="assassin-poster-container">
                    <img className="assassin-poster" src={adewale} alt="poster" />
                </div>
                <div className="assassin-details-container">
                    <h2>Adéwalé</h2>
                    <br />
                    <h4>Born: 1692</h4>
                    <h4>Died: 1758 (aged 66)</h4>
                    <h4>Affiliation: Assassin Brotherhood</h4>
                    <h4>Rank: Mentor</h4>
                </div>
            </div>
            <br />
            <div className="biography-container">
                <h3>Biography</h3>
                <p><b>Early Life</b></p>
                <p>Adéwalé was born into slavery on a sugar plantation in Trinidad. He spent his early years in harsh conditions until he managed to escape at the age of 14. After gaining his freedom, Adéwalé worked on various ships, eventually becoming a sailor and pirate.</p>
                <br />
                <p><b>Encounter with Edward Kenway</b></p>
                <p>Adéwalé's life changed dramatically in 1715 when he joined the crew of the pirate Edward Kenway. Initially serving as Kenway's quartermaster on the ship Jackdaw, Adéwalé and Kenway developed a close partnership. Adéwalé's skills and leadership abilities made him a key figure in Kenway's crew.</p>
                <br />
                <p><b>Transition to the Assassins</b></p>
                <p>Despite his involvement in piracy, Adéwalé began to see the injustices and exploitation prevalent in the Caribbean, particularly concerning slavery. His experiences led him to seek a greater purpose beyond piracy. His encounter with the Assassin Brotherhood, coupled with his own moral convictions, guided him towards their cause.</p>
                <br />
                <p>In 1721, Adéwalé officially joined the Assassin Brotherhood. His dedication and combat skills quickly earned him recognition within the order. He trained extensively, mastering the Assassins' techniques and adopting their creed.</p>
                <br />
                <p><b>Becoming an Assassin and Mentor</b></p>
                <p>Adéwalé's first major solo mission as an Assassin was chronicled in "Assassin's Creed Freedom Cry." He commandeered his own ship, the Experto Crede, and embarked on a mission to liberate slaves and dismantle the slave trade in the Caribbean. His efforts were focused on freeing enslaved people and assisting Maroon communities in their fight for freedom.</p>
                <br />
                <p>Adéwalé's leadership and success in these missions elevated him to the rank of Mentor within the Brotherhood. He established and led the Assassin Brotherhood in the Caribbean, continuing to fight against Templar influence and the slave trade.</p>
                <br />
                <p><b>Later Years and Death</b></p>
                <p>In his later years, Adéwalé remained committed to the Assassin Brotherhood and the cause of freedom. He continued to mentor new Assassins and support liberation efforts. His influence extended beyond the Caribbean, as he collaborated with other Assassin Brotherhood factions.</p>
                <br />
                <p>Adéwalé's life came to an end in 1758 when he was killed during an attack on Port-au-Prince. His legacy, however, endured through the many lives he touched and the freedom he helped secure for countless individuals.</p>
                <br />
                <p><b>Significance</b></p>
                <p>Adéwalé's story is one of resilience, transformation, and unwavering commitment to justice. From his beginnings as a slave to becoming a prominent Assassin and Mentor, Adéwalé's journey reflects the fight against oppression and the pursuit of freedom. His impact on the Assassin Brotherhood and his role in liberating slaves in the Caribbean left a lasting legacy of courage and determination.</p>
            </div>
            <br />
        </div>
        <Footer />
    </div>
  )
}

export default Adewale
