/*
Escribe un programa que, en un bucle, 
divida el número 1000 entre elementos sucesivos del arreglo de 
números, mostrando el resultado de cada división. 
Para dividir los números, usa la función de la tarea anterior.
Usa la sentencia try...catch para manejar una excepción lanzada 
en el caso de la división entre cero. Si se detecta una excepción 
de este tipo, el programa debe imprimir un mensaje apropiado 
(tomado de la excepción) y continuar su operación 
(división por elementos sucesivos del arreglo).
*/

let dividendo = 1000;
let divisor = [10, 40, 0, 20, 50];

    function div(dividendo, divisor) {
        if (divisor === 0) {
        throw new RangeError("El divisor no puede ser cero.");
        }
        return dividendo / divisor;
    // }
}

 for (i=0; i<divisor.length; i++){
  try {
    const resultado = div(dividendo, divisor[i]);
    console.log(`El resultado de la división es: ${resultado}`);
  } catch (error) {
    console.log(error.message);
  }
}