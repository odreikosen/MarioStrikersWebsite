import "./club.css";

import axios from "axios";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import no_img from "../../assets/no-image-icon.png";

const Club = () => {
    let { clubid } = useParams();
    const [club, setClub] = useState(null);
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
            <div className="columns">
                <div className="column is-2"/>
                <div className="column is-2">
                    <figure className="image is-128x128">
                        {buildTeamImgElement(club.logo)}
                    </figure>
                    {buildClubJoinConditions(club.joinConditions)}
                </div>
                <div className="column is-6">
                    <span className="tag">{club.name} [{club.tag}]</span>
                    bla bla
                </div>
                <div className="column is-2"/>
            </div>
            <div className="columns">
                <div className="column is-2"/>
                <div className="column is-8">
                    <p className="title">
                        Club Members
                    </p>
                </div>
                <div className="column is-2"/>
            </div>
            <div className="columns">
                <div className="column is-2"/>
                <div className="column is-6">
                    <span className="tag">{club.roster[0].name} [{club.roster[0].country}]</span>
                    bla bla
                </div>
                <div className="column is-2"/>
            </div>
        </div>

    );

};

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

export default Club;