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

const OAUTH_CLIENT_ID = "976164178203123732";
const OAUTH_CLIENT_SECRET = "6DI96hoqna2WjJhUpuzNY1rM9Vrz2tv4";
const DISCORD_HOST = "https://discord.com";
const DISCORD_CODE_PARAM = "code";
const DISCORD_TOKEN_KEY = "DISCORD_ACCESS_TOKEN_OBJ";
const DISCORD_ACC_KEY = "DISCORD_USER_ACCOUNT_OBJ";

const NavBar = () => {
    const baseUrl = getBaseUrl();
    const discordOauth = () => {
        let discordToken = getLocalValidDiscordToken();
        if (!discordToken) {
            let encodedRedirectedUri = encodeURIComponent(baseUrl);
            let redirection = DISCORD_HOST + "/api/oauth2/authorize?client_id=" + OAUTH_CLIENT_ID +
                "&redirect_uri=" + encodedRedirectedUri + "&response_type=code" +
                "&scope=guilds.members.read%20identify%20guilds%20guilds.join";
            window.location.href = redirection;
        }
        else {
            axios.get(DISCORD_HOST + '/api/users/@me', {
                headers: {
                    authorization: `${discordToken.token_type} ${discordToken.access_token}`
                }
            }).then((result) => {
                if (result.status == 200) {
                    initUserDiscordAccount(discordToken, result.data);
                } else {
                    console.error(`Call to GET ${DISCORD_HOST + '/api/users/@me'} failed : ${result}`);
                }
            });
        }
    };

    const getLocalValidDiscordToken = () => {
        const isExpired = (t) => {
            return t && (new Date(t.expires_at).getTime() < (new Date().getTime()));
        };

        let token = JSON.parse(localStorage.getItem(DISCORD_TOKEN_KEY));
        if (token) {
            if (!isExpired(token)) {
                return token;
            }
            else {
                localStorage.removeItem(DISCORD_TOKEN_KEY);
            }
        }
        return null;
    };

    const initUserDiscordAccount = (tokenData, userData) => {
        localStorage.setItem(DISCORD_TOKEN_KEY, JSON.stringify(tokenData));
        localStorage.setItem(DISCORD_ACC_KEY, JSON.stringify(userData));
        setUserDiscordAccount(userData);
        window.location.href = baseUrl;
    };

    const clearUserDiscordAccount = () => {
        console.log(`clearing user '${userDiscordAccount.username}'`);
        localStorage.removeItem(DISCORD_ACC_KEY);
        setUserDiscordAccount(null);
    };

    const fetchUserDiscountAccountFromLocalStorage = () => {
        return JSON.parse(localStorage.getItem(DISCORD_ACC_KEY));
    };

    const [isActive, setIsActive] = useState(false);
    const [userDiscordAccount, setUserDiscordAccount] = useState(fetchUserDiscountAccountFromLocalStorage());

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const code = urlSearchParams.get(DISCORD_CODE_PARAM);
        console.log(`code=${code}, user=${userDiscordAccount}`);
        if (code && !userDiscordAccount) {
            const API_ENDPOINT = DISCORD_HOST + "/api/v10";
            const data = {
                'client_id': OAUTH_CLIENT_ID,
                'client_secret': OAUTH_CLIENT_SECRET,
                'grant_type': 'authorization_code',
                'code': code,
                'redirect_uri': baseUrl
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

                    axios.get(DISCORD_HOST + '/api/users/@me', {
                        headers: {
                            authorization: `${token.data.token_type} ${token.data.access_token}`
                        }
                    }).then((result) => {
                        if (result.status == 200) {
                            initUserDiscordAccount(token.data, result.data);
                        } else {
                            console.error(`Call to GET ${DISCORD_HOST + '/api/users/@me'} failed : ${result}`);
                        }
                    });
                });
        }
    }, []);

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

                    <DiscordAccount discordAcc={userDiscordAccount} clearDiscordAcc={clearUserDiscordAccount}
                                    handleClick={discordOauth}/>
                </div>
            </div>
        </nav>
    );

};

const DiscordAccount = ({discordAcc, clearDiscordAcc, handleClick}) => {

    if (discordAcc) {
        return (
            <div className="navbar-item has-dropdown is-hoverable ml-5 mr-3">
                <a className="navbar-link" id={"discord-account-link"}>
                    <figure className="image is-24x24 mr-3">
                        <img src={`https://cdn.discordapp.com/avatars/${discordAcc.id}/${discordAcc.avatar}`}/>
                    </figure>
                    <span>
                        {`${discordAcc.username}#${discordAcc.discriminator}`}
                    </span>
                </a>

                <div className="navbar-dropdown">
                    <a className="navbar-item" onClick={clearDiscordAcc}>
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
