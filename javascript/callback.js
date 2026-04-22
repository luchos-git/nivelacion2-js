function Sumar(n1,n2){
    return n1+n2;
}

// function restar (n1,n2){
//     return n1-n2;
// } 

function calcular (n1,n2, operacion){
    return operacion(n1, n2);
} 

const resultado = calcular(10, 20, Sumar)
console.log(resultado)