<style module src='@/app/styles/components/molecules/todo.sass'></style>

<script>
import Vue from 'vue'
import Button from '@/app/components/atoms/button.vue'
import List from '@/app/components/atoms/list.vue'

export default Vue.extend ({
    props: ['label'],
    components: {
        Button,
        List,
    },
    methods: {
        formHandleSubmit(value) {
            this.$refs.listRef.add(value)
        },
        todoHandleSubmit() {
            this.$refs.listRef.delete()
        }
    }
})
</script>

<template>
    <div :class='$style.container'>
        <List ref='listRef'></List>
        <div :class='$style.wrapper'>
            <Button
                v-on:handleSubmit='todoHandleSubmit'
                :label='label'
            ></Button>
        </div>
    </div>
</template>