import axios from "axios";
import pokemonApi from "@/api/pokemonapi";


describe('pokemonApi',()=>{
    test('Axios configurado con Api Pokemon',()=>{
        /* console.log(pokemonApi.defaults.baseURL) */
        // Probamos que axios este configurado correctamente
        expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
    })
})