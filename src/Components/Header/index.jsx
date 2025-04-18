
import './style.css'
import Logo from '../../assets/logo.webp'

function Header() {

    return (

        <>

            <header>
                <nav>
                    <div className='logo-side'>
                        <img src={Logo} alt="Klaus Duarte" className='logo' />
                        <span>Klaus Duarte</span>
                    </div>

                    <div className='nav-side'>

                        <a href="#">Home</a>
                        <a href="#">Home</a>
                        <a href="#">Home</a>
                        <a href="#">Home</a>

                    </div>
                </nav>
            </header>

        </>


    )
}

export default Header