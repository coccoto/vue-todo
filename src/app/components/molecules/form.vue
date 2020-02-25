<style module src='@/app/styles/components/molecules/form.sass'></style>

<script>
import Vue from 'vue'
import Button from '@/app/components/atoms/button.vue'
import InputText from '@/app/components/atoms/InputText.vue'

export default Vue.extend ({
    props: ['label'],
    components: {
        Button,
        InputText
    },
    methods: {
        callInputText() {
            this.$refs.inputTextRef.formHandleSubmit()
        },
        formHandleSubmit(value) {
            this.$emit('formHandleSubmit', value)
        },
    }
})
</script>

<template>
    <div :class='$style.container'>
        <InputText
            ref='inputTextRef'
            v-on:formHandleSubmit='formHandleSubmit'>
        </InputText>
        <Button
            v-on:handleSubmit='callInputText'
            :label='label'
        ></Button>
    </div>
</template>