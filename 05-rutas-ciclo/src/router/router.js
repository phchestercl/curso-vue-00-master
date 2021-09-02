import { createRouter, createWebHashHistory } from 'vue-router'
import AboutPage from '../modules/pokemon/pages/AboutPage'
import ListPage from '../modules/pokemon/pages/ListPage'
import PokemonPage from '../modules/pokemon/pages/PokemonPage'
import NoPageFound from '../modules/shared/pages/NoPageFound'


// 1 Definición de las rutas y Definicion de las rutas
const routes = [
    { path: '/', component: ListPage },
    { path: '/about', component: AboutPage },
    { path: '/id', component: PokemonPage },
    // si :parhMatch(.*)* se utiliza si ningún de path a sido encontrado
    // TODO poner una página de error 404
    { path: '/:parhMatch(.*)*', component: NoPageFound },
]
// 3 crear la instancia del router
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router