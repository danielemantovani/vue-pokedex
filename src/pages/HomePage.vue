<script>
import Searchbar from '../components/Searchbar.vue';
import PokemonDetails from '../components/PokemonDetails.vue';


export default {
    components: {
        Searchbar,
        PokemonDetails,
    },

    data() {

        return {
            selectedPokemon: null,  // Non c'è ancora nessun Pokémon selezionato
        }
    },

    methods: {
        onPokemonFound(pokemonData) {
            this.selectedPokemon = pokemonData; // Aggiorna lo stato con i dati del Pokémon trovato
        }
    }
}
</script>

<template>
    <Searchbar @pokemon-found="onPokemonFound" />
    <PokemonDetails :pokemon="selectedPokemon" />

</template>

<style scoped lang="scss">

</style>