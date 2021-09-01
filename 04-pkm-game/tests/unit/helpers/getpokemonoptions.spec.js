import getPokemonsOptions,{ getPokemons,getPokemonNames } from '../../../src/helpers/getpokemonoptions'

describe('getPokemonOptions Helpres',()=>{
    test('Arreglo de Numeros',()=>{
        const pokemons = getPokemons()
        /* console.log(pokemons) */
        //revisamos que el array tengas 650 elementos
        expect(pokemons.length).toBe(650)
        pokemons.forEach(el => {
            expect(Number(el)).toBeTruthy()
        });
        /* expect(Number(pokemons[0])).toBeTruthy() */

    })
    test('Retrona un arreglo de 4 elementos', async()=>{
        const getPok= await getPokemonNames([1,2,3,4,5,6,7])
        //console.log(getPok)
        //Pruebo que el Array tenga un largo de 4
        expect(getPok.length).toBe(4)
        // pruebo que todos los elementos en el array sean correctos
        for (let index = 0; index < getPok.length; index++) {
            const element = getPok[index];
            //console.log(element)
            expect((index+1)===element.id).toBeTruthy()
            expect(typeof element.name==='string').toBeTruthy()
        }
        expect(getPok).toStrictEqual([
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
          ])
    })
    test('getPokemonOptiones debe retronar un arreglo mezclado', async()=>{
        const pokemons = await getPokemonsOptions()
        console.log(pokemons)
        expect(pokemons.length).toBe(4)
        expect(pokemons).toStrictEqual([
            { 
                name: expect.any(String), 
                id: expect.any(Number) },
            { 
                name: expect.any(String), 
                id: expect.any(Number) },
            { 
                name: expect.any(String), 
                id: expect.any(Number) },
            { 
                name: expect.any(String), 
                id: expect.any(Number) }
          ])
    })

})