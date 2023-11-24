// ----------------- ALGORITMIA ----------------- //

/*    ## Analizar el problema: quiero imprimir un mensaje por consola, pulsando un botón

      ## Desglosar el problema

      - Vincular html y js, ver si funciona
      - Crear el elemento que va a detonar la acción
      - Asignamos un id al elemento, para poder manejarlo desde JS
      - Llamamos al botón desde JS para poder manejarlo y comprobamos que funciona
      - Definir la función y su acción, así como los elementos necesarios

*/

// console.log("Holaaa!");

const actionButton = document.getElementById('actionButton');
// console.log(actionButton);

function showMessage () {
    console.log("Hello world and button click");
}



// ------------ MÉTODO  2 ------------ //
//actionButton.onclick = showMessage;



// ------------ MÉTODO  3 ------------ //
//actionButton.onclick = addEventListener("click", showMessage);
actionButton.addEventListener("click", showMessage)
