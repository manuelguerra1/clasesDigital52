// pago mes
// consumo kwh
// mas de 300 se incrementa un 20 por ciento, sino sin aumento
// debido a que su hogar tuvo un consumo
let pagoMes = 12000;
let hogarConsumoKWH = 450;
let porcentajeAumento = 1.20;
let limiteDeConsumo = 300;
let mensaje = "Debido a que su hogar tuvo un consumo de " + hogarConsumoKWH + "kwh, en base al ajuste tarifario (hogares con consumo mayor a " + limiteDeConsumo + "kwh por mes tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado el total a pagar, que será de $" + (pagoMes * porcentajeAumento); 

let resultado = hogarConsumoKWH > limiteDeConsumo ? mensaje : "se mantiene el subsidio"
console.log(resultado);

