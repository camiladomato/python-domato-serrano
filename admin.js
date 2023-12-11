document.addEventListener("DOMContentLoaded", function () {
    // Espera a que el DOM esté completamente cargado

    // Llama a la función para cargar y mostrar productos
    cargarYMostrarProductos();

    function cargarYMostrarProductos() {
        // Realiza una solicitud a la API para obtener los productos
        fetch('http://127.0.0.1:5000/juegos')  // Ajusta la URL según la ruta de tu API
            .then(response => response.json())
           
            .then(productos => {
                console.log(productos)
                // Llama a la función para mostrar productos en la tabla
                mostrarProductosEnTabla(productos);
            })
            .catch(error => console.error('Error al obtener productos:', error));
    }

    function mostrarProductosEnTabla(productos) {
        // Obtén el cuerpo de la tabla donde se insertarán los productos
        const tablaProductosBody = document.getElementById('tabla-productos-body');

        // Limpia cualquier contenido existente en la tabla
        tablaProductosBody.innerHTML = '';

        // Itera sobre la lista de productos y crea filas para cada uno
        productos.forEach(producto => {
            const fila = document.createElement('tr');

            // Crea celdas para cada propiedad del producto
            const celdaImagen = document.createElement('td');
            const celdaTitulo = document.createElement('td');
            const celdaDescripcion = document.createElement('td');
            const celdaPrecio = document.createElement('td');
            const celdaEditar = document.createElement('td');
            const celdaEliminar = document.createElement('td');

            // Agrega el contenido a cada celda
            celdaImagen.innerHTML = `<img src="${producto.imagen_url}" alt="${producto.titulo}" style="max-width: 50px;">`;
            celdaTitulo.textContent = producto.titulo;
            celdaDescripcion.textContent = producto.descripcion;
            celdaPrecio.textContent = `$${producto.precio.toFixed(2)}`;
            celdaEditar.innerHTML = '<button class="btn btn-primary" data-id="${producto.id}">Editar</button>';
            celdaEliminar.innerHTML = '<button class="btn btn-danger" data-id="${producto.id}">Eliminar</button>';

            // Agrega las celdas a la fila
            fila.appendChild(celdaImagen);
            fila.appendChild(celdaTitulo);
            fila.appendChild(celdaDescripcion);
            fila.appendChild(celdaPrecio);
            fila.appendChild(celdaEditar);
            fila.appendChild(celdaEliminar);

            // Agrega la fila al cuerpo de la tabla
            tablaProductosBody.appendChild(fila);
        });
    }
});
function eliminarProducto(idProducto) {
    
    alert(`Quieres eliminar el producto?${idProducto}`);

    fetch(`http://127.0.0.1:5000/juegos/${idProducto}`, { method: 'DELETE' })
        .then(response => {
            
            if (!response.ok) {
                throw new Error(`Error al eliminar el producto con ID ${idProducto}`);
            }
            return response.json();
        })
        .then(data => {
           
            alert(`Producto con ID ${idProducto} eliminado con éxito`);
            
            cargarYMostrarProductos();
        })
        .catch(error => alert.error('Error al eliminar producto:', error));
}
