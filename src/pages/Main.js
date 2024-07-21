import Header from '../components/Header';
import Footer from '../components/Footer';
import Share_screen from '../components/Share_screen';
import '../styles/Main.css';
import Ad from '../components/Ad';

function Main() {

    return(
        <div classname="main-contents">
            <div classname="real-time-popular-posts">
                <h3>실시간 인기 게시물</h3>
            </div>

            <Ad/>

            <div classname="recent-posts">
                <h3>최근 게시물</h3>
            </div>

            <div classname="pets">
                <h3>펫츠</h3>
            </div>

            <Ad/>

            <div classname="login-information">
                <p>___님 반갑습니다.</p>
            </div>

            <div classname="real-time-search-terms">
                <h3>실시간 검색어</h3>
                    <div className='real-time-search-terms-rank'>
                        <h5>1</h5>
                        <h5>2</h5>
                        <h5>3</h5>
                        <h6>4</h6>
                        <h6>5</h6>
                        <h6>6</h6>
                        <h6>7</h6>
                        <h6>8</h6>
                        <h6>9</h6>
                        <h6>10</h6>

                    </div>
            </div>

            <div classname="pet-news">
                <h3>펫 뉴스</h3> <p>| 한국반려동물신문</p>
            </div>
        </div>
    )
}
export default Main;