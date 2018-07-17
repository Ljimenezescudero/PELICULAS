/**
 * Carga de manera asíncrona el contenido de una URL
 * url Url del recurso de internet que se desea procesar
 */
function cargar(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            gestionarRespuesta(this.responseText);
        } else if (this.readyState == 4) {
            gestionarError();
        }
    };
    xhttp.open("GET", url, true);//Si en vez de true indicamos false, la petición es síncrona
    xhttp.send();
}
/**
 * Se invoca cuando el proceso no ha finalizado con status 200
 */
function gestionarError(){

}
/**
 * Se invoca cuando el proceso ha finalizado con status 200
 * respuesta Texto de la respuesta
 */
function gestionarRespuesta(respuesta){
    console.log(respuesta);
    document.getElementById("nn").innerHTML="";
    var obj = JSON.parse(respuesta);
    console.log(obj);
    console.log(obj.Director);
    var nombre= document.createElement("h1");
    var textoNombre = document.createTextNode(obj.Title);
    nombre.appendChild(textoNombre);
    document.body.appendChild(nombre);

    var Director= document.createElement("h2");
    var textoDirector = document.createTextNode(obj.Director);
    Director.appendChild(textoDirector);
    document.body.appendChild(Director);

    var año= document.createElement("h3");
    var textoAño = document.createTextNode(obj.Year);
    año.appendChild(textoAño);
    document.body.appendChild(año);

    var SINOPSIS= document.createElement("h4");
    var textoSinopsis = document.createTextNode(obj.Plot);
    SINOPSIS.appendChild(textoSinopsis);
    document.body.appendChild(SINOPSIS);

   var poster = document.createElement("img");
   poster.setAttribute("src",obj.Poster);
   document.getElementById("nn").appendChild(poster);



}