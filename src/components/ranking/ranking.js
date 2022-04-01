import "./ranking.css";

import axios from "axios"
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card'
const Ranking = () => {
    const [rankings, setRankings] = useState([]);

    const logstuff = () => {
        console.log(rankings)
    }

    useEffect(() => {
        const gametype = window.location.search.split("=")[1] === "msc" ? 1 : 2;
        axios.get(`http://3.83.120.24:3000/ratings?gametype=${gametype}`)
        .then(data =>{
            setRankings(data.data)
        })
    }, [])
    return (
        <div>
            {rankings.map((ranking, i) => 
               <div key={i} className="ranking-card-container">
                    <Card className="ranking-card">
                        <Card.Body>{ranking.line}</Card.Body>
                    </Card>
                </div>
            )}
            <button onClick={logstuff}></button>
        </div>
    )
   
}

export default Ranking;