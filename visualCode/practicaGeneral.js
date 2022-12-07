
// function cantidadDeMesesConGanancia(unPeriodo) {
//     let cantidad = 0;
//     for (let i = 0; i < unPeriodo.length;i++) {
//      let mes = unPeriodo[i];
//       if(mes > 0){
//         cantidad++
//       }
      
//     }
//     return cantidad;
//   }
//   console.log(cantidadDeMesesConGanancia([1, 4, 6, -2, 0, -9, 4]))


//  function saldosDeMesesConGanancia(unPeriodo){
//     let gananciasAlmacenadas = [];
//   for (let i = 0; i < unPeriodo.length;i++) {
//    let saldo = unPeriodo[i];
//     if(saldo > 0){
//       gananciasAlmacenadas.push(saldo);
//     }
    
//   }
//   return gananciasAlmacenadas;
// }
// console.log(saldosDeMesesConGanancia([10, -10, 2, 100]));

// for (let index = 0; index <= 25; index++) {
//     console.log("los numeros que le declare que me cuente son: " + index);
    
// }

// let index = 0;
// while (index > -5) {
//     console.log("los numeros negativos son: ", index);
//     index--    
// }



// function reporteDePasajeros(estacion){
//     let array = []
//     let cantidadPasajeros = 0
//     for (let index = 0; index <= estacion; index++) {
//       switch (index) {
//         case 0:
//           cantidadPasajeros += 200;
//           array.push("En la estación " + index + " hay " + cantidadPasajeros + " pasajeros arriba del tren")
          
//           break;
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//           cantidadPasajeros += 20;
//           array.push("En la estación " + index + " hay " + cantidadPasajeros + " pasajeros arriba del tren")
          
//           break;
//         case 5:
//           cantidadPasajeros += 40;
//           array.push("En la estación " + index + " hay " + cantidadPasajeros + " pasajeros arriba del tren")
          
//           break;
      
       
//       }
      
//     }
//   return array
// }
// reporteDePasajeros(0)
// reporteDePasajeros(1)
// reporteDePasajeros(2)
// reporteDePasajeros(3)
// reporteDePasajeros(4)
// reporteDePasajeros(5)
// console.log(reporteDePasajeros(3))

// let fs = require("fs")

// let archivo = fs.readFileSync(__dirname + "/metodoPrueba.txt", "utf-8")

// console.log(archivo);

// console.log(__dirname);

let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
let array3 = [...array1, ...array2]
console.log(array3);




















