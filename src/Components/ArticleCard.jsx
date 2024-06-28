import articleLink from '../assets/article-link.svg'

export default function ArticleCard(props) {
    return (
        <>
        <a href={props.link} className="ArticleCard">
            <div className="ArticleCardImg"></div>
            <div className="ArticleCardText">
                <h5>{props.title}</h5>
                <p>{props.text}</p>
            </div>
            <a className='ArticleCardLink' href={props.link}><img src={articleLink} alt="" /></a>
        </a>
        </>
    )
}

// <ArticleCard title="Основы маркетинга" text="Фундаментальная часть перед углублением в тему" link="/article1"/>