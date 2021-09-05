const getRandomInt=()=>{
    return new Promise( resolve =>{
        const ranInt = Math.floor(((Math.random() *20)+1))
        setTimeout(()=>{
            resolve(ranInt)
        },2000)
    })
}
export default getRandomInt