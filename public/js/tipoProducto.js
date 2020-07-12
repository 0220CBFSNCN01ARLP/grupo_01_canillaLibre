function campos() {

  var productoId = document.getElementById("productoId").value

  if (productoId == "1") {
    document.getElementById("ibu").style.display = "block";
    document.getElementById("alcohol").style.display = "block";
    document.getElementById("presentacion").style.display = "block";
    document.getElementById("disertante").style.display = "none";
    document.getElementById("medioId").style.display = "none";
    document.getElementById("origen").style.display = "block";

  } else if (productoId == "2") {

    document.getElementById("ibu").style.display = "none";
    document.getElementById("alcohol").style.display = "none";
    document.getElementById("presentacion").style.display = "none";
    document.getElementById("disertante").style.display = "none";
    document.getElementById("medioId").style.display = "none";
    document.getElementById("origen").style.display = "block";

  } else if (productoId == "3") {

    document.getElementById("ibu").style.display = "none";
    document.getElementById("alcohol").style.display = "none";
    document.getElementById("presentacion").style.display = "none";
    document.getElementById("disertante").style.display = "block";
    document.getElementById("medioId").style.display = "block";
    document.getElementById("origen").style.display = "none";

  }

}


  