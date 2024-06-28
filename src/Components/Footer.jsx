import logo_full from '../assets/logo_full.svg';
import x_logo from '../assets/X_logo.svg';
import telegram_logo from '../assets/telegram_logo.svg';
import Button from './Button'

export default function Footer() {
    return (
        
        <div className="footer">
            <div className="left-content">
                <img src={logo_full} alt="" />
                <p>Медиа-сервис для предпринимателей</p>
                <div className="footer-links">
                    <img src={x_logo} alt="" />
                    <img src={telegram_logo} alt="" />
                </div>
            </div>
            <Button title="Присоединиться" style="light" />
        </div>
        
    )
}