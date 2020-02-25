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
            this.$refs.refTodo.formHandleSubmit(value)
        }
    }
})
</script>

<template>
    <div>
        <Form
            v-on:formHandleSubmit='formHandleSubmit'
            label='add'
        ></Form>
        <Todo
            ref='refTodo'
            label='delete'
        ></Todo>
    </div>
</template>