// conversion de array u objeto literal a formato json stringify
let json = '{"nombre": "manuel", "edad": 18,  "nacionalidad": "argentina"}'

let datoEnJsonParse = JSON.parse(json)
console.log(datoEnJsonParse );

let datoEnObjLit = {
    nombre: "manuel",
    edad: 17
}
let datoEnJsonStringify = JSON.stringify(datoEnObjLit);
console.log(`el dato en modo JSON.stringify quedaria de esta forma: ${datoEnJsonStringify}`);



let parseAStringify = JSON.stringify(datoEnJsonParse)
console.log(`el dato en parse, convertido a stringify quedaria de esta forma ${parseAStringify}`);