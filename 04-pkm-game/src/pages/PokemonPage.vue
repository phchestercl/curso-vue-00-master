<template>
  <div>
      <h1>Quien es este pokemon</h1>
      <!-- TODO  Poner Imagen -->
      <PokemonPicture :pokemonID="251" :showPokemon="false"/>
      <!-- TODOPoner listado de alternativas -->
      <PokemonOptions />
      
  </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import getPokemonsOptions from '../helpers/getpokemonoptions';


console.log(getPokemonsOptions().then(r=>console.log(r)))

export default {
  components: { PokemonPicture, PokemonOptions },

}
</script>
