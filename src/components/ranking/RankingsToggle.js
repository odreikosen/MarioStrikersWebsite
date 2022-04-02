import "./ranking.css";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

const RankingsToggle = ({name , rank, rating, eventKey}) => {
    const clicked = useAccordionButton(eventKey,() => (1));
    console.log(rank)
    return (
        <div>
            <a className={rank} onClick={clicked}>{name}    {rating}</a>
        </div>
    )
}

export default RankingsToggle;