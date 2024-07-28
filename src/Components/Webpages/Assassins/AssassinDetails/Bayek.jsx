import './AssassinGlobal.css'
import bayek from '../../../../assets/assassins/bayek/bayek.png'
import backBtn from '../../../../assets/back-button.png'
import Navbar from '../../../Navbar/Navbar'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'
import { Link } from 'react-router-dom'
import Footer from '../../../Footer/Footer'

const Bayek = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="assassins-container">
            <Link to='/assassins'><img className='back-btn' src={backBtn} alt="back" /></Link>
            <div className="assassin-poster-detail-container">
                <div className="assassin-poster-container">
                    <img className="assassin-poster" src={bayek} alt="poster" />
                </div>
                <div className="assassin-details-container">
                    <h2>Bayek</h2>
                    <br />
                    <h4>Born: 85 BCE</h4>
                    <h4>Died: Unknown</h4>
                    <h4>Affiliation: Hidden Ones (early Assassin Brotherhood)</h4>
                    <h4>Rank: Medjay, Founder of the Hidden Ones</h4>
                </div>
            </div>
            <br />
            <div className="biography-container">
                <h3>Biography</h3>
                <p><b>Early Life</b></p>
                <p>Bayek was born in the small village of Siwa in Egypt in 85 BCE. He was a Medjay, a member of an ancient line of protectors who served as guardians of the people and the land. Bayek's father, Sabu, was also a Medjay and trained Bayek in their ways, teaching him combat, hunting, and a strong sense of justice.</p>
                <br />
                <p><b>Tragedy and Quest for Vengeance</b></p>
                <p>In 49 BCE, Bayek's life was shattered when his young son, Khemu, was kidnapped by a shadowy group known as the Order of the Ancients. During a ritualistic confrontation, Bayek accidentally killed Khemu while trying to escape. Consumed by guilt and grief, Bayek swore to hunt down the members of the Order responsible for his son's death.</p>
                <br />
                <p><b>The Birth of the Hidden Ones</b></p>
                <p>Bayek's quest for vengeance took him across Egypt, where he uncovered the vast influence of the Order of the Ancients. Along the way, he reunited with his wife, Aya, who shared his mission and determination. Together, they discovered that the Order sought to control Egypt through manipulation and fear, using powerful artifacts known as Pieces of Eden.</p>
                <br />
                <p>Realizing that the fight against the Order required more than personal revenge, Bayek and Aya founded the Hidden Ones, an organization dedicated to protecting the free will of the people and combating the Order's tyranny. The Hidden Ones were the precursor to the Assassin Brotherhood, embodying the principles of stealth, freedom, and justice.</p>
                <br />
                <p><b>Key Missions and Achievements</b></p>
                <p>Bayek's journey included several significant missions and achievements:</p>
                <br />
                <ol>
                    <li><b>Elimination of Order Members: </b>Bayek systematically hunted and eliminated key members of the Order of the Ancients, disrupting their plans and weakening their hold on Egypt.</li>
                    <li><b>Alliances with Cleopatra and Caesar: </b>Bayek and Aya initially allied with Cleopatra and Julius Caesar, believing they could help overthrow the corrupt Ptolemaic regime and the Order. However, they soon realized that Cleopatra and Caesar had their own ambitions, leading to a disillusionment with their cause.</li>
                    <li><b>Discovery of the First Civilization: </b>Bayek encountered ancient sites and artifacts left by the First Civilization, gaining deeper insight into the origins and dangers of the Pieces of Eden.</li>
                    <li><b>Foundation of the Hidden Ones: </b>Bayek and Aya officially established the Hidden Ones, creating the first Bureau in Alexandria and setting the foundations for the Assassin Brotherhood. They codified the principles and practices that would guide the Assassins for centuries to come.</li>
                </ol>
                <br />
                <p><b>Evolution as an Assassin</b></p>
                <p>Bayek's evolution as an Assassin was marked by his transformation from a vengeful father to a visionary leader. His personal quest for justice expanded into a broader mission to protect the freedom and rights of all people. Bayek's experiences taught him the importance of sacrifice, humility, and the power of unity in the face of tyranny.</p>
                <br />
                <p><b>Legacy and Later Years</b></p>
                <p>After establishing the Hidden Ones, Bayek continued his work, spreading their influence across Egypt and beyond. His actions inspired future generations of Assassins, and his legacy endured as the principles of the Hidden Ones became the foundation of the Assassin Brotherhood.</p>
                <br />
                <p>Bayek's story is one of resilience, transformation, and the enduring fight for justice. His journey from a grieving father to the founder of a revolutionary organization reflects the themes of sacrifice, freedom, and the power of ideals. Bayek's legacy as a Master Assassin and founder of the Hidden Ones is a testament to his unwavering commitment to protecting the free will of humanity.</p>
            </div>
            <br />
        </div>
        <Footer />      
    </div>
  )
}

export default Bayek
