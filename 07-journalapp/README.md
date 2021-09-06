# 07-journalapp

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Crearemos toda la estructura de la aplicación
## Usar Sass
Sass es basicamnte Css con esteriodes. La idea es que trabajemos el estilo utilizando sass. Que no va a permitir un CSS mas ordenado y con funciones.
Podemos perfectamente utilizar tailwind o varios otros.

Utilizaremos tambien estilos con Boostrap en esta sección, los que permitirá enfocarnos en la logica de la aplicación mas que en el estilo.
Para utilizarlo simplemente podremos en el index.html el css dek cdn de bootstrap
~~~
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
~~~
Esto hará que utilñicemos la configuración por defecto.

Lo que vamos hacer es instalarlo como dependencia de nuestro proyecto
~~~
npm install bootstrap
~~~

Para incorporarlo a nuestro proyecto:
1. Crear carpeta styles dentro de src y allí el archivo stytles.scss
2. importar el archivo de estilos en el main
~~~
import './styles/styles.scss'
~~~
3. instalar dependencias saas-loader y saas para desarrollo
   con npm
   ~~~
   npm install -D sass-loader@10 sass
   ~~~
   con yarn
   ~~~
   yarn add -D saas-loader@10 sass

## Cambiar los colores por defecto de bootstrap
Agregamos los colores del tema [docuemntacion de bootstrap](https://getbootstrap.com/docs/5.1/customize/color/)

## Estructura modular
Una estructura modular nos permitira contar con un orden e independencia entre los modulos
src
+--modulo
+---layouts
+---router
+---components
+---views

## Estructura del DayBookLayout
utilizaremos el cdn de fontawesome de [enlace cdn fa](https://cdnjs.com/libraries/font-awesome/5.15.3)
y lo pondremos en el index.html
~~~
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
~~~

## Compoenentes Entry List y Entry
