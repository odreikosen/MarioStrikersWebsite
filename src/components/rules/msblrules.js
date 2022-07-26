import "./rules.css";
import React from 'react';

import msbl_img from '../../assets/mario.retourne.bw.png';
import LinkDiscordServer from "../links/discordserver";

const MsblRules = () => {
    return (
        <div>
            <div className="columns">
                <div className="column">
                    <div className="columns">
                        <div className="column is-2"/>
                        <div className="column is-2">
                            <figure className="image">
                                <img src={msbl_img}/>
                            </figure>
                        </div>
                        <div className="column is-6">
                            <section className="hero is-small is-link">
                                <div className="hero-body">
                                    <p className="title">
                                        Rules for Mario Strikers: Battle League Football tournaments
                                    </p>
                                    <p className="subtitle">
                                        Below you will find the ruleset for all <i>Mario Strikers:
                                        Battle League Football</i> tournaments
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
                            src="https://docs.google.com/document/d/e/2PACX-1vRzECnLnEoSCSAypyVFwWh2JqP5ff0IPJ1RxL2St_S2tVOfGXpE2_48qqbbwvSptrFS5ohQ3W5HdxE0/pub?embedded=true"></iframe>
                    </div>
                </div>
                <div className="column is-2"/>
            </div>
        </div>
    )
};

export default MsblRules;