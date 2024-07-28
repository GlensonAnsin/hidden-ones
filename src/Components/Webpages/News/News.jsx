import './News.css'
import Navbar from '../../Navbar/Navbar'
import { useEffect, useState } from 'react';
import ShowImg from '../../ShowImg/ShowImg';
import Footer from '../../Footer/Footer';
import ScrollToTop from '../../ScrollToTop/ScrollToTop';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [imgLink, setImgLink] = useState(null);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const apiKey = '0fdd9029c16f4296bde611f9d92bb003';

    const fetchACNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=Assassin's+Creed&language=en&apiKey=${apiKey}`);

        if (!response.ok) {
          throw new Error('Could not fetch resource');
        }

        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchACNews();
  }, []);

  if (loading) {
    return <div>Loading...</div>
  } else if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <div className="ac-news">
          <div className="header-container">
            <h1>Stay Updated with the Latest News</h1>
            <br />
            <p>Welcome to the News page of the Hidden Ones, your one-stop destination for all the latest updates, announcements, and insights from the world of Assassin's Creed. Keep up with the newest game releases, developer interviews, and event coverage.</p>
          </div>
          <div className="news-content">
            <ul>
              {articles.map((article, index) => (
                <li key={index}>
                <h2>{article.title}</h2>
                {article.urlToImage && <div onClick={() => setDisplay(true)}><img onClick={() => setImgLink(article.urlToImage)} src={article.urlToImage} alt='image' style={{width: '300px'}} /></div>}
                <p>{article.description}</p>
                <a href={article.url} target='_blank' rel='noopener noreferrer'>Read more</a>
              </li>
              ))}
            </ul>
          </div>
        </div>
        <ShowImg 
          imgLink = {imgLink}
          display = {display}
          setDisplay = {setDisplay}
        />
        <Footer />
    </div>
  )
}

export default News
