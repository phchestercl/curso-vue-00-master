import { createRouter, createWebHashHistory } from 'vue-router'
import isAuthenticatedGuard from './auth-gard'



// 1 Definición de las rutas y Definicion de las rutas
const routes = [
     {
         path:'/',
         redirect:{ name: 'pokemon-home' } 
     },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import(/* webpackChunkName: "Pokemon Layout" */'../modules/pokemon/layouts/PokemonLayout'),
        children: [
            {
                path: 'home',
                name: 'pokemon-home',
                component: () => import(/* webpackChunkName: "ListPage" */'../modules/pokemon/pages/ListPage')
            },
            {
                path: 'about',
                name: 'pokemon-about',
                component: () => import(/* webpackChunkName: "AboutPage" */'../modules/pokemon/pages/AboutPage')
            },
            {
                path: 'pokemonid/:id', // el id pasa como parámetro
                name: 'pokemon-id',
                component: () => import(/* webpackChunkName: "PokemonPage" */'../modules/pokemon/pages/PokemonPage'),
                props: (route) => {
                    console.log(route)  // tenemos acceso a toda la ruta
                    //console.log(route.params.id)
                    const id = Number(route.params.id)
                    return isNaN(id) ? { id: 1 } : { id }
                }
            },
            {
                path: '',
                redirect: { name: 'pokemon-about' }
            }
        ]
    },
    ///    { 
    ///        path: '/home', 
    ///        name:'home',
    ///        component: ()=>import(/* webpackChunkName: "ListPage" */'../modules/pokemon/pages/ListPage')
    ///     },
    ///    { 
    ///        path: '/about', 
    ///        name:'about',
    ///        component: ()=>import(/* webpackChunkName: "AboutPage" */'../modules/pokemon/pages/AboutPage')
    ///     },
    ///    { 
    ///        path: '/pokemonid/:id', // el id pasa como parámetro
    ///        name:'pokemon-id',
    ///        component:  ()=>import(/* webpackChunkName: "PokemonPage" */'../modules/pokemon/pages/PokemonPage'),
    ///        props:( route )=>{ 
    ///            console.log(route)  // tenemos acceso a toda la ruta
    ///            //console.log(route.params.id)
    ///            const id=Number(route.params.id)
    ///            return isNaN(id)?{id:1}:{id}
    ///        }
    ///     },
    // si :parhMatch(.*)* se utiliza si ningún de path a sido encontrado
    /**
     * Paths principal /dbz
     * Paths hijos 
     *      /characters
     *      /about
     */
    {
        path: '/dbz',
        name: 'dbz',
        beforeEnter:[isAuthenticatedGuard],
        component: () => import(/* webpackChunkName: "DGZ Layout" */'../modules/dbz/layouts/DragonBallLayout'),
        children: [
            {
                path: 'characters',
                name: 'dbz-characters',
                component: () => import(/* webpackChunkName: "DBZ Characters" */'../modules/dbz/pages/Characters')
            },
            {
                path: 'about',
                name: 'dbz-about',
                component: () => import(/* webpackChunkName: "DBZ About" */'../modules/dbz/pages/About')
            },
            {
                path: '',
                redirect: { name: 'dbz-characters' }
            }
        ]
    },
    {
        path: '/:parhMatch(.*)*',
        component: () => import(/* webpackChunkName: "NoPageFound" */'@/modules/shared/pages/NoPageFound')
        // Para redireccionar
        //redirect:'/home'
    },
]

// 3 crear la instancia del router
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

/**
 * guard global sincrono
 * 
 */

// router.beforeEach((to, from ,next)=>{
//    //console.log({to, from, next })
//    const num = Math.random()*100
//    console.log(num)
//    if (to.name!=='pokemon-home'){
//        if (num>50){
//            console.log('Autorizado')
//            next()
//        } else {
//            console.log('Usuario Bloqueado por el beforeEach Guard')
//            next({name:'pokemon-home'})
//        }
//    } else {
//        next()
//    }
//     // es necesario para continuar
//})
/* const canAccess = () => {
    return new Promise((resolve, reject) => {
        const num = Math.random() * 100
        if (num > 50) {
            console.log('Autorizado - can Access')
            resolve(true)
        } else {
            console.log('Usuario Bloqueado Can Access')
            resolve(false)
        }
    })
}
router.beforeEach(async (to,from,next)=>{
    const autorizado = await canAccess()
    autorizado?next():next({name:'pokemon-home'})
}) */


export default router