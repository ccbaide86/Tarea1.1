// Ejercicio 4: Procesamiento de una Lista de Productos
const productos = [
    { nombre: "Televisor", precio: 500, categoria: "Electrónica" },
    { nombre: "Silla", precio: 100, categoria: "Muebles" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Mesa", precio: 200, categoria: "Muebles" },
    { nombre: "Auriculares", precio: 150, categoria: "Electrónica" }
];

const catFiltrada = "Electrónica";

const proFiltrados = productos.filter((pro) => pro.categoria === catFiltrada);
console.log(proFiltrados)


const nomProductos = proFiltrados.map((pro) => pro.nombre);
console.log(nomProductos)

const precioTotal = proFiltrados.reduce((tot, pro) => tot + pro.precio, 0);
console.log("Precio total: ", precioTotal)