let contador = 0;

let productos = [`Rasta`, `Obleas`, `gula`];

const parrafos= document.querySelectorAll(`.texto`);

parrafos.forEach(p=>{
    p.innerHTML=`${contador+1}: ${productos[contador]}`;
    contador++;
});