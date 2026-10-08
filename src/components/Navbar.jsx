import { Link } from 'react-router-dom';

// Usamos props para pasar las opciones del menú, tal como recomienda la guía
function Navbar({ opciones }) {
    return (
        <header>
            <nav className="navbar">
                {/* En React usamos <Link> en lugar de <a> para navegación interna */}
                <Link to="/" className="logo">
                    <img src="/img/Logo Img.png" alt="Logo Polita Crochet" />
                </Link>
                
                <ul className="nav-links">
                    {opciones.map((opcion, index) => (
                        <li key={index}>
                            <Link to={opcion.url} className={opcion.activa ? "active" : ""}>
                                {opcion.nombre}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;