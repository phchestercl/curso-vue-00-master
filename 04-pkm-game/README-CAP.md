# Seccion 7

## Para crear un nuevo proyecto vue

~~~
vue create 04-pkm-game
~~~
dónde 04-pkm-game es el nombre de la aplicacion y consecuentemente su directorio

Para importar estilos css y que queden en forma global, se deben importar en el archivo **main.js**

~~~
import '../src/css/styles.css'
import '../src/css/animations.css'
~~~

Nota Importante.
Para proyectos más grandes se recomienda la siguiente estructura de directorios
~~~
src/
+--modules/
|  +-- moduleA/
|      +-- components/
|      +-- services/
|      +-- helpers/
|      +-- router/
|      +-- store/
|  +-- moduleB/
|  +-- moduleC/
~~~
De esta forma cada modulo quedará aislado

## Componentes Necesarios Para la aplicación
dentro de src/ crearemos la carpeta pages, y dentro de ella crearemos el componente PokemonPage.vue.

![image info](./z-material-didactico/01.png)

Luego en el editor de texto utilizamo vue-> para crear la estructura dle componente.

