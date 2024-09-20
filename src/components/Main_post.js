import '../styles/Main_post.css';

function Main_post() {
    return(
        <div className="Main_post">
            <div className='Main_post1'>
                <h4>카테고리</h4>
                <h4>|</h4>
                <h4>제목</h4>
            </div>
            <div className='Main_post2'>         
                <h4>조회</h4>
                <h4>댓글</h4>
                <h4>|</h4>
                <h4>날짜</h4>
            </div>    
        </div>
    )
}

export default Main_post;