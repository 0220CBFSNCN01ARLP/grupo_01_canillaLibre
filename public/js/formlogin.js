function validarUsuario() {
    //validacion email
    let email = document.getElementById("email").value;
    let val_email = document.getElementById("validacion_email");
    let isEmailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let val_email_format = document.getElementById("validacion_email_format");
    //validacion descripcion
    let password = document.getElementById("pass").value;
    let val_password = document.getElementById("validacion_password");

    //validacion email
    if (email === "" && password== "" ) {
        val_email.innerHTML = "Ingrese su email, el campo no puede estar vacio";
        val_password.innerHTML = "El valor no puede estar vacio";

        return false;}

    val_email.innerHTML= ""; 

     if (!isEmailFormat.test(email)) {
        val_email_format.innerHTML = "Debe ser un email válido";
        return false;}

     val_email_format.innerHTML = "";
    
     //validacion password
     val_password.innerHTML ="";   

     if (password === "") {
        val_password.innerHTML = "El valor no puede estar vacío";
        return false;
    }
    
    return true;
}
