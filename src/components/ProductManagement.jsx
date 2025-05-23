import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

function ProductManagement() {
  const [productos, setProductos] = useState([
    { descripcion: "Auriculares", precio: 50000 },
    { descripcion: "Mouse", precio: 15000 },
    { descripcion: "Teclado", precio: 30000 },
    { descripcion: "Monitor", precio: 110000 },
    { descripcion: "Webcam", precio: 20000 }
  ]);

  // Filtrado
  const productosCaros = productos.filter(p => p.precio > 20000);

  // Con IVA
  const productosConIVA = productos.map(p => ({
    descripcion: p.descripcion,
    precio: (p.precio * 1.21).toFixed(2)
  }));

  // Ordenar productos (sin modificar el original)
  const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);

  // Agregar producto
  const agregarProducto = () => {
    const yaExiste = productos.some(p => p.descripcion === "Parlante Bluetooth");
    if (!yaExiste) {
      setProductos([
        ...productos,
        { descripcion: "Parlante Bluetooth", precio: 59000.90 }
      ]);
    } else {
      alert("El parlante ya fue agregado.");
    }
  };
  
  // Eliminar producto con menor precio
  const eliminarMasBarato = () => {
    const precioMinimo = Math.min(...productos.map(p => p.precio));
    setProductos(productos.filter(p => p.precio !== precioMinimo));
  };

  return (
    <div>
      <h2 className="section-title">Gestión de Productos</h2>
      
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button 
          onClick={agregarProducto}
          style={{
            backgroundColor: '#3498db',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <FiPlus size={18} />
          <span>Agregar Parlante</span>
        </button>
        <button 
          onClick={eliminarMasBarato}
          style={{
            backgroundColor: '#e74c3c',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <FiMinus size={18} />
          <span>Eliminar más barato</span>
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div>
          <h3 style={{ color: '#3498db', borderBottom: '2px solid #3498db', paddingBottom: '8px' }}>
            Listado actual ({productos.length} productos)
          </h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {productos.map((p, i) => (
              <li key={i} style={{
                padding: '12px',
                marginBottom: '8px',
                backgroundColor: '#292c37',
                borderRadius: '6px',
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span>{p.descripcion}</span>
                <span style={{ fontWeight: 'bold' }}>${p.precio.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 style={{ color: '#2ecc71', borderBottom: '2px solid #2ecc71', paddingBottom: '8px' }}>
            Productos caros ({productosCaros.length})
          </h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {productosCaros.map((p, i) => (
              <li key={i} style={{
                padding: '12px',
                marginBottom: '8px',
                backgroundColor: '#292c37',
                borderRadius: '6px'
              }}>
                {p.descripcion} - <strong>${p.precio.toLocaleString()}</strong>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 style={{ color: '#9b59b6', borderBottom: '2px solid #9b59b6', paddingBottom: '8px' }}>
            Con IVA (21%)
          </h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {productosConIVA.map((p, i) => (
              <li key={i} style={{
                padding: '12px',
                marginBottom: '8px',
                backgroundColor: '#292c37',
                borderRadius: '6px'
              }}>
                {p.descripcion} - <strong>${p.precio}</strong>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 style={{ color: '#f39c12', borderBottom: '2px solid #f39c12', paddingBottom: '8px' }}>
            Ordenados por precio
          </h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {productosOrdenados.map((p, i) => (
              <li key={i} style={{
                padding: '12px',
                marginBottom: '8px',
                backgroundColor: '#292c37',
                borderRadius: '6px',
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span>{i+1}. {p.descripcion}</span>
                <span style={{ fontWeight: 'bold' }}>${p.precio.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductManagement;