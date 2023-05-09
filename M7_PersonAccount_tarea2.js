class PersonAccount1{
    constructor(nombre,apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    this.ingresosVarios = [];
    this.gastosVarios = [];
 }


 // metodos
 addIncome(ingreso,descripcion) {
    this.ingresosVarios.push({ingreso,descripcion});
  }
 totalIncome() {
    // conjunto de ingresos y su descripcion
    let sum = 0;
    for (let ingresoVar of this.ingresosVarios){
    // for(let i=0; i<=this.ingresosVarios.length; i++){
        sum = sum + ingresoVar.ingreso
    }  
    return sum;
  }


  addExpense(gasto,descripcion) {
    this.gastosVarios.push({gasto,descripcion}) ;
  }
  totalExpenses() {
    // conjunto de gastos y su descripcion
    let sum = 0;
    for (let gastoVar of this.gastosVarios){
    //for(let i=0; i<=this.gastosVarios.length; i++){
        sum = sum + gastoVar.gasto
    }  
    return sum;
  }
  

  accountBalance() {
    return this.totalIncome() - this.totalExpenses() /// Ingresos menos Gastos
  }

  accountInfo() {
    console.log(`Name : ${this.nombre} ${this.apellido}`); //Nombre Completo
    console.log(`Total Income : ${this.totalIncome()}`); //total Ingreso
    console.log(`Total Expense : ${this.totalExpenses()}`); //total Egreso
    console.log(`Total Balance : ${this.accountBalance()}`); //total Egreso 
  }
}

const person1 = new PersonAccount1('Pedro','Perez');
person1.addIncome(90,'sueldo');
person1.addIncome(10,'bono');
person1.addExpense(50,'comida');
person1.accountInfo();