function sumatoriaBajoImporte(importes){
    let contador = 0;
    for(let index = 0; index <= importes.length; index++){

        if(importes[index] > 0 && importes[index] <= 1000){
            contador += importes[index];
        }
    }
    return contador
    
}



function asientosDisponibles(asiento123, asiento){
    if (asiento123.indexOf(asiento) !== -1) {
      return "Felicitaciones, el asiento número " + asiento +  " está disponible"
      
    } else {
        return "Lo sentimos, el asiento número " + asiento +  " está ocupado, pero aún quedan " + asiento123.length +  " asientos disponibles"
    }
}



function reporteDePasajeros(estacion){
    let array = []
    let cantidadPasajeros = 0
    for (let index = 0; index <= estacion; index++) {
      switch (index) {
        case 0:
          cantidadPasajeros += 200;
          array.push("En la estación " + index + " hay " + cantidadPasajeros + " pasajeros arriba del tren")
          
          break;
        case 1:
        case 2:
        case 3:
        case 4:
          cantidadPasajeros += 20;
          array.push("En la estación " + index + " hay " + cantidadPasajeros + " pasajeros arriba del tren")
          
          break;
        case 5:
          cantidadPasajeros += 40;
          array.push("En la estación " + index + " hay " + cantidadPasajeros + " pasajeros arriba del tren")
          
          break;
      
       
      }
      
    }
  return array
}



function laClaveSecreta(caracteres){
    let arraySinAsteriscos = caracteres.filter((array) => array !== "*")
    arraySinAsteriscos.reverse()
    let union = arraySinAsteriscos.join()
    return union
}
console.log(laClaveSecreta( ["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"]));