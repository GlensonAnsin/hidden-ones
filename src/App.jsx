import { useEffect, useState } from "react"
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

const App = () => {
  let heroData = [
    {text1: "We work in the dark", text2: "to serve the light"},
    {text1: "Nothing is true", text2: "everything is permitted"},
    {text1: "There is no greater glory", text2: "than fighting to find the truth"},
    {text1: "I cannot shed my past", text2: "like a snake sheds its skin"},
    {text1: "How could I regret", text2: "the only life I've ever known"},
    {text1: "It's better to have faith in something", text2: "than nothing at all"},
    {text1: "Better to be content in this life", text2: "than aspire to it in the next"},
    {text1: "Past is just a story", text2: "we tell ourselves"},
    {text1: "Life is not a fairy tale", text2: "and there are no happy endings"},
    {text1: "People are quick to judge", text2: "but slow to correct themselves"}
  ];
  const [slideCount, setSlideCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideCount((count) => {return count === 9 ? 0 : count + 1})
    }, 10000)
    return () => clearInterval(intervalId);
  }, [])

  return (
    <div>
      <ScrollToTop />
      <Background playStatus = {playStatus} slideCount = {slideCount} />
      <Navbar />
      <Hero
        setPlayStatus = {setPlayStatus}
        heroData = {heroData[slideCount]}
        slideCount = {slideCount}
        setSlideCount = {setSlideCount}
        playStatus = {playStatus}
      />
    </div>
  )
}

export default App
