// El for de javascript nos provee una manera de definir y controlar estos cuatro conceptos directamente en su declaración.

    

for(inicio, condicion, modificador) {
  // Código que se ejecutará más tarde
}


for(let i = 0; i < 3; i++) {
    console.log(i) //muestra 0, luego 1, luego 2 y termina
   
   }
// En este código la variable centinela es “i”, se inicializa en 0, la condición de corte será que llegue a 3 o más, y su código de cambio es que aumente en 1 luego de cada repetición. ¿Te imaginas qué pasaría con i y qué mostraría este ciclo si cambiaramos el código de cambio a lo siguiente? i=i*2



// Ahora, veamos un ejemplo de cómo se puede usar un loop para otra cosa que recorrer listas.
// Calculando números primos: la siguiente función debe devolver true si el número pasado como parámetro “n” es primo, y false en caso contrario:

function esNumeroPrimo(n){
//Si “n” es menor o igual a 1, definitivamente no es primo
if (n <= 1){
		return false;
}
//Si hay algún número debajo de “n” por el que podamos dividir n y sea una división sin resto entonces tampoco es primo.
	for (let i = 2; i < n; i++){
		if (n % i == 0) return false;
	}
	//Si llegamos hasta “n” en el ciclo y nunca retornamos
	// entonces, “n” es primo!
	return true;
}
    

// Solución a “Primeros 20 números impares”

let num = 1
for (let i = 0; i < 20;) {
	if (num%2!=0) {
    	console.log(num);
    	i++;
	}
	num++
}
   