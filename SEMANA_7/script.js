// Arreglo de productos
let productos = [
    {
        nombre: "Laptop",
        precio: 1200,
        descripcion: "Laptop estudiantil"
    },
    {
        nombre: "Teléfono",
        precio: 800,
        descripcion: "Teléfono inteligente"
    }
];

// Obtener la lista del HTML
const lista = document.getElementById("lista-productos");

// Función para renderizar los productos
function renderizarProductos() {
    lista.innerHTML = "";

    productos.forEach(producto => {
        const li = document.createElement("li");

        li.innerHTML = `
            <strong>${producto.nombre}</strong><br>
            Precio: $${producto.precio}<br>
            ${producto.descripcion}
        `;

        lista.appendChild(li);
    });
}

// Renderizar al cargar la página
renderizarProductos();

// Botón para agregar producto
const boton = document.getElementById("btn-agregar");

boton.addEventListener("click", () => {
    const nuevoProducto = {
        nombre: "Nuevo Producto",
        precio: 500,
        descripcion: "Producto agregado dinámicamente"
    };

    productos.push(nuevoProducto);
    renderizarProductos();
});
