import Ad from '../components/Ad';
import '../styles/Main.css';
function Main() {

    return(
        <div className="main-contents">
            <div className="real-time-popular-posts">
                <h3>실시간 인기 게시물</h3>
            </div>

            <Ad/>

            <div className="recent-posts">
                <h3>최근 게시물</h3>
            </div>

            <div className="pets">
                <h3>펫츠</h3>
            </div>

            <Ad/>

            <div className="login-information">
                <p>___님 반갑습니다.</p>
            </div>

            <div className="real-time-search-terms">
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

            <div className="pet-news">
                <h3>펫 뉴스</h3> <p>| 한국반려동물신문</p>
            </div>
        </div>
    )
}
export default Main;