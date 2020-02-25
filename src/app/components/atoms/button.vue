<style module src='@/app/styles/components/atoms/button.sass'></style>

<script>
import Vue from 'vue'

export default Vue.extend ({
    props: ['label']
})
</script>

<template>
    <button
        :class='$style.button'
        type='button'
        v-on:click='$emit("handleSubmit")'
    >{{ label }}</button>
</template>