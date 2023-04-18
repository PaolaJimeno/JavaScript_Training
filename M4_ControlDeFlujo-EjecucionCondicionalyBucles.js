/*
Podemos mejorar un poco nuestro programa de lista de contactos mediante el uso de bucles. Ahora puedes intentar mostrar no solo el primer o último contacto, sino todos los contactos de la lista, independientemente de su número.

Además, intenta encerrar todo el programa en un bucle para que al usuario se le pregunte repetidamente qué quiere hacer. El usuario puede optar por:

- Mostrar el primer contacto (primero)
- Mostrar el último contacto (último)
- Mostrar todos los contactos (todos)
- Añadir un nuevo contacto (nuevo)
- Salir del programa (salir)

Después de ejecutar la acción seleccionada, el programa le dará la oportunidad de elegir nuevamente. El programa debe finalizar las acciones solo después de que el usuario dé un comando específico, por ejemplo salir`.
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
        let listaDeNombres = [
            {
                nombre: 'Maxwell Wright',
                telefono: '(0191) 719 6495',
                correo: 'Curabitur.egestas.nunc@nonummyac.co.uk'
            },
            {
                nombre: 'Raja Villarreal',
                telefono: '(0191) 719 6495',
                correo: 'posuere.vulputate@sed.com'
            },
            {
                nombre: 'Helen Richards',
                telefono: '0800 1111',
                correo: 'libero@convallis.edu'
            },
        ]

    let option = '';
    do {
        option = prompt("Que contacto quiere ver, primero, ultimo, todos, nuevo, salir");
        console.log(option);
        switch (option) {
        case 'primero':
            console.log('Primer contacto',listaDeNombres[0]);
             break;
        case 'ultimo':
            console.log('Ultimo contacto',listaDeNombres[listaDeNombres.length -1]);
            break;
        case 'todos':
            console.log('Todos los contactos',listaDeNombres)
            break;
        case 'nuevo':
            let newContact = {
            nombre: prompt("Ingrese el nombre"),
            telefono: prompt("Ingrese el telefono"),
            correo: prompt("Ingrese el correo")
            }        
            listaDeNombres.push(newContact);
            break;
        case 'salir':
             break;
        default:
            console.log(`Ingreso una opcion no valida`);
        }
    } while (option != 'salir');
    </script>
</body>
</html>
*/

/*
Escribe un fragmento de código que escriba números del 100 al 0 en la consola, pero en pasos de 10 en 10; entonces sería 100, 90, 80... etc.
*/

for (i=100;i>=0; i -= 10)
{
    console.log(i);
}



/*
Modifica el programa anterior para que le pida al usuario el primer y último número a usar en lugar de 100 y 0 (pista: use el cuadro de diálogo prompt). Comprueba si los valores introducidos son correctos (que el valor inicial sea mayor que el valor final).
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
    let inicio = prompt("Introduce el valor de inicio");
    let fin = prompt("Introduce el valor final");
    let inicio2 = Number(inicio)
    let fin2 = Number(fin)
    console.log(typeof inicio2);
    console.log(typeof fin2);

    if (Number.isInteger(inicio2) && Number.isInteger(fin2)) {
        for (i=inicio; i>=fin; i -= 10)
        {
            console.log(i);
        }
    }
    </script>
</body>
</html>
*/
/*
Hay diez números diferentes en este arreglo:

```
let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];
```

Escribe un programa que primero escriba todos estos números en la consola, luego solo los que son pares (pista: el residuo de dividir un número par entre 2 es igual a 0), luego solo los que son mayores que 10 y al mismo tiempo menor que 60.
*/
// 3
let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

// primero escriba todos estos números en la consola
console.log(numbers);

// luego solo los que son pares
// (pista: el residuo de dividir un número par entre 2 es igual a 0)\
console.log('luego solo los que son pares');
for (let i = 0; i <= numbers.length-1; i++) {
    if (numbers[i] % 2 == 0) {
      console.log(numbers[i]);
    }
}

// luego solo los que son mayores que 10 y al mismo tiempo menor que 60.
console.log('luego solo los que son mayores que 10 y al mismo tiempo menor que 60');
for (let i = 0; i <= numbers.length-1; i++) {
    if (numbers[i]>10 && numbers[i]<60) {
      console.log(numbers[i]);
    }
}

/*
Escribe un programa utilizando un bucle que le pida al usuario el nombre de una película (primer cuadro de dialogo) y su calificación de www.imdb.com (segundo cuadro de dialogo). 

El programa te permitirá ingresar tantas películas como desees en el arreglo de películas. 

Cada elemento del arreglo será un objeto, que constará de dos campos: título e imdb. La entrada se completa si el usuario presiona Cancelar en el cuadro de diálogo. 

Luego, el programa debe imprimir primero en la consola todas las películas que tienen una calificación inferior a 7, luego aquellas cuya calificación sea mayor o igual a 7. Escribe el nombre de la película y su calificación uno al lado del otro, por ejemplo:< /p>Perdido en la Selva (7.7)
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
        let listaPeliculas = [];
        let option = '';
        let decision = true;
    while (decision != false) { 
        let newPelicula = {
            nombrePelicula: prompt("Ingrese nombre de una película"),
            calificacion: prompt("Ingrese calificación de www.imdb.com")
            }        
            listaPeliculas.push(newPelicula);
        decision = window.confirm('Desea ingresar una nueva pelicula?');
    } 
    console.log(listaPeliculas);
    </script>
</body>
</html>
*/


/*
El contenido del objeto que describe la posición del barco llamado "Mareno" se muestra en la consola.
*/

let vessel = {
    LATITUD: 40.07288,
    LONGITUD: 154.48535,
    CURSO: 285.6,
    VELOCIDAD: 14.0,
    OMI: 9175717,
    NOMBRE: 'MARENO'
}

for( let key in vessel) {
    console.log(`${key} -> ${vessel[key]}`);
}



/*
Modifica el programa de calculadora que creaste en el Módulo 4, 
Sección 2, de tal manera que funcione en el bucle hasta que el 
usuario ingrese S en cualquiera de los cuadros de dialogo.
*/

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
    function suma(a,b) {
    return a+b
    }
    function resta(a,b) {
    return a-b
    }
    function multiplicacion(a,b) {
        return a*b
    }
    function division(a,b) {
    return a/b
    }
    function operaciones(funcion,numeroA,numeroB) {
        return funcion(numeroA,numeroB)
    }
    let decision = true;
    while (decision != false && decision != "s") { 
    // Corregido el operador lógico para evaluar si la decisión 
    // es diferente de false y diferente de "s"
            let funcion = ''; 
            funcion = prompt("Ingrese la operacion que desea realizar, suma, resta,multiplicacion, division");
            let primerOperando = prompt("Ingrese el primer valor");
            let primerOp = Number(primerOperando)
            let segundoOperando = prompt("Ingrese el segundo valor");
            let segundoOp = Number(segundoOperando)
            let resultado = operaciones(eval(funcion), primerOp, segundoOp); 
            // Corregido el llamado a la función operaciones para que tome
            // como primer parámetro la función evaluada y se guardó el resultado 
            // en una variable para mostrarlo en un alert
             window.alert("El resultado es: " + resultado);    
        decision = window.prompt('Desea realizar una nueva operacion matematica?, para salir ingrese s');
    } 
    </script>
</body>
</html>