import getRandomInt from '../../helpers/getRandomInt'
export const  incrementRandomInt =async (context)=> {
    console.log({ context })
    context.commit('isLoadingMut')
    const rndInt = await getRandomInt()
    // Las acciones llaman mutaciones
    context.commit('incrementBy', rndInt)
    context.commit('isLoadingMut')

}