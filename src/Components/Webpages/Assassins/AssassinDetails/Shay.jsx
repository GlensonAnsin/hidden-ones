import './AssassinGlobal.css'
import shay1 from '../../../../assets/assassins/shay/shay-1.png'
import backBtn from '../../../../assets/back-button.png'
import Navbar from '../../../Navbar/Navbar'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'
import { Link } from 'react-router-dom'
import Footer from '../../../Footer/Footer'

const Shay = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="assassins-container">
            <Link to='/assassins'><img className='back-btn' src={backBtn} alt="back" /></Link>
            <div className="assassin-poster-detail-container">
                <div className="assassin-poster-container">
                    <img className="assassin-poster" src={shay1} alt="poster" />
                </div>
                <div className="assassin-details-container">
                    <h2>Shay Patrick Cormac</h2>
                    <br />
                    <h4>Born: 1731</h4>
                    <h4>Died: Unknown</h4>
                    <h4>Affiliation: Assassin Brotherhood (former), Templar Order</h4>
                    <h4>Rank: Assassin (former), Templar Grand Master</h4>
                </div>
            </div>
            <br />
            <div className="biography-container">
                <h3>Biography</h3>
                <p><b>Early Life</b></p>
                <p>Shay Patrick Cormac was born in 1731 to Irish immigrants in New York City. He grew up with a rebellious spirit, often getting into trouble. This behavior caught the attention of the Assassin Brotherhood, who saw potential in his skills and tenacity.</p>
                <br />
                <p><b>Joining the Assassin Brotherhood</b></p>
                <p>Shay was recruited into the Assassin Brotherhood in the early 1750s. He trained under notable Assassins such as Achilles Davenport. His skills and adaptability made him a valuable member of the Brotherhood, and he quickly rose through the ranks, becoming a skilled and dedicated Assassin.</p>
                <br />
                <p><b>The Turning Point</b></p>
                <p>In 1756, Shay was tasked with retrieving a Precursor artifact in Lisbon, Portugal. The mission was a success, but it triggered a massive earthquake that resulted in the destruction of the city and the death of thousands. Horrified by the unintended consequences of his actions and the Brotherhood's apparent disregard for the lives lost, Shay began to question the Assassins' methods and motives.</p>
                <br />
                <p>Upon returning to the American colonies, Shay expressed his concerns to Achilles and other members of the Brotherhood, but they dismissed his warnings. This deepened Shay's disillusionment with the Assassins. During a subsequent mission, he was ordered to retrieve another Precursor artifact in North America. Fearing another disaster, Shay attempted to stop the mission but was thwarted by his fellow Assassins. In the ensuing conflict, Shay stole the artifact and fled, only to be severely wounded and left for dead by his former comrades.</p>
                <br />
                <p><b>Joining the Templar Order</b></p>
                <p>Shay was found and nursed back to health by the Templars, who offered him a new perspective on the Assassins' actions and a chance to make a difference. Convinced that the Templars were the true protectors of humanity, Shay joined their ranks, becoming a formidable Templar operative.</p>
                <br />
                <p>As a Templar, Shay dedicated himself to hunting down his former Assassin brothers, believing their reckless pursuit of Precursor artifacts posed a greater threat to humanity than the Templars' quest for order. His intimate knowledge of Assassin tactics made him a highly effective Templar agent, leading to the deaths of many prominent Assassins and the near-collapse of the Colonial Brotherhood.</p>
                <br />
                <p><b>Rise to Grand Master</b></p>
                <p>Shay's success and loyalty to the Templar cause earned him the rank of Templar Grand Master. He played a pivotal role in the Templar's operations in North America, including thwarting the Assassin Brotherhood's plans and securing vital Precursor artifacts.</p>
                <br />
                <p><b>Legacy and Significance</b></p>
                <p>Shay Patrick Cormac's story is one of betrayal, redemption, and the complexities of loyalty. His journey from dedicated Assassin to ruthless Templar highlights the moral ambiguities and differing philosophies within the Assassin-Templar conflict. Shay's actions had a lasting impact on the Brotherhood, contributing to its weakening in the colonies and shaping the course of future events.</p>
                <br />
                <p>Despite his controversial choices, Shay believed he was fighting for the greater good, seeking to prevent the loss of innocent lives caused by the Assassins' reckless pursuits. His story provides a unique perspective on the Assassin's Creed universe, exploring the motivations and consequences of those caught between two ideologically opposed factions.</p>
            </div>
            <br />
        </div>
        <Footer />
    </div>
  )
}

export default Shay
