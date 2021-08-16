import axios from 'axios'



const miPromesa=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('tenemos un valor en la promesa')
        },1000)
    })
}

const medirTiempoAysnc = async()=>{

    console.log('inicio')
    const resAwait = await miPromesa()
    console.log(`el valor del await es : ${resAwait}`)
    
    console.log('fin')
    if (true) {
        return 'fin de medir tiempoAsync '+resAwait
    } else {
        throw 'Error en medir tiempos'
    }
}
medirTiempoAysnc()
    .then(console.log)
    .catch(e=>console.log(e))
    