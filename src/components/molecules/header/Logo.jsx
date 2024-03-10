import { Link } from "react-router-dom"

const Logo = () => {
    return (
        <div className="logo flex">
            <Link to="/">
                <img src="https://img.freepik.com/vector-gratis/gradiente-ilustracion-pajaro-colorido_343694-1741.jpg?size=626&ext=jpg&ga=GA1.2.1553507606.1682259808&semt=ais" alt="edteam" width="64" />
            </Link>
        </div>
    )
}

export default Logo