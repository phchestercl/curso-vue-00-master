<template>
    <div class="pokemon-container">
        <img :src="imgSrc"
              class="hidden-pokemon"
              alt="pokemon">
        <img v-if="showPokemon"
                :src="imgSrc" 
                class="fade-in"
                alt="pokemon">
        
    </div>

</template>

<script>
export default {
    name:'PokemonPicture',
    props:{
        pokemonID:{ type:Number, required:true, default:1},
        showPokemon:{ type:Boolean, required:true,default:false}
    },
   /*  data(){
        return {
            pokemonID:this.pokemonID,
            }
    }, */
    watch:{

    },

    computed:{
        imgSrc(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonID}.svg`
        }
    }

}
</script>

<style scope>
/* Pokemon Picture */
.pokemon-container {
    height: 200px;
}
img {
    height: 200px;
    position: absolute;
    right: 32%;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}
</style>