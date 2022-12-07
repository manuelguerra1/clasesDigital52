// Graduados de HTML5: “30 45 25 34 18 23 16 50 72 70”
// Graduados de CSS3: “50 45 71 34 23 45 65 75 63 43 74 70”
// Graduados de JAVASCRIPT: “70 65 58 45 23 57 34 17 72”
// Graduados de NODEJS: “45 56 73 34 65 72 70 32”
//fn 4 array por argumento calcularPromedio

let html = "30 45 25 34 18 23 16 50 72 70"

let css = "50 45 71 34 23 45 65 75 63 43 74 70"

let js = "70 65 58 45 23 57 34 17 72"

let nodejs = "45 56 73 34 65 72 70 32"

html = html.split(" ")
css = css.split(" ")
js = js.split(" ")
nodejs = nodejs.split(" ")


function calcularPromedio(arrHtml, arrCss, arrJs, arrNodejs, numero){
    switch (numero) {
        case 1:
            return `calculo promedio ${promedio(arrHtml)}`
            break;
        case 2:
            return `calculo promedio ${promedio(arrCss)}`
            break;
        case 3:
            return `calculo promedio ${promedio(arrJs)}`
             break;
        case 4:
            return `calculo promedio ${promedio(arrNodejs)}`
            break;
    
        default:
            return `numero incorrecto`
            break;
    }
}

function promedio(valores) {
    let suma = 0

    for (let index = 0; index < valores.length; index++) {
        suma += parseInt(valores[index])
    }

    return suma / valores.length
}

console.log("aqui calculamos el promedio " + calcularPromedio(html, css, js, nodejs, 4));
