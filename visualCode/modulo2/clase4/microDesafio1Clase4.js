// Perfil
//si esta en blanco => debe especificar el perfil del usuario.
//si es admin => Usted tiene todos los privilegios de uso del sistema.
// si es un asistente => Usted sólo tiene permisos de registrar, modificar y consultar datos.
//si es un invitado => Usted sólo tiene permisos de consultar datos.
//si no es ningun dato => Debe especificar un perfil válido.
let perfil = "administrador";
switch (perfil) {
    case "":
        console.log("debe especificar el perfil del usuario.");
        break;
    case "ADMINISTRADOR":
    case "Administrador":
    case "administrador":
        console.log("Usted tiene todos los privilegios de uso del sistema.");
            break;
    case "ASISTENTE":
    case "Asistente":
    case "asistente":
        console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos.");
        break;
    case "INVITADO":
    case "Invitado":
    case "invitado":
        console.log("Usted sólo tiene permisos de consultar datos.");
        break;
    default:
        console.log("Debe especificar un perfil válido.");
        break;
}