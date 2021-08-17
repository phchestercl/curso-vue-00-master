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

Existen varias alternativas para recorrer el -vfor.
Sin duda la mmñas fácil es:
~~~
<li v-for="quote in quotes"> 
    <span> {{quote.quote}} </span>
    <blockquote > - {{quote.author}} </blockquote>
</li>
~~~
Otra forma es desestructurando

~~~
<li v-for="{quote, author} in quotes"> 
    <span> {{quote}} </span>
    <blockquote > - {{author}</blockquote>
</li>
~~~

Para obtener el índice del elemento, ponem
~~~
<li v-for="(quote,index) in quotes"> 
    <span> {{index+1}} {{quote.quote}} </span>
    <blockquote > - {{quote.author}} </blockquote>
</li>
~~~
este index no es una propiedad del objeto, este indice se expone en caso de ser necesario.

Por último, podemos deestructurar y obtener el indice a la vez

~~~
<li v-for="({quote, author},index) in quotes"> 
    <span> {{index+1}} {{quote}} </span>
    <blockquote > - {{author}} </blockquote>
</li>
~~~

#### 16-08-21 --- v36 directiva v-model

En este momento lo que queremos hacer es crear una caja de texto que nos permita escribir algo y al presionar enter crear un nuevo *quote*.
Creamos el input text en el html.

Ahora lo que necesitamos es decirle a vue, mira, alguien escribio algo aqui, necesito ese valor sincronizado ese valor con mi parte de javascript.

Bueno para hacerlo hay que crear una nueva propiedad reactiva, la cual se crea dentro de la data.
Y necesariamente, para que sea reactiva se debe crear dentro de la data.
En nuestro caso crearemos *newQuote*, con un valor por defecto "Hola Mundo".
~~~
data() {
    return {
        quotes:quotes,
        newQuote:''
}
,
~~~
Ok, la propiedad ya está creada, pero aún no hay ninguna relacion entre el *input* y esta nueva propiedad.

Para crear esa relacion, se utiliza la directiva *v-model*.
La cual se incorpora en el tag del input indicando el valor de la propiedad a la cual está "enlazada".

Para ver el efecto del enlace de esta propiedad con el input box, temporalemte incorporaremos una etiqueta html con el llamado de la propiedad *{{newQuote}}*.
~~~
<small> {{newQuote}} </small>
~~~

Ahora, que tenemos la propiedad enlazada, debemos establecer el evento que nos permita, qué al precionar Enter, se actualice el listado.

Para ello ocuparemos un par de cosas.
Lo primero es escuchar un evento con *v-on*, en nuestro caso el evento es keypress. El cual lo deberemos asociar con algun método
*v-on:keypress="AlgunMetodoParaNewQuote"*
La funcion que inserta el nuevo comentario al inicio, la podemos definir como

~~~
addQuote(event){
    const {key}=event
    if(key==='Enter'){
        this.quotes.unshift({
            quote:this.newQuote,
            author:'Philip'
        })
    }
}
~~~

#### 16-08-21 --- v37 Modificadores de Eventos

Alternativamente tambien se podría

~~~
addQuote(event){
    if(event.charCode!==13) return
    this.quotes.unshift({
        quote:this.newQuote,
        author:'Philip'
    })
}
~~~
si el charCode es distinto de 13 salimos
~~~
addQuote({charCode}){
    if(charCode!==13) return
    this.quotes.unshift({
        quote:this.newQuote,
        author:'Philip'
    })
}
~~~

Ahora incluso éste código podria funcionar simplemente sin el argumento

~~~
addQuote({charCode}){
    this.quotes.unshift({
        quote:this.newQuote,
        author:'Philip'
    })
~~~

Mediante el uso de los modificadores de eventos de VUE.
Que son realmentre geniales.
En nuestro caso agregando al evento *.enter* en el html, antes de pasar la funcion, quedando de ésta forma:
~~~
v-on:keypress.enter="addQuote"
~~~

De esta manera el código queda extremadamente sencillo y limpio.

La docuentacion oficial de los modificadores de eventos se encunetra en [este enlace](https://v3.vuejs.org/guide/events.html#event-modifiers).


#### 16-08-21 --- v38 Directivas v-if y v-show

En el apartado anterior el evento keypress llamaba la funcion *addQuote* y en ella agregabamos el nombre del autor. No es lo más recomendable ya que quedó en duro en nuestro código.
Para efectos didacticos dejemos nuestra funcion de la siguiente manera

~~~
addQuote({charCode}){
    if(charCode!==13) return
    this.quotes.unshift({
        quote:this.newQuote,
    })
}
~~~
De esta manera el nuevo elemento del array será un objeto que no tiene la propiedad *.author*, y consecunte mente en nuestro html vendrá el bloque *blockquote* pero sin la información.

en consecuencia, este elemento lo deberiamos mostrar en forma condicional y parea ello hay varias formas.

un bastante comun es la directiva v-if y como su nombre lo indica, si la condicion es true muestra el elemento, de lo contrario no lo mostrará
~~~
<blockquote v-if="true"> - {{author}} </blockquote>
~~~
De esta forma el bloque (y no sé si sus hijos, para los casos de false) siempre se mostrará.

¿que sucede si ponemos la propiedad *author* y agregamos un nuevo elemento al array?
~~~
<blockquote v-if="true"> - {{author}} </blockquote>
~~~
Al poner el valor de *author* Vue va a revisar el valor que le estamos pasando, igual que en un (author). En pocas palabras evalua si es diferente de undefined o null.

En relación al html, el bloque no se mostrará solo habrá un comentario
~~~
<!--v-if-->
~~~
en lugar del bloque

Por otra parte la directiva v-show, muestra el valor si la condicion es verdadera.

Sin embargo en el html a diferencia de la directiva v-if, *v-show* agregará un estilo al bloque indicando display:none;

~~~
<blockquote style="display: none;"> - </blockquote>
~~~

De esta menera, siempre se está construyendo fisicamente el elemento, pero le agrega el *display-none*.

En teoria, en teoria, v-if es un poco mas rápido ya que no está construyendo el elemnento, pero el uso de uno u otro es discrecional.

De todas maneras aquí queda el enlace a la [documentación oficial](https://v3.vuejs.org/guide/conditional.html#v-show).

Una cosa importante, que podemos ver en la documentación es que no esta recomendado, bueno, en reallidad no está permitido utilizar el *v-if* y el *v-for* en el mismo elemento.

Otro elemento a considerar es la guia de migración, en esta guia v-if y v-for están marcados como un breaking change, ya que significa que antes se podía hacer y ahora no se puede hacer, el [enlace aqui](https://v3.vuejs.org/guide/migration/v-if-v-for.html#overview)

#### 16-08-21 --- v39 Recapitulacion

1. Estamos importando el script de Vue desde un CDN.
2. Hemos montado toda la aplicacion sobre un div
3. NOTA: Cuando estemos trabajando en proyectos de Vue completos vamos a tener que tratar que cado uno de los archivos cumpla un tarea o una función en especifíco y no tener un único archivo grande que son mas díficiles de mantenar.
4. Vimos la forma de incorporación informacio y expreciones por medio de *{{}}*. Dònde no funcionaran ciclos for o while o un if por que ya existen directivas para ello (v-if, v-show, v-for)
5. v-model que crea una relación two way data binnding, es decir, que ya sea cambie desde el lado del componente como del la vista los datos siempre estarán sincronizados.
6. Vimos de formas de dispara eventos con *v-on*.
7. Tenemos directivas estructurales que nos permiten modelar el html
8. la data crea objetos reactivos.
9. 
