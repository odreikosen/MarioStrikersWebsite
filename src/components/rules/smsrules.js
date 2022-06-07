import "./rules.css"
import React from 'react';

import sms_img from '../../assets/super-mario-strikers-bw.png';
import LinkDiscordServer from "../links/discordserver";

const SmsRules = () => {
    return (
        <div>
            <div className="columns">
                <div className="column">
                    <div className="columns">
                        <div className="column is-2"/>
                        <div className="column is-2">
                            <figure className="image">
                                <img src={sms_img}/>
                            </figure>
                        </div>
                        <div className="column is-6">
                            <section className="hero is-small is-link">
                                <div className="hero-body">
                                    <p className="title">
                                        Rules for Super Mario Strikers tournaments
                                    </p>
                                    <p className="subtitle">
                                        Below you will find the ruleset for all <i>Super Mario
                                        Strikers</i> tournaments
                                        organized on the
                                        <LinkDiscordServer />!
                                    </p>
                                </div>
                            </section>
                        </div>
                        <div className="column is-2"/>
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="column is-2"/>
                <div className="column is-8">
                    <div className="rules-container">
                        <iframe
                            src="https://docs.google.com/document/d/e/2PACX-1vQm1Qfx1s7HoEUd1XM7_GRdg4WRV2NwBR4B-eG8qeJpEVUc4Tun5p4ZD0cLLZXa1aLb515rziXKO_kZ/pub?embedded=true"></iframe>
                    </div>
                </div>
                <div className="column is-2"/>
            </div>
        </div>
    )
};


export default SmsRules;