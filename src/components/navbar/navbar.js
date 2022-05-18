import './navbar.css';

import React, {useState} from 'react';


const NavBar = () => {

    const discordOauth = () => {
        let encodedRedirectedUri = encodeURIComponent(window.location.protocol+"//"+window.location.host);
        window.location.href = "https://discord.com/api/oauth2/authorize?client_id=903749670919077898" +
            "&redirect_uri=" + encodedRedirectedUri + "&response_type=code" +
            "&scope=guilds.members.read%20identify%20guilds%20guilds.join"
    };

    const [isActive, setIsActive] = useState(false);

    return (
        <nav className="navbar is-black" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img id={"home-logo"}/>
                </a>

                <a role="button" className={`navbar-burger ${isActive ? "is-active" : ""}`} aria-label="menu"
                   aria-expanded="false" data-target="navbarMSGG" onClick={() => {
                    console.log("click on burger");
                    setIsActive(!isActive)
                }}>
                    <span aria-hidden="true"/>
                    <span aria-hidden="true"/>
                    <span aria-hidden="true"/>
                </a>
            </div>

            <div id="navbarMSGG" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                <div className="navbar-end">

                    <div className="navbar-item has-dropdown is-hoverable ml-5 mr-3">
                        <a className="navbar-link">
                            Mario Strikers:<br/>Battle League
                        </a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item">
                                Clubs
                            </a>
                            <a className="navbar-item">
                                Players
                            </a>
                            <a className="navbar-item">
                                Guides
                            </a>
                        </div>
                    </div>
                    <div className="navbar-item has-dropdown is-hoverable ml-3 mr-3">
                        <a className="navbar-link">
                            Mario Strikers<br/>Charged
                        </a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item">
                                Clubs
                            </a>
                            <a className="navbar-item" href="#/msc-rankings">
                                Players
                            </a>
                            <a className="navbar-item" href="#/msc-rules">
                                Guides
                            </a>
                        </div>
                    </div>
                    <div className="navbar-item has-dropdown is-hoverable ml-3 mr-3">
                        <a className="navbar-link">
                            Super Mario<br/>Strikers
                        </a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item">
                                Clubs
                            </a>
                            <a className="navbar-item" href="#/sms-rankings">
                                Players
                            </a>
                            <a className="navbar-item" href="#/sms-rules">
                                Guides
                            </a>
                        </div>
                    </div>
                    <a className="navbar-item" href="#/tournaments">
                        Mario Strikers<br/>League
                    </a>

                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-light" onClick={discordOauth}>
                                <span>Login with <b>Discord</b>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );

};

export default NavBar;