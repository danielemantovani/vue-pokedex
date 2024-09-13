<script>
export default {

    props: {
        savedPokemon: Array  // Riceve la lista dei Pokémon salvati come prop
    },

    data() {

        return {
        }
    }
}
</script>

<template>

    <h3>Pokémon salvati</h3>
    <ul>
        <li v-for="pokemon in savedPokemon">
            {{ pokemon.name }}
        </li>
    </ul>

</template>

<style lang="scss"></style>