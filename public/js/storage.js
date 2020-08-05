window.onload = function(){ 


    var cantidad = document.getElementById("cantidad");
    cantidad.addEventListener("change", function(){

        var precioUnitario = document.getElementById("precio");
        
        document.getElementById("total").innerHTML =
        (parseInt(cantidad.value) * parseFloat(precioUnitario.innerText));
    })  
        
}

$('#submit').click(function () {

    swal("Su pago fue realizado con exito!", "Gracias por su compra", "success").then(function(){
        window.location.href = "http://localhost:3000/";    
    }, 5000);

});

