import BannerHero from '../../assets/banner.webp'
import './style.css'
import Video from '../../assets/video-bg.mp4'

function Hero() {


    return (

        <>
            <section className='hero-section'>

                <video src={Video} autoPlay muted loop></video>

                <img className='image' src={BannerHero}></img>
            </section>


        </>

    )
}

export default Hero

