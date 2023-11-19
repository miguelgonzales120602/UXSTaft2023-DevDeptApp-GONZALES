// Dependencies
import { useEffect, useState } from 'react'

// CSS
import './App.css'

// Components
import HomePage from './src/components/homepage/homepage.jsx'

function App() {
  const [shibaImages, setShibaImages] = useState([]);
  const [nerdJokes, setNerdJokes] = useState([]);

  useEffect(() => {
    // Fetch Shiba Inu Pictures
    fetch('http://shibe.online/api/shibes?count=100&urls=true&httpsUrls=true')
    .then(res => res.json())
    .then(data => {
      setShibaImages(data)
    })
    .catch(error => console.error('Error has occured: ', error));

    // Fetch Random Jokes
    fetch('https://geek-jokes.sameerkumar.website/api?format=json')
    .then(res => res.json())
    .then(data => {
      setNerdJokes(data)
    })
  }, [])

  return (
    <div className="application-window">

    </div>
  )
}

export default App
