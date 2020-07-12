function validar() {
    console.log("prueba");

    //validacion nombre
    var nombre = document.getElementById("nombre").value;
    var val_nom = document.getElementById("validacion_nombre");

    //validacion descripcion
    var descripcion = document.getElementById("descripcion").value;
    var val_descripcion = document.getElementById("validacion_descripcion");

    //validacion imagen
    var imagen = document.getElementById("imagen").value;
    var val_imagen = document.getElementById("validacion_imagen");

    //validacion nombre
    val_nom.innerHTML = "";
    if (nombre === "" && descripcion === "" && imagen === "") {
        val_nom.innerHTML = "Titulo, no puede estar vacio.";
        val_descripcion.innerHTML = "Descripción, no puede estar vacio.";
        val_imagen.innerHTML = "Debe seleccionar una imagen";

        return false;
    } else if (nombre.length < 5) {
        val_nom.innerHTML = "Título, debe tener 5 caracteres o más.";

        return false;
    }

    //validacion descripcion
    val_descripcion.innerHTML = "";
    if (descripcion === "") {
        val_descripcion.innerHTML = "Descripción, no puede estar vacio.";
        return false;
    } else if (descripcion.length < 20) {
        val_descripcion.innerHTML =
            "Descripción, debe tener 20 caracteres o más.";
        return false;
    }

    //validacion imagen
    val_imagen.innerHTML = "";
    if (imagen === "") {
        val_imagen.innerHTML = "Debe seleccionar una imagen";
    } else if (!/\.(jpg|jpeq|png|gif)$/i.test(imagen)) {
        val_imagen.innerHTML =
            "El formato de imagen debe ser: jpg | jpeq | png | gif.";
        return false;
    }

    return true;
}
