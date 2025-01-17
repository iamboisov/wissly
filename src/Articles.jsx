import Navigation from './Components/Navigation'
import Button from './Components/Button'
import CategoryCard from './Components/CategoryCard'
import ArticleCard from './Components/ArticleCard'
import Footer from './Components/Footer'
import ipadCard from './assets/ipad.svg'
import iphone_card2 from './assets/iphone2.svg'
import startup_card2 from './assets/wissly-startup2.svg'

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


        {/* Category Cards */}
        <div className="categoryCards">
            <CategoryCard variant={1} amount={19} title="Маркетинг" text="Статьи, которые помогут выстроить маркетинг"/>
            <CategoryCard variant={2} amount={12} title="Финансы" text="Статьи, которые помогут наладить финансы"/>
            <CategoryCard variant={3} amount={8} title="Управление" text="Статьи, которые помогут с управлением"/>
            <CategoryCard variant={4} amount={10} title="Стратегия" text="Статьи, которые помогут создать стратегию"/>
        </div>

        {/* Communicate */}

        <div className="communication">
            <div className="communication-text">
                <p>Стартапы</p>
                <div className="communication-header">
                    <h2>История и аналитика мировых стартапов</h2>
                    <div className="communication-header-text">
                        <p>Самая свежая и практическая информация для вас и вашего бизнеса. Читайте в любом месте и в любое время.</p>
                        <Button title="Узнать больше" style="dark"/>
                    </div>
                </div>
            </div>
            <div className="communication-img">
                <img src={iphone_card2} alt=""/>
            </div>
        </div>


        <div className="articleCards">
        <ArticleCard title="Основы маркетинга" text="Фундаментальная часть перед углублением в тему" link="/article1"/>
        <ArticleCard title="Основы маркетинга" text="Фундаментальная часть перед углублением в тему" link="/article1"/>
        <ArticleCard title="Основы маркетинга" text="Фундаментальная часть перед углублением в тему" link="/article1"/>
        <ArticleCard title="Основы маркетинга" text="Фундаментальная часть перед углублением в тему" link="/article1"/>
        </div>



        <div className="articles-last">
            <div className="articles-last-img">
                <img src={startup_card2} alt=""/>
            </div>
            <div className="articles-last-text">
                <p>Стартапы</p>
                <div className="articles-last-text-header">
                    <h2>История и аналитика мировых стартапов</h2>
                    <div className="articles-last-text-header-text">
                        <p>Самая свежая и практическая информация для вас и вашего бизнеса. Читайте в любом месте и в любое время.</p>
                        <Button title="Узнать больше" style="light"/>
                    </div>
                </div>
            </div>
            
        </div>


        <Footer />
        </>
    )
}