export default {
    name:'daybook',
    component:()=>import(/* webpackChunkName: "daybook" */'@/modules/daybook/layouts/DayBookLayout.vue'),
    children:[
        // aqui van todas las rutas que estan relacionadas con nuestro datebook
    ]
}