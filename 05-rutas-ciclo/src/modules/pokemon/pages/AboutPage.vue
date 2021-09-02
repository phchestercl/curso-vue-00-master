<template>
  <h1>About Page</h1>
  <hr>
  <h2>{{ name }}</h2>
  <button @click="onChangeName" >Cambiar Nombre</button>
</template>



<script>
export default {
  data(){
    return {name:'Philip'}
  },
  methods:{
    onChangeName(){
      (this.name==='Philip')?this.name="Daniela":this.name='Philip'
      console.log(this.name)
    }
  },
  beforeCreate(){
    console.log('beforeCreate')
    //Se usa para alguna de las validaciones
  },
  created(){
    console.log('created')
    //peticiones HTTP
  },
  beforeMount(){
    console.log('beforeMount')
  },
  mounted(){
    console.log('mounted')
  },
  beforeUpdate(){
    console.log('beforeUpdate')
  },
  updated(){
    console.log('updated')
  },
  activated(){
    console.log('activated')
  },
  deactivated(){
    console.log('deactivated')
  },
  beforeUnmount(){
    console.log('beforeUnmount')
  },
  unmounted(){
    console.log('unmounted')
    // buen lugar para hacer alguna limpiezas
  },
  errorCaptured(){
    console.log('errorCaptured')
  },
  renderTracked(){
    console.log('renderTracked')
  },
  renderTriggered(){
    console.log('renderTriggered')
  },
}
</script>