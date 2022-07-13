import "./clubs.css";

import axios from "axios";
import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';

import mario_img from '../../assets/mario.retourne.bw.png';
import no_img from '../../assets/no-image-icon.png';
import LinkDiscordServer from '../links/discordserver';

const Clubs = () => {
    const [clubs, setClubs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://api.mariostrikers.gg/clubs?with_member_count=true`)
            .then(data => {
                setClubs(data.data);
                setIsLoading(false);
            })
            .catch(err => {
                console.error(err);
                setIsLoading(false);
            })
    }, []);

    return (
        <div>
            <div className="columns">
                <div className="column">
                    <div className="columns">
                        <div className="column is-2"/>
                        <div className="column is-2">
                            <figure className="image">
                                <img src={mario_img}/>
                            </figure>
                        </div>
                        <div className="column is-6">
                            <section className="hero is-small is-link">
                                <div className="hero-body">
                                    <p className="title">
                                        Clubs
                                    </p>
                                    <p className="subtitle">
                                        Here you'll find all Clubs registered on the
                                        <LinkDiscordServer/>.
                                        If you wish to join a Club, reach out to their owner first.
                                        Alternatively, you can create a new Club from scratch and add players by
                                        yourself!<br/>
                                        Do note that, although Clubs are a Battle League specific convention, with a max
                                        roster of 20 players, on
                                        this server Clubs expand across all the Strikers games and do not have any
                                        roster
                                        size limit.
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
                {buildClubTable(isLoading, clubs)}
                <div className="column is-2"/>
            </div>
        </div>

    );

};

function buildClubTable(isLoading, clubs) {
    const theId = isLoading ? "placeholder-table-while-clubs-are-loading" : "column-for-clubs-table";
    return <div className="column is-8" id={theId}>
        <div className="box">
            <div className="table-container">
                <table className="table is-fullwidth is-fullheight is-hoverable" id={"clubs-table"}>
                    <thead>
                    <tr>
                        <th>Logo</th>
                        <th>Club Name</th>
                        <th>Club Tag</th>
                        <th>Member Count</th>
                        <th>Region</th>
                        <th><abbr title="Joining Conditions">Status</abbr></th>
                    </tr>
                    </thead>
                    <tbody>
                    {buildClubTableBody(isLoading, clubs)}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}

function buildClubTableBody(isLoading, clubs) {
    if (isLoading) {
        return <tr key={"club-row0"}>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    } else {
        return clubs.map((club, num) =>
            <tr key={"club-row" + num}>
                <td>
                    <figure className="image is-64x64">
                        {buildTeamImgElement(club.logo)}
                    </figure>
                </td>
                <td data-testid={"club-name-" + num}>
                    <Link to={"/club/"+club.id} className="clickable-club">{club.name}</Link>
                </td>
                <td>{club.tag}</td>
                <td>{club.memberCount}</td>
                <td>{club.region}</td>
                <td>{buildClubJoinConditions(club.joinConditions)}</td>
            </tr>);
    }
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
    if (joinConditions && joinConditions.trim().toLowerCase() === "Open to Anyone".toLowerCase()) {
        return <span className="tag is-success">{joinConditions}</span>;
    } else {
        return <span className="tag is-warning">{joinConditions}</span>;
    }
}

export default Clubs;