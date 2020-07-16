
function validarCrearUsuario() {
	//variables nombre
	let nombre = document.getElementById("firstname").value;
	let val_nom = document.getElementById("validacion_firstname");
	//variables apellido
	let apellido = document.getElementById("lastname").value;
	let val_apellido = document.getElementById("validacion_lastname");

	//variables email
	let email = document.getElementById("email").value;
	let val_email = document.getElementById("validacion_email");
	let isEmailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let val_email_format = document.getElementById("validacion_email_format");
    // var fecha nacimiento

   

	//variables password
	let password = document.getElementById("pass").value;
	let val_password = document.getElementById("validacion_password");
	let isPasswordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
	let val_password_format = document.getElementById(
		"validacion_password_format"
    );
    
    // variables password 2
    let password2 = document.getElementById("pass2").value;
    let val_password2 = document.getElementById("validacion_password2");
    let val_password2_esigual = document.getElementById(
			"validacion_password2_esigual"
		);


    
    //variables imagen 
    let avatar = document.getElementById("avatar").value;
    let val_avatar = document.getElementById("validacion_avatar");
    let val_avatar_format = document.getElementById("validacion_avatar_format");

	//validacion nombre y apellido
        val_nom.innerHTML = "";
        val_apellido.innerHTML = "";
        if (nombre.length < 2 ) {
            val_nom.innerHTML = "El nombre no puede tener menos de dos carateres";
            
            return false;
        } 

        if (apellido.length < 2) {
			
			val_apellido.innerHTML =
				"El apellido no puede tener menos de dos carateres";

					return false;
				} 

    // validacion email
    
        val_email.innerHTML = "";
       

        if ( email ==""){
            val_email.innerHTML = "Ingrese su email, el campo no puede estar vacio";
            return false;
        }

		val_email_format.innerHTML = "";
		if (!isEmailFormat.test(email)) {
			val_email_format.innerHTML = "Debe ser un email válido";
			return false;
		}

		

        // validacion password
        val_password.innerHTML = "";
		val_password_format.innerHTML = "";

		if (password === "") {
			val_password.innerHTML =
				"Ingrese una contraseña, el campo no puede estar vacio";

			return false;
		}
		if (!isPasswordFormat.test(password)) {
            val_password_format.innerHTML = `Debe contener al menos un número y una
            letra mayúscula y minúscula, y al menos 8
            o más caracteres`;
			return false;
		}

        //validacion repita su contraseña
         val_password2.innerHTML = "";
         val_password2_esigual,innerHTML = "";

         if (password2 === "") {
			val_password2.innerHTML =
			"Repita contraseña";
			return false;
        }
        if(password !== password2){
            val_password2_esigual.innerHTML = "La contraseña no coincide, revise la carga";
            return false;
        } else {
            val_password2_esigual.innerHTML =""
        }

        // //validacion avatar
        
        val_avatar.innerHTML = "";
        val_avatar_format.innerHTML= "";

        
		if (avatar === "") {
			val_avatar.innerHTML = "Debe seleccionar una imagen";
		} else if (!/\.(jpg|jpeq|png|gif)$/i.test(avatar)) {
			val_avatar_format.innerHTML =
				"El formato de imagen debe ser: jpg | jpeq | png | gif.";
			return false;
		}

        return true;
    	
}

