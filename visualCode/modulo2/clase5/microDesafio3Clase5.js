function nombre(a){
    console.log(a.toUpperCase());  
}
nombre("nosequeponer");

function nombre1 (parametro1){
    console.log("el tipo de dato del parametro es:", typeof(parametro1));
}
nombre1(true)

function calculo(edad){
    console.log(edad + " años de un perro son igual a " + edad * 7 + " años humanos.");  
    
}
calculo(7)

function precioPorHora(salarioMensual, diasTrabajados, horasPorDia){
    let precioPorHora = salarioMensual / diasTrabajados / horasPorDia;
    console.log(precioPorHora);
}
precioPorHora(40000, 24, 8)