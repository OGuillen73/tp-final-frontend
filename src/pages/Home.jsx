import Hero from '../components/Hero';

function Home() {
    return (
        // Le pasamos la información por Props a nuestro molde "Hero"
        <Hero 
            titulo="Crochet hecho con amor, pensado para durar."
            descripcion="Creamos prendas, amigurumis y accesorios tejidos a mano, con materiales de calidad, combinando tradición, diseño y dedicación en cada detalle."
            textoBoton="Conocé más →"
            linkBoton="/productos"
        />
    );
}

export default Home;