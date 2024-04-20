// Obtener el elemento del botón con el id "botonAdd"
let botonAdd = document.getElementById("botonAdd");

// Asignar un evento de clic al botón y llamar a la función addItem al hacer clic
botonAdd.addEventListener("click", addItem);

// Definir la función addItem
function addItem() {
    // Obtener los valores de los elementos de entrada "producto", "precio" y "cantidad"
    let producto = document.getElementById("producto").value;
    let precio = parseFloat(document.getElementById("precio").value);
    let cantidad = parseInt(document.getElementById("cantidad").value);

    // Verificar si los valores son válidos y completos
    if (producto && !isNaN(precio) && !isNaN(cantidad)) {
        // Calcular el subtotal y obtener el elemento de la lista
        let total = precio * cantidad;
        let listaDiv = document.getElementById("lista");

        // Crear un nuevo elemento de lista y configurar su clase
        let nuevoItem = document.createElement("div");
        nuevoItem.classList.add("lista-item");

        // Crear elementos span para mostrar el producto, cantidad y subtotal
        let productoSpan = document.createElement("span");
        productoSpan.textContent = "Producto: " + producto + " Cantidad: " + cantidad + " Subtotal: ";
        let subtotalSpan = document.createElement("span");
        subtotalSpan.textContent = total.toFixed(2);

        // Agregar los elementos span al nuevo elemento de lista
        nuevoItem.appendChild(productoSpan);
        nuevoItem.appendChild(subtotalSpan);

        // Agregar el nuevo elemento de lista a la lista principal y actualizar el total
        listaDiv.appendChild(nuevoItem);
        actualizarTotal(total);
    } else {
        // Mostrar una alerta si los campos no están completos o son inválidos
        alert("Por favor, completa todos los campos correctamente.");
    }
}

// Definir la función para actualizar el total
function actualizarTotal(nuevoTotal) {
    // Obtener el elemento que muestra el total actual
    var sumaTotal = document.getElementById("sumaTotal");
    var totalAnterior = parseFloat(sumaTotal.textContent);

    // Actualizar el total sumando el nuevo subtotal y mostrarlo con dos decimales
    sumaTotal.textContent = (totalAnterior + nuevoTotal).toFixed(2);
}
