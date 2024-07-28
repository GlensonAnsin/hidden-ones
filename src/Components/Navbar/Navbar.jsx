import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo"><Link to='/'>Hidden <span>Ones</span></Link></div>
      <ul className="nav-menu">
        <li><Link className='nav-link' to='/'>Home</Link></li>
        <li><Link className='nav-link' to='/acgames'>AC Games</Link></li>
        <li><Link className='nav-link' to='/assassins'>Assassins</Link></li>
        <li><Link className='nav-link' to='/news'>News</Link></li>
        <li><Link className='nav-link' to='/contactdev'>Contact Developer</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
