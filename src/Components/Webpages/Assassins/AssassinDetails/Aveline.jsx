import './AssassinGlobal.css'
import aveline from '../../../../assets/assassins/aveline/aveline.png'
import backBtn from '../../../../assets/back-button.png'
import Navbar from '../../../Navbar/Navbar'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'
import { Link } from 'react-router-dom'
import Footer from '../../../Footer/Footer'

const Aveline = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="assassins-container">
            <Link to='/assassins'><img className='back-btn' src={backBtn} alt="back" /></Link>
            <div className="assassin-poster-detail-container">
                <div className="assassin-poster-container">
                    <img className="assassin-poster" src={aveline} alt="poster" />
                </div>
                <div className="assassin-details-container">
                    <h2>Aveline de Grandpré</h2>
                    <br />
                    <h4>Born: June 20, 1747</h4>
                    <h4>Died: Unknown</h4>
                    <h4>Affiliation: Assassin Brotherhood</h4>
                    <h4>Rank: Assassin</h4>
                </div>
            </div>
            <br />
            <div className="biography-container">
                <h3>Biography</h3>
                <p><b>Early Life</b></p>
                <p>Aveline de Grandpré was born in New Orleans to a wealthy French merchant, Philippe de Grandpré, and an African slave named Jeanne. Her early childhood was relatively peaceful until her mother disappeared under mysterious circumstances when Aveline was around 8 years old. Philippe later married Madeleine de L'Isle, who became Aveline's stepmother.</p>
                <br />
                <p><b>Introduction to the Assassins</b></p>
                <p>Aveline's introduction to the Assassin Brotherhood came through an encounter with an Assassin named Agaté. Recognizing her potential and driven by a sense of justice, Aveline trained under Agaté's guidance, honing her skills in combat, stealth, and parkour. Her dual heritage and social standing allowed her to navigate different spheres of society, which she used to her advantage in her missions.</p>
                <br />
                <p><b>Rise as an Assassin</b></p>
                <p>Aveline's primary focus as an Assassin was to free slaves and dismantle the oppressive systems in place in New Orleans and the surrounding areas. She used her unique position in society to gather information and strike against the Templars, who sought to exploit and control the region.</p>
                <br />
                <p>Her missions often involved infiltrating various social settings, from the opulent halls of the elite to the gritty underbelly of the city. Aveline's ability to blend into different environments, whether as a lady, a slave, or an Assassin, made her a formidable operative.</p>
                <br />
                <p><b>Confrontation with the Templars</b></p>
                <p>Throughout her career, Aveline faced numerous Templar adversaries, including those within her own circle. One of her significant confrontations was with her stepmother, Madeleine de L'Isle, who was revealed to be a high-ranking Templar. This discovery added a personal dimension to her struggle, as she had to reconcile her family ties with her commitment to the Assassin Brotherhood.</p>
                <br />
                <p>Aveline's journey took her to various locations, including the bayous of Louisiana, the city of New Orleans, and even to Mexico, as she pursued her enemies and sought to uncover the larger Templar plot.</p>
                <br />
                <p><b>Legacy and Significance</b></p>
                <p>Aveline de Grandpré's actions significantly impacted the fight against the Templars in the American colonies. Her efforts helped to liberate many enslaved people and disrupt the Templar's plans. Despite operating in a male-dominated world, Aveline's intelligence, resourcefulness, and determination ensured her success and left a lasting legacy within the Brotherhood.</p>
                <br />
                <p>Her story is particularly notable for its focus on themes of freedom and equality, reflecting the broader struggles of the time. Aveline's unique background and experiences provide a rich narrative that explores issues of race, class, and gender within the context of the Assassin-Templar conflict.</p>
            </div>
            <br />
        </div>
        <Footer />
    </div>
  )
}

export default Aveline
