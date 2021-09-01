<template>
  <div>
    <div v-if="!pokemon">
      <h1>Espere mientras cargamos tu pokemon</h1>
    </div>
    <div v-else>
      <h1>Quien es este pokemon</h1>
      <!-- TODO  Poner Imagen -->
      <PokemonPicture :pokemonID="pokemon.id" :showPokemon="showPokemon" />
      <!-- TODOPoner listado de alternativas -->
      <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer" />
      <template v-if="showAnswer">
        <h2>{{ message }}</h2>
        <button @click="newGame">Nuevo Juego</button>
      </template>
    </div>
    <PokemonPuntuacion :correctas="resCorrecta" :erroneas="resIncorrecta" />
  </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonPuntuacion from "../components/PokemonPuntuacion.vue";
import getPokemonsOptions from "../helpers/getpokemonoptions";

export default {
  components: { PokemonPicture, PokemonOptions, PokemonPuntuacion },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: null,
      resCorrecta: 0,
      resIncorrecta: 0,
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonsOptions();
      /* console.log(this.pokemonArr) */
      const rndInt = Math.floor(Math.random() * 4); // Obtiene un valora aleatorio entre 0 y 3
      console.log(rndInt);
      this.pokemon = this.pokemonArr[rndInt];
    },
    checkAnswer(id) {
      console.log("Pokemon Page llamado " + id);
      console.log(this.pokemon.id);
      if (id === this.pokemon.id) {
        this.showPokemon = true;
        this.showAnswer = true;
        this.resCorrecta += 1;
        this.message = `Correcto es ${this.pokemon.name}`;
      } else {
        this.showPokemon = false;
        this.showAnswer = true;
        this.resIncorrecta -= 1;
        this.message = "Te equivocaste !!!";
      }
    },
    newGame() {
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemonArr = [];
      this.pokemon = null;
      this.mixPokemonArray();
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>
