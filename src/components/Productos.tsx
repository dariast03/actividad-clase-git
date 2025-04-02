import React from 'react';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

const Productos: React.FC = () => {
  const listaDeProductos: Producto[] = [
    { id: 1, nombre: 'Producto A', precio: 10 },
    { id: 2, nombre: 'Producto B', precio: 20 },
    { id: 3, nombre: 'Producto C', precio: 30 },
  ];

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {listaDeProductos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productos;