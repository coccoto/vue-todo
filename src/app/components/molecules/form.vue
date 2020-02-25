<style module src='@/app/styles/components/molecules/form.sass'></style>

<script>
import Vue from 'vue'
import Button from '@/app/components/atoms/button.vue'
import Enter from '@/app/components/atoms/enter.vue'

export default Vue.extend ({
    props: ['label'],
    components: {
        Button,
        Enter
    },
    methods: {
        callRefEnter() {
            this.$refs.refEnter.formHandleSubmit()
        },
        formHandleSubmit(value) {
            this.$emit('formHandleSubmit', value)
        },
    }
})
</script>

<template>
    <div :class='$style.container'>
        <Enter
            ref='refEnter'
            v-on:formHandleSubmit='formHandleSubmit'>
        </Enter>
        <Button
            v-on:handleSubmit='callRefEnter'
            :label='label'
        ></Button>
    </div>
</template>