import React from 'react';

const ProductList = ({ productos, agregarAlCarrito }) => {
    return (
        <div>
            <h2>Nuestras Tortas</h2>
            <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
                {productos.map((producto) => (
                    <li key={producto.id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
                        <h3>{producto.nombre}</h3>
                        <img src={producto.imagen} alt={producto.nombre} style={{ width: '100%' }} />
                        <p>Precio: ${producto.precio}</p>
                        <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;


// import React from 'react';

// const ProductList = () => {
//     // Lista de tortas (ficticia por ahora)
//     const productos = [
//         {
//             id: 1,
//             nombre: 'Torta de Chocolate',
//             precio: 1500,
//             imagen: 'https://via.placeholder.com/150'
//         },
//         {
//             id: 2,
//             nombre: 'Torta de Frutilla',
//             precio: 1700,
//             imagen: 'https://via.placeholder.com/150'
//         },
//         {
//             id: 3,
//             nombre: 'Torta de Vainilla',
//             precio: 1400,
//             imagen: 'https://via.placeholder.com/150'
//         }
//     ];

//     return (
//         <div>
//             <h2>Nuestras Tortas</h2>
//             <ul>
//                 {productos.map((producto) => (
//                     <li key={producto.id}>
//                         <h3>{producto.nombre}</h3>
//                         <img src={producto.imagen} alt={producto.nombre} />
//                         <p>Precio: ${producto.precio}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ProductList;

