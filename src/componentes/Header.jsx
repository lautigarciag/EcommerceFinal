import { Link, Outlet } from "react-router-dom"
import "../estilos/header.css"
export function Header(){
    return <header>
        <nav className="container-nav">
            <h3>Ecommerce</h3>
            <ul className="container-nav__ul">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/login">Ingresa</Link></li>
                <li><Link to="/form">Registrate</Link></li>
            </ul>
        </nav>
        <Outlet />
    </header>
}