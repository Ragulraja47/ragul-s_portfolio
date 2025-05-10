import logo from '../assets/raviKumarLogo.webp';
import { FaGithub, FaInstagram, FaLinkedin, FaSlack } from 'react-icons/fa';
function Navbar(){

    return(
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="home">
                <img src={logo}  alt="Logo" className="mx-2" width={50} height={33} />
                </a>
            </div>

            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https:linked-in link" 
                target="blank" rel='noopener noreferrer'
                aria-label='LinkedIn'>
                    <FaLinkedin/>
                </a>
                <a href="https:linked-in link" 
                target="blank" rel='noopener noreferrer'
                aria-label='GitHub'>
                    <FaGithub/>
                </a>
                <a href="https:linked-in link" 
                target="blank" rel='noopener noreferrer'
                aria-label='Instagram'>
                    <FaInstagram/>                   
                </a>
                <a href="https:linked-in link" 
                target="blank" rel='noopener noreferrer'
                aria-label='Slack'>
                   <FaSlack/>
                </a>
            </div>

        </nav>
    )
}
export default Navbar;