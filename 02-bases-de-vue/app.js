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
            quote:` I'm Batman`,
            author:'Bruce Wayne'
        }
    },
    methods:{
        changeQuote(){
            /* console.log(event) */
            console.log('hola mundo')
            if(this.author==='Bruce Wayne'){
                this.author='Philip Chester'
            } else {
                this.author='Bruce Wayne'
            }
            this.capitalize()
        },
        capitalize(){
            this.quote= this.quote.toUpperCase()
        }
    }



})
app.mount('#myApp')