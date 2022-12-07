function tablaDeMultiplicar(){
    let multiplo = 1
    for (let index = 1; index <= 10; index++) {
        let producto = index * multiplo
        let resultado = `el resultado de ${multiplo} * ${index} = ${producto}`
        console.log(resultado);
    }
}

tablaDeMultiplicar(1)