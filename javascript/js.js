//declaradas
let nombre=prompt("ingrese su nombre");

function saludo1(nombre){
    alert(`hola ${nombre}`);
}
saludo1(nombre)

//anonima
let saludar=function(){
    let nom=prompt("ingrese su nombre")
    alert(`hola ${nom}`)
}
saludar(nom)

//flecha
let saludo = (nomb=prompt("ingrese su nombre")) => {return nomb}
let salu= saludo(nomb)
let mostrar=(salu) => {alert(`hola ${salu}`)}