import './homeAOS.css';
import PartnerBubble from '../partner-bubble/PartnerBubble';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Col from 'react-bootstrap/Col';
import querystring from "querystring";
import discord_icon from '../../assets/discord_icon_black.png'

const HomeAOS = () => {

    const discordOauth = () => {
        window.location.href = "https://discord.com/api/oauth2/authorize?client_id=903749670919077898&redirect_uri=https%3A%2F%2Fmariostrikers.gg&response_type=code&scope=guilds.members.read%20identify%20guilds%20guilds.join"
    }

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const code = urlSearchParams.get("code");
        if (code) {
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
                        }
                    })
                        .then((result) => {
                            console.log(result)
                        });
                });
        }
        AOS.init();
        AOS.refresh();
        console.log("AOS initialized!");
    }, []);


    return (
        <div className="home-aos">
            <div className="backgrounds overlay">
                <div className="background aos-init aos-animate" data-aos="fade-in" data-aos-duration="1500"
                     data-aos-anchor=".section--hero"></div>
            </div>
            <section className="landing-section" id="section-title-01">
                <div className="landing-container">
                    <h1 data-aos="fade" className="aos-init aos-animate">MARIO STRIKERS DISCORD</h1>
                    <h4 data-aos="fade" className="aos-init aos-animate">Join THE Mario Strikers Discord today! Since
                        2017</h4>
                    <JoinDiscordButton/>
                </div>
            </section>
            <section className="home-section" id="section-about-02">
                <div className="home-container">
                    <h2 className="section-title">About Us</h2>
                    <div className="about-container aos-init" data-aos="fade-up" data-aos-duration="2000">
                        <p>
                            Welcome to the home of Mario Strikers! Play with or against others, participate in
                            tournaments or just hang out with the community!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.
                        </p>
                        <p>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </p>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                        </p>
                    </div>
                </div>
            </section>
            <section className="home-section" id="section-partners-03">
                <div className="home-container">
                    <h2 className="section-title">Affiliates</h2>
                    <div className="partner-container aos-init" data-aos="fade-up" data-aos-duration="2000">
                        <div className="partner">
                            <a href="https://discord.gg/vUGjy4mgqN" rel="noopener noreferrer"
                               target="_blank">
                                <div className="partner-image" id="affiliate-1"/>
                            </a>
                            <h1>Mario Strikers Speedrunning</h1>
                            <p>Whether you are a Speedrunner, a professional striker, or just a casual player of the
                                game,
                                we welcome you with open arms!
                            </p>
                        </div>
                        <div className="partner">
                            <a href="https://discord.gg/GB4z4U6Z7D" rel="noopener noreferrer" target="_blank">
                                <div className="partner-image" id="affiliate-2"/>
                            </a>
                            <h1>Mario Strikers - Deutsch</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt
                                ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="partner">
                            <a href="https://discord.gg/ndZSSap7VB" rel="noopener noreferrer" target="_blank">
                                <div className="partner-image" id="affiliate-3"/>
                            </a>
                            <h1>Mario Strikers France</h1>
                            <p>Bienvenue sur le serveur francophone de Mario Strikers !</p>
                        </div>
                    </div>
                    <h2 className="section-title">Partners</h2>
                    <div className="partner-container aos-init" data-aos="fade-up" data-aos-duration="2500">
                        <div className="partner">
                            <a href="https://discord.gg/xFejWpb" rel="noopener noreferrer"
                               target="_blank">
                                <div className="partner-image" id="partner-1"/>
                            </a>
                            <h1>Wolf TV</h1>
                            <p>This server is here to help you have some fun and talk to people! We like all kinds of
                                stuff here: movies, books, music, video games...
                            </p>
                        </div>
                        <div className="partner">
                            <a href="https://discord.gg/Avwju7upJJ" rel="noopener noreferrer" target="_blank">
                                <div className="partner-image" id="partner-2"/>
                            </a>
                            <h1>Wii Sports</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt
                                ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="partner">
                            <a href="https://discord.gg/Q86CRCNmcX" rel="noopener noreferrer" target="_blank">
                                <div className="partner-image" id="partner-3"/>
                            </a>
                            <h1>Ragnarok Inazuma 11</h1>
                            <p>The Ragnarok Server was founded to unite the entire competitive Inazuma Eleven community.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

const JoinDiscordButton = () => {

    const [numMembers, setNumMembers] = useState(null);
    const [iconClass, setIconClass] = useState(null);

    useEffect(() => {
        axios.get("https://discord.com/api/invite/mariostrikers?with_counts=true").then((response) => {
            if (response && response.status == 200 && response.data) {
                setNumMembers(response.data.approximate_member_count);
            }
            throw response;
        }).catch((error) => {
            console.error("Error while calling discord API for server's approximate member count: ", error);
        });
    }, []);

    return <a href="https://discord.gg/de2YaWg" target="_blank" rel="noopener noreferrer">
        <button className="discordButton joinLink"
                onMouseEnter={() => setIconClass("rotate-now")}
                onMouseLeave={() => setIconClass("counter-rotate-now")}>
            <div>
                <img src={discord_icon} alt="Discord" className={iconClass}/>
                Join {numMembers} other users on our server!
            </div>
        </button>
    </a>
}

export default HomeAOS;