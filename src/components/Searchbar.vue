<script>

import axios from 'axios';

export default {
    data() {
        return {
            searchQuery: "",
        }

    },

    methods: {
        searchPokemon() {
            axios
                .get(`https://pokeapi.co/api/v2/pokemon/${this.searchQuery.toLowerCase().trim()}`)
                .then((response) => {
                    console.log(response.data);
                    this.$emit('pokemon-found', response.data);
                })

                .catch((error) => {
                    console.error("Errore nella richiesta:", error.response ? error.response.data : error.message);
                });

        }
    }
}
</script>

<template>
    <div>
        <input 
            type="text" 
            v-model="searchQuery" 
            @keyup.enter="searchPokemon"
            placeholder="Inserisci il nome del Pokèmon che vuoi cercare"/>
        <button @click="searchPokemon">Cerca</button>
    </div>

</template>

<style scoped lang="scss"></style>