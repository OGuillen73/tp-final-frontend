function Galeria() {
    // 1. Guardamos todas las rutas de las imágenes en un arreglo
    const imagenes = [
        "/img/galeria/img1.jpeg",
        "/img/galeria/img2.jpeg",
        "/img/galeria/img3.jpeg",
        "/img/galeria/img4.jpeg",
        "/img/galeria/img5.jpeg",
        "/img/galeria/img6.jpeg",
        "/img/galeria/img7.jpeg",
        "/img/galeria/img8.jpeg",
        "/img/galeria/img9.jpeg",
        "/img/galeria/img10.jpeg",
        "/img/galeria/img11.jpeg",
        "/img/galeria/img12.jpeg"
    ];

    return (
        <section className="gallery-section">
            <div className="gallery">
                {/* 2. Mapeamos el arreglo para crear una etiqueta <img> por cada ruta */}
                {imagenes.map((ruta, index) => (
                    <img 
                        key={index} 
                        className="gallery-item" 
                        src={ruta} 
                        alt={`Trabajo de crochet ${index + 1}`} 
                    />
                ))}
            </div>
        </section>
    );
}

export default Galeria;