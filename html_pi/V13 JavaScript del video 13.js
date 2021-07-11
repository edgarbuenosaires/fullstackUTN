window.onload = ejecuta; /* Le estamos diciendo que cuando cargue la ventana se ejecute 'ejecuta' autamaticamnete sin necesidad de llamar
la funcion**/

function ejecuta() {
    // DOCUMENT GET ELEMENT BY TAG NAME

    document.getElementsByTagName("p")[0].onclick = saludo;/*estoy indicando que esta funcion 'saludo' se applicara a todas las etiquetas 'p'
    (array 0), lo que significa que es el primer elemento de la matriz**/

    // DOCUMENT GET ELEMENT BY ID

    document.getElementById("importante").onclick = saludo;/*devuelve solo el elemento que tiene el ID 'importante'**/

    /*LOS ARRAYS EN JS SE RECORREN CON BUCLES FOR, esto aplicaria la funcion saludo a todos los h3 de la pagina**/
    for (var i = 0; i <= 3; i++) {
        document.getElementsByTagName("h3")[i].onclick = saludo;

    }
    
    //DOCUMENT GET ELEMENT BY CLASS NAME

    var z = document.getElementsByClassName("masImportante")[0].onclick = saludoalmaricon; /*este metodo devuelve un array, por eso se debe
    declarar una variable e inicilara a lo que devuelve el metodo. **/
}

function saludo() {
    alert("Como te atreves a pulsar en este parrafo DESGRACIADO?");
}

function saludoalmaricon() {
    alert("Pero como seras de maricon que haces clic aca, desgraciado");
}