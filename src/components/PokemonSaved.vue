<script>
export default {

    props: {
        savedPokemon: Array  // Riceve la lista dei Pokémon salvati come prop
    },

    data() {

        return {
        }
    },

    methods: {
        removePokemon() {
            console.log('Cancella');

        }
    }
}
</script>

<template>

    <div>
        <h3>Pokémon salvati</h3>
        <ul>
            <li v-for="pokemon in savedPokemon">
                <span>{{ pokemon.name }}</span> <button type="button" @click="removePokemon"><i class="fa-solid fa-xmark"></i></button>
            </li>
        </ul>
    </div>


</template>

<style scoped lang="scss">
li {
    list-style-type: none;
}
</style>