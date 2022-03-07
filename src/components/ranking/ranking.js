import "./ranking.css";

import axios from "axios"
import { useEffect, useState } from "react";

const Ranking = () => {
    const [rankings, setRankings] = useState({rankings: []});

    const logstuff = () => {
        console.log(rankings)
    }

    useEffect(() => {
        axios.get('http://localhost:3000/ratings?gametype=1')
        .then(data =>{
            console.log(data)
            setRankings(data.data)
        })
    }, [])
    return (
        <div>
            {console.log(rankings)}
            {Object.keys(rankings).map(ranking => 
                ranking.line
            )}
            <button onClick={logstuff}></button>
        </div>
    )
   
}

export default Ranking;