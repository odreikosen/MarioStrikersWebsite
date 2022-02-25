import logo from '../../assets/logo.svg'
import './home.css';
import {enableScroll, disableScroll} from '../../utils/scroll';

const Home = () => {
    const test = (event) => {
        console.log(event);
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth'
          });
    }

    const containers = ['base', 'about','partners']
    const mapping = {
        'base': 0,
        'about': 1080,
        'partners': 2160
    }

    let currContainer = 0;
    let scrollReady = true;

    document.addEventListener('scroll', function(e, prev) {
        if (scrollReady) {
            disableScroll();
            scrollReady = false;
            mapping[containers[currContainer]] < window.scrollY ? currContainer += 1 : currContainer -= 1;
            if (currContainer === containers.length) {
                currContainer = containers.length - 1;
            }
            if (currContainer === -1) {
                currContainer = 0;
            }
            window.scrollTo({
                top: mapping[containers[currContainer]],
                left: 100,
                behavior: 'smooth'
              });
            setTimeout(() => {
                scrollReady = true
                enableScroll();
            },1000);
        }
    });
    

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
            Partners are going here
        </div>
    </div>
    )
}
export default Home;