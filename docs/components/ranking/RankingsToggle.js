import "./ranking.css";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

const RankingsToggle = ({name , rank, rating, eventKey}) => {
    const clicked = useAccordionButton(eventKey,() => (1));
    console.log(rank)
    return (
        <div onClick={clicked} className="clickable-header">
            <span className={rank}>{name}    {rating}</span>
        </div>
    )
}

export default RankingsToggle;