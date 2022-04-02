import "./ranking.css";

import axios from "axios"
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card'
const Ranking = () => {
    const [rankings, setRankings] = useState([]);

    useEffect(() => {
        const gametype = window.location.search.split("=")[1] === "msc" ? 1 : 2;
        axios.get(`http://localhost:3000/ratings?gametype=${gametype}`)
        .then(data =>{
            console.log(data)
            setRankings(data.data)
        })
    }, [])
    return (
        <div>
            {rankings.map((ranking, i) =>
                <div key={i} className="ranking-card-container">
                    <Card className="ranking-card">
                        <Card.Body className={ranking.rank}>{ranking.name}   {ranking.rating}</Card.Body>
                    </Card>
                </div>
            )}
        </div>
    )
   
}

export default Ranking;