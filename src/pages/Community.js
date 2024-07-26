import Community_post from '../components/Community_post';
import '../styles/Community.css';

function Community() {
    return(
        <>
        <div className='community-menu'>
            <h3>전체</h3>
            <h3>인기글</h3>
            <h3>Q&A</h3>
            <h3>자유게시판</h3>
            <h3>정보게시판</h3>
            <h3>먹거리</h3>
            <h3>용품</h3>
            <h3>산책/장소</h3>
        </div>
        <Community_post/>
        </>
    )
}
export default Community;
