const n1=parseFloat(prompt("ingrese un numero"));
const n2=parseFloat(prompt("ingrese un numero"));

function Sumar(n1,n2){
    return n1+n2;
}

function restar (n1,n2){
    return n1-n2;
} 

function calcular (n1,n2, operacion){
    return operacion(n1, n2);
} 

const resultado = calcular(n1, n2, Sumar);
console.log(resultado);


const resultResta = calcular(n1, n2, restar);
console.log(resultResta);