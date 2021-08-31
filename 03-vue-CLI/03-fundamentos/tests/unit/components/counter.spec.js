import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', ()=>{
    // Esta prueba nos permite saber si el código se encuentra tal como lo dejamos
    test('Debe ser identico al Snapshot',()=>{
        const wrapper = shallowMount( Counter)
        
        expect( wrapper.html() ).toMatchSnapshot()

    })
})