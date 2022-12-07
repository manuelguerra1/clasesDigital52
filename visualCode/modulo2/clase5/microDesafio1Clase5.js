// monto por alquiler
// parametros tipodevehiculo, diasdealquiler, sillaparabebe
// compacto 14000
// mediano 17000
// camioneta 28000
// silla 1200 por dia

function montoAPagar(tipoDeVehiculo, diasDeAlquiler, sillaParaBebe) {
    let valorCompactoPorDia = 14000;
    let valorMedianoPorDia = 17000;
    let valorCamionetaPorDia = 28000;
    let sillaDelBebe = 1200;
    let total = 0;

    switch (tipoDeVehiculo) {
        case "Compacto":
            total = valorCompactoPorDia * diasDeAlquiler
        break;
        case "Mediano":
            total = valorMedianoPorDia * diasDeAlquiler
        break;
        case "Camioenta":
            total = valorCamionetaPorDia * diasDeAlquiler
        break;
    
        default:
            return "Tipo no valido"
        break;
    }

    if (sillaDelBebe) {
        total = total + (sillaDelBebe * diasDeAlquiler);
        return " Estimado cliente: en base al tipo de vehículo " + tipoDeVehiculo + " alquilado, considerando los" + diasDeAlquiler + " días utilizados y la silla para bebe, el monto total a pagar es de $" + total;
    }

    return " Estimado cliente: en base al tipo de vehículo " + tipoDeVehiculo + " compacto alquilado, considerando los" + diasDeAlquiler + " días utilizados, el monto total a pagar es de $" + total;
    
}

console.log("el alquiler se fue a las nubes", montoAPagar("Compacto", 5, true));
console.log("el alquiler se fue a las nubes", montoAPagar("Compacto", 5, false));