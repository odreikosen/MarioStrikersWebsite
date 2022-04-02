import "./ranking.css";

import axios from "axios"
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import RankingsToggle from './RankingsToggle';
const Ranking = () => {
    const [rankings, setRankings] = useState([]);

    useEffect(() => {
        const gametype = window.location.search.split("=")[1] === "msc" ? 1 : 2;
        axios.get(`http://3.83.120.24:3000/ratings?gametype=${gametype}`)
        .then(data =>{
            console.log(data)
            setRankings(data.data)
        })
    }, [])
    return (
        <div>
            <Accordion>
            {rankings.map((ranking, i) =>
                <div key={i} className="ranking-card-container">
                    <Card className="ranking-card">
                        <Card.Header>
                            <RankingsToggle name={ranking.name} rank={ranking.rank} rating={ranking.rating} eventKey={i} />
                            </Card.Header>
                        <Accordion.Collapse eventKey={i}>
                            <Card.Body>Player profile here</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </div>
            )}
            </Accordion>
        </div>
    )
   
}

export default Ranking;