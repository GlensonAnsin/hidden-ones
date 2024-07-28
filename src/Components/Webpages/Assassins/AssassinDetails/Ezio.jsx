import './AssassinGlobal.css'
import ezio2 from '../../../../assets/assassins/ezio/ezio-2.png'
import backBtn from '../../../../assets/back-button.png'
import Navbar from '../../../Navbar/Navbar'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'
import { Link } from 'react-router-dom'
import Footer from '../../../Footer/Footer'

const Ezio = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="assassins-container">
            <Link to='/assassins'><img className='back-btn' src={backBtn} alt="back" /></Link>
            <div className="assassin-poster-detail-container">
                <div className="assassin-poster-container">
                    <img className="assassin-poster" src={ezio2} alt="poster" />
                </div>
                <div className="assassin-details-container">
                    <h2>Ezio Auditore</h2>
                    <br />
                    <h4>Born: June 24, 1459</h4>
                    <h4>Died: November 30, 1524 (aged 65)</h4>
                    <h4>Affiliation: Assassin Brotherhood</h4>
                    <h4>Rank: Mentor</h4>
                </div>
            </div>
            <br />
            <div className="biography-container">
                <h3>Biography</h3>
                <p><b>Early Life</b></p>
                <p>Ezio Auditore was born in Florence, Italy, to Giovanni and Maria Auditore. The Auditore family was wealthy and influential, with Giovanni secretly serving as an Assassin. Ezio had a carefree childhood alongside his siblings, Federico, Claudia, and Petruccio.</p>
                <br />
                <p><b>Tragedy and Transformation</b></p>
                <p>In 1476, when Ezio was 17, his father and two brothers were betrayed and executed by corrupt officials under the influence of the Templars. This tragic event marked a turning point in Ezio's life. Fleeing Florence with his mother and sister, Ezio vowed to avenge his family's death and uncover the conspiracy behind their execution.</p>
                <br />
                <p><b>Rise as an Assassin</b></p>
                <p>Guided by his Uncle Mario, Ezio began his training as an Assassin. Over the next decade, he tracked down and eliminated those responsible for his family's downfall. His quest for vengeance led him to confront powerful Templar figures, including Rodrigo Borgia, who sought the Apple of Eden.</p>
                <br />
                <p>In 1488, Ezio discovered the hidden Assassin headquarters in Monteriggioni and officially joined the Brotherhood. He rapidly rose through the ranks, becoming a skilled and respected Assassin.</p>
                <br />
                <p><b>Becoming Mentor</b></p>
                <p>Ezio's journey took him across Italy, where he united various Assassin factions and revitalized the Brotherhood. In 1499, he infiltrated the Vatican and confronted Rodrigo Borgia, now Pope Alexander VI. Though Ezio spared Rodrigo's life, he retrieved the Apple of Eden and uncovered more about the mysterious First Civilization.</p>
                <br />
                <p>Ezio continued to battle the Templars, seeking out their plots and dismantling their power structures. His efforts culminated in 1503 when he defeated Cesare Borgia, ending the Borgia family's reign and securing the Brotherhood's dominance in Italy.</p>
                <br />
                <p><b>Legacy and Discovery</b></p>
                <p>In 1503, Ezio became the Mentor of the Italian Assassins, dedicating himself to the Brotherhood's resurgence. He authored numerous codices, detailing his knowledge and experiences. In 1510, Ezio traveled to Masyaf, the former headquarters of the Assassin Order, where he discovered the library of Altaïr Ibn-La'Ahad. Inside, he found Altaïr's writings and a message meant for him.</p>
                <br />
                <p>Ezio's journey then led him to Constantinople, where he assisted the local Brotherhood and uncovered keys to unlock Altaïr's library. He also thwarted the Templar's attempts to control the city. In 1512, Ezio finally accessed the library, finding Altaïr's final resting place and gaining profound insights into the Assassins' purpose.</p>
                <br />
                <p><b>Retirement and Death</b></p>
                <p>After years of relentless fighting, Ezio retired to a peaceful life in Monteriggioni with his wife, Sofia Sartor, and their two children, Flavia and Marcello. He spent his final years away from the Brotherhood, focusing on his family and personal happiness.</p>
                <br />
                <p>Ezio died of a heart attack in 1524 while visiting Florence, leaving behind a legacy of strength, wisdom, and unity. His contributions to the Assassin Brotherhood and his dedication to its ideals cemented his place as one of the most revered Assassins in history.</p>
            </div>
            <br />
        </div>
        <Footer />
    </div>
  )
}

export default Ezio
