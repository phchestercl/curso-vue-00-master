# Seccion 9

La forma mas ordenada de desarrollar una plicacion es separandola dentro de módulos y dentro de ellos, todas las carpetas necesarias que que dicho modulo funcione correctamente. Estos modulos pueden ser:
productos,
pago
carro de compras, etc.

![img](z-material-cap/01.png)

en nuestro caso

![img](z-material-cap/02.png)

configuraremos router en forma manual
## Configuracion Manual de Vue Router

[Enlace a la Documentacion de Vue Router](https://next.router.vuejs.org/)

Es importante no mezclar npm con yarn **OJO**.

~~~
npm install vue-router@4
~~~
Con esto se cargo una dependencia que solo es de desarrollo:

La configuración del router es
1. Definir los componentes de las rutas
2. Definir las rutas
3. Crear de la instamcia del router
4. Indicar la implementación del historial (Hash-Memory-Etc)
5. Crear y montarla en la aplicación
    Esta instancia se crea y monta Antes del mount de la App

En general para la configuracion se utiliza el directorio src/routes

~~~
import { createRouter, createWebHashHistory } from 'vue-router'
import AboutPage from '../modules/pokemon/pages/AboutPage'
import ListPage from '../modules/pokemon/pages/ListPage'
import PokemonPage from '../modules/pokemon/pages/PokemonPage'
// 1 Definición de las rutas y Definicion de las rutas
const routes = [
    { path: '/', component: ListPage },
    { path: '/about', component: AboutPage },
    { path: '/id', component: PokemonPage }
]
// 3 crear la instancia del router
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router
~~~

Luego en el archivo main.js montaremos el router creado

~~~
createApp(App)
    .use(router)    
    .mount('#app')
~~~
Para que nuestro router este funcional, en el componente App.vue, dentro del template tenemos que llamar al router-view
~~~
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <router-view/>
</template>
~~~

## No page found

Incorporamos en la rutas lo que sucede si no hay cohincidencia de la página ruta, es decir un error 404.
~~~
 { path: '/:parhMatch(.*)*', component: NoPageFound },
~~~
:parhMatch(.*)* se utiliza si ningún de path a sido encontrado

## LazyLoad de Páginas

EL objetivo es que bundle de la aplicación se más pequeño y se importen en la medida que se necesiten

La carga perezosa lo que hace es llamar las rutas en la medida que se requiere, para implementarle se tienen que modificar las definiciones de las rutas incorporando una función flecha que llame su importación

~~~
component: ()=>import(/* webpackChunkName: "ListPage" */'../modules/pokemon/pages/ListPage')
~~~

La seccion comentada es para que webpack ponga el nombre del "mudulo" a cargar para poder analizarlo en las devtools de chrome

## Navegar entre páginas RouterLink
Para navegar entre páginas se tiene que utiliza el router link en logar de un anchor.
~~~
<router-link to="/">Pokemon List</router-link>
<router-link to="/id">Pokemon Por ID</router-link>
<router-link to="/about">About</router-link>
~~~

## Lifecycle Hooks - Ciclo de vida de un componente

No son mas  que un método (o función) que se ejecuta en cierto momento del tiempo, en este caso son los métodos que se van a dispara en cierto momento del ciclo de vida del componente

![img](./z-material-cap/lifecycle.svg)

1. beforeCreate: nos sirve para realizar funciones antes de que sea creado
2. Created: una vez creado
3. beforeMount : antes de montarse
4. mounted: el componente ya esta montado
5. beforeUpdate: antes de que se aplique un cambio
6. updated: una vez que esté actualizado
7. beforeUnmount: es un buen punto para hacer limpieza
8. unmounted
   
## Disparar métodos del ciclo de vida
Revisar **/src/modules/pokemon/AboutPAge.vue**

Los eventos del ciclo de vida solo se disparan cuando se afecta el dom, el virtual DOM, en particular cuando se afecta el html:

- renderTriggered
- beforeUpdate
- updated
  
Cuando se tiene que disparar una petición HTTP
Nunca en el beforeCreate ya que puede ser sobreescrito al momento de que se carge la data

En el created es un buen lugar

## Segmentos del URL y QueryParameters

www.aglo.com/productos/**param**

www.aglo.com/productos/?**queryParams**

En las rutas, poniendo la propiedad como variable con la forma **/.id** se estable el nombre de la variable, adicionalmente en el objeto de ponen las props y en ella una funcion que nos permitirá acceder al objeto route, desde dónde podremos extraer el parametro **/:id** previamnete definido junto con los queryParamas.
Esto lo podemos obersvar en el archivo **/src/router/router.js** que nos lleva al componente PokemonPage. Cómo podemos observar en el siguinte extracto:
~~~
{ 
    path: '/:id', // el id pasa como parámetro
    name:'pokemon-id',
    component:  ()=>import(/* webpackChunkName: "PokemonPage" */'../modules/pokemon/pages/PokemonPage'),
    props:( route )=>{ 
        const id=Number(route.params.id)
        return isNaN(id)?{id:1}:{id}
        }
    },
~~~
Note que antes de enviar las propos, se hace una validación de que el parámetro corresoinde a un número

Adicionalmente, el id lo definimos como una propiedad **obligatoria** del componente
~~~
props:{
    id:{
      type:Number,
      required:true
    }
  },
~~~

## Peticion HTTP y redirecciones

En el router.link de Navbar.vue
~~~
<router-link :to="{ name: 'pokemon-id', params: { id: 85 }}">Pokemon Por ID</router-link>
~~~
o en el método getPokemon de PokemonPage.vue
~~~
this.$router.push('/')
~~~

## Redirección desde el router

Existen motivos por que se va a necesitar redireccionar desde el mismo router
~~~
redirect:'/home' 
~~~
En el registro de cada una de las rutas
[Documentación](https://next.router.vuejs.org/api/#routerecordraw)

Adicionalmente, es recomendable nombrar todas las rutas para establecerlas en los distintos enlaces, de esta manera, si se produce un redireccionamiento no se veran afectadas.

[Ver Tambien](https://next.router.vuejs.org/api/#to)

## RouterLink Personalizado

