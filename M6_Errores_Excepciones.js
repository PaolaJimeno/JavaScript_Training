// TAREA 1
/*
- Escribe tu propia función div que tomará dos argumentos de llamada \
  y devolverá el resultado de dividir el primer argumento entre el segundo. 

- En JavaScript, el resultado de dividir entre cero es el valor Infinity 
  (o -Infinity, si intentamos dividir un número negativo). 
  
- Cambia esto. Si se pasa 0 como segundo argumento, 
  tu función debería lanzar una excepción RangeError con el mensaje apropiado. 
  
- Prepara una llamada de prueba de la función tanto para la división válida 
  como para la división entre cero.
*/
/*
function division(a,b) {
    if (Number.isFinite(a) && Number.isFinite(b) && b !== 0 && b > 0) {
        console.log(a / b);
    } else {    
    // console.log("Argumentos incorrectos");
    throw new RangeError("numeros negativos y cero son numeros no validos")
    }
}
division (8,-1);
*/

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script> 
    const throwError = () => {
        let x = prompt('Introduce el dividendo');
        let y = prompt('Introduce el divisor');
    try{
        if (isNaN(y)) throw 'Valor ingresado en divisor no es un numero'
        if (y == '') throw 'Vacio no es un numero valido para el divisor';
        if (x == '') throw 'Vacio no es un numero valido para el divisor';
        x = Number(x);
        y = Number(y);
        if (y == '0') throw 'Cero no es un numero valido para el divisor';
        if (y < 0) throw 'Numero negativo no es un numero valido para el divisor';
        } catch(error){
            console.log('error name: '+ error.name);
        }finally{
          console.log(`El resultado de la division de ${x}/${y} es = ` + (x / y)); 
        }
    }

throwError();
    </script>
</body>
</html>
*/


// TAREA 2 

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
