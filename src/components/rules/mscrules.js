import "./rules.css";
import React from 'react';

import msc_img from '../../assets/mario-strikers-charged-bw.png';
import LinkDiscordServer from "../links/discordserver";

const MscRules = () => {
    return (
        <div>
            <div className="columns">
                <div className="column">
                    <div className="columns">
                        <div className="column is-2"/>
                        <div className="column is-2">
                            <figure className="image">
                                <img src={msc_img}/>
                            </figure>
                        </div>
                        <div className="column is-6">
                            <section className="hero is-small is-link">
                                <div className="hero-body">
                                    <p className="title">
                                        Rules for Mario Strikers Charged tournaments
                                    </p>
                                    <p className="subtitle">
                                        Below you will find the ruleset for all <i>Mario Strikers
                                        Charged</i> tournaments
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
                            src="https://docs.google.com/document/d/e/2PACX-1vTzZcNhFZM0ZJq-rKghYpQicznEGCISS8h5tcVNhswQXnhkA1i6-ErTtg1R2INo6bgmDUpSYA2AlKkU/pub?embedded=true"></iframe>
                    </div>
                </div>
                <div className="column is-2"/>
            </div>
        </div>
    )
};

export default MscRules;