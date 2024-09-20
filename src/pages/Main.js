import Ad from '../components/Ad';
import Login_status_off from '../components/Login_status_off';
import '../styles/Main.css';
import Main_post from '../components/Main_post';
import Pets_video from '../components/Pets_video';
function Main() {

    return(
        <div className="main-contents">

            <div className='main-contents-left'>
                <div className="real-time-popular-posts">
                    <h3>실시간 인기 게시물</h3>
                    <Main_post/>
                    <div className='division'/>
                    <Main_post/>
                    <div className='division'/>
                    <Main_post/>
                    <div className='division'/>
                    <Main_post/>
                    <div className='division'/>
                    <Main_post/>
                </div>
                <Ad/>
                <div className="recent-posts">
                    <h3>최근 게시물</h3>
                    <Main_post/>
                    <div className='division'/>
                    <Main_post/>
                    <div className='division'/>
                    <Main_post/>
                    <div className='division'/>
                    <Main_post/>
                    <div className='division'/>
                    <Main_post/>
                </div>

                <div className="main-pets">
                    <h3>펫츠</h3>
                    <Pets_video/>
                </div>
                <Ad/>
            </div>

            <div className='main-contents-right'>
                <div className="login-information">
                    <Login_status_off/>
                </div>

                <div className="real-time-search-terms">
                <h3>실시간 검색어</h3>
                    <div className='real-time-search-terms-rank'>
                        <h4>1</h4>
                        <h4>2</h4>
                        <h4>3</h4>
                        <h5>4</h5>
                        <h5>5</h5>
                        <h5>6</h5>
                        <h5>7</h5>
                        <h5>8</h5>
                        <h5>9</h5>
                        <h5>10</h5>
                    </div>
                </div>
                <div className="pet-news">
                    <h3>펫 뉴스</h3> <p>| 한국반려동물신문</p>
                </div>
            </div>

        </div>
    )
}
export default Main;