import "./MSLRanking.css";

import React, {useEffect, useState} from "react";
import Papa from "papaparse";

const MSLRanking = ({gametype, gamemode, region}) => {

    const mapRankings = {
        "3-1v1-eu": {
            "gid": "200348157",
            "desc": "Mario Strikers: Battle League 1v1 (Europe/Africa)"
        },
        "3-2v2-eu": {
            "gid": "1022618277",
            "desc": "Mario Strikers: Battle League 2v2 (Europe/Africa)"
        },
        "3-1v1-na": {
            "gid": "474510043",
            "desc": "Mario Strikers: Battle League 1v1 (North America)"
        },
        "3-2v2-na": {
            "gid": "1931330330",
            "desc": "Mario Strikers: Battle League 2v2 (North America)"
        }
    };

    const context = mapRankings[makeKey(gametype, gamemode, region)];
    const sheetPublicUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT7L53RjNQmG_dB9gaCJeZF-TywdO-kjOBp0rzFrX8ViEn6SE5uyqcX7OfveHYIIUrUOtBIs-MwzUFh/pub?output=csv";
    const [rankings, setRankings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        Papa.parse(`${sheetPublicUrl}&gid=${context.gid}`, {
            download: true,
            header: true,
            complete: (res) => {
                // console.log(JSON.stringify(res));
                setRankings(res.data);
                setIsLoading(false);
            }
        });
    }, [gametype, gamemode, region]);

    return <div>
        <div className="columns">
            <div className="column">
                <div className="columns">
                    <div className="column is-2"/>
                    <div className="column is-8">
                        <section className="hero is-small is-link">
                            <div className="hero-body">
                                <p className="title">
                                    MSL Rankings for {context.desc}
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

};

function makeKey(type, mode, region) {
    return `${type.trim()}-${mode.trim()}-${region.trim()}`.toLowerCase();
}

export function trimEmptyRankings(rankings) {
    if (rankings && rankings.length > 0) {
        const first2Keys = extractFirst2Keys(rankings[0]);
        return rankings.filter((r) =>
            first2Keys.reduce((aggr, k) => r[k] ? ++aggr : aggr, 0) >= 2
        ).map((r) => {
            var newR = {};
            Object.keys(r).forEach((k) => {
                if (k) {
                    newR[k] = r[k];
                }
            });
            return newR;
        });
    }
    return [];
}

function extractFirst2Keys(r) {
    return Object.keys(r).reduce(
        (aggr, k) => {
            if (aggr.length < 2 && k) {
                aggr.push(k);
            }
            return aggr;
        }, []);
}

function buildRankingTable(isLoading, rankings) {
    const theId = isLoading ? "placeholder-table-while-mslrankings-are-loading" : "column-for-rankings-table";
    const theRankings = trimEmptyRankings(rankings);
    return <div className="column is-8" id={theId}>
        <div className="box">
            <div className="table-container">
                <table className="table is-fullwidth is-fullheight is-narrow" id={"mslrankings-table"}>
                    <thead>
                    {buildRankingTableHeader(isLoading, theRankings)}
                    </thead>
                    <tbody>
                    {buildRankingTableBody(isLoading, theRankings)}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}

function buildRankingTableHeader(isLoading, rankings) {
    if (isLoading || !rankings || rankings.length === 0) {
        return <tr>
            <th>#</th>
            <th>Player Name</th>
            <th>Rating</th>
            <th></th>
            <th></th>
        </tr>
    } else {
        return <tr id={"ranking-row-header"}>
            {Object.keys(rankings[0]).map(k => <th>{k}</th>)}
        </tr>
    }
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
                {Object.keys(ranking).map((k, i) => <td className={"ranking-cell-"+i}>{ranking[k]}</td>)}
            </tr>);
    }
}

export default MSLRanking;
