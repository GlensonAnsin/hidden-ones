import './AssassinGlobal.css'
import evie from '../../../../assets/assassins/evie/evie.png'
import backBtn from '../../../../assets/back-button.png'
import Navbar from '../../../Navbar/Navbar'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'
import { Link } from 'react-router-dom'
import Footer from '../../../Footer/Footer'

const Evie = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="assassins-container">
            <Link to='/assassins'><img className='back-btn' src={backBtn} alt="back" /></Link>
            <div className="assassin-poster-detail-container">
                <div className="assassin-poster-container">
                    <img className="assassin-poster" src={evie} alt="poster" />
                </div>
                <div className="assassin-details-container">
                    <h2>Evie Frye</h2>
                    <br />
                    <h4>Born: November 9, 1847</h4>
                    <h4>Died: Unknown</h4>
                    <h4>Affiliation: Assassin Brotherhood</h4>
                    <h4>Rank: Master Assassin</h4>
                </div>
            </div>
            <br />
            <div className="biography-container">
                <h3>Biography</h3>
                <p><b>Early Life</b></p>
                <p>Evie Frye was born on November 9, 1847, in Crawley, England, alongside her twin brother, Jacob Frye. Raised by their grandmother after the death of their mother, Evie and Jacob were taught the ways of the Assassin Brotherhood by their father, Ethan Frye. From a young age, Evie demonstrated a keen intellect, a strategic mind, and a natural aptitude for stealth, setting her apart from her more impulsive brother.</p>
                <br />
                <p><b>Moving to London</b></p>
                <p>In 1868, at the age of 21, Evie and Jacob decided to move to London to combat the overwhelming Templar control in the city. The Industrial Revolution had turned London into a hub of corruption, poverty, and exploitation, with the Templars, led by Crawford Starrick, holding significant power. Evie and Jacob aimed to liberate the city and establish a strong Assassin presence.</p>
                <br />
                <p><b>Key Missions and Achievements</b></p>
                <p>Evie's journey in London was marked by several key missions and achievements:</p>
                <br />
                <ol>
                    <li><b>Search for the Shroud of Eden: </b>One of Evie's primary goals was to locate the Shroud of Eden, a powerful Piece of Eden that the Templars sought to control. She believed that securing the Shroud would prevent the Templars from using its power for their own ends.</li>
                    <li><b>Infiltration and Intelligence Gathering: </b>Evie excelled in stealth and espionage, often infiltrating Templar strongholds and gathering crucial intelligence. Her strategic approach allowed the Assassins to strike effectively against the Templars.</li>
                    <li><b>Liberation of London: </b>Working alongside Jacob, Evie helped to liberate various districts of London from Templar control. Her efforts were instrumental in dismantling the Templar's grip on the city's institutions and industries.</li>
                    <li><b>Confrontation with Lucy Thorne: </b>Evie had a significant confrontation with Lucy Thorne, a high-ranking Templar who was also searching for the Shroud of Eden. Evie ultimately defeated Thorne and secured vital information about the Shroud's location.</li>
                </ol>
                <br />
                <p><b>Evolution as an Assassin</b></p>
                <p>Evie's evolution as an Assassin was characterized by her growing understanding of leadership and teamwork. Initially focused on her individual missions, she learned to collaborate more effectively with Jacob, balancing his impulsive actions with her own calculated strategies. This collaboration allowed them to achieve their shared goal of liberating London more effectively.</p>
                <br />
                <p><b>Becoming a Master Assassin</b></p>
                <p>By the end of their campaign in London, both Evie and Jacob earned the rank of Master Assassin. Evie's dedication to the Assassin cause and her success in securing the Shroud of Eden solidified her status within the Brotherhood. She played a crucial role in establishing a strong and influential Assassin presence in London.</p>
                <br />
                <p><b>Later Years and Legacy</b></p>
                <p>After their victory in London, Evie and Jacob continued their work with the Brotherhood. Evie traveled to India with fellow Assassin Henry Green (Jayadeep Mir), where they continued to combat Templar influence. Her intelligence, strategic mind, and commitment to the Assassin creed ensured her continued success and influence within the Brotherhood.</p>
                <br />
                <p>Evie's legacy is marked by her significant contributions to the liberation of London and her role in securing the Shroud of Eden. Her story is one of intelligence, dedication, and the balance between strategy and action. Evie's journey reflects the themes of family, loyalty, and the fight for justice in the face of overwhelming odds. Her legacy as a Master Assassin endures as a testament to her skill, determination, and unwavering commitment to the Assassin Brotherhood.</p>
            </div>
            <br />
        </div>
        <Footer />      
    </div>
  )
}

export default Evie
