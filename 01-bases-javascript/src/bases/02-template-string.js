
/**
 * template literales   `` 
 */
const nombre='Philip'
const apellido ='Chester'
const nombreCompleto=`Hola ${nombre} ${apellido}`
console.log(nombreCompleto)

const getSaludo=(nombre)=>{
    return 'Hola'+nombre
}

console.log(`Este es el resultado de la funcion : ${getSaludo(nombre)}`)