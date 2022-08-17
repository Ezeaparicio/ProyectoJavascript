var pais_patente = [];

function validar() {
    let patente = document.getElementById("patente").value;
    if (patente.length === 0) {
        alert("ingrese la patente del vehículo");
    } else if (patente.length < 6) {
        alert("Patente incorrecta");
    } else {
        cargar();
    }
}

function cargar() {
    let paisSeleccionado = document.getElementById("LPais").value;
    let patente = document.getElementById("patente").value;
    var dato = paisSeleccionado + " - " + patente.toUpperCase();
    pais_patente.push(dato);
    document.getElementById("patente").value = "";
    document.getElementById("patente").placeholder = "Patente";
    llenarLista();
    document.getElementById("Lpais").value = "Pais";
}

function llenarLista() {
    for (let i = pais_patente.length - 1; i < pais_patente.length; i++) {
        let paisSeleccionado = document.getElementById("LPais").value;
        let lista_patentes = document.getElementById("LPatentes");
        let elemento_opcion = document.createElement("option");
        elemento_opcion.value = i + 1;
        elemento_opcion.text = pais_patente[i];
        if (paisSeleccionado == "Pais") {
            alert("Seleccione Un Pais");
        } else {
            if (paisSeleccionado == "Argentina") {
                elemento_opcion.style = "color:blue;";
                lista_patentes.add(elemento_opcion);
            } else {
                if (paisSeleccionado == "Brasil") {
                    elemento_opcion.style = "color:green;";
                    lista_patentes.add(elemento_opcion);
                } else {
                    if (paisSeleccionado == "Chile") {
                        elemento_opcion.style = "color:red;";
                        lista_patentes.add(elemento_opcion);
                    }
                }
            }
        }
    }
}