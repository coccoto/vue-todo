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
            this.$refs.refList.add(value)
        },
        todoHandleSubmit() {
            this.$refs.refList.delete()
        }
    }
})
</script>

<template>
    <div>
        <List ref='refList'></List>
        <Button
            v-on:handleSubmit='todoHandleSubmit'
            :label='label'
        ></Button>
    </div>
</template>