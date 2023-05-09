class Animal {
    constructor(nombre, edad, color, patas) { //metodo especial para crear e inicializar un obj creado con una clase
      this.nombre = nombre;
      this.edad = edad;
      this.color = color;
      this.patas = patas;
    }
  
  
  // metodos
  nombreAnimales() {
    console.log('metodo 1 ' + this.nombre);
  }

  edadAnimales() {
    console.log('metodo 2 ' + this.edad);
  }

  colorAnimales(){
    console.log('metodo 3 ' + this.color);
  }

  patasAnimales(){
    console.log('metodo 4 ' + this.patas);
  }
}

  class Perro extends Animal {
    nombreAnimales(){
        console.log('metodo 5 ' + this.nombre + ' ladra');
    }
  }

  class Gato extends Animal {
    nombreAnimales(){
        console.log('metodo 6 ' + this.nombre + 'maulla');
    }
  }

const Animal1 = new Animal('perro', 3,'marron', 4);
const Animal2 = new Animal('perro', 4, 'negro', 4);
const Animal3 = new Animal('gato', 2, 'blanco', 4);
const Animal4 = new Animal('canguro', 5, 'rubio', 2);
const Perro1 = new Perro('perrito');

Animal1.nombreAnimales();
Animal3.colorAnimales();
Perro1.nombreAnimales();