import React from "react";

const Productos = () => {
    const productos = [
        { id: 1, nombre: "Teclado", precio: 30000 },
        { id: 2, nombre: "Auriculares", precio: 49000 },
        { id: 3, nombre: "Mouse", precio: 22000 },
        { id: 4, nombre: "Monitor", precio: 150000 },
        { id: 5, nombre: "Laptop", precio: 200000 },
    ];

    const productosMayoresA23000 = productos.filter(p => p.precio > 23000);

    const productosConIva = productos.map(p => ({
        ...p,
        precioConIva: (p.precio * 1.21).toFixed(2),
    }));

    const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);

    const productosConNuevo = [...productosOrdenados, {
        id: 6,
        nombre: "Parlante Bluetooth",
        precio: 59000.90
    }];

    const productosSinMasBarato = [...productosConNuevo].sort((a, b) => a.precio - b.precio).slice(1);

    return (
        <div>
            <h2>Lista de productos:</h2>
            <ul>
                {productos.map(p => (
                    <li key={p.id}>{p.nombre} - ${p.precio}</li>
                ))}
            </ul>

            <hr />

            <h2>Productos con precio mayor a $23000:</h2>
            <ul>
                {productosMayoresA23000.map(p => (
                    <li key={p.id}>{p.nombre} - ${p.precio}</li>
                ))}
            </ul>

            <hr />

            <h2>Productos con IVA (21%):</h2>
            <ul>
                {productosConIva.map(p => (
                    <li key={p.id}>{p.nombre} - ${p.precioConIva}</li>
                ))}
            </ul>

            <hr />

            <h2>Productos ordenados por precio:</h2>
            <ul>
                {productosOrdenados.map(p => (
                    <li key={p.id}>{p.nombre} - ${p.precio}</li>
                ))}
            </ul>

            <hr />

            <h2>Con producto nuevo agregado:</h2>
            <ul>
                {productosConNuevo.map(p => (
                    <li key={p.id}>{p.nombre} - ${p.precio}</li>
                ))}
            </ul>

            <hr />

            <h2>Después de eliminar el más barato:</h2>
            <ul>
                {productosSinMasBarato.map(p => (
                    <li key={p.id}>{p.nombre} - ${p.precio}</li>
                ))}
            </ul>
        </div>
    );
};

export default Productos;
