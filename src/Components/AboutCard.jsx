import link_img from '../assets/link_white.svg'

export default function AboutCard(props) {
    return (
        <>
        <div className="aboutCard">
            <div className="aboutCardTop">
                <a href={`/${props.link}`}><img src={link_img} alt="" /></a>
            </div>
            <div className="aboutCardBottom">
                <p>{props.text}</p>
                <div className='h-divider'></div>
                <p className='about-num'>{props.num}</p>
                <h5>{props.title}</h5>
            </div>
        </div>
        </>
    )
}