if (document.getElementById("btnModal")) {
    var modal = document.getElementById("ventana-modal");
    var btn = document.getElementById("btnModal");
    var cruz = document.getElementById("close");

    cruz.onclick = function () {
        modal.style.display = "none"
    }

    btn.onclick = function () {
        modal.style.display = "block"
        modal.classList.add("animate__backInDown");
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            
        }
    }

}

