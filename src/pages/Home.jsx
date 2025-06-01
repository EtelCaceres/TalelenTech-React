import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';

const Home = () => {
    const productos = [
        {
            id: 1,
            nombre: 'Torta de Chocolate',
            precio: 1500,
            imagen: 'https://via.placeholder.com/150'
        },
        {
            id: 2,
            nombre: 'Torta de Frutilla',
            precio: 1700,
            imagen: 'https://via.placeholder.com/150'
        },
        {
            id: 3,
            nombre: 'Torta de Vainilla',
            precio: 1400,
            imagen: 'https://via.placeholder.com/150'
        }
    ];

    const [cart, setCart] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCart([...cart, producto]);
    };

    const quitarDelCarrito = (index) => {
        const nuevoCarrito = [...cart];
        nuevoCarrito.splice(index, 1);
        setCart(nuevoCarrito);
    };

    return (
        <div>
            <h1>Bienvenida a Tortas Talent 🍰</h1>
            <p>Tu tienda de tortas online hecha con React!</p>
            <ProductList productos={productos} agregarAlCarrito={agregarAlCarrito} />
            <Cart cart={cart} quitarDelCarrito={quitarDelCarrito} />
        </div>
    );
};

export default Home;