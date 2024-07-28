import './AssassinGlobal.css'
import arno from '../../../../assets/assassins/arno/arno.png'
import backBtn from '../../../../assets/back-button.png'
import Navbar from '../../../Navbar/Navbar'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'
import { Link } from 'react-router-dom'
import Footer from '../../../Footer/Footer'

const Arno = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="assassins-container">
            <Link to='/assassins'><img className='back-btn' src={backBtn} alt="back" /></Link>
            <div className="assassin-poster-detail-container">
                <div className="assassin-poster-container">
                    <img className="assassin-poster" src={arno} alt="poster" />
                </div>
                <div className="assassin-details-container">
                    <h2>Arno Victor Dorian</h2>
                    <br />
                    <h4>Born: August 26, 1768</h4>
                    <h4>Died: Unknown</h4>
                    <h4>Affiliation: Assassin Brotherhood</h4>
                    <h4>Rank: Master Assassin</h4>
                </div>
            </div>
            <br />
            <div className="biography-container">
                <h3>Biography</h3>
                <p><b>Early Life</b></p>
                <p>Arno Dorian was born in Versailles, France, to Charles Dorian, an Assassin, and his wife, Marie. In 1776, when Arno was eight years old, his father was assassinated by Shay Patrick Cormac, a Templar, for his involvement with the Brotherhood. Following his father's death, Arno was taken in by François de la Serre, the Grand Master of the French Templars, who raised him as his own son.</p>
                <br />
                <p><b>Tragedy and Transformation</b></p>
                <p>Arno grew up alongside Élise de la Serre, François' daughter, with whom he developed a close and eventually romantic relationship. However, in 1789, when Arno was 21, François de la Serre was murdered, and Arno was falsely accused and imprisoned in the Bastille. There, he met Pierre Bellec, a former Assassin who introduced him to the Brotherhood's ideals.</p>
                <br />
                <p>After escaping the Bastille during the storming on July 14, 1789, Arno sought to uncover the truth behind François' murder. This quest led him to join the Assassin Brotherhood, hoping to avenge François and restore justice.</p>
                <br />
                <p><b>Rise as an Assassin</b></p>
                <p>Arno's determination and natural talent for the Assassin's ways allowed him to quickly rise through the ranks. Under the mentorship of Bellec and other senior Assassins, he honed his skills in combat, stealth, and parkour. His personal mission often intersected with the broader goals of the Brotherhood, which was deeply involved in the political upheaval of the French Revolution.</p>
                <br />
                <p>Arno's journey was marked by significant events such as the storming of the Bastille, the Reign of Terror, and the rise of Napoleon Bonaparte. Throughout these tumultuous times, Arno sought to uncover Templar plots and dismantle their influence over France.</p>
                <br />
                <p><b>Relationship with Élise</b></p>
                <p>Arno's relationship with Élise was complex and deeply intertwined with his own path. Élise, a Templar by birth, refused to renounce her allegiance, creating a constant tension between her and Arno. Despite their opposing loyalties, their love persisted, driving much of Arno's personal conflict and growth.</p>
                <br />
                <p>The culmination of this tension occurred during a mission to retrieve a powerful artifact known as the Sword of Eden. Élise and Arno faced off against François-Thomas Germain, the Grand Master of the Parisian Rite of Templars. Élise's insistence on confronting Germain alone led to her tragic death, leaving Arno devastated and deeply affected by the loss.</p>
                <br />
                <p><b>Becoming a Master Assassin</b></p>
                <p>Following Élise's death, Arno dedicated himself fully to the Assassin Brotherhood. His experiences and the lessons he learned from his failures and losses matured him, making him a more focused and effective Assassin. He eventually earned the rank of Master Assassin, leading the Brotherhood's efforts in France and continuing the fight against the Templars.</p>
                <br />
                <p><b>Legacy and Later Years</b></p>
                <p>Arno's story is one of redemption and transformation. He began as a reckless and vengeful young man, driven by personal loss and a desire for justice. Through his journey, he evolved into a wise and dedicated Assassin, committed to the Brotherhood's cause and the ideals of freedom and justice.</p>
                <br />
                <p>Arno's legacy is marked by his significant contributions to the Assassin Brotherhood during one of the most turbulent periods in French history. His actions helped shape the course of the French Revolution and left an enduring impact on the Brotherhood's presence in Europe.</p>
                <br />
                <p>While the details of Arno's later years remain largely unknown, his story serves as a powerful narrative of personal growth, the complexities of loyalty, and the enduring fight for justice in the face of overwhelming odds.</p>
            </div>
            <br />
        </div>
        <Footer />    
    </div>
  )
}

export default Arno
