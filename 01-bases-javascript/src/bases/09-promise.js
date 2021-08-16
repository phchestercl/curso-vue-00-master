/**
 * Promesas son una tarea asincrona
 */

/* console.log('Inicio');
new Promise( (resolve,reject)=>{
    //resolve si todo sale bien
    console.log('cuerpo de la promesa')
    //reject si hay algo que no sale bien
    const msg='Promesa resuelta'
    if (true){
        return resolve(msg)
    } else{
        return reject('Con error')
    }
})
    .then(msg=>console.log(msg.toUpperCase()))
    .catch(console.log)
console.log('Fin') */
import {getHeroByID} from './bases/08-imp-exp'
import supers from './data/heroes'

const getHeroByIDAsync = (id)=>{
    return new Promise((resolve,reject)=>{
        setTimeout( ()=>{
            const hero=getHeroByID(supers,id)
            if (hero){
                return resolve(hero)
            } else {
                return reject('No Encontrado')
            }

        }    ,id*500)
    })
}
getHeroByIDAsync(3).then(console.log).catch(console.log)
getHeroByIDAsync(1).then(console.log).catch(console.log)
getHeroByIDAsync(6).then(console.log).catch(console.log)
