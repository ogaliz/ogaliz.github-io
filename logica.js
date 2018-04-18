var mitexto = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");
var fireheading = document.getElementById("cabecera");

//apuntamos a la cabecera de nuestra bbdd
var firecabecera = firebase.database().ref().child('heading');

//cogemos informacion de la bbdd con la funcion .on()
firecabecera.on('value', function(datodeFirebase){
    //el dato de virebase es un objeto, utilizamos la funcion .val() //para extraer su valor.
   fireheading.innerHTML = datodeFirebase.val(); 
});

function submitClick(){
    
    //apuntamos a la raiz, y creamos un nodo appData que todavia no existe
    var miBasededatos = firebase.database().ref();
    //apuntamos al nodo hijo de la raiz
    var directorio = miBasededatos.child('appData');
    //añadimos el contenido al nodo con el metodo set
    //directorio.push('Colombia');
    
    //almacenamos el texto del cuadro de texto en el nodo appName
    var texto = mitexto.value;
    miBasededatos.child('appName').push(texto);

}

//datos de la app que colocaremos dentro de appData
//var obj = {
//    name: "Juegos de mesa",
//    company: "EscuelaIT",
//    email: "contactanos@email"
//}
//
////volcamos el contenido con el metodo set()
//directorio.set(obj);

