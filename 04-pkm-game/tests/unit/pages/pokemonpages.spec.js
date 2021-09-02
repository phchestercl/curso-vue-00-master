import {shallowMount, mount} from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'
import { pokemonMock } from '../mocks/pokemons.monk'

describe('PokemonPage Component',()=>{
    let wrapper
    
    beforeEach(()=>{
        
        jest.clearAllMocks()
    })
    test('debe hacer match con snapshot',()=>{
        // Esta prueba no ayuda mucho
        const wrapper =shallowMount(PokemonPage)
        expect(wrapper.html()).toMatchSnapshot()
    })
    // probemos que el mixPokemonArray se monte
    test('Debe llamar el mixPokemonArray al montarse',()=>{
        const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods,'mixPokemonArray')
        shallowMount( PokemonPage )
        expect(mixPokemonArraySpy).toHaveBeenCalled()
    })
    //
    test('Match con snapshot cuando cargan los pokemon',()=>{
        //shallowMount hace un montaje 'simple' generando los stub de lo componentes, esdecir, no son llamados
        // mount lo monta y ejecuta todos los compoenetes hijos
        const wrapper = shallowMount(PokemonPage ,{
            data(){
                return {
                    pokemonArr: pokemonMock,
                    pokemon: pokemonMock[0],
                    showPokemon: true,
                    showAnswer: false,
                    message: null,
                    resCorrecta: 0,
                    resIncorrecta: 0,
                  };
            }
        })
        expect(wrapper.html()).toMatchSnapshot()
    })
    test('Deben existir los componentes PokemonPicture y PokemonOptions',()=>{
        const wrapper = shallowMount(PokemonPage ,{
            data(){
                return {
                    pokemonArr: pokemonMock,
                    pokemon: pokemonMock[0],
                    showPokemon: true,
                    showAnswer: false,
                    message: null,
                    resCorrecta: 0,
                    resIncorrecta: 0,
                  };
            }
        })
        //console.log(wrapper)
        //console.log('>>>>')
        //console.log(wrapper.getComponent({name:'PokemonPicture'}))

        // PokemonPicture deben existir  
        expect(wrapper.getComponent({name:'PokemonPicture'})).toBeTruthy()
        // PokemonOptions deben existir
        expect(wrapper.getComponent({name:'PokemonOptions'})).toBeTruthy()
        //
        expect(wrapper.getComponent({name:'PokemonPuntuacion'})).toBeTruthy()
        // PokemonPicture Atribute pokemonID debe ser === 73
        //console.log(wrapper.getComponent({name:'PokemonPicture'}).attributes().pokemonid)
        const pokemonID = wrapper.getComponent({name:'PokemonPicture'}).attributes().pokemonid
        expect(Number(pokemonID)).toBe(73)
        // PokemonOptions Atributo pokemon que exista
        //console.log(wrapper.getComponent({name:'PokemonOptions'}).attributes('pokemons'))
        expect(wrapper.getComponent({name:'PokemonOptions'}).attributes('pokemons')).toBeTruthy()
        /**
         * Otra forma
         * 
         */
        expect(wrapper.find('pokemon-picture-stub').exists()).toBeTruthy()
        expect(wrapper.find('pokemon-options-stub').exists()).toBeTruthy()
        expect(wrapper.find('pokemon-picture-stub').attributes('pokemonid')==='73').toBeTruthy()
        //console.log(wrapper.find('pokemon-options-stub').attributes('pokemons'))
        expect(wrapper.find('pokemon-options-stub').attributes('pokemons')).toBeTruthy()
    })
    test('Prueba de CheckAnswer Resulatado Ok Propiedades Reactivas',async()=>{
        //
        const wrapper = shallowMount(PokemonPage ,{
            data(){
                return {
                    pokemonArr: pokemonMock,
                    pokemon: pokemonMock[3],
                    showPokemon: true,
                    showAnswer: false,
                    message: null,
                    resCorrecta: 0,
                    resIncorrecta: 0,
                  };
            }
        })
        //console.log(wrapper.vm)
        await wrapper.vm.checkAnswer(452)
        expect(wrapper.vm.showAnswer).toBeTruthy()
        expect(wrapper.find('h2').text()).toBe(`Correcto es ${pokemonMock[3].name}`)
        expect(wrapper.vm.resCorrecta===1).toBeTruthy()
        expect(wrapper.vm.resIncorrecta===0).toBeTruthy()
    })
    test('Prueba de CheckAnswer Resulatado NO Ok Propiedades Reactivas',async()=>{
        //
        const wrapper = shallowMount(PokemonPage ,{
            data(){
                return {
                    pokemonArr: pokemonMock,
                    pokemon: pokemonMock[3],
                    showPokemon: true,
                    showAnswer: false,
                    message: null,
                    resCorrecta: 0,
                    resIncorrecta: 0,
                  };
            }
        })
        //console.log(wrapper.vm)
        await wrapper.vm.checkAnswer(520)
        expect(wrapper.vm.showAnswer).toBeTruthy()
        expect(wrapper.find('h2').text()).toBe("Te equivocaste !!!")
        expect(wrapper.vm.resCorrecta).toBe(0)
        expect(wrapper.vm.resIncorrecta).toBe(-1)
    })
    test('Llama nuevo juego newGame', async()=>{
        const newGameSpy = jest.spyOn(PokemonPage.methods,'newGame')
        const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods,'mixPokemonArray')
        const wrapper = shallowMount(PokemonPage ,{
            data(){
                return {
                    pokemonArr: pokemonMock,
                    pokemon: pokemonMock[3],
                    showPokemon: true,
                    showAnswer: true,
                    message: null,
                    resCorrecta: 0,
                    resIncorrecta: 0,
                  };
            }
        })
        const btn = wrapper.find('button')
        await btn.trigger('click')
        expect(newGameSpy).toHaveBeenCalled()
        //console.log(wrapper.vm.showPokemon)
        expect(wrapper.vm.showPokemon).toBeFalsy()
        expect(wrapper.vm.showAnswer).toBeFalsy()
        expect(wrapper.vm.pokemonArr).toStrictEqual([])
        expect(wrapper.vm.pokemon).toBe(null)
        expect(mixPokemonArraySpy).toHaveBeenCalledTimes(2)


    })
})