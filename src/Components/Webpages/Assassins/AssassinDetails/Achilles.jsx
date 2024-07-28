import './AssassinGlobal.css'
import achilles from '../../../../assets/assassins/achilles/achilles.png'
import backBtn from '../../../../assets/back-button.png'
import Navbar from '../../../Navbar/Navbar'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'
import { Link } from 'react-router-dom'
import Footer from '../../../Footer/Footer'

const Achilles = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="assassins-container">
            <Link to='/assassins'><img className='back-btn' src={backBtn} alt="back" /></Link>
            <div className="assassin-poster-detail-container">
                <div className="assassin-poster-container">
                    <img className="assassin-poster" src={achilles} alt="poster" />
                </div>
                <div className="assassin-details-container">
                    <h2>Achilles Davenport</h2>
                    <br />
                    <h4>Born: September 15, 1710</h4>
                    <h4>Died: April 15, 1781 (aged 70)</h4>
                    <h4>Affiliation: Assassin Brotherhood</h4>
                    <h4>Rank: Mentor</h4>
                </div>
            </div>
            <br />
            <div className="biography-container">
                <h3>Biography</h3>
                <p><b>Early Life</b></p>
                <p>Achilles Davenport was born in 1710. Not much is known about his early life, but he eventually joined the Assassin Brotherhood, where he distinguished himself through his intelligence, combat prowess, and dedication to the Brotherhood's cause. His leadership skills and strategic mind quickly propelled him through the ranks.</p>
                <br />
                <p><b>Rise to Mentor</b></p>
                <p>By the mid-18th century, Achilles had become a key figure within the American branch of the Assassin Brotherhood. His strategic acumen and deep understanding of the Assassin philosophy earned him the rank of Mentor, making him responsible for guiding and training new Assassins in the Colonies.</p>
                <br />
                <p><b>Key Missions and Achievements</b></p>
                <ol>
                    <li><b>Establishing the Homestead: </b>Achilles established the Davenport Homestead in the American Colonies, turning it into a sanctuary for Assassins and a base of operations. The homestead became a hub for training and coordinating activities against the Templars.</li>
                    <li><b>Training of Connor Kenway: </b>One of Achilles' most significant contributions was training Connor Kenway. Connor, a young Mohawk with a burning desire for justice, came to Achilles seeking guidance. Despite his initial reluctance, Achilles saw potential in Connor and trained him to become a formidable Assassin.</li>
                    <li><b>Conflict with Shay Cormac: </b>Achilles' tenure as Mentor was marred by tragedy when one of his former apprentices, Shay Patrick Cormac, betrayed the Brotherhood. After a mission involving a Precursor site went horribly wrong, Shay turned against the Assassins, blaming them for the resulting devastation. This betrayal led to the downfall of the Colonial Brotherhood, with many Assassins being killed or driven into hiding.</li>
                    <li><b>Supporting the American Revolution: </b>Despite the Brotherhood's weakened state, Achilles continued to support the fight for freedom during the American Revolution. He provided guidance and resources to Connor, who played a crucial role in key events of the Revolution, including the battles against the Templars embedded within the British ranks.</li>
                </ol>
                <br />
                <p><b>Evolution as an Assassin</b></p>
                <p>Achilles' evolution as an Assassin was marked by both great achievements and profound losses. As a Mentor, he experienced the highs of training promising new recruits and the lows of witnessing betrayal and the near-destruction of his Brotherhood. These experiences shaped him into a wise, albeit somewhat bitter, figure by the time he took Connor under his wing.</p>
                <br />
                <p><b>Later Years and Death</b></p>
                <p>Achilles spent his later years at the Davenport Homestead, mentoring Connor and supporting the remnants of the Brotherhood. Despite his physical ailments and the emotional scars from past betrayals, he remained committed to the Assassin cause until his death in 1781.</p>
                <br />
                <p><b>Legacy</b></p>
                <p>Achilles Davenport's legacy is defined by his resilience and unwavering dedication to the Assassin Brotherhood. His mentorship of Connor Kenway ensured that the Brotherhood's ideals and teachings were passed on to a new generation. Through Connor's actions and the revitalization of the American Brotherhood, Achilles' influence extended beyond his lifetime.</p>
                <br />
                <p>Achilles' story is a testament to the enduring spirit of the Assassins, highlighting the importance of mentorship, resilience in the face of adversity, and the relentless pursuit of freedom and justice. His contributions to the Brotherhood during a pivotal period in history underscore his significance within the Assassin's Creed universe.</p>
            </div>
            <br />
        </div>
        <Footer />     
    </div>
  )
}

export default Achilles
