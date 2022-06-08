import "./ranking.css";

import axios from "axios"
import React, { useEffect, useState } from "react";
import sms_peach_img from "../../assets/sms.peach.bw.png";
import msc_peach_img from "../../assets/msc.peach.bw.png";
import LinkDiscordServer from "../links/discordserver";

const Ranking = ({gametype}) => {

    const [rankings, setRankings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const gameName = gametype === "1" ? "Mario Strikers Charged" : "Super Mario Strikers";
    const gameImg =  gametype === "1" ? msc_peach_img : sms_peach_img;

    useEffect(() => {
        axios.get(`https://api.mariostrikers.gg/ratings?gametype=${gametype}`)
            .then(data => {
                setRankings(data.data);
                setIsLoading(false);
            })
            .catch(err => {
                console.error(err);
                setIsLoading(false);
            })
    }, [gametype]);

    return (
        <div>
            <div className="columns">
                <div className="column">
                    <div className="columns">
                        <div className="column is-2" />
                        <div className="column is-2">
                            <figure className="image">
                                <img src={gameImg}/>
                            </figure>
                        </div>
                        <div className="column is-6">
                            <section className="hero is-small is-link">
                                <div className="hero-body">
                                    <p className="title">
                                        Rankings for {gameName}
                                    </p>
                                    <p className="subtitle">
                                        These are the rankings of the best competitive players for {gameName}.<br/>
                                        Register on the <LinkDiscordServer /> to join the elite!
                                    </p>
                                </div>
                            </section>
                        </div>
                        <div className="column is-2" />
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="column is-2" />
                {buildRankingTable(isLoading, rankings)}
                <div className="column is-2" />
            </div>
        </div>

    );
   
};


function buildRankingTable(isLoading, rankings) {
    const theId = isLoading ? "placeholder-table-while-rankings-are-loading" : "column-for-rankings-table";
    return <div className="column is-8" id={theId}>
        <table className="table is-fullwidth is-fullheight" id={"rankings-table"}>
            <thead>
            <tr>
                <th>Player Name</th>
                <th>Rating</th>
                <th>Rank</th>
            </tr>
            </thead>
            <tbody>
            {buildRankingTableBody(isLoading, rankings)}
            </tbody>
        </table>
    </div>
}

function buildRankingTableBody(isLoading, rankings) {
    if (isLoading) {
        return <tr key={"ranking-row0"}>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    }
    else {
        return rankings.map((ranking, num) =>
            <tr key={"ranking-row" + num}>
                <td data-testid={"player-name-"+num}>{ranking.name}</td>
                <td>{ranking.rating}</td>
                <td>{ranking.rank}</td>
            </tr>);
    }
}

export default Ranking;