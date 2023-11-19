// Dependencies
import { useEffect, useState } from 'react'

// CSS
import './homepage.css'

// Components
import ShibeJoke from '../shibejoke/shibejoke.jsx'

function Homepage() {
        const [rightEyeHeight, setRightEyeHeight] = useState('100%');
        const [leftEyeHeight, setLeftEyeHeight] = useState('100%');
        const [reset, setReset] = useState(false);

        const [showShibeJoke, setShowShibeJoke] = useState(false);

        const winkLeft = () => {
                setLeftEyeHeight('5%');
                        console.log('left eye winked');
        }

        const winkRight = () => {
                setRightEyeHeight('5%');
                console.log('right eye winked');
        }

        const touchNose = () => {
                setLeftEyeHeight('5%');
                setRightEyeHeight('5%');
                console.log('nose booped!');

                toggleShibeJoke();
                console.log('STATUS OF SHIBEJOKE: ' + showShibeJoke);
        }

        const openEyes = () => {
                setLeftEyeHeight('100%');
                setRightEyeHeight('100%');

                setReset(true)
                console.log('mouth touched!')
        }

        const toggleShibeJoke = () => {
                setShowShibeJoke(!showShibeJoke);
        }

        useEffect(() => { // To check for changes in reset state
                if(reset){
                        openEyes()
                        setShowShibeJoke(false);
                        console.log('STATUS OF SHIBEJOKE: ' + showShibeJoke);
                }
        }, [reset]);

        return(
                <div className="homepage-div">
                        <div className="eyes">
                                <div className="eyebrows">
                                        <div className="brow">

                                        </div>

                                        <div className="brow">

                                        </div>
                                </div>

                                <div className="eyeballs">
                                        <div className="eye" onClick={winkLeft} style={{minHeight:leftEyeHeight}}>

                                        </div>

                                        <div className="eye" onClick={winkRight} style={{minHeight:rightEyeHeight}}>

                                        </div>
                                </div>
                        </div>

                        <div className="snout">
                                <div className="blush">

                                </div>

                                <div className="nose" onClick={touchNose}>

                                </div>

                                <div className="blush">

                                </div>
                        </div>

                        <div className="mouth">
                                <div className="lips" onClick={openEyes}>

                                </div>
                        </div>

                        {showShibeJoke ? <ShibeJoke setShowShibeJoke={setShowShibeJoke}/> : null}
                </div>
        )
}

export default Homepage;
