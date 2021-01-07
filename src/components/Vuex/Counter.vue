<template>
    <div class="counter">
        <button @click="tang">Tang</button>
        <button @click="giam">Giam</button>
    </div>
</template>


<script>
export default {
    name: 'Counter',
    methods: {
        tang() {            
            // this.$store.state.result++
            this.$store.commit('increment', 40)
            console.log(this.$store.state.result)
        },
        giam() {
            this.$store.state.result--
        }
    }
}
</script>

<style scoped>
    button {
        margin-right: 10px;
    }
</style>