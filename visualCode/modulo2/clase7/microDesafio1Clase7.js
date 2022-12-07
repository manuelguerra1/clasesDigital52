// array con op bancarias (positivos y negativos)
// callback
// function(nombre, apellido, salgo)

const operacionesBancarias = [ 1000, 2500, 3000, -1500 ]

function calcularSaldos(operaciones) {
    let depositos = 0;
    let retiros = 0;
    
    for (let index = 0; index < operaciones.length; index++) {
       if (operaciones[index] < 0) {
            // deposito
            depositos += operaciones[index];
       } else {
            //retiro
            retiros += operaciones[index];
       }
        
    }

    return [
    depositos,
    retiros,
    depositos + retiros
    ]
    
}
console.log(calcularSaldos(operacionesBancarias));

function resumen(nombre, apellido, operaciones, callback) {
    let saldo = callback(operaciones);

    return `resumen de ${nombre}, ${apellido} su saldo es ${saldo[2]}. pero ademas tengo depositos ${saldo[0]} y queres mas? toma ${saldo[1]}`;
}
console.log(
    resumen("manuel", "pedro", operacionesBancarias, calcularSaldos)
);



// let operacionesBancarias = [1000, 2500, 2000, -1500, -8000, -500, -5000];
// let saldoTotal = 49500;

// function calcularSaldo(array){
//     let retiros = 0;
//     let depositos = 0;
//     for (i = 0; i < array.length; i++){
//         array[i] > 0 ? depositos += array[i] : retiros -= array[i];  
//     }
//     let saldoActual = (saldoTotal + depositos) - retiros;
   
//     console.log(`El monto total de los depositos es de: $${depositos}`);
//     console.log(`El monto total de los retiros es de: $${retiros}`);
//     console.log(`Por lo tanto, su saldo actual en la cuenta es de: $${saldoActual}`);
 
 
// }
// //calcularSaldo(operacionesBancarias);

// function retornarInfo(nombre, apellido, operaciones, callback){
//     let nombreCliente = nombre;
//     let apellidoCliente = apellido;
//     console.log(`Estimado/a ${nombreCliente} ${apellidoCliente}:\n`);
//     callback(operaciones);
// }

// retornarInfo('Lautaro', 'Robles', operacionesBancarias, calcularSaldo);