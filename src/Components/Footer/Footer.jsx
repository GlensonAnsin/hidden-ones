import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <small>Hidden Ones &copy; {currentYear}</small>
    </footer>
  )
}

export default Footer
