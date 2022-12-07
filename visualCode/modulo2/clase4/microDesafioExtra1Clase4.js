let velocidad = 268
let altura = 150

switch ((velocidad >= 268 && velocidad <= 278) && (altura >= 150 && altura <=300)) {
    case true:
        console.log("permiso de aterrizaje concedido.")
        break;
    case false:
        console.log("permiso de aterrizaje denegado.")
         break;
}

let permisoDeAterrizaje = (velocidad >= 268 && velocidad <= 278) && (altura >= 150 && altura <= 300) ? "permiso de aterrizaje concedido." : "permiso de aterrizaje denegado."
    console.log(permisoDeAterrizaje);