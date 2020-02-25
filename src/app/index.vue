<style module src='@/app/styles/index.sass'></style>

<script>
import Vue from 'vue'
import Form from '@/app/components/molecules/form.vue'
import Todo from '@/app/components/molecules/todo.vue'

export default Vue.extend ({
    components: {
        Form,
        Todo
    },
    methods: {
        formHandleSubmit(value) {
            this.$refs.todoRef.formHandleSubmit(value)
        }
    }
})
</script>

<template>
    <div :class='$style.container'>
        <div :class='$style.wrapper'>
            <Form
                v-on:formHandleSubmit='formHandleSubmit'
                label='＋'
            ></Form>
            <Todo
                ref='todoRef'
                label='－'
            ></Todo>
        </div>
    </div>
</template>