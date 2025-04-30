import React, { useState } from "react";

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

  const appStyle = {
    backgroundColor: "#1e1e1e",
    padding: "30px",
    borderRadius: "20px",
    border: "3px solid #555", 
    boxShadow: "0 0 15px rgba(0,0,0,0.5)", 
    width: "100%", 
    textAlign: "center",
    fontFamily: "sans-serif"
  };
  const titleStyle = {
    color: "#f7f7f7",
    backgroundColor: "#567ebb",
    padding: "10px",
    borderRadius: "7px"
  };    
  const titleStyle2 = {
    color: "#dce0e6",
    padding: "10px",
    borderRadius: "7px",
    backgroundColor: "#3a3a3a"
  };  
    
  return (
    <div style={appStyle}>
      <h2 style={titleStyle}>Ejercicio Adicional TP3 - Gestión de Productos</h2>
      
      <h3 style={titleStyle2}>Listado actual:</h3>
      <ul>
        {productos.map((p, i) => (
          <li key={i}>Producto: {p.descripcion} - Precio: ${p.precio.toFixed(2)}</li>
        ))}
      </ul>
        <button onClick={agregarProducto} >Agregar producto</button>
        <button onClick={eliminarMasBarato} >Eliminar el más barato</button>

      <h3 style={titleStyle2}>Productos con precio &gt; $20.000:</h3>
      <ul>
        {productosCaros.map((p, i) => (
          <li key={i}>{p.descripcion} - ${p.precio}</li>
        ))}
      </ul>

      <h3 style={titleStyle2}>Productos con IVA (21%):</h3>
      <ul>
        {productosConIVA.map((p, i) => (
          <li key={i}>{p.descripcion} - ${p.precio}</li>
        ))}
      </ul>

      <h3 style={titleStyle2}>Productos ordenados por precio:</h3>
      <ul>
        {productosOrdenados.map((p, i) => (
          <li key={i}>{p.descripcion} - ${p.precio}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductManagement;
