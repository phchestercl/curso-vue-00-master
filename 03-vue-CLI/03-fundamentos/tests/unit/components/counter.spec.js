import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter'


describe('Counter Component', () => {
    let wrapper;
    //El beforeEach nos permiete inicializar el entorno antes de ejecutar los test
    beforeEach(() => {
        wrapper = shallowMount(Counter)
    })
    // Esta prueba nos permite saber si el código se encuentra tal como lo dejamos
    /* test('Debe ser identico al Snapshot',()=>{
        const wrapper = shallowMount( Counter)
        expect( wrapper.html() ).toMatchSnapshot()
    }) */
    test('h2 debe tener el valor por defecto "Counter" ', () => {
        // obetenr el sujeto de prueba
        /* const wrapper = shallowMount( Counter); */
        // find nos permite encontrar el primer elemento que cumpla la condicion
        const h2 = wrapper.find('h2')
        /*  console.log(h2.text()) */
        // assert
        expect(h2.text()).toBe('Counter')
    })
    test('H2 pero verificando que exista', () => {
        /* const wrapper =shallowMount(Counter) */
        expect(wrapper.find('h2').exists()).toBeTruthy()
        const h2Value = wrapper.find('h2').text()
        expect(h2Value).toBe('Counter')
    })
    test('El valor por defecto debe ser 100 en el parrafo', () => {
        /* const wrapper = shallowMount(Counter) */
        const parrafos = wrapper.find('[data-test-id="counter"]')

        expect(parrafos.text()).toBe('100')
    })
    test('Incremento en 1 al presionar el boton ', async () => {
        /* const wrapper = shallowMount(Counter)
        const value = wrapper.find('[data-test-id="counter"]').text()
        console.log('Valor original de value >>>>: '+value)
        const btnInc = wrapper.find('button')
        await btnInc.trigger('click')     //=> dispara el evento click y el await es para esperar la re-rendirzasción del DOM virtual
        const value2 = wrapper.find('[data-test-id="counter"]').text()
        console.log('Nuevo Valor de value >>>>: '+value2)
        expect(value2).toBe((parseInt(value)+1).toString())
        // Prueba de presionar el boton decress 2 DOS veces
        const btnDec = wrapper.findAll('button')
        await btnDec[1].trigger('click')
        await btnDec[1].trigger('click')
        const value3 = wrapper.find('[data-test-id="counter"]').text()
        console.log(value3)
        expect(value3).toBe((parseInt(value2)-2).toString()) */
        // Codigo Optimizado

        const [btnInc, btnDec] = wrapper.findAll('button')
        await btnInc.trigger('click')
        await btnInc.trigger('click')
        await btnInc.trigger('click')
        /* let value = wrapper.find('[data-test-id="counter"]').text()
        expect(value).toBe('103') */
        await btnDec.trigger('click')
        await btnDec.trigger('click')
        let value = wrapper.find('[data-test-id="counter"]').text()
        expect(value).toBe('101')
    })
    test('Debe establecer el valor por defecto', () => {
        /* console.log( wrapper.props())
        console.log( wrapper.props().start)
        console.log( wrapper.props('start')) */
        const { start } = wrapper.props()
        let value = wrapper.find('[data-test-id="counter"]').text()

        expect(Number(value)).toBe(start)
    })

    test('Debe mostrar Prop tituloDeLaSeccion', () => {
        const nomTituloPrueba = "Titulo Hola Mundo"
        const wrapper = shallowMount(Counter, {
            props: {
                tituloDeLaSeccion: nomTituloPrueba,
                start: 5
            }
        })
        /* console.log(wrapper.html()) */
        expect(wrapper.find('h2').text()).toBe(nomTituloPrueba)
    })

});
