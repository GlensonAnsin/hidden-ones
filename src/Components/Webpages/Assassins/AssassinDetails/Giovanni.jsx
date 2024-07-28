import './AssassinGlobal.css'
import giovanni from '../../../../assets/assassins/giovanni/giovanni.png'
import backBtn from '../../../../assets/back-button.png'
import Navbar from '../../../Navbar/Navbar'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'
import { Link } from 'react-router-dom'
import Footer from '../../../Footer/Footer'

const Giovanni = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="assassins-container">
            <Link to='/assassins'><img className='back-btn' src={backBtn} alt="back" /></Link>
            <div className="assassin-poster-detail-container">
                <div className="assassin-poster-container">
                    <img className="assassin-poster" src={giovanni} alt="poster" />
                </div>
                <div className="assassin-details-container">
                    <h2>Giovanni Auditore</h2>
                    <br />
                    <h4>Born: May 3, 1436</h4>
                    <h4>Died: December 29, 1476 (aged 40)</h4>
                    <h4>Affiliation: Assassin Brotherhood</h4>
                    <h4>Rank: Master Assassin</h4>
                </div>
            </div>
            <br />
            <div className="biography-container">
                <h3>Biography</h3>
                <p><b>Early Life</b></p>
                <p>Giovanni Auditore da Firenze was born on May 3, 1436, in Florence, Italy. He came from a noble family and was well-educated, possessing a keen intellect and a strong sense of justice. Giovanni's early life was marked by his training in the ways of the Assassins, a path that would shape his future and the future of his family.</p>
                <br />
                <p><b>Joining the Assassin Brotherhood</b></p>
                <p>Giovanni joined the Assassin Brotherhood at a young age, quickly rising through the ranks due to his dedication, combat skills, and strategic mind. He became an important figure within the Brotherhood, working to protect the people of Florence and combat the influence of the Templars.</p>
                <br />
                <p><b>Key Missions and Achievements</b></p>
                <ol>
                    <li><b>Espionage and Investigation: </b>Giovanni was deeply involved in gathering intelligence on Templar activities. His efforts in uncovering their plots and conspiracies were crucial in maintaining the balance of power in Florence and beyond.</li>
                    <li><b>Family Life: </b>Despite his dangerous profession, Giovanni managed to maintain a relatively stable family life. He married Maria Auditore and had four children: Federico, Ezio, Claudia, and Petruccio. He sought to protect his family from the dangers of his work, though this ultimately proved to be a challenging task.</li>
                    <li><b>Conflict with the Pazzi Conspiracy: </b>Giovanni played a significant role in investigating the Pazzi Conspiracy, a plot by the Templar-affiliated Pazzi family to overthrow the Medici family and take control of Florence. His efforts to expose and thwart the conspiracy highlighted his dedication to justice and the Assassin cause.</li>
                </ol>
                <br />
                <p><b>Evolution as an Assassin</b></p>
                <p>Giovanni's evolution as an Assassin was marked by his unwavering commitment to justice and the Brotherhood's ideals. He balanced his roles as a father, a nobleman, and an Assassin, striving to protect both his family and the people of Florence. His strategic mind and ability to gather crucial intelligence made him a formidable figure within the Brotherhood.</p>
                <br />
                <p><b>Arrest and Execution</b></p>
                <p>Giovanni's work against the Templars eventually led to his downfall. On December 29, 1476, he was betrayed, falsely accused of treason, and arrested along with his sons Federico and Petruccio. Despite his innocence, Giovanni was unable to escape his fate. He and his sons were publicly executed, leaving a lasting impact on his surviving family members, particularly his son Ezio.</p>
                <br />
                <p><b>Legacy</b></p>
                <p>Giovanni's legacy is most prominently carried on by his son, Ezio Auditore, who witnessed his father's and brothers' executions and was driven to take up the mantle of an Assassin to seek revenge and justice. Giovanni's teachings and principles profoundly influenced Ezio, shaping him into one of the most legendary Assassins in history.</p>
                <br />
                <p>Giovanni's story is one of dedication, sacrifice, and the enduring fight against oppression. His actions and the consequences of his work against the Templars set the stage for the rise of Ezio, who continued his father's mission and became a pivotal figure in the Assassin Brotherhood. Giovanni Auditore's life and death exemplify the values of the Assassins and their eternal struggle for freedom and justice.</p>
            </div>
            <br />
        </div>
        <Footer />     
    </div>
  )
}

export default Giovanni
