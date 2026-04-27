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