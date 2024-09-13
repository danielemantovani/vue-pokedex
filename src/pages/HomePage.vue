<script>

import Searchbar from '../components/Searchbar.vue';
import PokemonDetails from '../components/PokemonDetails.vue';
import PokemonSaved from '../components/PokemonSaved.vue';

export default {
    components: {
        Searchbar,
        PokemonDetails,
        PokemonSaved,
    },

    data() {

        return {
            selectedPokemon: null,  // Non c'è ancora nessun Pokémon selezionato
            savedPokemon: [] // Lista dei Pokémon salvati
        }
    },

    methods: {
        onPokemonFound(pokemonData) {
            this.selectedPokemon = pokemonData; // Aggiorna la variabile selectedPokèmon con i Pokèmon cercato dall'utente
        },

        savePokemon() {
            if (this.selectedPokemon && !this.savedPokemon.includes(this.selectedPokemon)) {
                // Aggiungi il Pokémon selezionato alla lista solo se non è già presente
                this.savedPokemon.push(this.selectedPokemon);
            }
        }
    }
}

</script>

<template>

    <div class="text-center mt-5">
        <Searchbar @pokemon-found="onPokemonFound" />
        <PokemonDetails :pokemon="selectedPokemon" :onSave="savePokemon" />
        <PokemonSaved :savedPokemon="savedPokemon" />
    </div>

</template>

<style scoped lang="scss">

</style>