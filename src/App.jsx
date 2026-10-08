import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Galeria from './pages/Galeria';
import Contacto from './pages/Contacto';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* La ruta principal envuelve todo con el Layout fijo (Navbar y Footer) */}
        <Route path="/" element={<Layout />}>
          
          {/* Página de inicio por defecto */}
          <Route index element={<Home />} />
          
          {/* Páginas de navegación interna */}
          <Route path="productos" element={<Productos />} />
          <Route path="galeria" element={<Galeria />} />
          <Route path="contacto" element={<Contacto />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;