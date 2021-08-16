const persona ={
    nombre:'Philip',
    apellido:'Nombre',
    edad:45,
    direccion:{
        ciudad:'Colina',
        zip:43672,
        lat:14.322344,
        log:34.234454
    }
}

const persona2=persona

persona2.nombre='Peter'
console.log(persona)
console.log(persona2)
/**
 * todos los objetos son pasados por referencia
 * producto de ello al cambiar el nombre en la persona2 se cambió tambien
 * el nombre de la persona
 * 
 * persona2 no es un nuevo objeto, sino que es el mismo objeto y que apunta al mismo espacio
 * en memoria
 * 
 */
const persona3 ={ ...persona};
persona3.nombre='Philip'
persona3.apellido='Chester'
console.log(persona3);