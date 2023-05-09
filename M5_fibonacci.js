// RECURSIVIDAD
/*
let fibRec = function(n){
    if (n <= 1 && Number.isInteger(n)) {
        return n;
    }   else {
        return fibRec(n-1) + fibRec(n-2);
    }
}

console.log(fibRec(7));
*/
// time complexity


// fibonacci con arrow function
/*
let fibRec = n => {
    if (n <= 1 && Number.isInteger(n)) 
        return n;
        return fibRec(n-1) + fibRec(n-2);
}

console.log(fibRec(7));
console.log(fibRec(4));
*/


// 

var fibRec = function(n){
    if (n<= 1) return n;
    let a = 0;
    let b = 1;
    let c = 0;

    for(let i = 2; i<= n; i++){
        c = b + a;
        a = b;
        b = c;
    }
    return c;
}

console.log(fibRec(4));
console.log(fibRec(7));