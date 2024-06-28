import link_img from '../assets/link.png'

export default function CategoryCard(props) {
    switch (props.variant) {
        case 1:
            return (
                <>
                    <div className="categoryCard1">
                        <div className="categoryCardTop">
                            <p>17 статей</p>
                            <a href="#"><img src={link_img} alt="" /></a>
                        </div>
        
                        <div className="categoryCardBottom">
                            <h5>{props.title}</h5>
                            <p>Статьи, которые помогут выстроить маркетинг</p>
                        </div>
                    </div>
                </>
            )
        case 2:
            return (
                <>
                    <div className="categoryCard2">
                        <div className="categoryCardTop">
                            <p>12 статей</p>
                            <a href="#"><img src={link_img} alt="" /></a>
                        </div>
        
                        <div className="categoryCardBottom">
                            <h5>Финансы</h5>
                            <p>Статьи, которые помогут выстроить маркетинг</p>
                        </div>
                    </div>
                </>
            )
        case 3:
            return (
                <>
                    <div className="categoryCard3">
                        <div className="categoryCardTop">
                            <p>9 статей</p>
                            <a href="#"><img src={link_img} alt="" /></a>
                        </div>
        
                        <div className="categoryCardBottom">
                            <h5>Управление</h5>
                            <p>Статьи, которые помогут выстроить маркетинг</p>
                        </div>
                    </div>
                </>
            )
        case 4:
            return (
                <>
                    <div className="categoryCard4">
                        <div className="categoryCardTop">
                            <p>10 статей</p>
                            <a href="#"><img src={link_img} alt="" /></a>
                        </div>
        
                        <div className="categoryCardBottom">
                            <h5>Стратегия</h5>
                            <p>Статьи, которые помогут выстроить маркетинг</p>
                        </div>
                    </div>
                </>
            )
    }
}



// <CategoryCard variant={2} amount={12} title="Финансы" text="Статьи, которые помогут выстроить маркетинг"/>