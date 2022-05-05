import Image from 'react-bootstrap/Image'
import './PartnerBubble.css'
import React from 'react';


const PartnerBubble = ({title, image, link}) => {
    return (
        <div className="partnerProfile">

            <a href={link} className="profilePhoto">
                <Image  src={require(`../../assets/${image}`)} alt={title} className="rounded-circle partnerImg"/>
            </a>
            <span className="partnerTitle">{title}</span>

        </div>
    )
}
export default PartnerBubble;