import '../styles/Community_post.css';
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa6";

function Community_post() {
    return (  
        <>  
        <div className="community-post">
            <div className="community-post-left">
                <h5>카테고리</h5>
                <h2>제목입니다.</h2>
                <h6>(프로필) 닉네임  |  oo동  |  14분 전  |  조회 52</h6>
            </div>
            <div className="community-post-right">
                <img src=""></img>
                <div className='community-post-right-heart-icon'><h3><FaHeart /></h3></div>
                <h5>좋아요 수</h5>
                <div className='community-post-right-comment-icon'><h3><FaComment /></h3> </div>
                <h5>댓글 수</h5>
            </div>
        </div>
        
        <div className="community-post">
            <div className="community-post-left">
                <h5>카테고리</h5>
                <h2>제목입니다.</h2>
                <h6>(프로필) 닉네임  |  oo동  |  14분 전  |  조회 52</h6>
            </div>
            <div className="community-post-right">
                <img src=""></img>
                <div className='community-post-right-heart-icon'><h3><FaHeart /></h3></div>
                <h5>좋아요 수</h5>
                <div className='community-post-right-comment-icon'><h3><FaComment /></h3> </div>
                <h5>댓글 수</h5>
            </div>
        </div>
        </>
    )
}

export default Community_post;