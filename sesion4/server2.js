var peticion_http = new XMLHttpRequest();

function cargaContenido(url, metodo, funcion) {
    peticion_http.onreadystatechange = funcion;
    peticion_http.open(metodo, url, true);
    peticion_http.setRequestHeader('Content-type', 'application/json');
    peticion_http.send(null);
}

function muestraContenido() {
    if (peticion_http.readyState == 4 && peticion_http.status == 200) {
        document.getElementById('myDiv').innerHTML = peticion_http.responseText;
    } else {
        document.getElementById('myDiv').innerHTML = 'Problema en la carga';
    }
}

function descargaArchivo() {
    //cargaContenido("https://pokeapi.co/api/v2/pokemon", "GET", muestraContenido);
    //  cargaContenido("http://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=14c293857fefc5bfc79ee7cbe354ee57", "GET", muestraContenido);
    cargaContenido('http://programacion-cum.unex.es/generaContenidos.php', 'GET', muestraContenido);
}
