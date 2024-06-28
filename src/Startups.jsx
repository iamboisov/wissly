import Navigation from './Components/Navigation'
import Footer from './Components/Footer'
import Button from './Components/Button'
import Startup from './Components/Startup'
import startup_card2 from './assets/wissly-startup2.svg'
import idea_card from './assets/ideas-cards.svg'

export default function Startups() {
    return (
        <>
        <Navigation />
        <div className="divider"></div>

        <div className="startup-last">
            <div className="startup-last-img">
                <img src={startup_card2} alt=""/>
            </div>
            <div className="startup-last-text">
                <p>Стартапы</p>
                <div className="startup-last-text-header">
                    <h2>История и аналитика мировых стартапов</h2>
                    <div className="startup-last-text-header-text">
                        <p>Самая свежая и практическая информация для вас и вашего бизнеса. Читайте в любом месте и в любое время.</p>
                        <Button title="Узнать больше" style="light"/>
                    </div>
                </div>
            </div>
            
        </div>

        <div className="startup-container">
            <Startup title="Wissly" text="Медиа-сервис для предпринимателей" tags={['Медиа', 'Успех', '2019-2024']}/>
            <Startup title="Cardlee" text="Новый способ создавать сайты" tags={['Дизайн', 'Успех', '2023-2024']}/>
            <Startup title="Shopify" text="Платформа для интернет-магазинов" tags={['E-comm', 'Успех', '2012-2024']}/>
            <Startup title="Klarna" text="Совершайте покупки частями" tags={['FinTech', 'Успех', '2019-2024']}/>
        </div>


        <div className="ideas-card">
            <div className="ideas-text">
                <p>Стартапы</p>
                <div className="ideas-header">
                    <h2>История и аналитика мировых стартапов</h2>
                    <div className="ideas-text">
                        <p>Самая свежая и практическая информация для вас и вашего бизнеса. Читайте в любом месте и в любое время.</p>
                        <Button title="Узнать больше" style="dark"/>
                    </div>
                </div>
            </div>
            <div className="ideas-img">
                <img src={idea_card} alt=""/>
            </div>
        </div>

        <Footer />
        </>
    )
}