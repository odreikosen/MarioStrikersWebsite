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
        baseUrl = baseUrl.substring(0, baseUrl.length - 1);
    }
    return baseUrl;
};

const OAUTH_CLIENT_ID = "903749670919077898";
const OAUTH_CLIENT_SECRET = "J78LrUk9BjM4bXv7-pE_CF76KQh9dzsn";
const DISCORD_HOST = "https://discord.com";
const DISCORD_TOKEN_KEY = "DISCORD_ACCESS_TOKEN_OBJ";
const DISCORD_ACC_KEY = "DISCORD_USER_ACCOUNT_OBJ";

const NavBar = () => {
    const baseUrl = getBaseUrl();

    const discordOauth = () => {
        let encodedRedirectedUri = encodeURIComponent(baseUrl);
        let redirection = DISCORD_HOST + "/oauth2/authorize?client_id=" + OAUTH_CLIENT_ID +
            "&redirect_uri=" + encodedRedirectedUri + "&response_type=code" +
            "&scope=guilds.members.read%20identify%20guilds%20guilds.join";
        window.location.href = redirection;
    };

    const [isActive, setIsActive] = useState(false);
    const [userDiscordAccount, setUserDiscordAccount] = useState(JSON.parse(localStorage.getItem(DISCORD_ACC_KEY)));

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const code = urlSearchParams.get("code");
        if (code) {
            const API_ENDPOINT = DISCORD_HOST + "/api/v8";
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
                    if (token && token.data && token.data.expires_in) {
                        const now = new Date();
                        token.data.expires_at = new Date(now.getTime() + token.data.expires_in * 1000);
                    }
                    localStorage.setItem(DISCORD_TOKEN_KEY, JSON.stringify(token.data));
                    axios.get(DISCORD_HOST + '/api/users/@me', {
                        headers: {
                            authorization: `${token.data.token_type} ${token.data.access_token}`
                        }
                    }).then((result) => {
                        console.log(result);
                        localStorage.setItem(DISCORD_ACC_KEY, JSON.stringify(result.data));
                        setUserDiscordAccount(result.data);
                    });
                });
        }
    }, [userDiscordAccount]);

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

                    <DiscordAccount discordAcc={userDiscordAccount} setDiscordAcc={setUserDiscordAccount} handleClick={discordOauth}/>

                    {/*<div className="navbar-item">*/}
                    {/*    <div className="buttons">*/}
                    {/*        <a className="button is-light" onClick={discordOauth}>*/}
                    {/*            <span>Login with <b>Discord</b>*/}
                    {/*            </span>*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </nav>
    );

};

const DiscordAccount = ({discordAcc, setDiscordAcc, handleClick}) => {

    function clearUserDiscordAccount() {
        localStorage.removeItem(DISCORD_TOKEN_KEY);
        localStorage.removeItem(DISCORD_ACC_KEY);
        setDiscordAcc(null);
    }

    if (discordAcc) {
        return (
            <div className="navbar-item has-dropdown is-hoverable ml-5 mr-3">
                <a className="navbar-link">
                    <figure className="image is-24x24">
                        <img src={`https://cdn.discordapp.com/avatars/${discordAcc.id}/${discordAcc.avatar}`}/>
                    </figure>
                    <span>
                        {`${discordAcc.username}#${discordAcc.discriminator}`}
                    </span>
                </a>

                <div className="navbar-dropdown">
                    <a className="navbar-item" onClick={clearUserDiscordAccount}>
                        Log Out
                    </a>
                </div>
            </div>
        );
    } else {
        return (
            <div className="navbar-item">
                <div className="buttons">
                    <a className="button is-light" onClick={handleClick}>
                                <span>Login with <b>Discord</b>
                                </span>
                    </a>
                </div>
            </div>
        );
    }
};

export default NavBar;
