export default function Button(props) {
    switch (props.style) {
        case "dark":
            return <a className="NavButtonDark">{props.title}</a>
        case "light":
            return <a className="NavButtonLight">{props.title}</a>
    }
}