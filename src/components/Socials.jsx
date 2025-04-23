import './Socials.css'
import { FaInstagram, FaTiktok, FaTwitter, FaWhatsapp } from 'react-icons/fa'


function Socials() {
    return (
        <div className="socials">
            <a href="https://www.instagram.com" target="_blank"><FaInstagram /></a>
            <a href="https://www.tiktok.com" target="_blank"><FaTiktok /></a>
            <a href="https://twitter.com" target="_blank"><FaTwitter /></a> {/* En vez de FaXTwitter */}
            <a href="https://wa.me/XXXXXXXXXX" target="_blank"><FaWhatsapp /></a>
        </div>

    )
}

export default Socials
