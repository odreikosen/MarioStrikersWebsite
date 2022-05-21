import './navbar.css';

import React, {useEffect, useState} from 'react';
import axios from "axios";
import querystring from "querystring";


export const getBaseUrl = () => {
    let baseUrl = window.location.href;
    let delimitersAfterBaseUrl = ['#', '?'];
    for (let index in delimitersAfterBaseUrl) {
        if (baseUrl.includes(delimitersAfterBaseUrl[index])) {
            baseUrl = baseUrl.substring(0, baseUrl.indexOf(delimitersAfterBaseUrl[index]));
        }
    }
    if (baseUrl.endsWith("/")) {
        baseUrl = baseUrl.substring(0, baseUrl.length-1);
    }
    return baseUrl;
};

const OAUTH_CLIENT_ID = "976164178203123732"; // 903749670919077898
const DISCORD_HOST = "https://discord.com";

const NavBar = () => {
    const baseUrl = getBaseUrl();

    const discordOauth = () => {
        let encodedRedirectedUri = encodeURIComponent(baseUrl);
        let redirection = DISCORD_HOST+"/oauth2/authorize?client_id=" + OAUTH_CLIENT_ID +
            "&redirect_uri=" + encodedRedirectedUri + "&response_type=code" +
            "&scope=guilds.members.read%20identify%20guilds%20guilds.join";
        window.location.href = redirection;
    };

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const code = urlSearchParams.get("code");
        if (code) {
            const API_ENDPOINT = DISCORD_HOST+"/api/v8";
            const OAUTH_CLIENT_SECRET = "6DI96hoqna2WjJhUpuzNY1rM9Vrz2tv4";// "J78LrUk9BjM4bXv7-pE_CF76KQh9dzsn";
            const REDIRECT_URI = baseUrl;
            const data = {
                'client_id': OAUTH_CLIENT_ID,
                'client_secret': OAUTH_CLIENT_SECRET,
                'grant_type': 'authorization_code',
                'code': code,
                'redirect_uri': REDIRECT_URI
            };
            const headers = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };
            axios.post(`${API_ENDPOINT}/oauth2/token`, querystring.stringify(data), headers)
                .then((token) => {
                    axios.get(DISCORD_HOST+'/api/users/@me', {
                        headers: {
                            authorization: `${token.data.token_type} ${token.data.access_token}`
                        }
                    }).then((result) => {
                        console.log(result)
                    });
                });
        }
    }, []);

    const [isActive, setIsActive] = useState(false);

    return (
        <nav className="navbar is-black" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img id={"home-logo"}/>
                </a>

                <a role="button" className={`navbar-burger ${isActive ? "is-active" : ""}`} aria-label="menu"
                   aria-expanded="false" data-target="navbarMSGG" onClick={() => {
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
                            <a className="navbar-item" href="#/sms-rules">
                                Guides
                            </a>
                        </div>
                    </div>

                    <div className="navbar-item has-dropdown is-hoverable ml-3 mr-3">
                        <a className="navbar-link">
                            Mario Strikers<br/>League
                        </a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item" href="#/tournaments">
                                Season 2022
                            </a>
                            <a className="navbar-item">
                                Season 2021
                            </a>
                        </div>
                    </div>

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
