import Card from '../components/Card';

function Productos() {
    // 1. Definimos los datos de nuestros productos
    const listaProductos = [
        {
            imagen: "/img/productos/productos-amigurumi.jpg",
            alt: "Amigurumis",
            titulo: "Amigurumis",
            descripcion: "Personajes tejidos a mano con detalles únicos, ideales para regalar o decorar con ternura.",
            linkUrl: "/contacto"
        },
        {
            imagen: "/img/productos/productos-prendas.jpg",
            alt: "Ropa tejida a crochet",
            titulo: "Prendas",
            descripcion: "Tejidos cómodos y delicados, confeccionados artesanalmente para acompañarte en cada momento",
            linkUrl: "/contacto"
        },
        {
            imagen: "/img/productos/productos-accesorios.jpg",
            alt: "Accesorios a crochet",
            titulo: "Accesorios",
            descripcion: "Complementos hechos a crochet que aportan un toque único y especial a tu estilo.",
            linkUrl: "/contacto"
        }
    ];

    // 2. Renderizamos el contenedor y mapeamos las tarjetas
    return (
        <section className="cards-section">
            <div className="cards-grid">
                {listaProductos.map((producto, index) => (
                    <Card 
                        key={index}
                        imagen={producto.imagen}
                        alt={producto.alt}
                        titulo={producto.titulo}
                        descripcion={producto.descripcion}
                        linkUrl={producto.linkUrl}
                    />
                ))}
            </div>
        </section>
    );
}

export default Productos;