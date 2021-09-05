<template>
<div>
    <h1>Counter - Vuex</h1>
    <!-- <h2>Direct access: {{ $store.state.count }}</h2> -->
    <h2>Direct access: {{ $store.state.counter.count }}</h2>

    <h2>Computed : {{countComputed}}</h2>
        <button @click="increment">+1</button>
        <button @click="incrementByFive">+5</button>
       <!--  <button @click="randInc">+Random</button> -->
       <button @click="incrementRandomInt"
        :disabled="isLoading"
        >+Random</button>
    <h2>MapState</h2>
    <h2>mapState : {{count}} </h2>
    <h2>lastMutation : {{lastMutation}} </h2>
    <h2>Direct getters : {{ squareCount }} </h2>

</div>
</template>

<script>

import { mapState,mapActions, mapGetters } from "vuex";
console.log({ mapState });
export default {
  computed: {
    countComputed() {
        //return this.$store.state.count; 
        return this.$store.state.counter.count; // Para llamadas del store counter
    },
    ...mapState('counter',["count", "lastMutation",'isLoading']),
    /* ...mapState({
           count: state=>state.count,
           lastMutation: state=>state.lastMutation
       }) */
    ...mapGetters('counter',['squareCount'])
  },
  methods: {
    increment() {
      //this.$store.commit("increment")  // => para llamadas del store global
      this.$store.commit("counter/increment") //==>> para llamadas del store del modulo counter
    },
    incrementByFive() {
      this.$store.commit("counter/incrementBy", 5)
      // si en lugar de utizar esta función quisieramos ejecutar una accion
      // definida en em mapActions, tendríamos que llamarla de la siguiente manera
      // this.incrementRandomInt()
    },
    // ...mapActions(['incrementRandomInt']) // si no hubiera un mudulo utilizariamos 
    //...mapActions('counter',['incrementRandomInt'])
    ...mapActions('counter',{
        incrementRandomInt:'incrementRandomInt'
    })
    /* randInc(){
        //este componente no tiene mucho sentido ya que lo unico que
        // es llamar una actions
        this.$store.dispatch('incrementRandomInt')
    } */
  },
};
</script>

<style>
</style>