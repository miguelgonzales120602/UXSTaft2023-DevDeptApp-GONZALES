import { useEffect, useState } from 'react';
import './shibejoke.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function ShibeJoke({setShowShibeJoke}) {
        const [shibeImg, setShibeImg] = useState('');
        const [nerdJoke, setNerdJoke] = useState('');

        // useEffect statement executes on render
        // Get joke for the day and shiba inu picture
        useEffect(() => {
                // To fetch Shiba Inu pictures
                fetch('http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true')
                        .then(res => res.json())
                        .then(data => setShibeImg(data[0]))

                // To fetch nerd jokes
                fetch('https://geek-jokes.sameerkumar.website/api?format=json')
                        .then(res => res.json())
                        .then(data => setNerdJoke(data.joke))
        }, [])

        const exitShibe = () => {
                setShowShibeJoke(false);
        }

        return(

                <div className="shibe-joke-div">
                        <div className="exit-button">
                                <FontAwesomeIcon
                                        className="exit-icon"
                                        icon={faCircleXmark}
                                        style={{color: "#ff8080",}}
                                        onClick={exitShibe}
                                />
                        </div>

                        <div className="shiba-image-div">
                                <img
                                        className="shibe-img"
                                        src={shibeImg}
                                        alt={'doge'}
                                />
                        </div>

                        <div className="nerd-joke-div">
                                {nerdJoke.toString()}
                        </div>
                </div>

        )
}

export default ShibeJoke;
