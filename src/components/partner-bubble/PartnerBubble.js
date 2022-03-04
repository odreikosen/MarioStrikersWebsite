import Image from 'react-bootstrap/Image'
import './PartnerBubble.css'

const PartnerBubble = ({title, description, image, link}) => {
    return (
        <div className="partnerProfile">

            <a href={link} className="profilePhoto">

                <Image  src={require(`../../assets/${image}`)} alt={title} className="rounded-circle partnerImg"/>
            </a>
            <span className="partnerTitle">{title}</span>
            <span className="partnerDescription">{description}</span>

        </div>
    )
}
export default PartnerBubble;