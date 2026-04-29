let Semana =[`Lunes`, `Martes`, `Miercoles`, `Jueves`];

// // callback:
// console.log(Semana[0]);
// Semana.forEach(dia => {console.log(dia)});

// document.querySelectorAll(`.texto`).innerHTML="nuevo Texto";

console.log(document.querySelectorAll(`.texto`));

const parrafos= document.querySelectorAll(`.texto`);

// parrafos.forEach(p=>p.innerHTML='nuevo texto');
let contador = 0;
const colores = [`blue`, `grey`, `red`, `pink`, `green`];
parrafos.forEach(p=>{
    p.style.color=colores[contador];
    contador++;
    p.innerHTML=`texto ${contador}`;
});

const cantidad = colores.length;
console.log(`Cantidad: ${cantidad}`);
colores.push(`brown`);
colores.forEach(c=>console.log(c));
console.log(colores);
const encontrado = colores.find(c=>c==`green`);
if(encontrado){
    console.log(`${encontrado} existe`);
} else{
    console.log(`El elemento no existe`);
}
// console.log(`Elemento encontrado ${encontrado}`);

const nroIndice=colores.findIndex(c => c==`green`); // cuenta y busca los numeros, elementos e indices del item 
if(nroIndice>=0){
console.log(`Indice ${nroIndice}`);
}
else{
    console.log(`El indice no existe`);
}

colores[nroIndice] = `violet`;
console.log(colores);

colores.splice(nroIndice, 1); //1 = cantidad de elementos a eliminar a partir desde esa posicion
console.log(colores);

const nuevoArrayColores =colores.filter(c => c != `pink`);
console.log(colores);
console.log(nuevoArrayColores);

const numeros = [2, 20, 45, 90, 35, 100];
const mayorATreinta = numeros.filter(n => n > 30);
console.log(mayorATreinta);

const cuadrados = numeros.map(n=>n*n);
console.log(cuadrados);