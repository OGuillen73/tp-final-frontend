import { Link } from 'react-router-dom';

function Card({ imagen, alt, titulo, descripcion, linkUrl }) {
    return (
        <article className="card">
            <img src={imagen} alt={alt} />
            <div className="card-body">
                <h2>{titulo}</h2>
                <p>{descripcion}</p>
                {/* Usamos Link para navegar a la página de contacto sin recargar */}
                <Link to={linkUrl} className="btn btn-secondary">
                    Consultar
                </Link>
            </div>
        </article>
    );
}

export default Card;