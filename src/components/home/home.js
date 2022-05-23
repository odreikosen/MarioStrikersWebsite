import './home.css';
import PartnerBubble from '../partner-bubble/PartnerBubble';
import React, { useEffect }  from 'react';
import axios from "axios"
import Col from 'react-bootstrap/Col'
import querystring from "querystring"

const Home = () => {

    const discordOauth = () => {
      window.location.href = "https://discord.com/api/oauth2/authorize?client_id=903749670919077898&redirect_uri=https%3A%2F%2Fmariostrikers.gg&response_type=code&scope=guilds.members.read%20identify%20guilds%20guilds.join"
    }
    
    useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const code = urlSearchParams.get("code");
    if (code){
        const API_ENDPOINT = "https://discord.com/api/v8"
        const CLIENT_ID = "903749670919077898"
        const CLIENT_SECRET = "J78LrUk9BjM4bXv7-pE_CF76KQh9dzsn"
        const REDIRECT_URI = "https://mariostrikers.gg"
        const data = {
            'client_id': CLIENT_ID,
            'client_secret': CLIENT_SECRET,
            'grant_type': 'authorization_code',
            'code': code,
            'redirect_uri': REDIRECT_URI
        }
    const headers = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    axios.post(`${API_ENDPOINT}/oauth2/token`, querystring.stringify(data), headers)
      .then((token) => {
         axios.get('https://discord.com/api/users/@me', {
             headers: {
                 authorization: `${token.data.token_type} ${token.data.access_token}`
             }})
             .then((result) => {
                 console.log(result)
             });
      });
    }
    }, []);
    

    return (
    <div className="home">
        <div className="about-container home-container">
            <div className="home-header-container">
                <Col></Col>
                <Col>
                    <h1 className="home-header">Mario Strikers Competitive</h1>
                </Col>
                <Col>
                    <button className="discord-auth" onClick={discordOauth}>Sign in With Discord</button>
                </Col>
            </div>        
            <span>Welcome to the home for all things Mario Strikers! </span>
            <div className="information-container">
                <div className="sms-column"><span>SMS</span>
                    <button className="home-button">How to Set Up</button>
                    <button className="home-button">Tips & Tricks</button>
                    <button className="home-button">Citrus Build (Custom Skins + Gamemode)</button>
                </div>
                <div className="msc-column">MSC</div>
            </div>
        </div>
        
        <div className="partners-container home-container">
            <div>    
                <h1 className="home-header">PARTNERS</h1>
            </div>
            <div className="partnerBubble">
                <PartnerBubble  title="Strikers Discord" image="discord_logo.png" link="https://discord.gg/mariostrikers" />
                <PartnerBubble title="Ragnarok" image="Ragnarok_logo.png" link="https://discord.gg/Q86CRCNmcX" />
                <PartnerBubble title="Wolf TV" image="WolfTV.png" link="https://discord.gg/xFejWpb" />
            </div>
        </div>
    </div>
    )
}
export default Home;