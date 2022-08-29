import React from 'react';
import {SiTwitter, SiInstagram, SiGoogle, SiGithub, SiYoutube} from 'react-icons/si';
import './componentStyles/footerStyle.css';
 
const Footer: React.FC = () => {
    return(
        <div className='footer'>
            <div className='footerContent'>
                <h4>Made by Stephen Schmitz&reg;</h4>
                <h5><a href="https://www.stephenschmitz.com" target="_blank">www.stephenschmitz.com</a> | TechStephen | Stephenschmitz518@gmail.com</h5>
                <div className='socialMedia'>
                    <a href="https://www.twitter.com" target="_blank" style={{ color: 'blue'}}><SiTwitter/></a>
                    <a href="https://www.google.com" target="_blank" style={{ color: 'green'}}><SiGoogle/></a>
                    <a href="https://www.instagram.com" target="_blank" style={{ color: '#b36518'}}><SiInstagram/></a>
                    <a href="https://www.github.com" target="_blank" style={{ color: 'darkblue'}}><SiGithub/></a>
                    <a href="https://www.youtube.com" target="_blank" style={{ color: 'red'}}><SiYoutube/></a>
                </div>  
            </div>
        </div>
    );
}

export default Footer;