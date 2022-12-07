let peliculas = ["turno de dia", "30 noches con mi ex", "bestia", "el monte", "top gun maverick", "elvis", "thor: amor y trueno"];
    console.log("las nuevas peliculas en cartelera actualmente son", peliculas);


let peliculaMasVendida = peliculas.pop();
    peliculaMasVendida = peliculaMasVendida.toUpperCase();
console.log("surgio un error de edicion y tuvimos que retirar " + peliculaMasVendida + " de la cartelera, en este momento las peliculas en cartelera son:", peliculas);


let peliculaMasVendidaPrimera = peliculas.unshift(peliculaMasVendida);
    console.log("la pelicula mas vendida esta en el primer puesto, entonces por orden quedaria:", peliculas);

    
let peliculasAEstrenar = "counter-strike " + "NOP " + "vertigo " + "nick " + "avatar";
    console.log("las peliculas proximas a estrenar son:", peliculasAEstrenar);

let peliculasAEstrenarEnArray = peliculasAEstrenar.split(" ")
console.log("las peliculas convertidas a array son:", peliculasAEstrenarEnArray);

let juegoExcluido = peliculasAEstrenarEnArray.shift();
console.log("el juego " + juegoExcluido + " no es una pelicula");
console.log("por lo tanto, las peliculas restantes son:", peliculasAEstrenarEnArray);

function sumaEstructuras(estructura1, estructura2){
    return estructura1.concat(estructura2);
}
peliculas = sumaEstructuras(peliculas, peliculasAEstrenarEnArray);
console.log("todas las peliculas que estan en cartelera son:", peliculas);