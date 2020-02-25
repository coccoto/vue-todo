<script>
import Vue from 'vue'

export default Vue.extend ({
    data: () => {
        return {
            value: ''
        }
    },
    methods: {
        formHandleSubmit() {
            this.$emit('formHandleSubmit', this.value)
        }
    }
})
</script>

<template>
    <input v-model='value'>
</template>