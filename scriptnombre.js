var buton = document.getElementById("boton1");
var buton2 = document.getElementById("boton2");
var ctexto = document.getElementById("ctexto");
var titulo = document.getElementById("titulo");
//var tcodigo = document.getElementById("ccodigos");
//var tnombre = document.getElementById("cnombres");
var buscador = document.getElementById("inputl");


window.onload = () => {
    var inpu = document.getElementById("inputdatosn");
    inpu.focus();
}

document.querySelector("#buscador2").addEventListener("click", function () {
    obtenernombre();

})

async function obtenernombre() {

    var inputdaton = document.getElementById("inputdatosn").value;
    var prinmage = document.getElementById("imagenest");
    var datoimage = document.getElementById("imagenes3")
    var tnombres = document.getElementById("nombres");
    removeElements();


    const response = await fetch("http://127.0.0.1:5500/user.json");
    const json = await response.json();

    for (const verd in json) {
        if (Object.hasOwnProperty.call(json, verd)) {
            const element = json[verd];
            var codigo = element.codigo;
            var nombre1 = element.nombre;

            if (nombre1.toLowerCase() == inputdaton.toLowerCase()) {

                titulo.innerHTML = "CODIGO" + " " + codigo;
                datoimage.setAttribute(`src`, element.imgen1);
                prinmage.appendChild(datoimage);
                return;

            }


            else {
                titulo.innerHTML = "UPS! CODIGO NO ENCONTRADO";
                datoimage.setAttribute(`src`, "img/error/error.jpg");
                prinmage.appendChild(datoimage);

            }

        }

    }

}
document.getElementById("inputdatosn").addEventListener('keyup', function (e) {

    arr1 = [8, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];

    for (i = 0; i < arr1.length; i++) {
        var eve = arr1[i]
        if (event.which === eve) {
            nbuscador();
        }
        else if (event.which == 13) {
            obtenernombre();
            removeElements();
        }

        else if (event.which == 27) {
            history.back();

        }
    }




})


async function nbuscador() {

    var inputdaton = document.getElementById("inputdatosn").value;
    var tnombres = document.getElementById("nombres");
    arr = [];
    const response = await fetch("http://127.0.0.1:5500/user.json");
    const json = await response.json();
    removeElements();
    for (let producto of json) {
        let nombre5 = producto.nombre.toLowerCase();
        let i = arr.push(nombre5);
        // console.log(arr)
    }

    let sorted = arr.sort();
    for (let i of sorted) {

        if (i.toLowerCase().startsWith(inputdaton.toLowerCase()) && inputdaton != "") {

            let listItem = document.createElement("li");
            listItem.classList.add("list-items");
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick", "displayNames('" + i + "')");
            let word = "<b>" + i.substr(0, inputdaton.length) + "</b>";
            word += i.substr(inputdaton.length)

            listItem.innerHTML = word;
            document.querySelector("#nombres").appendChild(listItem);


        }
    }
}

function displayNames(value) {
    var inputdaton = document.getElementById("inputdatosn").value = value;
    removeElements();
    obtenernombre();
}
function removeElements() {
    let items = document.querySelectorAll("ul .list-items");
    items.forEach((item) => {
        item.remove();
    })
};


