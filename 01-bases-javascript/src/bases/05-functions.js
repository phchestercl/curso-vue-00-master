/**
 * funciones
 * 
 */
const nombre='Philip'
/**
 * 
 * @param {*} nombre 
 * @returns 
 */
function diceHola(nombre){
    return 'Hola '+nombre
}

console.log(diceHola(nombre))

console.log(diceHola)

const arrNom=['Philip','Daniela','Danielita']
const nvoArr=arrNom.map(diceHola)
console.log(nvoArr)
/**
 * funcion de flech o lambda function
 * @param {String} nombre 
 * @returns 
 */
const saludar=(nombre)=>{
    return 'Hello '+nombre
}

console.log(saludar(nombre))

const getUser =()=>{
    return {
        uid:84748,
        username:tonny
    }
}
//funcion equivalente con return implicito
const obtenerUsuario =()=>({uid:84748,username:tonny})
const heroes=[
    {id:1,name:'batman'},
    {id:2,name:'superman'}
]
console.log('Arreglo heroes',heroes)

const existe = heroes.some( (heroe) => heroe.id===1)


console.log(existe)

const existeID=(arry=[],valID)=>{
    return arry.some((elem)=>elem.id===valID)
}

console.log(existeID(heroes,1))

const heroeID=(arry=[],valID)=>{
    return arry.find((elem)=>elem.id===valID)
}

console.log(heroeID(heroes,2))
const {id, name }=heroeID(heroes,1);
console.log('>>>\n'+id+`\n>>>\n${name}` )
