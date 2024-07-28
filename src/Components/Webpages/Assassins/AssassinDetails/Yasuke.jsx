import './AssassinGlobal.css'
import yasuke from '../../../../assets/assassins/yasuke/yasuke.png'
import backBtn from '../../../../assets/back-button.png'
import Navbar from '../../../Navbar/Navbar'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'
import { Link } from 'react-router-dom'
import Footer from '../../../Footer/Footer'

const Yasuke = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="assassins-container">
            <Link to='/assassins'><img className='back-btn' src={backBtn} alt="back" /></Link>
            <div className="assassin-poster-detail-container">
                <div className="assassin-poster-container">
                    <img className="assassin-poster" src={yasuke} alt="poster" />
                </div>
                <div className="assassin-details-container">
                    <h2>Yasuke</h2>
                    <br />
                    <h4>Born: Unknown (circa mid-16th century)</h4>
                    <h4>Died: Unknown</h4>
                    <h4>Affiliation: Hidden Ones (in Assassin's Creed lore)</h4>
                    <h4>Rank: Assassin</h4>
                </div>
            </div>
            <br />
            <div className="biography-container">
                <h3>Biography</h3>
                <p><b>Early Life</b></p>
                <p>Yasuke was originally from Africa, likely from the regions of Mozambique or Ethiopia. He was brought to Japan by Jesuit missionaries, arriving in 1579. His impressive stature and demeanor quickly caught the attention of the Japanese people and the local daimyos.</p>
                <br />
                <p><b>Service Under Oda Nobunaga</b></p>
                <p>Yasuke's life changed dramatically when he entered the service of Oda Nobunaga, a powerful and ambitious daimyo seeking to unify Japan during the Sengoku period. Nobunaga was fascinated by Yasuke, who stood out due to his dark skin, height, and strength. He became one of Nobunaga's trusted samurai, a rare honor for a foreigner.</p>
                <br />
                <p><b>Involvement with the Hidden Ones</b></p>
                <p>In the Assassin's Creed lore, Yasuke is portrayed as having connections with the Hidden Ones (the precursors to the Assassin Brotherhood). This affiliation likely began during his time with Nobunaga, who valued Yasuke's unique skills and insights.</p>
                <br />
                <p><b>Key Missions and Achievements</b></p>
                <ol>
                    <li><b>Protection of Nobunaga: </b>Yasuke played a crucial role in protecting Oda Nobunaga during various battles and political intrigues. His loyalty and combat prowess were indispensable to Nobunaga's efforts to unify Japan.</li>
                    <li><b>Battle of Honno-ji: </b>Yasuke was present during the fateful event at Honno-ji in 1582, where Nobunaga was betrayed by his general, Akechi Mitsuhide. Nobunaga was forced to commit seppuku, and Yasuke fought valiantly to protect him. Although Nobunaga perished, Yasuke's actions during the siege became legendary.</li>
                    <li><b>Escape and Survival: </b>Following Nobunaga's death, Yasuke was captured by Akechi's forces. However, due to his status as a foreigner, he was spared and eventually released. His subsequent actions are less documented, but in Assassin's Creed lore, it is suggested that he continued to work with the Hidden Ones, aiding their cause in Japan and beyond.</li>
                </ol>
                <br />
                <p><b>Evolution as an Assassin</b></p>
                <p>Yasuke's evolution as an Assassin is marked by his transition from a samurai in Nobunaga's service to a key figure within the Hidden Ones. His experiences in Japan, combined with his unique background and skills, made him a valuable asset to the Hidden Ones' mission of fighting tyranny and preserving freedom.</p>
                <br />
                <p><b>Legacy</b></p>
                <p>Yasuke's legacy in Assassin's Creed is a blend of historical fact and creative interpretation. Historically, Yasuke is remembered as the first African samurai and a symbol of cultural exchange between Africa and Japan. In the Assassin's Creed universe, his legacy is further enriched by his connection to the Hidden Ones, portraying him as a pivotal figure in the fight against oppression during a tumultuous period in Japanese history.</p>
                <br />
                <p>Yasuke's story is a testament to the blending of different cultures and the universal struggle for justice and freedom. His journey from Africa to Japan, and his rise to prominence in a foreign land, embody the themes of resilience, loyalty, and the relentless pursuit of a higher cause.</p>
            </div>
            <br />
        </div>
        <Footer />     
    </div>
  )
}

export default Yasuke
