import './home.css';
import {enableScroll, disableScroll} from '../../utils/scroll';
import PartnerBubble from '../partner-bubble/PartnerBubble';

const Home = () => {

    return (
    <div className="home">
        <div className="base-container home-container">

        </div>
        < div className="about-container home-container">
            <h1 className="home-header">ABOUT US</h1>           
            About us information is going here
        </div>
        <div className="partners-container home-container">
            <h1 className="home-header">PARTNERS</h1>
            <div className="partnerBubble">
            <PartnerBubble  title="Strikers Discord" description="The one true discord for Mario Strikers" image="discord_logo.png" link="https://discord.gg/mariostrikers" />
            </div>
        </div>
    </div>
    )
}
export default Home;