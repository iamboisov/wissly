import wissly from '../assets/wissly_startup.png'
import cardlee from '../assets/cardlee_startup.png'
import shopify from '../assets/shopify_startup.png'
import klarna from '../assets/klarna_startup.png'

export default function Startup(props) {
    function logoChecker(title) {
        switch (title) {
            case "Wissly":
                return wissly
            case "Cardlee":
                return cardlee
            case "Shopify":
                return shopify
            case "Klarna":
                return klarna
        }
    }

    return (
        <div className="startup-card">
            <div className="startup-logo">
                <img src={logoChecker(props.title)} alt="" />
            </div>
            <div className="startup-text">
                <div className="startup-top">
                    <h5>{props.title}</h5>
                    <p>{props.text}</p>
                </div>
                <div className="startup-tags">
                    <p>{props.tags[0]}</p>
                    <p>{props.tags[1]}</p>
                    <p>{props.tags[2]}</p>
                </div>
                
            </div>
        </div>
    )
}