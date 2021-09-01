import pokemonApi from "../api/pokemonapi"

// Creamos el Arreglo
export const getPokemons = ()=>{
    const pokeArr =Array.from(Array(650))

    /* console.log(pokeArr) */
    return  pokeArr.map(( v ,index)=>index+1)
}
// Mezclamos y Arreglo y Llamamos a la funcion que obtiene los nombre de los pokemos
const getPokemonsOptions = async()=>{
    //console.log(getPokemons())
    //necesitamos tomar el arreglo y mezclarlo
    
    const mixedPokemons = getPokemons().sort(()=>Math.random()-0.5)
    /* console.log(mixedPokemons) */
    const pokemons= await getPokemonNames(mixedPokemons.splice(0,4))
    /* console.table(pokemons) */
    return pokemons

}

export const getPokemonNames= async( [a,b,c,d])=>{
    /* const res= await pokemonApi.get(`/1`)
    console.log(res.data.name) */
    /* console.log(a,b,c,d) */
    const arrPromises = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`)
    ]
    const [p1,p2,p3,p4]= await Promise.all(arrPromises)
    return [
        {name:p1.data.name, id:p1.data.id},
        {name:p2.data.name, id:p2.data.id},
        {name:p3.data.name, id:p3.data.id},
        {name:p4.data.name, id:p4.data.id}
    ]

}

export default getPokemonsOptions