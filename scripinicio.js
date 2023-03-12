var buton = document.getElementById("boton1");
var buton2 = document.getElementById("boton2");
var ctexto = document.getElementById("ctexto");
var titulo = document.getElementById("titulo");
var tcodigo = document.getElementById("ccodigos");
var tnombre = document.getElementById("cnombres");
var buscador = document.getElementById("inputl");
var counter = 1;
window.onload = (e) => {

    tcodigos();
}

async function tcodigos() {

    ++counter

    // var datoimage = document.getElementById("imagenes3");
    // var prinmage = document.getElementById("imagenest");
    // document.getElementById("inputdatos").value = "";
    //document.getElementById("titulo").innerHTML = "NOMBRE DE LA VERDURA";

    // datoimage.setAttribute(`src`, "img/fruver/fruv.jpg");
    // prinmage.appendChild(datoimage);


    if (counter % 2 == 0) {
        const response = await fetch("http://127.0.0.1:5500/user.json");
        const json = await response.json();



        for (i = 0; i < json.length; i++) {
            var son1 = json[i];
            let datodiv = document.createElement(`div`);
            let datonom = document.createElement(`div`);
            datodiv.innerHTML = son1.codigo;
            datonom.innerHTML = son1.nombre;
            tcodigo.appendChild(datodiv);
            tnombre.appendChild(datonom);

        }
        //  datoimage.setAttribute(`src`, "img/fruver/fruv.jpg");
        //  prinmage.appendChild(datoimage);


    } else {
        tcodigo.innerHTML = "";
        tnombre.innerHTML = "";
    }
}

document.addEventListener('keydown', function (e) {

    if (event.which == 27) {
        history.back();

    }
})


/*document.getElementById("inputdatos").addEventListener(`keydown`, function () {

    var prinmage = document.getElementById("imagenest");
    var datoimage = document.getElementById("imagenes3");

    if (event.which == 8) {
        
        
        document.getElementById("titulo").innerHTML = "NOMBRE DE LA VERDURA";
        datoimage.setAttribute(`src`, "img/fruver/fruv.jpg");
        prinmage.appendChild(datoimage);

    }
    else if (event.which == 13) {

        obtenerdatos();
       
        //location. reload();
        tcodigo.innerHTML = "";
        tnombre.innerHTML = "";

    }
})*/




