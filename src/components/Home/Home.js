import React from 'react'
import './Home.css';
import myImage from './images/dp.jpg';
import twitter from './images/twitter.png'
import github from './images/github.png'
import linkedin from './images/linkedin.png'

const Home = () => {
  return (
    <section className='home-section' id='home'>
        <img className='my-image' src={myImage} alt="abhinab'simage"/>

        <div className="my-desc">
            <div className="intro">Hey👋, I am Abhinab Roy.</div>
            <div className="desc">I have a passion for problem-solving and creating software solutions that make a difference.</div>

            <div className="social-icons">
                <a href="https://github.com/DevoAbhi" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/abhinab-roy-0571ab191/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="linkedin" />
                </a>
                <a href="https://twitter.com/home?lang=en" target="_blank" rel="noopener noreferrer">
                    <img src={twitter} alt="twitter" />
                </a>
            </div>
        </div>
    </section>
  )
}

export default Home;