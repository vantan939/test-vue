<template>
    <div>
        <p>Tuoi cua con la: {{ age }}</p>
        <button v-on:click="changeAge()">Change age</button>
    </div>
</template>

<script>
export default {
    name: 'UserDetail',
    props: {
        age: Number
    },
    data() {
        return {
            // msg: 'test'
        }
    },
    methods: {
        changeAge() {
            this.age = 20
            this.$emit('ageWasUpdated', this.age)
        }
    }
}
</script>