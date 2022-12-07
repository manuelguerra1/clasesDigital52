let mensaje = " gran dia para practicar JS ";

console.log("el mensaje principal es:", mensaje);

// ejemplo de lenght

let cantidadDeCaracteresDelMensaje = mensaje.length;
console.log("la cantidad de caracteres de esta cadena de texto es:", cantidadDeCaracteresDelMensaje);

// ejemplo indexOf
let numeroDeIndiceDeLaPalabraQueIndique = mensaje.indexOf("dia");

console.log("la palabra dia se encuentra en el indice numero:", numeroDeIndiceDeLaPalabraQueIndique);


let palabraQueNoSeEncuentraEnElMensaje = mensaje.indexOf("tarde");

console.log("cuando una palabra no se encuentra en el mensaje, el indexOf va a dar como resultado un: ", palabraQueNoSeEncuentraEnElMensaje);

// ejemeplo de slice
let mensajeRecortadoPorCaracteres = mensaje.slice(0, 9);

console.log("si yo recorto el mensaje en los parametros que le indique, el resultado se basa en los indices de cada caracter, en este caso el resultado de los indices que le indique, seria:", mensajeRecortadoPorCaracteres);

// ejemplo de trim
let mensajeSinEspaciosEnEsquinas = mensaje.trim();

console.log("el mensaje sin espacios en el principio y final quedaria de esta forma:", mensajeSinEspaciosEnEsquinas);

// ejemplo de split
let mensajeSeparadoPorEspacio = mensaje.split(" ");

console.log("el mensaje, convertido en array, separado en indices por palabras, quedaria de esta forma:", mensajeSeparadoPorEspacio);


let mensajeSinSeparar = mensaje.split("");

console.log("el mensaje, convertido en array, separado en indices por caracteres, quedaria de esta forma:", mensajeSinSeparar);


let mensajeHechoStringEnMismoIndice = mensaje.split("b ");

console.log("(CONSULTAR DUDA POR ESTE PARAMETRO) el mensaje, convertido en array, todo en un mismo indice, quedaria de esta forma:", mensajeHechoStringEnMismoIndice);

// ejemplo replace
let palabraQueReemplace = mensaje.replace("gran", "hermoso")

console.log("el mensaje, con la palabra que reemplace, quedaria de esta forma:", palabraQueReemplace);
