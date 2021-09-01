import {shallowMount} from '@vue/test-utils'
import PokemonPicture from '@/components/PokemonPicture'

describe('Pokemon Picture',()=>{
    /* let wrapper;
    //El beforeEach nos permiete inicializar el entorno antes de ejecutar los test
    beforeEach(() => {
        wrapper = shallowMount(PokemonPicture)
    }) */
    test('Match con snapshot',()=>{
        const wrapper=shallowMount(PokemonPicture,{
            props:{pokemonID:100,showPokemon:false}
        })
        expect( wrapper.html() ).toMatchSnapshot()
    })
    test ('debe mostrarla imagen oculta y el pokemon 100',()=>{
        const wrapper=shallowMount(PokemonPicture,{
            props:{ pokemonID:100, showPokemon:false}
        })
        //console.log(wrapper.html())
        const [img1, img2] = wrapper.findAll('img')
        expect(img1.exists()).toBeTruthy()
        expect(img2).toBeUndefined()
        expect(img1.classes('hidden-pokemon')).toBeTruthy()
        //console.log(wrapper.vm.imgSrc)
        const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg`
        expect(wrapper.vm.imgSrc).toBe(src)
        //console.log(img1.attributes('src'))
        expect(img1.attributes('src')).toBe(src)


    })
    test('Debe mostrar el pokemon si showPokemon:true',()=>{
        const wrapper=shallowMount(PokemonPicture,{
            props:{ pokemonID:100, showPokemon:true}
        })
        //console.log(wrapper.html())
        
        const img = wrapper.find('img')
    
        expect(img.exists()).toBeTruthy()
        expect(img.classes("hidden-pokemon")).toBeFalsy()
        expect(img.classes('fade-in')).toBeTruthy()
    })
})