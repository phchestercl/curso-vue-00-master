const isAuthenticatedGuard = (to, from , next)=>{
    console.log({to,from,next})
    
    return new Promise(() => {
        const num = Math.random() * 100
        if (num > 50) {
            console.log('Autorizado - Auth Guard Access')
            next()
        } else {
            console.log('Usuario Bloqueado Auth Guard Access')
            next({name: 'pokemon-home'})
        }
    })

}

export default isAuthenticatedGuard