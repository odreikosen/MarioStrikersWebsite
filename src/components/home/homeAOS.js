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
                    <div className="about-container aos-init" data-aos="fade-up" data-aos-duration="1500">
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
                </div>
            </section>
            <section className="home-section" id="section-partners-03">
                <div className="home-container">
                    <h2 className="section-title">Partners</h2>
                    <div className="partner-container aos-init" data-aos="fade-up" data-aos-duration="1500">
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