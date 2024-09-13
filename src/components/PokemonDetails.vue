<script>


export default {
    props: {
        pokemon: {
            type: Object,   //  La prop Pokemon deve essere un oggetto
        },
        onSave: {
            type: Function, // Funzione che viene passata dal genitore per salvare il Pokémon
        },
    },

        data() {

            return {

            }
        },
        methods: {

            onSaveClick() {
                this.onSave(); // Chiama la funzione passata dal genitore
                console.log('Salva');
            }

        }
    }
</script>

<template>
    <div>
        <div v-if="!pokemon">Nessun Pokémon selezionato</div>
        <div v-else>
            <h2>{{ pokemon.name }}</h2>
            <p>Altezza: {{ pokemon.height }} pollici</p>
            <p>Peso: {{ pokemon.weight }} libre</p>
        </div>
    </div>
    <div>
        <!-- Pulsante per salvare il Pokémon -->
        <button @click="onSaveClick">Salva Pokémon</button>
    </div>

</template>

<style scoped lang="scss"></style>