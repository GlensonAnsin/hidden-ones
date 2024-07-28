import './AssassinGlobal.css'
import edward from '../../../../assets/assassins/edward/edward.png'
import backBtn from '../../../../assets/back-button.png'
import Navbar from '../../../Navbar/Navbar'
import ScrollToTop from '../../../ScrollToTop/ScrollToTop'
import { Link } from 'react-router-dom'
import Footer from '../../../Footer/Footer'

const Edward = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="assassins-container">
            <Link to='/assassins'><img className='back-btn' src={backBtn} alt="back" /></Link>
            <div className="assassin-poster-detail-container">
                <div className="assassin-poster-container">
                    <img className="assassin-poster" src={edward} alt="poster" />
                </div>
                <div className="assassin-details-container">
                    <h2>Edward Kenway</h2>
                    <br />
                    <h4>Born: March 10, 1693</h4>
                    <h4>Died: December 3, 1735 (aged 42)</h4>
                    <h4>Affiliation: Assassin Brotherhood, formerly a pirate</h4>
                    <h4>Rank: Master Assassin</h4>
                </div>
            </div>
            <br />
            <div className="biography-container">
                <h3>Biography</h3>
                <p><b>Early Life</b></p>
                <p>Edward James Kenway was born in Swansea, Wales, to a poor farming family. His parents, Bernard and Linette Kenway, struggled financially, and Edward grew up yearning for adventure and a better life. This desire for more led him to leave his family and seek fortune and fame on the high seas.</p>
                <br />
                <p><b>Pirate Life</b></p>
                <p>Edward's life as a pirate began in earnest in the early 18th century during the Golden Age of Piracy. He quickly rose through the ranks, becoming a skilled and feared pirate captain. He commanded the ship Jackdaw and forged alliances with notorious pirates such as Blackbeard (Edward Thatch), Charles Vane, and Anne Bonny.</p>
                <br />
                <p><b>Encounter with the Assassins</b></p>
                <p>Edward's journey intersected with the Assassins when he killed Duncan Walpole, a rogue Assassin who had betrayed the Brotherhood and joined the Templars. Taking Walpole's place, Edward unwittingly found himself embroiled in the centuries-old conflict between Assassins and Templars. His initial motivation was driven by greed and a desire for personal gain, as he sought the Observatory, a First Civilization site capable of immense power.</p>
                <br />
                <p><b>Evolution into an Assassin</b></p>
                <p>Over time, Edward's perspective shifted as he became more involved with the Assassins. His experiences and the relationships he formed, particularly with Ah Tabai, the Mentor of the Caribbean Assassins, and Mary Read, a fellow pirate and Assassin, influenced his transformation. He began to understand the Assassins' ideals and the importance of their fight against the Templars.</p>
                <br />
                <p>Edward's evolution culminated in his decision to fully join the Assassin Brotherhood. He adopted their creed and dedicated himself to their cause, moving away from his former life of piracy. His skills as a pirate captain and his knowledge of the seas proved invaluable to the Brotherhood.</p>
                <br />
                <p><b>Later Years and Legacy</b></p>
                <p>Edward eventually settled in London, where he used his wealth to establish a new life for himself and his family. He married Tessa Stephenson-Oakley, and they had two children, Haytham and Jennifer. Edward's involvement with the Assassins continued, and he played a significant role in strengthening the Brotherhood's presence in England.</p>
                <br />
                <p>Edward's legacy was complicated. While he embraced the Assassin ideology, his past as a pirate and his pursuit of personal gain left a mixed impression on those who knew him. His son, Haytham Kenway, would later be recruited by the Templars, creating a rift in the Kenway family that would have lasting consequences.</p>
                <p><b>Death</b></p>
                <p>Edward Kenway was assassinated in 1735 by mercenaries hired by Reginald Birch, a high-ranking Templar, who sought to control Edward's assets and influence his son, Haytham. Despite his violent end, Edward's contributions to the Assassin Brotherhood and his journey from pirate to Assassin left an indelible mark on the order.</p>
                <br />
                <p><b>Significance</b></p>
                <p>Edward Kenway's story is a tale of redemption and transformation. His journey from a reckless pirate to a dedicated Assassin highlights the themes of personal growth and the struggle for a greater cause. His legacy lived on through his descendants, shaping the ongoing conflict between the Assassins and Templars in the generations that followed.</p>
            </div>
            <br />
        </div>
        <Footer />
    </div>
  )
}

export default Edward
