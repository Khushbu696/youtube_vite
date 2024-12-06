import menu from '../../assets/hambarger.png'
import logo from '../../assets/Youtube_logo.png'
import home from '../../assets/home.png'
import explore from '../../assets/explore.png'
import shorts from '../../assets/shorts.png'
import subscription from '../../assets/subscription.png'
import library from '../../assets/library.png'
import history from '../../assets/history.png'
import videos from '../../assets/your_video.png'
import later from '../../assets/watch_later.png'
import liked from '../../assets/liked.png'
import more from '../../assets/down_arrow.png'
import nadir from '../../assets/Ellipse1.png'
import coke from '../../assets/Ellipse(1.1).png'
import mkbhd from '../../assets/Ellipse(1.2).png'
import figma from '../../assets/Ellipse(1.3).png'
import atc from '../../assets/Ellipse(1.4).png'
import alux from '../../assets/Ellipse(1.5).png'

function Sidebar () {

    return (
        <>
            <div className="left">
                <div className="one">
                    <img src={menu} alt="menu icon" id="menu"/>
                    <img src={logo} alt="youtube logo" id="logo" />
                </div>
                <div className="two">
                    <div><img src={home} alt="home icon" id="home" /><span>Home</span></div>
                    <div><img src={explore} alt="explore icon" id="explore" /><span>Explores</span></div>
                    <div><img src={shorts} alt="shorts icon" id="shorts" /><span>Shorts</span></div>
                    <div><img src={subscription} alt="subscription icon" id="subscriptions" /><span>Subscriptons</span></div>
                </div>
                <div className="three">
                    <div><img src={library} alt="library icon" id="library" /><span>Library</span></div>
                    <div><img src={history} alt="history icon" id="history" /><span>History</span></div>
                    <div><img src={videos} alt="videos icon" id="videos" /><span>Your videos</span></div>
                    <div><img src={later} alt="watchlater icon" id="watchlater" /><span>Watch later</span></div>
                    <div><img src={liked} alt="liked icon" id="liked" /><span>Liked videos</span></div>
                    <div><img src={more} alt="downarrow icon" id="downarrow" /><span>Show more</span></div>
                </div>
                <div className="four">
                    <h3>SUBCIRPTIONS</h3>
                    <div><img src={nadir} alt="icon" id="nadir" /><span>Nadir On The Go</span></div>
                    <div><img src={coke} alt="icon" id="coke" /><span>Coke Studio Bangla</span></div>
                    <div><img src={mkbhd} alt="icon" id="mkbhd" /><span>MKBHD</span></div>
                    <div><img src={figma} alt="icon" id="figma" /><span>Figma</span></div>
                    <div><img src={atc} alt="icon" id="atc" /><span>ATC Android ToTo C...</span></div>
                    <div><img src={alux} alt="icon" id="alux" /><span>Alux.com</span></div>
                </div>
            </div>
        </>
    )
}

export default Sidebar