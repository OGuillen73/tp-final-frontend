import { Link } from 'react-router-dom';

function Hero({ titulo, descripcion, textoBoton, linkBoton }) {
    return (
        <section className="hero">
            <div className="content">
                <h1>{titulo}</h1>
                <p>{descripcion}</p>
                {/* Usamos Link en vez de <a> para navegación interna */}
                <Link to={linkBoton} className="btn btn-primary">
                    {textoBoton}
                </Link>
            </div>
            <div className="image"></div>
        </section>
    );
}

export default Hero;