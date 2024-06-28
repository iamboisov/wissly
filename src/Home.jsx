import Navigation from './Components/Navigation'
import ArticleCard from './Components/ArticleCard'
import Button from './Components/Button'
import card_1_img from './assets/main-card-1-img.svg'
import startup_card from './assets/wissly-startup.svg'

export default function Home() {
    return (
        <>
        <Navigation />
        <div className="divider"></div>
        <div className="main-header">
            <div className="main-header-content">
                <p className='main-badge'>Нас уже больше 1 000 000 🎉</p>
                <h1>Читайте про бизнес и узнавайте новое</h1>
                <p className='main-header-text'>Присоединяйтесь к 10 167 единомышленников и будьте курсе всех трендов в бизнесе</p>
            </div>
        </div>
        <div className="main-form">
            <input className='main-form-input' type="email" placeholder='Ваша почта'/>
            <Button title="Присоединиться" style="dark"/>
        </div>
        
        {/* Card */}
        <div className="main-card-1">
            <div className="main-card-1-text">
                <p>Возможности</p>
                <h2>Информация, которая меняет бизнес</h2>
                <Button title="Узнать больше" style="dark"/>
            </div>

            <div className="main-card-1-img">
                <img src={card_1_img} alt="" />
            </div>
        </div>

        {/* 3 cards in row */}

        <div className="main-startups">
            <div className="main-startups-text">
                <p>Стартапы</p>
                <div className="main-startups-header">
                    <h2>История и аналитика мировых стартапов</h2>
                    <div className="startups-header-text">
                        <p>Самая свежая и практическая информация для вас и вашего бизнеса. Читайте в любом месте и в любое время.</p>
                        <Button title="Узнать больше" style="light"/>
                    </div>
                </div>
            </div>
            <div className="main-startups-img">
                <img src={startup_card} alt="" srcset="" />
            </div>
        </div>
        
        </>
    )
}