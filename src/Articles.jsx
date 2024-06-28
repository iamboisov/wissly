import Navigation from './Components/Navigation'
import Button from './Components/Button'
import ipadCard from './assets/ipad.svg'

export default function Articles() {
    return (
        <>
        <Navigation />

        <div className="divider"></div>
        <div className="articles-header">
            <div className="articles-header-content">
                <h1>Маркетинг, финансы и многое другое!</h1>
                <p className='articles-header-text'>Самая свежая и практическая информация для вас и вашего бизнеса. Читайте в любом месте и в любое время. </p>
            </div>
        </div>


        {/* Card */}
        <div className="articles-card-1">
            <div className="articles-card-1-text">
                <p>Возможности</p>
                <h2>Информация, которая меняет бизнес</h2>
                <Button title="Узнать больше" style="dark"/>
            </div>

            <div className="articles-card-1-img">
                <img src={ipadCard} alt="" />
            </div>
        </div>

        </>
    )
}