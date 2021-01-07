<template>
    <div class="result">
        <p>Kết quả là {{ result }}</p>
    </div>
</template>

<script>
export default {
    computed: {
        result() {
            return this.$store.state.result
        }
    }
}
</script>