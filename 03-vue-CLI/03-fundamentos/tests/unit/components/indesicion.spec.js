/**
 * Hacer match con snapshot
 * 
 */

import { shallowMount, mount } from '@vue/test-utils'
import Indesicion from '@/components/Indecision'
 describe('Test Indesicion',()=>{
     let wrapper;
     let consoleLogSpy;
     /** Mock de la funcion fetch */
     global.fetch = jest.fn( ()=>Promise.resolve({
         json:()=>Promise.resolve({
                'answer': 'yes',
                'forced': false,
                'image': 'https://yesno.wtf/assets/yes/2.gif'
         })
     }) )


     beforeEach(()=>{
         wrapper=shallowMount(Indesicion)
         consoleLogSpy=jest.spyOn( console ,'log')
         /** limpiar mocks */
         jest.clearAllMocks()
     })
     test('Prueba de snapshot del componente',()=>{
         expect(wrapper.html()).toMatchSnapshot()
     })
     test('Describir en el Input no debe disparar nada (console.log)',async()=>{
        /* console.log(wrapper) */
        const getAnswerSpy= jest.spyOn(wrapper.vm,'getAnswer')
        const input=wrapper.find('input')
        await input.setValue('Hola Mundo')
        /* expect(consoleLogSpy).toHaveBeenCalled() */
        expect(consoleLogSpy).toHaveBeenCalledTimes(1)
        //revisamos que la funcion no haya sido llamado
        expect(getAnswerSpy).toHaveBeenCalledTimes(0)
       
     })
     test('Al escribir el ? disparar getAnswer',async()=>{
         /** Aqui solo nos ineteresa saber si el getAnwser fue llamado no estamos probando como está funcionando el getAnswer*/
         const getAnswerSpy=jest.spyOn(wrapper.vm,'getAnswer');
         const input=wrapper.find('input')
         await input.setValue('Está funconado ok?')
         
         expect(getAnswerSpy).toHaveBeenCalled()

     })
     test('Pruebas en getAnswer', async()=>{
        await wrapper.vm.getAnswer()
        /* console.log(wrapper.vm.img)
        console.log(wrapper.vm.answer) */
        const img =wrapper.find('img')
        expect(img).toBeTruthy()
        expect(wrapper.vm.answer).toBe('Si!!')
     })
     test('Pruebas en getAnswer -Fallo en Api',async()=>{

        fetch.mockImplementationOnce(()=>Promise.reject('API is Down'));
        await wrapper.vm.getAnswer()
        const img =wrapper.find('img')
        expect(img.exists()).toBeFalsy()
        expect(wrapper.vm.answer).toBe('No se pudo obtener data del API')
     })
 })