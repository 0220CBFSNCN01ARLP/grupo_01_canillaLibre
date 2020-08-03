window.onload = function(){ 


    var cantidad = document.getElementById("cantidad");
    cantidad.addEventListener("change", function(){

        var precioUnitario = document.getElementById("precio");
        
        document.getElementById("total").innerHTML =
        (parseInt(cantidad.value) * parseFloat(precioUnitario.innerText));
    })  
        
} 
