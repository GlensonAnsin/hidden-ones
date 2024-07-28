import './AssassinGlobal.css'
import henry from '../../../../assets/assassins/henry/henry.png'
import backBtn from '../../../../assets/back-button.png'
import Navbar from '../../../Navbar/Navbar'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'
import { Link } from 'react-router-dom'
import Footer from '../../../Footer/Footer'


const Henry = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="assassins-container">
            <Link to='/assassins'><img className='back-btn' src={backBtn} alt="back" /></Link>
            <div className="assassin-poster-detail-container">
                <div className="assassin-poster-container">
                    <img className="assassin-poster" src={henry} alt="poster" />
                </div>
                <div className="assassin-details-container">
                    <h2>Henry Green</h2>
                    <br />
                    <h4>Born: October 9, 1843</h4>
                    <h4>Died: Unknown</h4>
                    <h4>Affiliation: Assassin Brotherhood</h4>
                    <h4>Rank: Mentor</h4>
                </div>
            </div>
            <br />
            <div className="biography-container">
                <h3>Biography</h3>
                <p><b>Early Life</b></p>
                <p>Henry Green, born Jayadeep Mir, was the son of the renowned Indian Assassin Arbaaz Mir and his wife, the warrior princess Pyara Kaur. Jayadeep grew up in India, where he was trained in the ways of the Assassins by his parents. His early life was filled with rigorous training in combat, stealth, and the Assassin Brotherhood's principles.</p>
                <br />
                <p><b>Move to London</b></p>
                <p>In 1868, Jayadeep was sent to London under the alias Henry Green. His mission was to help the Assassin Brotherhood establish a strong presence in the city and combat the growing influence of the Templars. Adopting a new identity, Henry integrated himself into London society and began working from a small bookshop in Lambeth, which served as a front for his Assassin activities.</p>
                <br />
                <p><b>Key Missions and Achievements</b></p>
                <ol>
                    <li><b>Alliances with the Frye Twins: </b>One of Henry's most significant achievements was forming a partnership with the Frye twins, Jacob and Evie Frye. The twins arrived in London with the goal of liberating the city from Templar control. Henry provided them with valuable information, resources, and support, helping them in their fight against the Templars.</li>
                    <li><b>Combating the Templars: </b>Henry played a crucial role in uncovering and thwarting various Templar schemes in London. His intelligence and strategic mind were instrumental in dismantling Templar operations and weakening their grip on the city.</li>
                    <li><b>Assisting the Poor and Oppressed: </b>Henry was deeply committed to helping the poor and oppressed in London. He used his resources and influence to provide aid to those in need, aligning with the Brotherhood's mission to protect the innocent and fight against injustice.</li>
                    <li><b>Personal Growth and Leadership: </b>Throughout his time in London, Henry evolved from a young Assassin trying to find his place to a respected leader and mentor. His experiences working with the Frye twins and combating the Templars helped him grow in confidence and skill.</li>
                </ol>
                <br />
                <p><b>Evolution as an Assassin</b></p>
                <p>Henry Green's evolution as an Assassin was marked by his transition from a hidden operative to a prominent leader within the London Brotherhood. His strategic thinking, combat prowess, and ability to forge strong alliances were key to his success. Henry's growth was also influenced by his relationship with Evie Frye, which developed into a deep mutual respect and romantic connection.</p>
                <br />
                <p><b>Later Years and Legacy</b></p>
                <p>The later years of Henry Green's life remain largely undocumented. However, his impact on the Assassin Brotherhood in London was significant. His mentorship of the Frye twins and his efforts to combat the Templars left a lasting legacy in the city. Henry's story is a testament to the importance of unity, intelligence, and dedication in the fight against tyranny.</p>
                <br />
                <p>Henry Green's legacy continues to inspire Assassins in their ongoing struggle for freedom and justice. His contributions to the Brotherhood and his role in liberating London are remembered as pivotal moments in the Assassin's Creed universe.</p>
            </div>
            <br />
        </div>
        <Footer />      
    </div>
  )
}

export default Henry
