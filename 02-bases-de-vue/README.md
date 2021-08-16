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





