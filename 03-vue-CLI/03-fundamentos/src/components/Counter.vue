<template>
  <div>
    <h2>{{ customTitle }}</h2>
    <p>{{ counter }} <sup>2</sup> {{ counter * counter }}</p>
    <p data-test-id="counter"> {{ counter}} </p>
    <div class="buttons-container">
        <button v-on:click="sumaUno">+1</button>
        <button @click="restaUno">-1</button>
        </div>
  </div>
</template>

<script>
export default {
  name: "Counter",
  /* props:['titulo-de-la-seccion','start'], */
  props:{
    tituloDeLaSeccion:String,
    start:{
      type:Number,
      default: 100,
      /* required: true, */
      validator(value){
        return value>=0
      }
    }
  },
  data() {
    return {
      counter: this.start,
    };
  },
  methods: {
    getSquareValue() {
      console.log("getSquareValue");
      return this.counter * this.counter;
    },
    sumaUno(){
        return this.counter+=1
    },
    restaUno(){
        this.counter-=1
    }
  },
  computed: {
    squareCounter() {
      console.log("computed squareCounter");
      return this.counter * this.counter;
    },
    customTitle(){
        return this.tituloDeLaSeccion||'Counter'
        /* if (!this.tituloDeLaSeccion) {
            return'Counter'
        } else {
            return this.tituloDeLaSeccion
        } */
    }
    
  },
};
</script>

<style>
button {
  background-color: #358f5c;
  border-radius: 4px;
  border: 1px solid whitesmoke;
  color: whitesmoke;
  cursor: pointer;
  margin: 5px;
  padding: 4px;
  transition: 0.3s ease-in-out;
  width:60px
}
button:hover{
    background-color: #224933;
    transition: 0.3s ease-in-out;
    color: whitesmoke;

}
</style>