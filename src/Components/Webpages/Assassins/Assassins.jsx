import Navbar from '../../Navbar/Navbar'
import './Assassins.css'
import altair from '../../../assets/assassins/altair/altair-1.png'
import ezio from '../../../assets/assassins/ezio/ezio-2.png'
import connor from '../../../assets/assassins/connor/connor.png'
import aveline from '../../../assets/assassins/aveline/aveline.png'
import edward from '../../../assets/assassins/edward/edward.png'
import adewale from '../../../assets/assassins/adewale/adewale.png'
import shay from '../../../assets/assassins/shay/shay-1.png'
import arno from '../../../assets/assassins/arno/arno.png'
import jacob from '../../../assets/assassins/jacob/jacob.png'
import evie from '../../../assets/assassins/evie/evie.png'
import bayek from '../../../assets/assassins/bayek/bayek.png'
import aya from '../../../assets/assassins/aya/aya.png'
import kassandra from '../../../assets/assassins/kassandra/kassandra.png'
import eivor from '../../../assets/assassins/eivor/eivor.png'
import basim from '../../../assets/assassins/basim/basim-1.png'
import yasuke from '../../../assets/assassins/yasuke/yasuke.png'
import naoe from '../../../assets/assassins/naoe/naoe.png'
import lydia from '../../../assets/assassins/lydia/lydia.png'
import achilles from '../../../assets/assassins/achilles/achilles.png'
import alMualim from '../../../assets/assassins/almualim/almualim.png'
import darius from '../../../assets/assassins/darius/darius.png'
import giovanni from '../../../assets/assassins/giovanni/giovanni.png'
import henry from '../../../assets/assassins/henry/henry.png'
import hope from '../../../assets/assassins/hope/hope.png'
import hytham from '../../../assets/assassins/hytham/hytham.png'
import kadar from '../../../assets/assassins/kadar/kadar.png'
import liam from '../../../assets/assassins/liam/liam.png'
import malik from '../../../assets/assassins/malik/malik.png'
import mario from '../../../assets/assassins/mario/mario.png'
import mary from '../../../assets/assassins/mary/mary.png'
import niccolo from '../../../assets/assassins/niccolo/niccolo.png'
import pierre from '../../../assets/assassins/pierre/pierre.png'
import roshan from '../../../assets/assassins/roshan/roshan.png'
import ahTabai from '../../../assets/assassins/tabai/tabai.png'
import tahira from '../../../assets/assassins/tahira/tahira.png'
import yusuf from '../../../assets/assassins/yusuf/yusuf.png'
import { Link } from 'react-router-dom'
import Footer from '../../Footer/Footer'

const Assassins = () => {
  return (
    <div>
        <Navbar />
        <div className="assassins">
          <div className="header-container">
            <h1>Meet the Icons of <span>Assassin's Creed</span></h1>
            <br />
            <p>The Assassin's Creed series is renowned for its richly developed characters, each bringing unique stories and perspectives to the overarching narrative. Explore the lives and legacies of these iconic figures.</p>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={altair} alt="assassin" />
              <Link to='/assassins/altair'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Altaïr Ibn-La'Ahad</h3>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={ezio} alt="assassin" />
              <Link to='/assassins/ezio'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Ezio Auditore</h3>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={connor} alt="assassin" />
              <Link to='/assassins/connor'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Connor Kenway</h3>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={aveline} alt="assassin" />
              <Link to='/assassins/aveline'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Aveline de Grandpré</h3>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={edward} alt="assassin" />
              <Link to='/assassins/edward'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Edward Kenway</h3>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={adewale} alt="assassin" />
              <Link to='/assassins/adewale'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Adéwalé</h3>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={shay} alt="assassin" />
              <Link to='/assassins/shay'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Shay Patrick Cormac</h3>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={arno} alt="assassin" />
              <Link to='/assassins/arno'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Arno Victor Dorian</h3>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={jacob} alt="assassin" />
              <Link to='/assassins/jacob'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Jacob Frye</h3>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={evie} alt="assassin" />
              <Link to='/assassins/evie'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Evie Frye</h3>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={bayek} alt="assassin" />
              <Link to='/assassins/bayek'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Bayek</h3>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={aya} alt="assassin" />
              <Link to='/assassins/aya'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Amunet/Aya</h3>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={kassandra} alt="assassin" />
              <Link to='/assassins/kassandra'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Kassandra</h3>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={eivor} alt="assassin" />
              <Link to='/assassins/eivor'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Eivor Varinsdottir</h3>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={basim} alt="assassin" />
              <Link to='/assassins/basim'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Basim Ibn Ishaq</h3>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={yasuke} alt="assassin" />
              <Link to='/assassins/yasuke'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Yasuke</h3>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={naoe} alt="assassin" />
              <Link to='/assassins/naoe'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Fujibayashi Naoe</h3>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={lydia} alt="assassin" />
              <Link to='/assassins/lydia'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Lydia Frye</h3>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={achilles} alt="assassin" />
              <Link to='/assassins/achilles'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Achilles Davenport</h3>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={alMualim} alt="assassin" />
              <Link to='/assassins/almualim'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Rashid ad-din Sinan</h3>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={darius} alt="assassin" />
              <Link to='/assassins/darius'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Darius</h3>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={giovanni} alt="assassin" />
              <Link to='/assassins/giovanni'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Giovanni Auditore</h3>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={henry} alt="assassin" />
              <Link to='/assassins/henry'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Henry Green</h3>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={hope} alt="assassin" />
              <Link to='/assassins/hope'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Hope Jensen</h3>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={hytham} alt="assassin" />
              <Link to='/assassins/'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Hytham</h3>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={kadar} alt="assassin" />
              <Link to='/assassins/'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Kadar Al-Sayf</h3>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={malik} alt="assassin" />
              <Link to='/assassins/'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Malik Al-Sayf</h3>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={liam} alt="assassin" />
              <Link to='/assassins/'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Liam O'Brien</h3>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={mario} alt="assassin" />
              <Link to='/assassins/'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Mario Auditore</h3>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={mary} alt="assassin" />
              <Link to='/assassins/'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Mary Read</h3>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={niccolo} alt="assassin" />
              <Link to='/assassins/'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Niccolò Machiavelli</h3>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={pierre} alt="assassin" />
              <Link to='/assassins/'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Pierre Bellec</h3>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={roshan} alt="assassin" />
              <Link to='/assassins/'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Roshan</h3>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={ahTabai} alt="assassin" />
              <Link to='/assassins/'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Ah Tabai</h3>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={tahira} alt="assassin" />
              <Link to='/assassins/'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Tahira</h3>
          </div>
          <div className="assassin">
            <div className="image-container">
              <img className='poster' src={yusuf} alt="assassin" />
              <Link to='/assassins/'>
                <div className="hover-content">
                  <h3>View Story</h3>
                </div>
              </Link>
            </div>
            <h3>Yusuf Tazim</h3>
          </div>
        </div>
        <br />
        <Footer />
    </div>
  )
}

export default Assassins
