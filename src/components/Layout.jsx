import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout() {
    // Definimos las opciones del menú aquí para pasarlas al Navbar
    const menuOptions = [
        { nombre: 'Inicio', url: '/', activa: true },
        { nombre: 'Productos', url: '/productos', activa: false },
        { nombre: 'Galería', url: '/galeria', activa: false },
        { nombre: 'Contacto', url: '/contacto', activa: false }
    ];

    return (
        <div className="app-layout">
            <Navbar opciones={menuOptions} /> 
            
            <main>
                {/* El Outlet es el espacio dinámico donde cargará cada página (Inicio, Productos, etc.) */}
                <Outlet /> 
            </main>

            <Footer />
        </div>
    );
}

export default Layout;