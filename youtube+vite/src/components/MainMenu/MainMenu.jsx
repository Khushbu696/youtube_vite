import search from '../../assets/search.png'
import create from '../../assets/create.png'
import mic from '../../assets/mic.png'
import box from '../../assets/more.png'
import bell from '../../assets/bell.png'
import profile from '../../assets/Ellipse1.png'
import left_arrow from '../../assets/leftBottom.png'
import thumbnail from '../../assets/Thumbnail.png'
import thumbnail2 from '../../assets/Thumbnail-2.png'
import thumbnail3 from '../../assets/Thumbnail-3.png'
import thumbnail4 from '../../assets/Thumbnail-4.png'
import thumbnail5 from '../../assets/Thumbnail-5.png'
import thumbnail6 from '../../assets/Thumbnail-6.png'
import thumbnail7 from '../../assets/Thumbnail-7.png'
import thumbnail8 from '../../assets/Thumbnail-8.png'
import thumbnail9 from '../../assets/Thumbnail-9.png'
import thumbnail10 from '../../assets/Thumbnail-10.png'
import thumbnail11 from '../../assets/Thumbnail-11.png'
import Ellipse41 from '../../assets/Ellipse(4.1).png'
import Ellipse42 from '../../assets/Ellipse(4.2).png'
import Ellipse43 from '../../assets/Ellipse(4.3).png'
import Ellipse44 from '../../assets/Ellipse(4.4).png'
import Ellipse45 from '../../assets/Ellipse(4.5).png'
import Ellipse46 from '../../assets/Ellipse(4.6).png'
import verified from '../../assets/verified.png'
import thumbnail1 from '../../assets/Thumbnail-1.png'

function MainMenu () {

    const data = [
        {id: 1, title: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X NAndita', text: 'Coke Studio Bangla', img_url: thumbnail8, img_url1: Ellipse41, img_url2: verified, text2: '1.5M views | 2 days ago'},

        {id: 2, title: 'Infix Note 12: Amoled | Hello G88 SoC1', text: 'ATC Android ToTo Company', img_url: thumbnail9, img_url1: Ellipse42, img_url2: verified, text2: '42M views | 2 days ago'},

        {id: 3, title: 'My first UX Design case study- This got me my first job.', text: 'Saptarshi Prakash', img_url: thumbnail10, img_url1: Ellipse43, img_url2: verified, text2: '48K views | 1 years ago'},

        {id: 4, title: 'My Mix', text: 'Lopamudra Mitra, Anupam Roy, and more', img_url: thumbnail11},

        {id: 5, title: 'UX Design - What is it? (From AJ&Smart)', text: 'AJ&Smart', img_url: thumbnail4, img_url1: Ellipse44, img_url2: verified, text2: '150KM views | 3 years ago'},

        {id: 6, title: 'Mix-Mombati | Mohon Sharif | Dhakaiya Dose | Mahib Ashan ft Anika', text: 'Mohon Sharif, Odd Signature, Shayan Chowdhruy Amob, and more', img_url: thumbnail5},

        {id: 7, title: 'lorem lorem lorem lorem lorem | 48 VISA-FREE', text: 'Nadir On The Go', img_url: thumbnail6, img_url1: Ellipse45, img_url2: verified, text2: '1.7M views | 1 years ago'},

        {id: 8, title: '14 Advanced Tips to Design FASTER in Figma', text: 'Mizko', img_url: thumbnail7, img_url1: Ellipse46, img_url2: verified, text2: '53K views | 1 years ago'},

        {id: 9, img_url: thumbnail},

        {id: 9, img_url: thumbnail1},

        {id: 9, img_url: thumbnail2},

        {id: 9, img_url: thumbnail3},
    ]

    return(
        <>
            <div className="right">
                <div className="top">
                    <div className="search">
                        <div className='aa'>
                        <span>Search</span>
                        </div>
                        <div className='bb'>
                        <img src={search} alt="search icon" id="search" />
                        </div>
                        <div className='cc'>
                            <img src={mic} alt="mic" id="mic" />
                        </div>
                    </div>
                    <div className="right_icons">
                        <img src={create} alt="create icon" id="create" /><img src={box} alt="box icon" id="box" /><img src={bell} alt="bell icon" id="bell" /><img src={profile} alt="profile icon" id="profile" />
                    </div>
                </div>
                <div className="top2">
                    <span id="all">All</span>
                    <span>Cook Studio</span>
                    <span>UX</span>
                    <span>Case Study</span>
                    <span>Music</span>
                    <span>Bnagla Lofi</span>
                    <span>Tour</span>
                    <span>Saintmartin</span>
                    <span>Tech</span>
                    <span>iPhone 13</span>
                    <span>User Interface Design</span>
                    <span>Computer</span><img src={left_arrow} alt="left arrow" id="leftarrow" />
                </div>

                <div className="middle">
                    {data.map((i) => (
                        <div key={i.id} className='details'>
                            <img src={i.img_url} alt="image" id='thumbnail_image'/> <br/>
                            <div className="info">
                                <div>
                                <img src={i.img_url1} alt="" id='icon_image'/>
                                </div>
                                <div>
                                    <span id='title_text'>{i.title}</span> <br/>
                                    <span id='small_text'>{i.text}</span><img src={i.img_url2} alt="" id='verified_image'/> <br/>
                                    <span id='small_text'>{i.text2}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default MainMenu