import './AssassinGlobal.css'
import hope from '../../../../assets/assassins/hope/hope.png'
import backBtn from '../../../../assets/back-button.png'
import Navbar from '../../../Navbar/Navbar'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'
import { Link } from 'react-router-dom'
import Footer from '../../../Footer/Footer'

const Hope = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="assassins-container">
            <Link to='/assassins'><img className='back-btn' src={backBtn} alt="back" /></Link>
            <div className="assassin-poster-detail-container">
                <div className="assassin-poster-container">
                    <img className="assassin-poster" src={hope} alt="poster" />
                </div>
                <div className="assassin-details-container">
                    <h2>Hope Jensen</h2>
                    <br />
                    <h4>Born: 1732</h4>
                    <h4>Died: October 1759 (aged 27)</h4>
                    <h4>Affiliation: Assassin Brotherhood</h4>
                    <h4>Rank: Assassin</h4>
                </div>
            </div>
            <br />
            <div className="biography-container">
                <h3>Biography</h3>
                <p><b>Early Life</b></p>
                <p>Hope Jensen was born on 1732. Details about her early life are scarce, but she grew up during a tumultuous time in the American colonies, marked by political unrest and the looming threat of war. From a young age, Hope displayed a keen intellect and an aptitude for strategic thinking.</p>
                <br />
                <p><b>Joining the Assassin Brotherhood</b></p>
                <p>Hope joined the Assassin Brotherhood in the mid-18th century, drawn to their ideals of freedom and justice. Under the mentorship of Achilles Davenport, she quickly rose through the ranks due to her intelligence, combat skills, and dedication to the cause.</p>
                <br />
                <p><b>Key Missions and Achievements</b></p>
                <ol>
                    <li><b>Recruitment and Training: </b>One of Hope's significant roles within the Brotherhood was recruiting and training new members. Her ability to inspire and lead made her a crucial figure in expanding the Brotherhood's influence and ensuring its continuity.</li>
                    <li><b>Underground Operations: </b>Hope was known for her work in underground operations. She utilized her network to gather intelligence on Templar activities and disrupt their plans. Her efforts were instrumental in weakening Templar control in the American colonies.</li>
                    <li><b>Strategic Alliances: </b>Hope was adept at forming strategic alliances with various groups, including smugglers and resistance fighters. These alliances provided the Brotherhood with essential resources and support, furthering their mission against the Templars.</li>
                    <li><b>Conflict with Shay Cormac: </b>Hope's life and work were significantly impacted by her interactions with Shay Patrick Cormac, a former Assassin who defected to the Templar Order. Their conflict came to a head when Shay, now a Templar, hunted down members of the Brotherhood, including Hope.</li>
                </ol>
                <br />
                <p><b>Evolution as an Assassin</b></p>
                <p>Hope's evolution as an Assassin was characterized by her growth from a skilled recruit to a key leader within the Brotherhood. Her strategic mind, ability to form alliances, and dedication to training new Assassins made her an invaluable asset. Despite her untimely death, Hope's contributions to the Brotherhood were lasting and profound.</p>
                <br />
                <p><b>Death and Legacy</b></p>
                <p>On October 1759, Hope Jensen met her end at the hands of Shay Cormac. Despite her best efforts to evade him, Shay tracked her down and killed her during a confrontation. Her death was a significant blow to the Brotherhood, marking a dark chapter in their history.</p>
                <br />
                <p>Hope Jensen's legacy is one of resilience, intelligence, and unwavering commitment to the Assassin cause. Her efforts in recruiting and training new Assassins ensured the Brotherhood's continued presence in the American colonies. Her work in gathering intelligence and forming alliances significantly weakened Templar influence.</p>
                <br />
                <p>Hope's story serves as a reminder of the sacrifices made by Assassins in their fight for freedom and justice. Her life and death are remembered as pivotal moments in the struggle against oppression, and her influence continues to be felt within the Assassin Brotherhood.</p>
            </div>
            <br />
        </div>
        <Footer />     
    </div>
  )
}

export default Hope
