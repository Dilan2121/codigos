
var titulo = document.getElementById("titulo");
var buscador = document.getElementById("inputl");
window.onload = () => {
    var inpu = document.getElementById("inputdatos");
    inpu.focus();
}


document.querySelector("#buscador").addEventListener("click", function () {
    obtenerdatos();

})

async function obtenerdatos() {
    //inputdato ="";
    var inputdato = document.getElementById("inputdatos").value;
    var prinmage = document.getElementById("imagenest");
    var datoimage = document.getElementById("imagenes3");
    var tnombr = document.getElementById("nomb");
    tnombr.innerHTML = "";

    const response = await fetch("http://127.0.0.1:5500/user.json");
    const json = await response.json();
    removeElements();
    for (const verd in json) {
        if (Object.hasOwnProperty.call(json, verd)) {
            const element = json[verd];
            var codigo = element.codigo;
            var nombre1 = element.nombre;

            if (codigo == inputdato.toUpperCase()) {

                titulo.innerHTML = nombre1;
                datoimage.setAttribute(`src`, element.imgen1);
               
                prinmage.appendChild(datoimage);

                return;

            } else {
                titulo.innerHTML = "UPS! CODIGO NO ENCONTRADO";
                datoimage.setAttribute(`src`, "img/error/error.jpg");
                prinmage.appendChild(datoimage);

            }
        }

    }

}



document.getElementById("inputdatos").addEventListener(`keyup`, function (e) {

    arr1 = [8, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 144,111, 106, 103, 104, 105, 100, 101, 102, 97, 98, 99, 96];

    for (i = 0; i < arr1.length; i++) {
        var eve = arr1[i]
        if (event.which === eve) {
            nbuscador();
        }
        else if (event.which == 13) {
            obtenerdatos();
            removeElements();
        }

        else if (event.which == 27) {
            history.back();

        }
    }
})
async function nbuscador() {

    var inputdaton = document.getElementById("inputdatos").value;
    var tnombr = document.getElementById("nomb");
    tnombr.innerHTML = '';
    arr = [];
    //var datoimage = document.getElementById("imagenes3");
    //console.log(inputdaton)
    const response = await fetch("http://127.0.0.1:5500/user.json");
    const json = await response.json();
    // var jts =JSON.parse(json);

    removeElements();
    for (let producto of json) {
        let nombre5 = producto.codigo.toLowerCase();
        let i = arr.push(nombre5);
        // console.log(arr)

    }
    let sorted = arr.sort();
    console.log(sorted)
    // removeElements();
    for (let i of sorted) {

        if (i.toLowerCase().startsWith(inputdaton.toLowerCase()) && inputdaton != "") {
            // tnombres.innerHTML += `<li><a>${producto.nombre}<a><li><br>`
            let listItem = document.createElement("li");
            listItem.classList.add("list-items");
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick", "displayNames('" + i + "')");
            let word = "<b>" + i.substr(0, inputdaton.length) + "</b>";
            word += i.substr(inputdaton.length)

            listItem.innerHTML = word;
            document.querySelector("#nomb").appendChild(listItem);


        }
    }
}

function displayNames(value) {
    var inputdaton = document.getElementById("inputdatos").value = value;
    removeElements();
    obtenerdatos();
}
function removeElements() {
    let items = document.querySelectorAll("ul .list-items");
    items.forEach((item) => {
        item.remove();
    })
};



