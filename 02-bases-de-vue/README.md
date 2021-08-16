 ## Temas de la Seccion

bases generales de vue

### Temas Generales
1. Options Api
2. Métodos
3. Eventos
4. Modificadores de eventos
5. Propiedades Reactivas
6. Directivas
    + v-if
    + v-show
    + v-for
7. Crear una aplicacion componente

Esta seccion tiene como objetivo darnos un empujon inicial para romper la barrera de entrada al Framework.

### Videos y notas

#### 16-08-21 --- v28 v29
+ Fácil de iniciar
    + Si se concen las bases de HTML, CSS y Javascript

+ Versátil
    + Sistema escalable

+ Redimiento
    + DOM virtual súper rápido

#### 16-08-21 --- v30

Hola mundo

#### 16-08-21 --- v31 Representacion Declarativa

(Delcarative Rendering)

*{{ }}* se utiliza para incorporar expresiones de Javascript en los backticks``

Expresiones como 
~~~
{{ (true)?'Activo':'Inactivo' }}
{{ 1+1 }}
{{getAlgo()}}
~~~

en el html, dentro del div que maneja Vue ('#myApp'), tambien funcionan los {{}}


~~~
<div id="myApp">
    <h1>Hola Mundo</h1>
    <p> {{ 'Philip'+ ' Chester' }} </p>
</div>
~~~


#### 16-08-21 --- v32 Estado del Componente - Data

Hay 2 Formas de trabajar en Vue

Options API dentro de elementos del Vue.createApp

Composition API que se hace principalmente dentro del setup

~~~
const app = Vue.createApp({
    /* template:`
    <h1>Hola Mundo</h1>
    <p> {{ (true)?'Activo':'Inactivo' }} </p>`, */
    methods:{},
    watch:{},
    setup() {}
})
~~~
#### 16-08-21 --- v33 Introduccion a los eventos

El objeto literal que devuelve data (el return)

~~~
data() {
        return {
            message:'Hola Mundo !!!',
            quote:` I'm Batman`
        }
    }
~~~
Es un objeto reactivo, es decir, al modificarse el html se actaulizará, renderizando únicamente la parte que cambió

asi por ejemplo, incorporando un boton al html donde se encunetra la aplicacion, llamamos a los métodos incorporados en el app.js

~~~
<div id="myApp">
    <h1>Hola Mundo</h1>
    <span>{{ quote }}</span>
    <p> {{author}} </p>
    <p> {{ message }} </p>
    <button v-on:click=changeQuote>Change Quote</button>
</div>
~~~
y en la app incorporamos dos métodos para responder al evento
~~~
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
~~~
Lo inetresante es que la actualizaciòn de la pàgina se realizará solo en el objeto que contiene la variable quote, la cual recordemos es reactiva.

RESPALDO de lo Visto hasta acá
034-001-app.js
034-002-index.html

#### 16-08-21 --- v34 Directiva v-for
Comencemos la sección con el html
~~~
<div id="myApp">
    
</div>
~~~
y nuestro app.js
~~~
const app = Vue.createApp({
    data() {
        return {
           
        }
    },
   
})
app.mount('#myApp')
~~~
y creemos una constante de un arreglo de 6 objetos
~~~
const quotes = [
    { quote: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'I believe what doesn’t kill you simply makes you, stranger.', author: 'The Joker, The Dark Knight' },
    { quote: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me', author: 'Henri Ducard, Batman Begins' },
    { quote: 'You either die a hero or live long enough to see yourself become the villain.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'If you’re good at something, never do it for free.', author: 'The Joker, The Dark Knight' },
    { quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One' },
]
~~~

como incorporamos los valores de la constante quotes a la data reaqtiva?

bueno, creamos la propiedad quotes dentro de data y a ella le asignamos la constante, de este modo:
~~~
data() {
        return {
           quotes:quotes
        }
    },
~~~
o
~~~
data() {
        return {
           quotes
        }
    },
~~~
ya que el valor de la propiedad es igual al valor de la constante

Podrìamos mostra el arreglo de esta manera:
~~~
<h1>Batman Quotes</h1>
    <ul>
        <li>{{quotes[0].author}}</li>
        <li>{{quotes[1].author}}</li>
        <li>{{quotes[2].author}}</li>
    </ul>
~~~

Lo cual es bastante ineficiente ya que el arreglo podría tener más o menos elementos

la directiva *v-for* va a iterar el elemento que la contiene junto son sus hijos, de acuerdo a los criterios establecidos, en el ejemplo

~~~
<li v-for="quote in quotes"> quote</li>
~~~
tenmos que la variable será *quote* y recorrera la propiedad *qoutes*.

#### 16-08-21 --- v35 Indices y desestructuracion dentro de v-for





