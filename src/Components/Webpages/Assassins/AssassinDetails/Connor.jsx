import './AssassinGlobal.css'
import connor from '../../../../assets/assassins/connor/connor.png'
import backBtn from '../../../../assets/back-button.png'
import Navbar from '../../../Navbar/Navbar'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'
import { Link } from 'react-router-dom'
import Footer from '../../../Footer/Footer'

const Connor = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="assassins-container">
            <Link to='/assassins'><img className='back-btn' src={backBtn} alt="back" /></Link>
            <div className="assassin-poster-detail-container">
                <div className="assassin-poster-container">
                    <img className="assassin-poster" src={connor} alt="poster" />
                </div>
                <div className="assassin-details-container">
                    <h2>Connor Kenway</h2>
                    <br />
                    <h4>Born: April 4, 1756</h4>
                    <h4>Died: Unknown</h4>
                    <h4>Affiliation: Assassin Brotherhood</h4>
                    <h4>Rank: Master Assassin</h4>
                </div>
            </div>
            <br />
            <div className="biography-container">
                <h3>Biography</h3>
                <p><b>Early Life</b></p>
                <p>Connor Kenway, born Ratonhnhaké:ton, was the son of a Kanien'kehá (Mohawk) woman named Kaniehtí:io and Haytham Kenway, a British Templar Grand Master. Connor grew up in the Mohawk village of Kanatahséton in the American colonies. His early life was marked by a desire to protect his people and their way of life from encroaching settlers and conflicts.</p>
                <br />
                <p><b>Tragedy and Transformation</b></p>
                <p>At the age of 14, Connor's village was attacked and destroyed by colonial settlers led by the Templar Charles Lee. This tragedy spurred Connor to seek justice and revenge, setting him on a path that led him to the Assassin Brotherhood. He was mentored by Achilles Davenport, a retired Assassin, who trained him in the ways of the Assassins and gave him the name Connor Kenway.</p>
                <br />
                <p><b>Rise as an Assassin</b></p>
                <p>Connor's initiation into the Assassin Brotherhood marked the beginning of his fight against the Templars. Throughout the American Revolutionary War, Connor played a pivotal role, aligning himself with key figures like George Washington and Benjamin Franklin. His mission was to dismantle the Templar influence in the colonies and secure freedom for his people and the burgeoning nation.</p>
                <br />
                <p>Connor's journey involved numerous significant events, including the Boston Tea Party, the Battle of Bunker Hill, and the signing of the Declaration of Independence. He relentlessly pursued Templar leaders, including his father, Haytham Kenway, and Charles Lee, culminating in their eventual defeat.</p>
                <br />
                <p><b>Master Assassin</b></p>
                <p>Connor's dedication and effectiveness earned him the rank of Master Assassin. He revitalized the Colonial Brotherhood, recruiting and training new Assassins to continue the fight against the Templars. His efforts extended beyond direct combat, as he also focused on aiding civilians, promoting justice, and supporting the Revolutionary cause.</p>
                <br />
                <p><b>Legacy and Later Years</b></p>
                <p>Despite his achievements, Connor faced challenges in maintaining the Assassin Brotherhood's influence post-Revolution. The new American government often conflicted with his ideals, and the Brotherhood's presence waned. However, Connor's impact endured through his teachings and the legacy he left behind.</p>
                <br />
                <p>Connor's later years remain somewhat ambiguous. Some accounts suggest he continued his work as an Assassin, while others imply he sought a quieter life, blending his Assassin duties with a commitment to his people and family. His story reflects the complexities of balancing personal vengeance, broader ideals, and the evolving nature of the world around him.</p>
                <br />
                <p><b>Significance</b></p>
                <p>Connor Kenway's journey from a young boy seeking justice to a Master Assassin fighting for freedom encapsulates the spirit of the American Revolution. His struggle against the Templars and his contributions to the Assassin Brotherhood cement his place as a significant figure in the Assassin's Creed saga.</p>
            </div>
            <br />
        </div>
        <Footer />
    </div>
  )
}

export default Connor
