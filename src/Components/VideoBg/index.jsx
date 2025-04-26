import VideoBG from '../../assets/dance-video.mp4'
import './style.css'

function Video() {


    return (

        <div className="video-dance-box">
            <video className='video-dance' src={VideoBG} autoPlay loop muted></video>
        </div>

    )
}

export default Video