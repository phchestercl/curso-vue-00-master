# Sección 10
Haste el momento nuestras aplicación solo le ha enviado información a los compoenentes hijos a traves de las props y atributos o bien desde los hijos al padre por eventos.

(Dif entre props y attrs, las props se colocan en la definición del componenete,y los attr son opcionales)

Vuex nos permitira gestionar el estado global de la app.

Vuex es un gestor de estado muy popular en Vue ya que funciona como vue.

Acciones son por naturaleza asincronas, nos permiten hacer peticiones http o tareas que son asincronas

Mutaciones son sincronas y por lo general modificcan el state

State, es un objeto reactivo (al igual que la data)

Getters, forma pre procesada para obetener información del state.

La recomendación es Siempre tarbajar con Modulos de modo de aslar las presentaciones.

## temas puntales de la sección
- Que es Vuex?
- Qué problemas resuelve Vuex?
- Actions
- Getters
- Mutations
- State
- Módulos
- Segmerntacón
- VuexDevTools
  
## Introducción a Vuex

La idea de Vuex es contar con un Store dónde se almacena y obtiene la información paara y de los componentes.


Este Store es un elemento reactivo (al igual que data)

![ciclo](z-material/00.png)

en un escenario mas completo lo podemos ver esta de forma
![ciclo completo](z-material/01.png)

Es importante que las ACCIONES pueden ser Asincronos pero los Commit (Mutaciones) DEBE SER SICRONOS

No se pueda hacer que una accion modifique directamente un state

Conceptos Generales
- State: similar a data(), es recativo.
- Getters: son similares a las propiedades computadas
- Mutation: son funciones que **pueden** modificar el state
- Actions, las acciones **pueden** ser asincronas y **pueden** llamar mutations
- Modules, agrupador de state, getters, muttations, actions y otros modulos (Muuuy utiles)
- Store ers unico y puede tener uno o varios modulos

Cuando ocupar Vuex
-  Vuex nos ayuda a lidiar con la gestión de estado compartida por el costo de mayor estructura de archivos.

-  Es una compensación entre la productividad a corto y largo plazo

## Inicio del proyecto Bases de Vuex

Crearemos en proyecto
![01 crea](z-material/03.png)
~~~
vue create bases-vuex
~~~

![01 crea](z-material/04.png)

![01 crea](z-material/05.png)

Para comenzar no va mos a seleccionar la opcion de vuex desde la pantalla de inicion para aprender a instarla y configurarlo desde el comienzo.

El objetivo en esta sección es aprender a configurarlo, luego a modularizarlos y luego optimizarlo.

## Instalación Manual de Vuex

Docuemntacion [Oficial](https://next.vuex.vuejs.org/installation.html#npm)

Recordar que estamos utilizando vuex 4x

Crearemos dentro del directorio src un carpeta con el nombre de store y dentro de ella un archivo llamado index.js,


~~~
import {createStore} from 'vuex'

export default createStore(
    {
        state:{
            count:1
        }
    }
)
~~~
dónde pondremos un simple contador.

Para utilizar este soter básico se tiene que usar como un Plugin.
Pare ello iremos a nuestro archivo main.js en la raiz del proyecto (**src**).

En el archivo main importaremos nuestro store
~~~
import store from './store'
~~~
Adicionalmente antes de montar nuestra app y en el mas alto nivel incorporamos el store a la app

~~~
createApp(App)
    .use(store)
    .mount('#app')
~~~

## Leer el state reactivo

Cuando hablamos de reactividad en vue, hablamos de cuando un valor cambia, va a notificar al mismo Vue. De este manera Vue propogara esta modificación en los puntos relacionados, a las propiedades computadas, props, etc.

Crearemos un componete llamado Counter.vue

Pofdemos acceder a la data de count en el store de varias formas
- directamente en html de un compomente, en nuestro caso el componente Counter por medio de 
~~~
{{$store.state.count}}
~~~
- tambien podriamos acceder al valor de count desde un elemento computado de de nuestro componente
~~~
computed:{
        countComputed(){
            return this.$store.state.count
        }
    }
~~~
- otra forma y de las mas comunes es a traves del map state, lo que nos va a permitir mapaer lo que necesitemos de nuestro store en este caso el state
~~~
...mapState(['count','lastMutation'])
       /* ...mapState({
           count: state=>state.count,
           lastMutation: state=>state.lastMutation
       }) */
~~~
## Mutaciones
la mutacion es para cambiar el state.
Las mutaciones son el equivalente al objeto methods

OJO Las mutaciones **Deben ser sincronas**

En el index.js de nuestra carpeta /src/store
~~~
export default createStore(
    {
        state:{
            count:1,
            lastMutation:'none'
        },
        mutations:{
            increment(state){
                state.count+=1
                state.lastMutation='increment'
            },
            incrementBy(state, val){
                state.count+=val
                state.lastMutation='incrementBy'
            }
        }
    }
)
~~~
y en nuestro componante llamamos estas mutaciones "funciones que cambian el state" 
~~~
methods: {
    increment() {
      this.$store.commit("increment");
    },
    incrementByFive() {
      this.$store.commit("incrementBy", 5);
    },
~~~

En este ejemplo enviamos un parámetro un valor entero, pero perfectamente le podemos enviar un objeto el cual luego podemos desestructurar ya dentro de nuestra mutation



## Actions

Las acciones son metodos que pueden ser asincronos, usualmente se dispara una action para comporobar algo en un backend y una vez que se recibe la respuesta se puede llamar un commit de una mutation.

~~~
actions:{
    async incrementRandomInt( context ){
        const rndInt = await getRandomInt()
        context.commit('incrementBy',rndInt)
    }
}
~~~
## mapActions
Los map actions, se incorporan en los methods de los compenenetes y ahí se pueden desestructurar
Básicamente tenemos dos formas:
~~~
...mapActions(['incrementRandomInt'])
~~~
**Ó**
~~~
..mapActions({
        incrementRandomInt:'incrementRandomInt'
})
~~~

De este manera poedmos acceder a las action directamente en nuestro componente

## Bloquear boton mientras la acción se ejecuta (trabaja)


## Getters

State, es donde tenemos la información que nos interesa mantener en la app
Mutations que son las funciones que pueden modificar el state
Actions que puyeden llamar las mutaciones que modifican el state

Getters, pueden ser llamados en cualquier parte de la aplicación y para hacer la analogía son mu similares a los computed
~~~
getters:{
    squareCount(state){
        return state.count*state.count
    }
}
~~~
Para acceder a los getters desde un componente, puede perfectamente utilizar el mapGetters
O bien, leerlo directamente $store.getters.squareCount, esta forma no es comun y muy muy rara, lod usual es por medio de los mapGetters

## Modules
Cuando se trabaja en vuex en general se trabaja con proyectos mas grandes, donde sabemos que tendra un estado global mas complejo dónde distintos componentes deberán acceder a el estado global y distintos estados.

Para nuestro caso crearemos una nueva carpeta dentro del directorio store llamada counter y dentro de ella el archivo index.js


Para modularizar se crea un objeto donde incorporaremos namespaced:true y en el objeto state lo arreglaremos como una función flecha con el objeto que sea reactivo

De esta manera nuestra llamada a la creación del store será mas simple ya que solo llamara a los modulos y en cada modulo del store tendremos su propia logica

creación del store del modulo counter
~~~
import getRandomInt from '../../helpers/getRandomInt'
const counterStore = {
    namespaced: true,
    state: () => ({
        count: 1,
        lastMutation: 'none',
        isLoading: false,
        incRandInt: 0,
    }),
    mutations: {
        increment(state) {
            state.count += 1
            state.lastMutation = 'increment'
        },
        incrementBy(state, val) {
            state.count += val
            state.lastMutation = `incrementBy ${val}`,
                state.incRandInt = val
        },
        isLoadingMut(state) {
            (state.isLoading) ? state.isLoading = false : state.isLoading = true;
        }
    },
    actions: {
        async incrementRandomInt(context) {
            context.commit('isLoadingMut')
            const rndInt = await getRandomInt()
            context.commit('incrementBy', rndInt)
            context.commit('isLoadingMut')
        }
    },
    getters: {
        squareCount(state) {
            return state.count * state.count
        }
    }
}
export default counterStore
~~~
 y por otra parte la llamada a la creación del store
~~~
import {createStore} from 'vuex'
import counterStore from './counter'
export default createStore(
    {
       modules:{
           counter: counterStore
       }
    }
)
~~~
## Actions, Getters Mutatios State de un módulo

## Separar modulo counterSotre en archivos independientes

El objetivo es separar todo la logica del archivos index.js del counter, de modo que tendremos los nuevos archivos:
actions.js
getters.js
mutations.js
state.js
