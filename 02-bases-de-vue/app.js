//console.log(Vue)
const app = Vue.createApp({
    /* template:`
    <h1>Hola Mundo</h1>
    <p> {{ (true)?'Activo':'Inactivo' }} </p>`, */
    /* methods:{},
    watch:{},
    setup() {} */
    data() {
        return {
            message:'Hola Mundo !!!',
            quote:` I'm Batman`
        }
    }


})
app.mount('#myApp')