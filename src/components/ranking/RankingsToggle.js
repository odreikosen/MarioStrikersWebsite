import "./ranking.css";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import React from 'react';

const RankingsToggle = ({name , rank, rating, eventKey}) => {
    const clicked = useAccordionButton(eventKey,() => (1));
    return (
        <div onClick={clicked} className="clickable-header">
            <span className={rank}>{name}    {rating}</span>
        </div>
    )
}

export default RankingsToggle;