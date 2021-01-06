<template>
    <div>
        <p>Tuoi cua con la: {{ age }}</p>
        <button>Change age</button>
    </div>
</template>

<script>
export default {
    name: 'EditDetail',
    props: {
        age: Number
    },
    data() {
        return {
            // msg: 'test'
        }
    },
    methods: {
       
    }
}
</script>