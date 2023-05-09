class PersonAccount{

    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lasttName = lastName;
        this.incomes = []; // ingresos
        this.expenses = []; // gastos
    }

    // methods
    // totalIncome conjunto de ingresos y su descripcion
    totalIncomes(){
        let sum = 0;
        for (let income of incomes){
            sum+=income.amount;
        }
    }

    // addIncome
    //[{amount:2, descripcion:'pago de la quincena'}]
    addIncomes(amount,descripcion){

    }

     
    // totalExpense conjunto de gastos y su descripcion
    
    // addExpense
    // accountBalance
    // accountInfo
}