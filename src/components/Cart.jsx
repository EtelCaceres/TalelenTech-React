import React from 'react';

const Cart = ({ cart, quitarDelCarrito }) => {
    const total = cart.reduce((sum, item) => sum + item.precio, 0);

    return (
        <div>
            <h2>🛒 Carrito de compras</h2>
            {cart.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            {item.nombre} - ${item.precio}
                            <button onClick={() => quitarDelCarrito(index)} style={{ marginLeft: '10px' }}>
                                Quitar
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            <p>Total: ${total}</p>
        </div>
    );
};

export default Cart;