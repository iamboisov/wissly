import Navigation from './Components/Navigation'
import CategoryCard from './Components/CategoryCard'

export default function Home() {
    return (
        <>
        <Navigation />
        <div className='divider'></div>
        <CategoryCard variant={1} amount={17} title="Маркетинг" text="Статьи, которые помогут выстроить маркетинг"/>
        <CategoryCard variant={2} amount={12} title="Финансы" text="Статьи, которые помогут выстроить маркетинг"/>
        <CategoryCard variant={3} amount={9} title="Управление" text="Статьи, которые помогут выстроить маркетинг"/>
        <CategoryCard variant={4} amount={5} title="Стратегия" text="Статьи, которые помогут выстроить маркетинг"/>
        </>
    )
}