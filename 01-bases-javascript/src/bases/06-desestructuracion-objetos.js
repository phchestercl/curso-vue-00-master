const person={
    uid:289789,
    name:'tony',
    apellido:'starck',
    age:45,
    codeName:'IronMan'
}

const createHero=(pers, poder)=>{
    const {uid,name,age,codeName}=pers
    return {
        uid,
        age,
        name,
        codeName,
        poder
    }
}

console.log(createHero(person,'tener dinero'))

const otroHeroe=(pers,poder)=>{
    const {uid,age,...persona}=pers
    persona.poder=poder
    return persona
}
console.log(otroHeroe(person,'Traje'))

const unaMas=({name,codeName},poder)=>{
    return {
        name,
        codeName,
        poder
    }
}
console.log(unaMas(person,'industrias'))

const laUltima=({codeName,name,apellido},poder='Inteligencia')=>({codeName,name,apellido,poder});

console.log(laUltima(person))