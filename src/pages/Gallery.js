import '../styles/Gallery.css';
import Gallery_post from '../components/Gallery_post';

function Gallery() {
    return(
        <div className='Gallery'>
            <div className='Gallery1'>
                <Gallery_post/><Gallery_post/><Gallery_post/>
            </div>
            <div className='Gallery2'>
                <Gallery_post/><Gallery_post/><Gallery_post/>
            </div>
            <div className='Gallery3'>
                <Gallery_post/><Gallery_post/><Gallery_post/>
            </div>
        </div>
    )
}
export default Gallery;