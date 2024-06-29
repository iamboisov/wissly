import Navigation from './Components/Navigation'
import Footer from './Components/Footer'
import AboutCard from './Components/AboutCard'


export default function OnProgress() {
    return (
        <>
        <Navigation />
        <div className="divider"></div>
        <div className="onprogress">
            <h1>;&#41;</h1>
            <h3>Мы усердно работает над созданием этой страницы</h3>
        </div>

        <div className="bottom-container">
            <AboutCard title="Статьи" text="Множество интересных статей о маркетинге, финансах и управлении" num="01" link="articles"/>
            <AboutCard title="Стартапы" text="Анализ провалов и успехов стартапов из различных индустрий" num="02" link="startups"/>
            <AboutCard title="Бизнес-идеи" text="Сотни новых бизнес-идей, которые направят вас в нужную сторону" num="03" link="ideas"/>
            <AboutCard title="Общение" text="Тысячи единомышленников, которые поддержат и помогут" num="04" link="communication"/>
        
        </div>

        <Footer />


        </>
    )
}