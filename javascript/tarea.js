let contador = 0;

const productos = [`Rasta`, `Obleas`, `gula`];

const parrafos= document.querySelectorAll(`.texto`);

parrafos.forEach(p=>{
    contador++;
    p.innerHTML=`${contador + productos}`;
});