<template>
<div>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <Counter titulo-de-la-seccion="Entraron" :start="5"/>
    <Counter  :start="6"/ -->
    <!-- <Counter titulo-de-la-seccion="Contador"/> -->
    <Indecision />
</div>
</template>

<script>

import Indecision from './components/Indecision.vue'
/* import Counter from '@/components/Counter.vue' */
import './css/styles.css'



export default {
  name: 'App',
  components: {
    /* Counter, */
    Indecision
    
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
