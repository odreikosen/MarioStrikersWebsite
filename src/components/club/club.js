import "./club.css";

import axios from "axios";
import React, {useEffect, useLayoutEffect, useState} from "react";
import {useParams} from "react-router-dom";
import no_img from "../../assets/no-image-icon.png";
import LinkDiscordServer from "../links/discordserver";

const Club = () => {
    let {clubid} = useParams();
    const [club, setClub] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://api.mariostrikers.gg/clubs/${clubid}/roster`)
            .then(data => {
                setClub(data.data);
                setIsLoading(false);
            })
            .catch(err => {
                console.error(err);
                setIsLoading(false);
            })
    }, []);

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
            <div className="columns">
                <div className="column is-2"/>
                <div className="column is-8">
                    <p className="title">
                        Club Profile
                    </p>
                </div>
                <div className="column is-2"/>
            </div>
            {buildClubProfile(club)}
            <div className="columns">
                <div className="column is-2"/>
                <div className="column is-8">
                    <p className="title">
                        Club Members
                    </p>
                </div>
                <div className="column is-2"/>
            </div>

            {buildClubRoster(isLoading, club)}

        </div>

    );
};

function buildClubProfile(club) {
    return (
        <div className="columns">
            <div className="column is-2"/>
            <div className="column is-2">
                <figure className="image is-128x128">
                    {buildTeamImgElement(club.logo)}
                </figure>
                {buildClubJoinConditions(club.joinConditions)}
            </div>
            <div className="column is-6">
                <section className="hero is-small is-link">
                    <div className="hero-body">
                        <p className="title">
                            {club.name}
                        </p>
                        <p className="subtitle">
                            {club.tag} <br />
                            {club.region} <br />
                            {club.discordServer}
                        </p>
                    </div>
                </section>
            </div>
            <div className="column is-2"/>
        </div>);
}

function buildTeamImgElement(logo) {
    if (!logo) {
        return <img src={no_img}/>;
    } else {
        return <a href={logo} target="_blank">
            <img src={logo}/>
        </a>;
    }
}

function buildClubJoinConditions(joinConditions) {
    if (!joinConditions) {
        return <div/>;
    } else if (joinConditions.trim().toLowerCase() === "Open to Anyone".toLowerCase()) {
        return <span className="tag is-success">{joinConditions}</span>;
    } else {
        return <span className="tag is-warning">{joinConditions}</span>;
    }
}

function buildClubRoster(isLoading, club) {
    if (!isLoading && club && club.roster && club.roster.length > 0) {
        return (
            <div className="columns">
                <div className="column is-2"/>
                <div className="column is-6" id="placeholder-table-while-club-is-loading">
                    <span className="tag">{club.roster[0].name} {club.roster[0].country}</span>
                </div>
                <div className="column is-2"/>
            </div>
        );
    } else {
        return (
            <div className="columns">
                <div className="column is-2"/>
                <div className="column is-6" id="placeholder-table-while-club-is-loading"/>
                <div className="column is-2"/>
            </div>
        );
    }
}

export default Club;