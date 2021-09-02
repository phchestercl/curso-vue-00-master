<template>
  <h1>Pokemon : <span>{{id}}</span></h1>
  <div v-if="pokemon">
    <img :src="pokemon.data.sprites.front_default" alt="">

  </div>
</template>
<script>
import axios from 'axios';
export default {
  props:{
    id:{
      type:Number,
      required:true
    }
  },
  data(){
    return{
      /* id:this.$route.params.id */
      pokemon:null,
      imgSrc:null,
    }
  },
  created(){
    this.getPokemon()
  },
  watch:{
    id(){
      
      this.getPokemon()
    }
  },
  methods:{
    async getPokemon(){
      try {
        const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
        console.log(pokemon.data)
        this.pokemon=pokemon
      } catch (error) {
        console.log(error)
        // El usuario no tiena nada que hacer y hay que sacarlo de la pantalla
        this.$router.push('/')
        console.log('No hay nada que hacer aqui')
      }
    }
  }
}
</script>