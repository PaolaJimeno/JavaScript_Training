/*

**Operadores aritméticos**

Completa los operadores que faltan para obtener el resultado esperado (reemplaza el guión bajo con el operador apropiado):

console.log(2*3+1);
console.log(2**5);
console.log(5/1);
console.log((8 * 2) * 5 / 2);
*/

/*
**Operadores de comparación**

Completa los operadores de comparación que faltan de tal manera que todas las expresiones resulten `true` - verdaderas (reemplaza el guión bajo con el operador apropiado):

console.log(4 * 5 === 20);
console.log(6 * 5 == "30");
console.log(-17 < 0);
console.log(25 > 1);
console.log(2 + 2 * 2 > 4);

*/

/*
**Operadores Lógicos**

Completa los operadores de comparación que faltan de tal manera que todas las expresiones resulten `true` - verdaderas (reemplaza el guión bajo con el operador apropiado):

console.log(true != false);
console.log(false == false);
console.log(false || false || true);
console.log(true || false && false && true);

*/

/*
**Tarea 1**

Usando todo lo que has aprendido hasta este punto, escribe una secuencia de comandos que le pregunte al usuario sobre el ancho, alto y largo de una caja, luego calcula y devuelve al usuario el volumen de esta caja.

Como ejemplo, una caja con `anchura = 20`, `altura = 10` y `longitud = 50` tendrá un volumen de 10000 (omitiendo unidades, ya que no son relevantes en este escenario). Por ahora, supón que los valores proporcionados por el usuario son números válidos, pero si tienes alguna idea sobre cómo hacerlo, puedes intentar hacer este script de tal manera que sea resistente a los valores no válidos.

<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE+edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let ancho = prompt("Ingrese el ancho");
        let altura = prompt("Ingrese la altura");
        let longitud = prompt("Ingrese la longitud");
        // calcular volumen de caja
        const volumen = ancho * altura * longitud
        // mostrar el resultado al usuario
        alert(`el volumen de la caja es ${volumen}`)
    </script>
</body>
</html>


*/

/*
## **Escenario**

Volvamos a nuestra lista de contactos. Después de algunos ajustes recientes (es decir, el emplear un arreglo y objetos), en realidad comienza a parecerse a una lista. Sin embargo, quedaba un problema bastante grave. El cambio de datos en la lista, como agregar un nuevo contacto, debe proporcionarse de inmediato en el código del programa. ¿Qué sucede si queremos darle al usuario la posibilidad de ingresar los datos del contacto agregado mientras se ejecuta el programa? Modifica el programa para agregar, al final de la lista, no el contacto, que se da en el código, sino el que el usuario dará durante la ejecución del programa. Usa el método `prompt` para hacer esto. Al final, muestra el primer y último contacto de la lista.


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

        let newContact = {
            nombre: prompt("Ingrese el nombre"),
            telefono: prompt("Ingrese el telefono"),
            correo: prompt("Ingrese el correo")
        }        
        listaDeNombres.push(newContact);
        // console.log(newContact);
        console.log('Primer contacto',listaDeNombres[0])
        console.log('Ultimo contacto',listaDeNombres[2])
        console.log('Ultimo contacto',listaDeNombres[listaDeNombres.length -1])

    </script>
</body>
</html>

*/
