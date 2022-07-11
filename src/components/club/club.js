import "./club.css";

import axios from "axios";
import React, {useEffect, useLayoutEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
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
                    <p className="title big-header">
                        Club Profile
                    </p>
                </div>
                <div className="column is-2"/>
            </div>
            {buildClubProfile(club)}

            <div className="columns">
                <div className="column is-2"/>
                <div className="column is-8">
                    <p className="title big-header">
                        Club Members
                    </p>
                </div>
                <div className="column is-2"/>
            </div>
            <div className="columns">
                <div className="column is-2"/>
                <div className="column is-8" id="club-roster-column">
                    <div className="box">
                        <div className="table-container">
                            <table className="table is-fullwidth is-fullheight is-narrow" id={"club-roster"}>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Member Name</th>
                                    <th>Country</th>
                                    <th>Switch Friend Code(s)</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                {buildClubRosterBody(isLoading, club)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="column is-2"/>
            </div>

        </div>

    );
};

function buildClubProfile(club) {
    return (
        <div className="columns">
            <div className="column is-2"/>
            <div className="column is-2 club-logo-container">
                <figure className="image is-128x128">
                    {buildTeamImgElement(club.logo)}
                </figure>
            </div>
            <div className="column is-6">
                <section className="hero is-small is-link">
                    <div className="hero-body">
                        <p className="title">
                            {club.name}  {buildClubJoinConditions(club.joinConditions)}
                        </p>
                        <p className="subtitle">
                            Tag: {club.tag} <br />
                            Region: {club.region} <br />
                            Discord Server: {club.discordServer ? <a href={club.discordServer} target="_blank" rel="noopener noreferrer" className="is-underlined">{club.discordServer}</a> : ""} <br />
                            Member Count: {club.roster ? club.roster.length : 0}
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

function buildClubRosterBody(isLoading, club) {
    if (isLoading || !club || !club.roster) {
        return <tr key={"roster-row0"}>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    } else {
        return club.roster.map((member, num) =>
            <tr key={"roster-row" + num}>
                <td>
                    {num + 1}
                </td>
                <td>{member.name}</td>
                <td>{member.country}</td>
                <td>{member.switchFriendCodes ? member.switchFriendCodes.map((fc, i) => <div>{fc}<br/></div>) : ""}</td>
                <td>{club.owner === member.discordId ? "owner" : (member.isOfficer ? "officer" : "")}</td>
            </tr>);
    }
}

export default Club;