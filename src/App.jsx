// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import GaleriaDeProductos from './pages/GaleriaDeProductos';
// import Contactos from './pages/Contactos';
// import Admin from './pages/Admin';
// import Login from './pages/Login';
// import NotFound from './pages/NotFound';
// import Navbar from './components/Navbar'; // 👈 Importamos el navbar

// function App() {
//   return (
//     <Router>
//       <Navbar /> {/* 👈 Mostramos la barra en todas las páginas */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/productos" element={<GaleriaDeProductos />} />
//         <Route path="/contactos" element={<Contactos />} />
//         <Route path="/admin" element={<Admin />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;





import React from 'react';

function App() {
  return (
    <div>
      <h1>🎂 Bienvenida a Tortas Talent</h1>
      <p>¡Tu tienda de tortas online hecha con React!</p>
    </div>
  );
}

export default App;