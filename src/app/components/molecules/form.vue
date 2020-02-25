<script>
import Vue from 'vue'
import Button from '@/app/components/atoms/button.vue'
import Item from '@/app/components/atoms/item.vue'

export default Vue.extend ({
    props: ['label'],
    components: {
        Button,
        Item
    },
    methods: {
        callRefItem() {
            this.$refs.refItem.formHandleSubmit()
        },
        formHandleSubmit(value) {
            this.$emit('formHandleSubmit', value)
        },
    }
})
</script>

<template>
    <div>
        <Item
            ref='refItem'
            v-on:formHandleSubmit='formHandleSubmit'>
        </Item>
        <Button
            v-on:handleSubmit='callRefItem'
            :label='label'
        ></Button>
    </div>
</template>