


/*
let botonAdd = document.getElementById("botonAdd");: Esto busca el elemento en el documento HTML que tiene el id "botonAdd" y lo almacena en la variable botonAdd. Esto permite que el código interactúe con el botón en el documento.
botonAdd.addEventListener("click", addItem);: Aquí se utiliza el método addEventListener para agregar un evento de clic al botón almacenado en la variable botonAdd. Este evento se activará cuando se haga clic en el botón. El primer argumento de addEventListener es el tipo de evento que se está escuchando, en este caso, "click". El segundo argumento es la función que se llamará cuando se active el evento. En este caso, la función addItem se pasará como referencia y se llamará cuando se haga clic en el botón.
*/
let botonAdd = document.getElementById("botonAdd");
//botonAdd.addEventListener("click", function (){ addItem()});
botonAdd.addEventListener("click", addItem);


function addItem() {
    /*
    document.getElementById("producto"): Esto busca el elemento en el documento HTML que tiene el id "producto".
.value: Esta es una propiedad del elemento del formulario que devuelve el valor del elemento. En este caso, devuelve el valor introducido por el usuario en el campo de entrada.
Por lo tanto, let producto = document.getElementById("producto").value; asigna el valor introducido por el usuario en el campo de entrada con el id "producto" a la variable producto.
    */
    let producto = document.getElementById("producto").value;
    let precio = parseFloat(document.getElementById("precio").value);
    let cantidad = parseInt(document.getElementById("cantidad").value);

    /*
    producto: Esto verifica si la variable producto existe y tiene un valor. Si producto es null, undefined, 0, false, NaN, o una cadena vacía (""), esta condición se evaluará como false. Si producto tiene algún otro valor, esta condición se evaluará como true.
    !isNaN(precio): isNaN() es una función incorporada en JavaScript que devuelve true si el valor proporcionado no es un número (NaN), y false si es un número. El operador ! antes de isNaN(precio) invierte el resultado, lo que significa que esta condición se evalúa como true si precio es un número válido, y false si no lo es.
    !isNaN(cantidad): Similar a la anterior, esta condición verifica si cantidad es un número válido.
    */
    if (producto && !isNaN(precio) && !isNaN(cantidad)) {
        let total = precio * cantidad;
        let listaDiv = document.getElementById("lista");

        let nuevoItem = document.createElement("div");
        nuevoItem.classList.add("lista-item");

        let productoSpan = document.createElement("span");
        productoSpan.textContent = "Producto: " + producto + " Cantidad: " + cantidad + " Subtotal: ";
        let subtotalSpan = document.createElement("span");
        subtotalSpan.textContent = total.toFixed(2);

        nuevoItem.appendChild(productoSpan);
        nuevoItem.appendChild(subtotalSpan);

        listaDiv.appendChild(nuevoItem);
        // Actualizar la suma de totales
        actualizarTotal(total);
    } else {
        alert("Por favor, completa todos los campos correctamente.");
    }
}
function actualizarTotal(nuevoTotal) {
    var sumaTotal = document.getElementById("sumaTotal");
    var totalAnterior = parseFloat(sumaTotal.textContent);
    sumaTotal.textContent = (totalAnterior + nuevoTotal).toFixed(2);
}