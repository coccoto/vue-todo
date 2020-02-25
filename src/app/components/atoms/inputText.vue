<style module src='@/app/styles/components/atoms/inputText.sass'></style>

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
            this.value = ''
        }
    }
})
</script>

<template>
    <input
        :class='$style.input'
        v-model='value'>
</template>