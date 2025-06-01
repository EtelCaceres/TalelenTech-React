import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ backgroundColor: '#ffe0e6', padding: '15px', display: 'flex', gap: '20px' }}>
            <Link to="/">🏠 Home</Link>
            <Link to="/productos">🧁 Productos</Link>
            <Link to="/contactos">📞 Contacto</Link>
            <Link to="/admin">🔐 Admin</Link>
            <Link to="/login">🔑 Login</Link>
        </nav>
    );
};

export default Navbar;