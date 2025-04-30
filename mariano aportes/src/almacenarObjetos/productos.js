const productos = [
    {
        id: 1,
        nombre: "Teclado",
        precio: 30000,
    },

    {
        id: 2,
        nombre: "Auriculares",
        precio: 49000,
    },

    {
        id: 3,
        nombre: "Mouse",
        precio: 22000,
    },

    {
        id: 4,
        nombre: "Monitor",
        precio: 150000,
    },

    {
        id: 5,
        nombre: "Laptop",
        precio: 200000,
    },

    
]
console.log("Lista de productos:")
productos.forEach(productos => {
    console.log(`Nombre: ${productos.nombre} , Precio: $${productos.precio}`);
});
console.log("---------------------------------");

const productosMayoresA20 = productos.filter((productos) => productos.precio > 23000);
console.log("Lista de productos con precio mayor a 23000:")
productosMayoresA20.forEach((productos) => {
    console.log(`Nombre: ${productos.nombre} , Precio: $${productos.precio}`);
});
console.log("---------------------------------");

const productosConIva = productos.map((productos => {
    return {
        ...productos,
        precioConIva: (productos.precio * 1.21).toFixed(2),
    };
}));

console.log("Lista de productos con IVA:")
productosConIva.forEach((productos) => {
    console.log(`Nombre: ${productos.nombre} , Precio: $${productos.precioConIva}`);
});
console.log("---------------------------------");

productos.sort((a, b) => a.precio - b.precio);
console.log("Lista de productos ordenados por precio:")
productos.forEach((productos) => {
    console.log(`Nombre: ${productos.nombre} , Precio: $${productos.precio}`);
});
console.log("---------------------------------");

productos.push({
    id: 6,
    nombre: "Parlante Bluetooth",
    precio: 59000.90,
});
console.log("Lista de productos con nuevo producto agregado:")
productos.forEach((productos) => {
    console.log(`Nombre: ${productos.nombre} , Precio: $${productos.precio}`);
});
console.log("---------------------------------");

productos.shift();
console.log("Lista de productos con el  producto con el precio mas bajo :")
productos.forEach((productos) => {
    console.log(`Nombre: ${productos.nombre} , Precio: $${productos.precio}`);
});
console.log("---------------------------------");
