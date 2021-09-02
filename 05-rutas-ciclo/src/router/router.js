import { createRouter, createWebHashHistory } from 'vue-router'



// 1 Definición de las rutas y Definicion de las rutas
const routes = [
    { 
        path: '/', 
        component: ()=>import(/* webpackChunkName: "ListPage" */'../modules/pokemon/pages/ListPage')
     },
    { 
        path: '/about', 
        component: ()=>import(/* webpackChunkName: "AboutPage" */'../modules/pokemon/pages/AboutPage')
     },
    { 
        path: '/id', 
        component:  ()=>import(/* webpackChunkName: "PokemonPage" */'../modules/pokemon/pages/PokemonPage')
     },
    // si :parhMatch(.*)* se utiliza si ningún de path a sido encontrado
    
    { 
        path: '/:parhMatch(.*)*', 
        component: ()=>import(/* webpackChunkName: "NoPageFound" */'../modules/shared/pages/NoPageFound')
    },
]
// 3 crear la instancia del router
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router