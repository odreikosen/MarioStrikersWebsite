import "./ranking.css";

import axios from "axios"
import React, {useEffect, useState} from "react";
import sms_peach_img from "../../assets/sms.peach.bw.png";
import msc_peach_img from "../../assets/msc.peach.bw.png";
import msbl_peach_img from "../../assets/msbl.peach.bw.png";
import rookie_img from "../../assets/rank_rookie.png";
import professional_img from "../../assets/rank_professional.png";
import superstar_img from "../../assets/rank_superstar.png";
import legend_img from "../../assets/rank_legend.png";
import megastriker_img from "../../assets/rank_megastriker.png";
import LinkDiscordServer from "../links/discordserver";

const Ranking = ({gametype}) => {

    const mapGameNames = {
        "1": "Mario Strikers Charged",
        "2": "Super Mario Strikers",
        "3": "Mario Strikers: Battle League"
    };

    const mapGameImgs = {
        "1": msc_peach_img,
        "2": sms_peach_img,
        "3": msbl_peach_img
    };

    const [rankings, setRankings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const gameName = mapGameNames[gametype];
    const gameImg = mapGameImgs[gametype];

    useEffect(() => {
        axios.get(`https://api.mariostrikers.gg/ratings?gametype=${gametype}`)
            .then(data => {
                setRankings(data.data.sort((a, b) => parseInt(b.rating, 10) - parseInt(a.rating, 10)));
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
                        <div className="column is-2"/>
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
                                        Register on the <LinkDiscordServer/> to join the elite!
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
                {buildRankingTable(isLoading, rankings)}
                <div className="column is-2"/>
            </div>
        </div>

    );

};


function buildRankingTable(isLoading, rankings) {
    const theId = isLoading ? "placeholder-table-while-rankings-are-loading" : "column-for-rankings-table";
    return <div className="column is-8" id={theId}>
        <div className="box">
            <div className="table-container">
                <table className="table is-fullwidth is-fullheight is-narrow" id={"rankings-table"}>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th className={"player-name"}>Player Name</th>
                        <th>Rating</th>
                        <th>Wins - Losses</th>
                        <th>Rank</th>
                    </tr>
                    </thead>
                    <tbody>
                    {buildRankingTableBody(isLoading, rankings)}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}

function buildRankingTableBody(isLoading, rankings) {
    if (isLoading) {
        return <tr key={"ranking-row0"}>
            <td/>
            <td/>
            <td/>
            <td/>
            <td/>
        </tr>
    } else {
        return rankings.map((ranking, num) =>
            <tr key={"ranking-row" + num}>
                <td>{num + 1}</td>
                <td data-testid={"player-name-" + num} className={"player-name"}>{ranking.name}</td>
                <td>{Number(ranking.rating).toLocaleString("en")}</td>
                <td>{ranking.numWins} - {ranking.numLosses}</td>
                <td data-testid={"player-rank-icon-" + num}>{buildRank(ranking.rank)}</td>
            </tr>);
    }
}

function buildRank(rank) {
    const mapRankImgs = {
        "rookie": rookie_img,
        "professional": professional_img,
        "superstar": superstar_img,
        "legend": legend_img,
        "megastriker": megastriker_img
    };
    const normalizedRank = rank ? rank.trim().toLowerCase() : null;
    if (normalizedRank && normalizedRank in mapRankImgs) {
        return <figure className="image is-32x32">
            <img src={mapRankImgs[normalizedRank]} title={rank} alt={{rank}}/>
        </figure>
    }
    return <span className="is-capitalized">{rank}</span>;
}

export default Ranking;
