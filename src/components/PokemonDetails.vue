<script>


export default {
    props: {
        pokemon: {
            type: Object,   //  La prop `pokemon` deve essere un oggetto
            
        }
    },

    data() {

        return {

        }
    }
}
</script>

<template>
    <div>
        <div v-if="!pokemon">Nessun Pokémon selezionato</div>
        <div v-else>
            <h2>{{ pokemon.name }}</h2>
            <p>Altezza: {{ pokemon.height }}</p>
            <p>Peso: {{ pokemon.weight }}</p>
        </div>
    </div>
    <div>
        <button>Salva Pokèmon</button>
    </div>

</template>

<style scoped lang="scss"></style>