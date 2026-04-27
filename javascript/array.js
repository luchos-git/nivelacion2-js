let Semana =[`Lunes`, `Martes`, `Miercoles`, `Jueves`];

// // callback:
// console.log(Semana[0]);
// Semana.forEach(dia => {console.log(dia)});

// document.querySelectorAll(`.texto`).innerHTML="nuevo Texto";

console.log(document.querySelectorAll(`.texto`));

const parrafos= document.querySelectorAll(`.texto`);

parrafos.forEach(p=>p.innerHTML='nuevo texto')