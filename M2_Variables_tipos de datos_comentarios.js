/*

// 1
let precioUnitarioRosa = 8;
let cantidadRosas = 70;
let precioUnitarioLirio = 10;
let cantidadLirios = 50;
let precioUnitarioTulipan = 2;
let cantidadTulipanes = 120;

    
let precioTotalRosas = precioUnitarioRosa * cantidadRosas;
let precioTotalLirios = precioUnitarioLirio * cantidadLirios;
let precioTotalTulipanes = precioUnitarioTulipan * cantidadTulipanes;


let precioTotal = precioTotalRosas + precioTotalLirios + precioTotalTulipanes

console.log('Rosa:', 'precio unitario:', precioUnitarioRosa,',', 'cantidad:', cantidadRosas,',', 'valor:', precioTotalRosas);
console.log('Lirio:', 'precio unitario:', precioUnitarioLirio,',', 'cantidad:', cantidadLirios,',', 'valor:', precioTotalLirios);
console.log('Tulipan:', 'precio unitario:', precioUnitarioTulipan,',', 'cantidad:', cantidadTulipanes,',', 'valor:', precioTotalTulipanes);
console.log('Total:', precioTotal);


// 2  
// OBJETOS
// Crea un objeto que describa un boleto de tren y guárdalo en la variable ticket. 

let ticket = {
    from: "muyurina",
    to: "sacaba",
    price: 3
};

console.log(ticket);

// -----------------------
let persona = {};

persona.firstName = "Paola";
persona.lastName = "Jimeno";

console.log(persona.firstName);
console.log(persona.lastName);


// ARREGLOS
// Estamos creando una pequeña biblioteca de libros sobre programación en JavaScript.
console.log("----------------------tarea 1------------------------");
let biblioteca = [
    { 
        titulo: "Speaking JavaScript", 
        autor: "Axel Rauschmayer",
        paginas: 460
    },
    { 
        titulo: "Programming JavaScript Applications", 
        autor: "Eric Elliott",
        paginas: 254
    },
    { 
        titulo: "Understanding ECMAScript 6", 
        autor: "Nicholas C. Zakas",
        paginas: 352
    }
];

console.log(biblioteca);

// -----------------------------------------
// tarea 2
console.log("----------------------tarea 2------------------------");
console.log("----------------------Biblioteca 1 + 1 libro nuevo-----------------------");
let lengthBiblio = biblioteca.length;
console.log("Longitud de el arreglo: " + lengthBiblio);

biblioteca[lengthBiblio] = {
    titulo: "Learning JavaScript Design Patterns", 
    autor: "Addy Osmani",
    paginas: 254
};

console.log(biblioteca);

// tarea 3
console.log("----------------------tarea 3------------------------");
console.log("----------------------Biblioteca 2------------------------");
let biblioteca2 = biblioteca.slice(-2);
console.log("biblioteca 2:");
console.log(biblioteca2);


// -------------------------

// tarea 4
console.log("----------------------tarea 4------------------------");
console.log("----------------------Biblioteca 1 menos libro 1------------------------");
biblioteca.shift();
console.log(biblioteca);
let lengthBiblio2 = biblioteca.length;
console.log("Longitud de el arreglo: " + lengthBiblio);

// tarea 5
console.log("----------------------tarea 5------------------------");
console.log("----------------------Suma de paginas------------------------");

// let lengthBiblio = biblioteca.length;
console.log(lengthBiblio);
let sumaDePaginas = 0;
let libroNr = 1;

console.log(biblioteca[0].paginas + biblioteca[1].paginas+ biblioteca[2].paginas); 


/*
Modifica el código de la tarea 1. Supón que los precios de las flores serán constantes (no cambiarán). Declara e inicializa las variables restantes de la misma manera que en el ejemplo anterior. Muestra toda la información recopilada en la consola. Ahora disminuye el número de rosas en 20 y el de lirios en 30. Vuelve a mostrar toda la información recopilada en la consola.
*/

/*
const precioUnitarioRosa = 8;
let cantidadRosas = 70;
const precioUnitarioLirio = 10;
let cantidadLirios = 50;
const precioUnitarioTulipan = 2;
let cantidadTulipanes = 120;
    
let precioTotalRosas = precioUnitarioRosa * cantidadRosas;
let precioTotalLirios = precioUnitarioLirio * cantidadLirios;
let precioTotalTulipanes = precioUnitarioTulipan * cantidadTulipanes;

let precioTotal = precioTotalRosas + precioTotalLirios + precioTotalTulipanes;

console.log('Rosa:', 'precio unitario:', precioUnitarioRosa,',', 'cantidad:', cantidadRosas,',', 'valor:', precioTotalRosas);
console.log('Lirio:', 'precio unitario:', precioUnitarioLirio,',', 'cantidad:', cantidadLirios,',', 'valor:', precioTotalLirios);
console.log('Tulipan:', 'precio unitario:', precioUnitarioTulipan,',', 'cantidad:', cantidadTulipanes,',', 'valor:', precioTotalTulipanes);
console.log('Total:', precioTotal);


cantidadRosas = cantidadRosas - 20;
cantidadLirios = cantidadLirios - 30;

let precioTotalRosas2 = precioUnitarioRosa * cantidadRosas;
let precioTotalLirios2 = precioUnitarioLirio * cantidadLirios;
let precioTotalTulipanes2 = precioUnitarioTulipan * cantidadTulipanes;

let precioTotal2 = precioTotalRosas2 + precioTotalLirios2 + precioTotalTulipanes2

console.log('Rosa:', 'precio unitario:', precioUnitarioRosa,',', 'cantidad:', cantidadRosas,',', 'valor:', precioTotalRosas2);
console.log('Lirio:', 'precio unitario:', precioUnitarioLirio,',', 'cantidad:', cantidadLirios,',', 'valor:', precioTotalLirios2);
console.log('Tulipan:', 'precio unitario:', precioUnitarioTulipan,',', 'cantidad:', cantidadTulipanes,',', 'valor:', precioTotalTulipanes2);
console.log('Total:', precioTotal2);


/*
Nuestra tarea será crear una lista de contactos. Inicialmente, la lista será bastante simple: solo escribiremos tres personas utilizando los datos que se muestran en la tabla a continuación. En el resto del curso, volverá a este script y lo ampliará sistemáticamente con nuevas funciones, utilizando los elementos de JavaScript recién aprendidos.
*/

/*

let nombreContacto1 = 'Maxwell Wright';
let telefonoContacto1 = '(0191) 719 6495';
let correoContacto1 = 'Curabitur.egestas.nunc@nonummyac.co.uk';

let nombreContacto2 = 'Raja Villarreal';
let telefonoContacto2 = '0866 398 2895';
let correoContacto2 = 'posuere.vulputate@sed.com';

let nombreContacto3 = 'Helen Richards';
let telefonoContacto3 = '0800 1111';
let correoContacto3 = 'libero@convallis.edu';

console.log('Contacto 1');
console.log('Nombre: '+nombreContacto1+' / '+
            'Teléfono: '+telefonoContacto1+' / '+
            'Correo: '+correoContacto1);
console.log('Contacto 3');
console.log('Nombre: '+nombreContacto3+' / '+
            'Teléfono: '+telefonoContacto3+' / '+
            'Correo: '+correoContacto3);


/*
Existe un código que actualmente no funciona. Intenta arreglarlo usando solo comentarios. Intenta, si es posible, usar los atajos de teclado en tu editor para este propósito.
*/

/*
"use strict"; 
 
const prefix = "username_"; 
 
let userName = "Jack"; 
// const userName = "Adam"; 
 
let prefixedUserName; 
// const prefixedUserName; 
 
// userName = "John"; 
prefixedUserName = prefix + userName; 
 

console.log(prefixedUserName /*+ prefixedUserName2*/; 
// console.log(prefixedUserName2);


/*
## **Datos Primitivos**

- Escribe un fragmento de código que creará variables y las inicializará con valores Boolean, Number, BigInt, String y tipos undefined utilizando (siempre que sea posible) literales y funciones constructoras.
*/

/*
console.log('Creación e inicialización utilizando literales:');

let bool1 = false;
let numb1 = 0;
let bigInt1 = 31;
let str1 = "";

console.log(`${typeof bool1}: ${bool1}`);
console.log(`${typeof numb1}: ${numb1}`);
console.log(`${typeof bigInt1}: ${bigInt1}`);
console.log(`${typeof str1}: ${str1}`);

console.log('Creación e inicialización utilizando func const:');

const bool2 = Boolean();
const numb2 = Number();
const bigInt2 = BigInt(33);
const str2 = String();

console.log(`${typeof bool2}: ${bool2}`);
console.log(`${typeof numb2}: ${numb2}`);
console.log(`${typeof bigInt2}: ${bigInt2}`);
console.log(`${typeof str2}: ${str2}`);Imprime todos los valores y todos los tipos de esos valores usando console.log. Intenta usar la interpolación de cadenas para mostrar el valor y el tipo al mismo tiempo con una sola llamada a console.log, por ejemplo, en el siguiente formato: 1000 [número].


/*
Realiza una cadena de conversiones: crea un Boolean a partir de un BigInt creado a partir de un Number que se creó a partir de un String. Comienza con el valor "1234". ¿Es posible?
*/

/*

// string to number
let originalValue = "1234";
console.log(`Original Value - type: ${typeof originalValue} - value: ${originalValue}`);
let stringToNumber = Number("1234");
console.log(`From string to number -  type: ${typeof stringToNumber} - value: ${stringToNumber}`);
// number to bigInt
let numberToBigInt = BigInt(stringToNumber);
console.log(`From number to BigInt - type: ${typeof numberToBigInt} - value: ${numberToBigInt}`);
// bigInt to boolean
let BigInttoBoolean = Boolean(numberToBigInt);
console.log(`From BigInt to Boolean - type: ${typeof BigInttoBoolean} - value: ${BigInttoBoolean}`);



/*
Intenta agregar dos valores del mismo tipo y verifica el tipo de resultado. Pruébalo para todos los tipos de datos primitivos.
*/


/*
let numb3 = 4 + 3;
console.log(numb3); // 7
let str3 = "java" + "script";
console.log(str3);
let bool3 = false + true;
console.log(bool3);
let bigInt3 = 1n + 2n;
console.log(bigInt3);


/*
Intenta sumar dos valores de diferentes tipos y verifica los resultados.
*/

/*

let numb3 = 4 + "script";
console.log(numb3);     // 4script
let str3 = "java" + true;
console.log(str3);      // javatrue
let bool3 = false + 1;
console.log(bool3);     // 1
let bigInt3 = 1n + 4
console.log(bigInt3);   // TypeError: Cannot mix BigInt and other types, use explicit conversions



/*
Intenta modificar la línea const str1 = 42 + "1"; para obtener el resultado 43 (sin eliminar las comillas alrededor del 1)
*/

/*

const str4 = 44 - "1";
console.log(str4);

/*
## **Objetos**

Crea un objeto que describa un boleto de tren y guárdalo en la variable ticket.
*/

/*

// boleto de tren
let ticket = {
    from: "muyurina",
    to: "sacaba",
    price: 3
};

console.log(ticket);

let persona = {};

persona.firstName = "Paola";
persona.lastName = "Jimeno";

console.log(persona.firstName);
console.log(persona.lastName);
*/

// BIBLIOTECA 

// tarea 1 
console.log("----------------------tarea 1------------------------");
let biblioteca = [
    { 
        titulo: "Speaking JavaScript", 
        autor: "Axel Rauschmayer",
        paginas: 460
    },
    { 
        titulo: "Programming JavaScript Applications", 
        autor: "Eric Elliott",
        paginas: 254
    },
    { 
        titulo: "Understanding ECMAScript 6", 
        autor: "Nicholas C. Zakas",
        paginas: 352
    }
];

console.log(biblioteca);

// tarea 2
console.log("----------------------tarea 2------------------------");
console.log("----------------------Biblioteca 1 + 1 libro nuevo-----------------------");
let lengthBiblio = biblioteca.length;
console.log("Longitud de el arreglo: " + lengthBiblio);

biblioteca[lengthBiblio] = {
    titulo: "Learning JavaScript Design Patterns", 
    autor: "Addy Osmani",
    paginas: 254
};

console.log(biblioteca);

// tarea 3
console.log("----------------------tarea 3------------------------");
console.log("----------------------Biblioteca 2------------------------");
let biblioteca2 = biblioteca.slice(-2);
console.log("biblioteca 2:");
console.log(biblioteca2);

// tarea 4
console.log("----------------------tarea 4------------------------");
console.log("----------------------Biblioteca 1 menos libro 1------------------------");
biblioteca.shift();
console.log(biblioteca);
let lengthBiblio2 = biblioteca.length;
console.log("Longitud de el arreglo: " + lengthBiblio);

// tarea 5
console.log("----------------------tarea 5------------------------");
console.log("----------------------Suma de paginas------------------------");

// let lengthBiblio = biblioteca.length;
console.log(lengthBiblio);
let sumaDePaginas = 0;
let libroNr = 1;

console.log(biblioteca[0].paginas + biblioteca[1].paginas+ biblioteca[2].paginas); // + 
/*function sumar (libroNr <= lengthBiblio){

}
console.log(sumar);*/


