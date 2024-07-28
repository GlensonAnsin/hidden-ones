import './AssassinGlobal.css'
import basim1 from '../../../../assets/assassins/basim/basim-1.png'
import backBtn from '../../../../assets/back-button.png'
import Navbar from '../../../Navbar/Navbar'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'
import { Link } from 'react-router-dom'
import Footer from '../../../Footer/Footer'


const Basim = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="assassins-container">
            <Link to='/assassins'><img className='back-btn' src={backBtn} alt="back" /></Link>
            <div className="assassin-poster-detail-container">
                <div className="assassin-poster-container">
                    <img className="assassin-poster" src={basim1} alt="poster" />
                </div>
                <div className="assassin-details-container">
                    <h2>Basim Ibn Ishaq</h2>
                    <br />
                    <h4>Born: 835 CE</h4>
                    <h4>Died: Immortal (Due to Isu reincarnation)</h4>
                    <h4>Affiliation: Hidden Ones, Order of the Ancients (formerly), reincarnation of the Isu Loki</h4>
                    <h4>Rank: Mentor</h4>
                </div>
            </div>
            <br />
            <div className="biography-container">
                <h3>Biography</h3>
                <p><b>Early Life</b></p>
                <p>Basim Ibn Ishaq was born in the Abbasid Caliphate in 835 CE. From a young age, he showed an exceptional intellect and a keen interest in the mysteries of the world. This curiosity eventually led him to join the Hidden Ones, an organization dedicated to preserving freedom and fighting against oppression.</p>
                <br />
                <p><b>Role in the Hidden Ones</b></p>
                <p>Basim rose quickly through the ranks of the Hidden Ones due to his strategic mind and formidable skills in stealth and combat. He became a Master Assassin and later a Mentor, playing a crucial role in the organization's operations throughout the Abbasid Caliphate and beyond. Basim's knowledge of ancient history and artifacts, especially those related to the Isu, was unparalleled.</p>
                <br />
                <p><b>Key Missions and Achievements</b></p>
                <ol>
                    <li><b>Mentorship and Leadership: </b>Basim trained many Assassins and expanded the influence of the Hidden Ones. His leadership was instrumental in maintaining the Hidden Ones' presence and combating the Order of the Ancients.</li>
                    <li><b>Search for Isu Artifacts: </b>Basim's obsession with Isu artifacts and knowledge grew over time. He believed these ancient relics held the key to immense power and understanding, which led him on numerous quests across the known world.</li>
                    <li><b>Encounter with Eivor: </b>In 873 CE, Basim traveled to England, where he met Eivor and the Raven Clan. Alongside his apprentice Hytham, he sought to dismantle the Order of the Ancients in England. Basim provided Eivor with valuable guidance and support in their mutual quest against the Order.</li>
                </ol>
                <br />
                <p><b>Revelation and Betrayal</b></p>
                <p>As Eivor's journey progressed, Basim's true intentions and nature were gradually revealed. It was uncovered that Basim was the reincarnation of Loki, the trickster god of the Isu, driven by a personal vendetta against the reincarnations of Odin (Eivor) and Tyr (Sigurd) due to the ancient betrayal and punishment of his son, Fenrir.</p>
                <br />
                <p><b>Climax in Norway</b></p>
                <p>The climax of Basim's story occurred in Norway, where he attempted to confront Eivor and Sigurd, believing them to be the reincarnations of his ancient foes. During a climactic battle, Basim's true nature as Loki emerged fully, revealing his motivations rooted in the ancient Isu past. In the end, Basim was trapped in the Yggdrasil machine, a device left by the Isu, effectively putting him in a suspended state.</p>
                <br />
                <p>Throughout his leadership, Altaïr created numerous innovations, including improvements to the Hidden Blade and the development of new techniques. His influence extended across the globe, strengthening the Brotherhood's presence.</p>
                <br />
                <p><b>Immortality and Modern Era</b></p>
                <p>Basim's story didn't end in the past. In the modern era, Basim managed to escape the Yggdrasil machine through the actions of Layla Hassan, a modern-day Assassin. Upon his release, Basim retained his memories and abilities, effectively becoming immortal. He took possession of the Staff of Hermes Trismegistus, which further enhanced his longevity and powers.</p>
                <br />
                <p>In the modern day, Basim became a complex and enigmatic figure, seeking to influence events and manipulate both the Assassins and the Templars for his own mysterious ends. His knowledge of the Isu and their artifacts made him a valuable yet dangerous player in the ongoing conflict.</p>
                <br />
                <p><b>Evolution as a Character</b></p>
                <p>Basim's evolution is marked by his transition from a dedicated and respected leader of the Hidden Ones to a figure driven by ancient vendettas and personal ambitions. His journey reflects the intertwining of human and Isu legacies, showcasing how ancient grudges can influence the present.</p>
                <br />
                <p><b>Legacy</b></p>
                <p>Basim's legacy is a testament to the intricate and often dark history of the Isu and their reincarnations. His actions and motivations are a reminder of the deep connections between the past and present within the Assassin's Creed universe. Basim's story is one of loyalty, betrayal, and the relentless pursuit of power and vengeance, leaving a lasting impact on the world of the Assassins and Templars.</p>
                <br />
                <p>Basim Ibn Ishaq remains one of the most complex characters in the Assassin's Creed series, embodying the intricate dance of history, myth, and personal ambition. His legacy continues to unfold as the modern-day narrative progresses, making him a pivotal figure in the ongoing saga.</p>
            </div>
            <br />
        </div>
        <Footer />    
    </div>
  )
}

export default Basim
