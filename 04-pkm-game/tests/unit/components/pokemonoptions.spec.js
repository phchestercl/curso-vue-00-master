import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions";
import { pokemonMock } from "../mocks/pokemons.monk";

describe("PokemonOptions Component", () => {
  let wrapper;
  wrapper = shallowMount(PokemonOptions, {
    props: {
      pokemons: pokemonMock
    }
  });
  test("Snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  test('Debe de mostrar las 4 opciones correctamente',()=>{
      //console.log(wrapper.vm.pokemons)
      const dataIngresada = wrapper.vm.pokemons
      const nombres = wrapper.findAll('li')
      expect(nombres.length).toBe(4)
      for (let index = 0; index < nombres.length; index++) {
          const element = nombres[index];
          //console.log(element.text()+' = '+dataIngresada[index].name)
          expect(element.text()===dataIngresada[index].name)
      }
  })
  test('Emitir "selection" con sus parametros al hacer click', ()=>{
        const li= wrapper.findAll('li')
        let arr=[];
        // Comprueba que el valor emitido por cada uno de los li sea igual al valor esperado de emision
        for (let i = 0; i < li.length; i++) {
            const element = li[i];
            li[i].trigger('click')
            //console.log(wrapper.emitted('selection'))
            arr = wrapper.emitted('selection')
            //console.log(arr[i][0]+' =? '+pokemonMock[i].id)
            expect(arr[i][0]).toBe(pokemonMock[i].id)
        }
        // comprueba que se haya emitido 4 veces
        expect(wrapper.emitted('selection').length).toBe(4)
        
        /* li1.trigger('click')
        console.log(wrapper.emitted('selection')) */
  })
  
});
