import "./ranking.css";

import axios from "axios"
import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import RankingsToggle from './RankingsToggle';

const Ranking = ({gametype}) => {
    const [rankings, setRankings] = useState([]);
    
    useEffect(() => {
        axios.get(`https://api.mariostrikers.gg/ratings?gametype=${gametype}`)
        .then(data =>{
            setRankings(data.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [gametype])

    return (
        <div>
            <Accordion>
            {rankings.map((ranking, i) =>
                <div key={i} className="ranking-card-container">
                    <Card className="ranking-card">
                        <Card.Header className="card-header">
                            <RankingsToggle name={ranking.name} rank={ranking.rank} rating={ranking.rating} eventKey={i} />
                            </Card.Header>
                        <Accordion.Collapse eventKey={i}>
                            <Card.Body className="profile-body">Player profile here</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </div>
            )}
            </Accordion>
        </div>
    )
   
}

export default Ranking;