import './homeAOS.css';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import discord_icon from '../../assets/discord_icon_black.png';

const HomeAOS = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
        console.log("AOS initialized!");
    }, []);


    return (
        <div className="home-aos">
            <div className="backgrounds overlay">
                <div className="background aos-init aos-animate" data-aos="fade-in" data-aos-duration="1500"
                     data-aos-anchor=".section--hero"/>
            </div>
            <section className="landing-section" id="section-title-01">
                <div className="landing-container content">
                    <h1 data-aos="fade" className="aos-init aos-animate">MARIO STRIKERS DISCORD</h1>
                    <h4 data-aos="fade" className="aos-init aos-animate">Join THE Mario Strikers Discord today! Since
                        2017</h4>
                    <JoinDiscordButton/>
                </div>
            </section>
            <section className="home-section" id="section-about-02">
                <div className="home-container content">
                    <h2 className="section-title">About Us</h2>
                    <div className="about-container aos-init" data-aos="fade-up" data-aos-duration="600">
                        <p>
                            Welcome to the home of Mario Strikers! Play with or against others, participate in
                            tournaments or just hang out with the community!
                        </p>
                        <p>
                            This international community was founded in January 2007 and has continued to grow ever
                            since, as we finally had a new place for Mario Strikers fans from all over the world.
                        </p>
                        <p>
                            The community has been explosively growing with the announcement of
                            <b> Mario Strikers: Battle League</b>, and we hope to welcome many more Mario Strikers fans in the future!
                        </p>
                        <p>
                            We are also running a competitive Championship Series for all three games in the series, the <b>Mario Strikers League</b>, or <b>MSL</b>.
                            There you can compete against the best players and clubs from all over the world and prove that you belong to the true elite players!
                        </p>
                    </div>
                </div>
            </section>
            <section className="home-section" id="section-partners-03">
                <div className="home-container">
                    <h2 className="section-title">Affiliates</h2>
                    <div className="partner-container aos-init" data-aos="fade-up" data-aos-duration="700">
                        <div className="partner">
                            <a href="https://discord.gg/DFT5Dyy" rel="noopener noreferrer" target="_blank">
                                <div className="partner-image" id="affiliate-1"/>
                            </a>
                            <h1>NintenHub</h1>
                            <p>
                                All your favorite Nintendo-oriented communities under one source.<br />
                                Find your community with NintenHub!
                            </p>
                        </div>
                        <div className="partner">
                            <a href="https://discord.gg/vUGjy4mgqN" rel="noopener noreferrer"
                               target="_blank">
                                <div className="partner-image" id="affiliate-2"/>
                            </a>
                            <h1>Mario Strikers Speedrunning</h1>
                            <p>Whether you are a Speedrunner, a professional striker, or just a casual player of the
                                game,
                                we welcome you with open arms!
                            </p>
                        </div>
                        <div className="partner">
                            <a href="https://discord.gg/ndZSSap7VB" rel="noopener noreferrer" target="_blank">
                                <div className="partner-image" id="affiliate-3"/>
                            </a>
                            <h1>Mario Strikers France</h1>
                            <p>Bienvenue sur le serveur francophone de Mario Strikers !</p>
                        </div>
                        <div className="partner">
                            <a href="https://discord.gg/hynRcpeTqu" rel="noopener noreferrer" target="_blank">
                                <div className="partner-image" id="affiliate-4"/>
                            </a>
                            <h1>Mario Strikers - Nederland</h1>
                            <p>De officiële Nederlandse Mario Strikers Discord!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-section" id="section-partners-03">
                <div className="home-container">
                    <h2 className="section-title">Partners</h2>
                    <div className="partner-container aos-init" data-aos="fade-up" data-aos-duration="700">
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
                            <p>A server for all fans and players of the series! Get to know other fans of the game and
                                join the community today!</p>
                        </div>
                        <div className="partner">
                            <a href="https://discord.gg/Q86CRCNmcX" rel="noopener noreferrer" target="_blank">
                                <div className="partner-image" id="partner-3"/>
                            </a>
                            <h1>Ragnarok Inazuma 11</h1>
                            <p>The Ragnarok Server was founded to unite the entire competitive Inazuma Eleven
                                community.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

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
};

export default HomeAOS;